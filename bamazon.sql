CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE Products (
item_id int(10) NOT NULL,
product_name varchar(40) NOT NULL,
department_name varchar(40) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity int NOT NULL);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "cat", "animals", 5.99, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "axe", "weapons", 45.58, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "cigarettes", "cancer", 8.45, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "hand", "body parts", 3.50, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "relativity", "concepts", 10.00, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "cheese", "food", 5.50, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "pencil", "weapons", 1.50, 22);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "dog", "animals", 41.00, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "face", "body parts", 68.99, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "dirt", "food", 25.00, 15);