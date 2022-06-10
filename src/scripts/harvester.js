//this function should accept the plants array as input

export const harvestPlants = (plantsArr) => {
    //create an empty array to modify so that it can be returned
    const seedObjArr = [];
    //iterate the array of growing plants to get the output property
    for (const plant of plantsArr) {
        //for (const plant of plantArr) {
        let outputPropertyInteger = plant.output   //trying to save value of output from 18 objects
        //if plantArr not equal to 'Corn' then
        if (plant.type !== 'Corn') { //i loop
            //add the plant object to array x amount of times (x = the output property)
            for (let i = 0; i < outputPropertyInteger; i++) {
            seedObjArr.push(plant)// I don't know how to push an object x number of times
            //if plantArr is "Corn" then push half the amount x times x = the output prop)
            }
        }
         else if (plant.type === "Corn") {
            //divide the output property in half
       const half = outputPropertyInteger/2
            for (let i = 0; i < half ; i++) {
            //push corn object x times
            seedObjArr.push(plant)
            }
        }
        }
    //}
    //return an array of seed objects
    return seedObjArr
}


//def push(seedObjArr, outputPropertyInterger, plant?)
//outputPropertyInterger.times{seedObjArr.push(plant)}
//return array