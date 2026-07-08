# Artisan Gallery API Documentation


## Authentication


POST /api/auth/register

POST /api/auth/login



## Product APIs


GET /api/products

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id



## Category APIs


GET /api/categories

POST /api/categories

PUT /api/categories/:id

DELETE /api/categories/:id



Protected routes require:


Authorization: Bearer JWT_TOKEN