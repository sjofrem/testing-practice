const analyzeArray = (array) => {
    if(array.length === 0){
        return null;
    }

    return {
        average: array.reduce((a,b) => a+b, 0) / array.length,
        min: array.sort((a,b) => a-b)[0],
        max: array.sort((a,b) => b-a)[0],
        length: array.length
    }
}

module.exports = analyzeArray;