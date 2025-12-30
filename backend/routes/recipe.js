const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe } = require("../controller/recipeController")
const router=express.Router()

router.get("/", getRecipes) // to get all the recipes
router.get("/:id",getRecipe)//to get recipe by id
router.post("/",addRecipe)// add recipe
router.put("/:id",editRecipe)//edit recipe
router.delete("/:id",deleteRecipe)// Delete recipe



module.exports=router