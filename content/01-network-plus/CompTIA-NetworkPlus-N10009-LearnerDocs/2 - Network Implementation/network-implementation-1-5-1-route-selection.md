## Route Selection 
At the end of this episode, I will be able to:    

1. Route selection 

Learner Objective: *Learn about how a router will choose a route to use for forwarding traffic on the network*    

Description: In this episode, you will learn about how routers choose a best path to a destination when they have multiple sources of information for the routing decision. This includes a discussion of administrative distance, prefix length, and routing metrics.    

-----------

* A router will progress through a series of steps in order to make a decision on what is the "best" route to get to a destination 
* If the router receives a route from multiple protocols or configurations - it uses a concept called Administrative Distance in order to choose which to "believe" 
* Each routing vendor publishes the admin distance values; for example, Cisco uses the following values (partial list) - connected interface (0), static route (1), external EIGRP (20), EIGRP (90), OSPF (110), RIP (120) 
* Another decision point revolves around the prefix length - the router will use the longest matching prefix length - so for example, if the router is trying to send traffic to the 10.10.10.0/24 network - it will use that entry in the routing table and ignore a route to 10.0.0.0/8 or 10.10.0.0/16 
* Remember, the router will also use the metric used by the routing protocol in use; so if a router has an OSPF route to 10.10.10.0/24 with a cost of 100 and a route to 10.10.10.0/24 with a cost of 20, it will use the route with the better (lower cost) metric 

-----------

Additional Resources:

*Configure Route Selection for Routers*
https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8651-21.html
