## 4-3-2: Introduction to Subnetting

At the end of this episode, I will be able to:    

1. Identify and explain the purpose of subnetting in IPv4 addressing, given a scenario.    

Learner Objective: *Identify and explain the purpose of subnetting in IPv4 addressing, given a scenario*    

Description: In this episode, the learner will examine IPv4 subnetting in TCP/IP networks. We will explore the purpose of subnetting, the network and host portions of IPv4 addresses, how networks are divided, and more.  

--------  

* What is subnetting?
  + The process of dividing a larger network into subnetworks or subnets, for more efficient utilization of the IP addresses and for instance to isolate broadcast domains in a network.
* Where can we start with subnetting?
  + Start by looking at an IP addrees
  + Example:
    - Class C - Private IP address, default subnet mask of 24 bits or 255.255.255.0
      ```
      IP address = 192.168.0.10
      Subnet mask = 255.255.255.0 \(default\)
      ```
    - Subnet mask through the ANDing process, reveals the network ID \(192.168.0.0\) and the node ID \(.10\)
    - Working backwards, we can determine that the Network ID and Node IDs are:
      ```
      Network ID = 192.168.0.0
      Node ID = .10
      ```
    - With the Network ID, the subnet mask and a little binary we can determine what the first and last usable addresses and the network broadcast address
    - Node portion: cannot be all binary 0's = reserved for the Network ID. 
    - Node portion: cannot be all binary 1's = reserved for this network's broadcast address.
* What if we need to divide this network into smaller subnets?
  - Example: Take the base network of 192.168.0.0/24 and turn any of the bits in the last octet into network bits. This divides the network into more networks \(the more network bits are added\), while reducing the amount of available nodes. The more nodes required on a network, the greater the amount of node bits required.
  - 1 bit added to the node portion = 2 networks/126 nodes \(remember minus the network ID and broadcast\)
  - 2 bits added = 4 networks/62 nodes
  - 3 bits added = 8 networks/30 nodes
  - 4 bits added = 16 networks/14 nodes
  - 5 bits added = 32 networks/6 nodes
  - 6 bits added = 64 networks/2 nodes
--------
* Additional Resources:
  + If applicable