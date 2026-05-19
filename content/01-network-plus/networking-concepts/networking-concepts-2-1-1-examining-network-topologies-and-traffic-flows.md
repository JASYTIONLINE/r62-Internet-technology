## 2-1-1: Examining Network Topologies and Traffic Fllows

At the end of this episode, I will be able to:    

1. Compare and contrast common network topologies, including attributes, given a scenario.    

Learner Objective: *Compare and contrast common network topologies, including attributes, given a scenario*    

Description: In this episode, the learner will examine the common network topologies associated with attributes. We will explore the benefits and drawbacks of implementing each topology, including traffic flow concepts such as north-to-south and east-to-west traffic flows.

--------  

* Bus/Linear Topology
  + Devices connected to a single central cable.
  + Pros - Easy installation, less cable required.
  + Cons - Failure in the main cable affects entire network, not scalable.
* Star Topology
  + Each device connects to a central hub or switch.
  + Pros - Easy to install/manage, highly scalable, easy to add new devices.
  + Cons - Central hub failure disables entire network.
* Mesh Topology
  + Every device connects to every other device \(fully or partially\).
  + Pros - High fault tolerance, multiple data transmission paths.
  + Cons - Costly and complex to install/manage, especially in full mesh.
* Ring Topology
  + Devices connected in a circular loop.
  + Pros - Easy data transmission, predictable path.
  + Cons - Break in the ring disrupts network, adding/removing devices is challenging.

--------
* Network communication traffic flows: north/south vs east/west
  + North/South Traffic:
    - Data flows between the data center and other networks, such as client-to-server or client-to-Internet interactions.
    - Often involves user requests and responses, passing through the core network to external endpoints.
  + East/West Traffic:
    - Data movement within a data center, typically server-to-server or storage system interactions.
    - Signifies high-volume, lateral communication inside the network, crucial in cloud computing and virtualization.

--------

* Centralized Network Model
  + In a centralized network model, all network communication and data flow through a single central server, simplifying data management and security control.
  + Benefits include easier network management, centralized data storage, and improved security due to a singular point of control.
  + Drawbacks are the risk of a single point of failure, scalability issues, and potential performance bottlenecks due to reliance on one server.
* Client/Server Network Model
  + The client/server network model involves multiple clients (users) connected to a server that provides resources and services, like file storage or application access.
  + Benefits include efficient resource allocation, centralized management and maintenance, and enhanced security controls through the server.
  + However, it faces issues like server overload, increased dependency on the server's reliability, and higher costs for server maintenance.
* Peer-to-Peer (P2P) Network Model
  + In peer-to-peer networks, each node (peer) acts both as a client and a server, directly sharing resources like files without a centralized server.
  + Advantages include decentralized control, reduced costs for network setup and maintenance, and robustness against single points of failure.
  + Drawbacks involve potential security risks due to the decentralized nature, difficulty in managing and monitoring the network, and inconsistent performance based on peer availability.

----------

* Additional Resources:
	+ If applicable