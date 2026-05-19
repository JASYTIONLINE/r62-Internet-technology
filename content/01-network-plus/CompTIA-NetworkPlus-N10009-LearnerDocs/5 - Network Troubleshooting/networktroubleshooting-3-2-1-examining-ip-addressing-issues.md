## 3-2-1: Examining IP Addressing Issues

At the end of this episode, I will be able to:    

1. Identify and explain the significance of IP addressing issues, given a scenario.    

Learner Objective: *Identify and explain the significance of IP addressing issues, given a scenario.*    

Description: In this episode, the learner will examine common IP addressing issues in today's TCP/IP networks. We will explore address pool exhaustion, incorrect IP addresses, subnet masks, gateway settings, and more.

--------  

* What can cause a 169.254.x.y address?
  + Address Pool Exhaustion
    - Occurs when all IP addresses in a designated pool are in use, preventing new device connections
    - Common issues
      * High number of connected devices exceeding the available addresses in the DHCP scope
    - Solutions
      * Expand the DHCP address pool or reduce lease time to free up addresses
   + Duplicate IP Address
    - Two hosts are assigned the same IP address on a network
    - Common issues
      * Manual configuration errors
      * DHCP misconfigurations
    + Solutions
      * Use DHCP reservation for critical devices
      * Verify static IPs do not overlap with the DHCP scope
* Could this be from misconfigured network adapter settings?
  + Incorrect Default Gateway
    - The designated router IP for outgoing traffic is wrongly configured, hindering external network access
    - Solutions
      * Verify and correct the default gateway settings on affected devices
      * Reconfigure and update DHCP server settings
  + Incorrect IP Address
    - An IP address that does not align with the intended network configuration is assigned to a device
    - Solutions 
      * Ensure static IP addresses are correctly assigned
      * Reconfigure and update DHCP server settings
  + Incorrect Subnet Mask
    + An improperly configured subnet mask can lead to incorrect network or broadcast addresses on devices
    + Solutions
      * Double-check and correct subnet mask configurations on individual devices
      * Reconfigure and update DHCP server settings* 
* You mentioned DHCP scope options, what are they?
  + Configurable settings within a DHCP server
  + Provide clients with additional parameters:
    - Default gateway
    - DNS servers
    - Subnet mask
* These setting can be manually or setting dynamically?
  + Manually which is also called static, as the setting do not change
    - Not scalable
    - Prone to human error
  + Dynamically, through the DHCP service
    - Greater scability
    - Less prone to human error
    - Service outages and reconfigurations can cause issues
 

--------
* Additional Resources:
	+ If applicable
  
  
  + Common issues 
      * Static or manual configuration errors
      * DHCP misconfigurations