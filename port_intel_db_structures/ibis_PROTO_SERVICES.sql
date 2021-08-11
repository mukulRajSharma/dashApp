create table PROTO_SERVICES
(
    ID       int auto_increment
        primary key,
    IP_PROTO int           not null,
    PORT     int           null,
    SERVICE  varchar(4369) null,
    NAME     varchar(4369) null
);

create index PROTO_SERVICES_IP_PROTO_PORT_index
    on PROTO_SERVICES (IP_PROTO, PORT);

INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (1, 6, 22, 'SSH', 'Secure Shell Protocol');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (2, 6, 80, 'HTTP', 'Hypertext Transfer Protocol');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (3, 6, 443, 'HTTPS', 'Hypertext Transfer Protocol Secure');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (4, 17, 5353, 'mDNS', 'Multicast DNS');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (9, 17, 68, 'DHCP', 'Dynamic Host Configuration Protocol');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (10, 17, 67, 'DHCP', 'Dynamic Host Configuration Protocol');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (11, 6, 554, 'RTSP', 'Real Time Streaming Protocol');
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (14, 6, null, 'TCP', null);
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (15, 17, null, 'UDP', null);
INSERT INTO ibis.PROTO_SERVICES (ID, IP_PROTO, PORT, SERVICE, NAME) VALUES (16, 46, null, 'Proto 46', null);