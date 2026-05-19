Episode: Network Security Defenses

--------------------------------------------------------------------------------

Implement Network Security Defenses
+ Device Hardening
  - Disable Unused Ports
    + ```
      enable
      conf t
      int fa 0/1
      shut
      ```
  - Change Default Passwords
    + https://cirt.net/passwords
+ NAC
  - Port Security
  - 802.1X
    - Supplicant
      + Extensible Authentication Protocol(EAP)
    - Authenticator
      + Connects the Supplicant to the Authentication Server
    - Authentication Server
      + Receives and Responds to requests for network access
        - Typically running RADIUS and EAP
  - MAC Filtering
+ Key Management
+ Security Rules
  - ACLs
  - URL Filtering
    + Known Malicious Websites
    + Adult/Gambling Webistes
  - Content Filtering
    + Categories
      - News
      - Social Media
      - Adult
      - Gaming
      - File Types
  - Vendors
    + https://www.barracuda.com/products/network-protection/web-security-gateway
    + https://umbrella.cisco.com/
+ Zones
  - Trusted vs. Untrusted
  - Screened Subnet
