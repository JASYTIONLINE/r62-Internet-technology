## Static Routing

Skip to main contentA C I Learning Home
Introduction to Network Communications
22 minutes, 35 seconds
In this episode, the learner will examine the basic components of modern networks. We will explore the purpose and importance of the elements that comprise modern networks.

Skip Intros and Outros:

Podcast mode:


Click to dismiss.
CompTIA Network+ (N10-009)
1-1-1: Introduction to Network Communications
At the end of this episode, I will be able to:

Identify and explain the purpose and importance of network components and communication.
Learner Objective: Identify and explain the purpose and importance of network components and communication

Description: In this episode, the learner will examine the basic components of modern networks. We will explore the purpose and importance of the elements that comprise modern networks.

Purpose of Networks
Facilitate data sharing and communication between devices.
Enable access to shared resources and internet connectivity.
Transmission Media
Copper Cables (e.g., Twisted Pair, Coaxial)
For wired connections.
Fiber Optic Cables
For high-speed data transmission.
Wireless Signals (e.g., Wi-Fi, Cellular Networks)
For mobile and remote access.
Endpoints
Servers (e.g., Web, File, Email Servers)
To provide centralized services.
Computers (e.g., Desktops, Laptops)
As primary user devices.
Mobile Devices (e.g., Smartphones, Tablets)
For portable connectivity.
Redistribution Points
Hubs
For basic signal retransmission in a network.
Routers
For directing traffic at the network layer.
Switches
For managing traffic at the data link layer.
Network Topology Considerations
Bus, Star, Ring, Mesh, Tree, and Hybrid topologies
Affect layout and performance.
Choice of topology
Impacts network scalability, redundancy, and maintenance.
Additional Components
Network Interface Cards (NICs)
In devices for network connectivity.
Access Points
For extending wireless network coverage.
Firewalls
For securing networks against unauthorized access and threats.

At the end of this episode, I will be able to:    

1. Static routing 

Learner Objective: *Learn about static routing, both its purpose and typical configurations*    

Description: In this episode, you will learn about static routing in modern networks. This episode includes the need for static routing as well as typical configurations of these routing instructions.    

-----------

* Static routing refers to the process of manually entering routing instructions into the memory of routing devices - this is an alternative to dynamic routing protocols that can share routing instructions with other devices in a automated fashion 
* There are many potential uses for static routing in your network, including:
 - Static routing is used to define a "default route"  - this route defines an exit point from the router when another more specific entry is not available 
 - Static routing might be used in a very small network where dynamic routing is not needed 
 - Static routing might be used as a backup to dynamic routing 
* There are some benefits to static routing - including low overhead on the device, simplicity, and full control over packet movements 
* Here is an example static route from a Cisco device. Notice this static route entry sends traffic destined for the 10.10.10.0/24 network to the next hop device at 172.16.1.2:
ip route 10.10.10.0 255.255.255.0 172.16.1.2 

-----------

Additional Resources:

*Static Routing*
https://en.wikipedia.org/wiki/Static_routing
