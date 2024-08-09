export const showIngredients =  (dataIngredients : string[]) : void => { 
    const ingHeader          = document.createElement('h2') as HTMLElement | null;
    if(ingHeader)
    {
        const ingredientCon = document.getElementById('recipeContainer') as HTMLDivElement;
        const createDivIngHeader = document.createElement('div') as HTMLDivElement;
        const ingHeader          = document.createElement('h2') as HTMLElement | null;
        if(ingHeader)
        {
              ingHeader.innerHTML = 'Ingredients';
              ingHeader.style.textAlign = 'left';
              ingHeader.setAttribute("class", "recipe-title");
              createDivIngHeader.appendChild(ingHeader);
      
              let parent = document.createElement("ul");
              dataIngredients.forEach((i) => {
                let child = document.createElement("li");
                child.innerText = i;
                child.style.textAlign = 'left';
                parent.appendChild(child);
                createDivIngHeader.appendChild(parent);
              });
              ingredientCon.appendChild(createDivIngHeader);
        }  
    }  
    
}