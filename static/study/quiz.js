// CompTIA Network+ Practice Exam - Quiz Logic
// Handles quiz navigation, scoring, and results

class QuizApp {
    constructor(config = {}) {
        this.config = {
            passPercent: 95,
            mode: "exam",
            questionCount: null,
            quizId: "final-exam",
            domainFilter: null,
            poolFilter: null,
            tagFilter: null,
            lessonId: null,
            lessonPhase: null,
            questionIds: null,
            rootEl: null,
            idPrefix: null,
            ...config,
        };
        this.config.rootEl =
            this.config.rootEl ||
            document.getElementById("practice-exam-app") ||
            document.body;
        this.config.idPrefix =
            this.config.idPrefix || this.config.rootEl?.dataset?.idPrefix || null;
        this.questions = [];
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.reviewed = {};
        this.showExplanations = false;
        this.results = null;

        this.applyModeUI();
        this.initializeEventListeners();
    }

    applyModeUI() {
        const root = this.config.rootEl;
        const settings = root?.querySelector(".quiz-settings");
        if (
            settings &&
            (this.config.mode === "quiz" ||
                this.config.mode === "lesson" ||
                this.config.mode === "section" ||
                this.config.questionCount)
        ) {
            settings.classList.add("hidden");
        }
        const header = root?.querySelector(".header-content .exam-info");
        if (header && this.config.mode === "quiz") {
            header.textContent = `Check-in | Pass: ${this.config.passPercent}%`;
        }
        if (header && this.config.mode === "lesson") {
            header.textContent = `${this.config.lessonPhase === "pre" ? "Pre" : "Post"}-quiz | Pass: ${this.config.passPercent}%`;
        }
        if (header && this.config.mode === "section") {
            header.textContent = `Section quiz | Pass: ${this.config.passPercent}%`;
        }
        if (root && this.config.mode === "lesson") {
            root.classList.add("lesson-quiz-compact");
        }
    }

    initializeEventListeners() {
        const root = this.config.rootEl;
        const q = (id) => root.querySelector(`#${id}`) || document.getElementById(id);
        q("start-btn")?.addEventListener("click", () => this.startQuiz());
        q("next-btn")?.addEventListener("click", () => this.nextQuestion());
        q("prev-btn")?.addEventListener("click", () => this.previousQuestion());
        q("review-btn")?.addEventListener("click", () => this.toggleReview());
        q("submit-btn")?.addEventListener("click", () => this.submitQuiz());
        q("restart-btn")?.addEventListener("click", () => this.restartQuiz());
        q("review-all-btn")?.addEventListener("click", () => this.reviewAllQuestions());
    }

    el(id) {
        const fullId = this.config.idPrefix ? `${this.config.idPrefix}-${id}` : id;
        return (
            this.config.rootEl?.querySelector(`#${fullId}`) ||
            document.getElementById(fullId)
        );
    }

    startQuiz() {
        const select = this.el("question-count");
        let questionCount = this.config.questionCount;
        if (!questionCount) {
            if (this.config.mode === "lesson") {
                questionCount = this.questions.length;
            } else {
                questionCount = parseInt(select?.value || "90", 10);
            }
        }

        this.questions = [...window.quizQuestions];
        this.shuffleArray(this.questions);
        this.currentQuestions = this.questions.slice(
            0,
            Math.min(questionCount, this.questions.length),
        );
        
        // Reset state
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.reviewed = {};
        this.showExplanations = false;
        this.results = null;
        
        // Update UI
        this.el("total-questions").textContent = this.currentQuestions.length;
        this.el("current-question").textContent = 1;

        this.showScreen("quiz-screen");
        this.displayQuestion();
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNum = this.currentQuestionIndex + 1;
        
        // Update question number and text
        this.el("q-num").textContent = questionNum;
        this.el("current-question").textContent = questionNum;
        this.el("question-text").textContent = question.question;

        this.el("domain-tag").textContent = `Domain ${question.domain}`;
        
        // Display options
        this.displayOptions(question);
        
        // Update progress
        this.updateProgress();
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update status
        this.updateQuestionStatus();
        
        // Hide explanation initially
        this.el("explanation")?.classList.add("hidden");
    }

    displayOptions(question) {
        const container = this.el("options-container");
        container.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = index;
            radio.id = `option-${index}`;
            
            // Check if this option was previously selected
            const questionId = question.id;
            if (this.answers[questionId] === index) {
                radio.checked = true;
                optionDiv.classList.add('selected');
            }
            
            radio.addEventListener('change', () => this.selectAnswer(question, index));
            
            const label = document.createElement('label');
            label.htmlFor = `option-${index}`;
            label.textContent = option;
            label.style.cursor = 'pointer';
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            
            // Make entire div clickable
            optionDiv.addEventListener('click', (e) => {
                if (e.target !== radio) {
                    radio.checked = true;
                    this.selectAnswer(question, index);
                }
            });
            
            container.appendChild(optionDiv);
        });
    }

    selectAnswer(question, answerIndex) {
        const questionId = question.id;
        this.answers[questionId] = answerIndex;
        
        // Update UI
        const options = document.querySelectorAll('.option');
        options.forEach((opt, idx) => {
            opt.classList.remove('selected');
            if (idx === answerIndex) {
                opt.classList.add('selected');
            }
        });
        
        // Show explanation if enabled
        if (this.showExplanations) {
            this.showExplanation(question, answerIndex);
        }
        
        this.updateQuestionStatus();
        this.updateNavigationButtons();
    }

    showExplanation(question, selectedAnswer) {
        const explanationDiv = this.el("explanation");
        const explanationText = this.el("explanation-text");
        const explanationIcon = this.el("explanation-icon");
        
        const isCorrect = selectedAnswer === question.correct;
        
        explanationDiv.classList.remove('hidden', 'correct', 'incorrect');
        explanationDiv.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        explanationIcon.textContent = isCorrect ? '✓' : '✗';
        explanationText.textContent = question.explanation;
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    toggleReview() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionId = question.id;
        
        if (this.reviewed[questionId]) {
            delete this.reviewed[questionId];
        } else {
            this.reviewed[questionId] = true;
        }
        
        this.updateQuestionStatus();
    }

    updateNavigationButtons() {
        const prevBtn = this.el("prev-btn");
        const nextBtn = this.el("next-btn");
        const submitBtn = this.el("submit-btn");
        
        // Previous button
        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Next/Submit button
        const isLastQuestion = this.currentQuestionIndex === this.currentQuestions.length - 1;
        if (isLastQuestion) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        this.el("progress-fill").style.width = `${progress}%`;
        this.el("progress-percent").textContent = Math.round(progress);
    }

    updateQuestionStatus() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionId = question.id;
        const answeredStatus = this.el("answered-status");
        const reviewStatus = this.el("review-status");
        
        if (this.answers[questionId] !== undefined) {
            answeredStatus.textContent = 'Answered';
            answeredStatus.style.background = '#d4edda';
            answeredStatus.style.color = '#155724';
        } else {
            answeredStatus.textContent = 'Not Answered';
            answeredStatus.style.background = '#fff3cd';
            answeredStatus.style.color = '#856404';
        }
        
        if (this.reviewed[questionId]) {
            reviewStatus.classList.remove('hidden');
        } else {
            reviewStatus.classList.add('hidden');
        }
    }

    submitQuiz() {
        // Calculate results
        this.calculateResults();
        
        // Display results
        this.showResults();
    }

    calculateResults() {
        let correct = 0;
        let incorrect = 0;
        let total = this.currentQuestions.length;
        const domainStats = {
            1: { correct: 0, total: 0, name: 'Networking Concepts' },
            2: { correct: 0, total: 0, name: 'Network Implementation' },
            3: { correct: 0, total: 0, name: 'Network Operations' },
            4: { correct: 0, total: 0, name: 'Network Security' },
            5: { correct: 0, total: 0, name: 'Network Troubleshooting' }
        };
        
        const incorrectQuestions = [];
        
        this.currentQuestions.forEach(question => {
            const questionId = question.id;
            const userAnswer = this.answers[questionId];
            const isCorrect = userAnswer === question.correct;
            
            domainStats[question.domain].total++;
            
            if (isCorrect) {
                correct++;
                domainStats[question.domain].correct++;
            } else {
                incorrect++;
                domainStats[question.domain].correct += 0;
                incorrectQuestions.push({
                    question,
                    userAnswer: userAnswer !== undefined ? userAnswer : null
                });
            }
        });
        
        const score = Math.round((correct / total) * 100);
        const reviewedCount = Object.keys(this.reviewed).length;
        
        this.results = {
            score,
            correct,
            incorrect,
            total,
            reviewedCount,
            domainStats,
            incorrectQuestions,
            passed: score >= this.config.passPercent,
        };
    }

    persistResults() {
        if (!window.JasytiProgress || !this.results) return;
        const { score, passed, domainStats } = this.results;
        if (this.config.mode === "exam") {
            const domains = {};
            Object.keys(domainStats).forEach((k) => {
                const s = domainStats[k];
                if (s.total > 0) {
                    domains[k] = Math.round((s.correct / s.total) * 100);
                }
            });
            JasytiProgress.saveExamResult({ score, passed, domains });
        } else {
            JasytiProgress.markQuizPassed(this.config.quizId, passed, score);
        }
    }

    showResults() {
        this.showScreen('results-screen');

        const results = this.results;
        this.persistResults();
        
        // Update score display
        this.el("final-score").textContent = results.score;

        const passFailDiv = this.el("pass-fail");
        passFailDiv.textContent = results.passed ? 'PASS' : 'FAIL';
        passFailDiv.className = `pass-fail ${results.passed ? 'pass' : 'fail'}`;
        
        // Update score ring
        const circumference = 2 * Math.PI * 90; // radius = 90
        const offset = circumference - (results.score / 100) * circumference;
        this.el("score-ring").style.strokeDashoffset = offset;
        this.el("score-ring").style.stroke = results.passed
            ? "var(--success-color)"
            : "var(--danger-color)";

        this.el("correct-count").textContent = results.correct;
        this.el("incorrect-count").textContent = results.incorrect;
        this.el("reviewed-count").textContent = results.reviewedCount;
        this.el("total-answered").textContent = results.total;
        
        // Display domain breakdown
        this.displayDomainBreakdown(results.domainStats);
        
        // Display incorrect answers review
        this.displayIncorrectReview(results.incorrectQuestions);
    }

    displayDomainBreakdown(domainStats) {
        const container = this.el("domain-stats");
        container.innerHTML = '';
        
        Object.keys(domainStats).forEach(domainNum => {
            const stats = domainStats[domainNum];
            if (stats.total === 0) return;
            
            const percentage = Math.round((stats.correct / stats.total) * 100);
            
            const item = document.createElement('div');
            item.className = 'domain-stat-item';
            
            item.innerHTML = `
                <div class="domain-stat-header">
                    <span>Domain ${domainNum}: ${stats.name}</span>
                    <span>${stats.correct}/${stats.total} (${percentage}%)</span>
                </div>
                <div class="domain-stat-bar">
                    <div class="domain-stat-fill" style="width: ${percentage}%">
                        ${percentage}%
                    </div>
                </div>
            `;
            
            container.appendChild(item);
        });
    }

    displayIncorrectReview(incorrectQuestions) {
        const container = this.el("review-container");
        
        if (incorrectQuestions.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--success-color); font-weight: 600;">Perfect! No incorrect answers to review.</p>';
            return;
        }
        
        container.innerHTML = '';
        
        incorrectQuestions.forEach((item, index) => {
            const question = item.question;
            const userAnswer = item.userAnswer;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            let userAnswerText = 'Not answered';
            if (userAnswer !== null) {
                userAnswerText = question.options[userAnswer];
            }
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${question.question}
                </div>
                <div class="review-answer correct-answer">
                    <strong>Correct Answer:</strong> ${question.options[question.correct]}
                </div>
                <div class="review-answer your-answer">
                    <strong>Your Answer:</strong> ${userAnswerText}
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            
            container.appendChild(reviewItem);
        });
    }

    restartQuiz() {
        this.showScreen('start-screen');
    }

    reviewAllQuestions() {
        // Switch back to quiz screen and show all questions with answers
        this.showScreen('quiz-screen');
        this.showExplanations = true;
        this.currentQuestionIndex = 0;
        this.displayQuestion();
    }

    showScreen(screenId) {
        const root = this.config.rootEl;
        const fullId = this.config.idPrefix ? `${this.config.idPrefix}-${screenId}` : screenId;
        root.querySelectorAll(".screen").forEach((screen) => {
            screen.classList.remove("active");
        });
        const target =
            root.querySelector(`#${fullId}`) || document.getElementById(fullId);
        target?.classList.add("active");
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

function parseList(value) {
    if (!value) return null;
    return value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
}

function filterQuestions(questions, config) {
    let filtered = [...questions];

    if (config.questionIds?.length) {
        const set = new Set(config.questionIds);
        filtered = filtered.filter((q) => set.has(q.id) || set.has(q.bankId));
    }
    if (config.domainFilter) {
        filtered = filtered.filter((q) => q.domain === config.domainFilter);
    }
    if (config.lessonId) {
        filtered = filtered.filter((q) => q.lessonId === config.lessonId);
    }
    if (config.poolFilter) {
        filtered = filtered.filter((q) =>
            (q.pools || []).includes(config.poolFilter),
        );
    }
    if (config.lessonPhase) {
        filtered = filtered.filter((q) =>
            (q.pools || []).includes(config.lessonPhase),
        );
    }
    if (config.tagFilter?.length) {
        filtered = filtered.filter((q) =>
            (q.tags || []).some((t) => config.tagFilter.includes(t)),
        );
    }
    return filtered;
}

async function resolveQuizConfig(root) {
    const base =
        window.JasytiProgress?.getStaticBase() ||
        root.dataset.staticBase ||
        "/static/study";
    const config = {
        rootEl: root,
        questionsUrl:
            root.dataset.questionsUrl || `${base}/questions/question-bank.json`,
        passPercent: parseInt(root.dataset.passPercent || "95", 10),
        mode: root.dataset.mode || "exam",
        questionCount: root.dataset.questionCount
            ? parseInt(root.dataset.questionCount, 10)
            : null,
        quizId: root.dataset.quizId || "final-exam",
        domainFilter: root.dataset.domainFilter
            ? parseInt(root.dataset.domainFilter, 10)
            : null,
        poolFilter: root.dataset.poolFilter || null,
        tagFilter: parseList(root.dataset.tagFilter),
        lessonId: root.dataset.lessonId || null,
        lessonPhase: root.dataset.quizPhase || null,
        questionIds: parseList(root.dataset.questionIds),
        idPrefix: root.dataset.idPrefix || null,
    };

    if (config.mode === "exam" && !root.dataset.questionsUrl) {
        config.questionsUrl = `${base}/questions/exam.json`;
    }

    if (config.mode === "lesson" && config.lessonId && config.lessonPhase) {
        config.quizId = `${config.lessonId}-${config.lessonPhase}`;
        config.passPercent = parseInt(root.dataset.passPercent || "80", 10);
        try {
            const idxRes = await fetch(
                `${base}/questions/lessons/${config.lessonId}.json`,
            );
            if (idxRes.ok) {
                const idx = await idxRes.json();
                config.questionIds =
                    config.lessonPhase === "pre" ? idx.pre : idx.post;
            }
        } catch {
            /* optional */
        }
    }

    const quizParam = new URLSearchParams(window.location.search).get("quiz");
    const quizId = quizParam || config.quizId;
    if (quizParam) {
        try {
            const manifestRes = await fetch(`${base}/course-manifest.json`);
            if (manifestRes.ok) {
                const manifest = await manifestRes.json();
                const step = manifest.steps?.find((s) => s.id === quizId);
                if (step) {
                    config.quizId = step.id;
                    config.mode = step.type === "exam" ? "exam" : "quiz";
                    config.passPercent = step.passPercent ?? config.passPercent;
                    config.questionCount = step.questionCount ?? config.questionCount;
                    if (step.questionFilter?.domain) {
                        config.domainFilter = step.questionFilter.domain;
                    }
                    if (step.questionFilter?.tags) {
                        config.tagFilter = step.questionFilter.tags;
                    }
                    if (step.questionFilter?.pool) {
                        config.poolFilter = step.questionFilter.pool;
                    }
                    if (step.questionFilter?.tags) {
                        config.tagFilter = step.questionFilter.tags;
                    }
                    if (step.slug?.includes("section-") && step.slug.includes("-quiz")) {
                        config.mode = "section";
                    }
                }
            }
        } catch {
            /* manifest optional */
        }
    }
    return config;
}

async function initQuizRoot(root) {
    if (!root || root.dataset.quizInitialized === "true") return;
    try {
        const config = await resolveQuizConfig(root);
        const response = await fetch(config.questionsUrl);
        if (!response.ok) throw new Error(`Failed to load ${config.questionsUrl}`);
        const data = await response.json();
        let questions = data.questions || [];
        questions = filterQuestions(questions, config);
        if (questions.length === 0) {
            throw new Error("No questions available for this quiz.");
        }
        root.dataset.quizInitialized = "true";
        window.quizQuestions = questions;
        new QuizApp(config);
    } catch (error) {
        console.error("Error loading quiz:", error);
        const msg = root.querySelector(".quiz-load-error");
        if (msg) msg.textContent = `Could not load quiz: ${error.message}`;
        else
            root.insertAdjacentHTML(
                "beforeend",
                `<p class="quiz-load-error">${error.message}</p>`,
            );
    }
}

window.JasytiQuiz = { initQuizRoot, filterQuestions, resolveQuizConfig };

async function bootQuizzes() {
    for (const root of document.querySelectorAll(".lesson-quiz-root")) {
        await initQuizRoot(root);
    }
    const main = document.getElementById("practice-exam-app");
    if (main?.dataset.mounted === "true") {
        await initQuizRoot(main);
    }
}

document.addEventListener("DOMContentLoaded", bootQuizzes);
document.addEventListener("nav", bootQuizzes);
