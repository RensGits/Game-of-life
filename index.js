

   // GRID AND NEIGHBOUR CHECKER //
   
    gridRowCoordinates = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
    gridColumnCoordinates = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,]

    
    function parentChecker(){
    for (let blockNumber = 0; blockNumber < 16; blockNumber++ ){
        
        blockName = 'block' + blockNumber

        const parentBlock = document.getElementById(blockName);
        parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');
        
        parentBlock.innerHTML = '<p>' + gridRowCoordinates[blockNumber].toString() +' / ' + gridColumnCoordinates[blockNumber].toString() + '</p>';
        const sumOfGridCoordinates = gridRowCoordinates[blockNumber] + gridColumnCoordinates[blockNumber]
        
        console.log(blockName + ' / sum of grid coordinates' + sumOfGridCoordinates)
        
        
        
        

        function neighbourChecker(){

        for (let b = 0; b < 16; b++){

            
            checker();





            }
            
            
            }

            function checker(b){
                
                blockNameNeighbour = 'block' + b
            
                const neighbourBlock = document.getElementById(blockNameNeighbour);
                neighbourColor = window.getComputedStyle(neighbourBlock).getPropertyValue('background-color');
                
                 const sumOfGridCoordinatePossibleNeighbour = gridRowCoordinates[b] + gridColumnCoordinates[b];
                   console.log('child-block' + [b])
            
                    sumOfRowFuture = gridRowCoordinates[blockNumber] - gridRowCoordinates[b];
                    sumofColumnFuture = gridColumnCoordinates[blockNumber] - gridColumnCoordinates[b];
            
                   
                    if  ((sumOfGridCoordinates != sumOfGridCoordinatePossibleNeighbour) && 
                        ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour )<= 1) && 
                        ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour ) >= -1) && 
                        ((sumOfRowFuture ) <= 1 && (sumOfRowFuture >= -1)) && 
                        ((sumofColumnFuture ) <= 1 && (sumofColumnFuture >= -1))){
                                console.log('this is a neighbor of parent block');
                                console.log(neighbourColor);
            
                                if (neighbourColor = parentColor){
                                    neighbourBlock.style.backgroundColor = 'black';
                                }           
                    }
                }
            














        }

        setTimeout(neighbourChecker, 4000);
        //neighbourChecker();
    
    }

    


parentChecker();

    
    

    








      
        
        
    

   


