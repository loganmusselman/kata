var conditionalSum = function(values, condition){
    var ans = 0;
    if(condition == "even"){
        for(let i = 0; i < values.length; i++){
            if(values[i] % 2 === 0){
                ans += values[i];
            }
        }
    } else if(condition == "odd") {
        for(let i = 0; i < values.length; i++){
            if(values[i] % 2 != 0){
                ans += values[i];
            }
        }
    } else {
        ans = 0;
    }
    console.log(ans);
    return;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5,], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));