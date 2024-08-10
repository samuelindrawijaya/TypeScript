

export const showInstruction =  (instructionList : string) : void => { 
    const getContainer = document.getElementById('recipeContainer') as HTMLDivElement;
    const createDivInsHeader = document.createElement('div') as HTMLDivElement;
    const ingHeader          = document.createElement('h2') as HTMLElement | null;
    if(ingHeader)
    {
        ingHeader.innerHTML = 'Instruction';
        ingHeader.style.textAlign = 'left';
        ingHeader.setAttribute("class", "recipe-title");
        createDivInsHeader.appendChild(ingHeader);
        console.log(createDivInsHeader);

        const createList = document.createElement('ol') as HTMLOListElement;

        const splitInstrution : string[] = instructionList.split(/(?<=[.!?])\s+/);
        splitInstrution.forEach((step) => {
            const list = document.createElement('li') as HTMLLIElement;
            list.innerHTML = step;
            list.style.textAlign = 'left';
            createList.appendChild(list);
        })
        createDivInsHeader.appendChild(createList);
        getContainer.appendChild(createDivInsHeader);
    }
}