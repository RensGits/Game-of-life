

    //iterates over grid items and assigns something to it
   
    gridRowCoordinates = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
    gridColumnCoordinates = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,]
    
    for (let blockNumber = 0; blockNumber < 16; blockNumber++ ){
        
        blockName = 'block' + blockNumber
        
        document.getElementById(blockName).innerHTML = 'test';
        const sumOfGridCoordinates = gridRowCoordinates[blockNumber] + gridColumnCoordinates[blockNumber]
        console.log('sum of grid coordinates' + sumOfGridCoordinates)
        for (let b = 0; b < 16; b++){
            const sumOfGridCoordinatePossibleNeighbour = gridRowCoordinates[b] + gridColumnCoordinates[b]
            console.log('sum of possible neighbour' + sumOfGridCoordinatePossibleNeighbour)
        }
        // console.log(blockNumber)
        // console.log(blockName);   
        // console.log('sum of block coordinates = ' + sumOfGridCoordinates)
        
        }
    

    // every grid item has coordinates based on their grid-row and grid-columm
    // a function itterates over all the grid items
    // a functions itterates of each grid-items neighbour by checking if the difference between the sum of the coordinates is not bigger than 1
     

  

//[1,1],[1,2],[1,3],[1,4],[2,1],[2,2],[2,3],[2,4],[3,1],[3,2],[3,3],[3,4],[4,1],[4,2],[4,3],[4,4]
  




