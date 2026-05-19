Episode: Authentication with LDAP<br>

--------------------------------------------------------------------------------

+ LDAP Authentication
  - What is LDAP?
    + *Lightweight Directory Access Protocol*
    + Is like a digital "phonebook" for resources
      - https://www.openldap.org/
      - LDAP gives you the ability to query Directory Services
        + This is basically a network-based database of network resources
          - Files
          - Printers
          - Servers
          - Users
            + Is Windows Active Directory and LDAP the same thing?
              - No, but AD uses LDAP
  - How is it used for Authentication?
    + *ldapAuthProcess app*
      1. Connection Establishment:
        + The client, which could be a user or an application, initiates a
          connection to the LDAP server using the LDAP protocol (usually over port
          389 or over SSL on port 636).
      2. Binding:
        + The client sends a "bind" request to the LDAP server. This request
          contains the user's distinguished name (DN) and a password. This can
          be an anonymous bind, a simple bind (username and password), or other
          supported authentication methods like SASL (Simple Authentication and
          Security Layer).
      3. Server Validation:
        + The LDAP server checks the provided credentials against the directory
          information. If the credentials are correct, the server responds with
          a success message. If not, it returns an error indicating authentication
          failure.
      4. Search (Optional):
        + Upon successful binding, the client may perform a search to retrieve
          additional information from the directory, such as user attributes or
          group memberships.
      5. Authentication Response:
        + If the server validates the credentials, the client receives confirmation
          and is granted access to the directory information or any services the
          user is authorized to access.
      6. Session Establishment:
        + After successful authentication, the user/client can establish a session
          to access the requested resources or services.
