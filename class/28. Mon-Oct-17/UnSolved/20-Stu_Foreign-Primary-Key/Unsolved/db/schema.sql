-- Write your Schema Here -- 
DROP DATABASE IF EXISTS order_db;
CREATE DATABASE order_db;

USE order_db;

CREATE TABLE customers (
id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30)
);

CREATE TABLE customer_orders (
id INT NOT NULL,
customer_id INT,
order_details TEXT,
FOREIGN KEY(customer_id)
REFERENCES customers(id)
ON DELETE SET NULL
);
