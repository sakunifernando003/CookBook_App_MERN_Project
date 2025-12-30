const express=require("express")
const { getRecipes } = require("../controller/recipeController")
const router=express.Router()

router.get("/", getRecipes) // to get all the recipes




module.exports=router

