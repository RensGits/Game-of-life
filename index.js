
   
   // GRID AND NEIGHBOUR CHECKER //

   // make two arrays that takes in a number representing the row and column count. 
   
   let ruleOF = 2;
   let ruleOS = 3;
   let ruleT = 3;
   const ruleOneFirst = document.getElementById('ruleOneFirst');
   const ruleOneSecond = document.getElementById('ruleOneSecond');
   const ruleTwo = document.getElementById('ruleTwo');
   

   
   ruleOneFirst.addEventListener('input', rof);
    function rof(){
        ruleOF = ruleOneFirst.value
    }

   ruleOneSecond.addEventListener('input', ros);
    function ros(){
        ruleOS = ruleOneSecond.value
    } 

   ruleTwo.addEventListener('input', rt);
    function rt(){
        ruleT = ruleTwo.value
        console.log(ruleT)
    }

   console.log(ruleT)

  











   var gridRowCoordinates = []
   var gridColumnCoordinates = []
   let gridSize = 20;
   var allBlocks = document.getElementsByClassName('block');
    

   function gridMaker (num){
    const gameContent = document.getElementById('gameContent')    
    gameContent.style.gridTemplateColumns = "repeat(" + num + ", 1fr)"
    gameContent.style.gridTemplateRows = "repeat(" + num + ", 1fr)"
    
    for (let c = 0; c < num; c++ ){
        for (let b = 0; b < num; b++){
            gridRowCoordinates.push(c + 1);
            }} 

    for (let c = 0; c < num; c++ ){
        for (let b = 0; b < num; b++){
            gridColumnCoordinates.push(b + 1);
            }} 

    for (let x = 0; x < (num*num); x++){
        gameContent.innerHTML += "<div class = 'block' " + "id = block" + x + " ></div>"
        }
    
    Array.from(allBlocks).forEach(block => {block.addEventListener("click" , () => {block.style.backgroundColor = 'rgb(0, 0, 0)'})})
   }

   gridMaker(gridSize);

 // GRID SIZE SLIDER //


 gridSizeSlider = document.getElementById('gridSizeSlider')
 gridSliderValue = document.getElementById('gridSliderValue')

 gridSliderValue.innerHTML = 'Grid-size: ' + gridSizeSlider.value + ' x ' + gridSizeSlider.value;

 gridSizeSlider.oninput = function(){
    gridRowCoordinates = [];
    gridColumnCoordinates = []; 
    gridSliderValue.innerHTML = 'Grid-size: ' + gridSizeSlider.value + ' x ' + gridSizeSlider.value;
    gridSize = gridSizeSlider.value;
    gameContent.innerHTML = ' ';
    
    gridMaker(gridSize);
 
 }


    
   
   // RESET BUTTON //
   

    const resetBtn = document.getElementById('resetButton')
    resetBtn.addEventListener("click", reset)

    function reset(){
        Array.from(allBlocks).forEach(block => {
            block.style.backgroundColor = 'rgb(255, 255, 255)'
        })}
    
    

    
    // SPEED SLIDER //

    
    speedSlider = document.getElementById('speedSlider')
    sliderValue = document.getElementById('sliderValue')
    sliderValue.innerHTML = 'Reproduction-speed: ' + speedSlider.value + ' ms';

    speedSlider.oninput = function(){
        sliderValue.innerHTML = 'Reproduction-speed: ' + speedSlider.value + ' ms';
        }

   

    // NEXT GENERATION BUTTON //
   
   const nextBtn = document.getElementById('nextButton');
   nextBtn.addEventListener("click", gameOfLife)
   playBtn.addEventListener("click", playGameOfLife)
   
   var state = false
   var interval;
   function playGameOfLife(){
        
        state = !state
        console.log(state)
        
        if(state){
            speedSlider.addEventListener('change', function(){
                clearInterval(interval);
                playBtn.innerHTML = 'Play'
                 });

        
            interval = setInterval(gameOfLife, speedSlider.value)
            playBtn.innerHTML = 'Pause'
        }
        
            else if (!state) {
            clearInterval(interval) 
            playBtn.innerHTML = 'Play'
        }

        
    }

   

    // ALIVE NEIGHBOUR CHECKER //

    function gameOfLife(){

        let aliveNeighBourArray=[];
    
        for (let blockNumber = 0; blockNumber < gridSize * gridSize;  blockNumber++){ // Itterates over each parent block

        blockName = 'block' + blockNumber

        const parentBlock = document.getElementById(blockName);
        parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');
       
        const sumOfGridCoordinates = gridRowCoordinates[blockNumber] + gridColumnCoordinates[blockNumber]
       
        let neighbourCount = -1;
        let aliveNeighbourCount = 0;
        
        // Itterates over each child block for each parent
        for (let b = 0; b < gridSize * gridSize; b++){ 
            
                // Checks for each block who is an alive neighbour block 
                blockNameNeighbour = 'block' + b
               
           
                const neighbourBlock = document.getElementById(blockNameNeighbour);
                neighbourColor = window.getComputedStyle(neighbourBlock).getPropertyValue('background-color');
           
                const sumOfGridCoordinatePossibleNeighbour = gridRowCoordinates[b] + gridColumnCoordinates[b];

       
                sumOfRowFuture = gridRowCoordinates[blockNumber] - gridRowCoordinates[b];
                sumofColumnFuture = gridColumnCoordinates[blockNumber] - gridColumnCoordinates[b];
       
              
                // conditions for Von Neumann neighbourhood 
                //    ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour )<= 1) && 
                //    ((sumOfGridCoordinates - sumOfGridCoordinatePossibleNeighbour ) >= -1) && 
               
                if  ( 
                    
                    (b != blockNumber) &&
                    ((sumOfRowFuture ) <= 1 && (sumOfRowFuture >= -1)) && 
                    ((sumofColumnFuture ) <= 1 && (sumofColumnFuture >= -1)) 
                   
                   ){
                        
                        neighbourCount += 1; 
                         
                        if(neighbourColor == 'rgb(0, 0, 0)'){
                            aliveNeighbourCount += 1;
                        }}}
            
            aliveNeighBourArray.push(aliveNeighbourCount);  // updates array of alive blocks per itteration
        }


        // UPDATE GRID FUNCTIONALITY //
        
        
      

        godFunction();

        function godFunction(){

            for(let x = 0; x < aliveNeighBourArray.length; x++){

            blockName = 'block' + x

            const parentBlock = document.getElementById(blockName);
            parentColor = window.getComputedStyle(parentBlock).getPropertyValue('background-color');



                if(parentColor === 'rgb(0, 0, 0)' ){
                    
                    if (aliveNeighBourArray[x] < ruleOF ){
                        parentBlock.style.backgroundColor = 'rgb(255, 255, 255)'
                        console.log(ruleOF);
                    }
                    else if (aliveNeighBourArray[x] > ruleOS ){
                        parentBlock.style.backgroundColor = 'rgb(255, 255, 255)'
                        console.log(ruleOS);
                    }
                }

                else if(parentColor === 'rgb(255, 255, 255)'){
                    
                    if(aliveNeighBourArray[x] == ruleT ){
                        parentBlock.style.backgroundColor = 'rgb(0, 0, 0)'
                        console.log(ruleT);
                    }
                }

                else {parentBlock.style.backgroundColor = 'rgb(255, 255, 255)'}

            }
        }
}

       

  
   
   

    


   



