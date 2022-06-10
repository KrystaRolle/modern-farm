import { addPlant, usePlants } from "./fields.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSunflower } from "./seeds/sunflower.js"
import { Catalog } from "./catalog.js"



//did this part before harvest plants
//invoke the func that plants all of the seeds
//putting plan into plantSeeds function
const grabsSeedsArr = plantSeeds(createPlan())
//putting seed from grabsSeedsArr into fieldArray
const addingthePlant = addPlant(grabsSeedsArr) //addingtheplant is an array in an array i think. i may have to remove arr form arr
console.log(addingthePlant)

//grab plants array 
//harvest them by invoking the proper func
//specify the array as the argument
const harvest = harvestPlants(addingthePlant)
//console.log the array
console.log(harvest)

const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = Catalog(harvest)
//console.log(result)




// const seed = {
//     type: 'seed'
// }
// //invoke addplant and use plants to test results
// const addPlants = addPlant(seed)
// const plant = usePlants(addPlants)
// console.log(plant)

// const yearlyPlan = createPlan()
// console.log(yearlyPlan)

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

