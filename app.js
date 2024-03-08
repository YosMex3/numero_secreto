let numeroSecreto = 0;
let intento = 0;
let listaNumerosSecretos=[];
let numeroMaximo=parseInt(prompt("Dame el numero maximo que quieres sortear"));
console.log(numeroSecreto);

/*
let tresnumeros = promedio();
console.log(tresnumeros);
function saludar()
{
    //console.log("holaMundo");
    let nombre = prompt("Dame un nombres");
    console.log(`hola ${nombre}`)
}
saludar();

function recibeNumero()
{
    let numero = parseInt(prompt("dame un numero"));
    numero=numero*2;
    console.log(numero);
}
recibeNumero();


function promedio()
{
    let num1= parseInt(prompt("dame primer número"));
    let num2= parseInt(prompt("dame segundo número"));
    let num3= parseInt(prompt("dame tercer número"));
    let operacion= (num1+num2+num3)/3;
    console.log(operacion);
    console.log(typeof(operacion))
}
promedio();

function numeroMayor()
{
    let num1= parseInt(prompt("dame primer número"));
    let num2= parseInt(prompt("dame segundo número"));
    if (num1>num2)
    {
        console.log(`El numero mayor es el ${num1}`);
    }
    else
    {
        console.log(`El número mayor el el ${num2}`);
    }
}
numeroMayor();
*/

function InsertarTexto(elemento, texto) 
{
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function intentoDelUsuario() 
{
  /*
  alert (`clic desde el boton`);
  return;
  */
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  /*
   console.log(typeof(numeroSecreto));
   console.log(numeroUsuario);
   console.log(typeof(numeroUsuario));
   */
  if (numeroUsuario === numeroSecreto) 
  {
    InsertarTexto("h1", `Encontrado, Numero secreto es: ${numeroSecreto}`);
    InsertarTexto("p", `Felicidades este es el numero secreto lo encontraste en ${intento} ${(intento==1) ? "intento" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  
  } 
  else 
  {
    if (numeroUsuario > numeroSecreto) 
    {
      InsertarTexto("p", "El numero secreto es menor");
    } 
    else 
    {
      InsertarTexto("p", "El numero secreto es mayor");
    }
  }
  intento++;
  console.log(intento);
  limpiarInput();
}

function limpiarInput()
{
  /*
  let limpiar = document.querySelector('#valorUsuario');
  limpiar.value = '';
  */
  document.querySelector('#valorUsuario').value='';

}
function generarNumeroSecreto(arams) 
{
  let numeroGenerado=Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSecretos);

  if (listaNumerosSecretos.length==numeroMaximo)
  {
    InsertarTexto("h1", "Ya se sortearon todos los numeros");    
  }
  else
  {
    if (listaNumerosSecretos.includes(numeroGenerado))
    {
      return generarNumeroSecreto();    
    }
    else
    {
      listaNumerosSecretos.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function valoresIniciales()
{
  InsertarTexto("h1", "Juego del número secreto");
  InsertarTexto("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intento = 1;
}

function reiniciarJuego()
{
  //limpiar caja
  limpiarInput();
  //Mensaje de intervalo de numeros
  //Generar el numero secreto
  //reiniciar intentos
  valoresIniciales();
  //desabilitar nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');

}

/*
InsertarTexto("h1", "Juego del número secreto");
InsertarTexto("p", "Indica un número del 1 al 10");
*/

valoresIniciales();