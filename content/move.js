// Zone 01 — Move and look. Programs here run by clicking the stack of blocks,
// because events (the green flag) are taught in zone 02.

lessonData.moveSteps = {
  goal: L("Vas a mover y girar un objeto.", "You will move and turn a sprite."),
  look: L([
    "“mover (10) pasos” hace avanzar al objeto hacia donde está mirando. Un paso es muy pequeño: 10 pasos son un saltito.",
    "Los bloques “girar” cambian hacia dónde mira. 90 grados es una esquina, como doblar en una calle. ↻ gira a la derecha y ↺ a la izquierda.",
    "“apuntar en dirección (90)” lo deja mirando a la derecha. 0 es arriba, 180 es abajo y -90 es a la izquierda.",
  ], [
    "“move (10) steps” moves the sprite the way it is facing. A step is tiny: 10 steps is a little hop.",
    "The “turn” blocks change where it faces. 90 degrees is a corner, like turning at a street. ↻ turns right and ↺ turns left.",
    "“point in direction (90)” makes it face right. 0 is up, 180 is down and -90 is left.",
  ]),
  program: L(
    ["motion:apuntar en dirección (90)", "motion:mover (100) pasos", "motion:girar ↻ (90) grados", "motion:mover (100) pasos"],
    ["motion:point in direction (90)", "motion:move (100) steps", "motion:turn ↻ (90) degrees", "motion:move (100) steps"],
  ),
  caption: L("Mira a la derecha y avanza; gira una esquina a la derecha (ahora mira hacia abajo) y avanza otra vez.", "It faces right and moves; turns a corner to the right (now it faces down) and moves again."),
  activities: [
    {
      id: "move-steps-facing",
      type: "choice",
      prompt: L("Después de este programa, ¿hacia dónde mira el objeto?", "After this program, which way does the sprite face?"),
      program: L(["motion:apuntar en dirección (90)", "motion:girar ↻ (90) grados"], ["motion:point in direction (90)", "motion:turn ↻ (90) degrees"]),
      options: L(["Hacia abajo", "Hacia arriba", "Hacia la izquierda"], ["Down", "Up", "Left"]),
      answer: 0,
      hint: L("Empieza mirando a la derecha y gira una esquina como las agujas del reloj.", "It starts facing right and turns a corner clockwise."),
      explain: L("90 + 90 = 180: mira hacia abajo.", "90 + 90 = 180: it faces down."),
    },
    {
      id: "move-steps-order",
      type: "order",
      prompt: L("Ordena los bloques: mirar a la derecha, avanzar 50, girar hacia arriba y avanzar 80.", "Put the blocks in order: face right, move 50, turn to face up, move 80."),
      blocks: L(
        ["motion:apuntar en dirección (90)", "motion:mover (50) pasos", "motion:girar ↺ (90) grados", "motion:mover (80) pasos"],
        ["motion:point in direction (90)", "motion:move (50) steps", "motion:turn ↺ (90) degrees", "motion:move (80) steps"],
      ),
      hint: L("Primero se elige hacia dónde mira; ↺ gira a la izquierda, y desde la derecha eso es hacia arriba.", "First choose where it faces; ↺ turns left, and from facing right that means up."),
      explain: L("Mira, avanza, gira y avanza: el orden importa.", "Face, move, turn and move: order matters."),
    },
  ],
  scratch: {
    steps: L([
      "En Movimiento, arrastra “apuntar en dirección (90)” al área de programación.",
      "Encaja debajo “mover (10) pasos” y cambia el 10 por 100.",
      "Encaja “girar ↻ (15) grados” y cambia el 15 por 90.",
      "Encaja otro “mover (10) pasos” y cambia el 10 por 100.",
      "Haz clic sobre el grupo de bloques para probarlo.",
    ], [
      "In Motion, drag “point in direction (90)” to the code area.",
      "Snap “move (10) steps” below it and change 10 to 100.",
      "Snap “turn ↻ (15) degrees” and change 15 to 90.",
      "Snap another “move (10) steps” and change 10 to 100.",
      "Click the stack of blocks to try it.",
    ]),
    challenge: L("Agrega dos veces más “girar ↻ (90) grados” y “mover (100) pasos”. ¿Vuelve al punto de partida?", "Add “turn ↻ (90) degrees” and “move (100) steps” two more times. Does it get back to where it started?"),
    expect: L("El objeto avanza a la derecha, gira y baja. Con el reto, recorre las cuatro esquinas de un cuadrado y vuelve al inicio.", "The sprite moves right, turns and goes down. With the challenge, it travels the four corners of a square and gets back to the start."),
    check: L([
      "Si se sale del escenario, arrástralo al centro antes de probar.",
      "Si gira al revés, revisa la flecha: ↻ es a la derecha y ↺ a la izquierda.",
      "Si quedó de lado, haz clic en “apuntar en dirección (90)” para enderezarlo.",
    ], [
      "If it leaves the stage, drag it to the middle before trying again.",
      "If it turns the wrong way, check the arrow: ↻ is right and ↺ is left.",
      "If it is sideways, click “point in direction (90)” to straighten it.",
    ]),
  },
  unplugged: L("Robot humano: una persona da órdenes como “avanza 3 pasos” y “gira a la derecha”, y otra las sigue para llegar a un tesoro escondido.", "Human robot: one person gives orders like “move 3 steps” and “turn right”, and another follows them to reach a hidden treasure."),
  family: L("Los grados son nuevos. Una vuelta completa son 360 grados y una esquina son 90.", "Degrees are new. A full turn is 360 degrees and a corner is 90."),
};

lessonData.moveXY = {
  goal: L("Vas a usar x e y para poner un objeto en un lugar exacto.", "You will use x and y to put a sprite in an exact place."),
  look: L([
    "El escenario es como un mapa con dos números. x dice qué tan a la derecha o a la izquierda está algo; y dice qué tan arriba o abajo.",
    "El centro es x: 0, y: 0. Hacia la derecha x llega hasta 240 y hacia la izquierda hasta -240. Hacia arriba y llega hasta 180 y hacia abajo hasta -180.",
    "Debajo del escenario, en la información del objeto, ves su x y su y en todo momento.",
  ], [
    "The stage is like a map with two numbers. x says how far right or left something is; y says how far up or down.",
    "The center is x: 0, y: 0. To the right x goes up to 240 and to the left down to -240. Up, y goes to 180 and down to -180.",
    "Below the stage, in the sprite info, you always see its x and y.",
  ]),
  program: L(["motion:ir a x: (0) y: (0)", "motion:sumar a x (100)", "motion:sumar a y (50)"], ["motion:go to x: (0) y: (0)", "motion:change x by (100)", "motion:change y by (50)"]),
  caption: L("Va al centro, luego 100 a la derecha y 50 hacia arriba: termina en x: 100, y: 50.", "It goes to the center, then 100 right and 50 up: it ends at x: 100, y: 50."),
  activities: [
    {
      id: "move-xy-where",
      type: "choice",
      prompt: L("¿Dónde queda el objeto después de este programa?", "Where is the sprite after this program?"),
      program: L(["motion:ir a x: (0) y: (0)", "motion:sumar a x (-100)"], ["motion:go to x: (0) y: (0)", "motion:change x by (-100)"]),
      options: L(["A la izquierda del centro", "A la derecha del centro", "Arriba del centro"], ["Left of the center", "Right of the center", "Above the center"]),
      answer: 0,
      hint: L("Un número negativo en x va hacia la izquierda.", "A negative number in x goes left."),
      explain: L("Termina en x: -100, y: 0, a la izquierda del centro.", "It ends at x: -100, y: 0, left of the center."),
    },
    {
      id: "move-xy-map",
      type: "match",
      prompt: L("Une cada posición con su lugar en el escenario.", "Match each position with its place on the stage."),
      pairs: L([
        ["x: 0, y: 0", "El centro"],
        ["x: 200, y: 0", "Cerca del borde derecho"],
        ["x: 0, y: 150", "Cerca del borde de arriba"],
        ["x: -200, y: -150", "La esquina de abajo a la izquierda"],
      ], [
        ["x: 0, y: 0", "The center"],
        ["x: 200, y: 0", "Near the right edge"],
        ["x: 0, y: 150", "Near the top edge"],
        ["x: -200, y: -150", "The bottom left corner"],
      ]),
      explain: L("¡Ya lees el mapa del escenario!", "You can read the stage map now!"),
    },
  ],
  scratch: {
    steps: L([
      "En Movimiento, arrastra “ir a x: () y: ()” y escribe 0 en x y 0 en y.",
      "Haz clic en el bloque: el objeto va al centro.",
      "Cambia los números a x: 200, y: 140 y haz clic otra vez.",
      "Arrastra “sumar a x (10)”, haz clic varias veces y mira cómo cambia la x debajo del escenario.",
    ], [
      "In Motion, drag “go to x: () y: ()” and type 0 for x and 0 for y.",
      "Click the block: the sprite goes to the center.",
      "Change the numbers to x: 200, y: 140 and click again.",
      "Drag “change x by (10)”, click it several times and watch x change below the stage.",
    ]),
    challenge: L("Lleva el objeto a las cuatro esquinas con “ir a x: () y: ()”, usando 200 o -200 en x y 140 o -140 en y.", "Take the sprite to the four corners with “go to x: () y: ()”, using 200 or -200 for x and 140 or -140 for y."),
    expect: L("El objeto salta a cada esquina sin salirse del escenario.", "The sprite jumps to each corner without leaving the stage."),
    check: L([
      "Revisa el signo menos: -200 es a la izquierda y 200 a la derecha.",
      "Si el objeto queda medio afuera, usa números un poco más pequeños: el escenario mide 480 de ancho y 360 de alto.",
    ], [
      "Check the minus sign: -200 is left and 200 is right.",
      "If the sprite is half outside, use slightly smaller numbers: the stage is 480 wide and 360 tall.",
    ]),
  },
  unplugged: L("Dibujen una cuadrícula con el centro en 0, 0 y escondan un tesoro. Una persona dice coordenadas y la otra responde “frío” o “caliente”.", "Draw a grid with the center at 0, 0 and hide a treasure. One person says coordinates and the other answers “cold” or “hot”."),
  family: L("Es la misma idea de un mapa o de la batalla naval. Si ya ven el plano cartesiano en el colegio, esta página sirve de repaso.", "It's the same idea as a map or battleship. If the coordinate plane is already taught at school, this page is good practice."),
};

lessonData.moveGlide = {
  goal: L("Vas a hacer que un objeto viaje suavemente.", "You will make a sprite travel smoothly."),
  look: L([
    "“mover” e “ir a” son saltos: el objeto aparece de una vez en el nuevo lugar. Para que se vea viajar, usa “deslizar”.",
    "“deslizar en (1) segs a x: () y: ()” lo lleva poco a poco hasta ese punto, en los segundos que digas. Con “deslizar en (1) segs a [posición aleatoria]” va a un lugar sorpresa.",
    "“si toca un borde, rebotar” le da la vuelta cuando llega a la orilla del escenario.",
  ], [
    "“move” and “go to” are jumps: the sprite appears in the new place at once. To see it travel, use “glide”.",
    "“glide (1) secs to x: () y: ()” takes it there little by little, in the seconds you choose. With “glide (1) secs to [random position]” it goes to a surprise place.",
    "“if on edge, bounce” turns it around when it reaches the edge of the stage.",
  ]),
  program: L(["motion:deslizar en (1) segs a x: (-150) y: (0)", "motion:deslizar en (2) segs a x: (150) y: (0)"], ["motion:glide (1) secs to x: (-150) y: (0)", "motion:glide (2) secs to x: (150) y: (0)"]),
  caption: L("Viaja a la izquierda en 1 segundo y luego a la derecha, más despacio, en 2 segundos.", "It travels left in 1 second, then right, more slowly, in 2 seconds."),
  activities: [
    {
      id: "move-glide-which",
      type: "choice",
      prompt: L("Quieres que el objeto viaje despacio hasta x: 100, y: 0 y que se vea moverse. ¿Qué bloque usas?", "You want the sprite to travel slowly to x: 100, y: 0 and see it move. Which block do you use?"),
      options: L(
        ["motion:deslizar en (3) segs a x: (100) y: (0)", "motion:ir a x: (100) y: (0)", "motion:sumar a x (100)"],
        ["motion:glide (3) secs to x: (100) y: (0)", "motion:go to x: (100) y: (0)", "motion:change x by (100)"],
      ),
      answer: 0,
      hint: L("Dos de esos bloques son saltos instantáneos.", "Two of those blocks are instant jumps."),
      explain: L("“deslizar” se mueve poco a poco; 3 segundos es despacio.", "“glide” moves little by little; 3 seconds is slow."),
    },
    {
      id: "move-glide-speed",
      type: "choice",
      prompt: L("Los dos viajes van al mismo lugar. ¿Cuál es más rápido?", "Both trips go to the same place. Which one is faster?"),
      options: L(
        ["motion:deslizar en (1) segs a x: (200) y: (0)", "motion:deslizar en (4) segs a x: (200) y: (0)"],
        ["motion:glide (1) secs to x: (200) y: (0)", "motion:glide (4) secs to x: (200) y: (0)"],
      ),
      answer: 0,
      hint: L("Si tardas menos en hacer el mismo camino…", "If you take less time for the same trip…"),
      explain: L("Con menos segundos llega antes: va más rápido.", "With fewer seconds it arrives sooner: it goes faster."),
    },
  ],
  scratch: {
    steps: L([
      "Si quieres, elige un objeto que nade, como un pez, y un fondo de mar.",
      "En Movimiento, arrastra “deslizar en (1) segs a x: () y: ()” y escribe x: -150, y: 0.",
      "Encaja debajo otro “deslizar en … segs a x: () y: ()” con 2 segundos, x: 150, y: 0.",
      "Encaja “deslizar en (1) segs a [posición aleatoria]”.",
      "Haz clic sobre el grupo de bloques.",
    ], [
      "If you like, choose a sprite that swims, like a fish, and a sea backdrop.",
      "In Motion, drag “glide (1) secs to x: () y: ()” and type x: -150, y: 0.",
      "Snap another “glide … secs to x: () y: ()” below it with 2 seconds, x: 150, y: 0.",
      "Snap “glide (1) secs to [random position]”.",
      "Click the stack of blocks.",
    ]),
    challenge: L("Haz que el pez visite 3 lugares y vuelva al centro, cada viaje con una velocidad distinta.", "Make the fish visit 3 places and come back to the center, each trip at a different speed."),
    expect: L("El pez viaja suavemente de un lugar a otro; cuantos más segundos, más despacio.", "The fish travels smoothly from place to place; the more seconds, the slower."),
    check: L([
      "Si salta en vez de viajar, revisa que usaste “deslizar” y no “ir a”.",
      "Si un viaje es instantáneo, revisa que los segundos no sean 0.",
    ], [
      "If it jumps instead of traveling, check that you used “glide” and not “go to”.",
      "If a trip is instant, check that the seconds are not 0.",
    ]),
  },
  unplugged: L("Cámara lenta: camina hasta la puerta contando un segundo, y después contando hasta cinco. Es el mismo camino con distinta velocidad.", "Slow motion: walk to the door counting to one, then counting to five. It's the same trip at a different speed."),
  family: L("Pregunte qué cambia al subir o bajar los segundos. Es una buena forma de hablar de velocidad.", "Ask what changes when the seconds go up or down. It's a nice way to talk about speed."),
};

lessonData.looksSay = {
  goal: L("Vas a hacer que un objeto hable y piense.", "You will make a sprite talk and think."),
  look: L([
    "Los bloques de Apariencia (la categoría morada) cambian cómo se ve el objeto. Dos de ellos lo hacen hablar.",
    "“decir [¡Hola!] durante (2) segundos” muestra un globo de diálogo y lo quita después de 2 segundos. “pensar” muestra un globo de nube, como cuando alguien piensa en silencio.",
    "Si pones varios “decir … durante” uno debajo del otro, el objeto habla por turnos: termina una frase antes de decir la siguiente.",
  ], [
    "Looks blocks (the purple category) change how the sprite looks. Two of them make it talk.",
    "“say [Hello!] for (2) seconds” shows a speech bubble and removes it after 2 seconds. “think” shows a cloud bubble, like when someone thinks quietly.",
    "If you stack several “say … for” blocks, the sprite talks in turns: it finishes one sentence before the next.",
  ]),
  program: L(
    ["looks:decir [¡Hola! Me llamo Leo.] durante (2) segundos", "looks:decir [Me gusta saltar.] durante (2) segundos", "looks:pensar [¿Qué hago ahora?] durante (2) segundos"],
    ["looks:say [Hi! My name is Leo.] for (2) seconds", "looks:say [I like jumping.] for (2) seconds", "looks:think [What should I do now?] for (2) seconds"],
  ),
  activities: [
    {
      id: "looks-say-bubbles",
      type: "match",
      prompt: L("Une cada bloque con lo que muestra.", "Match each block with what it shows."),
      pairs: L([
        ["looks:decir [¡Hola!] durante (2) segundos", "Un globo de diálogo que se quita solo"],
        ["looks:pensar [Mmm…] durante (2) segundos", "Un globo de nube que se quita solo"],
        ["looks:decir [¡Hola!]", "Un globo de diálogo que se queda"],
      ], [
        ["looks:say [Hello!] for (2) seconds", "A speech bubble that goes away by itself"],
        ["looks:think [Hmm…] for (2) seconds", "A cloud bubble that goes away by itself"],
        ["looks:say [Hello!]", "A speech bubble that stays"],
      ]),
      explain: L("Con “durante … segundos” el globo se va solo.", "With “for … seconds” the bubble goes away by itself."),
    },
    {
      id: "looks-say-order",
      type: "order",
      prompt: L("Ordena la conversación para que tenga sentido.", "Put the conversation in order so it makes sense."),
      blocks: L(
        ["looks:decir [¡Hola!] durante (2) segundos", "looks:decir [Me llamo Leo.] durante (2) segundos", "looks:decir [¿Y tú cómo te llamas?] durante (2) segundos", "looks:pensar [Ojalá me conteste.] durante (2) segundos"],
        ["looks:say [Hello!] for (2) seconds", "looks:say [My name is Leo.] for (2) seconds", "looks:say [What's your name?] for (2) seconds", "looks:think [I hope they answer.] for (2) seconds"],
      ),
      hint: L("Primero se saluda, luego se presenta, después pregunta y al final piensa.", "First it greets, then introduces itself, then asks, and last it thinks."),
      explain: L("Saludo, presentación, pregunta y un pensamiento: ¡una conversación!", "Greeting, introduction, question and a thought: a conversation!"),
    },
  ],
  scratch: {
    steps: L([
      "Elige tu objeto y haz clic en la categoría Apariencia.",
      "Arrastra “decir [¡Hola!] durante (2) segundos” y escribe un saludo.",
      "Encaja debajo dos “decir … durante (2) segundos” más: uno con tu nombre y otro con algo que te guste.",
      "Termina con “pensar [Mmm…] durante (2) segundos”.",
      "Haz clic sobre el grupo de bloques.",
    ], [
      "Choose your sprite and click the Looks category.",
      "Drag “say [Hello!] for (2) seconds” and type a greeting.",
      "Snap two more “say … for (2) seconds” below: one with your name and one with something you like.",
      "Finish with “think [Hmm…] for (2) seconds”.",
      "Click the stack of blocks.",
    ]),
    challenge: L("Haz que el objeto cuente un chiste: la pregunta con “decir”, un “pensar” corto y luego la respuesta.", "Make the sprite tell a joke: the question with “say”, a short “think”, and then the answer."),
    expect: L("El objeto dice cada frase en orden, una por una, y aparece un globo de nube cuando piensa.", "The sprite says each sentence in order, one at a time, and a cloud bubble appears when it thinks."),
    check: L([
      "Si las frases pasan demasiado rápido, revisa que usaste “decir … durante … segundos” y no solo “decir”.",
      "Si un globo se queda para siempre, cámbialo por la versión “durante … segundos”.",
    ], [
      "If the sentences go too fast, check that you used “say … for … seconds” and not just “say”.",
      "If a bubble stays forever, swap it for the “for … seconds” version.",
    ]),
  },
  unplugged: L("Hagan un cómic de tres viñetas con globos de diálogo y de pensamiento.", "Make a three-panel comic with speech and thought bubbles."),
  family: L("Es un buen momento para inventar un personaje con nombre, gustos y una forma de hablar.", "It's a good time to invent a character with a name, likes and a way of talking."),
};

lessonData.looksCostumes = {
  goal: L("Vas a hacer que un objeto camine cambiando de disfraz.", "You will make a sprite walk by changing its costume."),
  look: L([
    "Un disfraz es uno de los dibujos de un objeto. Muchos objetos traen varios disfraces casi iguales, por ejemplo con las piernas en distinta posición. Los ves en la pestaña Disfraces, arriba a la izquierda.",
    "“siguiente disfraz” cambia al dibujo que sigue. Si el objeto avanza y cambia de dibujo, parece que camina, como en un dibujo animado.",
    "Para que el ojo alcance a ver cada dibujo hay que esperar un poquito entre cambios. “esperar (1) segundos”, de la categoría Control (la naranja), pausa el programa ese tiempo.",
  ], [
    "A costume is one of a sprite's drawings. Many sprites come with several almost identical costumes, for example with the legs in different positions. You see them in the Costumes tab, at the top left.",
    "“next costume” switches to the next drawing. If the sprite moves and changes drawing, it looks like it walks, like a cartoon.",
    "For the eye to see each drawing, you need to wait a little between changes. “wait (1) seconds”, from the Control category (the orange one), pauses the program that long.",
  ]),
  program: L(
    ["motion:mover (10) pasos", "looks:siguiente disfraz", "control:esperar (0.2) segundos", "motion:mover (10) pasos", "looks:siguiente disfraz", "control:esperar (0.2) segundos"],
    ["motion:move (10) steps", "looks:next costume", "control:wait (0.2) seconds", "motion:move (10) steps", "looks:next costume", "control:wait (0.2) seconds"],
  ),
  caption: L("Dos pasos de caminata: avanza, cambia de dibujo, espera un poquito, y otra vez.", "Two walking steps: move, switch drawing, wait a little, and again."),
  terms: L([
    ["Disfraz", "Uno de los dibujos de un objeto."],
    ["Animación", "Dibujos que cambian rápido y parecen moverse."],
  ], [
    ["Costume", "One of a sprite's drawings."],
    ["Animation", "Drawings that change quickly and seem to move."],
  ]),
  activities: [
    {
      id: "looks-costumes-walk",
      type: "choice",
      prompt: L("Un objeto tiene dos disfraces: piernas juntas y piernas abiertas. ¿Qué bloque hace que parezca caminar mientras avanza?", "A sprite has two costumes: legs together and legs apart. Which block makes it look like walking as it moves?"),
      options: L(["looks:siguiente disfraz", "looks:cambiar tamaño por (10)", "looks:decir [¡Hola!]"], ["looks:next costume", "looks:change size by (10)", "looks:say [Hello!]"]),
      answer: 0,
      hint: L("Caminar es mover las piernas: cambiar de dibujo.", "Walking means moving the legs: changing drawing."),
      explain: L("Al cambiar de disfraz, las piernas se mueven.", "Changing costume moves the legs."),
    },
    {
      id: "looks-costumes-wait",
      type: "choice",
      prompt: L("Este programa cambia de disfraz tres veces, pero no se ve la animación. ¿Qué le falta entre cambio y cambio?", "This program changes costume three times, but you can't see the animation. What is missing between changes?"),
      program: L(["looks:siguiente disfraz", "looks:siguiente disfraz", "looks:siguiente disfraz"], ["looks:next costume", "looks:next costume", "looks:next costume"]),
      options: L(["control:esperar (0.2) segundos", "looks:mostrar", "motion:apuntar en dirección (90)"], ["control:wait (0.2) seconds", "looks:show", "motion:point in direction (90)"]),
      answer: 0,
      hint: L("Los cambios pasan tan rápido que el ojo no alcanza a verlos.", "The changes happen so fast the eye can't see them."),
      explain: L("Con una espera entre cambios, sí se ve cada dibujo.", "With a wait between changes, you can see each drawing."),
    },
  ],
  scratch: {
    steps: L([
      "Elige un objeto con dos disfraces o más. Revísalo en la pestaña Disfraces.",
      "Vuelve a la pestaña Código y arrastra “mover (10) pasos”.",
      "Encaja “siguiente disfraz” (Apariencia) y “esperar (1) segundos” (Control). Cambia el 1 por 0.2.",
      "Haz cuatro copias de esos tres bloques, una debajo de otra. Tip: clic derecho sobre el primero → Duplicar.",
      "Haz clic sobre el grupo de bloques.",
    ], [
      "Choose a sprite with two or more costumes. Check it in the Costumes tab.",
      "Go back to the Code tab and drag “move (10) steps”.",
      "Snap “next costume” (Looks) and “wait (1) seconds” (Control). Change 1 to 0.2.",
      "Make four copies of those three blocks, one below the other. Tip: right-click the first one → Duplicate.",
      "Click the stack of blocks.",
    ]),
    challenge: L("Cambia la espera a 0.5 y luego a 0.1. ¿Con cuál se ve más natural?", "Change the wait to 0.5 and then to 0.1. Which one looks more natural?"),
    expect: L("El objeto avanza a pasitos y mueve las piernas: parece que camina.", "The sprite moves in small steps and moves its legs: it looks like it walks."),
    check: L([
      "Si el dibujo no cambia, revisa en la pestaña Disfraces que tenga más de un disfraz.",
      "Si va muy rápido, aumenta la espera.",
    ], [
      "If the drawing doesn't change, check in the Costumes tab that it has more than one costume.",
      "If it goes too fast, make the wait longer.",
    ]),
  },
  unplugged: L("Haz un flipbook en la esquina de un cuaderno: dibuja una figura con las piernas en distinta posición en cada hoja y pásalas rápido.", "Make a flipbook in the corner of a notebook: draw a figure with its legs in a different position on each page and flip them quickly."),
  family: L("La animación es una ilusión: dibujos que cambian rápido. Más adelante, en la zona Repetir, se aprende a no copiar tantos bloques.", "Animation is an illusion: drawings that change quickly. Later, in the Repeat zone, they learn how not to copy so many blocks."),
};

lessonData.looksBackdrops = {
  goal: L("Vas a cambiar el fondo, el tamaño y hacer aparecer o desaparecer un objeto.", "You will change the backdrop and size, and make a sprite appear or disappear."),
  look: L([
    "El escenario también tiene sus dibujos: los fondos. Con “cambiar fondo a [ ]” eliges cuál se ve.",
    "El tamaño de un objeto se mide en porcentaje: 100 % es su tamaño normal. “cambiar tamaño por (10)” lo agranda un poco y con un número negativo lo achica. “fijar tamaño al (100) %” lo devuelve a su tamaño.",
    "“esconder” hace desaparecer al objeto y “mostrar” lo hace aparecer. Conviene empezar cada programa dejando todo como debe estar al inicio.",
  ], [
    "The stage has its own drawings too: backdrops. With “switch backdrop to [ ]” you choose which one shows.",
    "A sprite's size is a percentage: 100% is its normal size. “change size by (10)” makes it a bit bigger, and a negative number makes it smaller. “set size to (100) %” brings it back to normal.",
    "“hide” makes the sprite disappear and “show” makes it appear. It's good to start each program by putting everything back the way it should start.",
  ]),
  program: L(
    ["looks:cambiar fondo a [Bosque]", "looks:fijar tamaño al (100) %", "looks:mostrar", "control:esperar (1) segundos", "looks:cambiar tamaño por (50)"],
    ["looks:switch backdrop to [Forest]", "looks:set size to (100) %", "looks:show", "control:wait (1) seconds", "looks:change size by (50)"],
  ),
  caption: L("Empieza en el bosque, con su tamaño normal y visible; después de un segundo, crece.", "It starts in the forest, normal size and visible; after a second, it grows."),
  activities: [
    {
      id: "looks-backdrops-size",
      type: "choice",
      prompt: L("Un objeto está al 100 %. Después de este bloque, ¿qué tamaño tiene?", "A sprite is at 100%. After this block, what size is it?"),
      program: L(["looks:cambiar tamaño por (-20)"], ["looks:change size by (-20)"]),
      options: L(["80 %", "120 %", "20 %"], ["80%", "120%", "20%"]),
      answer: 0,
      hint: L("El signo menos lo achica.", "The minus sign makes it smaller."),
      explain: L("100 - 20 = 80 %.", "100 - 20 = 80%."),
    },
    {
      id: "looks-backdrops-match",
      type: "match",
      prompt: L("Une cada bloque con lo que hace.", "Match each block with what it does."),
      pairs: L([
        ["looks:esconder", "Desaparece"],
        ["looks:mostrar", "Aparece"],
        ["looks:fijar tamaño al (100) %", "Vuelve a su tamaño normal"],
      ], [
        ["looks:hide", "Disappears"],
        ["looks:show", "Appears"],
        ["looks:set size to (100) %", "Goes back to normal size"],
      ]),
      explain: L("Con estos bloques preparas cómo empieza todo.", "With these blocks you set up how everything starts."),
    },
  ],
  scratch: {
    steps: L([
      "Agrega dos fondos con “Elige un fondo”.",
      "Selecciona tu objeto. En Apariencia, arrastra “cambiar fondo a [ ]” y elige el primer fondo.",
      "Encaja “fijar tamaño al (100) %” y “mostrar”: así empieza siempre igual.",
      "Encaja “esperar (1) segundos” (Control) y “cambiar tamaño por (10)” con 50.",
      "Haz clic sobre el grupo de bloques.",
    ], [
      "Add two backdrops with “Choose a Backdrop”.",
      "Select your sprite. In Looks, drag “switch backdrop to [ ]” and choose the first backdrop.",
      "Snap “set size to (100) %” and “show”: this way it always starts the same.",
      "Snap “wait (1) seconds” (Control) and “change size by (10)” with 50.",
      "Click the stack of blocks.",
    ]),
    challenge: L("Agrega al final otro “esperar (1) segundos” y “cambiar fondo a [ ]” con el segundo fondo: la historia cambia de lugar.", "Add another “wait (1) seconds” and “switch backdrop to [ ]” with the second backdrop at the end: the story moves somewhere else."),
    expect: L("Aparece el primer fondo, el objeto empieza en su tamaño normal, crece después de un segundo y luego cambia el fondo.", "The first backdrop appears, the sprite starts at normal size, grows after a second, and then the backdrop changes."),
    check: L([
      "Si el objeto sigue enorme al volver a probar, revisa que “fijar tamaño al (100) %” esté al principio.",
      "Si no aparece, revisa que haya un “mostrar” al principio.",
    ], [
      "If the sprite is still huge when you try again, check that “set size to (100) %” is at the beginning.",
      "If it doesn't appear, check that there is a “show” at the beginning.",
    ]),
  },
  unplugged: L("Teatro con cajas: cambien el decorado de una obra de títeres en cada escena, y hagan que un títere entre y salga.", "Box theater: change the scenery of a puppet show in each scene, and make a puppet come in and go out."),
  family: L("Hablen del “estado inicial”: cómo debe estar todo cada vez que el programa empieza. Es una idea muy útil para los juegos.", "Talk about the “starting state”: how everything should be each time the program starts. It's a very useful idea for games."),
};
