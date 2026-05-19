## 4-1-1: Examining Public and Private Addressing

At the end of this episode, I will be able to:    

1. Identify and explain the importance and functionality (including RFC 1918, NAT, private and public IP addressing), given a scenario.    

Learner Objective: *Identify and explain the importance and functionality (including RFC 1918, NAT, private and public IP addressing), given a scenario.*    

Description: In this episode, the learner will examine private and public IP addressing implementations in networks. We will explore technologies such as Network Address Translation or NAT, the RFC 1918 specification, and more.


--------  

* What are some of the key elements in RFC 1918?
  + Published by IETF - it defines the allocation of IP address blocks for private use.
  + These IP addresses are non-routable across the Internet - preventing external traffic from reaching them directly.
* How is RFC 1918 used in real-world networking?
  + Corporate Networks - Use Class A or B for assigning IP addresses to a large number of devices without exhausting public IP addresses.
  + Home Networks - use Class C range to connect multiple personal devices, often managed by a home router.
  + Data Centers - Also, use Class A or B ranges to efficiently manage a vast array of servers and equipment.
* How do RFC 1918 addresses interact with NAT?
  + Private addresses from RFC 1918 are commonly used with NAT, which allows multiple devices in a private network or LAN to access the Internet using a single public IP address.
* What are the private address ranges specified in RFC 1918? (Three examples)
  + Class A Range - 10.0.0.0 to 10.255.255.255 \(10.0.0.0/8\) – Suitable for large organizations with many devices.
  + Class B Range - 172.16.0.0 to 172.31.255.255 \(172.16.0.0/12\) – Commonly used in medium-sized networks.
  + Class C Range - 192.168.0.0 to 192.168.255.255 \(192.168.0.0/16\) – Ideal for small businesses and home networks.
* What are the security implications of using RFC 1918 addresses?
  + These private addresses add an extra layer of security as they are hidden from the public internet - reducing the risk of direct external attacks.

--------
* Additional Resources:
  + If applicable