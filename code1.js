function Guardar(){
    var input = document.getElementById("eMail").value;
    localStorage.setItem("Correo",input);
    //document.getElementById("btn btn-primary").innerHTML=localStorage.getItem("texto")
}
document.getElementById("botonGuardar").addEventListener("click", Guardar)