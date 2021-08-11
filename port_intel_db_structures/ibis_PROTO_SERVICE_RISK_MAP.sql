create table PROTO_SERVICE_RISK_MAP
(
    ID         int auto_increment
        primary key,
    RISK_ID    int null,
    SERVICE_ID int not null,
    constraint PROTO_SERVICE_RISK_MAP_PROTO_RISKS_RISK_ID_fk
        foreign key (RISK_ID) references PROTO_RISKS (RISK_ID),
    constraint PROTO_SERVICE_RISK_MAP_PROTO_SERVICES_ID_fk
        foreign key (SERVICE_ID) references PROTO_SERVICES (ID)
);

create index PROTO_SERVICE_RISK_MAP_SERVICE_ID_index
    on PROTO_SERVICE_RISK_MAP (SERVICE_ID);

INSERT INTO ibis.PROTO_SERVICE_RISK_MAP (ID, RISK_ID, SERVICE_ID) VALUES (6, 1, 1);
INSERT INTO ibis.PROTO_SERVICE_RISK_MAP (ID, RISK_ID, SERVICE_ID) VALUES (7, 2, 2);
INSERT INTO ibis.PROTO_SERVICE_RISK_MAP (ID, RISK_ID, SERVICE_ID) VALUES (8, 3, 4);