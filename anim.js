
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyricsData = [
  { text: "¿Cual es el recuerdo más bonito de nosotros?", time: 15, className: "line1" },
  { text: "Tus gestos y las cosas cotidianas que hacemos", time: 20, },
  { text: "siempre me recuerdo de ellos,", time: 24, },
  { text: "como cocinar juntos, dejarte notas cuando nos despedimos,", time: 27, },
  { text: "o simplemente disfrutar de una tarde de películas o dormir jeje!", time: 34, },
  { text: "¿Por que piensas que me enamore de ti?", time: 39, className: "line2" },
  { text: "Por como soy, y sabes por que soy así…", time: 42, },
  { text: "por que contigo soy una mejor persona…", time: 48, },
  { text: "¿Que volverías a repetir conmigo?", time: 55, className: "line3" },
  { text: "Volvería a repetir todas esas noches en las que nos quedamos viendo películas abrazados,", time: 63, },
  { text: "porque aunque sean momentos sencillos, son los que más disfruto con mi bebita", time: 69,  },    
  { text: "¿Cual es tu mayor miedo de nuestro futuro?", time: 72, className: "line4" },
  { text: "Me preocupa que se nos presente momentos difíciles y no sepamos cómo manejarlos juntos.", time: 79,  },
  { text: "Pero al mismo tiempo, confío en que si seguimos comunicándonos bien, podremos superar cualquier cosa", time: 87, },
  { text: "Tres palabras que nos describen mejor", time: 93, className: "line5" },
  { text: "Complicidad, Risas y Confianza", time: 97,  },
  { text: "¿Hay algo que pueda hacer para que te sientas mas querido?", time: 108, className: "line6" },
  { text: "Para mí, el tiempo que pasamos juntos significa mucho,", time: 118,  },
  { text: "así que quizás planear más momentos donde solo estemos los dos,", time: 122, },
  { text: "sin distracciones, ni nada…donde solo existamos los dos…", time: 129,  },
  { text: "¿Si tuvieras que elegir una parte de mi cuerpo cual seria?", time: 135, className: "line7" },
  { text: "Aunque suene raro…me gustan los piesitos de la bebe…", time: 142, },
  { text: "me gusta besarlos, abrigarlos…mimarlos", time: 150,  },
  { text: "¿Que es lo que mas te gusta de mi?", time: 158, className: "line8" },
  { text: "Me encanta cómo siempre estás ahí para mí, apoyándome y escuchándome.", time: 163,  },
  { text: "¿Que crees que tenemos en común?", time: 170, className: "line9" },
  { text: "La complicidad y el humor, nos entendemos con solo mirarnos y siempre nos reímos de las mismas cosas", time: 175,  },
  { text: "¿En que parte del mundo te gustaría repetir nuestra cita?", time: 182, className: "line10" },
  { text: "Me gustaría repetirla en algún lugar tranquilo, como una cabaña en las montañas", time: 188,  },
  { text: "o en una playa desierta. Solo tú y yo, alejados del mundo", time: 192,  },
  { text: "TE AMO BEBITA Y TE AMARE SIEMPRE... ", time: 200,},
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