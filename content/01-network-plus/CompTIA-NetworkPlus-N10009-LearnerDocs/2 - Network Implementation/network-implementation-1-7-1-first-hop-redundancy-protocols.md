## First Hop Redundancy Protocols 
At the end of this episode, I will be able to:    

1. First Hop Redundancy Protocols (FHRPs)

Learner Objective: *Learn about the function and variety of First Hop Redundancy Protocols (FHRPs) in use today*    

Description: In this episode, you will learn about the need for First Hop Redundancy Protocols (FHRPs)and their function. You will also learn about three of the more popular FHRPs in use today.   

-----------

* What is you have multiple routers (default gateways) that can support your hosts? You will need a protocol that can transparently direct traffic to an available router in the group of routers. This is the job of FHRPs. 
* A common concept is a Virtual IP Address (VIP). This is an address that is "assigned" to the group of routers - this enables clients to set a default gateway IP address to the VIP address - by sending traffic to the VIP, the FHRP protocol can decide which router actually receives the traffic. 
* There are three main FHRPs in use today. 
* Hot Standby Router Protocol (HSRP) - this is a Cisco proprietary FHRP that was originally invented in 1998. There are currently two versions with the latter version supporting IPv6. There are two main issues with this protocol today - one is that it is Cisco proprietary, and the other issue is there is no built-in load balancing. 
* Virtual Router Redundancy Protocol (VRRP) - this is basically an open standard version of HSRP. There are currently three versions of this protocol. Like HSRP, the big issue is there is no built-in load balancing. 
* Gateway Load Balancing Protocol (GLBP) - this is another Cisco invention. It provides support for built-in load balancing. In fact, it supports round robin or weighted load balancing configurations. 

-----------

Additional Resources:

*First Hop Redundancy Protocol*
https://en.wikipedia.org/wiki/First-hop_redundancy_protocol
