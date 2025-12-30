const Recipes=require("../models/recipeModel")

const getRecipes=async(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}

const getRecipe=async(req,res)=>{
    const recipe=await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time, coverImage } = req.body;

        if (!title || !ingredients || !instructions || !time) {
            return res.status(400).json({ message: "Required fields can't be empty" });
        }

        // Ensure ingredients is an array
        const ingredientsArray = Array.isArray(ingredients) ? ingredients : [ingredients];

        const newRecipe = await Recipes.create({
            title,
            ingredients: ingredientsArray,
            instructions,
            time,
            coverImage // optional, will use default if not provided
        });

        return res.status(201).json(newRecipe);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


const editRecipe=async(req,res)=>{
     const { title, ingredients, instructions, time, coverImage } = req.body
     let recipe=await Recipes.findById(req.params.id)
     try{
     if(recipe){
        await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({title, ingredients, instructions, time, coverImage})
     }
    }catch(err){
        return res.status(404).json({message:"error"})
    }

}

const deleteRecipe=(req,res)=>{
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}