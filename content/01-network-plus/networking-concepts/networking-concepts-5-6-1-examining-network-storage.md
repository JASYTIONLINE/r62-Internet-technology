## Examining Network Storage

At the end of this episode, I will be able to:    

1. Identify and explain the purpose of network storage technologies, given a scenario.    

Learner Objective: *Identify and explain the purpose of network storage technologies, given a scenario.*    

Description: In this episode, the learner will examine various network storage technologies such as Storage Area Networks (SANs) and Network-attached Storage (NAS). We will explore technologies such as Fibre Channel, connections and network file systems.

--------  
* What is are Storage Area Networks?
  + are high-speed, dedicated networks that provide access to consolidated, block-level data storage.
  + Designed to handle large volumes of data in enterprise environments and improved performance
  + Connections protocols 
    - Fibre Channel \(FC\)
    - Fibre Channel over Ethernet \(FCoE\)
    - InfiniBand 
    - iSCSI
* What is Fibre Channel?
  + Fibre Channel Overview
  - A high-speed network technology widely used in storage networking.
  - Support multiple transmission speeds
* What are some of the Fibre Channel Speeds?
  - 1 Gbps \(1GFC\) - The initial speed, foundational for early SANs.
  - 2 Gbps \(2GFC\) - Doubled the data transfer rate, improving performance.
  - 4 Gbps \(4GFC\) - Enhanced speed for increased data demands.
  - 8 Gbps \(8GFC\) - Further doubled speeds to support growing storage needs.
  - 16 Gbps \(16GFC\) - Introduced to manage larger, more data-intensive environments.
  - 32 Gbps \(32GFC\) and 128 Gbps \(128GFC\) - Latest standards, providing high-speed connections for modern data centers.
* Do these speeds translate to versions?
  - Each speed increment often corresponds with a new version of the Fibre Channel standard, incorporating improvements in technology, security, and efficiency.



--------
* Additional Resources:
  + SMB \(Server Message Block\)
    - Enables network file sharing
    - SMB 1.0 for legacy system 
    - SMB 2.0 for improved performance and security
    - SMB 3.0 for enhanced capabilities and encryption.
  + NFS \(Network File System\)
    - Facilitates file access over networks
    - NFSv3 for stateless protocol operations
    - NFSv4 adding stateful operations and improved security
    - NFSv4.1 introducing parallel NFS \(pNFS\) for performance.
  + iSCSI \(Internet Small Computer Systems Interface\) 
    - Allows for the transmission of block-level data over IP networks
    - It utilizes iSCSI initiators to send data requests and iSCSI targets to receive and store them, streamlining storage management and access.
  + Fibre Channel over Ethernet \(FCoE\)
    - Encapsulates Fibre Channel frames over Ethernet network
    - Enables the convergence of storage and IP protocols over a single network infrastructure.
    - InfiniBand - A high-performance networking technology that offers very low latency and high throughput
    - Used in high-performance computing and enterprise data centers.