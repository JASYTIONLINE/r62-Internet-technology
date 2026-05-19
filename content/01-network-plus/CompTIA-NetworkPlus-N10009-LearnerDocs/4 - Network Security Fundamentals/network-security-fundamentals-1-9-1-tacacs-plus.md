Episode: TACACS+<br>

--------------------------------------------------------------------------------


+ TACACS+
  - Terminal Access Controller Access - Control System Plus
    + Used for Authentication, Authorization, and Accounting(AAA)
      - Specifically for "Device Administration"
        + DA includes
          - Authenticating access to network devices
          - Providing central authorization of operations
          - Auditing of those operations
  - How is it different from RADIUS
    + Supports encryption
      - The specific encryption alg is not publicly disclosed
        + Hashes the Key with MD5 then XORs the hash value
    + Uses TCP instead of UDP
