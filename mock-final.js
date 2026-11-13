window.mockFinalQuestions = [
    {
        "id": 1,
        "question": "Which Cisco IOS command mode is indicated by the prompt 'Switch>' and provides limited basic monitoring capabilities?",
        "options": [
            "User EXEC Mode",
            "Global Configuration Mode",
            "Interface Configuration Mode",
            "Privileged EXEC Mode",
            "Line Configuration Mode"
        ],
        "correct": 0,
        "rationale": "The `Switch>` prompt indicates User EXEC mode, which provides basic monitoring; privileged EXEC mode uses `Switch#`."
    },
    {
        "id": 2,
        "question": "Which command is used to move from User EXEC mode to Privileged EXEC mode on a Cisco Catalyst switch?",
        "options": [
            "configure terminal",
            "interface vlan 1",
            "service password-encryption",
            "enable",
            "exit"
        ],
        "correct": 3,
        "rationale": "The `enable` command moves from User EXEC (`>`) to Privileged EXEC (`#`)."
    },
    {
        "id": 3,
        "question": "What command allows an administrator to enter Global Configuration mode from Privileged EXEC mode?",
        "options": [
            "enable secret class",
            "copy running-config startup-config",
            "configure terminal",
            "show ip interface brief",
            "line console 0"
        ],
        "correct": 2,
        "rationale": "From privileged EXEC, `configure terminal` enters global configuration mode."
    },
    {
        "id": 4,
        "question": "Which command assigns the system hostname 'S1-Floor2' to a Cisco switch in Global Configuration mode?",
        "options": [
            "name S1-Floor2",
            "hostname S1-Floor2",
            "device-name S1-Floor2",
            "switchname S1-Floor2",
            "host S1-Floor2"
        ],
        "correct": 1,
        "rationale": "The global configuration command `hostname` sets the device's displayed system name."
    },
    {
        "id": 5,
        "question": "Which command secures Privileged EXEC mode with an encrypted password set to 'secretpass'?",
        "options": [
            "service password-encryption secretpass",
            "line console 0 password secretpass",
            "enable password secretpass",
            "password enable secretpass",
            "enable secret secretpass"
        ],
        "correct": 4,
        "rationale": "`enable secret` configures the privileged EXEC password using a protected secret rather than the weaker `enable password` form."
    },
    {
        "id": 6,
        "question": "Which layer of the OSI model is responsible for logical IP addressing and routing packets across different networks?",
        "options": [
            "Physical Layer (Layer 1)",
            "Transport Layer (Layer 4)",
            "Data Link Layer (Layer 2)",
            "Network Layer (Layer 3)",
            "Session Layer (Layer 5)"
        ],
        "correct": 3,
        "rationale": "The OSI Network layer provides logical IP addressing and routes packets between networks."
    },
    {
        "id": 7,
        "question": "What is the correct Protocol Data Unit (PDU) name for data encapsulated at the OSI Data Link Layer?",
        "options": [
            "Segment",
            "Frame",
            "Bit",
            "Packet",
            "Data"
        ],
        "correct": 1,
        "rationale": "The Data Link layer encapsulates network-layer packets into frames."
    },
    {
        "id": 8,
        "question": "Which standards organization is primarily responsible for developing IEEE 802.3 Ethernet and IEEE 802.11 Wi-Fi standards?",
        "options": [
            "IEEE (Institute of Electrical and Electronics Engineers)",
            "IETF (Internet Engineering Task Force), which develops internet protocols such as TCP/IP",
            "ITU-T (Telecommunication Standardization Sector), which publishes global telecom standards",
            "ISO (International Organization for Standardization), which publishes cross-industry standards",
            "W3C (World Wide Web Consortium), which develops web platform standards"
        ],
        "correct": 0,
        "rationale": "IEEE develops the 802.3 Ethernet and 802.11 wireless LAN standards."
    },
    {
        "id": 9,
        "question": "Which TCP/IP Transport Layer protocol provides reliable, connection-oriented data delivery with error recovery?",
        "options": [
            "ICMP (Internet Control Message Protocol), which reports delivery errors and supports diagnostics",
            "ARP (Address Resolution Protocol), which maps local IPv4 addresses to hardware addresses",
            "TCP (Transmission Control Protocol)",
            "UDP (User Datagram Protocol), which sends connectionless datagrams without delivery guarantees",
            "IP (Internet Protocol), which provides best-effort addressing and routing between networks"
        ],
        "correct": 2,
        "rationale": "TCP is connection-oriented and uses acknowledgements, sequencing, and retransmission to provide reliable delivery."
    },
    {
        "id": 10,
        "question": "Which application layer protocol automatically assigns dynamic IP addresses, subnet masks, and default gateways to network hosts?",
        "options": [
            "DNS (Domain Name System), which resolves host names to IP addresses for applications",
            "SSH (Secure Shell), which encrypts interactive remote administration sessions",
            "HTTP (Hypertext Transfer Protocol), which transfers web resources between browsers and servers",
            "FTP (File Transfer Protocol), which moves files between client and server hosts",
            "DHCP (Dynamic Host Configuration Protocol)"
        ],
        "correct": 4,
        "rationale": "DHCP leases IP configuration such as addresses, masks, gateways, and DNS settings; DNS resolves names to addresses."
    },
    {
        "id": 11,
        "question": "Which copper cable type features overall foil shielding around wire pairs to protect against severe electromagnetic interference (EMI)?",
        "options": [
            "Single-Mode Fiber",
            "Coaxial Cable",
            "STP (Shielded Twisted-Pair)",
            "UTP (Unshielded Twisted-Pair)",
            "Multimode Fiber"
        ],
        "correct": 2,
        "rationale": "Shielded twisted-pair cable uses conductive shielding to reduce electromagnetic interference."
    },
    {
        "id": 12,
        "question": "What standard wiring order specifies pin 1 as Green-White and pin 2 as Green for an RJ-45 connector?",
        "options": [
            "ISO/IEC 11801",
            "TIA/EIA-568B",
            "Auto-MDIX",
            "IEEE 802.3ab",
            "TIA/EIA-568A"
        ],
        "correct": 4,
        "rationale": "TIA/EIA-568A places green-white on pin 1 and green on pin 2 of the RJ-45 wiring order."
    },
    {
        "id": 13,
        "question": "Which type of Ethernet cable is required to directly connect two similar devices, such as two Cisco switches without Auto-MDIX?",
        "options": [
            "Crossover Cable",
            "Coaxial Cable",
            "Rollover Cable (Console)",
            "Straight-Through Cable",
            "Fiber Optic Patch Cable"
        ],
        "correct": 0,
        "rationale": "Without Auto-MDIX, a crossover cable swaps transmit and receive pairs for like-device connections."
    },
    {
        "id": 14,
        "question": "Which optical fiber cable type utilizes a laser light source to transmit data across long distances up to 10 kilometers?",
        "options": [
            "Shielded Twisted-Pair (STP)",
            "UTP Category 6a",
            "Multimode Fiber (MMF)",
            "Single-Mode Fiber (SMF)",
            "Coaxial Thicknet"
        ],
        "correct": 3,
        "rationale": "Single-mode fiber carries a narrow light path from a laser and supports long-distance links."
    },
    {
        "id": 15,
        "question": "What is the decimal equivalent of the 8-bit binary value 11000000?",
        "options": [
            "224",
            "192",
            "240",
            "128",
            "168"
        ],
        "correct": 1,
        "rationale": "The leading two bits contribute 128 and 64, so binary 11000000 equals decimal 192."
    },
    {
        "id": 16,
        "question": "Which IEEE 802.2 sublayer of the Data Link Layer communicates directly with the upper Network Layer regardless of media type?",
        "options": [
            "MAC (Media Access Control)",
            "PHY (Physical Layer)",
            "FCS (Frame Check Sequence)",
            "PDU (Protocol Data Unit)",
            "LLC (Logical Link Control)"
        ],
        "correct": 4,
        "rationale": "The LLC sublayer provides the interface from the Data Link layer to upper-layer protocols independent of the medium."
    },
    {
        "id": 17,
        "question": "How many bits are in a standard Ethernet Layer 2 physical MAC address?",
        "options": [
            "128 bits",
            "64 bits",
            "32 bits",
            "48 bits",
            "16 bits"
        ],
        "correct": 3,
        "rationale": "A standard Ethernet MAC address contains 48 bits (six octets)."
    },
    {
        "id": 18,
        "question": "Which field in the Ethernet II frame header is used to identify the encapsulated upper-layer network protocol (e.g., 0x0800 for IPv4)?",
        "options": [
            "Type (EtherType)",
            "Start Frame Delimiter (SFD)",
            "Organizationally Unique Identifier (OUI)",
            "Preamble",
            "Frame Check Sequence (FCS)"
        ],
        "correct": 0,
        "rationale": "The Ethernet II Type field (EtherType) identifies the encapsulated protocol, such as IPv4 (`0x0800`)."
    },
    {
        "id": 19,
        "question": "What destination MAC address is used to send an Ethernet broadcast frame to all hosts on the local subnet?",
        "options": [
            "01-00-5E-00-00-01",
            "255.255.255.255",
            "FF-FF-FF-FF-FF-FF",
            "127.0.0.1",
            "00-00-00-00-00-00"
        ],
        "correct": 2,
        "rationale": "An Ethernet broadcast uses the all-ones destination MAC address `FF-FF-FF-FF-FF-FF`."
    },
    {
        "id": 20,
        "question": "Which switching method buffers the entire frame and calculates the Frame Check Sequence (FCS) CRC before forwarding?",
        "options": [
            "Fast-Forward Cut-Through",
            "Store-and-Forward Switching",
            "Fragment-Free Cut-Through",
            "Asymmetric Switching",
            "Symmetric Switching"
        ],
        "correct": 1,
        "rationale": "Store-and-forward receives the full frame and checks its FCS/CRC before forwarding it."
    },
    {
        "id": 21,
        "question": "Which Windows CLI command displays the workstation's IP address, subnet mask, default gateway, and physical MAC address?",
        "options": [
            "arp -a",
            "ipconfig /all",
            "netstat -r",
            "ipconfig",
            "ping localhost"
        ],
        "correct": 1,
        "rationale": "`ipconfig /all` displays detailed Windows interface configuration, including gateway and physical address."
    },
    {
        "id": 22,
        "question": "Which command displays the dynamic IP-to-MAC address mapping table on a Windows host?",
        "options": [
            "nslookup",
            "tracert 8.8.8.8",
            "show mac address-table",
            "ipconfig /displaydns",
            "arp -a"
        ],
        "correct": 4,
        "rationale": "`arp -a` lists the host's cached IPv4-to-MAC address mappings."
    },
    {
        "id": 23,
        "question": "Which Cisco IOS Privileged EXEC command displays the dynamic MAC-address table mapped to switch ports?",
        "options": [
            "show ip interface brief",
            "show version",
            "show mac-address-table",
            "show running-config",
            "show startup-config"
        ],
        "correct": 2,
        "rationale": "Cisco IOS `show mac-address-table` displays learned MAC addresses and their switch ports."
    },
    {
        "id": 24,
        "question": "In Wireshark, which pane displays the hierarchical breakdown of protocol fields for a selected packet?",
        "options": [
            "Filter Toolbar, where capture or display expressions are entered to select packets",
            "Packet Bytes Pane (bottom), which shows raw hexadecimal and ASCII packet contents",
            "Status Bar, which reports capture state, packet totals, and profile information",
            "Packet Details Pane (Middle Pane)",
            "Packet List Pane (top), which lists captured packets and their summary fields"
        ],
        "correct": 3,
        "rationale": "Wireshark's Packet Details pane expands the selected packet into its protocol fields."
    },
    {
        "id": 25,
        "question": "When pinging an external IP address on a remote network, what destination MAC address is placed in the local Ethernet frame?",
        "options": [
            "The MAC address of the Default Gateway router",
            "The broadcast MAC address FF-FF-FF-FF-FF-FF",
            "The loopback MAC address 00-00-00-00-00-00",
            "The MAC address of the remote destination host",
            "The switch management MAC address"
        ],
        "correct": 0,
        "rationale": "For a remote IP destination, the local Ethernet frame is addressed to the default gateway's MAC; the IP destination remains remote."
    },
    {
        "id": 26,
        "question": "A network administrator allocates subnets from 172.180.0.0/21. Subnet A requires 480 host addresses, Subnet B requires 240, and Subnet C requires 100. Using VLSM in order from largest to smallest, what subnet mask and broadcast address should be assigned to Subnet B?",
        "options": [
            "Subnet B: 255.255.254.0 (/23); broadcast 172.180.3.255",
            "Subnet B: 255.255.255.0 (/24); broadcast 172.180.1.255",
            "Subnet B: 255.255.255.0 (/24); broadcast 172.180.2.255",
            "Subnet B: 255.255.255.128 (/25); broadcast 172.180.2.127",
            "Subnet B: 255.255.254.0 (/23); broadcast 172.180.2.255"
        ],
        "correct": 2,
        "rationale": "Subnet A needs a /23, so the next aligned /24 for Subnet B is 172.180.2.0/24, whose broadcast address is 172.180.2.255."
    },
    {
        "id": 27,
        "question": "A host with IPv4 address 192.168.33.185 and subnet mask 255.255.255.224 performs ANDing. What is its network address and how many usable host addresses are in the subnet?",
        "options": [
            "Network 192.168.33.160/27; 32 total addresses, of which 30 are usable",
            "Network 192.168.33.192/27; 30 usable addresses in the subnet",
            "Network 192.168.33.160/26; 62 usable addresses in the subnet",
            "Network 192.168.33.128/27; 30 usable addresses in the subnet",
            "Network 192.168.33.160/27; 30 usable host addresses"
        ],
        "correct": 4,
        "rationale": "A /27 has 32 total addresses and 30 usable hosts. The block containing .185 starts at .160, so the network is 192.168.33.160/27."
    },
    {
        "id": 28,
        "question": "Which networking device strictly limits and isolates IPv4 broadcast domains, preventing Layer 2 broadcast frames from flooding across different local area network segments?",
        "options": [
            "Layer 3 Router",
            "Layer 2 Ethernet Switch",
            "Multi-port Hub",
            "Wireless Access Point",
            "Network Interface Card"
        ],
        "correct": 0,
        "rationale": "Routers do not forward Layer 2 broadcasts between interfaces, creating separate broadcast domains."
    },
    {
        "id": 29,
        "question": "An engineer must design a point-to-point serial link between two corporate routers using IPv4. Which subnet mask minimizes address waste while providing sufficient usable IP addresses for the link?",
        "options": [
            "255.255.255.252 (/30)",
            "255.255.255.248 (/29)",
            "255.255.255.240 (/28)",
            "255.255.255.234 (/27)",
            "255.255.255.0 (/24)"
        ],
        "correct": 0,
        "rationale": "A /30 provides exactly two usable IPv4 addresses, making it a common minimum-waste subnet for a two-endpoint link."
    },
    {
        "id": 30,
        "question": "A network interface is configured with IPv6 address 2001:db8:acad:3:211:22ff:fe33:4455/64. Assuming a /48 global routing prefix, which portion represents the Subnet ID?",
        "options": [
            "2001:db8",
            "211:22ff:fe33:4455",
            "3",
            "acad:3",
            "2001:db8:acad"
        ],
        "correct": 2,
        "rationale": "With a /48 global routing prefix and /64 LAN prefix, the fourth hextet (`3`) is the 16-bit Subnet ID."
    },
    {
        "id": 31,
        "question": "A client workstation sends an ICMPv6 Router Solicitation (RS) message. The router replies with a Router Advertisement (RA) with M flag = 1 and O flag = 1. How will the client obtain its IPv6 configuration?",
        "options": [
            "Using static MAC mapping from default gateway.",
            "Using SLAAC exclusively for IP addressing and DNS server options.",
            "Using Stateful DHCPv6 for both its IPv6 address and all configuration settings.",
            "Using SLAAC for IPv6 address and Stateless DHCPv6 for DNS information.",
            "Using Link-Local addressing only without global reachability."
        ],
        "correct": 2,
        "rationale": "An RA with the M flag set tells the host to obtain its IPv6 address configuration from stateful DHCPv6."
    },
    {
        "id": 32,
        "question": "When converting MAC address 00-11-22-33-44-53 into a 64-bit EUI-64 Interface Identifier, what is the resulting string?",
        "options": [
            "0011:22ff:fe33:4455",
            "0211:22ff:fe33:fe55",
            "0211:22ff:fe33:4453",
            "0011:2233:4455:ffff",
            "0111:22ff:fe33:4455"
        ],
        "correct": 2,
        "rationale": "EUI-64 inserts `ff:fe` in the MAC address and flips the universal/local bit; `00-11-22-33-44-53` becomes `0211:22ff:fe33:4453`."
    },
    {
        "id": 33,
        "question": "Which ICMPv6 Neighbor Discovery (ND) message pair replaces legacy IPv4 ARP to resolve an IPv6 address to a target MAC address?",
        "options": [
            "Echo Request and Echo Reply, used to test whether an IP destination is reachable",
            "Destination Unreachable and Time Exceeded, used to report packet-delivery errors",
            "Redirect and Router Advertisement, used to inform a host about a preferable router",
            "Neighbor Solicitation (NS) requests a neighbor's MAC; Neighbor Advertisement (NA) replies",
            "Router Solicitation and Router Advertisement messages used for router discovery"
        ],
        "correct": 3,
        "rationale": "IPv6 Neighbor Discovery resolves neighbors with Neighbor Solicitation and Neighbor Advertisement messages."
    },
    {
        "id": 34,
        "question": "During a diagnostic traceroute test, a router drops an IP packet because its Time-to-Live (TTL) field in IPv4 (or Hop Limit in IPv6) has decremented to 0. Which ICMP message type is returned to the source host?",
        "options": [
            "Echo Reply",
            "Time Exceeded",
            "Destination Unreachable",
            "Parameter Problem",
            "Redirect Message"
        ],
        "correct": 1,
        "rationale": "When a packet's TTL/Hop Limit reaches zero, the router discards it and returns an ICMP Time Exceeded message."
    },
    {
        "id": 35,
        "question": "How does the extended ping command on a Cisco router assist network administrators in diagnosing Path MTU issues across a network link?",
        "options": [
            "Set the TCP SYN flag on each probe to test whether a connection can begin.",
            "Force every intermediate router to fragment the probe before delivery.",
            "Disable ARP resolution for the target gateway while the test measures size.",
            "Set the DF bit and vary the ICMP payload size to test path MTU.",
            "Switch the probes from ICMPv4 to DNS requests on UDP port 53."
        ],
        "correct": 3,
        "rationale": "Setting DF and varying the probe size reveals the largest packet that can cross the path without fragmentation, helping identify the Path MTU."
    },
    {
        "id": 36,
        "question": "Which operational characteristic distinguishes User Datagram Protocol (UDP) from Transmission Control Protocol (TCP)?",
        "options": [
            "Connectionless, low-overhead delivery without acknowledgements or built-in retransmissions.",
            "It establishes a session using SYN, SYN-ACK, and ACK before application data is sent.",
            "It uses acknowledgements and a sliding window to regulate the sender's transmission rate.",
            "It retransmits unacknowledged datagrams after a timeout to provide reliable delivery.",
            "It has a 20-byte minimum header and guarantees that data arrives in order."
        ],
        "correct": 0,
        "rationale": "UDP sends connectionless datagrams with low overhead and has no built-in acknowledgement or retransmission of lost data."
    },
    {
        "id": 37,
        "question": "During a TCP connection setup, the client sends a SYN packet with Sequence Number = 1000. What control flags and sequence/acknowledgement numbers will the server send in response?",
        "options": [
            "Flags: ACK; Seq = 1001, Ack = 1000",
            "Flags: SYN-ACK; Seq = 2000, Ack = 1000",
            "Flags: SYN; Seq = 1000, Ack = 2001",
            "Flags: SYN-ACK; Seq = 1001, Ack = 2000",
            "Flags: SYN-ACK; Seq = 2000, Ack = 1001"
        ],
        "correct": 4,
        "rationale": "The server acknowledges the client's SYN with ACK 1001 and sends its own initial sequence number, here 2000, with SYN-ACK."
    },
    {
        "id": 38,
        "question": "If a receiver sends a TCP ACK segment with Acknowledgement Number = 5100 and Window Size = 4000, which byte range is the sender authorized to transmit next?",
        "options": [
            "Bytes 5101-9100, starting one byte after the next expected byte",
            "Bytes 5100-9098, because the advertised window counts 3,999 bytes",
            "Bytes 1100-5099, treating the window as data sent before the ACK",
            "Bytes 4000-7999, using the window size as the first sequence number",
            "Bytes 5100-9099, a 4,000-byte range starting at the acknowledged next byte"
        ],
        "correct": 4,
        "rationale": "ACK 5100 identifies the next byte expected; a 4,000-byte receive window allows bytes 5100 through 9099."
    },
    {
        "id": 39,
        "question": "A client device initiates an encrypted HTTPS session to a web server at IP 192.168.1.50. Which socket pair correctly represents this session on the client?",
        "options": [
            "Source: 192.168.1.10:443 | Destination: 192.168.1.50:49152",
            "Source: 192.168.1.10:22 | Destination: 192.168.1.50:80",
            "Source: 192.168.1.10:8080 | Destination: 192.168.1.50:21",
            "Source: 192.168.1.10:49152 | Destination: 192.168.1.50:443",
            "Source: 192.168.1.10:80 | Destination: 192.168.1.50:443"
        ],
        "correct": 4,
        "rationale": "The client uses an ephemeral source port and connects to the HTTPS server's destination port 443."
    },
    {
        "id": 40,
        "question": "A system administrator needs to configure DNS records so that incoming domain email is directed to a specific mail server. Which DNS record type must be configured?",
        "options": [
            "A Record",
            "AAAA Record",
            "CNAME Record",
            "MX Record",
            "PTR Record"
        ],
        "correct": 3,
        "rationale": "An MX record identifies the mail exchanger that accepts email for a domain."
    },
    {
        "id": 41,
        "question": "Which application layer protocol uses TCP port 20 for data transfer and TCP port 21 for control dialogue handling?",
        "options": [
            "Trivial File Transfer Protocol (TFTP)",
            "File Transfer Protocol (FTP)",
            "Simple Mail Transfer Protocol (SMTP)",
            "Post Office Protocol v3 (POP3)",
            "Secure Shell (SSH)"
        ],
        "correct": 1,
        "rationale": "FTP uses TCP port 21 for control; traditional active FTP uses a separate data connection from server port 20."
    },
    {
        "id": 42,
        "question": "What is the correct 4-step sequence of messages exchanged between a client and server during IPv4 dynamic address allocation via DHCP?",
        "options": [
            "DHCP: Offer, Discover, Acknowledgement, Request (messages in the wrong order)",
            "DHCPv6: Solicit, Advertise, Request, Reply (not the IPv4 DORA exchange)",
            "DHCP: Discover, Request, Offer, Confirmation (with Offer and Request reversed)",
            "DHCP: Request, Discover, Offer, Acknowledgement (starting with a client request)",
            "DHCP: Discover, Offer, Request, Acknowledgement (the DORA sequence)"
        ],
        "correct": 4,
        "rationale": "IPv4 DHCP follows DORA: Discover, Offer, Request, and Acknowledgement."
    },
    {
        "id": 43,
        "question": "Which administrative device hardening practice reinforces switch integrity by deactivating unused switch ports and enforcing strong passphrases?",
        "options": [
            "Interface Audit: reviews port settings but does not disable unused switch ports",
            "Dynamic Routing: exchanges routes but does not secure unused access ports",
            "Device Hardening: disables unused ports and enforces strong device credentials",
            "Data Link Training: informs staff but does not change switch security settings",
            "Port Mirroring: copies traffic for inspection but does not restrict port access"
        ],
        "correct": 2,
        "rationale": "Device hardening includes disabling unused switch ports and enforcing strong credentials."
    },
    {
        "id": 44,
        "question": "Within the AAA framework, what essential function does the Accounting component perform?",
        "options": [
            "Authorization: decides which resources and commands an authenticated user may access",
            "Accounting: records user activity, session duration, and resource use for audits",
            "Confidentiality: encrypts management traffic so credentials and commands stay private",
            "Filtering: inspects packets and denies traffic that violates firewall rules",
            "Authentication: verifies a user identity using credentials or another factor"
        ],
        "correct": 1,
        "rationale": "Accounting records activity and resource use after access, supporting auditing and usage tracking."
    },
    {
        "id": 45,
        "question": "When hardening a Cisco router for secure SSH management, which configuration step generates the cryptographic keys required for SSH operational readiness?",
        "options": [
            "Privileged EXEC: reload startup settings, then generate RSA keys without a domain name",
            "Interface config: assign an IP address and enable IPv6 routing before SSH setup",
            "Console line config: set a password and enable secret to create SSH key pairs",
            "Global config: set hostname and domain name, then generate RSA keys for SSH",
            "VTY line config: enable password encryption and SSH transport without generating keys"
        ],
        "correct": 3,
        "rationale": "SSH key generation on Cisco IOS requires global configuration with a hostname and IP domain name before generating RSA keys."
    }
];
