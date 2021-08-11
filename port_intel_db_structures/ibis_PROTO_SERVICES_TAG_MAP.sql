create table PROTO_SERVICES_TAG_MAP
(
    ID         int auto_increment
        primary key,
    SERVICE_ID int not null,
    TAG_ID     int not null,
    constraint PROTO_TAG_MAP_PROTO_SERVICES_ID_fk
        foreign key (SERVICE_ID) references PROTO_SERVICES (ID),
    constraint PROTO_TAG_MAP_PROTO_TAGS_ID_fk
        foreign key (TAG_ID) references PROTO_TAGS (ID)
);

create index PROTO_TAG_MAP_SERVICE_ID_index
    on PROTO_SERVICES_TAG_MAP (SERVICE_ID);

INSERT INTO ibis.PROTO_SERVICES_TAG_MAP (ID, SERVICE_ID, TAG_ID) VALUES (1, 1, 4);
INSERT INTO ibis.PROTO_SERVICES_TAG_MAP (ID, SERVICE_ID, TAG_ID) VALUES (2, 11, 3);
INSERT INTO ibis.PROTO_SERVICES_TAG_MAP (ID, SERVICE_ID, TAG_ID) VALUES (3, 2, 5);
INSERT INTO ibis.PROTO_SERVICES_TAG_MAP (ID, SERVICE_ID, TAG_ID) VALUES (4, 3, 5);