
window.addEventListener('load',function(){
    
})
 
document.getElementById("button").onclick = function (){
    document.getElementById("demo").innerHTML = "otro párrafo"
}
 
h1.addEventListener("mouseover", function(){
    document.getElementById("h1").innerHTML = "otro h1"
    h1.style.color = "blue"
    h1.style.background = "red"
})

h1.addEventListener("mouseleave", function(){
    document.getElementById("h1").innerHTML = "hola mundo"
    h1.style.color = "red"
    h1.style.background = "blue"
})

document.getElementById("saludo").onclick = function(){
    alert("holaaaaa");
    document.getElementById("demo").innerHTML = "primer párrafo"
} 

