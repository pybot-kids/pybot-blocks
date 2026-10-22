// Zone 06 — Sound and music. Notes use Scratch's numbers: 60 is middle C (Do).

lessonData.soundPlay = {
  goal: L("Vas a hacer sonar tus proyectos.", "You will make your projects play sounds."),
  look: L([
    "Cada objeto trae sonidos; los ves en la pestaña Sonidos. Con “Elige un sonido” agregas más de la biblioteca.",
    "Hay dos formas de tocarlos. “iniciar sonido [ ]” lo hace sonar y el programa sigue enseguida. “tocar sonido [ ] hasta que termine” espera a que el sonido acabe antes de seguir.",
    "“detener todos los sonidos” hace silencio y “fijar volumen al (100) %” cambia qué tan fuerte suena.",
  ], [
    "Each sprite comes with sounds; you see them in the Sounds tab. With “Choose a Sound” you add more from the library.",
    "There are two ways to play them. “start sound [ ]” plays it and the program keeps going right away. “play sound [ ] until done” waits for the sound to finish before going on.",
    "“stop all sounds” makes silence and “set volume to (100) %” changes how loud it is.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "sound:fijar volumen al (50) %", "sound:tocar sonido [Pop] hasta que termine", "looks:decir [¡Terminó el sonido!] durante (2) segundos"],
    ["events:when ⚑ clicked", "sound:set volume to (50) %", "sound:play sound [Pop] until done", "looks:say [The sound is over!] for (2) seconds"],
  ),
  caption: L("A media potencia, toca el sonido y, cuando termina, lo dice.", "At half volume, it plays the sound and, when it ends, says so."),
  activities: [
    {
      id: "sound-play-wait",
      type: "choice",
      prompt: L("Quieres que el objeto hable justo cuando termina el sonido. ¿Qué bloque usas antes del “decir”?", "You want the sprite to talk right when the sound ends. Which block do you use before the “say”?"),
      options: L(["sound:tocar sonido [Pop] hasta que termine", "sound:iniciar sonido [Pop]"], ["sound:play sound [Pop] until done", "sound:start sound [Pop]"]),
      answer: 0,
      hint: L("Uno de los dos espera; el otro sigue enseguida.", "One of them waits; the other keeps going right away."),
      explain: L("“hasta que termine” espera al sonido.", "“until done” waits for the sound."),
    },
    {
      id: "sound-play-match",
      type: "match",
      prompt: L("Une cada bloque con lo que hace.", "Match each block with what it does."),
      pairs: L([
        ["sound:iniciar sonido [Pop]", "Suena y el programa sigue enseguida"],
        ["sound:tocar sonido [Pop] hasta que termine", "Suena y el programa espera"],
        ["sound:detener todos los sonidos", "Silencio"],
      ], [
        ["sound:start sound [Pop]", "Plays and the program keeps going"],
        ["sound:play sound [Pop] until done", "Plays and the program waits"],
        ["sound:stop all sounds", "Silence"],
      ]),
      explain: L("Ya sabes cuándo esperar y cuándo seguir.", "Now you know when to wait and when to go on."),
    },
  ],
  scratch: {
    steps: L([
      "Selecciona un objeto y abre la pestaña Sonidos para escuchar los que trae.",
      "Vuelve a Código. Arma “al hacer clic en ⚑” y “fijar volumen al (100) %” con 50 (Sonido).",
      "Encaja “tocar sonido [ ] hasta que termine” y elige uno de sus sonidos.",
      "Encaja “decir [¡Terminó el sonido!] durante (2) segundos”.",
      "Presiona la bandera verde.",
    ], [
      "Select a sprite and open the Sounds tab to listen to its sounds.",
      "Go back to Code. Build “when ⚑ clicked” and “set volume to (100) %” with 50 (Sound).",
      "Snap “play sound [ ] until done” and choose one of its sounds.",
      "Snap “say [The sound is over!] for (2) seconds”.",
      "Press the green flag.",
    ]),
    challenge: L("Arma una secuencia de tres sonidos distintos, uno detrás de otro, sin que se mezclen.", "Make a sequence of three different sounds, one after another, without mixing."),
    expect: L("Suena el sonido y, cuando termina, el objeto lo dice.", "The sound plays and, when it ends, the sprite says so."),
    check: L([
      "Si no se oye, revisa el volumen del dispositivo y que el bloque de volumen no esté en 0.",
      "Si los sonidos se mezclan, usa “tocar sonido … hasta que termine”.",
    ], [
      "If you can't hear it, check the device volume and that the volume block isn't at 0.",
      "If the sounds mix, use “play sound … until done”.",
    ]),
  },
  unplugged: L("Orquesta de cocina: ollas, cucharas y vasos. Una persona dirige: “suena hasta que yo diga” o “suena y sigue”.", "Kitchen orchestra: pots, spoons and cups. One person conducts: “play until I say” or “play and go on”."),
  family: L("Si quieren grabar su voz (botón Grabar en la pestaña Sonidos), háganlo juntos: usa el micrófono en Scratch, no en PyBot Blocks.", "If you want to record your voice (Record button in the Sounds tab), do it together: it uses the microphone in Scratch, not in PyBot Blocks."),
};

lessonData.soundMusic = {
  goal: L("Vas a tocar una melodía con notas.", "You will play a tune with notes."),
  look: L([
    "La extensión Música (botón de extensiones, abajo a la izquierda) trae instrumentos y notas.",
    "“tocar nota (60) durante (0.25) tiempos” toca una nota. Cada nota tiene un número: 60 es Do, 62 Re, 64 Mi, 65 Fa, 67 Sol, 69 La y 71 Si. Los tiempos dicen cuánto dura.",
    "“dar al tempo el valor (60)” cambia la velocidad de toda la canción: más tempo, más rápido. “fijar instrumento a [ ]” elige piano, guitarra, flauta…",
  ], [
    "The Music extension (extensions button, bottom left) brings instruments and notes.",
    "“play note (60) for (0.25) beats” plays a note. Each note has a number: 60 is C, 62 D, 64 E, 65 F, 67 G, 69 A and 71 B. The beats say how long it lasts.",
    "“set tempo to (60)” changes the speed of the whole song: more tempo, faster. “set instrument to [ ]” picks piano, guitar, flute…",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "music:dar al tempo el valor (90)", "music:tocar nota (60) durante (0.5) tiempos", "music:tocar nota (60) durante (0.5) tiempos", "music:tocar nota (67) durante (0.5) tiempos", "music:tocar nota (67) durante (0.5) tiempos", "music:tocar nota (69) durante (0.5) tiempos", "music:tocar nota (69) durante (0.5) tiempos", "music:tocar nota (67) durante (1) tiempos"],
    ["events:when ⚑ clicked", "music:set tempo to (90)", "music:play note (60) for (0.5) beats", "music:play note (60) for (0.5) beats", "music:play note (67) for (0.5) beats", "music:play note (67) for (0.5) beats", "music:play note (69) for (0.5) beats", "music:play note (69) for (0.5) beats", "music:play note (67) for (1) beats"],
  ),
  caption: L("Do, Do, Sol, Sol, La, La, Sol: el comienzo de “Estrellita, ¿dónde estás?”.", "C, C, G, G, A, A, G: the start of “Twinkle, Twinkle, Little Star”."),
  activities: [
    {
      id: "sound-music-notes",
      type: "match",
      prompt: L("Une cada número con su nota.", "Match each number with its note."),
      pairs: L([["60", "Do"], ["62", "Re"], ["64", "Mi"], ["67", "Sol"]], [["60", "C"], ["62", "D"], ["64", "E"], ["67", "G"]]),
      explain: L("Cada nota sube de 2 en 2, salvo de Mi a Fa.", "Each note goes up by 2, except from E to F."),
    },
    {
      id: "sound-music-tempo",
      type: "choice",
      prompt: L("¿Con qué bloque la canción suena más rápida?", "With which block does the song sound faster?"),
      options: L(["music:dar al tempo el valor (120)", "music:dar al tempo el valor (40)"], ["music:set tempo to (120)", "music:set tempo to (40)"]),
      answer: 0,
      hint: L("El tempo es cuántos tiempos caben en un minuto.", "Tempo is how many beats fit in a minute."),
      explain: L("Más tiempos por minuto: más rápido.", "More beats per minute: faster."),
    },
  ],
  scratch: {
    steps: L([
      "Haz clic en el botón de extensiones, abajo a la izquierda, y elige Música.",
      "Arma “al hacer clic en ⚑” y “dar al tempo el valor (60)” con 90.",
      "Encaja siete “tocar nota (60) durante (0.25) tiempos” con estas notas: 60, 60, 67, 67, 69, 69, 67. Usa 0.5 tiempos, y 1 en la última.",
      "Presiona la bandera verde.",
    ], [
      "Click the extensions button at the bottom left and choose Music.",
      "Build “when ⚑ clicked” and “set tempo to (60)” with 90.",
      "Snap seven “play note (60) for (0.25) beats” with these notes: 60, 60, 67, 67, 69, 69, 67. Use 0.5 beats, and 1 for the last one.",
      "Press the green flag.",
    ]),
    challenge: L("Termina la frase con Fa, Fa, Mi, Mi, Re, Re, Do: 65, 65, 64, 64, 62, 62, 60.", "Finish the phrase with F, F, E, E, D, D, C: 65, 65, 64, 64, 62, 62, 60."),
    expect: L("Suena el comienzo de “Estrellita, ¿dónde estás?”.", "The start of “Twinkle, Twinkle, Little Star” plays."),
    check: L([
      "Si no aparecen los bloques de música, revisa que agregaste la extensión Música.",
      "Si suena raro, revisa cada número de nota con el de la lista.",
    ], [
      "If the music blocks don't appear, check that you added the Music extension.",
      "If it sounds odd, check each note number against the list.",
    ]),
  },
  unplugged: L("Palmas largas y cortas: una palmada larga vale 1 tiempo y una corta medio tiempo. Inventen un ritmo y repítanlo.", "Long and short claps: a long clap is 1 beat and a short one half a beat. Invent a rhythm and repeat it."),
  family: L("Canten juntos la canción antes de programarla: así es más fácil encontrar las notas.", "Sing the song together before coding it: it makes the notes easier to find."),
};

lessonData.soundDance = {
  goal: L("Vas a hacer que un objeto baile con música.", "You will make a sprite dance to music."),
  look: L([
    "Para bailar con música hacen falta dos cosas al mismo tiempo: la música que suena y el baile que se mueve. Por eso van en dos programas que empiezan con la bandera.",
    "La música va en un “por siempre” con “tocar sonido [ ] hasta que termine”, para que vuelva a empezar al acabar. El baile va en otro “por siempre” que cambia de disfraz y espera.",
  ], [
    "To dance to music you need two things at once: the music playing and the dance moving. That's why they go in two programs that start with the flag.",
    "The music goes in a “forever” with “play sound [ ] until done”, so it starts again when it ends. The dance goes in another “forever” that changes costume and waits.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:por siempre {", "sound:tocar sonido [mi canción] hasta que termine", "}", "---", "events:al hacer clic en ⚑", "control:por siempre {", "looks:siguiente disfraz", "control:esperar (0.5) segundos", "}"],
    ["events:when ⚑ clicked", "control:forever {", "sound:play sound [my song] until done", "}", "---", "events:when ⚑ clicked", "control:forever {", "looks:next costume", "control:wait (0.5) seconds", "}"],
  ),
  caption: L("Dos programas: uno repite la canción y el otro repite el baile, al mismo tiempo.", "Two programs: one repeats the song and the other repeats the dance, at the same time."),
  activities: [
    {
      id: "sound-dance-two",
      type: "choice",
      prompt: L("¿Por qué la música y el baile van en dos programas distintos?", "Why do the music and the dance go in two different programs?"),
      options: L(["Para que pasen al mismo tiempo", "Para que la música suene después del baile", "Porque Scratch no deja juntarlos"], ["So they happen at the same time", "So the music plays after the dance", "Because Scratch doesn't let you join them"]),
      answer: 0,
      hint: L("Recuerda la página “Varios programas a la vez”.", "Remember the “Several scripts at once” page."),
      explain: L("Dos programas con la bandera arrancan juntos.", "Two flag programs start together."),
    },
    {
      id: "sound-dance-slower",
      type: "choice",
      prompt: L("El baile va más rápido que la música. ¿Qué espera pones en el programa del baile?", "The dance is faster than the music. Which wait do you put in the dance program?"),
      options: L(["control:esperar (1) segundos", "control:esperar (0.1) segundos"], ["control:wait (1) seconds", "control:wait (0.1) seconds"]),
      answer: 0,
      hint: L("Más espera entre pasos, baile más lento.", "More wait between moves, slower dance."),
      explain: L("Con más espera, el baile se calma y sigue mejor el ritmo.", "With a longer wait, the dance calms down and follows the beat better."),
    },
  ],
  scratch: {
    steps: L([
      "Elige un objeto que tenga varios disfraces de baile.",
      "En la pestaña Sonidos, agrega con “Elige un sonido” una música larga de la biblioteca.",
      "Arma el programa de la música: “al hacer clic en ⚑”, “por siempre” y adentro “tocar sonido [ ] hasta que termine” con esa música.",
      "Arma el programa del baile: “al hacer clic en ⚑”, “por siempre” y adentro “siguiente disfraz” y “esperar (0.5) segundos”.",
      "Presiona la bandera verde.",
    ], [
      "Choose a sprite with several dance costumes.",
      "In the Sounds tab, add a long piece of music from the library with “Choose a Sound”.",
      "Build the music program: “when ⚑ clicked”, “forever” and inside “play sound [ ] until done” with that music.",
      "Build the dance program: “when ⚑ clicked”, “forever” and inside “next costume” and “wait (0.5) seconds”.",
      "Press the green flag.",
    ]),
    challenge: L("Agrega un segundo bailarín con su propio programa de baile para que bailen juntos.", "Add a second dancer with its own dance program so they dance together."),
    expect: L("La música suena sin parar y el objeto cambia de pose al ritmo.", "The music keeps playing and the sprite changes pose to the beat."),
    check: L([
      "Si la música se corta, revisa que sea “tocar sonido … hasta que termine” dentro del “por siempre”.",
      "Si el baile y la música no empiezan juntos, revisa que los dos programas tengan “al hacer clic en ⚑”.",
    ], [
      "If the music cuts off, check that it's “play sound … until done” inside the “forever”.",
      "If the dance and music don't start together, check that both programs have “when ⚑ clicked”.",
    ]),
  },
  unplugged: L("Coreografía de 8 tiempos: inventen 4 pasos de 2 tiempos cada uno y báilenlos con una canción.", "8-count choreography: invent 4 moves of 2 counts each and dance them to a song."),
  family: L("Graben el baile del objeto y el suyo (fuera de Scratch) para compararlos. ¡Se vale reírse!", "Record the sprite's dance and yours (outside Scratch) to compare them. Laughing is allowed!"),
};
