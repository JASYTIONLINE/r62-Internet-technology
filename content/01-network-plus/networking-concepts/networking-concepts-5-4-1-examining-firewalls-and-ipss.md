## 5-4-1: Examining Firewalls and IPSs

At the end of this episode, I will be able to:    

1. Identify and explain the fundamental role and functionality of firewall and intrusion detection and prevention systems, given a scenario.    

Learner Objective: *Identify and explain the fundamental role and functionality of firewalls and intrusion detection and prevention systems, given a scenario.*    

Description: In this episode, the learner will examine network firewalls, intrusion detection systems (IDS), and intrusion prevention systems (IPS). We will explore various types of firewalls and functionalities.

--------  

* What are network firewalls?
  + Network Firewalls
    - These devices act as a security barrier between internal and external networks, controlling incoming and outgoing network traffic \(north-to-south traffic flows\) based on predetermined security rules.
    The primary purpose is to prevent unauthorized access while permitting outward communication.
* What are a few different types of firewalls and their associated functionality?
  + Types of firewalls
    - Packet-filtering
      * Examines packets entering or leaving the network, either accepting or rejecting the packet based on user-defined rules.
      * Low level operation of the TCP/IP protocol stack, not examining the data in the packet.
    - Stateful packet inspection 
      * Monitors the state of active connections, making decisions based on the context of the traffic and state of the network.
      * Provides a balance between performance and security.
    - Application-level
      * Filters incoming traffic between the network and the traffic source, operating at the application layer.
      * Inspects the data being sent and blocks harmful content or software.
    - Circuit-level
		* Circuit-level gateways or circuit-level firewall
      * Monitors TCP handshakes across the firewall to determine if the session is legitimate.
      * Operates at the session layer of the OSI model.
* Is there a firewall that bundles all of these various features?
  + Next-Generation Firewalls \(NGFW\)
    - Incorporates features of traditional firewalls with quality of service \(QoS\) functionalities.
    - Includes additional features like application awareness, integrated intrusion prevention, and cloud-delivered threat intelligence.
  + Intrusion Detection Systems \(IDS\)
    - Monitors networks or systems for malicious activity or policy violations.
    - Can be network-based \(NIDS\) or host-based \(HIDS\).
  + Intrusion Prevention Systems \(IPS\)
    - Similar to IDS but with the ability to prevent detected threats.
    - Actively blocks or prevents intrusions in real-time.
  + Unified Threat Management \(UTM\)
    - Combines and integrates various security services and features
	  * Firewall
	  * IDS/IPS
	  * Antivirus
	  * Gateway anti-spam
	  * Content filtering


--------
* Additional Resources:
  + Differences between stateful and circuit-level 
    - Stateful firewalls
	  * Keeps track of the state of active connections, making decisions based on the context of the traffic and the state of the network.
	  * Operate by inspecting both the header information and the contents of data packets.
	  * Stateful inspections monitor ongoing connections to ensure that the traffic is associated with a known connection.
	  * More of an awareness of the communications occurring over a network, can offer a higher level of security.
	  * Remembers previous communications and makes security decisions based on past packets and the state of connections.
	+ Circuit-level gateways:
	  * Operate at layer 5 of the OSI model, making security decisions based on the handshaking protocols.
	  * Monitor TCP handshaking between packets, determining whether a session request is legitimate.
	  * These gateways can hide information about the p