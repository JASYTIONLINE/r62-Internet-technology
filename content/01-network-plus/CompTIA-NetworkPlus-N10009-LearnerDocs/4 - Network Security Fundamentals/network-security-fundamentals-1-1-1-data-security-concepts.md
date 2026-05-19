Episode: Data Security Concepts<br>

--------------------------------------------------------------------------------

+ Logical Security: Encryption
  - What are the 3 States of Data?
    + Data at Rest
    + Data in Transit
    + Data in Use
  - How can we use encryption to protect data in each state?
    + Data at Rest
      - Full-Disk Encryption
        + LUKS (Linux Unified Key Setup)
        + VeraCrypt
        + Bitlocker
      - File Encryption
        + OpenSSL
          - Encrypt: `openssl enc -aes-256-cbc -in pics.txt -out pics.enc`
          - Decrypt: `openssl enc -d -aes-256-cbc -in pics.enc -out pics.txt`
    + Data in Transit
      - HTTPS vs HTTP
      - SSH vs Telnet
    + Data in Use
