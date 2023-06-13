function distanceFromHqInBlocks(blockNumber){
// logic is subtracting or add 42 based on block number 
// if >42 we are subtracting 42  from the block number 
// if <42 we subtracting 42 minus block number 
if (blockNumber > 42 ){
    return blockNumber - 42
} 
else {
    return 42 - blockNumber 
}
}

function distanceFromHqInFeet(feetNumber){
   return distanceFromHqInBlocks(feetNumber) * 264 
    
}

function distanceTravelledInFeet(start, destination){
// if start is higher then destination  then we sub start from dest.
// if destination is higher then start then we sub dest. from start.
let blocks;
if ( start > destination ){ 
  blocks = (start - destination) * 264
} 
else if (start < destination) {
    blocks = (destination - start)* 264
} 
return blocks 

}
 function calculatesFarePrice( start , destination ) {
  let feet = distanceTravelledInFeet(start, destination)
if ( feet < 400){
return 0
    }
    else if ( feet >= 401 & feet <= 2000){0.02 
    return 2.56
    }
    else if (feet >=2000 & feet <= 2500 ){
      return 25
    }
    else if (feet >=2501){
    return 'cannot travel that far'}
    
    
    
 }