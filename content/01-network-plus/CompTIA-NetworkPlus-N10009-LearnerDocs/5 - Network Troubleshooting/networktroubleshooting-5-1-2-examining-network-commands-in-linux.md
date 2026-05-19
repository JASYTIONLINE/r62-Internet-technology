### Examining Network Commands in Linux

At the end of this episode, I will be able to:    

1. Identify and explain common network command commands in Linux systems, given a scenario.    

Learner Objective: *Identify and explain common network command commands in Linux systems, given a scenario*    

Description: In this episode, the learner will examine common network troubleshooting commands used in Linux. We will explore command such as ping, ip, dig, mtr,  nmap, tcpdump and more.

------

* What is a good command to use in Linux, when starting to troubleshooting connections?
  + *ip* - display and modify routing, network devices, interfaces and tunnels
    ```
    ip a/addr - display IP address
    ip a show eth0/lo - display information about the specified interface
    ip link show up - display all links with a state = UP
    ip route - displays IP routing table
    ```
  + *ping* - tests reachability of and endpoint or host
    ```
    ping 192.168.0.10 - sends ICMP echo requests to 192.168.0.10 to check connectivity and measure response time
    ping -c 2 google.com - "-c 2": sends 4 echo requests to www.google.com. Useful for quick tests)
    ping -s 90 google.com = -s defines size of ICMP packets in bytes
    ```
  + Process
    - Start with 127.0.0.1 \(Loopback, verifies TCP/IP is functional\)
    - Next, ping the local host's IP address \(verifies local IP address\)
    - Next, ping another host on the local network \(verifies communication on the local network\)
    - Next, ping the default gateway \(verifies communication with the router, connected to the local network\)
    - Finally, ping a remote host \(verifies connectivity beyond the local network\)
* What if we think name resolution is an issue, what command can we use?
  + *dig* - DNS lookup utility
    ```
    dig google.com - queries for DNS for an A record for google.com
    dig @8.8.8.8 google.com queries the specified DNS server for an A record
    dig -x 8.8.8.8 - performs reverse lookup
    dig +trace example.com - performs route tracing for DNS query
    dig example.com A AAAA +noall +answer - queries the DNS server for A and AAAA records, suppress default output
    ```
* If we would like to gather information about a connection path, how can be test this?
  + mtr - \(My Traceroute\) combines traceroute and ping functionality
    ```
    mtr google.com - performs traceroute, displaying packet path from source to destination
    mtr -c 10 google.com - set the maximum ping request to 10
    ```
* If we need to gather data off of the network for inspection, is there a command for this  
  + *tcpdump* - dump/capture packets off of the network
    ```
    tcpdump -i eth0 - capture packets from specified interface
    tcpdump icmp
    tcpdump -i eth0 -w mycapture.pcap 
      - capture from specified interface
      - write packets to the mycapture.pcap file
    ```
* If we need to gather perform network scanning, what utilty can we use?
  + *nmap* - Network mapper, host discovery and port scanning
    ```
    nmap 192.168.0.10 - Perform simple scan to identify open ports and services 
    nmap myserver.com - Perform simple scan to identify open ports and services
    nmap 
    nmap 192.168.0.1-50
    ```