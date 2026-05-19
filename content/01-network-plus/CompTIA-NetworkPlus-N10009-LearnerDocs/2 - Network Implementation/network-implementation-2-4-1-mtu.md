## MTU
At the end of this episode, I will be able to:    

1. Maximum Transmission Unit (MTU) 

Learner Objective: *Learn about the concept of Maximum Transmission Unit (MTU) in modern networks*    

Description: In this episode, you will learn about the Maximum Transmission Unit (MTU) concept in modern networks. This includes a discussion of jumbo frames in networking today.   

-----------

* The Maximum Transmission Unit (MTU) in modern networks refers to the maximum size of a data packet that can be transmitted over a network. 
* MTU is typically measured in bytes and includes the payload data as well as any headers and trailers added by networking protocols. 
* The MTU is an essential parameter to optimize network efficiency, as larger MTUs can reduce the overhead associated with transmitting data.
* The standard 1500-byte MTU has been widely adopted in Ethernet networks, providing a balance between efficient data transmission and compatibility across a variety of devices and network equipment.
* Jumbo frames are a type of MTU that exceeds the standard Ethernet frame size of 1500 bytes. While the standard MTU for Ethernet is 1500 bytes, jumbo frames can range from 9000 to 9216 bytes or even larger. 
* Jumbo frames are often used in environments that require the efficient transfer of large amounts of data, such as storage area networks (SANs) and high-performance computing clusters.
* Using jumbo frames can improve network performance by reducing the number of frames and thus the overhead associated with transmitting a given amount of data.
* It's important to note that for jumbo frames to be effective, all devices in the network path, including switches and routers, must support and be configured to handle jumbo frames. Otherwise, fragmentation or issues with devices not supporting jumbo frames could occur, leading to suboptimal performance.

-----------

Additional Resources:

*Maximum Transmission Unit*
https://en.wikipedia.org/wiki/Maximum_transmission_unit
