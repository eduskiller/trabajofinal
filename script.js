var nombre=prompt("ingresa tu nombre:");

function saludo(){
    if (nombre==""){
        alert("no ingresaste ningun nombre");
    
}else{
    alert("bienvenido " + nombre);
}

}
console.log(nombre);
saludo();