## 4-5-1: Introduction to CIDR

At the end of this episode, I will be able to:    

1. Identify and explain the purpose of Classless Inter-Domain Routing or CIDR in networks, given a scenario.    

Learner Objective: *Identify and explain the purpose of Classless Inter-Domain Routing or CIDR in networks, given a scenario*    

Description: In this episode, the learner will examine Classless Inter-Domain Routing or CIDR. We will explore the benefits that CIDR provides for IPv4 addressing and the Internet.

--------  

* What is CIDR \(Classless Inter-Domain Routing\)?
  + A method for allocating IP addresses and managing IP routing.
  + Introduced to improve the efficiency and scalability of IP address allocation and routing on the Internet.
* Was there any other reasons for introducing CIDR?
  + To counter the rapid exhaustion of IPv4 addresses
  + To decrease the size and complexity of routing tables on the Internet.
* What are some key features of CIDR?
  + Classless system
    - CIDR allows for a more flexible allocation of IP addresses.
    - Doesn't limit networks to predefined sizes.
  + Slash notation:
    - Introduces slash notation \(example: 192.168.1.0/24\)
      * This defines the network prefix and the length of this prefix
      * The number after the slash indicates the number of bits used for the network portion.
  + Efficient routing
    - By aggregating multiple IP addresses into a single entry in routing tables
    - Reduces the size of these tables, leading to more efficient and faster IP routing.
* What has the impact on Internet been since CIDR was introduced?
  + Routing table aggregation
    - The ability to aggregate routes into fewer entries \(reducing the size of the routing tables on the Internet\)
    - Has helped to manage the growth of routing tables \(crucial for internet scalability\) 


--------
* Additional Resources
  + Route summarization
    - Individual networks - 35.4.0.0/16, 35.5.0.0/16
    - Summarized route - 35.4.0.0/15
  + Route summarization
    - Individual networks - 192.168.20.0/24, 192.168.21.0/24, 192.168.22.0/24
    - Summarized route - 192.168.20.0/22
  + Route summarization
    - Individual networks - 10.10.0.0/24, 10.10.1.0/24, 10.10.2.0/24, 10.10.3.0/24, 10.10.4.0/24
    - Summarized route - 10.10.0.0/21
