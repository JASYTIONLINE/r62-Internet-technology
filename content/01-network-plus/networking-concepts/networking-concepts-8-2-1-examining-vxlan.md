## 8-2-1: Examining VXLAN

At the end of this episode, I will be able to:    

1. Identify and explain the importance of VXLAN technologies, given a scenario.    

Learner Objective: *Identify and explain the importance of VXLAN technologies, given a scenario*    

Description: In this episode, the learner will examine VXLAN. We will explore VXLAN technologies, and a comparison to traditional VLANs.  

--------  

*  What is Virtual Extensible LAN \(VXLAN\)?
  + A network virtualization technology designed to provide scalable, isolated networks in cloud computing environments.
  + Provides significantly more segmentation options than the 4096 VLAN IDs available in traditional VLAN.
* What are the comparisons to traditional VLANs?
  + Scalability
  + Cross Data Center Connectivity
  + Network Segmentation
* Taking each one of these, how do they benefit networks? 
  + Scalability
    - VLANs are limited to 4096 unique IDs, whereas VXLAN supports up to 16 million VNIs, offering greater scalability.
  + Cross Data Center Connectivity
    - VXLAN can stretch Layer 2 networks across geographically dispersed data centers, unlike VLANs, which are typically confined to a single physical location.
  + Network Segmentation
    - Provides enhanced network segmentation capabilities, essential in multi-tenant or cloud environments where VLAN's capabilities might be insufficient.
* What are some of the limitations overcome by VXLAN?
  + Address Space Limitation
  + Layer 2 Extension
  + Multi-Tenancy Support
* Taking each one of these, how do they help overcome some of the limitations of VLANs?
  + Address Space Limitation
    - Overcomes the 4096 VLAN ID limitation, addressing the needs of larger and more dynamic environments.
  + Layer 2 Extension
    - Enables Layer 2 network extension over Layer 3 infrastructure, facilitating more flexible and efficient network designs.
  + Multi-Tenancy Support
    - Better supports multi-tenancy environments, which is crucial for modern data centers and cloud services, where traditional VLANs may fall short.



--------
* Additional Resources:
  + If applicable