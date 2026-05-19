## 8-1-1: Examining SDN and SD-WAN

At the end of this episode, I will be able to:    

1. Identify and explain the benefits of SDN and SD-WAN technologies, given a scenario.    

Learner Objective: *Identify and explain the benefits of SDN and SD-WAN technologies, given a scenario*    

Description: In this episode, the learner will examine Software-Defined Networks, or SDNs, and Software-Defined Wide Area Networks, or SD-WAN. We will explore the benefits and components of these evolving network technologies.

--------  

* What is SDN?
  + Software-Defined Network \(SDN\)
    - Decouples network control and forwarding functions for more flexible management.
    - Enables programmatically efficient network configuration and management.
* What are the SDN Layers:
  + Management plane
    - Engages directly with network applications.
  + Control plane
    - Hosts the SDN controller, orchestrating flow control and policy application.
  + Data plane
    - Consists of the physical and virtual network devices.
* What are the SDN Controllers:
  + The central authority that manages traffic flow and policy enforcement across the network.
  + Can be a physical or virtualized device
* What are the NB and SB interfaces?
  + Northbound interface \(NBI\) - Connects the SDN controller with the applications; utilizes RESTful APIs for communication, enabling developers to program the network using high-level languages like Python and JavaScript.
  + Southbound interface \(SBI\) - Links the SDN controller with the network devices; OpenFlow is a predominant protocol here, facilitating the controller's ability to direct network traffic.
* What are OpenFlow and RESTful API?
  + OpenFlow - A foundational protocol for SDN, enabling direct access and manipulation of the forwarding plane of network devices.
  + RESTful APIs - Architectural style used for designing networked applications, allowing for easy and dynamic interactions between the SDN controller and applications via HTTP requests.
* What is SD-WAN \(Software-Defined Wide Area Network\)
  + Extends SDN concepts to wide area networks, overlay network over large geographical areas.
  + Focused on delivering a high-performance WAN that uses multiple transport technologies.
* What are some of the SD-WAN components?
  + Overlay Network - Virtualizes WAN connections to connect different parts of the network over the internet or a private network.
  + Edge Devices - Sit at the perimeter of a network, providing connectivity and SD-WAN functionalities.
  + Controllers:
    - SD-WAN Controller - Oversees traffic routing, policy management, and the health of the SD-WAN connections.
  + Interfaces:
    - Management Interface - For SD-WAN configuration and monitoring.
    - Orchestration Interface - Manages and synchronizes policies and settings across the SD-WAN fabric.

--------
* Additional Resources:
  + If applicable