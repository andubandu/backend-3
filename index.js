import fetch from 'node-fetch';
import fs from 'fs/promises'

async function getRecipes() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    const recipes = data.recipes.map((recipe) => {
        const { name, ingredients, prepTimeMinutes, rating } = recipe;
        return { name, ingredients, prepTimeMinutes, rating };
    });
    await fs.writeFile('recipes.json', JSON.stringify(recipes, null, 2));
    console.log('recipes.json created');
}

// add something additional and cool

async function getRecipe(id){
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    const recipe = {
        name: data.name,
        ingredients: data.ingredients,
        prepTimeMinutes: data.prepTimeMinutes,
        rating: data.rating
    };
    await fs.writeFile(`recipe-${id}.json`, JSON.stringify(recipe, null, 2));
    console.log(`recipe-${id}.json created`);
}

getRecipe(1);