create table PROTO_SERVICES_DEVICE_TYPE_SPECIFIC_MAP
(
    ID             int auto_increment
        primary key,
    DEVICE_TYPE_ID varchar(255) null,
    SERVICE_ID     int          not null,
    constraint PROTO_DEVICE_TYPE_SPECIFIC_SERVICES_PROTO_SERVICES_ID_fk
        foreign key (SERVICE_ID) references PROTO_SERVICES (ID)
);

