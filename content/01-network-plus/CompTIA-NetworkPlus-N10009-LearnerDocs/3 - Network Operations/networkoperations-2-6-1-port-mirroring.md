## Port Mirroring 
At the end of this episode, I will be able to:    

1. Explain the need for port mirroring and how this network monitoring tool operates 

Learner Objective: *Learn about port mirroring as it would be used in a modern network*    

Description: In this episode, you will learn about why there is a need for port mirroring technology. You also learn about how port mirroring operates. 

-----------

* Port mirroring, also known as port monitoring or spanning port, is a networking technique used to monitor network traffic by forwarding a copy of network packets from one network switch port to another. This allows network administrators to analyze and inspect the traffic passing through a specific port without affecting the normal operation of the network.
* Here's how port mirroring works and how it is used in networking today:
* Configuration: Port mirroring is typically configured on network switches. The switch is configured to copy the traffic from one or more source ports to a designated destination port (monitoring port). The source port is the port from which the network traffic is to be monitored, while the destination port is the port where the monitoring device (such as a packet analyzer or network monitoring tool) is connected.
* Use Cases: 
* Network Monitoring and Analysis: Port mirroring is commonly used for network troubleshooting, monitoring, and analysis. By inspecting the mirrored traffic, administrators can identify network issues, analyze performance, and detect potential security threats. 
* Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS): Security appliances, like IDS and IPS, can be connected to the mirrored port to analyze network traffic for malicious activity and take appropriate actions.
* Packet Capture: Network engineers often use packet analyzers or capture tools connected to the mirrored port to capture and analyze packets for debugging, protocol analysis, or compliance monitoring.
* Bandwidth Monitoring: Port mirroring helps in monitoring bandwidth usage by capturing and analyzing the traffic on specific ports, allowing administrators to identify high-traffic users or applications.
* Types of Port Mirroring: Local (Switch-based) Port Mirroring: The switch itself performs the mirroring internally without involving external devices. This is suitable for small to medium-sized networks. Remote Port Mirroring: In larger networks, where switches might be distributed across different locations, remote port mirroring involves sending mirrored traffic to a monitoring device located in a different physical location.

-----------

Additional Resources:

*Port Mirroring Explained - Basis, Configuration, and FAQs*
https://community.fs.com/article/port-mirroring-explained-basis-configuration-and-fa-qs.html
