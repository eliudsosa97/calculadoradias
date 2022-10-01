const daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

function calcularFecha() {
    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    const date = new Date(yearInput, monthInput - 1, dayInput);
    const dayIndex = date.getDay();

    const dayL = daysWeek[dayIndex];
    console.log(dayL);
    let mensaje = "";
    
    
    switch (dayIndex) {
        case 0: case 6:
            mensaje = "Día no laboral";
            break;
        default:
            mensaje = "Día laboral";
            break;
    }
    const resultElement = document.getElementById("result");
    resultElement.value = `${dayL}, ${mensaje}`;
    
}