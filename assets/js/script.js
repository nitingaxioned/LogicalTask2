/* Author: 

*/

var random=[-3,1,2,3,4,5,6,7,8,9], n, i, j;

n = parseInt(prompt("Enter a nummber"));

for( i of random ){
    for( j of random){
        if (i+j==n) 
            document.write(i+" + "+j+" = "+n+"<br>");
    }
}

