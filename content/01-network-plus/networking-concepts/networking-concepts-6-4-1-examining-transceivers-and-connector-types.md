## 6-4-1: Examining Transceivers and Connector Types

At the end of this episode, I will be able to:    

1. Identify and explain transceivers and connector types, given a scenario.    

Learner Objective: *Identify and explain transceivers and connector types, given a scenario.*    

Description: In this episode, the learner will examine various transceiver and connection considerations. We will explore standards, transceiver form factors such as SFP and QSFP, TIA Category standards and more.

--------  

* What are common considerations when using wired cabling?
  + What is the current setup being used \(most commonly Ethernet, maybe  Fiber channel for storage-area networks\)
* With Ethernet being the most common, what are some considerations?
  + On the workstation end:
    - Cables = copper vs. fiber
  + Copper
    - Plenum vs. Non-Plenum Cable -plenum cables are coated with flame-retardant materials and are used in air circulation spaces. In contrast, non-plenum cables are used in non-air circulating spaces and are toxic when burnt, and less fire retardant.
    - Cable type
      * 802.3 - \(CAT5 = 100 Mbps, CAT5e -1 Gbps, CAT6 - 1 Gbps, CAT6a - 10 Gbps, CAT7 - 10 Gbps, CAT8 - 40 Gbps\)
    - Connectors
      * RJ-45
        - A common connector type used for Ethernet
        - Also known as an 8P8C connector
        - Commonly wired with TIA-568 wiring standard
      * TIA-568A
        - Green and orange wire pairs on pins 1 and 2, 3 and 6, respectively, and blue and brown wire pairs remain unchanged on pins 4 and 5, 7 and 8, respectively, in the RJ-45 connector.
      * TIA-568B
        - Orange wire pair on pins 1 and 2, and green wire pair on pins 3 and 6; blue and brown wire pairs are consistent with TIA-568A, on pins 4 and 5, 7 and 8, respectively, in the RJ-45 connector.
      * RJ-11 Connector
        - Standard interface for voice-grade telephone equipment.
        - Compact, modular design.
        - Usually has four or six positions and contacts.
        - Connects to modules by plugging into standard jacks on devices like telephones, modems, and fax machines.
* What higher bandwidth demands, like data centers?
  + Fiber
    - Ethernet and Fiber Channel
    - Single-mode fiber - allows only one light mode to pass through, enabling longer distance transmission. The core diameter is 9 microns
    - Multimode fiber - allows multiple modes, suitable for shorter, high-bandwidth applications. Core diameter 50 
    \& 62.5 micron
  + Copper
    - Direct Attach Copper \(DAC\) - a type of twinaxial cable that features two inner conductors for high-speed, short-range data transmission, often used in data centers.
  + Transceiver - a device that transmits and receives data signals, allowing for the conversion and processing of these signals across various communication mediums.
  + Form Factors -
    - Small Form-factor Pluggable \(SFP\) - A compact, hot-pluggable transceiver used for telecommunication and data communications applications.
    - Quad Small Form-factor Pluggable \(QSFP\) - A compact, hot-pluggable transceiver used to carry more bandwidth than a single SFP transceiver, commonly used in data centers.
* What are the different cable connectors in networks?
  + Subscriber Connector \(SC\) - A push-pull style connector that is widely used in fiber optic communications.
  + Local Connector \(LC\) - A small form-factor fiber optic connector commonly used in high-density applications due to its small size.
  + Straight Tip \(ST\) - A fiber optic connector with a twist-locking mechanism used in single and multimode networks.
  + Multi-fiber Push On \(MPO\) - A high-density fiber optic connector designed for data communications, capable of connecting multiple fibers in a single connector.
  + Registered Jack \(RJ\)11 - A connector type primarily used for telephone wiring, and also known as an 8P8C connectors
  + F-type - A connector mainly used for coaxial cable and is common in television, satellite, and cable modem applications.
  + Bayonet Neill–Concelman \(BNC\) - A quick connect/disconnect RF connector used for coaxial cable, especially in video and RF applications.


--------
* Additional Resources:
  + If applicable