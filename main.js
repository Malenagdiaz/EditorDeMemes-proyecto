// Cambiando de MODO CLARO a MODO OSCURO

let volverModoOscuro = false;

const botonDeModoOscuro = document.querySelector(".boton-de-modo-oscuro");
const botonDeModoClaro = document.querySelector(".boton-de-modo-claro");
const body = document.body;
const header = document.querySelector("header");
const asideEditorImagen = document.querySelector(".editor-de-imagen");
const asideEditorTexto = document.querySelector(".editor-de-texto");
const main = document.querySelector("main");
const contenedorMeme = document.querySelector(".contenedor-de-meme");
const botonesDelHeader = document.querySelectorAll("header button");
const titulosH3 = document.querySelectorAll("h3");
const deslizadoresLabel = document.querySelectorAll(
  ".brillo-deslizador, .opacidad-deslizador, .constraste-deslizador, .desenfoque-deslizador, .escala-de-grises-deslizador, .sepia-deslizador, .hue-deslizador, .saturado-deslizador, .negativo-deslizador"
);
const labelChecks = document.querySelectorAll(
  "#ocultar-texto-sup, #ocultar-texto-inf, #fondo-transparente"
);

function cambioDeEstilo() {
  botonesDelHeader.forEach((button) => {
    if (volverModoOscuro) {
      button.style.color = "#dac9df";
      button.style.backgroundColor = "transparent";
    } else {
      button.style.color = "#1b003a";
      button.style.backgroundColor = "transparent";
    }
  });

  asideEditorImagen.style.backgroundColor = volverModoOscuro
    ? "#230443"
    : "#b988b8";

  asideEditorTexto.style.backgroundColor = volverModoOscuro
    ? "#230443"
    : "#b988b8";

  titulosH3.forEach((h3) => {
    h3.style.color = volverModoOscuro ? "#dac9df" : "#dac9df";
  });

  contenedorMeme.style.boxShadow = volverModoOscuro
    ? "0 0 15px #f5dff5"
    : "0 0 15px #1b003a";

  deslizadoresLabel.forEach((label) => {
    label.style.color = volverModoOscuro ? "#dac9df" : "#dac9df";
  });

  labelChecks.forEach((label) => {
    label.style.color = volverModoOscuro ? "#dac9df" : "#dac9df";
  });

  body.classList.toggle("modo-oscuro", volverModoOscuro);
  body.classList.toggle("modo-claro", !volverModoOscuro);
}

botonDeModoOscuro.addEventListener("click", function () {
  if (!volverModoOscuro) {
    volverModoOscuro = true;
    cambioDeEstilo();

    header.style.backgroundColor = "#1b003a";
    asideEditorImagen.style.backgroundColor = "#230443";
    asideEditorTexto.style.backgroundColor = "#230443";
    main.style.backgroundColor = "#3d0b60";
    contenedorMeme.style.boxShadow = "0 0 15px #f5dff5";
    botonDeModoOscuro.style.display = "none";
    botonDeModoClaro.style.display = "block";
  }
});

botonDeModoClaro.addEventListener("click", function () {
  if (volverModoOscuro) {
    volverModoOscuro = false;
    cambioDeEstilo();

    header.style.backgroundColor = "#af7ead";
    asideEditorImagen.style.backgroundColor = "#b988b8";
    asideEditorTexto.style.backgroundColor = "#b988b8";
    main.style.backgroundColor = "#f5dff5";
    contenedorMeme.style.boxShadow = "0 0 15px #1b003a";
    botonDeModoOscuro.style.display = "block";
    botonDeModoClaro.style.display = "none";
  }
});

// Abrir y cerrar EditorDeImagen y EditorDeTexto

document.querySelector(".boton-de-imagen").addEventListener("click", () => {
  document.querySelector(".editor-de-imagen").style.display = "block";
  document.querySelector(".editor-de-texto").style.display = "none";
});

document.querySelector(".boton-de-fuente").addEventListener("click", () => {
  document.querySelector(".editor-de-texto").style.display = "block";
  document.querySelector(".editor-de-imagen").style.display = "none";
});

// Agregar imagen por ARCHIVO o URL

const imagenUrl = document.getElementById("url-de-imagen");
const entradaArchivo = document.getElementById("agrega-archivo");
const imagenMemeElemento = document.querySelector(".imagen-meme");

imagenUrl.addEventListener("input", function () {
  const urlImagen = imagenUrl.value;
  actualizarImagenMeme(urlImagen);
});

entradaArchivo.addEventListener("change", function () {
  const archivo = entradaArchivo.files[0];
  if (archivo) {
    const urlImagen = URL.createObjectURL(archivo);
    actualizarImagenMeme(urlImagen);
  }
});

function actualizarImagenMeme(urlImagen) {
  const contenedorMemeElemento = document.querySelector(".contenedor-de-meme");
  const imagenMeme = document.querySelector(".imagen-meme");

  imagenMeme.src = urlImagen;
}

// Boton de descarga

const botonDescarga = document.querySelector(".boton-de-descarga");
const memeContenedor = document.querySelector(".contenedor-de-meme");

botonDescarga.addEventListener("click", () => {
  domtoimage.toBlob(memeContenedor).then((blob) => {
    window.saveAs(blob, "mi-meme.png");
  });
});

// Color para el fondo IMG

const colordeInput = document.getElementById("color-input");
const fondo = document.querySelector(".contenedor-de-meme");

colordeInput.addEventListener("input", () => {
  console.log(colordeInput.value);
  fondo.style.backgroundColor = colordeInput.value;
});

let inputColor = document.getElementById("color-input");
let colorSpan = document.getElementById("color-de-fondo");

inputColor.addEventListener("input", function () {
  let nuevoColor = inputColor.value;

  colorSpan.style.color = nuevoColor;

  colorSpan.textContent = nuevoColor;

  colorSpan.style.setProperty("--circle-color", nuevoColor);
});

// Deslizadores

let brillo = 1;
let opacidad = 1;
let contraste = 100;
let desenfoque = 0;
let escalas = 0;
let sepia = 0;
let hue = 0;
let saturado = 100;
let negativo = 0.1;

function mezclaDeColores() {
  brillo = document.getElementById("deslizador-de-brillo").value;
  opacidad = document.getElementById("deslizador-de-opacidad").value;
  contraste = document.getElementById("deslizador-de-contraste").value;
  desenfoque = document.getElementById("deslizador-de-desenfoque").value;
  escalas = document.getElementById("deslizador-de-escalas").value;
  sepia = document.getElementById("deslizador-de-sepia").value;
  hue = document.getElementById("deslizador-de-hue").value;
  saturado = document.getElementById("deslizador-de-saturado").value;
  negativo = document.getElementById("deslizador-de-negativo").value;

  let filtros = `brightness(${brillo}) opacity(${opacidad}) contrast(${contraste}%) blur(${desenfoque}px) grayscale(${escalas}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturado}%) invert(${negativo})`;

  document.querySelector(".imagen-meme").style.filter = filtros;
};

let deslizadores = document.querySelectorAll(".filtro-deslizador");
deslizadores.forEach(function (deslizador) {
  deslizador.addEventListener("input", mezclaDeColores);
});

mezclaDeColores();

// Boton para restablecer los filtros

document.querySelector(".boton-restablecedor").addEventListener("click", restablecerFiltros);

function restablecerFiltros() {

    document.getElementById("deslizador-de-brillo").value = 1;
    document.getElementById("deslizador-de-opacidad").value = 1;
    document.getElementById("deslizador-de-contraste").value = 100;
    document.getElementById("deslizador-de-desenfoque").value = 0;
    document.getElementById("deslizador-de-escalas").value = 0;
    document.getElementById("deslizador-de-sepia").value = 0;
    document.getElementById("deslizador-de-hue").value = 0;
    document.getElementById("deslizador-de-saturado").value = 100;
    document.getElementById("deslizador-de-negativo").value = 0.1;
  
  mezclaDeColores();
}