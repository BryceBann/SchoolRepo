-- Write your schema here --
DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;

USE test_db;

CREATE TABLE products(
    id INT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    category_name VARCHAR(30) NOT NULL,
    price INT NOT NULL,
    in_stock BOOLEAN NOT NULL
);

CREATE TABLE categories (
    id INT NOT NULL,
    category_name VARCHAR(30) NOT NULL
);
