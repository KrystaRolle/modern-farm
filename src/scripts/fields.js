// const plantStorage = []
//add plant func accepts seed obj
//func adds seed obj to plantstorage array. returns modified array

// export const addPlant = (seedObj) => {
//     plantStorage.push(seedObj)
//     return plantStorage
// }
// use plants returns copy of modified plantStorage array 
// use the array.isarray method to check
export const usePlants = (plantStorageArr) => {
 let plantArrCopy = [...plantStorageArr]
    //const plantArrCopy = plantStorageArr
    return plantArrCopy
}