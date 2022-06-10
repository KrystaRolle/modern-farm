//create a module for all seed types
//scripts/seeds/corn.js
//in each module define/export func to create that seed
//define like Asparagus would be createAsparagus
//each func return object with these properties
//type height and output
//the create corn should return array with two identical
//objects in it with the same keys and values
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]
export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }
    return plan
}




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

