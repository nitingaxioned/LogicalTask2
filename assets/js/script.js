/* Author: 

*/

var random=[1,2,3,4,5,6,7,8,9,100,500,8000,5451,9875,5221], n, i, j, flag=0;

function fun(){
    document.open();
    document.write("Given Array [ "+random+" ]<br><br>");
    document.write("Enter a Natural Nummber to find pair of nummbers from the given array whose sum equals to that.<br><br>");
    document.write('<input type="text" id="num" placeholder="Enter Nummber"><br><br>');
    document.write('<input type="button" value="Find" id="btn" onclick="validate()"><br>');
}

function validate(){
    n = parseInt( document.getElementById("num").value );
    if(n>=0)
        check();
    else{
        alert( document.getElementById("num").value+" is not a Natural Number" );
        fun();
    }
}

function check(){
    document.open();
    document.write("Given Array [ "+random+" ]<br>");
    document.write("Enterd Number : "+n+" <br><br>");
    document.write("Possible pair: <br><br>");
    for (i=1; i<random.length; i++){
        for (j=i; j<random.length; j++){
            if (random[i]+random[j]==n){
                document.write(random[i]+" + "+random[j]+" = "+n+"<br>");
                flag++;
            }
        }
    }
    if(!flag>0)
    document.write("Not found any possible pair.");
    document.write('<br><br><input type="button" value="Find for Next Nummber" id="reset" onclick="fun()"><br>');
}

fun();