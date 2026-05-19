Episode: Time-Based Auth and GeoFencing<br>

--------------------------------------------------------------------------------

+ Time-Based Authentication and Geofencing
  - Time-Based Auth
    + Utilizes Time-Based One-Time Password
      - What is TOTP?
        + Ususally a 6-digit code that changes after a short period of time
        + The Authentication system is also aware of the current code
          - Seen in the form of <u>*Authenticator Apps*</u>
            + Microsoft Authenticator
            + Google Authenticator
            + Authy
              - Setup requires
                + "shared secret" (Usually a QR-code)
                + Time synchronization
                + Cryptographic hash function
          - DIY Authenticator
            + https://github.com/hectorm/otpauth
            + Demo: https://totp.danhersam.com/
