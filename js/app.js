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

const displayMeals = meals => {
    const searchResult = document.getElementById("search-results");
   /*  meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
     div.classList.add('col');
     div.innerHTML = `
              <div class="card h-100">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
              </div>
               
     `;
     searchResult.appendChild(div);
    })  */
   for(const meal of meals){
       console.log(meal);
       const div = document.createElement('div');
     div.classList.add('col');
     div.innerHTML = `
              <div class="card h-100">
                  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                  <div class="card-body">
                   <h5 class="card-title">${meal.strMeal}</h5>
                   <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
              </div>
               
     `;
     searchResult.appendChild(div);
   }
 }
