var a=document.getElementById("display");
function Display(value){
    a.value += value;
}
function Calculator(){
    try {
        a.value = eval(a.value);
    }
    catch (error){
        alert("Error");
    }
}
function clears(){
    a.value="";
}
function Deletes(){
    a.value=a.value.slice(0,-1);
}