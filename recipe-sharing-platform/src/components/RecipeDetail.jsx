
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const RecipeDetail = () => {
    const { id } =  useParams();
    const [recipe, setRecipe] = useState(null)

    useEffect (() => {
        fetch("/src/data.json")
        .then((response) => response.json())
        .then((data) => {
            const recipeDetail = data.find((recipe) =>recipe.id === parseInt(id))
            setRecipe(recipeDetail)
            console.log(data)
        })
        .catch((error) => console.error("Error fetching recipe", error))
    }, [id])

    if (!recipe) {
        return <p>Loading...</p>
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
                <p className="text-gray-600 mb-6">{recipe.summary}</p>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc pl-5">{recipe.ingredients.map((ingredients, index) => (
                        <li key={index} className="text-gray-600">{ingredients}</li>
                    ))}</ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold md-2">Instructions</h2>
                    <ol className="list-decimal pl-5">{recipe.instructions.map((instructions, index) =>(
                    <li key={index} className="text-gray-600 mb-2">{instructions}</li>
                    ))}</ol>
                </div>
            </div>
        </div>
    )

}

export default RecipeDetail




