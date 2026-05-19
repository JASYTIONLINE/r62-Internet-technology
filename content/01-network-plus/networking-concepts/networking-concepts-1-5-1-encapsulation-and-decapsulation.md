## 1-5-1: Encapsulation and Decapsulation

At the end of this episode, I will be able to:    

1. Explain the process of encapsulation and decapsulation, given a scenario.    

Learner Objective: *Explain the process of encapsulation and decapsulation, given a scenario*    

Description: In this episode, the learner will examine the process of encapsulation and decapsulation. We will explore the significance of the layers of the OSI Model.

--------  

* Encapsulation basics
  + Involves wrapping data with protocol information as it descends OSI layers.
  + Each OSI layer adds a header or footer with specific control information.
* Decapsulation basics
  + Occurs as data ascends OSI layers in the receiving device.
  + Each layer removes and processes its corresponding header or footer.
  + Ensures correct data interpretation and handling across network systems.
 -----------
* Encapsulation Process
  + Application Layer
    - Encapsulates data with application-specific protocols like HTTP, SMTP, or FTP.
  + Presentation Layer
    - Adds format and encryption information, ensuring data can be correctly interpreted.
  + Session Layer
    - Includes control tokens and synchronization data, managing dialogue between systems.
  + Transport Layer
    - Introduces segments or datagrams, adding source and destination port numbers for communication endpoints.
  + Network Layer
    - Encapsulates into packets, adding logical addressing information with IP headers for routing.
  + Data Link Layer
    - Frames the packet, adding MAC addresses and error-checking information like CRC.
  + Physical Layer
    - Converts frames into electrical, radio, or optical signals for transmission over physical media.
* Decapsulation Process
  + Occurs as data ascends OSI layers in the receiving device.
  + Each layer removes and processes its corresponding header or footer.
  + Ensures correct data interpretation and handling across network systems.
* Service Data Units \(SDUs\) and Protocol Data Units \(PDUs\)in OSI Model.
  + Service Data Units (SDUs)
    - Data passed from a higher layer to a lower layer, considered the payload for transmission.
    - Example in Application Layer: A user's text message in an instant messaging application.
    - Example in Presentation Layer: The same text message, now formatted for network transmission (e.g., encoded in UTF-8).
  + Protocol Data Units (PDUs)
    - Formed when each layer encapsulates the SDU by adding its specific header or footer.
    - Example in Application Layer PDU: The text message with HTTP headers if being sent via a web service.
    - Example in Presentation Layer PDU: The encoded text message, possibly compressed or encrypted for secure transmission.
  + Encapsulation Process
    - Converts SDUs into PDUs, adding layer-specific control information as the data descends through OSI layers.
  + Decapsulation Process
    - Strips off headers or footers from PDUs, converting them back into SDUs as data ascends through OSI layers in the receiver.

--------
* Additional Resources:
	+ If applicable