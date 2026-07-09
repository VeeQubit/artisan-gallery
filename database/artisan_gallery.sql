CREATE DATABASE artisan_gallery_db;
USE artisan_gallery_db;
SELECT DATABASE();
CREATE TABLE users(

    user_id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    role VARCHAR(20) DEFAULT 'ADMIN',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
CREATE TABLE categories(

    category_id INT AUTO_INCREMENT PRIMARY KEY,

    category_name VARCHAR(100) NOT NULL,

    description TEXT

);
CREATE TABLE products(

    product_id INT AUTO_INCREMENT PRIMARY KEY,

    category_id INT,

    name VARCHAR(150) NOT NULL,

    description TEXT,

    price DECIMAL(10,2) NOT NULL,

    quantity INT NOT NULL,

    image VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,


    FOREIGN KEY(category_id)

    REFERENCES categories(category_id)

    ON DELETE SET NULL

);
INSERT INTO categories
(category_name,description)

VALUES

('Wood Crafts',
'Handmade wooden decoration items'),


('Home Decor',
'Creative handmade home decoration products'),


('Gift Items',
'Personalized handmade gifts');

INSERT INTO products

(category_id,name,description,price,quantity,image)

VALUES

(
1,
'Handmade Wooden Clock',
'Natural wood wall clock',
2500,
15,
'clock.jpg'
),


(
2,
'Decorative Flower Vase',
'Hand painted ceramic vase',
1800,
20,
'vase.jpg'
);
SHOW TABLES;
SELECT * FROM products;
SELECT * FROM categories;
SELECT

products.name,
categories.category_name,
products.price,
products.quantity


FROM products


JOIN categories

ON products.category_id =
categories.category_id;
