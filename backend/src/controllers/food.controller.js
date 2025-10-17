const foodModel = require("../models/food.model");
const storageService = require("../services/storage.services");

async function createFood(req, res) {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);

    // Dynamic import for ES Module uuid
    const { v4: uuid } = await import("uuid");

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    console.log(fileUploadResult);

    res.send("Food item is created");
}

module.exports = {
    createFood,
};
