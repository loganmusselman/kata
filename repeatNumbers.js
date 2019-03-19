
var repeatNumbers = function(data) {
    var ans = [];
    if(data[0][1]){
        for(let i = 0; i < data.length; i++){
            for(let k = 0; k < data[i][1]; k++){
                ans.push(data[i][0]);
            }
            ans.push(" ");
        }
    } else {
        for(let j = 0; j < data[1]; j++){
            ans.push(data[0]);
        }
    }
    ans = ans.join("");
    console.log(ans);
    return;
};

console.log(repeatNumbers([1, 10]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));