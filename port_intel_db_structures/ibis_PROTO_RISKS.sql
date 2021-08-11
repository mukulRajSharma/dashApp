create table PROTO_RISKS
(
    RISK_ID     int auto_increment
        primary key,
    RISK_LEVEL  enum ('HIGH', 'MEDIUM', 'LOW') not null,
    REF         varchar(50)                    not null,
    IMPLICATION text                           not null
);

INSERT INTO ibis.PROTO_RISKS (RISK_ID, RISK_LEVEL, REF, IMPLICATION) VALUES (1, 'MEDIUM', 'T1040', 'Adversaries may use Valid Accounts to log into a service specifically designed to accept remote connections.');
INSERT INTO ibis.PROTO_RISKS (RISK_ID, RISK_LEVEL, REF, IMPLICATION) VALUES (2, 'MEDIUM', 'T1021', 'Adversaries may sniff network traffic to capture information about an environment, including authentication material passed over the network.');
INSERT INTO ibis.PROTO_RISKS (RISK_ID, RISK_LEVEL, REF, IMPLICATION) VALUES (3, 'MEDIUM', 'T1590', 'Adversaries may gather information about the victim''s networks that can be used during targeting.');