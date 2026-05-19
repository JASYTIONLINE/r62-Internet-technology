---
title: Static Routing
studyLesson: true
lessonId: d2-l01
domain: 2
banner: Manually configured routes — when to use static routing and how to configure them on Cisco devices.
description: Learn static routing purpose, default routes, and typical configurations.
draft: false
enableToc: false
cssclasses:
  - study-lesson
---

<link rel="stylesheet" href="../../../../static/study/study-lesson.css">
<link rel="stylesheet" href="../../../../static/study/quiz.css">

<div class="study-page" data-domain="2" data-lesson-id="d2-l01">

<div id="study-chrome-mount"></div>

<header class="study-banner">
  <h1>Static Routing</h1>
  <p>Manually configured routes — when to use static routing and how to configure them on Cisco devices.</p>
</header>

<section class="study-section" id="intro">

## Introduction

**Learner objective:** Learn about static routing, both its purpose and typical configurations.

In this episode you will learn about static routing in modern networks: why administrators use it, where it fits alongside dynamic routing protocols, and how to read a basic Cisco static route entry.

</section>

<section class="study-section study-quiz" id="pre-quiz" data-quiz-phase="pre" data-lesson-id="d2-l01"></section>

<section class="study-section study-learning" id="learning">

## Learning material

### What is static routing?

Static routing is the process of **manually entering** routing instructions into the memory of routing devices. It is an alternative to dynamic routing protocols (OSPF, EIGRP, BGP, etc.) that exchange routes automatically.

### When to use static routing

| Use case | Why |
|----------|-----|
| **Default route** | Provides a path of last resort when no more specific route exists |
| **Very small networks** | Few subnets; routes rarely change |
| **Backup path** | Floating static or backup route when dynamic routing fails |
| **Stub networks** | Single exit point; no need for dynamic protocol overhead |

### Benefits

- Low CPU and bandwidth overhead (no routing protocol chatter)
- Simple to understand in small topologies
- **Full administrative control** over where packets are sent

### Cisco example

This static route sends traffic for **10.10.10.0/24** to next-hop **172.16.1.2**:

```text
ip route 10.10.10.0 255.255.255.0 172.16.1.2
```

### Must know for the exam

- Static routes are **administratively configured** and do not adapt automatically to topology changes.
- A **default route** is often written as `0.0.0.0/0` (or `0.0.0.0 0.0.0.0` with mask) pointing to an exit interface or next-hop IP.
- Static routing coexists with dynamic routing; know when each is appropriate.

### Additional resources

- [Static routing (Wikipedia)](https://en.wikipedia.org/wiki/Static_routing)

</section>

<section class="study-section study-quiz" id="post-quiz" data-quiz-phase="post" data-lesson-id="d2-l01"></section>

</div>

<script src="../../../../static/study/study-chrome.js" defer></script>
<script src="../../../../static/study/lesson-quiz.js" defer></script>
