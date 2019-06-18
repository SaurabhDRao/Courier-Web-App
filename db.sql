-- create database courier;
use courier;

-- create table admin (
--     id int primary key,
--     username varchar(50) collate latin1_general_cs,
--     password varchar(50) collate latin1_general_cs
-- );

-- create table userdetails(
--     id int,
--     name varchar(50),
--     username varchar(6) primary key collate latin1_general_cs,
--     post varchar(50),
--     mobile int,
--     address varchar(50),
--     email varchar(50),
--     password varchar(50) collate latin1_general_cs
-- );

-- insert into admin values (1, "admin", "iamadmin");

-- collate latin1_general_cs

create table couriers(
    id int,
    trackId varchar(8),
    type varchar(20),
    sender varchar(50),
    receiver varchar(50),
    srcphone int,
    destphone int,
    srcemail varchar(50),
    payment varchar(20),
    srcaddress varchar(500),
    srcpin int,
    destaddress varchar(500),
    destpin int,
);