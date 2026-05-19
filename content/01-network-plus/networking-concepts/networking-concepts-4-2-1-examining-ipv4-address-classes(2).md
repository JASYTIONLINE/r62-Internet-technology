## 4-2-1: Examining IPv4 Address Classes

At the end of this episode, I will be able to:    

1. Identify and explain the structure of IPv4 address classes and importance, given a scenario.    

Learner Objective: *Identify and explain the structure of IPv4 address classes and importance, given a scenario*    

Description: In this episode, the learner will examine the IPv4 addressing class structure. We will explore classes ranges, network and hosts capacities, common usage and more.

--------  

* What are the address ranges of each IPv4 class?
  + Class A - 1.0.0.0 to 126.255.255.255 \(Default Subnet Mask = 255.0.0.0 or /8 \)
  + Class B - 128.0.0.0 to 191.255.255.255 \(Default Subnet Mask = 255.255.0.0 or /16 \)
  + Class C - 192.0.0.0 to 223.255.255.255 \(Default Subnet Mask = 255.255.255.0 or /24 \)
  + Class D - 224.0.0.0 to 239.255.255.255 \(not applicable, no assign subnet mask\)
  + Class E - 240.0.0.0 to 255.255.255.255 \(not applicable, no assign subnet mask\)
* How many networks and hosts can each IPv4 class support?
  + Class A - Supports 128 networks with approximately 16 million hosts each
  + Class B - Supports 16,384 networks with 65,534 hosts each
  + Class C - Supports over 2 million networks with up to 254 hosts each
  + Class D - Not used for standard host addresses \(multicast\)
  + Class E - Reserved for experimental; not for general use
* What are the common uses for each IPv4 class?
  + Class A - Large organizations or networks requiring a vast number of IP addresses
  + Class B - Medium-sized networks such as universities or regional services
  + Class C - Small businesses and local area networks \(LANs\)
  + Class D - Multicast groups
  + Class E - Experimental purposes
* Can you provide examples of where each IPv4 class is typically used?
  + Class A - Major global enterprises, internet service providers
  + Class B - Educational institutions, larger corporations
  + Class C - Small companies, office networks
  + Class D - Streaming services, multi-user games
  + Class E - Network protocol testing, future use experimentation
* Are there IPv4 addresses that have been reserved or special use?
  + 0.0.0.0/8 - reserved by IANA
    - See IETF's *Special-Purpose Address Registries* RFC 6890 for more detailed information: https://datatracker.ietf.org/doc/html/rfc6890
  + 127.0.0.0/8
    - See IETF's *Special-Purpose Address Registries* RFC 6890 for more detailed information: https://datatracker.ietf.org/doc/html/rfc6890
  + 169.254.0.0/16
    - See IETF's *Special USe IPv4 Addresses* RFC 5735 for more detailed information: https://datatracker.ietf.org/doc/html/rfc5735
  

--------
* Additional Resources:
  + If applicable