create table PROTO_SERVICES_VENDOR_MAP
(
    ID         int auto_increment
        primary key,
    SERVICE_ID int not null,
    VENDOR_ID     int not null,
    constraint PROTO_VENDOR_MAP_PROTO_SERVICES_ID_fk
        foreign key (SERVICE_ID) references PROTO_SERVICES (ID),
    constraint PROTO_VENDOR_MAP_PROTO_VENDORS_ID_fk
        foreign key (VENDOR_ID) references PROTO_VENDORS (ID)
);