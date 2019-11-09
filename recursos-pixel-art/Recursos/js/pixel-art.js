
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var paleta = document.querySelector("#paleta");
var grilllaPixeles = document.querySelector("#grilla-pixeles");

var mousevariation = 1;

function mouseToggle(e){
  if(e.type == "mousedown"){
    mousevariation = 1;
  } else if (e.type == "mouseup"){
    mousevariation = 0;
  }
  console.log(mousevariation);
}

window.addEventListener("mousedown", mouseToggle);
window.addEventListener("mouseup", mouseToggle);

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    document.getElementById('indicador-de-color').style.backgroundColor = colorActual;
  })
);

$(document).ready(function (){
    for(let i=0; i < nombreColores.length; i++){
      let div = document.createElement("div");  
      div.style.backgroundColor = nombreColores[i];
      div.className = "color-paleta";
      paleta.appendChild(div);
    }
});

$(document).ready(function(){ 
  for(let i=0; i < 1750; i++){
    let div = document.createElement("div");  
    grilllaPixeles.appendChild(div);
  }
});

paleta.addEventListener('click', cambiarIndicadorDeColor);

function cambiarIndicadorDeColor(e){
  document.getElementById('indicador-de-color').style.backgroundColor = e.target.style.backgroundColor;
}

// en estos bloques de codigo estan las funcionalidades para pintar el canvas

grilllaPixeles.addEventListener('click', pintarGrilla);

function pintarGrilla(e){
 e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
}

grilllaPixeles.addEventListener('mouseover', pintarEnMovimiento);

function pintarEnMovimiento(e){
  if(mousevariation){
    e.target.style.backgroundColor = document.getElementById('indicador-de-color').style.backgroundColor;
  }
}

// En estos bloques de codigo siguiente, guardo la funcionalidad de los botones "borrar todo" y "guardar"

var borrar = document.querySelector("#borrar");

borrar.addEventListener("click",borrarTodo);

function borrarTodo(){
  $("div div").animate({"backgroundColor": "#FFFFFF"},2000)
}

let guardar = document.getElementById('guardar');
guardar.addEventListener("click", guardarPixelArt);


//cargar heroes

function seleccionSuperheroe(e) {
	cargarSuperheroe(window[e.target.id]);
}

let misSuperheroes = document.getElementsByTagName('img');
for (let i=0; i < misSuperheroes.length; i++) {
	misSuperheroes[i].addEventListener("click", seleccionSuperheroe);
}