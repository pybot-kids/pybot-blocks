// Zone 02 — When something happens. From here on, programs start with an event.

lessonData.eventsFlag = {
  goal: L("Vas a hacer que tus programas empiecen con la bandera verde.", "You will make your programs start with the green flag."),
  look: L([
    "Hasta ahora probabas los programas haciendo clic sobre los bloques. Los eventos son bloques que dicen cuándo empieza un programa.",
    "“al hacer clic en ⚑” es el evento más usado: el programa que tiene debajo empieza cuando presionas la bandera verde. Su parte de arriba es redonda, como un sombrero, porque siempre va arriba de todo.",
    "La señal de alto, al lado de la bandera, detiene todos los programas.",
  ], [
    "Until now you tried programs by clicking the blocks. Events are blocks that say when a program starts.",
    "“when ⚑ clicked” is the most used event: the program below it starts when you press the green flag. Its top is round, like a hat, because it always goes on top.",
    "The stop sign, next to the flag, stops all programs.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "motion:ir a x: (0) y: (0)", "looks:decir [¡Empecemos!] durante (2) segundos", "motion:deslizar en (2) segs a x: (150) y: (0)"],
    ["events:when ⚑ clicked", "motion:go to x: (0) y: (0)", "looks:say [Let's go!] for (2) seconds", "motion:glide (2) secs to x: (150) y: (0)"],
  ),
  caption: L("Al presionar la bandera: vuelve al centro, saluda y viaja a la derecha.", "When you press the flag: it goes back to the center, says hello and travels right."),
  terms: L([["Evento", "Algo que pasa y hace empezar un programa."]], [["Event", "Something that happens and starts a program."]]),
  activities: [
    {
      id: "events-flag-order",
      type: "order",
      prompt: L("Arma el programa: al presionar la bandera, el objeto vuelve al centro y dice “¡Listo!”.", "Build the program: when the flag is pressed, the sprite goes back to the center and says “Ready!”."),
      blocks: L(
        ["events:al hacer clic en ⚑", "motion:ir a x: (0) y: (0)", "looks:decir [¡Listo!] durante (2) segundos"],
        ["events:when ⚑ clicked", "motion:go to x: (0) y: (0)", "looks:say [Ready!] for (2) seconds"],
      ),
      hint: L("El evento va arriba de todo.", "The event goes at the very top."),
      explain: L("Evento arriba y luego las instrucciones en orden.", "Event on top, then the instructions in order."),
    },
    {
      id: "events-flag-missing",
      type: "choice",
      prompt: L("Este programa no hace nada al presionar la bandera verde. ¿Por qué?", "This program does nothing when you press the green flag. Why?"),
      program: L(["motion:mover (10) pasos", "looks:decir [¡Hola!] durante (2) segundos"], ["motion:move (10) steps", "looks:say [Hello!] for (2) seconds"]),
      options: L(["Le falta “al hacer clic en ⚑” arriba", "Le falta un fondo", "La bandera está rota"], ["It's missing “when ⚑ clicked” on top", "It's missing a backdrop", "The flag is broken"]),
      answer: 0,
      hint: L("¿Qué bloque le dice al programa cuándo empezar?", "Which block tells the program when to start?"),
      explain: L("Sin evento, el programa solo corre si haces clic sobre él.", "Without an event, the program only runs if you click it."),
    },
  ],
  scratch: {
    steps: L([
      "En Eventos (la categoría amarilla), arrastra “al hacer clic en ⚑”.",
      "Encaja debajo “ir a x: (0) y: (0)” de Movimiento.",
      "Encaja “decir [¡Empecemos!] durante (2) segundos” y “deslizar en (2) segs a x: (150) y: (0)”.",
      "Presiona la bandera verde encima del escenario.",
    ], [
      "In Events (the yellow category), drag “when ⚑ clicked”.",
      "Snap “go to x: (0) y: (0)” from Motion below it.",
      "Snap “say [Let's go!] for (2) seconds” and “glide (2) secs to x: (150) y: (0)”.",
      "Press the green flag above the stage.",
    ]),
    challenge: L("Pon “al hacer clic en ⚑” arriba de tu programa de caminata de la página de disfraces.", "Put “when ⚑ clicked” on top of your walking program from the costumes page."),
    expect: L("Cada vez que presionas la bandera, el objeto empieza desde el centro, saluda y viaja. Con la señal de alto se detiene.", "Each time you press the flag, the sprite starts from the center, says hello and travels. The stop sign stops it."),
    check: L([
      "Revisa que los bloques estén pegados debajo del evento: si hay un espacio, no están encajados.",
      "Si empieza en un lugar raro, revisa que “ir a x: (0) y: (0)” esté justo debajo del evento.",
    ], [
      "Check that the blocks are attached below the event: if there is a gap, they are not snapped.",
      "If it starts in an odd place, check that “go to x: (0) y: (0)” is right below the event.",
    ]),
  },
  unplugged: L("“En sus marcas, listos… ¡ya!”: el “ya” es el evento que hace correr a todo el mundo. Jueguen a que nadie se mueve hasta oír una palabra secreta.", "“Ready, set… go!”: “go” is the event that makes everyone run. Play a game where nobody moves until they hear a secret word."),
  family: L("La bandera es como el silbato de inicio de un partido. Desde ahora, los programas empiezan con un evento.", "The flag is like the whistle that starts a match. From now on, programs start with an event."),
};

lessonData.eventsKeys = {
  goal: L("Vas a mover un objeto con las flechas del teclado.", "You will move a sprite with the arrow keys."),
  look: L([
    "“al presionar tecla [espacio]” empieza un programa cuando presionas esa tecla. En el menú del bloque eliges cuál: espacio, flechas, letras o números.",
    "Con un programa para cada flecha puedes manejar un objeto, como en un videojuego.",
    "Recuerda la página de x e y: “sumar a x (10)” va a la derecha y “sumar a x (-10)” a la izquierda; “sumar a y (10)” sube y “sumar a y (-10)” baja.",
  ], [
    "“when [space] key pressed” starts a program when you press that key. In the block's menu you choose which one: space, arrows, letters or numbers.",
    "With one program for each arrow you can drive a sprite, like in a video game.",
    "Remember the x and y page: “change x by (10)” goes right and “change x by (-10)” goes left; “change y by (10)” goes up and “change y by (-10)” goes down.",
  ]),
  program: L(["events:al presionar tecla [flecha derecha]", "motion:sumar a x (10)"], ["events:when [right arrow] key pressed", "motion:change x by (10)"]),
  caption: L("Un programa de los cuatro: con la flecha derecha, el objeto avanza 10 hacia la derecha.", "One of the four programs: with the right arrow, the sprite moves 10 to the right."),
  activities: [
    {
      id: "events-keys-match",
      type: "match",
      prompt: L("Une cada flecha con el bloque que debe ir debajo de su evento.", "Match each arrow with the block that goes below its event."),
      pairs: L([
        ["Flecha derecha", "motion:sumar a x (10)"],
        ["Flecha izquierda", "motion:sumar a x (-10)"],
        ["Flecha arriba", "motion:sumar a y (10)"],
        ["Flecha abajo", "motion:sumar a y (-10)"],
      ], [
        ["Right arrow", "motion:change x by (10)"],
        ["Left arrow", "motion:change x by (-10)"],
        ["Up arrow", "motion:change y by (10)"],
        ["Down arrow", "motion:change y by (-10)"],
      ]),
      explain: L("x para los lados, y para arriba y abajo.", "x for sideways, y for up and down."),
    },
    {
      id: "events-keys-which",
      type: "choice",
      prompt: L("Presionas la barra espaciadora y este programa no hace nada. ¿Qué revisas?", "You press the space bar and this program does nothing. What do you check?"),
      program: L(["events:al presionar tecla [flecha arriba]", "looks:decir [¡Hola!] durante (2) segundos"], ["events:when [up arrow] key pressed", "looks:say [Hello!] for (2) seconds"]),
      options: L(["Que el menú del evento diga “espacio”", "Que el objeto sea más grande", "Que haya un fondo"], ["That the event's menu says “space”", "That the sprite is bigger", "That there is a backdrop"]),
      answer: 0,
      hint: L("Mira qué tecla dice el evento.", "Look at which key the event says."),
      explain: L("El programa espera la flecha arriba, no el espacio.", "The program waits for the up arrow, not space."),
    },
  ],
  scratch: {
    steps: L([
      "En Eventos, arrastra “al presionar tecla [espacio]” y en su menú elige “flecha derecha”.",
      "Encaja debajo “sumar a x (10)”.",
      "Arma otro programa igual para la flecha izquierda, con “sumar a x (-10)”.",
      "Arma dos más para arriba y abajo, con “sumar a y (10)” y “sumar a y (-10)”.",
      "Haz clic una vez en el escenario y prueba las flechas.",
    ], [
      "In Events, drag “when [space] key pressed” and choose “right arrow” in its menu.",
      "Snap “change x by (10)” below it.",
      "Build the same program for the left arrow, with “change x by (-10)”.",
      "Build two more for up and down, with “change y by (10)” and “change y by (-10)”.",
      "Click the stage once and try the arrows.",
    ]),
    challenge: L("Agrega un programa más: al presionar espacio, el objeto dice “¡Hola!” durante 1 segundo.", "Add one more program: when space is pressed, the sprite says “Hello!” for 1 second."),
    expect: L("Con las flechas el objeto se mueve hacia cada lado, y con espacio saluda.", "With the arrows the sprite moves each way, and with space it says hello."),
    check: L([
      "Si las teclas no responden, haz clic una vez en el escenario y vuelve a probar.",
      "Revisa el signo: -10 va a la izquierda o hacia abajo.",
    ], [
      "If the keys don't respond, click the stage once and try again.",
      "Check the sign: -10 goes left or down.",
    ]),
  },
  unplugged: L("Control remoto humano: hagan cuatro tarjetas con flechas. Cuando alguien levanta una tarjeta, otra persona da un paso hacia ese lado.", "Human remote control: make four cards with arrows. When someone holds up a card, another person takes a step that way."),
  family: L("Es la base de casi todos los juegos. Pregunte: “¿qué tecla usarías para saltar?”.", "It's the base of almost every game. Ask: “which key would you use to jump?”."),
};

lessonData.eventsClick = {
  goal: L("Vas a hacer que un objeto responda cuando haces clic sobre él.", "You will make a sprite respond when you click it."),
  look: L([
    "“al hacer clic en este objeto” empieza un programa cuando haces clic sobre ese objeto en el escenario. Así haces botones, animales que hacen ruido o personajes que responden.",
    "Con “iniciar sonido [ ]”, de la categoría Sonido (la rosada), el objeto hace un ruido. Cada objeto trae sonidos; los ves en la pestaña Sonidos.",
  ], [
    "“when this sprite clicked” starts a program when you click that sprite on the stage. That's how you make buttons, animals that make noises or characters that answer.",
    "With “start sound [ ]”, from the Sound category (the pink one), the sprite makes a noise. Each sprite comes with sounds; you see them in the Sounds tab.",
  ]),
  program: L(
    ["events:al hacer clic en este objeto", "sound:iniciar sonido [Pop]", "looks:siguiente disfraz", "looks:decir [¡Me tocaste!] durante (1) segundos"],
    ["events:when this sprite clicked", "sound:start sound [Pop]", "looks:next costume", "looks:say [You touched me!] for (1) seconds"],
  ),
  caption: L("Al tocarlo: suena, cambia de disfraz y lo dice.", "When touched: it plays a sound, changes costume and says so."),
  activities: [
    {
      id: "events-click-when",
      type: "choice",
      prompt: L("¿Cuándo empieza este programa?", "When does this program start?"),
      program: L(["events:al hacer clic en este objeto", "looks:decir [¡Hola!] durante (1) segundos"], ["events:when this sprite clicked", "looks:say [Hello!] for (1) seconds"]),
      options: L(["Cuando haces clic sobre el objeto", "Cuando presionas la bandera verde", "Cuando presionas la barra espaciadora"], ["When you click the sprite", "When you press the green flag", "When you press the space bar"]),
      answer: 0,
      hint: L("Lee el evento de arriba.", "Read the event on top."),
      explain: L("Empieza al hacer clic sobre ese objeto.", "It starts when you click that sprite."),
    },
    {
      id: "events-click-whose",
      type: "choice",
      prompt: L("Quieres que el Perro ladre al tocarlo, pero ladra cuando tocas al Pato. ¿Qué pasó?", "You want the Dog to bark when touched, but it barks when you touch the Duck. What happened?"),
      options: L(["Armaste el programa en el Pato y no en el Perro", "Falta la bandera verde", "El sonido está muy bajo"], ["You built the program in the Duck, not the Dog", "The green flag is missing", "The sound is too low"]),
      answer: 0,
      hint: L("Cada objeto tiene sus propios programas.", "Each sprite has its own programs."),
      explain: L("El programa va en el objeto que se toca.", "The program goes in the sprite that is touched."),
    },
  ],
  scratch: {
    steps: L([
      "Agrega un animal con “Elige un objeto”.",
      "Con el animal seleccionado, arrastra “al hacer clic en este objeto” (Eventos).",
      "Encaja “iniciar sonido [ ]” (Sonido) y elige en el menú uno de sus sonidos.",
      "Encaja “siguiente disfraz” (Apariencia).",
      "Haz clic sobre el animal en el escenario.",
    ], [
      "Add an animal with “Choose a Sprite”.",
      "With the animal selected, drag “when this sprite clicked” (Events).",
      "Snap “start sound [ ]” (Sound) and choose one of its sounds in the menu.",
      "Snap “next costume” (Looks).",
      "Click the animal on the stage.",
    ]),
    challenge: L("Arma una granja: tres animales, cada uno con su propio sonido al tocarlo.", "Build a farm: three animals, each with its own sound when touched."),
    expect: L("Al hacer clic en cada animal, suena su sonido y cambia de disfraz.", "When you click each animal, its sound plays and it changes costume."),
    check: L([
      "Si no suena, revisa el volumen del dispositivo.",
      "Si suena el animal equivocado, revisa en qué objeto armaste el programa.",
    ], [
      "If there is no sound, check the device volume.",
      "If the wrong animal makes the sound, check which sprite has the program.",
    ]),
  },
  unplugged: L("Toca y responde: cada persona elige un sonido de animal. Cuando alguien le toca el hombro, hace su sonido.", "Tap and answer: each person picks an animal sound. When someone taps their shoulder, they make the sound."),
  family: L("Pida que le muestre su “granja tocable”. Escuchar los sonidos juntos es parte de la diversión.", "Ask to see the “touchable farm”. Listening to the sounds together is part of the fun."),
};

lessonData.eventsTogether = {
  goal: L("Vas a hacer que varios programas empiecen al mismo tiempo.", "You will make several programs start at the same time."),
  look: L([
    "Un objeto puede tener varios programas, y pueden empezar con el mismo evento. Al presionar la bandera, todos los programas que empiezan con “al hacer clic en ⚑” arrancan a la vez.",
    "Así un objeto puede viajar y hablar al mismo tiempo, o dos objetos pueden bailar juntos.",
    "Si quieres que algo pase más tarde en uno de los programas, usa “esperar”.",
  ], [
    "A sprite can have several programs, and they can start with the same event. When you press the flag, every program that starts with “when ⚑ clicked” starts at once.",
    "That way a sprite can travel and talk at the same time, or two sprites can dance together.",
    "If you want something to happen later in one of the programs, use “wait”.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "motion:deslizar en (3) segs a x: (150) y: (0)", "---", "events:al hacer clic en ⚑", "looks:decir [¡Voy a la meta!] durante (2) segundos"],
    ["events:when ⚑ clicked", "motion:glide (3) secs to x: (150) y: (0)", "---", "events:when ⚑ clicked", "looks:say [Off to the finish!] for (2) seconds"],
  ),
  caption: L("Dos programas del mismo objeto: al presionar la bandera, viaja y habla al mismo tiempo.", "Two programs of the same sprite: when you press the flag, it travels and talks at the same time."),
  activities: [
    {
      id: "events-together-what",
      type: "choice",
      prompt: L("Con estos dos programas, ¿qué pasa al presionar la bandera?", "With these two programs, what happens when you press the flag?"),
      program: L(
        ["events:al hacer clic en ⚑", "motion:deslizar en (3) segs a x: (150) y: (0)", "---", "events:al hacer clic en ⚑", "looks:decir [¡Voy a la meta!] durante (2) segundos"],
        ["events:when ⚑ clicked", "motion:glide (3) secs to x: (150) y: (0)", "---", "events:when ⚑ clicked", "looks:say [Off to the finish!] for (2) seconds"],
      ),
      options: L(["Viaja y habla al mismo tiempo", "Primero viaja y después habla", "Solo habla"], ["It travels and talks at the same time", "First it travels, then it talks", "It only talks"]),
      answer: 0,
      hint: L("Los dos programas empiezan con el mismo evento.", "Both programs start with the same event."),
      explain: L("Los dos arrancan con la bandera, a la vez.", "Both start with the flag, at once."),
    },
    {
      id: "events-together-wait",
      type: "choice",
      prompt: L("El viaje dura 3 segundos. Quieres que diga “¡Llegué!” justo al llegar. ¿Qué pones antes del “decir” en el segundo programa?", "The trip lasts 3 seconds. You want it to say “I made it!” right when it arrives. What do you put before the “say” in the second program?"),
      program: L(
        ["events:al hacer clic en ⚑", "motion:deslizar en (3) segs a x: (150) y: (0)", "---", "events:al hacer clic en ⚑", "looks:decir [¡Llegué!] durante (2) segundos"],
        ["events:when ⚑ clicked", "motion:glide (3) secs to x: (150) y: (0)", "---", "events:when ⚑ clicked", "looks:say [I made it!] for (2) seconds"],
      ),
      options: L(["control:esperar (3) segundos", "control:esperar (1) segundos", "motion:mover (10) pasos"], ["control:wait (3) seconds", "control:wait (1) seconds", "motion:move (10) steps"]),
      answer: 0,
      hint: L("¿Cuánto tarda el viaje?", "How long does the trip take?"),
      explain: L("Espera los 3 segundos del viaje y luego habla.", "It waits the 3 seconds of the trip and then talks."),
    },
  ],
  scratch: {
    steps: L([
      "Arma un programa: “al hacer clic en ⚑” y “deslizar en (3) segs a x: (150) y: (0)”.",
      "En el mismo objeto, arma otro programa aparte: “al hacer clic en ⚑” y “decir [¡Voy a la meta!] durante (2) segundos”.",
      "Presiona la bandera verde.",
    ], [
      "Build a program: “when ⚑ clicked” and “glide (3) secs to x: (150) y: (0)”.",
      "In the same sprite, build another separate program: “when ⚑ clicked” and “say [Off to the finish!] for (2) seconds”.",
      "Press the green flag.",
    ]),
    challenge: L("Al final del segundo programa agrega “esperar (1) segundos” y “decir [¡Llegué!] durante (2) segundos”. ¿Por qué 1 segundo? Pista: 2 + 1 = 3.", "At the end of the second program add “wait (1) seconds” and “say [I made it!] for (2) seconds”. Why 1 second? Clue: 2 + 1 = 3."),
    expect: L("El objeto viaja y, mientras tanto, dice “¡Voy a la meta!”. Con el reto, dice “¡Llegué!” justo al llegar.", "The sprite travels and, meanwhile, says “Off to the finish!”. With the challenge, it says “I made it!” right when it arrives."),
    check: L([
      "Si habla después de viajar, revisa que sean dos programas separados y no uno solo.",
      "Si un programa no arranca, revisa que empiece con “al hacer clic en ⚑”.",
    ], [
      "If it talks after traveling, check that they are two separate programs, not one.",
      "If a program doesn't start, check that it begins with “when ⚑ clicked”.",
    ]),
  },
  unplugged: L("Canten una canción mientras aplauden: son dos “programas” a la vez. Luego prueben con tres personas, cada una haciendo algo distinto al oír “¡ya!”.", "Sing a song while clapping: that's two “programs” at once. Then try with three people, each doing something different when they hear “go!”."),
  family: L("Hacer dos cosas a la vez es una idea poderosa. Conversen sobre cosas que hacen al mismo tiempo, como caminar y conversar.", "Doing two things at once is a powerful idea. Talk about things you do at the same time, like walking and talking."),
};
