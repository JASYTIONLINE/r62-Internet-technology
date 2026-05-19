## 5-1-1: Examining Network Commands in Windows

At the end of this episode, I will be able to:    

1. Identify and explain common network commands in Windows systems, given a scenario.    

Learner Objective: *Identify and explain common network commands in Windows systems, given a scenario*    

Description: In this episode, the learner will examine common network troubleshooting commands. We will explore command such as ping, ipconfig, nslookup, tracert, netstat and more.

--------  

* What commands can be used to troubleshoot the network?
   + *ipconfig* - various utilities to display and configure TCP/IP settings in Windows \(ipconfig\) and Linux \(ip/ifconfig/)
    ```
    ipconfig (displays IP configuration information)
    ipconfig /all (displays detailed IP configuration information)
    ipconfig /release (discontinues use of currently DHCP-assigned IP address and options)
    ipconfig /renew (initiates the DHCP lease process D.O.R.A)
    ```
  + *ping* - tests reachability of and endpoint or host
    ```
    ping 192.168.0.10 - sends ICMP echo requests to 192.168.0.10 to check connectivity and measure response time
    ping -n 2 www.google.com - "-n" specifies number of ICMP echo requests to send
    ```
  + Process
    - Start with 127.0.0.1 \(Loopback, verifies TCP/IP is functional\)
    - Next, ping the local host's IP address \(verifies local IP address\)
    - Next, ping another host on the local network \(verifies communication on the local network\)
    - Next, ping the default gateway \(verifies communication with the router, connected to the local network\)
    - Finally, ping a remote host \(verifies connectivity beyond the local network\)
* What if we wanted to determine where these packets are going, what can we use?
  + tracert - network path tracing 
    ```
    tracert www.google.com (traces the route/path taken to destination in Windows-based systems)
    ```
* With name resolution being so important to networking, how about a command that can help with DNS?
  + *nslookup* - tests DNS name resolution 
    ```
    nslookup <domain>
    nslookup acilearning.com (perform name lookup)
    nslookup acilearning.com 8.8.8.8 (perform name lookup with DNS server 8.8.8.8)
    nslookup <press enter> (Enters interactive mode)
      set type=AAAA (sets lookup type to IPv6)
      google.com (performs name lookup for AAAA records)
      set type=SOA (sets lookup type to Start of Authority records)
      google.com (performs lookup for SOA records)
      exit
    ```
   + *ipconfig*
    ```
    ipconfig /displaydns (displays local resolver cache)
    ipconfig /flushdns (clears local resolver cache)
    ```
* If we need to troubleshoot connections and gather protocol information, does Windows have something?
  + *netstat* - displays various network statistics, including TCP connections/ports
    ```
    netstat -a (displays the current state of all connections)
    netstat -P TCP (displays network statistics for the TCP protocol)
    netstat -s -e (view the statistic of Ethernet connections)
    ```
* How about gathering information such as routing and ARP tables?
  + *arp* - displays and modifies the local Address Resolution Protocol \(ARP\) table
    ```
    arp -a (displays ARP table entries)
    arp -s xxx.xxx.xxx aa-bb-cc-11-22-33 (adds a ARP entries to the table
    ```
  + *route* - displays and manipulates the routing table  ```
    route print - display full routing table
    route print -4/-6 - displays IPv4 or IPv6 routing table
    ```
--------
* Additional Resources:
	+ If applicable