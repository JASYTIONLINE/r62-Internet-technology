Indicators of Network Attacks
=============================

+ DDoS
  - High network bandwidth utilization
    + Inbound traffic
  - Can't access network service
    + Website
    + Cloud
    + Servers
  - Can't access Network
  - Overloaded network appliances
    + DDoS attacks can be used to crash firewalls and IDS/IPS
+ DNS attacks
  - Domain Takeover/Hijacking
  - Domain Spoofing/Poisoning
    + Static DNS Entries
      - Static DNS set for Network Adapter in Windows
      - `hosts` file
      - `resolv.conf` file
    + Poisoned DNS Cache
      - `ipconfig /all`
      - `ipconfig /displaydns`
+ Wireless
  - Poor network performance over wifi
  - Unauthorized devices on network
    + Check list of connected hosts using admin console
  - Changes to AP/Router settings
    + SSID
    + Password/PSK
    + DNS
    + Firewall rules
  - Inability to connect to wifi
    + Disassociation and/or Deauthentication attack
    + Jamming
  - Rogue APs and/or Evil Twins
  - Unusual requests for network creds
+ MiTM/On-Path
  - Anything strange with SSL/TLS
    + Warnings
    + Mismatch
      - Check cert for the site in question for oddities
  - Unexpected login prompts
  - Strange emails
    + Responses to emails you never sent
    + Odd responses to emails you did send
  - Unexpected SMS Verifications
+ Credential Replay
  - Unexpected account lockouts
    + Attacker might be trying to reuse creds repeatedly, tripping a lockout
  - Unusual login activity
    + Email notifications that a new login has occurred
      - Email contains details such as
        + Device Type
        + OS
        + IP
        + Geolocation
        + Login time
  - Suspicious Account Changes
    + Phone numbers
    + Backup accounts
    + Signed-In Devices
+ Malicious Code
  - Known C2 Traffic
  - Data Exfiltration
