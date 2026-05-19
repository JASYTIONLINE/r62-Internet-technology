## 2-2-1: Examining Physical Interface Issues

At the end of this episode, I will be able to:    

1. Identify and explain the significance of interface metrics, given a scenario.

Learner Objective: *Identify and explain the significance of interface metrics, given a scenario*    

Description: In this episode, the learner will examine various interface metrics on network devices that can be used to identify, diagnose, and resolve common hardware issues. We will explore CRCs, runts, giants, drops, port status, and more.

--------  

* What can interface metrics help us to troubleshoot the network?
  + Problems at the network interface level can indicate data transmission, issues, and efficiency.
* What are some of the metrics we can utilize?
  + Increasing interface counters
    - Indicate various types of errors and issues affecting network performance and data integrity
  + Cyclic redundancy checks \(CRCs\)
    - An error-detection code or EDC used to detect errors, when forwarding data
    - Common issues
      * A large CRC failure can be a sign of a damaged network adapter, cabling, or electromagnetic interference
    - Solutions
      * Check and replace faulty cables or network adapters
      * Ensure proper grounding of all components
  + Runts
    - Small packets that are smaller than the minimum allowed size
    - Can indicate collisions or other errors
    - Common issues
      * Can be caused by collisions in half-duplex modes
      * Can be caused by undersized packets due to configuration errors
    - Solutions
      * Check duplex settings
      * Ensure proper configuration
      * Update device firmware.
  + Giants
    - Packets that exceed the maximum permitted size
    - May suggest configuration errors or faulty hardware
    - Common issues
      * Can result from misconfigured devices allowing oversized packets or malfunctioning hardware.
    - Solutions - Verify network device configurations for MTU sizes and replace any malfunctioning hardware.
  + Drops
    - Occurs when the interface discards packets due to errors, full buffers, or other transmission issues.
    - Common issues
      * Network congestion
      * Buffer overflow
      * Misconfigured QoS settings
    - Solutions
      * Increase buffer size
      * Adjust QoS policies
      * Resolve network congestion issues.
  + Port status
    - Reflects the current operational state of network ports.
    - Error disabled - a port state where the interface is disabled due to a network error or policy violation.
    - Common issues
      * Triggered by port security violations, BPDU guard, or other protective mechanisms
    - Solutions
      * Reset the port and re-enable it manually if necessary.
    + Administratively down
      + A port condition set by network administrators to disable the interface manually.
      + Common issues
        * Intentionally set for maintenance, security, or other administrative reasons
      + Solutions
        * Re-enable the port through configuration once the reason for shutdown is addressed
    + Suspended
      + The port is temporarily disabled due to issues like violation of port security settings.
      + Common issues
        * Often a result of exceeding allowed MAC addresses or other security policy violations.
      + Solutions
        * Clear the security violation
        * Adjust port security settings as needed
* What about hardware issues?
  + Power budget exceeded \(Power over Ethernet\)
    - Common issues
      * Devices demanding more power than the PoE switch can supply
      * This can lead to underperformance or device shutdown
    - Solutions
      * Upgrade to a switch with a higher power budget or reduce the number of PoE devices connected
  + Incorrect standard \(Power over Ethernet\)
    - Common issues
      * Devices and switches may not operate efficiently if they support different PoE standards \(IEEE 802.3af vs. 802.3at\)
    - Solutions
      * Ensure that all devices and switches are compatible with each other
  + Transceiver mismatch
    - Common issues
      * Incompatibility between transceiver types \(mismatch between SFP, SFP+, QSFP, QSFPO+ modules\) can lead to connectivity failures
    - Solutions
      * Use compatible transceivers, with matching specifications required by the networking equipment
  + Signal strength
    - Common issues
      * Weak or degraded signals 
      * Poor quality cables, excessive distance, or incorrect transceiver types
    - Solutions
      * Check cable quality and length
      * Ensure correct transceiver type





--------
* Additional Resources:
	+ If applicable