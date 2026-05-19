## Flow Data and Packet Captures
At the end of this episode, I will be able to:    

1. Describe flow data and give an example of data collection
2. Explain packet capture technology 

Learner Objective: *Learn about flow data and packet captures in modern networking environments*    

Description: In this episode, you will learn the importance of flow data and packet captures in modern networking environments. This will include examples like NetFlow and Wireshark.   

-----------

* Flow data - flow data plays a crucial role in network monitoring, providing valuable insights into the traffic patterns and behavior within a network. Flow data, often collected using protocols like NetFlow, sFlow, or IPFIX, represents the communication between network devices by capturing information about conversations between source and destination IP addresses, ports, protocols, and other relevant details.
* NetFlow - NetFlow is a network protocol developed by Cisco that enables the collection and analysis of IP traffic flow data. It provides detailed information about the source and destination of network traffic, along with associated attributes, allowing network administrators to gain insights into network utilization, security threats, and overall performance.
* sFlow - sFlow is a sampling-based network monitoring protocol that provides real-time visibility into network traffic by periodically sampling packets on network devices. It delivers essential information about network performance, allowing administrators to analyze and respond to issues such as congestion, security threats, and application performance.
* IPFIX, or Internet Protocol Flow Information Export, is a standardized protocol that extends the concept of NetFlow, facilitating the export of flow information from routers, switches, and other network devices to external collectors or analyzers. It allows for the efficient monitoring and analysis of IP traffic, aiding in network management, security, and performance optimization.
* Packet captures, also known as packet sniffing or network sniffing, involve capturing and analyzing the raw data packets flowing through a network. We often use such data for troubleshooting, performance monitoring, security analysis, baseline establishment, and even for compliance and auditing purposes. 
* Wireshark - Wireshark is a widely-used open-source packet analysis tool that allows users to capture, inspect, and analyze the data traveling over a network in real-time. With a user-friendly interface and support for a broad range of protocols, Wireshark is a powerful tool for network administrators, security professionals, and developers to troubleshoot network issues, perform protocol analysis, and conduct in-depth packet-level investigations.

-----------

Additional Resources:

*What is NetFlow*
https://www.solarwinds.com/netflow-traffic-analyzer/use-cases/what-is-netflow
