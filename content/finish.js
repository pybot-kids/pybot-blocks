// Final stop — a calm review of every zone, then the diploma. Not an exam.

lessonData.finish = {
  goal: L("Vas a mirar todo lo que aprendiste y recibir tu diploma.", "You will look back at everything you learned and get your diploma."),
  look: L([
    "¡Llegaste al final del camino! Recorriste nueve zonas: abriste Scratch, moviste objetos, usaste eventos, bucles, condicionales, variables, sonido, historias y juegos.",
    "Este repaso no es un examen. Responde con calma; si algo no sale, vuelve a la página de esa zona, que sigue ahí para ti.",
    "Al terminar las actividades, esta parada queda completa. En tu álbum verás el sticker de cada zona terminada y su diploma.",
  ], [
    "You reached the end of the path! You went through nine zones: you opened Scratch, moved sprites, used events, loops, conditionals, variables, sound, stories and games.",
    "This review is not an exam. Answer calmly; if something doesn't work, go back to that zone's page, which is still there for you.",
    "When you finish the activities, this stop is complete. In your album you'll see the sticker of each finished zone and its diploma.",
  ]),
  terms: L([
    ["Eventos", "Dicen cuándo empieza un programa."],
    ["Bucles", "Repiten bloques."],
    ["Condicionales", "Deciden qué hacer."],
    ["Variables", "Recuerdan valores."],
    ["Mensajes", "Coordinan objetos."],
    ["Clones", "Copian objetos mientras el programa corre."],
  ], [
    ["Events", "Say when a program starts."],
    ["Loops", "Repeat blocks."],
    ["Conditionals", "Decide what to do."],
    ["Variables", "Remember values."],
    ["Messages", "Coordinate sprites."],
    ["Clones", "Copy sprites while the program runs."],
  ]),
  activities: [
    {
      id: "finish-blocks",
      type: "match",
      prompt: L("Une cada idea con un bloque que la usa.", "Match each idea with a block that uses it."),
      pairs: L([
        ["Evento", "events:al hacer clic en ⚑"],
        ["Bucle", "control:repetir (10)"],
        ["Condicional", "control:si ⟨sensing:¿tocando [borde]?⟩ entonces"],
        ["Variable", "variables:sumar a [puntos] (1)"],
      ], [
        ["Event", "events:when ⚑ clicked"],
        ["Loop", "control:repeat (10)"],
        ["Conditional", "control:if ⟨sensing:touching [edge]?⟩ then"],
        ["Variable", "variables:change [score] by (1)"],
      ]),
      explain: L("Cuatro ideas que están en casi todos los juegos.", "Four ideas found in almost every game."),
    },
    {
      id: "finish-program",
      type: "choice",
      prompt: L("¿Qué hace este programa?", "What does this program do?"),
      program: L(
        ["events:al presionar tecla [espacio]", "control:repetir (3) {", "motion:sumar a y (30)", "control:esperar (0.2) segundos", "motion:sumar a y (-30)", "}", "looks:decir [¡Tres saltos!] durante (2) segundos"],
        ["events:when [space] key pressed", "control:repeat (3) {", "motion:change y by (30)", "control:wait (0.2) seconds", "motion:change y by (-30)", "}", "looks:say [Three jumps!] for (2) seconds"],
      ),
      options: L(
        ["Con espacio, salta 3 veces y luego dice “¡Tres saltos!”", "Salta para siempre", "Dice “¡Tres saltos!” 3 veces"],
        ["With space, it jumps 3 times and then says “Three jumps!”", "It jumps forever", "It says “Three jumps!” 3 times"],
      ),
      answer: 0,
      hint: L("Mira qué está adentro del bucle y qué queda debajo.", "Look at what's inside the loop and what's below it."),
      explain: L("El salto se repite 3 veces; el “decir” pasa una vez al final.", "The jump repeats 3 times; the “say” happens once at the end."),
    },
    {
      id: "finish-debug",
      type: "choice",
      prompt: L("Un objeto debería decir “¡Ay!” al tocar el borde, pero no lo dice nunca. ¿Qué revisas primero?", "A sprite should say “Ouch!” when it touches the edge, but it never does. What do you check first?"),
      options: L(["Que el “si” esté adentro de un “por siempre”", "Que el fondo sea azul", "Que el objeto se llame “Ay”"], ["That the “if” is inside a “forever”", "That the backdrop is blue", "That the sprite is called “Ouch”"]),
      answer: 0,
      hint: L("Recuerda la zona Decidir.", "Remember the Decide zone."),
      explain: L("Para revisar todo el tiempo, el “si” va en un bucle.", "To check all the time, the “if” goes in a loop."),
    },
  ],
  scratch: {
    steps: L([
      "Abre tu proyecto favorito de todo el camino.",
      "Agrégale una mejora: un sonido, una variable, un nivel nuevo o un final distinto.",
      "Guárdalo con un nombre claro.",
      "Explícale a alguien de tu familia, en un minuto, cómo funciona.",
    ], [
      "Open your favorite project from the whole path.",
      "Add an improvement: a sound, a variable, a new level or a different ending.",
      "Save it with a clear name.",
      "Explain to someone in your family, in one minute, how it works.",
    ]),
    challenge: L("Imprime o guarda tus diplomas desde el álbum.", "Print or save your diplomas from the album."),
    expect: L("Tu proyecto favorito tiene una mejora nueva y alguien sabe cómo funciona.", "Your favorite project has a new improvement and someone knows how it works."),
    check: L([
      "Si una mejora falla, vuelve a la página del camino que explica esa idea.",
      "Si no encuentras tu proyecto, búscalo en Descargas o en “Mis cosas”.",
    ], [
      "If an improvement fails, go back to the path page that explains that idea.",
      "If you can't find your project, look in Downloads or in “My Stuff”.",
    ]),
  },
  unplugged: L("Organicen una exposición familiar: cada persona muestra su proyecto favorito y cuenta qué fue lo más difícil.", "Hold a family showcase: each person shows their favorite project and tells what was hardest."),
  family: L("No es un examen. Celebren el camino recorrido e impriman el diploma. Si quieren seguir, la comunidad de Scratch tiene muchísimas ideas para remezclar.", "It's not an exam. Celebrate the path traveled and print the diploma. If you want to keep going, the Scratch community has lots of ideas to remix."),
};
