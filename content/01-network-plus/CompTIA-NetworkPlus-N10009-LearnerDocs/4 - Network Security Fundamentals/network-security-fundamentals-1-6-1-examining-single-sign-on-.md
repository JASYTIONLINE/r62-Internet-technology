## 6-2-1: Examining Single Sign-on

At the end of this episode, I will be able to:    

1. Identify and explain the importance and components of single sign-on or SSO technologies, given a scenario.    

Learner Objective: *Identify and explain the importance and components of single sign-on or SSO technologies, given a scenario*    

Description: In this episode, the learner will examine single sign-on or SSO technologies and the importance and components of security. We will explore identity federation, identity providers or IdPs, SAML, OAuth, and OpenID concepts.

--------  

* * What is single sign-on \(SSO\) and how is it beneficial?
	+ An authentication process that uses technologies enabling users to access multiple applications, services and resources using a single set of login credentials.
* What are some of the benefits of \(SSO\)?
	+ Eliminating multiple usernames and passwords to be entered.
		- Simplifying the user experience
	+ Centralized access control to multiple services
	+ Increased security with MFA, conditional access \(attribute-based access control
* What is identity federation?
	+ A mechanism allowing users to access multiple systems, applications or resources using a single set of login credentials, reducing the burden of authentication and improving user experience.
* What is an identity provider \(IdP\)
	+  A trusted entity that authenticates users and provides identity information to a service provider
	+ Can be internal IdPs such as ADDS or LDAP server
	+ Can be external IdPs such as large service providers like Google, Facebook and Microsoft
* Is there a benefit to using IdPs?
	+ We use them daily on the web, applications, the cloud and on-premise.
	+ Centralized management
	+ Familiarity \(better user experience\)
	+ Enabling seamless, secure access to various resources with a single login.
	+ External IdPs provide large user identity databases for a fee
* What is SAML?
	+  A standardized, XML-based way to communicate authentication data once, then reuse that information across multiple resources. 
* What is OAuth?
	+ An authorization *framework* \(as opposed to a protocol\) in SSO implementations enabling IdPs to limit access permissions, presented to a Service Provider \(SP\) on behalf of a user, allowing seamless access to protected resources without sharing the user's login credentials.
		- Service provider = commonly a web application
	+ Separates out the authorization service and API server \(API server only receives OAuth tokens\)
* What is OpenID?
	+ Adds an identity layer to OAuth2.0, providing information about the user.
	+ Enables client login sessions
* What is Kerberos?
	+ A network authentication protocol enabling secure authentication between clients and servers within a network, facilitating single sign-on and data encryption for enhanced security.
	
----------
* Additional Resources:
	+ If applicable