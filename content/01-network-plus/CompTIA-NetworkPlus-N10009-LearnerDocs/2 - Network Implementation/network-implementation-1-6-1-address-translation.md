## Address Translation 
At the end of this episode, I will be able to:    

1. Address translation 

Learner Objective: *Learn about address translation in modern networks including network address translation and port address translation*    

Description: In this episode, you will learn about address translation in modern networks. This includes a discussion of NAT and PAT. This episode also walks you through a sample configuration on a Cisco router.    

-----------

* When it was clear there would be a shortage of IPv4 addresses with the explosion of the public Internet, the standards bodies created RFC 1918 Private Addresses
* These addresses may be used internally on networks and then translated to permit communication on the public Internet 
* The RFC 1918 addresses are - 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
* Network Address Translation (NAT) can be used to make a one to one translation of a private use only address (for example 10.10.10.100) to an Internet routable public address (for example, 67.10.23.78)
* Port Address Translation (PAT) allows a single public IP address to be shared by multiple internal private use only clients - arbitrary "port" numbers are used in order to track the internal clients using the single public address 

-----------

Additional Resources:

*Network Address Translation*
https://en.wikipedia.org/wiki/Network_address_translation
