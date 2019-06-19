-- create database courier;
use courier;

-- create table branch(
--     branchid int primary key,
--     location varchar(50)
-- );

-- create table empdetails(
--     id int,
--     name varchar(50),
--     username varchar(6) primary key collate latin1_general_cs,
--     post varchar(50),
--     mobile bigint,
--     address varchar(500),
--     email varchar(50),
--     password varchar(50) collate latin1_general_cs,
--     branchid int
-- );

-- insert into branch values(1, "Karkala"), (2, "Mangalore");
-- insert into empdetails values (1, "admin", "admin", "admin", 1234567890, "whatever", "admin@admin.com", "iamadmin", 1);

-- collate latin1_general_cs

-- create table couriers(
--     id int,
--     trackId varchar(8),
--     type varchar(20),
--     sender varchar(50),
--     receiver varchar(50),
--     srcphone varchar(50),
--     destphone varchar(50),
--     srcemail varchar(50),
--     payment varchar(20),
--     srcaddress varchar(500),
--     srcpin int,
--     destaddress varchar(500),
--     destpin int,
--     weight varchar(20),
--     size varchar(20),
--     qrcode varchar(1500),
--     currentlocation varchar(200)
-- );