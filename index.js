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

async function getUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users = data.users.map((user) => {
        const { id, fullName, email, birthDate, country } = user;
        return { id, fullName, email, birthDate, country };
    });
    await fs.writeFile('users.json', JSON.stringify(users, null, 2));
    console.log('users.json created');
}

async function getUser(id){
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await response.json();
    const user = {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        birthDate: data.birthDate,
        country: data.country
    };
    await fs.writeFile(`user-${id}.json`, JSON.stringify(user, null, 2));
    console.log(`user-${id}.json created`);
}


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

getRecipes();
getUsers();
getUser(1);
getRecipe(1);