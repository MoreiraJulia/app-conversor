function ConversorMetrosCentimetros(){
    let metros = document.querySelector("#metros").value
    let centimetros = metros * 100
    console.log(centimetros)
    document.querySelector("#centimetros").value = `${centimetros} cm`
}


// NOVA FORMA DE ESCREVER DE FORMA DIRETA E RÁPIDA NO CÓDIGO
// '${centimetros} cm'
// centimetros + 'cm'