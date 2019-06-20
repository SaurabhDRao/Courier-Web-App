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
--     password varchar(50) collate latin1_general_cs,
--     branchid int
-- );

-- insert into branch values(1, "Karkala", "13.2151", "74.9962"), (2, "Mangalore", "12.9141", "74.8560");
-- insert into empdetails values (1, "admin", "admin", "admin", 1234567890, "whatever", "admin@admin.com", "iamadmin", 1);
-- insert into branch values(3, "Udupi", "13.3409", "74.7421"), (4, "Bangalore", "12.9716", "77.5946");
-- insert into empdetails values 
--     (2, "Rahul", "19L002", "Manager", 9988776655, "9255 170th Avenue Northeast Redmond, WA 98052 USA", "rahul@gmail.com", "rahul", 1),
--     (3, "Reevan", "19L003", "Employee", 9988665577, "29628 Northeast 1st Street Pendleton, OR 97801 USA", "reevan@gmail.com", "reevan", 1),
--     (4, "Yashas", "19L004", "Shipper", 9898767643, "11373 Sage Street Silver Lake, KS 66539 USA", "yashas@gmail.com", "yashas", 2),
--     (5, "Sharath", "19L005", "Employee", 9797121234, "1263 Poplar Drive Xenia, IL 62899 USA", "sharath@gmail.com", "sharath", 3),
--     (6, "Sharath", "19L006", "Shipper", 8675432190, "2246 North Wilke Road Arlington Heights, IL 60004 USA", "rajath@gmail.com", "rajath", 4);

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
--     longitude varchar(50)
-- );