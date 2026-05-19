## 4-3-1: Examining Digital Certificates

At the end of this episode, I will be able to:    

1. Identify and explain the importance of digital certificates, given a scenario.    

Learner Objective: *Identify and explain the importance of digital certificates, given a scenario*    

Description: In this episode, the learner will examine digital certificates, digital signatures and certificate formats. We will explore the file extensions and where these certificates are utilized.

--------  
* What are digital certificates?
	+ An electronic document issued by a trusted authority called a certificate authority \(CA\)
	+ This document binds a public key to an individual, device, or service.
	+ These certificates serve as a means of authentication and encryption
	+ Digital certificates are used to:
		- Secure communications \(HTTPS, SSH, SFTP..\)
		- Create digital signatures
		- Access control
		- Can provide strong authentication
* You mentioned digital signatures; what are they?
	+ Digital signature - the use of a private key to create a unique value attached to a document or message
	+ This allows anyone with the corresponding public key to verify the signature, ensuring it hasn't been tampered with and was indeed signed by the private key holder
* What are some types of certificates?
	+ *X.509 Certificates*:
		- Usage: Authentication, secure email, SSL/TLS encryption, code signing, VPNs, and more.
		- File Extension: .cer, .crt, .der, .pem, .pfx, .p12 for example
	+ *Public-Key Cryptography Standards #7 \(PKCS#7\) certificates*:
		- Usage: Secure email attachments, code signing, and digital signatures for documents.
		- File Extension: .p7b, .p7c, .p7m
	+ *Public-Key Cryptography Standards #12 certificates*:
		- Usage: Typically used for storing private keys and associated X.509 certificates, often for secure authentication.
		- File Extension: .pfx, .p12
	+ *Privacy Enhanced Mail \(PEM\) certificates*:
		- Usage: Often used for SSL/TLS certificates, it can include certificates, private keys, and CA bundles.
		- File Extension: .pem
	+ *Distinguished Encoding Rules \(DER\) certificates*:
		- Usage: Commonly used in binary format for SSL/TLS certificates and code signing.
		- File Extension: .der, .cers
	+ *Pretty Good Privacy \(PGP\) certificates*:
		- Usage: Used for secure email communication and encryption of files and messages.
		- File Extension: .pgp, .asc
	+ *Secure/Multipurpose Internet Mail Extensions \(S/MIME\) certificates*:
		- Usage: Secure email communication and digital signatures for message integrity.
		- File Extension: .p7s

----------
* Additional Resources:
	+ If applicable