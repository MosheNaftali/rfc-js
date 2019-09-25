var pnombre = document.getElementById('nombre');
var papellidoPaterno = document.getElementById('apellidoPaterno');
var papellidoMaterno = document.getElementById('apellidoMaterno');
var pdiaNacimiento = document.getElementById('diaNacimiento');
var pmesNacimiento = document.getElementById('mesNacimiento');
var panoNacimiento = document.getElementById('anoNacimiento');
var button = document.getElementById('button');
var texto = document.getElementById('texto');
class persona{
    constructor(nombre, apellidoPaterno, apellidoMaterno, diaNacimiento, mesNacimiento, anoNacimiento){
        this.nombre = nombre,
        this.apellidoPaterno = apellidoPaterno,
        this.apellidoMaterno = apellidoMaterno,
        this.diaNacimiento = diaNacimiento,
        this.mesNacimiento = mesNacimiento,
        this.anoNacimiento = anoNacimiento;
    }
    calculoRfc(){
        let mnombre = (nombre.value).toUpperCase();
        let mapellidoPaterno = (apellidoPaterno.value).toUpperCase();
        let mapellidoMaterno = (apellidoMaterno.value).toUpperCase();
        var letra1 = mapellidoPaterno.charAt(0);
        for(var i=1; i<mapellidoPaterno.length;i++){
            if((mapellidoPaterno.charAt(i)=='A')||(mapellidoPaterno.charAt(i)=='E')||(mapellidoPaterno.charAt(i)=='I')||(mapellidoPaterno.charAt(i)=='O')||(mapellidoPaterno.charAt(i)=='U')){
                var letra2 = mapellidoPaterno.charAt(i);
                i=mapellidoPaterno.length;
            }
        }
        texto.innerHTML = (`Su RFC sin homoclave es: ${letra1}${letra2}${mapellidoMaterno.charAt(0)}${mnombre.charAt(0)}${anoNacimiento.value.slice(2,4)}${mesNacimiento.value}${diaNacimiento.value}`);
    }
}
var datos = new persona(pnombre,papellidoPaterno,papellidoMaterno,pdiaNacimiento,pmesNacimiento,panoNacimiento)
button.addEventListener('click', datos.calculoRfc);