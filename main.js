const usuariosFortinut = []
function cargoBasedeDatos (nombreUsuario,edadUsuario,apoya,mascota){
    const usuario = {
     nombreUsuario:nombre,
     edadUsuario:edad,
     apoya:apoya,
     mascota:mascota
 }
    usuariosFortinut.push(usuario)
}
function muestroBaseDeDatos (nombreUsuario,edadUsuario,apoya,mascota){
    for(const usuario of usuariosFortinut)
        {
            alert("Nombre:"+ usuario.nombre+"Edad:"+usuario.edad+"Apoya el emprendimieto?"+usuario.apoya+"Mascota:"+usuario.mascota)
        }
}

function apoyaEmprendimiento(apoya){
if(apoya){
    apoya= "Si"
    do{
        edadUsuario = prompt("Indique su edad: ")
        if(edadUsuario<18)
            alert("USTED DEBE TENER AL MENOS 18 AÑOS PARA DONAR")
        }while (edadUsuario<18)
        nombreUsuario = prompt("Indique su nombre y apellido: ")
        prompt("Indique en pesos, cuánto quiere donar:")
        alert ("Muchas gracias "+ nombreUsuario+ " , atentamente, Fortinut")
}
else{
    apoya="No" 
    nombreUsuario = prompt("Ingrese su nombre y apellido: ")
    edadUsuario = prompt("Indique su edad: ")
    alert ("Muchas gracias de todas modos, atentamente Fortinut")
    
}
}

function encargaUsuario (usuarioEncarga){
    edadUsuario = prompt("Indique su edad: ")
    do{
        if(edadUsuario<18)
            alert("USTED DEBE TENER AL MENOS 18 AÑOS PARA ENCARGAR")
        }while (edadUsuario<18)
        nombreUsuario = prompt("Indique su nombre y apellido")
if(usuarioEncarga)
    alert ("Muchas gracias "+ nombreUsuario+ " ,su pedido ha sido encargado, atentamente, Fortinut")
else
    alert("Muchas gracias de todos modos "+ nombreUsuario+ " , atentamente Fortinut")
}

function siTieneMascota (tieneMascota){
       confirm("¿Desea comprar alimento?") 
        mascota = prompt("Indique para que animal sera su pedido(gato/perro)")
        if(mascota=="Perro"||mascota=="perro"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de perro esta valuado en 20.000 pesos, confirme para encargar")
            encargaUsuario(usuarioEncarga)}
        else if(mascota=="Gato"||mascota=="gato"){
            let usuarioEncarga = confirm("Actualmente el paquete de 2kg de gato esta valuado en 22.000 pesos, confirme para encargar")
        encargaUsuario(usuarioEncarga)
        }
      
    }

function noTieneMascota (tieneMascota){
      apoya=confirm("¿Quiere apoyar de todas maneras al emprendimiento?")
      apoyaEmprendimiento(apoya)
}

function main(){
    let nombreUsuario
inicio = confirm("Bienvenido a Fortinut, acepte para continuar")
while(inicio){
let tieneMascota = confirm("Contanos ¿tenes mascota?")
if(tieneMascota)
    siTieneMascota (tieneMascota)
else
    noTieneMascota (tieneMascota) 

    cargoBasedeDatos(nombreUsuario,edadUsuario,apoya,mascota)
  muestroBaseDeDatos(nombreUsuario,edadUsuario,apoya,mascota)
  console.log (muestroBaseDeDatos(nombreUsuario,edadUsuario,apoya,mascota))
}
alert("Hasta pronto, atentamente Fortinut")
}
main()
    
 