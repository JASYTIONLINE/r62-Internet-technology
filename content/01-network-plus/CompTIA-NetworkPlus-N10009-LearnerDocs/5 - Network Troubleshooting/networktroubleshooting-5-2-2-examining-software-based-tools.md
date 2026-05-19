## 5-2-2: Examining Software-based Tools

At the end of this episode, I will be able to:    

1. Identify and explain the role of software-based network troubleshooting tools, given a scenario.    

Learner Objective: *Identify and explain the role of software-based network troubleshooting tools, given a scenario*    

Description: In this episode, the learner will examine various software-based tools used in network troubleshooting. We will explore protocol analyzers, packet capture utilities, Wi-Fi Analyzers, and more.

--------  

* If we need to look at the network traffic, what software can we use?
  + Protocol analyzers:
    - Protocol analyzers are tools designed to decode and analyze network traffic to understand protocols' behavior, diagnose problems, and ensure network security.
  + Packet capture software:
    - Packet capture software focuses on capturing and recording network traffic, allowing for detailed examination and analysis at a later time.
* How about in wireless networks, what might we use?
  + Wi-Fi analyzers
    - A type of tool that can use wireless networks to diagnose performance and configuration issues
      * Assess signal strength
      * Identify and remediate congestion and interference issues
      * Verify and optimize channel use
* Are websites that provide speed tests beneficial?
  + Speed test websites:
    - These websites measure Internet connection speed
    - They test the download and upload rates
    - Additional options, such as geolocation or server choice.
    - They can provide insights into network performance and quality.
* How about some "honorable mentions" for software-based tools?
  + *nmap*
    - Network Mapper, perform network scans
    - Command line interface or CLI
  + *tcpdump*
    - Dump/capture packets off the network
    - Command line interface or CLI
--------

* Additional Resources:
  + Wireshark display filters
    ```
    ip.src == 192.168.0.10
    tcp[13]&2!=0 (ID TCP three-way handshake)
    tcp.port eq 443 or arp (display port 443, or ARP)
    smb || nbns || dcerpc || nbss || dns (filter based on common Windows domain controller traffic)
    ```
  + Wi-Fi Analyzers
    - Signal strength of approximately -30 dBm to -50 dbm is excellent signal strength, with 60 dBm being fair and above considered poor
      * Consider AP and antenna position, and coverage area
    - Channel overlap - look for APs on the same channel, if necessary manually change channel
    - AP density - the more APs broadcasting in a location, the greater the potential for interference
    - Configuration - verify the AP and/or client are running the same communication, encryption and authentication protocols.
  + Speed Test websites
    - https://www.speakeasy.net/speedtest/ 
    - https://www.speedtest.net/
    - https://fiber.google.com/speedtest/
    