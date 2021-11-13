export const combineAge = arr => arr.reduce((acc, item) => acc += item.age, 0); // helper function 
export const renderAge = (element, data) => element.innerHTML = combineAge(data);
