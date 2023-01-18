const mongoose = require('mongoose');

var structureSchema = new mongoose.Schema({
    store_Id: { type: String, required: ' This field is required', },
    store_Area: { type: String, required: ' This field is required', },
    items_Available: { type: String, required: ' This field is required', },
    daily_Customer_Count: { type: String, required: ' This field is required', },
    store_Sales: { type: String, required: ' This field is required', }
});

const storeModel = mongoose.model("info_stores", structureSchema);
storeModel.insertMany(require('./data-stores.json'));

module.exports ={
    storeModel
};