const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries=batteryBatches.reduce(totalCapacity,0);
function totalCapacity(totalAmount,currentValue){    
    return  totalAmount+currentValue;
}