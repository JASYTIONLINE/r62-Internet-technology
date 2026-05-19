## DNS
At the end of this episode, I will be able to:    

1. Describe the DNS and discuss key aspects of the technology 

Learner Objective: *Learn about DNS and some of its key functions and components*    

Description: In this episode, you will learn about the network service called DNS. This includes information on Domain Name Security Extensions, DNS over HTTPS, DNS over TLS, and DNS records and zone types. 

-----------

* DNS, or Domain Name System, is a hierarchical decentralized naming system that translates human-readable domain names into numerical IP addresses, facilitating the routing of internet traffic.
* DNSSEC (Domain Name System Security Extensions) is a suite of extensions to DNS that adds an additional layer of security by digitally signing DNS data to verify its authenticity, ensuring that users are directed to the correct and legitimate websites; it helps prevent DNS spoofing and other malicious activities by providing a mechanism for validating the integrity of DNS responses. DNSSEC strengthens the trustworthiness of the DNS infrastructure, enhancing the overall security and reliability of internet communication.
* DNS over HTTP (DoH) is a protocol that enables the encryption and transmission of DNS queries and responses over the HTTPS protocol, enhancing user privacy and security by preventing potential eavesdropping and tampering of DNS traffic; it allows users to resolve domain names securely without relying on traditional, plaintext DNS queries. DoH aims to provide a more private and secure DNS resolution process, mitigating some of the vulnerabilities associated with conventional DNS communication.
* DNS over TLS (DoT) is a security protocol that encrypts DNS queries and responses, enhancing user privacy by protecting against eavesdropping and manipulation of DNS traffic; it operates by wrapping DNS messages in a TLS (Transport Layer Security) layer, securing the communication between the client and the DNS resolver. DoT provides an additional layer of confidentiality to DNS transactions, contributing to a more secure and private browsing experience.
* Record types in DNS include
 - Address (A)
 - IPv6 Address (AAAA)
 - Canonical name (CNAME)
 - Mail Exchange (MX)
 - Text (TXT)
 - Nameserver (NS)
 - Pointer (PTR) 
* Zone types in DNS include Forward and Reverse types 
* There are also primary and secondary zones and recursive zones
* An alternative to DNS on a local machine is a hosts file - this is a simple text file that is checked for IP address to name resolution - it can be used to override DNS lookups in a Windows environment 

-----------

Additional Resources:

*What is DNS*
https://aws.amazon.com/route53/what-is-dns/
