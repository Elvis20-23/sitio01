function fnValidar02()
{
    let xNombre = document.getElementById("txtNombres").value;
    if (xNombre=="" || /^\s+$/.test(xNombre)) {
        alert("Escriba su nombre");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido=="" || /^\s+$/.test(xNombre)) {
        alert("Escriba su apellido");
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if (xDireccion=="" || /^\s+$/.test(xNombre)) {
        alert("Escriba su dirección");
        return false;
    }

    let xEdad = document.getElementById("txtEdad").value;
    if (xEdad=="") {
        alert("Escriba su edad");
        return false;
    }

    return true;
    
}