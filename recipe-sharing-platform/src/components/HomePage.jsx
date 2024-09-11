import React, { useState, useEffect} from 'react'

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);


useEffect(() =>{
    fetch("/src/data.json")
    .then((response) => response.json())
    .then((data) =>  setRecipes(data))
    .catch((error) =>console.error ("Error fetching data:", error))

}, [])

return (
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-6 text-center'>FingerLicking Recipes</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {recipes.map((recipe) => (
                <div key={recipe.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
                    <img src={recipe.image} alt={recipe.title} className='w-full h-48 object-cover' />
                    <div className='p-4' >
                        <h2 className='text-xl font-semibold' >{recipe.title}</h2>
                        <p className='text-gray-600 mt-2' >{recipe.summary}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}
export default HomePage;


