const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");
const auth = require("../middleware/auth");
const adminOnly = require("../middleware/adminOnly");
// let menu = [
//     {
//         id: 1,
//         name: "Cold Coffee",
//         price: 180
//     },
//     {
//         id: 2,
//         name: "Veg Burger",
//         price: 220
//     },
//     {
//     id: 4,
//     name: "Pasta",
//     price: 300
// }
// ];
router.use(logger);

// GET all menu items
router.get("/",async (req, res) => {
    try{
    const maxprice = parseInt(req.query.maxprice);

    if (maxprice) {
        const filtered = await Menu.find({
            price:{$lte: maxprice}
    });
        return res.json(filtered);
    }
    const item = await Menu.find();

    res.json(item);
}
catch(err){
    res.status(500).json({
        message:err.message
    });
}
});


// POST a new menu item
router.post("/",auth,adminOnly,async (req, res) => {
    try{

    const newItem = await Menu.create({
        name: req.body.name,
        price: req.body.price
    });
    

    res.status(201).json({
        message: "Menu Item Added",
        data: newItem
    });
}
catch(err){
    res.status(500).json({
        message: err.message
    });
}
});

// // DELETE a menu item
// app.delete("/menu/:id", (req, res) => {

//     const id = Number(req.params.id);

//     menu = menu.filter(item => item.id !== id);

//     res.json({
//         message: "Menu Item Deleted Successfully"
//     });
// });


router.delete("/:id",auth,adminOnly,async (req, res) =>{
    try{
    const id =req.params.id;
    const deletedItem = await Menu.findByIdAndDelete(id);
    if(!deletedItem){
        return res.status(404).json({
            message:"Item not found"
        });
    }
    res.json({
        message: "Item deleted successfully"
    });
}
catch(err){
    res.status(500).json({
        message:err.message
    });
}
   
});

router.get("/:id",async (req, res) =>{
    try{
    const id = req.params.id;
    const item = await Menu.findById(id);
    if(!item){
        return res.status(404).json({
            message: "Item not found"
        });
    }
    res.json(item);
}
catch(err){
    res.status(500).json({
        message: err.message
    });
}
});

//Put changes in an existing 
router.put("/:id",auth,adminOnly,async (req, res) =>{
    try{
    const id =req.params.id;
    const {name,price} = req.body;
    const item =await Menu.findByIdAndUpdate(id, { name, price }, { new: true });
    if(!item){
        return res.status(404).json({
    message: "Item not found"
});
    }
   res.json({
    message: "Item updated successfully",
    item
});}
catch(err){
    res.status(500).json({
        message: err.message
    });
}

});

function logger(req, res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}

module.exports = router;



// Validation          	Purpose
// required	        Field must exist
// min                	Minimum value
// max	                Maximum value
// trim            	Remove extra spaces
// minlength	        Minimum text length
// maxlength	        Maximum text length
// enum	        Only allow specific values



// Here's a simple way to remember HTTP status codes
// Status	            Meaning	Example
// 200	    Success	Data fetched successfully
// 201	    Created	New menu item added
// 400	  bad Request	Invalid input from the user
// 401	        Unauthorized	User not logged in
// 403	        Forbidden	Logged in, but not allowed
// 404	        Not Found	Menu item doesn't exist
// 500	        Internal Server Error	Something went wrong on the server



// Request         	Status Code
// GET         	    ✅ 200
// POST	             ✅ 201
// PUT             	✅ 200
// DELETE      	    ✅ 200
// Invalid Input   	✅ 400
// Not Logged In	    ✅ 401
// No Permission      ✅ 403
// Not Found	        ✅ 404
// Server Error	    ✅ 500


// Method	    Returns	        Use Case
// Menu.find()	  Array []	Get all or many documents
// Menu.findOne()	Object {}	Get the first document matching a condition
// Menu.findById()	    Object {}	Get one document using its _id
// Menu.create()	Object {}	Create a new document
// Menu.findByIdAndUpdate()	Object {}	Update a document by _id
// Menu.findByIdAndDelete()	Object {}	Delete a document by _id