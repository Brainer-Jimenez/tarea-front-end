orden =[];

i=0;


function ingresar(numero) {

    actual =document.getElementById("display").innerHTML;
    console.log(actual);
    console.log(numero.value);

    if (actual == 0) {
        document.getElementById("display").innerHTML = numero.value;
    } else {
        document.getElementById("display").innerHTML = actual + numero.value;
    }

}

function operacion(signo) {

    if (orden.length==0){
        orden.push(document.getElementById("display").innerHTML);
        i++;
        agregarHistorial(document.getElementById("display").innerHTML,1);

        document.getElementById("display").innerHTML = "0";
        orden.push(signo.value)
    } else if (orden.length==2 && document.getElementById("display").innerHTML == 0){
        orden[1] = signo.value;
    } else if (orden.length==2){
        igual();
        orden.push(document.getElementById("display").innerHTML);

        document.getElementById("display").innerHTML = "0";
        orden.push(signo.value)
    }
}

function borrarAC() {
    
    document.getElementById("display").innerHTML = "0";
    
}

function borrarC() {
    
    actual =document.getElementById("display").innerHTML;

    if (actual!=0){
        document.getElementById("display").innerHTML = actual.slice(0, actual.length-1);
    }
}

function igual() {

    
    orden.push(document.getElementById("display").innerHTML);
    console.log(orden);

    op = orden[1];
    agregarHistorial(op,2);
    primero = parseFloat(orden[0]);
    segundo = parseFloat(orden[2]);
    agregarHistorial(document.getElementById("display").innerHTML,2);

    if (op=="+"){
        document.getElementById("display").innerHTML = ""+ (primero+segundo);
        
        orden =[];
    } else if(op=="-"){
        document.getElementById("display").innerHTML = ""+ (primero-segundo);
        orden =[];
    } else if (op=="*"){
        document.getElementById("display").innerHTML = ""+ (primero*segundo);
        orden =[];
    } else if (op=="/"){
        if (segundo==0){
            document.getElementById("display").innerHTML = "Math Error";
            orden =[];
        } else {
            document.getElementById("display").innerHTML = primero/segundo;
            orden =[];
        }
    }
    agregarHistorial("=",2);
    agregarHistorial(document.getElementById("display").innerHTML,2);
    

}

function agregarHistorial(actual,caso){

    if (caso==1){
        const nuevo = `<li class="historialli" id="historialli${i}">${actual}</li>`;

        document.getElementById("historialul").innerHTML += nuevo;
        
    }

    if (caso==2){
        document.getElementById("historialli"+i).innerHTML += actual;
    }

}

function borrarHistorial() {
    document.getElementById("historialul").innerHTML = "";
}

function cambiar() {
    
    if (document.body.classList.contains("aqua")){
        document.body.classList.remove("aqua");
        document.body.classList.add("black");
        document.getElementById("oscuro").innerHTML = 'claro';
    } else {
        document.body.classList.remove("black");
        document.body.classList.add("aqua");
        document.getElementById("oscuro").innerHTML = 'oscuro';
    }

}