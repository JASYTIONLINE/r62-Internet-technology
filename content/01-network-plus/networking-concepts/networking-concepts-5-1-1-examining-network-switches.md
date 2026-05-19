## 5-1-1: Examining Network Switches

At the end of this episode, I will be able to:    

1. Identify and explain the functionality and purpose of network switches.    

Learner Objective: *Identify and explain the functionality and purpose of network switches.*    

Description: In this episode, the learner will 

--------  

* Introduction
  + Definition: A network switch is a network device, connecting devices  inside local area networks \(LAN\) and uses MAC addresses to forward data to its destination.
* Operational Principles
  + Frame Forwarding: How switches use MAC addresses to determine the destination of a frame.
  + Collision Domains: A network segment where only one device can transmit at a time. Switches reduce collisions and improving network performance.
* Types of Switches
  + Unmanaged Switches: Plug and play switches without configuration.
  + Managed Switches: Offer features for configuration, VLAN setup, monitoring, etc.
  + Layer 2 \(Data Link\) Switches: Operate using MAC addresses.
  + Layer 3 \(Network\) Switches: Incorporate routing functions and operate using both MAC and IP addresses.
  + Multilayer Switches: Operate at multiple layers, often combining Layer 2 and Layer 3 functions.
  + PoE \(Power over Ethernet\) Switches: Deliver power and data over a single Ethernet cable, useful for devices like IP phones and cameras.
* Benefits of Using Switches
  + Efficiency: Reduced collisions and dedicated bandwidth for each connection.
  + Performance: High-speed connectivity, especially in full-duplex mode.
  + Flexibility: Scalability to accommodate growing networks.
  + Security: Features like VLANs can segment network traffic.
* Store-and-Forward Switching
  + Process - In store-and-forward switching, the switch receives the entire data frame into its buffer. It checks it for errors \(usually using a Cyclic Redundancy Check, or CRC\) before forwarding it.
  + Error Checking - This method allows the switch to catch and discard frames with errors, reducing the amount of erroneous data transmitted through the network.
  + Latency - It introduces more latency compared to other methods, as the switch must wait to receive the entire frame before beginning to forward it.
  + Advantages - High data integrity since frames are checked for errors.
  + Disadvantages - Higher latency, especially with larger frames.
* Cut-Through Switching
  + Process - Cut-through switching begins forwarding the frame immediatel, as the switch reads the destination MAC address without waiting to receive the entire frame.
  + Error Checking - There is minimal error checking with this method. The switch does not check the CRC so that it may forward corrupted frames.
  + Latency - This method has lower latency compared to store-and-forward since the switch starts forwarding the frame almost immediately.
  + Advantages - Lower latency, making it suitable for time-sensitive applications.
  + Disadvantages - Potential for forwarding corrupted frames, as there is no error checking.
* Fragment-Free Switching
  + Process - Fragment-free switching is a variation of cut-through switching. The switch waits for the first 64 bytes of the frame \(the collision window\) before forwarding.
  + Error Checking - By waiting for the first 64 bytes, the switch can avoid forwarding most collision fragments \(runts\). However, it still doesn't check the entire frame.
  + Latency - It has slightly higher latency than pure cut-through but less than store-and-forward.
  + Advantages - Balances the benefits of cut-through \(low latency\) and store-and-forward \(error checking\), reducing the chances of forwarding error frames.
  + Disadvantages - There is still a possibility of forwarding corrupted frames, although it's lower than in cut-through switching.

--------
### Ethernet Frame
--------
* Preamble
  + This section alerts the receiving system of the incoming frame's start and facilitates synchronization.
* SFD (Start Frame Delimiter)
  + Indicates that the Destination MAC Address field commences with the subsequent byte.
* Destination MAC
  + Specifies the receiver of the frame.
* Source MAC
  + Specifies the originator of the frame.
* Type
  + Designates the protocol type encapsulated within the frame, such as IPv4 or IPv6.
* Data and Pad
  + Holds the frame's payload. Padding is used to fulfill the minimum length requirement of this field, which is 46 bytes.
* FCS (Frame Check Sequence)
  + Includes a 32-bit Cyclic Redundancy Check (CRC), used for identifying any data corruption.

------
* Additional Resources:
	+ If applicable