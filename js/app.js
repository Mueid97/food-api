const clicked = () =>{
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    inputField.value = '';
    //console.log(inputValue);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
    //console.log(url);
    fetch(url)
    .then(res => res.json()) 
    .then(data => displayMeals(data.meals));
}

