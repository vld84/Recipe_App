import React, { useState } from "react";

function RecipeCreate({addRecipes}) {
  const[name, setName]=useState("")
  const[cuisine, setCuisine]=useState("")
  const[photo, setPhoto]=useState("")
  const[ingredients, setIngredients]=useState("")
  const[preparation, setPreparation]=useState("")
  console.log(name+"  "+ cuisine+"  "+ ingredients);
  
    const handleSubmit = (event) => {
    event.preventDefault();
    addRecipes({"name":name, "cuisine":cuisine, "photo":photo, "ingredients":ingredients, "preparation":preparation });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  //To create a recipe entry, your app will need to have a form with input fields for the name of the dish, the cuisine it belongs to, and an URL that points to a picture of the dish. Use <textarea> for the ingredients and preparation. For the tests to pass, use the following names for your inputs: <input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients"> and <textarea name="preparation">.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input className="input-text" placeholder="Name" name="name" type="text" required={true} value={name} onChange={(e)=>setName(e.target.value)}/></td>
            <td><input className="input-text" placeholder="Cuisine" name="cuisine" type="text"required={true} value={cuisine} onChange={(e)=>setCuisine(e.target.value)}/></td>
            <td><input className="input-text" placeholder="Url" type="url" name="photo" required={true} value={photo} onChange={(e)=>setPhoto(e.target.value)}/></td>
            <td><textarea placeholder="Ingredients" name="ingredients" type="text" required={true} value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/></td>
            <td><textarea placeholder="Preparation" name="preparation" type="text" required={true} value={preparation} onChange={(e)=>setPreparation(e.target.value)}/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
