let values = [5,6,7];
console.log("array values are ...");
let i =0;
while(i< values.length){
    console.log(values[i]);
    i++;
}
var arrayvalues = '';
function displayArrayValues(){
   
while(i< values.length){
       arrayvalues += values[i];
    i++;
}
document.getElementById("array").innerHTML =arrayvalues;
}