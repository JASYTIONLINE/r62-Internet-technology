## 3-1-1: Examining Switching and Routing Issue

At the end of this episode, I will be able to:    

1. Identify and explain the significance of switching and routing issues, given a scenario.    

Learner Objective: *Identify and explain the significance of switching and routing issues, given a scenario*    

Description: In this episode, the learner will examine switching and routing issues that can affect network traffic. We will examine network loops, port roles, root bridge election, route selection issues and more.

--------  

* What Layer 2 services, such as STP, can cause network issues?
  + Forwarding loops
    - Symptom
      * Unintended traffic loops causing broadcast storms and network slowdowns
    - Common causes
      * Inadequate STP configuration
      * Failure to block redundant paths
    - Solution
      * Verify STP operation to ensure, correct identification and redundant path blocking
  + Root bridge selection
    - Symptom
      * Poor network performance due 
    - Common causes
      * Inefficient root bridge location
      * Default configuration leading to an unplanned device becoming the root bridge
    - Solution
      * Manually set bridge priority on the preferred root bridge (controlled root bridge election\)
  + Port roles
    - Root  
      * Non-root switches, having the best cost path to root bridge. These ports forward data to the root bridge.
    - Designated
      * Ports on root and designated switches
    - Blocked
      * All other ports to bridges or switches are in a blocked state. 
    - Symptom
      * Misrouted traffic or network segments becoming isolated
    - Common causes
      * Incorrect STP calculations or configuration errors assigning incorrect port roles
    - Solution
      * Check STP port roles \(root, designated, blocked\) 
      * Adjust configurations as needed
  + Port states
    - States
      * Disabled - The port is disabled, does not forward traffic
      * Blocking - In a blocking state, does not forward traffic
      * Listening -listens for and sends BPDUs
      * Learning - When a superior BPDU is received,  it will stop sending its own BPDUs, and will start relaying the superior BPDUs.
      * Forwarding - Forwarding traffic.
    - Symptom
      * Slow network convergence
      * Devices unable to communicate immediately after network changes
    - Common causes
      * Ports stuck in inappropriate states \(listening, learning\) for too long due to STP settings
    - Solution
      * Review and adjust STP timers and settings
      * Ensure ports transition to the forwarding state in a timely manner
* Configuration issues on managed switches, could this be the cause?
  + Incorrect VLAN Assignment
    - Symptom
      * Lack of connectivity
      * Access issues \(inlcuding unauthorized\)
    - Common causes
      * Assigning a device or port to the wrong VLAN
    - Solution
      * Ensure port VLAN configurations match the intended network segment for the connected devices
  + ACLs \(Access Control Lists\)
    - Used to permit or deny traffic through the network, impacting access and flow
    - Symptom
      * Blocking legitimate traffic
      * Allowing unauthorized
    - Common cause
      * Incorrectly configured ACLs 
    - Solution
      * Regularly review and update ACLs
      * align with network security policies and access requirements
* How about Layer 3 or routing issues?
  + Routing tables
    - Symptom
      * Misdirected or dropped traffic, inability to reach specific network segments.
    - Common causes
      * Incorrectly configured static routes, outdated or missing routes due to dynamic routing failures.
    - Solution
      * Verify the accuracy of routing table entries, update static routes, and ensure dynamic routing protocols are properly configured and operational.
  + Default routes
    - Symptom
      * Inability to access external networks or the internet.
    - Common causes
      * Absence of a default route or incorrect default gateway configuration.
    - Solution
      * Ensure that a correct default route is set and points to a valid gateway that can route traffic outside the local network.

--------
* Additional Resources:
	+ If applicable