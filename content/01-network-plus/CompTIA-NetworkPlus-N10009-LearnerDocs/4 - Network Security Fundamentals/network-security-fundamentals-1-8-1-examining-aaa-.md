## 2-2-3: Examining Authentication, Authorization, and Accounting (AAA) 

At the end of this episode, I will be able to:    

1. Identify and explain the importance of authentication, authorization and accounting (AAA), given a scenario.    

Learner Objective: *Identify and explain the importance of authentication, authorization and accounting (AAA), given a scenario*    

Description: In this episode, the learner will examine a technology used to centrally manage authentication, authorization and accounting called the Remote Authentication Dial-in User Service or RADIUS. 

--------  


* What is authentication?
	+ The process of validating the identity of a user or system
* What is authorization?
	+ Granting or denying specific permissions and access rights to authenticated users or entities, controlling their actions within a system or resource.
* What is accounting?
	+ In the context of AAA, the process of tracking and recording user activities and resource usage within a system, providing an audit trail of actions for accountability, compliance, and monitoring purposes.
* Can we bring AAA together?
	+ These are brought together commonly for remote access with the Remote Authentication Dial-In User Service or RADIUS
	+ RADIUS \(Remote Authentication Dial-In User Service\) is a networking protocol to centralize and manage user authentication, authorization, and accounting (AAA) for remote network access. \(RFC 2865\)
* Where is RADIUS commonly used?
	+ Network Access control: Authenticate and authorize users accessing a network, such as Wi-Fi or VPN, ensuring only authorized individuals gain access.
	+ Wireless Networking: Secure access to Wi-Fi networks in enterprises and public hotspots by verifying user credentials.
	+ Remote Access Servers: Control access to remote access servers like dial-up and virtual private network (VPN) servers.
	+ Internet Service Providers (ISPs): Authenticate and authorize users connecting to ISP networks, managing bandwidth and services.
* What ports does the RADIUS protocol use?
	+ UDP port 1645 or 1812 for authentication
	+ UDP port 1646 or 1813 for accounting.  
----------

* Additional Resources:
	+ If applicable