// Cambia el MODO CLARO a MODO OSCURO

const $ = (selector) => document.querySelector(selector);

$(".boton-de-modo-claro").addEventListener("click", () => {
  $("header").style.backgroundColor = "#af7ead";
  $("main").style.backgroundColor = "#f5dff5";
  $(".editor-de-imagen").style.backgroundColor = "#b988b8";
  $(".editor-de-texto").style.backgroundColor = "#b988b8";
  document.querySelectorAll("h3").forEach((h3) => {
    h3.style.color = "#1b003a";
  });
  document
    .querySelectorAll(
      ".brillo-deslizador, .opacidad-deslizador, .constraste-deslizador, .desenfoque-deslizador, .escala-de-grises-deslizador, .sepia-deslizador, .hue-deslizador, .saturado-deslizador, .negativo-deslizador"
    )
    .forEach((elemento) => {
      elemento.style.color = "#1b003a";
    });
  document
    .querySelectorAll(
      "#ocultar-texto-sup, #ocultar-texto-inf, #fondo-transparente"
    )
    .forEach((elemento) => {
      elemento.style.color = "#1b003a";
    });
  document.querySelectorAll(".headerBtn").forEach((btn) => {
    btn.style.color = "#1b003a";
    btn.classList.remove("modo-oscuro");
  });
  $(".cerrar-menu").style.color = "#1b003a";
  $(".cerrar-menu-txt").style.color = "#1b003a";
  $(".contenedor-de-meme").style.boxShadow = "0 0 15px #1b003a";
  $(".boton-de-modo-oscuro").style.display = "block";
  $(".boton-de-modo-claro").style.display = "none";
});

$(".boton-de-modo-oscuro").addEventListener("click", () => {
  $("header").style.backgroundColor = "#1b003a";
  $("main").style.backgroundColor = "#3d0b60";
  $(".editor-de-imagen").style.backgroundColor = "#230443";
  $(".editor-de-texto").style.backgroundColor = "#230443";
  document.querySelectorAll("h3").forEach((h3) => {
    h3.style.color = "#dac9df";
  });
  document
    .querySelectorAll(
      ".brillo-deslizador, .opacidad-deslizador, .constraste-deslizador, .desenfoque-deslizador, .escala-de-grises-deslizador, .sepia-deslizador, .hue-deslizador, .saturado-deslizador, .negativo-deslizador"
    )
    .forEach((elemento) => {
      elemento.style.color = "#dac9df";
    });
  document
    .querySelectorAll(
      "#ocultar-texto-sup, #ocultar-texto-inf, #fondo-transparente"
    )
    .forEach((elemento) => {
      elemento.style.color = "#dac9df";
    });
  document.querySelectorAll(".headerBtn").forEach((btn) => {
    btn.style.color = "#dac9df";
    btn.classList.add("modo-oscuro");
  });
  $(".cerrar-menu").style.color = "#dac9df";
  $(".cerrar-menu-txt").style.color = "#dac9df";
  $(".contenedor-de-meme").style.boxShadow = "0 0 15px #f5dff5";
  $(".boton-de-modo-oscuro").style.display = "none";
  $(".boton-de-modo-claro").style.display = "block";
});

// Cambia de panel

$(".botonImg").addEventListener("click", () => {
  $(".editor-de-imagen").style.display = "block";
  $(".editor-de-texto").style.display = "none";
});

$(".botonFuente").addEventListener("click", () => {
  $(".editor-de-imagen").style.display = "none";
  $(".editor-de-texto").style.display = "block";
});

// FUNCIONES PARA PANEL IMAGEN
// Agrega la imagen via URL o Archivo

$(".url-de-imagen").addEventListener("input", () => {
  const urlImagen = $(".url-de-imagen").value;
  actualizarImagen(urlImagen);
});

$("#agrega-archivo").addEventListener("change", () => {
  const archivo = $("#agrega-archivo").files[0];
  if (archivo) {
    const urlImagen = URL.createObjectURL(archivo);
    actualizarImagen(urlImagen);
  }
});

function actualizarImagen(urlImagen) {
  $(".imagen-meme").src = urlImagen;
}

// Descarga la imagen

$(".boton-de-descarga").addEventListener("click", () => {
  domtoimage.toBlob($(".contenedor-de-meme")).then((blob) => {
    window.saveAs(blob, "mi-meme.png");
  });
});

// Color para el fondo de la Imagen

$("#color-input").addEventListener("input", () => {
  $(".contenedor-de-meme").style.backgroundColor = $("#color-input").value;
  const nuevoColor = $("#color-input").value;
  $("#color-de-fondo").style.color = nuevoColor;
  $("#color-de-fondo").textContent = nuevoColor;
  $("#color-de-fondo").style.setProperty("--circle-color", nuevoColor);
});

// Mezcla de colores

$("#mezcla-de-colores").addEventListener("change", () => {
  const mezcla = $("#mezcla-de-colores").value;

  switch (mezcla) {
    case "NINGUNO":
      $(".imagen-meme").style.filter = "none";
      break;
    case "BRILLO":
      $(".imagen-meme").style.filter = "brightness(1.8)";
      break;
    case "DESENFOQUE":
      $(".imagen-meme").style.filter = "blur(5px)";
      break;
    case "ACLARAR":
      $(".imagen-meme").style.filter = "brightness(1.3)";
      break;
    case "OSCURECER":
      $(".imagen-meme").style.filter = "brightness(0.2)";
      break;
    case "CONTRASTE":
      $(".imagen-meme").style.filter = "contrast(1.8)";
      break;
    case "ESCALA-DE-GRISES":
      $(".imagen-meme").style.filter = "grayscale(2)";
      break;
    case "MULTIPLICAR":
      $(".imagen-meme").style.filter = "multiply(2)";
      break;
  }
});

// Deslizadores

function filtrosDeslizadores() {
  const brillo = $("#deslizador-de-brillo").value;
  const opacidad = $("#deslizador-de-opacidad").value;
  const contraste = $("#deslizador-de-contraste").value;
  const desenfoque = $("#deslizador-de-desenfoque").value;
  const escalas = $("#deslizador-de-escalas").value;
  const sepia = $("#deslizador-de-sepia").value;
  const hue = $("#deslizador-de-hue").value;
  const saturado = $("#deslizador-de-saturado").value;
  const negativo = $("#deslizador-de-negativo").value;

  const filtros = `brightness(${brillo}) opacity(${opacidad}) contrast(${contraste}%) blur(${desenfoque}px) grayscale(${escalas}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturado}%) invert(${negativo})`;
  $(".imagen-meme").style.filter = filtros;
}

document.querySelectorAll(".filtro-deslizador").forEach((deslizador) => {
  deslizador.addEventListener("input", filtrosDeslizadores);
});

filtrosDeslizadores();

// Restablece los filtros

$(".boton-restablecedor").addEventListener("click", restablecerFiltros);

function restablecerFiltros() {
  $("#deslizador-de-brillo").value = 1;
  $("#deslizador-de-opacidad").value = 1;
  $("#deslizador-de-contraste").value = 100;
  $("#deslizador-de-desenfoque").value = 0;
  $("#deslizador-de-escalas").value = 0;
  $("#deslizador-de-sepia").value = 0;
  $("#deslizador-de-hue").value = 0;
  $("#deslizador-de-saturado").value = 100;
  $("#deslizador-de-negativo").value = 0;

  filtrosDeslizadores();
}

// FUNCIONES PARA PANEL TEXTO
// Texto SUPERIOR

$(".area-superior").addEventListener("input", () => {
  $(".texto-superior").textContent = $(".area-superior").value;
});

// Oculta el texto SUPERIOR

$("#ocultaTxtSup").addEventListener("change", () => {
  if ($("#ocultaTxtSup").checked) {
    $(".texto-superior").style.display = "none";
  } else {
    $(".texto-superior").style.display = "block";
  }
});

// Texto INFERIOR

$(".area-inferior").addEventListener("input", () => {
  $(".texto-inferior").textContent = $(".area-inferior").value;
});

// Oculta el texto INFERIOR

$("#ocultaTxtInf").addEventListener("change", () => {
  if ($("#ocultaTxtInf").checked) {
    $(".texto-inferior").style.display = "none";
  } else {
    $(".texto-inferior").style.display = "block";
  }
});

// Cambia las FUENTES de letras

const cambiarFuente = (e) => {
  const fuenteSeleccionada = e.target.value;
  $(".texto-superior").style.fontFamily = fuenteSeleccionada;
  $(".texto-inferior").style.fontFamily = fuenteSeleccionada;
};

$("#fuente-de-familia").addEventListener("change", cambiarFuente);

// Cambia el TAMAÑO de fuentes

const cambiaTamaño = () => {
  const tamañoSeleccionado = $("#tamaño-de-fuente").value;
  $(".texto-superior").style.fontSize = tamañoSeleccionado + "px";
  $(".texto-inferior").style.fontSize = tamañoSeleccionado + "px";
};

$("#tamaño-de-fuente").addEventListener("change", cambiaTamaño);

// ALINEACIÓN de fuentes

const izquierda = () => {
  $(".texto-superior").style.textAlign = "left";
  $(".texto-inferior").style.textAlign = "left";
};

const centrado = () => {
  $(".texto-superior").style.textAlign = "center";
  $(".texto-inferior").style.textAlign = "center";
};

const derecha = () => {
  $(".texto-superior").style.textAlign = "right";
  $(".texto-inferior").style.textAlign = "right";
};

$("#btn-izquierda").addEventListener("click", izquierda);
$("#btn-centrado").addEventListener("click", centrado);
$("#btn-derecha").addEventListener("click", derecha);

// COLOR de fuentes

$("#color-fuente").addEventListener("input", () => {
  const colorFuente = $("#color-fuente").value;
  $("#color-texto").style.color = colorFuente;
  $("#color-texto").textContent = colorFuente;
  $("#color-texto").style.setProperty("--circle-color", colorFuente);
  $(".texto-superior").style.color = colorFuente;
  $(".texto-inferior").style.color = colorFuente;
});

// Color de FONDO de la fuente

$("#fondo-fuente").addEventListener("input", () => {
  const colorFondo = $("#fondo-fuente").value;
  $("#color-fondo-texto").style.color = colorFondo;
  $("#color-fondo-texto").textContent = colorFondo;
  $("#color-fondo-texto").style.setProperty("--circle-color", colorFondo);
  $(".texto-superior").style.backgroundColor = colorFondo;
  $(".texto-inferior").style.backgroundColor = colorFondo;
});

// Fondo TRANSPARENTE

$("#checkbox-transparente").addEventListener("change", () => {
  if ($("#checkbox-transparente").checked) {
    $(".texto-superior").style.backgroundColor = "transparent";
    $(".texto-inferior").style.backgroundColor = "transparent";
  } else {
    const selectedColor = $("#fondo-fuente").value;
    $(".texto-superior").style.backgroundColor = selectedColor;
    $(".texto-inferior").style.backgroundColor = selectedColor;
  }
});

// CONTORNO

$("#btn-ningun-contorno").addEventListener("click", () => {
  $(".texto-superior").style.textShadow = "none";
  $(".texto-inferior").style.textShadow = "none";
});

$("#btn-claro-contorno").addEventListener("click", () => {
  $(".texto-superior").style.textShadow = "2px 2px 2px #FFFFFF";
  $(".texto-inferior").style.textShadow = "2px 2px 2px #FFFFFF";
});

$("#btn-oscuro-contorno").addEventListener("click", () => {
  $(".texto-superior").style.textShadow = "2px 2px 2px #000000";
  $(".texto-inferior").style.textShadow = "2px 2px 2px #000000";
});

// ESPACIADO

$("#espaciado").addEventListener("input", () => {
  const espaciado = $("#espaciado").value + "px";
  $(".texto-superior").style.letterSpacing = espaciado;
  $(".texto-inferior").style.letterSpacing = espaciado;
});

$("#select-interlineado").addEventListener("change", () => {
  const interlineado = $("#select-interlineado").value + "px";
  $(".texto-superior").style.lineHeight = interlineado;
  $(".texto-inferior").style.lineHeight = interlineado;
});

// Abrir y cerrar paneles en diseño responsive
// Panel de IMAGEN

$(".botonImg").addEventListener("click", () => {
  $(".editor-de-imagen").style.display = "block";
});

$(".cerrar-menu").addEventListener("click", () => {
  $(".editor-de-imagen").style.display = "none";
});

// Panel de TEXTO

$(".botonFuente").addEventListener("click", () => {
  $(".editor-de-texto").style.display = "block";
});

$(".cerrar-menu-txt").addEventListener("click", () => {
  $(".editor-de-texto").style.display = "none";
});
