/* Author: 

*/

var random=[1,2,3,4,5,6,7,8,9,100,500,8000,5451,9875,5221], n, i, j, txt="", flag=0;

document.getElementById("array").innerHTML = "Given Array :  [ "+random+" ]";

function validate(){
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("output").style.visibility = "hidden";
    n = parseInt( document.getElementById("num").value );
    if(n>=0)
        check();
    else{
        document.getElementById("error").innerHTML = "Error : "+document.getElementById("num").value+" is not a Natural Number";
        document.getElementById("error").style.visibility = "visible";
        txt="";
        flag=0;
    }
}

function reclear(){
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("output").style.visibility = "hidden";
}

function check(){
    for (i=1; i<random.length; i++){
        for (j=i; j<random.length; j++){
            if (random[i]+random[j]==n){
                txt = txt + random[i]+" + "+random[j]+" = "+n+"<br>";
                console.log(txt);
                flag++;
            }
        }
    }
    if(!flag>0){
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").innerHTML = "Not found any possible pair.";
    }
    else{
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").innerHTML = txt;
        txt="";
        flag=0;
    }
}