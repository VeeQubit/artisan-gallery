const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



// REGISTER USER


exports.register = async(req,res)=>{


    const {

        name,
        email,
        password

    } = req.body;



    try{


        const hashedPassword = await bcrypt.hash(password,10);



        const sql =

        "INSERT INTO users(name,email,password) VALUES(?,?,?)";



        db.query(

            sql,

            [
                name,
                email,
                hashedPassword
            ],


            (error,result)=>{


                if(error){


                    return res.status(500).json({

                        message:"Registration failed"

                    });

                }



                res.status(201).json({


                    message:"User registered successfully"


                });


            }


        );



    }


    catch(error){


        res.status(500).json({

            message:"Server error"

        });


    }


};
// LOGIN USER


exports.login = (req,res)=>{


    const {

        email,
        password

    } = req.body;



    const sql =

    "SELECT * FROM users WHERE email=?";



    db.query(sql,[email],async(error,result)=>{


        if(error){

            return res.status(500).json({

                message:"Database error"

            });

        }



        if(result.length===0){


            return res.status(401).json({

                message:"Invalid email"

            });

        }



        const user = result[0];



        const checkPassword =

        await bcrypt.compare(

            password,

            user.password

        );



        if(!checkPassword){


            return res.status(401).json({

                message:"Invalid password"

            });

        }



        const token = jwt.sign(

            {
                id:user.user_id,

                role:user.role
            },


            process.env.JWT_SECRET,


            {
                expiresIn:"1d"
            }

        );



        res.json({

            message:"Login successful",

            token,

            user:{

                id:user.user_id,

                name:user.name,

                email:user.email,

                role:user.role

            }


        });



    });



};
