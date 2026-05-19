## OSPF
At the end of this episode, I will be able to:    

1. Open Shortest Path First (OSPF)

Learner Objective: *Learn about the OSPF dynamic routing protocol*    

Description: In this episode, you will learn about the dynamic, link-state routing protocol named OSPF. Here you will learn the concepts behind this protocol and you will even see its configuration on Cisco routers.    

-----------

* OSPF is an Interior Gateway Protocol (IGP) used to route WITHIN an Autonomous System (AS)
* OSPF is a departure from earlier protocols like RIP that are based on the Bellman-Ford vector based algorithm (routing by rumor) 
* OSPF began as an open standard and its development to this day continues that status 
* OSPF is based on the concept of a link-state protocol; links can be thought of as the interfaces of network devices; routers share these link descriptions and state information with their peers to form a "map" of the network; this "map" of the network is termed the link state database 
* Compared to RIP (specifically RIPv2) - OSPF provides many advantages including:
 - No hop count limit 
 - Support for Variable Length Subnet Masking (VLSM)
 - Updates send using multicast technology (not broadcast)
 - Superior convergence times 
 - Superior load balancing 
 - Permits the creation of areas - these areas allow for the optimization of information sharing and more efficient operations 
 - Supports the use of authentication (various strengths) 
 - Easily supports the injection and tagging of external routes from other protocols (and also static routes) 
* OSPF uses the Shortest Path First algorithm in its operation - this is very efficient and allows routers to calculate the shortest paths (based on cost (bandwidth)) to network destination 
* The metric used by OSPF is cost - cost is based on link bandwidth  - the shortest path will be the lowest cost and should be the highest bandwidth path 

-----------

Additional Resources:

*Understand Open Shortest Path First (OSPF) - Design Guide*
https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html
