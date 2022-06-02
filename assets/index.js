const entryURL="https://www.themealdb.com/api/json/v1/1/categories.php"
let searchbyCategory="https://www.themealdb.com/api/json/v1/1/filter.php?c="
let searchbyId="https://www.themealdb.com/api/json/v1/1/lookup.php?i="

let fetchCategory = async ()=>{
    let response = await fetch(entryURL);    
    let data = await response.json();
    return data["categories"]
}

let loadCategoryUI = async ()=>{
    let categories = await fetchCategory();
    
    // console.log(categories)
}

loadCategoryUI();