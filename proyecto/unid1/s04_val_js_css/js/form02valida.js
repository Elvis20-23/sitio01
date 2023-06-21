const fnValidar02 = () => {
    let xPreferencia = document.getElementById("lstPreferencias").ariaValueMax;
    if(xPreferencia=="" || /^\s+$/.test(xPreferencia)){
        alert("Falta seleccionar PREFERENCIA...");
        return false;
    }
	
    let xMes= document.getElementById("lstMes").ariaValueMax;
    if(xMex=""){
        alert("Falta seleccionar Mes  actual...");
        return false;
    }

    /// Caso contrario ///
    return false;
}