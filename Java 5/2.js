function nombre() {
    let num1 , num2, num3, mayoria, nombre1, nombre2, nombre3, nombre;
    
    nombre1 = prompt("ingrese 1er nombre");
    num1 = parseInt(prompt("ingrese su edad"));
    nombre2 = prompt("ingrese 2ndo nombre");
    num2 = parseInt(prompt("ingrese su edad"));
    nombre3 = prompt("ingrese 3er nombre");
    num3 = parseInt(prompt("ingrese su edad"));

    if (num1 >= num2 && num1 >= num3){
        mayoria = num1, nombre = nombre1;
    }else if (num2 >= num1 && num2 >= num3){
        mayoria = num2, nombre = nombre2;
    }else{
        mayoria = num3, nombre = nombre3;
    }

    alert("el mayor es, " + nombre +" con: " + mayoria + " años");
};

function Random() {
    for(let i = 1; i <= 3; i++) {
        let num = parseInt(Math.random()*100);
        alert(num);
    } 
};