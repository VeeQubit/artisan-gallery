const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const authRoutes=require("./routes/authRoutes");

const app = express();
const productRoutes=require("./routes/productRoutes");
const categoryRoutes=require("./routes/categoryRoutes");
// Middleware

app.use(cors());

app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/products",productRoutes);
app.use("/api/categories",categoryRoutes);
// Testing Route

app.get("/", (req,res)=>{


    res.send("Artisan Gallery Backend Running");


});



// PORT

const PORT = process.env.PORT || 5000;



app.listen(PORT, ()=>{


    console.log(`Server running on port ${PORT}`);


});