
//    for (let i = 1; i < 10; i++) {
//     setTimeout(function timer() {
//       console.log("hello world");
//     }, i * 3000);
//   }


   
   // GRID AND NEIGHBOUR CHECKER //
   
   gridRowCoordinates = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
   gridColumnCoordinates = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,]

   
   function gameOfLife(){

   
   for (let blockNumber = 0; blockNumber < 16;  blockNumber++ ){

       setTimeout(parentChecker(blockNumber), blockNumber * 3000)

    
    

        function parentChecker(blockNumber){
       
        blockName = 'block' + blockNumber

        const parentBlock = document.getElementById(blockName);
        parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');
       
        //    parentBlock.innerHTML = '<p>' + gridRowCoordinates[blockNumber].toString() +' / ' + gridColumnCoordinates[blockNumber].toString() + '</p>';
       
        const sumOfGridCoordinates = gridRowCoordinates[blockNumber] + gridColumnCoordinates[blockNumber]
       
        console.log(blockName)
       
       
        let neighbourCount = 0;
       

       
           

       for (let b = 0; b < 16; b++){
            setTimeout(neighbourChecker(b), b * 3000)
           
          
           function neighbourChecker(b){
              
           blockNameNeighbour = 'block' + b
           let neighbour = false;
           
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
                           console.log('this child is a neighbor of parent block');
                           neighbour = true;
                           neighbourCount += 1
                           
       
                           if (neighbour && (neighbourColor === parentColor)){
                               parentBlock.style.backgroundColor = 'black';
                           }
                           else parentBlock.style.backgroundColor = 'white'; 

                           console.log(parentBlock.style.backgroundColor)
                        
                        }
                    }
                }
            console.log(neighbourCount);
            
            }
        }
    }

       

   
   

   

gameOfLife();
