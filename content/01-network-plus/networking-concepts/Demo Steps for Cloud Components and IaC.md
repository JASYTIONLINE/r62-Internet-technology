## Cloud Components Demo

----

* vNet
  + acilearning-cloud-demo-vnet01
    - Explain Security as Network Function Virtualization
  + Network 
    - Address space = 10.0.0.0/16
    - Default = Subnet01, 10.0.0.0/24
    - Subnet02 = 10.0.1.0/24
    - FirewallSubnet = 10.0.5.0/29 (3 IPs, 5 reserved
  + Tagging
    - Chargeback and cost tracking
  + Show template in Visual Studio Code
  
----
### IaC episode,

* Show JSON template for Azure vNet is Visual Studio Code
  + Examine the JSON, observe the language tell's the ARM what to provision.
  + SDN and SD-WAN are built to allow this programmatic control over the network infrastructure.
  + From a cloud standpoint this is a crucial element for automation and scalability, with consistent, repeatable results. Let the code do the repetituous work.

