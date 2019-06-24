-- create database courier;
use courier;

-- create table branch(
--     branchid int primary key,
--     location varchar(50),
--     latitude varchar(50),
--     longitude varchar(50)
-- );

-- create table empdetails(
--     id int,
--     name varchar(50),
--     username varchar(6) primary key collate latin1_general_cs,
--     post varchar(50),
--     mobile bigint,
--     address varchar(500),
--     email varchar(50),
--     password varchar(100) collate latin1_general_cs,
--     branchid int
-- );

-- insert into branch values(1, "Karkala", "13.2151", "74.9962"), (2, "Mangalore", "12.9141", "74.8560"), 
--     (3, "Udupi", "13.3409", "74.7421"), (4, "Bangalore", "12.9716", "77.5946");
-- insert into empdetails values 
--     (1, "admin", "admin", "admin", 1234567890, "whatever", "admin@admin.com", "iamadmin", 1);

-- collate latin1_general_cs

-- create table couriers(
--     id int,
--     trackId varchar(15),
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
--     branchid int,
--     latitude varchar(50),
--     longitude varchar(50),
--     destlandmark varchar(100)
-- );

-- create table support (
--     id int primary key,
--     name varchar(50),
--     mobile bigint,
--     email varchar(100),
--     msg varchar(1000)
-- );