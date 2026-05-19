## 1-6-1: Verification and Documentation in Troubleshooting

At the end of this episode, I will be able to:    

1. Identify and explain the importance of verifying system functionality and documentation in troubleshooting, given a scenario.    

Learner Objective: *Identify and explain the importance of verifying system functionality and documentation in troubleshooting, given a scenario.*    

Description: In this episode, the learner will examine the verification and documentation steps when applying a troubleshooting methodology. We will explore the techniques and examples of these steps in networks.

--------  

* When we are trying to verify that are solution did indeed work? 
  + Start with a confirmation of resolution, post-implementation
    - Confirm that the original problem has been resolved by retesting under the same conditions that initially identified the issue.
    - Engage with the end-users or stakeholders to ensure the solution meets the needs, resolving the issue from their perspective.
  + Perform system-wide and platform-wide checks
    - Perform a comprehensive system checks, ensuring the implemented solution has not adversely affected other areas of the network.
    - Monitor system performance and logs to detect any unintended consequences of the changes made.
* If we have confirmed that our implementation has solved the problem, what is next?
  + Provide final documentation \(may be located in more than a single location\)
    - Update network documentation to reflect any changes made during the troubleshooting process.
    - Document the problem, the analysis, the implemented solution, and the verification process for future reference and learning.
* Can you provide a few examples of these steps?
  + Examples
    - Switch Reconfiguration
      * Perform confirmation testing
        + After reconfiguring the switch, conduct tests to ensure network stability and VoIP quality.
      * System-wide Checks
        + Verify that the new VLAN settings and prioritization rules have not negatively impacted other network traffic.
      * Final Documentation
        + Record the details of the switch reconfiguration
          - Configuration changes
          - The reasoning or justification behind the changes
          - The results of post-implementation testing
    - Virtualization host reconfiguration
      * Perform confirmation testing
        - Test connectivity and network performance for all VMs running on the host
        - Ensure the VMs have not been adversely affected by the changes.
        - Perform system-wide and platform-wide checks
        - Perform continuous monitoring on the host and other VMs to identify any unintended side effects of the network adapter reconfiguration.
      * Final Documentation
        - Record the changes made to the virtual network adapter settings
        - Record the reasoning or justification for the change
        - Record the outcomes of the verification process.

--------
* Additional Resources:
	+ If applicable