## 2-1-1: Examining the Principles of Security

At the end of this episode, I will be able to:    

1. Identify and explain fundamental security concepts, given a scenario.    

Learner Objective: *Identify and explain fundamental security concepts, given a scenario*    

Description: In this episode, the learner will examine the security triangle and the goals of security. We will also explore methods to accomplish the principles of security.

--------  


* What is the security triangle?
	+ A diagrammatic was to view the main three goals of security.
* What are the main goals of security?
	+ Confidentiality
		- Ensuring that sensitive data is accessible only to authorized individuals or systems
	+ Integrity
		- Ensuring data remains accurate, consistent, and unaltered during storage, transmission, and processing.
	+ Availability
		- Ensuring authorized users have timely and uninterrupted access to resources and systems.
* Are there concepts to supporting the CIA triangle? 
	+ Non-repudiation - by ensuring that individuals cannot deny their actions or transactions, enhancing Accountability and contributing to the authenticity and Integrity of information exchanges.
	+ authenticity - by confirming the legitimacy of users, data sources, and communications, ensuring that information is accurate, trustworthy, and free from unauthorized alterations.
	+ Accountability - by establishing a traceable record of actions and activities that hold individuals responsible for their actions, contributing to the overall security and Integrity of data, systems and communications.
	+ Principle of least privilege - restricting user and system permissions to the minimum necessary level reduces potential attack surfaces and safeguards Confidentiality, Integrity, and Availability of resources.
* What are some methods or examples to accomplish these goals? 
	+ Confidentiality
		- Encryption - by converting sensitive data into a scrambled output using complex algorithms to prevent unauthorized access.
		- Access controls -  by regulating and restricting entry to sensitive information, allowing only authorized access to data, systems, or resources.
		- Secure communication channels - by employing encryption and authentication mechanisms that safeguard the transmission of sensitive data from unauthorized interception or eavesdropping.
	+ Integrity
		- Hashing - Hashing supports Integrity by generating fixed-size unique values from data, enabling verification of data integrity. Any alterations to the original data would result in a different hash value.
		- Digital signatures - by using cryptographic techniques to associate a unique digital identifier with a message or document, allowing recipients to verify both the sender's authenticity and the document's Integrity.
		- Integrity checks -  by comparing the current state of data or systems with a trusted reference, detecting any unauthorized changes or modifications that may have occurred.
	+ Availability
		- Redundancy -  by duplicating critical components or systems, ensuring that if one fails, another can seamlessly take over, minimizing downtime and maintaining continuous access to resources.
		- Load balancing -  by distributing incoming network traffic or workloads across systems, preventing systems from becoming overwhelmed.
		- Backups -  by creating copies of data and systems, enabling restoration in the event of data loss, system failures, or other disruptions, ensuring continuity of operations.
---------------------------

* Peform data integrity check to support the CIA Triangle
	+ Log in to *ACIWINCLIENT01* \(names may vary\)
	+ In the Windows *Taskbar* select the *Microsoft Edge* icon
	+ In the *Microsoft Edge* window using the address bar browse to and download the *Quickhash\#GUI* application:
		```
		https://www.quickhash-gui.org/downloads/
		```
	+ On the Windows *Taskbar* select the *File Explorer* icon and navigate to the following location:
		```
		C:\Users\currentuser\downloads
		```
	+ In the *File Explorer* window, right-click snd extract the *QuickHash-GUI-Windows-v\*\*\** file to the current location
	+ In the *Extract Compressed \(Zipped\) Folders* under *Select a Destination and Extract Files* ensure that the checkbox next to *Show extracted files when complete* is selected and choose *Extract*
	+ In the *File Explorer* popup window select the *64-Bit* folder and choose the *Quickhash-GUI* application
		- If a *Defender* popup appears select the *More info* hyperlink and choose *Run anyway*
	+ Minimize the *QuickHash* window
	+ On the Windows *Desktop* right-click and choose *New > Text Document*
	+ In the *Untitled - Notepad* window type the following:
		```
		Secret 1
		Secret 2
		Secret 3
		```
	+ In the *Untitled - Notepad* window from the options menu select *File > Save as*
	+ In the *Save As* window save the file to the following location:
		```
		C:\Users\currentuser\Desktop\version1.txt
		```
	+ Close the *Notepad* window
	+ Restore the *QuickHash* application
	+ In the *QuickHash* window select the *Files* tab
	+ In the *QuickHash > File* window under *Single File Hashing* choose *Select File*
	+ In the *Open existing file* window select the following file:
		```
		C:\Users\currentuser\Desktop\version1.txt
		```
	+ In the *QuickHash > File* window under the *Select File* button locate and mark down the *hash value*
		```
		Example: 24B40CEF852E4CDD764275626D23CEE21AFA85D7
		```
		- Note - this value will be checked in a later step to establish that integrity have been maintained.
	+ Minimize the *QuickHash* window
	+ On the Windows *Desktop*  double-click the *version1.txt* file 
	+ In the *version1.txt* file delete the following:
		```
		Secret 3
		```
	+ In the *version1.txt* window select *File > Save*
	+ Restore the *QuickHash* window
	+ \(If necessary\) In the *QuickHash* window select the *Files* tab
	+ In the *QuickHash > File* window under *Single File Hashing* choose *Select File*
	+ In the *Open existing file* window select the following file:
		```
		C:\Users\currentuser\Desktop\version1.txt
		```
	+ In the *QuickHash > File* window under the *Select File* button locate and mark down the *hash value*
		```
		Example: 753A216B99727B425C55CBC15B377C34BA1E0139
		```
	+ In the *QuickHash > File* window under *Expected Hash Value* past the value copied from the previous step.
	+ In the *Quickhash-GUI* window examine the warning
		- Note - use this value to compare the value marked down in previous step. Notice how the values are different meaning integrity has not been maintained. 
	
-----------------------

* Additional Resources:
	+ If applicable