const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/coenses", { useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    }
};
const User = mongoose.model("User", userSchema);

//TODO
//////////////////////////Targeting all users///////////////////////////////////
app.route("/api/users")
    .get(function (req, res) {
        User.find({}, function (err, foundUsers) {
            if (!err) {
                res.json(foundUsers);
            } else {
                res.send(err);
            }
        })
    })
    .post(function (req, res) {
        console.log(req.body);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            area:req.body.area
        });
        newUser.save(function (err,result) {
            if (!err) {
                res.json({message:"success added user",data:result});
            } else {
                res.send(err);
            }
        });
    });

////////////////////////Targeting a specific user////////////////////////
app.route("/api/users/:username")
    // .get(function (req, res) {
    //     User.findOne({ username: req.params.username }, { _id: 0, username: 1, email: 1 }, function (err, foundUser) {
    //         if (!err) {
    //             if (!foundUser) {
    //                 res.send("not user found");
    //             } else {
    //                 res.json(foundUser);
    //             }
    //         } else {
    //             res.send(err);
    //         }
    //     })
    // })
    .put(function (req, res) {
        User.update({ username: req.params.username }, { username: req.body.username, email: req.body.email, password: req.body.password }, { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("updated");
                }
            }
        )
    })

    .delete(function (req, res) {
        User.deleteOne({ username: req.params.username },
            function (err) {
                if (err) {
                    res.send(err)
                } else {
                    res.send("deleted")
                }
            }
        )
    });




app.listen(process.env.PORT || 4000, function () {
    console.log("Server is running");
    // body...
})