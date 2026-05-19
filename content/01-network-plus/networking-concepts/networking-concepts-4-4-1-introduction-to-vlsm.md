## 4-4-1: Introduction to VLSM

At the end of this episode, I will be able to:    

1. Identify and explain the purpose of variable-lenth subnet masking, given a scenario.    

Learner Objective: *Identify and explain the purpose of Variable-Length Subnet Mask or VLSM, given a scenario*    

Description: In this episode, the learner will examine the role Variable-Length Subnet Mask performs in IP subnetting. We will explore VLSM, how it works, and how it can optimize IP address allocation within IP-based networks.

--------  

* What is variable length subnet mask \(VLSM\)?
  + VLSM divides an IP network into subnetworks of different sizes for more efficient IP address allocation.
  + It allows granular address allocation based on subnet needs, optimizing IP space usage.
* How does VLSM work in IP subnetting?
  + VLSM assigns different subnet masks to subnets, allowing variable host numbers in each.
  + It involves dividing larger subnets into smaller ones, each with a unique mask.
  + Careful planning is needed to prevent address conflicts and ensure proper allocation.
* Example 1 - Subnetting a 192.168.0.0/24 network
  + Scenario: You have a network with an IP range of 192.168.0.0/24. This network needs to be divided into three subnets - HR needs 50 hosts, Sales needs 30 hosts, and IT needs 10 hosts. 
  + Subnetting:
    - For 50 hosts
      * You need at least 6 bits for hosts \(2^6 = 64, 64-2 = 62 usable addresses\)
      * The subnet mask will be /26
      * Subnet 1: 192.168.0.0/26
    - For 30 hosts
      * 5 bits are needed \(2^5 = 32, 32-2 = 30 usable addresses\)
      * The subnet mask will be /27
      * Subnet 2: 192.168.0.64/27
    - For 10 hosts
      * 4 bits are sufficient \(2^4 = 16, 16-2 = 14 usable addresses\)
      * The subnet mask will be /28.
      * Subnet 3: 192.168.0.96/28
* Subnet details
  * Subnet 1 - 192.168.0.0/26
    + Network ID - 192.168.0.0
    + Broadcast Address - 192.168.0.63
    + Usable IP Range - 192.168.0.1 to 192.168.0.62
    + IP Range - 192.168.0.0 to 192.168.0.63
    + Number of Usable Hosts - 62
  * Subnet 2 - 192.168.0.64/27
    + Network ID - 192.168.0.64
    + Broadcast Address - 192.168.0.95
    + Usable IP Range - 192.168.0.65 to 192.168.0.94
    + IP Range - 192.168.0.64 to 192.168.0.95
    + Number of Usable Hosts - 30
  * Subnet 3 - 192.168.0.96/28
    + Network ID - 192.168.0.96
    + Broadcast Address - 192.168.0.111
    + Usable IP Range - 192.168.0.97 to 192.168.0.110
    + IP Range - 192.168.0.96 to 192.168.0.111
    + Number of Usable Hosts - 14
* For quick reference
  - 1 bit added to the node portion = 2 networks/126 nodes \(remember minus the network ID and broadcast\)
  - 2 bits added = 4 networks/62 nodes
  - 3 bits added = 8 networks/30 nodes
  - 4 bits added = 16 networks/14 nodes
  - 5 bits added = 32 networks/6 nodes
  - 6 bits added = 64 networks/2 nodes
--------
* Additional Resources:
  + If applicable