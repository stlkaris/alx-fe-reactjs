import React, { useState } from 'react'


const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = "Recipe title is required"
        if (!ingredients) newErrors.ingredients = "Ingredients are required"
        if (ingredients.split(',').length < 2) newErrors.ingredients = "Please include atleast two ingredients"
        if(!instructions) newErrors.instructions = "Preparation steps are required"
        return newErrors;
    };
    const handleSubmit = (e) => {
     e.preventDefault();
     const validationErrors = validateForm();
     if (Object.keys(validationErrors).length >0) {
        setErrors(validationErrors)
     } else {
        console.log({title, ingredients, instructions})

        setTitle('')
        setIngredients('')
        setInstructions('')
        setErrors({});
     }
    };
  return (
    <div className='max-w-lg max-auto p4'>
        <h2 className='text-3xl font-bold mb-4'>Add New Recipe</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
        <label htmlFor="title" className='block text-sm font-medium text-gray-700'>Recipe Title</label>
        <input type="text" 
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300'
         />
         {errors.title &&  <p className="text-red-500 text-sm">{errors.title}</p>}
       </div>
        
         <div>
        <label htmlFor="ingredients" className='block text-sm font-medium text-gray-700'>Ingredients (separate by commas)</label>
        <textarea 
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className='mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300'
        ></textarea>
        {errors.ingredients && <p className='text-red-500 text-sm'>{errors.ingredients}</p>}
      </div>
       
        <div>
            <label htmlFor="instructions" className='block text-sm font-medium text-gray-700'>Preparation Steps</label>
            <textarea id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300'
            ></textarea>
            {errors.instructions && <p className='text-red-500 text-sm'>{errors.instructions}</p>}
        </div>
        <button type='submit' className='w-full bg-indigo-600 text-white py-4 px-4 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400'>
            Submit Recipe
        </button>
      </form>
    </div>
  )
}

export default AddRecipeForm
