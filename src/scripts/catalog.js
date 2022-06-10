export const Catalog = (harvestedFoodArr) => {
//empty string 
let htmlResult = ''
    //iterate array of param
for (const foodArrItem of harvestedFoodArr){
//render html
htmlResult += `<section class="plant">${foodArrItem.type}</section>`
}
return htmlResult
}