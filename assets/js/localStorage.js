export const getFromLocalStorage = () => {
    const todolists = localStorage.getItem('todolist');
    const todolistsToObj =JSON.parse(todolists);
    return todolistsToObj;
}

export const setToLocalStorage = (dataObject) => {
    try {
        const dataObjectToJson =JSON.stringify(dataObject);
        localStorage.setItem('todolist',dataObjectToJson);
        return true;
    } catch (error) {
        console.log(error)
    }
   
}