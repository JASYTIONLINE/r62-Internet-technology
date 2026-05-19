## 1-4-1: Establishing an Action Plan in Troubleshooting

At the end of this episode, I will be able to:    

1. Identify and explain the significance of establishing an action plan in troubleshooting, given a scenario.    

Learner Objective: *Identify and explain the significance of establishing an action plan in troubleshooting, given a scenario.*    

Description: In this episode, the learner will examine the process of the importance of developing an action plan in troubleshooting. We will explore techniques such as carefully considering the impact and changes that can have on the network and users.

--------  

* What is an action in troubleshootng?
  + Developing a step-by-step approach to implementing a solution
  + Also, carefully considering the potential impacts on the network, system or users. 
* What are some techniques to creating an plan of action:
  + Detail the steps required to fix the issue, such as:
    - Configurations
    - Hardware replacements
    - Software updates
  + Evaluate how these actions might affect:
    - Network operations
    - User experience
    - Security
  + The goal is to mitigate adverse effects.
  + Implement a carefully detailed rollback plan
    - Reverses the changes made by solution implementation.
    - Sets a predefined timeline amd threshold to implement the rollback plan, should the implementation fail
* Can you give us a couple of examples?
  + Switch configuration issue:
    - Plan 
      * Modify the switch configuration to eliminate a forwarding loop.
      * Adding new VLAN configuration, to isolate communication for VoIP system and apply prioritized forwarding.
    - Potential effects
      * The company has an expectancy of temporary network downtime during the switch reboot
      * VoIP systems will be effected by temporary configuration changes
      * Scheduled during off-peak hours to reduce user impact.
  + Hypervisor host server configuration changes :
    - Plan
      * Modify settings on the host server's virtual networks
    - Potential effects
      * The company has an expectancy that virtual machines currently running on the host server may experience intermittent network disruptions
      * Real-time or near real-time transactions may be queued for loss protection, impacting platform performance
      * Send advanced notification to affected users can minimize inconvenience.

--------
* Additional Resources:
	+ If applicable