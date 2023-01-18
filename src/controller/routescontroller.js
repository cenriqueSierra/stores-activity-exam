const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const storeModel = mongoose.model("info_stores");

// /-> /views
router.get("/", (req,res) => {
    res.render("/router/crud", {
        viewTitle: "Insert Store"
    });
});

router.post('/', (req,res) => {
    if (req.body._id == '') {
        insertRecord(req, res)
    } else {
        updateRecord(req, res)
    }
});

function insertRecord(req, res){
    var item = new storeModel({
            store_Id: req.store_Id,
            store_Area: req.body.store_Area,
            items_Available: req.body.items_Available,
            daily_Customer_Count: req.body.daily_Customer_Count,
            store_Sales: req.body.store_Sales
        }
    );
//Asocia la variable de la base de dato con la de la pagina web
//Falta una condición para que valide que no estén vacíos los campos.
    /*route.store_Id = req.store_Id//web pagina = req.body.ip//bd
    route.store_Area = req.body.store_Area
    route.items_Available = req.body.items_Available
    route.daily_Customer_Count = req.body.daily_Customer_Count
    route.store_Sales = req.body.store_Sales
    */
    item.save((err, doc) => {
        if (!err) {
            res.redirect("router/list")
        } else {
            console.log("Error during insert: " + err)
        }
    });
}

function updateRecord(req, res){
    storeModel.findOneAndUpdate(
        { _id: req.body._id}, req.body, {new: true}, (err, doc) => {
        if (!err) {
            res.redirect("router/list")
        } else {
            console.log("Error during update: " + err)
        }
    });
}
//leer datos
router.get("/list", (req, res) => {
    storeModel.find((err,docs) =>{
        if (!err) {
            res.render("router/list", {
                list: docs
            })
        } else {
            console.log("Error in retrieval: " + err)
        }
    });
});
//Consulta filtrada por campo. permite que coloque otro /y el id 
router.get("/:id", (req,res) => {
//findById metodo permite encontrar el parametro
    storeModel.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("router/crud", {
                viewTitle: "Update Route",
                route: doc,
            });
            console.log(doc);
        }
    });
});

router.get("/delete/:id", (req,res) => {
    storeModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.render("router/list");
        } else {
            console.log("Error in deletion" + err);
        }
    });
});

module.exports = router;
