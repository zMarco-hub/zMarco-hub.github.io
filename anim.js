
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "¿sabes que pienso de ti?", time: 15, className: "line1" },
  { text: "que eres muy bonita", time: 20, },
  { text: "eres una persona muy especial,", time: 24, },
 { text: "¿algun dia nos veremos?", time: 39, className: "line2" },
  { text: "espero que si…", time: 42, },
  { text: "¿me darias un tour?", time: 55, className: "line3" },
  { text: "me gustaria que lo hicieras,", time: 63, }, 
  { text: "¿lo harias?", time: 72, className: "line4" },
  { text: "confío en que si lo haras", time: 87, },
  { text: "si no lo haces", time: 93, className: "line5" },
  { text: "entonces pasaria algo malo", time: 97,  },
  { text: "¿sabes que pasaria?", time: 108, className: "line6" },
  { text: "me perderia", time: 118,  },
  { text: "al perderme no podria volver a casa", time: 122, },
  { text: "vagaria sin rumbo", time: 129,  },
  { text: "¿no quieres que pase eso verdad?", time: 135, className: "line7" },
  { text: "yo no quisiera perderme y morir de hambre", time: 142, },
  { text: "entonces", time: 150,  },
  { text: "¿que dices?", time: 158, className: "line8" },
  { text: "¿Que crees que tenemos en común?", time: 170, className: "line9" },
  { text: "que la U nos esta matando", time: 175,  },
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = `<span class="${currentLine.className}">${currentLine.text}</span>`;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
