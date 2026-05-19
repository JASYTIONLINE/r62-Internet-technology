## 5-5-1: Examining Load Balancers and Proxies

At the end of this episode, I will be able to:    

1. Identify and explain the fundamental role and functionality of load balancers and proxies, given a scenario.    

Learner Objective: *Identify and explain the fundamental role and functionality of load balancers and proxies, given a scenario*    

Description: In this episode, the learner will examine load balancers and proxies. We will explore various types, services, and functionalities provided by these network components.

--------  

* What are load balancers used for on networks?
  + Distribute network or application traffic across multiple servers 
* What is the purpose of traffic distribution?
  + Improves responsiveness
  + Increases availability of applications, websites, or databases.
* What are some of the different types of load balancers?
  + Round Robin -  distributes requests sequentially across a group of servers in a repeating pattern.
  + Least connection - routes traffic to servers with the fewest active connections, useful in situations where server load is not evenly distributed.
  + Weighted connection - a weight is assigned to each server, higher weight values indicating a greater request capacity
  + IP hash - This method uses the client's IP address or an HTTP header value to determine which server receives the request, ensuring that users consistently connect to the same server.
  + Application-aware - makes routing decisions based on application-specific data such as HTTP headers, cookies, or data within the message content.
* What are proxies?
  + An intermediary for incoming clients requrest for resources from other servers
* What is the purpose of proxies?  
  + Provides caching services
    - Stores copies of frequently requested web resources.
    - Delivers cached resources directly, with no need for external data fetching.
    - Reduces latency and bandwidth consumption
    - Implements cache control policies for storage management.
  + Provides security
    - Acts as an intermediary, intercepting requests to external servers.
    - Mitigates direct external attacks, filtering malicious traffic.
    - Enforces security policies like access control and content filtering.
  + Anonymization services
    - Makes requests on behalf of the client, exposing only the proxy's IP address.
    - Useful in scenarios for bypassing geo-restrictions and maintaining privacy online.
* What are different proxies types?
  + Forward proxy - sits between the client and the Internet to control and filter client requests, enhance security, or bypass restrictions.
  + Reverse proxy - sits in front of web servers, forwarding client requests to those web servers, used for load balancing or caching.
  + Transparent proxy - intercepts communication at the network layer, not requiring special client configuration.
  + Web application proxies - sit in front of web servers, forwarding client requests to internal applications for external use \(on-premise to mobile, cloud, hybrid...etc. \), which is another purpose of proxies; also providing security services.

--------
* Additional Resources:
  + If applicable