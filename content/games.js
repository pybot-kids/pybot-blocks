// Zone 08 — My games. Guided projects that bring every idea together.

lessonData.gameCatch = {
  goal: L("Vas a crear un juego para atrapar fruta que cae.", "You will create a game to catch falling fruit."),
  look: L([
    "Una canasta abajo se mueve con las flechas (como en la página “¿Tecla presionada?”). Una fruta cae desde arriba en un lugar al azar.",
    "Si la canasta atrapa la fruta, suma un punto y la fruta vuelve a caer desde arriba. Si la fruta llega al suelo sin que la atrapen, también vuelve arriba, pero sin punto.",
    "Este es el programa de la fruta. “posición en y” (Movimiento) dice qué tan arriba o abajo está: menos de -170 es el suelo.",
  ], [
    "A basket at the bottom moves with the arrows (like on the “Is a key pressed?” page). A fruit falls from the top in a random place.",
    "If the basket catches the fruit, you score a point and the fruit falls again from the top. If the fruit reaches the ground without being caught, it also goes back up, but with no point.",
    "This is the fruit's program. “y position” (Motion) says how high or low it is: less than -170 is the ground.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "variables:dar a [puntos] el valor (0)", "motion:ir a x: {operators:número aleatorio entre (-200) y (200)} y: (170)", "control:por siempre {", "motion:sumar a y (-5)", "control:si ⟨sensing:¿tocando [Canasta]?⟩ entonces {", "variables:sumar a [puntos] (1)", "motion:ir a x: {operators:número aleatorio entre (-200) y (200)} y: (170)", "}", "control:si ⟨operators:{motion:posición en y} < (-170)⟩ entonces {", "motion:ir a x: {operators:número aleatorio entre (-200) y (200)} y: (170)", "}", "}"],
    ["events:when ⚑ clicked", "variables:set [score] to (0)", "motion:go to x: {operators:pick random (-200) to (200)} y: (170)", "control:forever {", "motion:change y by (-5)", "control:if ⟨sensing:touching [Basket]?⟩ then {", "variables:change [score] by (1)", "motion:go to x: {operators:pick random (-200) to (200)} y: (170)", "}", "control:if ⟨operators:{motion:y position} < (-170)⟩ then {", "motion:go to x: {operators:pick random (-200) to (200)} y: (170)", "}", "}"],
  ),
  caption: L("La fruta cae; si la atrapan suma un punto, y en los dos casos vuelve a caer desde arriba.", "The fruit falls; if caught it scores a point, and either way it falls again from the top."),
  activities: [
    {
      id: "game-catch-back",
      type: "choice",
      prompt: L("¿Por qué la fruta vuelve arriba justo después de sumar el punto?", "Why does the fruit go back up right after scoring?"),
      options: L(["Para que caiga otra fruta y no sume muchos puntos seguidos", "Para que el juego termine", "Para cambiar el fondo"], ["So another fruit falls and it doesn't score many points in a row", "So the game ends", "To change the backdrop"]),
      answer: 0,
      hint: L("Recuerda la Estrella de la página “Contar puntos”.", "Remember the Star on the “Keep score” page."),
      explain: L("Si se quedara tocando la canasta, sumaría sin parar.", "If it stayed touching the basket, it would keep scoring."),
    },
    {
      id: "game-catch-faster",
      type: "choice",
      prompt: L("La fruta cae muy despacio. ¿Qué cambias?", "The fruit falls too slowly. What do you change?"),
      options: L(["motion:sumar a y (-10)", "motion:sumar a y (5)", "variables:sumar a [puntos] (2)"], ["motion:change y by (-10)", "motion:change y by (5)", "variables:change [score] by (2)"]),
      answer: 0,
      hint: L("Cada vuelta del bucle baja ese número.", "Each round of the loop goes down by that number."),
      explain: L("Bajar 10 en cada vuelta es el doble de rápido.", "Going down 10 each round is twice as fast."),
    },
  ],
  scratch: {
    steps: L([
      "Misión 1: agrega una canasta y una fruta y llámalas Canasta y Fruta. Crea la variable “puntos”.",
      "Misión 2: en la Canasta, “al hacer clic en ⚑”, “ir a x: (0) y: (-150)” y un “por siempre” con dos “si” de flechas, con “sumar a x (8)” y “sumar a x (-8)”.",
      "Misión 3: en la Fruta, arma el programa de arriba, paso a paso.",
      "Misión 4: presiona la bandera y juega.",
    ], [
      "Mission 1: add a basket and a fruit and name them Basket and Fruit. Make the variable “score”.",
      "Mission 2: in the Basket, “when ⚑ clicked”, “go to x: (0) y: (-150)” and a “forever” with two arrow “if” blocks, with “change x by (8)” and “change x by (-8)”.",
      "Mission 3: in the Fruit, build the program above, step by step.",
      "Mission 4: press the flag and play.",
    ]),
    challenge: L("Agrega la cuenta regresiva de la página “Cronómetro”: ¿cuántas frutas atrapas en 30 segundos?", "Add the countdown from the “Timer” page: how many fruits can you catch in 30 seconds?"),
    expect: L("La fruta cae, la canasta la atrapa con las flechas y el puntaje sube.", "The fruit falls, the basket catches it with the arrows and the score goes up."),
    check: L([
      "Si la fruta no vuelve arriba al llegar al suelo, revisa el “<” y el número -170.",
      "Si nunca suma, revisa que el menú de “¿tocando?” diga “Canasta”.",
    ], [
      "If the fruit doesn't go back up at the ground, check the “<” and the number -170.",
      "If it never scores, check that the “touching?” menu says “Basket”.",
    ]),
  },
  unplugged: L("Atrapen pelotas de papel con una caja mientras alguien las deja caer desde distintos lugares.", "Catch paper balls with a box while someone drops them from different places."),
  family: L("Jueguen y cuenten los puntos juntos. ¿Qué haría el juego más difícil?", "Play and count the points together. What would make the game harder?"),
};

lessonData.gameMaze = {
  goal: L("Vas a crear un laberinto con paredes y una salida.", "You will create a maze with walls and an exit."),
  look: L([
    "El laberinto se dibuja en el fondo: paredes negras y una salida verde. El jugador es pequeño y se mueve suave con las flechas.",
    "Si toca una pared, vuelve al inicio. Si toca la salida, gana. Son las reglas de la página “Tocar un color”, juntas en un solo juego.",
  ], [
    "The maze is drawn on the backdrop: black walls and a green exit. The player is small and moves smoothly with the arrows.",
    "If it touches a wall, it goes back to the start. If it touches the exit, it wins. These are the rules from the “Touching a color” page, together in one game.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "looks:fijar tamaño al (40) %", "motion:ir a x: (-200) y: (-150)", "control:por siempre {", "control:si ⟨sensing:¿tecla [flecha derecha] presionada?⟩ entonces {", "motion:sumar a x (3)", "}", "control:si ⟨sensing:¿tecla [flecha izquierda] presionada?⟩ entonces {", "motion:sumar a x (-3)", "}", "control:si ⟨sensing:¿tecla [flecha arriba] presionada?⟩ entonces {", "motion:sumar a y (3)", "}", "control:si ⟨sensing:¿tecla [flecha abajo] presionada?⟩ entonces {", "motion:sumar a y (-3)", "}", "control:si ⟨sensing:¿tocando el color [negro]?⟩ entonces {", "motion:ir a x: (-200) y: (-150)", "}", "control:si ⟨sensing:¿tocando el color [verde]?⟩ entonces {", "looks:decir [¡Salí del laberinto!] durante (2) segundos", "control:detener [todos]", "}", "}"],
    ["events:when ⚑ clicked", "looks:set size to (40) %", "motion:go to x: (-200) y: (-150)", "control:forever {", "control:if ⟨sensing:key [right arrow] pressed?⟩ then {", "motion:change x by (3)", "}", "control:if ⟨sensing:key [left arrow] pressed?⟩ then {", "motion:change x by (-3)", "}", "control:if ⟨sensing:key [up arrow] pressed?⟩ then {", "motion:change y by (3)", "}", "control:if ⟨sensing:key [down arrow] pressed?⟩ then {", "motion:change y by (-3)", "}", "control:if ⟨sensing:touching color [black]?⟩ then {", "motion:go to x: (-200) y: (-150)", "}", "control:if ⟨sensing:touching color [green]?⟩ then {", "looks:say [I got out!] for (2) seconds", "control:stop [all]", "}", "}"],
  ),
  caption: L("Se mueve con las cuatro flechas; la pared negra lo regresa al inicio y la salida verde lo hace ganar.", "It moves with the four arrows; the black wall sends it back to the start and the green exit makes it win."),
  activities: [
    {
      id: "game-maze-wall",
      type: "choice",
      prompt: L("El jugador atraviesa las paredes sin volver al inicio. ¿Qué revisas?", "The player goes through the walls without going back to the start. What do you check?"),
      options: L(["Que el color del bloque sea el negro exacto de las paredes", "Que la salida sea más grande", "Que el jugador tenga más disfraces"], ["That the block's color is the exact black of the walls", "That the exit is bigger", "That the player has more costumes"]),
      answer: 0,
      hint: L("Usa el gotero, como en la página “Tocar un color”.", "Use the eyedropper, as on the “Touching a color” page."),
      explain: L("Con el color exacto, la pared lo detecta.", "With the exact color, the wall detects it."),
    },
    {
      id: "game-maze-small",
      type: "choice",
      prompt: L("¿Por qué el programa empieza con “fijar tamaño al (40) %”?", "Why does the program start with “set size to (40) %”?"),
      options: L(["Para que el jugador quepa por los pasillos", "Para que corra más rápido", "Para que suene un sonido"], ["So the player fits through the corridors", "So it runs faster", "So a sound plays"]),
      answer: 0,
      hint: L("Piensa en pasillos angostos.", "Think about narrow corridors."),
      explain: L("Un jugador grande tocaría las paredes todo el tiempo.", "A big player would touch the walls all the time."),
    },
  ],
  scratch: {
    steps: L([
      "Misión 1: en el escenario, pestaña Fondos, dibuja paredes negras con líneas gruesas y una salida verde.",
      "Misión 2: elige un jugador pequeño y arma “al hacer clic en ⚑”, “fijar tamaño al (40) %” e “ir a x: (-200) y: (-150)” (ajusta los números a la entrada de tu laberinto).",
      "Misión 3: agrega el “por siempre” con los cuatro “si” de flechas.",
      "Misión 4: agrega los dos “si” de colores, usando el gotero para elegir el negro y el verde exactos.",
    ], [
      "Mission 1: on the stage, Backdrops tab, draw black walls with thick lines and a green exit.",
      "Mission 2: choose a small player and build “when ⚑ clicked”, “set size to (40) %” and “go to x: (-200) y: (-150)” (adjust the numbers to your maze's entrance).",
      "Mission 3: add the “forever” with the four arrow “if” blocks.",
      "Mission 4: add the two color “if” blocks, using the eyedropper to pick the exact black and green.",
    ]),
    challenge: L("Haz un segundo nivel: al tocar la salida, en vez de detener todo, cambia a otro fondo de laberinto y vuelve al inicio.", "Make a second level: when it touches the exit, instead of stopping everything, switch to another maze backdrop and go back to the start."),
    expect: L("El jugador recorre el laberinto con las flechas; si toca una pared vuelve al inicio y al llegar a la salida gana.", "The player goes through the maze with the arrows; if it touches a wall it goes back to the start, and at the exit it wins."),
    check: L([
      "Si vuelve al inicio sin tocar nada, revisa que el punto de inicio no esté sobre una pared.",
      "Si no cabe por los pasillos, achica el jugador o ensancha los pasillos.",
    ], [
      "If it goes back to the start without touching anything, check that the start point isn't on a wall.",
      "If it doesn't fit through the corridors, make the player smaller or the corridors wider.",
    ]),
  },
  unplugged: L("Dibujen un laberinto con tiza en el patio y recórranlo con los ojos tapados, guiados solo con órdenes.", "Draw a maze with chalk in the yard and walk it blindfolded, guided only by spoken orders."),
  family: L("Prueben su laberinto y díganle qué parte fue la más difícil. Esa es una gran ayuda para mejorarlo.", "Try the maze and say which part was hardest. That's great help for improving it."),
};

lessonData.gameQuiz = {
  goal: L("Vas a crear un juego de preguntas con puntaje.", "You will create a quiz game with a score."),
  look: L([
    "Un juego de preguntas usa todo lo de la zona Recordar: preguntar, comparar la respuesta, sumar puntos y mostrar el resultado.",
    "Para cada pregunta: si la respuesta es igual a la correcta, suma un punto y felicita; si no, dice cuál era.",
    "Scratch no distingue mayúsculas al comparar con “=”: “Verde” y “verde” son iguales. Pero los espacios y las tildes sí cuentan.",
  ], [
    "A quiz uses everything from the Remember zone: asking, comparing the answer, adding points and showing the result.",
    "For each question: if the answer equals the right one, add a point and cheer; if not, say what it was.",
    "Scratch ignores capital letters when comparing with “=”: “Green” and “green” are equal. But spaces and accents do count.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "variables:dar a [puntos] el valor (0)", "sensing:preguntar [¿Cuánto es 7 × 8?] y esperar", "control:si ⟨operators:{sensing:respuesta} = (56)⟩ entonces {", "variables:sumar a [puntos] (1)", "looks:decir [¡Bien!] durante (1) segundos", "} si no {", "looks:decir [Era 56.] durante (2) segundos", "}", "sensing:preguntar [¿Cuántas patas tiene una araña?] y esperar", "control:si ⟨operators:{sensing:respuesta} = (8)⟩ entonces {", "variables:sumar a [puntos] (1)", "looks:decir [¡Bien!] durante (1) segundos", "} si no {", "looks:decir [Eran 8.] durante (2) segundos", "}", "looks:decir {operators:unir [Puntos: ] {variables:puntos}} durante (3) segundos"],
    ["events:when ⚑ clicked", "variables:set [score] to (0)", "sensing:ask [What is 7 × 8?] and wait", "control:if ⟨operators:{sensing:answer} = (56)⟩ then {", "variables:change [score] by (1)", "looks:say [Well done!] for (1) seconds", "} else {", "looks:say [It was 56.] for (2) seconds", "}", "sensing:ask [How many legs does a spider have?] and wait", "control:if ⟨operators:{sensing:answer} = (8)⟩ then {", "variables:change [score] by (1)", "looks:say [Well done!] for (1) seconds", "} else {", "looks:say [It was 8.] for (2) seconds", "}", "looks:say {operators:join [Score: ] {variables:score}} for (3) seconds"],
  ),
  caption: L("Dos preguntas, cada una con su “si … si no”, y al final el puntaje.", "Two questions, each with its own “if … else”, and the score at the end."),
  activities: [
    {
      id: "game-quiz-score",
      type: "choice",
      prompt: L("Respondes 56 y luego 6. ¿Qué puntaje muestra al final?", "You answer 56 and then 6. What score does it show at the end?"),
      options: L(["Puntos: 1", "Puntos: 2", "Puntos: 0"], ["Score: 1", "Score: 2", "Score: 0"]),
      answer: 0,
      hint: L("Solo la primera respuesta es correcta.", "Only the first answer is right."),
      explain: L("Una correcta suma 1; la otra no suma.", "One right answer adds 1; the other doesn't."),
    },
    {
      id: "game-quiz-equal",
      type: "match",
      prompt: L("Si la respuesta correcta es “verde”, ¿qué pasa con cada respuesta escrita?", "If the right answer is “green”, what happens with each typed answer?"),
      pairs: L([
        ["Verde", "Cuenta: las mayúsculas no importan"],
        ["verde ", "No cuenta: tiene un espacio de más"],
        ["azul", "No cuenta: es otra palabra"],
      ], [
        ["Green", "Counts: capitals don't matter"],
        ["green ", "Doesn't count: it has an extra space"],
        ["blue", "Doesn't count: it's another word"],
      ]),
      explain: L("Para Scratch, “=” ignora mayúsculas, pero no espacios.", "For Scratch, “=” ignores capitals, but not spaces."),
    },
  ],
  scratch: {
    steps: L([
      "Misión 1: crea la variable “puntos”. Arma “al hacer clic en ⚑” y “dar a [puntos] el valor (0)”.",
      "Misión 2: arma la primera pregunta con “preguntar … y esperar” y un “si … si no” con “respuesta = (56)”.",
      "Misión 3: haz clic derecho sobre el “preguntar” → Duplicar para copiar la pregunta con su “si … si no”, y cámbiale la pregunta y la respuesta.",
      "Misión 4: al final, “decir” con “unir [Puntos: ]” y la variable “puntos”.",
    ], [
      "Mission 1: make the variable “score”. Build “when ⚑ clicked” and “set [score] to (0)”.",
      "Mission 2: build the first question with “ask … and wait” and an “if … else” with “answer = (56)”.",
      "Mission 3: right-click the “ask” → Duplicate to copy the question with its “if … else”, and change the question and answer.",
      "Mission 4: at the end, “say” with “join [Score: ]” and the “score” variable.",
    ]),
    challenge: L("Haz un quiz de 5 preguntas sobre una materia del colegio y pruébalo con alguien de tu familia.", "Make a 5-question quiz about a school subject and try it with someone in your family."),
    expect: L("El juego hace las preguntas, felicita o corrige, y al final muestra los puntos.", "The game asks the questions, cheers or corrects, and shows the score at the end."),
    check: L([
      "Si una respuesta correcta no cuenta, revisa espacios y tildes en el bloque “=”.",
      "Si el puntaje no vuelve a 0, revisa “dar a [puntos] el valor (0)” al principio.",
    ], [
      "If a right answer doesn't count, check spaces and accents in the “=” block.",
      "If the score doesn't go back to 0, check “set [score] to (0)” at the start.",
    ]),
  },
  unplugged: L("Concurso familiar: cada persona escribe tres preguntas en papelitos y se lleva el puntaje con frijoles.", "Family quiz: each person writes three questions on slips of paper and the score is kept with beans."),
  family: L("Puede servir para repasar el colegio. Pidan que les haga el quiz a ustedes.", "It can help review school topics. Ask to be quizzed yourselves."),
};

lessonData.gamePong = {
  goal: L("Vas a crear el juego de la pelota y la paleta.", "You will create the ball and paddle game."),
  look: L([
    "La paleta sigue al ratón de lado a lado: “posición x del ratón” (Sensores) dice dónde está el ratón.",
    "La pelota rebota en los bordes. Cuando toca la paleta, rebota hacia arriba: su nueva dirección es 180 menos la dirección que traía. Si cae por debajo de la paleta, pierdes.",
    "Este es el programa de la pelota:",
  ], [
    "The paddle follows the mouse from side to side: “mouse x” (Sensing) says where the mouse is.",
    "The ball bounces off the edges. When it touches the paddle, it bounces up: its new direction is 180 minus the direction it had. If it falls below the paddle, you lose.",
    "This is the ball's program:",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "motion:ir a x: (0) y: (100)", "motion:apuntar en dirección (135)", "control:por siempre {", "motion:mover (6) pasos", "motion:si toca un borde, rebotar", "control:si ⟨sensing:¿tocando [Paleta]?⟩ entonces {", "motion:apuntar en dirección {operators:(180) - {motion:dirección}}", "motion:mover (6) pasos", "}", "control:si ⟨operators:{motion:posición en y} < (-160)⟩ entonces {", "looks:decir [¡Perdiste!] durante (2) segundos", "control:detener [todos]", "}", "}"],
    ["events:when ⚑ clicked", "motion:go to x: (0) y: (100)", "motion:point in direction (135)", "control:forever {", "motion:move (6) steps", "motion:if on edge, bounce", "control:if ⟨sensing:touching [Paddle]?⟩ then {", "motion:point in direction {operators:(180) - {motion:direction}}", "motion:move (6) steps", "}", "control:if ⟨operators:{motion:y position} < (-160)⟩ then {", "looks:say [You lost!] for (2) seconds", "control:stop [all]", "}", "}"],
  ),
  caption: L("La pelota empieza bajando en diagonal (135); rebota en los bordes y en la paleta, y si cae, se acaba.", "The ball starts going down diagonally (135); it bounces off the edges and the paddle, and if it falls, it's over."),
  activities: [
    {
      id: "game-pong-paddle",
      type: "choice",
      prompt: L("¿Qué programa hace que la paleta siga al ratón?", "Which program makes the paddle follow the mouse?"),
      program: L(["events:al hacer clic en ⚑", "motion:ir a x: (0) y: (-150)", "control:por siempre {", "motion:dar a x el valor {sensing:posición x del ratón}", "}"], ["events:when ⚑ clicked", "motion:go to x: (0) y: (-150)", "control:forever {", "motion:set x to {sensing:mouse x}", "}"]),
      options: L(["Este: su x copia la x del ratón todo el tiempo", "Ninguno: la paleta no se puede mover", "Uno con “al presionar tecla”"], ["This one: its x copies the mouse's x all the time", "None: the paddle can't move", "One with “when key pressed”"]),
      answer: 0,
      hint: L("Mira qué valor recibe la x en cada vuelta.", "Look at which value x gets each round."),
      explain: L("La paleta solo se mueve de lado: su y no cambia.", "The paddle only moves sideways: its y doesn't change."),
    },
    {
      id: "game-pong-bounce",
      type: "choice",
      prompt: L("La pelota baja con dirección 135 y toca la paleta. ¿Hacia dónde sale con 180 menos su dirección?", "The ball comes down with direction 135 and touches the paddle. Where does it go with 180 minus its direction?"),
      options: L(["45: hacia arriba y a la derecha", "135: sigue bajando", "180: recto hacia abajo"], ["45: up and to the right", "135: it keeps going down", "180: straight down"]),
      answer: 0,
      hint: L("180 - 135 = ?", "180 - 135 = ?"),
      explain: L("180 - 135 = 45, que apunta arriba a la derecha.", "180 - 135 = 45, which points up and to the right."),
    },
  ],
  scratch: {
    steps: L([
      "Misión 1: agrega una pelota y una paleta (puedes dibujar un rectángulo) y llámalas Pelota y Paleta.",
      "Misión 2: en la Paleta, “al hacer clic en ⚑”, “ir a x: (0) y: (-150)” y un “por siempre” con “dar a x el valor ( )” y adentro “posición x del ratón”.",
      "Misión 3: en la Pelota, arma el programa de arriba. Para “180 - dirección”, usa “( ) - ( )” de Operadores y “dirección” de Movimiento.",
      "Misión 4: presiona la bandera y juega moviendo el ratón.",
    ], [
      "Mission 1: add a ball and a paddle (you can draw a rectangle) and name them Ball and Paddle.",
      "Mission 2: in the Paddle, “when ⚑ clicked”, “go to x: (0) y: (-150)” and a “forever” with “set x to ( )” and “mouse x” inside.",
      "Mission 3: in the Ball, build the program above. For “180 - direction”, use “( ) - ( )” from Operators and “direction” from Motion.",
      "Mission 4: press the flag and play by moving the mouse.",
    ]),
    challenge: L("Agrega una variable “rebotes” que sume 1 cada vez que la pelota toca la paleta.", "Add a “bounces” variable that adds 1 each time the ball touches the paddle."),
    expect: L("La paleta sigue al ratón, la pelota rebota en ella y en los bordes, y si se te escapa, pierdes.", "The paddle follows the mouse, the ball bounces off it and the edges, and if you miss it, you lose."),
    check: L([
      "Si la pelota se queda pegada a la paleta, revisa el “mover (6) pasos” después del cambio de dirección.",
      "Si pierdes sin que caiga, revisa que la paleta esté más arriba de -160.",
    ], [
      "If the ball sticks to the paddle, check the “move (6) steps” after the direction change.",
      "If you lose without it falling, check that the paddle is above -160.",
    ]),
  },
  unplugged: L("Jueguen con una pelota contra la pared: ¿hacia dónde sale si llega en diagonal?", "Play with a ball against a wall: where does it go if it arrives at an angle?"),
  family: L("Es un clásico de los videojuegos. Cuénteles a qué jugaban ustedes de niños.", "It's a video game classic. Tell them what games you played as kids."),
};

lessonData.gameClones = {
  goal: L("Vas a crear muchos objetos iguales con clones.", "You will create many identical sprites with clones."),
  look: L([
    "Un clon es una copia de un objeto que se crea mientras el programa corre. Sirve para lluvias de estrellas, enemigos o burbujas, sin dibujar cien objetos.",
    "“crear clon de [mí mismo]” hace una copia. Cada copia empieza su propio programa con “al comenzar como clon”. “eliminar este clon” la borra cuando ya no sirve.",
    "El objeto original suele quedarse escondido y solo fabrica clones, como un molde.",
  ], [
    "A clone is a copy of a sprite that's created while the program runs. It's for star showers, enemies or bubbles, without drawing a hundred sprites.",
    "“create clone of [myself]” makes a copy. Each copy starts its own program with “when I start as a clone”. “delete this clone” removes it when it's no longer needed.",
    "The original sprite usually stays hidden and only makes clones, like a mold.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "looks:esconder", "control:por siempre {", "control:crear clon de [mí mismo]", "control:esperar (0.5) segundos", "}", "---", "control:al comenzar como clon", "motion:ir a x: {operators:número aleatorio entre (-220) y (220)} y: (170)", "looks:mostrar", "control:por siempre {", "motion:sumar a y (-4)", "control:si ⟨operators:{motion:posición en y} < (-170)⟩ entonces {", "control:eliminar este clon", "}", "}"],
    ["events:when ⚑ clicked", "looks:hide", "control:forever {", "control:create clone of [myself]", "control:wait (0.5) seconds", "}", "---", "control:when I start as a clone", "motion:go to x: {operators:pick random (-220) to (220)} y: (170)", "looks:show", "control:forever {", "motion:change y by (-4)", "control:if ⟨operators:{motion:y position} < (-170)⟩ then {", "control:delete this clone", "}", "}"],
  ),
  caption: L("El molde escondido crea una estrella cada medio segundo; cada estrella cae y se borra al llegar abajo.", "The hidden mold creates a star every half second; each star falls and is deleted at the bottom."),
  terms: L([["Clon", "Una copia de un objeto creada mientras el programa corre."]], [["Clone", "A copy of a sprite created while the program runs."]]),
  activities: [
    {
      id: "game-clones-count",
      type: "choice",
      prompt: L("Con ese programa, ¿cuántas estrellas se crean en 5 segundos?", "With that program, how many stars are created in 5 seconds?"),
      options: L(["10", "5", "1"], ["10", "5", "1"]),
      answer: 0,
      hint: L("Una cada medio segundo…", "One every half second…"),
      explain: L("2 por segundo × 5 segundos = 10 estrellas.", "2 per second × 5 seconds = 10 stars."),
    },
    {
      id: "game-clones-delete",
      type: "choice",
      prompt: L("¿Por qué cada estrella se elimina al llegar abajo?", "Why is each star deleted when it reaches the bottom?"),
      options: L(["Para no llenar el escenario de clones que ya no se ven", "Para que suene un sonido", "Para cambiar el fondo"], ["So the stage doesn't fill up with clones you can't see", "So a sound plays", "To change the backdrop"]),
      answer: 0,
      hint: L("Scratch tiene un límite de clones.", "Scratch has a clone limit."),
      explain: L("Borrar los que ya no sirven deja espacio para nuevos.", "Deleting unused ones leaves room for new ones."),
    },
  ],
  scratch: {
    steps: L([
      "Misión 1: elige un objeto estrella. Arma “al hacer clic en ⚑”, “esconder” y un “por siempre” con “crear clon de [mí mismo]” y “esperar (0.5) segundos”.",
      "Misión 2: en el mismo objeto, otro programa con “al comenzar como clon” (Control), “ir a x: ( ) y: (170)” con un número aleatorio entre -220 y 220 en x, y “mostrar”.",
      "Misión 3: debajo, un “por siempre” con “sumar a y (-4)” y un “si” que elimine el clon cuando “posición en y” sea menor que -170.",
      "Misión 4: presiona la bandera y mira la lluvia de estrellas.",
    ], [
      "Mission 1: choose a star sprite. Build “when ⚑ clicked”, “hide” and a “forever” with “create clone of [myself]” and “wait (0.5) seconds”.",
      "Mission 2: in the same sprite, another program with “when I start as a clone” (Control), “go to x: ( ) y: (170)” with a random number from -220 to 220 for x, and “show”.",
      "Mission 3: below, a “forever” with “change y by (-4)” and an “if” that deletes the clone when “y position” is less than -170.",
      "Mission 4: press the flag and watch the star shower.",
    ]),
    challenge: L("Lleva los clones a “Atrapa la fruta”: que caigan muchas frutas a la vez y cada una se elimine al ser atrapada.", "Bring clones to “Catch the fruit”: make many fruits fall at once and each one get deleted when caught."),
    expect: L("Caen estrellas sin parar desde lugares distintos y desaparecen al llegar abajo.", "Stars keep falling from different places and disappear at the bottom."),
    check: L([
      "Si ves una estrella quieta arriba, es el original: revisa que tenga “esconder”.",
      "Si los clones no se mueven, revisa que su programa empiece con “al comenzar como clon”.",
    ], [
      "If you see a still star at the top, it's the original: check that it has “hide”.",
      "If the clones don't move, check that their program starts with “when I start as a clone”.",
    ]),
  },
  unplugged: L("Usen un sello o una plantilla para hacer muchas estrellas iguales, y luego pinten cada una distinta.", "Use a stamp or a stencil to make many identical stars, then paint each one differently."),
  family: L("Es una idea avanzada; está bien si toma más de una sesión.", "It's an advanced idea; it's fine if it takes more than one session."),
};

lessonData.gameMine = {
  goal: L("Vas a diseñar y crear tu propio juego.", "You will design and create your own game."),
  look: L([
    "Ya sabes mover objetos, usar teclas, repetir, decidir, contar puntos, hacer sonar música y crear clones. ¡Con eso se puede hacer casi cualquier juego!",
    "Antes de programar, planea en papel: ¿de qué se trata? ¿Cómo se gana? ¿Cómo se pierde? ¿Qué objetos hay y qué hace cada uno?",
    "Después programa una parte a la vez, pruébala, y pide a alguien que juegue. Lo que te digan te ayuda a mejorar.",
  ], [
    "You know how to move sprites, use keys, repeat, decide, keep score, play music and create clones. With that you can make almost any game!",
    "Before coding, plan on paper: what is it about? How do you win? How do you lose? Which sprites are there and what does each one do?",
    "Then code one part at a time, test it, and ask someone to play. What they tell you helps you improve.",
  ]),
  activities: [
    {
      id: "game-mine-tools",
      type: "match",
      prompt: L("Une cada idea de tu juego con lo que usarías en Scratch.", "Match each idea for your game with what you'd use in Scratch."),
      pairs: L([
        ["Quiero contar puntos", "Una variable"],
        ["Algo debe pasar todo el tiempo", "control:por siempre"],
        ["El juego debe decidir", "control:si ⟨ ⟩ entonces"],
        ["Quiero muchos objetos iguales", "Clones"],
      ], [
        ["I want to keep score", "A variable"],
        ["Something must happen all the time", "control:forever"],
        ["The game must decide", "control:if ⟨ ⟩ then"],
        ["I want many identical sprites", "Clones"],
      ]),
      explain: L("Ya tienes todas las herramientas.", "You already have all the tools."),
    },
    {
      id: "game-mine-steps",
      type: "order",
      prompt: L("Ordena los pasos para crear tu juego.", "Put the steps to create your game in order."),
      blocks: L(
        ["Pienso la idea y las reglas", "Dibujo los objetos y el fondo", "Programo y pruebo una parte a la vez", "Pido a alguien que lo juegue", "Mejoro una cosa"],
        ["I think of the idea and the rules", "I draw the sprites and backdrop", "I code and test one part at a time", "I ask someone to play it", "I improve one thing"],
      ),
      hint: L("Primero se piensa, al final se mejora.", "First you think, last you improve."),
      explain: L("Así trabajan quienes crean videojuegos.", "That's how video game creators work."),
    },
  ],
  scratch: {
    steps: L([
      "En una hoja, escribe la idea, cómo se gana y cómo se pierde.",
      "En Scratch, agrega los objetos y el fondo.",
      "Programa primero el movimiento del jugador y pruébalo.",
      "Agrega una regla a la vez: puntos, obstáculos, tiempo… y prueba después de cada una.",
      "Pide a alguien de tu familia que juegue y anota una cosa para mejorar.",
    ], [
      "On a sheet, write the idea, how you win and how you lose.",
      "In Scratch, add the sprites and the backdrop.",
      "Code the player's movement first and test it.",
      "Add one rule at a time: points, obstacles, time… and test after each one.",
      "Ask someone in your family to play and write down one thing to improve.",
    ]),
    challenge: L("Si una persona adulta está de acuerdo, comparte tu juego en Scratch con un título y unas instrucciones claras.", "If a grown-up agrees, share your game on Scratch with a title and clear instructions."),
    expect: L("Tienes un juego tuyo que alguien más pudo jugar.", "You have a game of your own that someone else could play."),
    check: L([
      "Si algo falla, vuelve a la página del camino que explica esa idea.",
      "Si el juego es muy difícil o muy fácil, cambia un número: velocidad, tiempo o tamaño.",
    ], [
      "If something fails, go back to the path page that explains that idea.",
      "If the game is too hard or too easy, change one number: speed, time or size.",
    ]),
  },
  unplugged: L("Inventen un juego de mesa con reglas escritas y jueguen una partida. ¿Hubo alguna regla confusa?", "Invent a board game with written rules and play a round. Was any rule confusing?"),
  family: L("Jugar su juego es el mejor halago. Pregunte qué fue lo más difícil de programar y cómo lo resolvió.", "Playing their game is the best compliment. Ask what was hardest to code and how they solved it."),
};
