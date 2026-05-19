---
title: 0-0-0 Introduction to Network Communications
description: This page introduces the material to be covered in Comp Tia Network Plus.
tags:
draft: false
enableToc: true
shortcode: "[Doc]"
---
###### [[#Section Contents|Navigation Section]]
# CompTIA Network+ (N10-008)

## Lesson 01: Introduction to Network Communications

  

---

  

### 🎯 Exam Objectives Covered:

- 1.1 Compare and contrast the Open Systems Interconnection (OSI) model layers and encapsulation concepts

- 1.2 Compare and contrast transmission control protocol (TCP) and user datagram protocol (UDP)

- 1.3 Explain the concepts and characteristics of routing and switching

- 2.1 Compare and contrast various devices, their functions, and features

- 2.3 Compare and contrast different network topologies

  

---

  

## 🧠 Key Concepts

  

---

  

### 🌐 What Is a Network?

  

A **network** is two or more connected devices that share data or resources. A single device does **not** form a network.

  

**Primary purposes:**

- **Communication** (e.g., messaging, email)

- **Resource sharing** (e.g., files, printers, applications)

- **Data transfer** between clients and servers

  

---

  

### 🔗 Transmission Media

  

#### 1. **Bounded (Wired) Media**

- **Copper (Ethernet)** – Most common; uses twisted pair cables (e.g., Cat5e, Cat6)

- **Fiber Optic** – High-speed, long-distance, immune to EMI

  

#### 2. **Unbounded (Wireless) Media**

- Uses radiated energy (no physical cable)

  - **Wi-Fi**

  - **Cellular (4G, 5G)**

  - **Satellite**

  - **Infrared**

**Wired vs. Wireless**  

- **Wired**: Generally faster, more secure, but limited by physical constraints  

- **Wireless**: Flexible, good for hard-to-wire areas, but can be slower and susceptible to interference

  

---

  

### 🖥️ Network Components

  

#### 1. **Endpoints**

Devices that are the source or destination of data

- **User Devices**: PCs, tablets, smartphones

- **IoT Devices**: Smart TVs, thermostats, sensors

- **Servers**: File, web, database servers

  

> 📌 Endpoints = Start or End of a communication session

  

---

  

#### 2. **Intermediary Devices (Redistribution Points)**

Devices that move data through the network

- **Hub**: Repeats signal (Layer 1) – obsolete

- **Switch**: Forwards frames based on MAC addresses (Layer 2)

- **Router**: Forwards packets based on IP addresses (Layer 3)

- **Access Points**: Provide wireless connectivity

- **Modems/Gateways**: Connect to external networks (e.g., ISP)

  

---

  

### 🧭 Network Topologies

  

#### 📌 What is a Topology?

The **arrangement** of devices and how they are interconnected.

  

---

  

#### 1. **Bus Topology** (Legacy)

- Single backbone cable with devices tapped in

- **Pros**: Simple, cheap

- **Cons**: One break = entire network down, requires termination

- Rarely used today

  

---

  

#### 2. **Star Topology** (Most common today)

- Devices connect to a central device (usually a switch)

- **Pros**: Fault-tolerant (if one cable fails, rest are unaffected), scalable

- **Cons**: Central device is a single point of failure

  

---

  

#### 3. **Ring Topology** (Legacy/WAN)

- Devices form a closed loop

- **Pros**: Predictable performance, used in some WANs (e.g., SONET)

- **Cons**: Break in ring = failure (unless dual ring/self-healing)

- Examples: Token Ring (IBM), FDDI

  

---

  

#### 4. **Mesh Topology**

- Every device connects to every other device

- **Full Mesh**: All nodes connected

- **Partial Mesh**: Some nodes interconnected

- **Used in**: WANs, ad-hoc wireless networks

- **Pros**: High redundancy

- **Cons**: Complex and expensive

  

---

  

#### 5. **Tree Topology**

- Hierarchical structure (e.g., root node → child nodes)

- Often used in **logical topologies** (e.g., DNS hierarchy)

- Looks like an **extended star**

  

---

  

#### 6. **Hybrid Topology**

- Combination of two or more topologies

- Often occurs due to **mergers/acquisitions** or legacy integration

- Not designed intentionally—often inherited

  

---

  

### 📊 Physical vs. Logical Topology

  

| Type         | Description |

|--------------|-------------|

| **Physical** | Physical layout of cables/devices |

| **Logical**  | The path data takes across the network |

  

---

  

## 🧩 Quick Reference: Devices

  

| Device       | Layer | Function |

|--------------|-------|----------|

| Hub          | 1     | Repeats signal to all ports |

| Switch       | 2     | Forwards based on MAC address |

| Router       | 3     | Routes packets based on IP |

| Access Point | 2     | Wireless bridge to wired LAN |

| Modem        | 1     | Converts digital to analog signals |

| Firewall     | 3/4   | Filters traffic by rules |

  

---

  

## 📝 Exam Tips

  

- **Understand the purpose** of each network device

- Be familiar with **topology diagrams** (star, mesh, bus, etc.)

- Know the **pros and cons** of wired vs. wireless

- Remember: **Endpoints** are source/destination, **intermediary devices** move traffic

- Distinguish between **physical** and **logical** topologies

  

---

  

## ✅ Practice Check

  

1. **Which transmission medium is most immune to EMI?**  

   → Fiber Optic

  

2. **What topology provides the highest fault tolerance?**  

   → Full Mesh

  

3. **In a star topology, what happens if one node fails?**  

   → Only that node is affected

  

4. **What device makes forwarding decisions based on MAC addresses?**  

   → Switch

  

5. **What is a hybrid topology?**  

   → A mix of two or more topologies (e.g., star within a ring)

  

---

  

## 📚 Next Steps

  

- Review: OSI Model (Layered Communication Model)

- Deep Dive: IP Addressing and Subnetting

- Upcoming: Network Protocols and Port Numbers

  

---

---
[[#Section Contents Navigation Section|Back to the Top]]
## Section Contents

1. [Category 1 Home](01-category-1/index.md)
2. [Page 1](01-category-1/content-page-1.md)
3. [Page 2](01-category-1/content-page-2.md)
## Quick Links
1. [Interactive Glossary](00-welcome/9-glossary.md)
2. [Site Map](00-welcome/10-site-map.md)
3. [Home Page](index.md)