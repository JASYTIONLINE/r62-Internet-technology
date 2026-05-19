## 8-5-1: Examining IPv6 Addresses

At the end of this episode, I will be able to:    

1. Identify and explain the characteristic of IPv6, given a scenario.    

Learner Objective: *Identify and explain the characteristic of IPv6, given a scenario*    

Description: In this episode, the learner will examine IPv6 addresses, inlcuding the format and structure. We will explore the benefits and characteristics of IPv6.

--------  
* What is an IPv6 address
  + Utilizes 128-bit addresses, enabling an extensive number of unique IP addresses.
  + Portions of the address are reserved for the network prefix \(like an IPv4 network ID\)
  + The remaining portion is reserved for the interface identifier 
  \(like an IPv4 host ID\)
* What are some of benefits of IPv6
  + Vast Address Pool
    - The large address space removes the need for NAT, simplifying network design.
  + Simplified Routing and Header Format
    - Hierarchical structuring for efficient routing; simplified packet header.
  + Elimination of Broadcast Communications
    - Replaces broadcasting with multicast and anycast.
  + Stateless and Stateful Configuration
    - Supports both automatic \(SLAAC\) and dynamic \(DHCPv6\) IP addressing.
  + Inherent Security Features
    - Designed with IPsec for enhanced security.
  + Enhanced Support for Mobile Nodes
    - Mobile IPv6 reduces latency for mobile connectivity.
* What are the different types of IPv6 address?
  + Different IPv6 Address Types
    - Global Unicast Addresses \(Prefix- 2000::/3\): Unique and routable globally.
    - Unique Local Addresses \(Prefix- FC00::/7\): For local communications, not globally routable.
    - Link-Local Addresses \(Prefix- FE80::/10\): For communications on a single network link.
    - Multicast Addresses \(Prefix- FF00::/8\): For one-to-many communication.
    - Anycast Addresses: Assigned to multiple interfaces, with the nearest one responding.
    - Special Addresses- Teredo \(Prefix- 2001::/32\), 6to4 \(Prefix- 2002::/16\), ISATAP.
* What is EUI-64?
  + Converts a 48-bit MAC address to a 64-bit interface identifier for IPv6.
  + EUI-64 Format
    - Extends a 48-bit MAC address to 64 bits for IPv6 interface identification.
    - Involves inserting 'FFFE' in the middle of the MAC address and inverting the 7th bit \(Universal/Local bit\).
* What is SLAAC?  
  + StateLess Address AutoConfiguration, is a method used in IPv6 networking to enable devices on a network to automatically configure their own IPv6 addresses without the need for a server-based addressing mechanism like DHCP.


--------
* Additional Resources:
  + If applicable