import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"


//this func should accept years planting plan as param
//the plan is an arr. it contains. 4 arr representing rows

//Input is the planting plan. enter arg in main.js
export const plantSeeds = (plantingPlanArrs) => {
    //iterate both parent and child arrays
    const seedsArray = []
    for (const plantingPlanArr of plantingPlanArrs) {
        for (const plant of plantingPlanArr) {
            // conditional statement matching for all seed types
            if (plant === 'Asparagus') {
                //during iteration invoke the factory func (createAsparagus to get asparagus seed)
                //takes the seed and adds to the array of plants in the field module(on main.js)
                //push into the array
                seedsArray.push(createAsparagus())
                //returns the seeds 
            }
            else if (plant === 'Potato') {
                seedsArray.push(createPotato())
            } else if (plant === 'Sunflower') {
                seedsArray.push(createSunflower())
            } else if (plant === 'Wheat') {
                seedsArray.push(createWheat())
            } else if (plant === 'Corn') {
                let corns = createCorn()
                for (const corn of corns) {
                seedsArray.push(corn)
                }
            } else if (plant === 'Soybean') {
                seedsArray.push(createSoybean())
            }
        }
    }
    return seedsArray
}
// for(let i = 0; i < plantingPlanArr.length; i++) {
//     for(let j = 0; j < plantingPlanArr[i].length; j++) {
       // if if plantingPlanArr[i] === 'Asparagus' {
// const asparagusseeda = sparagus()
//fieldsarr.push('aspragusseed')
       //}
//     }
//  }