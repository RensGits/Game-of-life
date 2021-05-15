
   
   // GRID AND NEIGHBOUR CHECKER //

   // make two arrays that takes in a number representing the row and column count. 
   
   const gridRowTest = [];
   const gridColumnTest = [];
  
   function gridMaker (num){
       for (let c = 0; c < num; c++ ){
           for (let b = 0; b < num; b++){
                gridRowTest.push(c + 1);
            }
       
        } 

        for (let c = 0; c < num; c++ ){
            for (let b = 0; b < num; b++){
            gridColumnTest.push(c);
            }
             
        
         } 
   }

   gridMaker(10)

   

//   console.log(gridRowTest);
//   console.log(gridColumnTest);
   
   gridRowCoordinates = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
   gridColumnCoordinates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   
   
   const btn = document.getElementById('button');
   btn.addEventListener("click", gameOfLife)
   
   
   
   function gameOfLife(){

    let aliveNeighBourArray=[];
    
    
    
    
    
    
    
    for (let blockNumber = 0; blockNumber < 100;  blockNumber++){ // Itterates over each parent block

       
       
        blockName = 'block' + blockNumber

        const parentBlock = document.getElementById(blockName);
        parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');
       
        
       
        const sumOfGridCoordinates = gridRowCoordinates[blockNumber] + gridColumnCoordinates[blockNumber]
       
        
       
        let neighbourCount = -1;
        let aliveNeighbourCount = 0;
        
      
           
        
        
       for (let b = 0; b < 100; b++){ // Itterates over each child block for each parent
            
         // Checks for each block who is an alive neighbour block 
                blockNameNeighbour = 'block' + b
               
           
                const neighbourBlock = document.getElementById(blockNameNeighbour);
                neighbourColor = window.getComputedStyle(neighbourBlock).getPropertyValue('background-color');
           
                const sumOfGridCoordinatePossibleNeighbour = gridRowCoordinates[b] + gridColumnCoordinates[b];

       
               sumOfRowFuture = gridRowCoordinates[blockNumber] - gridRowCoordinates[b];
               sumofColumnFuture = gridColumnCoordinates[blockNumber] - gridColumnCoordinates[b];
       
              
            //   (sumOfGridCoordinates != sumOfGridCoordinatePossibleNeighbour) &&   // conditions for Von Neumann neighborhood 
                //    ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour )<= 1) && 
                //    ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour ) >= -1) && 
               
                
                // console.log(sumOfRowFuture);

                if  ( 

                    (b != blockNumber) &&
                ((sumOfRowFuture ) <= 1 && (sumOfRowFuture >= -1)) && 
                   ((sumofColumnFuture ) <= 1 && (sumofColumnFuture >= -1))
                    

                    
                   
                   ){
                        
                        neighbourCount += 1; 
                      
                        
                        if(neighbourColor == 'rgb(0, 0, 0)'){
                            aliveNeighbourCount += 1;
                        }}
                    
                    
                    
                    }
                  
                    

                
            
            


            aliveNeighBourArray.push(aliveNeighbourCount);  // updates array of alive blocks per itteration
           
           

            

        }



        godFunction();

        function godFunction(){




            
            for(let x = 0; x < aliveNeighBourArray.length; x++){


            blockName = 'block' + x

            const parentBlock = document.getElementById(blockName);
            parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');

                console.log(blockName);
               
                console.log('alive neighbours: ' + aliveNeighBourArray[x]);



                


                if(parentColor === 'rgb(0, 0, 0)' ){
                    console.log('black!')
                    if (aliveNeighBourArray[x] < 2 ){
                        parentColor === 'rgb(255, 255, 255)';
                    }
                    else if (aliveNeighBourArray[x] > 3 ){
                        parentColor === 'rgb(255, 255, 255)'
                    }
                }

                else if(parentColor === 'rgb(255, 255, 255)'){
                    console.log('white!')
                    if(aliveNeighBourArray[x] === 3){
                        parentColor === 'rgb(0, 0, 0)'
                    }
                }

                else {parentColor === 'rgb(255, 255, 255)'}

    

            }
        }





    }

       
   
   
   

    


   

// gameOfLife();


