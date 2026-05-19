## 5-7-1: Examining VPNs and QoS

At the end of this episode, I will be able to:    

1. Identify and explain the purpose of Quality of Service (QoS), given a scenario.    

Learner Objective: *Identify and explain the purpose of Quality of Service (QoS), given a scenario*    

Description: In this episode, the learner will examine Virtual Private Networks (VPNs) andconcepts such a VPN types, protocols, and security considerations. We will explore Quality of Service (QoS), 802.1Q, priority tagging and more..

-------- 

* What are VPNs?
  + A secure, encrypted connection over a publice networks, such as the Internet
  + Provide secure remote access or connect multiple sites.
* What are the different types of VPNs?
  + Site-to-Site
    - Used to connect entire networks to each other, often employed for connecting remote offices to a company's main network.
    - Facilitates secure communication between different sites over the internet.
  + Remote Access VPNs
    - Allow individual users to connect to a private network from a remote location.
    - Commonly utilized for telecommuting or accessing corporate resources remotely.
* What are VPN tunneling and security technologies bein used?
  + PPTP \\(Point-to-Point Tunneling Protocol\)
    - Older VPN protocol
    - Easy setup
    - Has security vulnerabilities
    - uses TCP port 1723 tunnel maintenance and IP protocol 47 for GRE \(Generic Routing Encapsulation\).
  + L2TP \(Layer 2 Tunneling Protocol\)
    - PPTP \(Microsoft\) + L2F \(Cisco\) = L2TP
    - Commonly used with IPsec for encryption
    - Uses UDP ports 1701 for L2TP traffic, 500 and 4500 for IPsec
  + IKEv2 \(Internet Key Exchange version 2\)
    - Part of the IPsec suite
    - Used for establishing and managing security associations.
    - Uses UDP ports 500 for the initial key exchange and 4500 for NAT traversal.
  + MPPE \(Microsoft Point-to-Point Encryption\) - Works with PPTP for encrypting data on Microsoft VPN networks.
  + SSTP \(Secure Socket Tunneling Protocol\)
    - Developed by Microsoft, uses SSL/TLS for encryption
    - Offers security and ability to bypass most firewalls.
    - Uses TCP port 443, the same port used for HTTPS traffic.
  + IPSec (Internet Protocol Security) - A suite of protocols for securing internet protocol communications by authenticating and encrypting each IP packet.
* What is QoS?
  + A set of technologies used to:
    - Manage network traffic
    - Prioritize different types of data
* What is the purpose of QoS
  + Ensures predictable network behavior and performance
  + Particularly for time-sensitive applications like VoIP and video conferencing.
  + Aims for reliable and consistent data packet delivery 
  + The foreduced latency, jitter, and packet loss.
* Where do we see this implemented or used?
  + In network devices such as routers and switches.
* What do these QoS functions perform?
  + Implements traffic policies - shaping and policing
  + Bandwidth allocation - determining available bandwidth for traffic.
  + Queuing - prevents traffic congestion
* How can routers determine priority?
  + Terms of Service \(ToS\) Field in IPv4
    - An 8-bit field in the IPv4 header for indicating packet priority.
    - Includes bits for precedence, delay, throughput, and reliability.
  + Differential Service Code Point \(DSCP\)
    - Occupies the first 6 bits of the ToS field in IPv4/Traffic Class field in IPv6.
    - Allows for 64 different classes of service
    - Provides granular packet classification.
* How can the switches determine priority?
  + VLAN tagging \(IEEE 802.1q\)
    - Includes priority bits in the VLAN tag
    - Allow QoS policies based on VLAN ID
    - Priority level \(802.1p\)
   + IEEE 802.1p \(Priority Tagging\)
    - Adds a 3-bit class of service \(CoS\) priority field in the Ethernet frame
    - Defines 8 priority levels
    - Used by switches for traffic prioritization \(forwarding decisions\)
    - Used by switches for congestion management.

--------
* Additional Resources:
  + If applicable