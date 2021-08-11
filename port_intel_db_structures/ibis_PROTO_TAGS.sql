create table PROTO_TAGS
(
    ID     int            not null
        primary key,
    NAME   varchar(255)   null,
    weight int default 10 not null
);

INSERT INTO ibis.PROTO_TAGS (ID, NAME, WEIGHT) VALUES (1, 'Print', 100);
INSERT INTO ibis.PROTO_TAGS (ID, NAME, WEIGHT) VALUES (2, 'VoIP', 100);
INSERT INTO ibis.PROTO_TAGS (ID, NAME, WEIGHT) VALUES (3, 'Media streaming', 100);
INSERT INTO ibis.PROTO_TAGS (ID, NAME, WEIGHT) VALUES (4, 'Remote login', 50);
INSERT INTO ibis.PROTO_TAGS (ID, NAME, WEIGHT) VALUES (5, 'Web', 10);