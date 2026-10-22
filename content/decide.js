// Zone 04 — Decide. Conditions are written ⟨sensing:…⟩ inside an if block.

lessonData.ifTouching = {
  goal: L("Vas a hacer que un programa decida qué hacer.", "You will make a program decide what to do."),
  look: L([
    "Un condicional deja que el programa decida: “si ⟨ ⟩ entonces” hace lo de adentro solo cuando la condición es verdadera.",
    "Las condiciones tienen forma de hexágono. Muchas están en Sensores (la categoría celeste), como “¿tocando [borde]?”, que es verdadera cuando el objeto toca el borde del escenario.",
    "Como el programa debe revisar todo el tiempo, el “si” va adentro de un “por siempre”.",
  ], [
    "A conditional lets the program decide: “if ⟨ ⟩ then” does what's inside only when the condition is true.",
    "Conditions are six-sided. Many are in Sensing (the light blue category), like “touching [edge]?”, which is true when the sprite touches the edge of the stage.",
    "Since the program must check all the time, the “if” goes inside a “forever”.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:por siempre {", "motion:mover (5) pasos", "control:si ⟨sensing:¿tocando [borde]?⟩ entonces {", "looks:decir [¡Ay!] durante (1) segundos", "motion:girar ↻ (180) grados", "}", "}"],
    ["events:when ⚑ clicked", "control:forever {", "motion:move (5) steps", "control:if ⟨sensing:touching [edge]?⟩ then {", "looks:say [Ouch!] for (1) seconds", "motion:turn ↻ (180) degrees", "}", "}"],
  ),
  caption: L("Avanza sin parar; cada vez que toca el borde, dice “¡Ay!” y se da la vuelta.", "It keeps moving; each time it touches the edge, it says “Ouch!” and turns around."),
  terms: L([["Condición", "Una pregunta que es verdadera o falsa."]], [["Condition", "A question that is true or false."]]),
  activities: [
    {
      id: "if-touching-when",
      type: "choice",
      prompt: L("¿Cuándo dice “¡Ay!” este objeto?", "When does this sprite say “Ouch!”?"),
      program: L(
        ["events:al hacer clic en ⚑", "control:por siempre {", "motion:mover (5) pasos", "control:si ⟨sensing:¿tocando [borde]?⟩ entonces {", "looks:decir [¡Ay!] durante (1) segundos", "motion:girar ↻ (180) grados", "}", "}"],
        ["events:when ⚑ clicked", "control:forever {", "motion:move (5) steps", "control:if ⟨sensing:touching [edge]?⟩ then {", "looks:say [Ouch!] for (1) seconds", "motion:turn ↻ (180) degrees", "}", "}"],
      ),
      options: L(["Cada vez que toca el borde", "Todo el tiempo", "Nunca"], ["Each time it touches the edge", "All the time", "Never"]),
      answer: 0,
      hint: L("Lo de adentro del “si” solo pasa cuando la condición es verdadera.", "What's inside the “if” only happens when the condition is true."),
      explain: L("Solo cuando “¿tocando [borde]?” es verdadera.", "Only when “touching [edge]?” is true."),
    },
    {
      id: "if-touching-forever",
      type: "choice",
      prompt: L("Este programa debería decir “¡Te atrapé!” al tocar la Pelota, pero nunca lo dice, aunque la toque más tarde. ¿Qué falta?", "This program should say “Got you!” when it touches the Ball, but it never does, even if it touches it later. What's missing?"),
      program: L(
        ["events:al hacer clic en ⚑", "control:si ⟨sensing:¿tocando [Pelota]?⟩ entonces {", "looks:decir [¡Te atrapé!] durante (1) segundos", "}"],
        ["events:when ⚑ clicked", "control:if ⟨sensing:touching [Ball]?⟩ then {", "looks:say [Got you!] for (1) seconds", "}"],
      ),
      options: L(["Un “por siempre” alrededor, para revisar todo el tiempo", "Un fondo nuevo", "Cambiar el color del objeto"], ["A “forever” around it, to check all the time", "A new backdrop", "Changing the sprite's color"]),
      answer: 0,
      hint: L("Sin bucle, el “si” se revisa una sola vez, justo al presionar la bandera.", "Without a loop, the “if” is checked only once, right when the flag is pressed."),
      explain: L("Dentro de “por siempre”, la pregunta se hace una y otra vez.", "Inside “forever”, the question is asked again and again."),
    },
  ],
  scratch: {
    steps: L([
      "Arma “al hacer clic en ⚑” y “por siempre”.",
      "Adentro, encaja “mover (10) pasos” y cambia el 10 por 5.",
      "Debajo, todavía adentro del bucle, encaja “si ⟨ ⟩ entonces” (Control).",
      "Arrastra “¿tocando [puntero del ratón]?” (Sensores) al hueco de seis lados y en su menú elige “borde”.",
      "Adentro del “si”: “decir [¡Ay!] durante (1) segundos” y “girar ↻ (180) grados”.",
      "Presiona la bandera verde.",
    ], [
      "Build “when ⚑ clicked” and “forever”.",
      "Inside, snap “move (10) steps” and change 10 to 5.",
      "Below it, still inside the loop, snap “if ⟨ ⟩ then” (Control).",
      "Drag “touching [mouse-pointer]?” (Sensing) into the six-sided slot and choose “edge” in its menu.",
      "Inside the “if”: “say [Ouch!] for (1) seconds” and “turn ↻ (180) degrees”.",
      "Press the green flag.",
    ]),
    challenge: L("Agrega otro objeto en el camino y un segundo “si” con “¿tocando [ese objeto]?” para que diga “¡Choqué!” al tocarlo.", "Add another sprite on the way and a second “if” with “touching [that sprite]?” so it says “Bump!” when it touches it."),
    expect: L("El objeto avanza; al llegar al borde dice “¡Ay!” y se va hacia el otro lado.", "The sprite moves; when it reaches the edge it says “Ouch!” and heads the other way."),
    check: L([
      "Si no reacciona, revisa que el “si” esté adentro del “por siempre”.",
      "Si queda temblando en el borde, revisa que el giro sea de 180 grados.",
    ], [
      "If it doesn't react, check that the “if” is inside the “forever”.",
      "If it shakes at the edge, check that the turn is 180 degrees.",
    ]),
  },
  unplugged: L("La lava: si alguien pisa el “piso de lava” (un papel rojo), vuelve al inicio. La pregunta “¿estoy tocando la lava?” se revisa todo el tiempo.", "The floor is lava: if someone steps on the “lava” (a red paper), they go back to the start. The question “am I touching the lava?” is checked all the time."),
  family: L("Los condicionales son las reglas del juego. Pregunte: “¿qué regla tiene tu juego favorito?”.", "Conditionals are the rules of the game. Ask: “what rule does your favorite game have?”."),
};

lessonData.ifElse = {
  goal: L("Vas a elegir entre dos caminos.", "You will choose between two paths."),
  look: L([
    "“si ⟨ ⟩ entonces … si no …” tiene dos bocas: la de arriba se hace cuando la condición es verdadera, y la de abajo cuando es falsa. Siempre pasa una de las dos.",
    "Sirve para elegir entre dos caminos, como en un semáforo: si está en rojo, frenas; si no, sigues.",
  ], [
    "“if ⟨ ⟩ then … else …” has two mouths: the top one runs when the condition is true, and the bottom one when it's false. One of the two always happens.",
    "It's for choosing between two paths, like at a traffic light: if it's red, you stop; else, you go.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:por siempre {", "control:si ⟨sensing:¿tocando [puntero del ratón]?⟩ entonces {", "looks:decir [¡Me haces cosquillas!]", "} si no {", "looks:decir [Tócame con el ratón.]", "}", "}"],
    ["events:when ⚑ clicked", "control:forever {", "control:if ⟨sensing:touching [mouse-pointer]?⟩ then {", "looks:say [That tickles!]", "} else {", "looks:say [Touch me with the mouse.]", "}", "}"],
  ),
  caption: L("Con el puntero del ratón encima dice una cosa; si no, dice otra.", "With the mouse pointer on it, it says one thing; otherwise, another."),
  activities: [
    {
      id: "if-else-false",
      type: "choice",
      prompt: L("¿Qué dice este objeto cuando el puntero del ratón NO lo toca?", "What does this sprite say when the mouse pointer is NOT touching it?"),
      program: L(
        ["events:al hacer clic en ⚑", "control:por siempre {", "control:si ⟨sensing:¿tocando [puntero del ratón]?⟩ entonces {", "looks:decir [¡Me haces cosquillas!]", "} si no {", "looks:decir [Tócame con el ratón.]", "}", "}"],
        ["events:when ⚑ clicked", "control:forever {", "control:if ⟨sensing:touching [mouse-pointer]?⟩ then {", "looks:say [That tickles!]", "} else {", "looks:say [Touch me with the mouse.]", "}", "}"],
      ),
      options: L(["“Tócame con el ratón.”", "“¡Me haces cosquillas!”", "Nada"], ["“Touch me with the mouse.”", "“That tickles!”", "Nothing"]),
      answer: 0,
      hint: L("Cuando la condición es falsa, se usa la boca de abajo.", "When the condition is false, the bottom mouth runs."),
      explain: L("Falsa → boca del “si no”.", "False → the “else” mouth."),
    },
    {
      id: "if-else-where",
      type: "choice",
      prompt: L("Quieres que diga “¡Gol!” si toca la Portería y “Sigue intentando” si no. ¿Dónde va “Sigue intentando”?", "You want it to say “Goal!” if it touches the Goal and “Keep trying” if not. Where does “Keep trying” go?"),
      options: L(["En la boca de abajo, la del “si no”", "En la boca de arriba", "Afuera del “por siempre”"], ["In the bottom mouth, the “else” one", "In the top mouth", "Outside the “forever”"]),
      answer: 0,
      hint: L("“Sigue intentando” es para cuando NO toca la Portería.", "“Keep trying” is for when it does NOT touch the Goal."),
      explain: L("Lo que pasa cuando es falso va en el “si no”.", "What happens when it's false goes in the “else”."),
    },
  ],
  scratch: {
    steps: L([
      "Arma “al hacer clic en ⚑” y “por siempre”.",
      "Adentro, encaja “si ⟨ ⟩ entonces … si no” (Control).",
      "En el hueco de seis lados pon “¿tocando [puntero del ratón]?” (Sensores).",
      "En la boca de arriba: “decir [¡Me haces cosquillas!]”. En la de abajo: “decir [Tócame con el ratón.]”. Usa los “decir” sin segundos.",
      "Presiona la bandera y pasa el ratón por encima del objeto.",
    ], [
      "Build “when ⚑ clicked” and “forever”.",
      "Inside, snap “if ⟨ ⟩ then … else” (Control).",
      "In the six-sided slot put “touching [mouse-pointer]?” (Sensing).",
      "In the top mouth: “say [That tickles!]”. In the bottom one: “say [Touch me with the mouse.]”. Use the “say” blocks without seconds.",
      "Press the flag and move the mouse over the sprite.",
    ]),
    challenge: L("Agrega en cada boca un cambio de disfraz para que también se vea distinto.", "Add a costume change in each mouth so it also looks different."),
    expect: L("Con el ratón encima, dice “¡Me haces cosquillas!”; al quitarlo, cambia a “Tócame con el ratón.”.", "With the mouse on it, it says “That tickles!”; when you move away, it switches to “Touch me with the mouse.”."),
    check: L([
      "Si no cambia, revisa que esté adentro del “por siempre”.",
      "Usa “decir [ ]” sin segundos: con segundos, el cambio se ve con retraso.",
    ], [
      "If it doesn't change, check that it's inside the “forever”.",
      "Use “say [ ]” without seconds: with seconds, the change shows up late.",
    ]),
  },
  unplugged: L("Simón dice, con “si no”: si la orden empieza con “Simón dice”, la hacen; si no, se quedan quietos.", "Simon says, with “else”: if the order starts with “Simon says”, do it; else, stay still."),
  family: L("Usen ejemplos de la casa: “si llueve, paraguas; si no, gorra”.", "Use examples from home: “if it rains, umbrella; else, cap”."),
};

lessonData.ifKeys = {
  goal: L("Vas a mover un objeto suavemente con el teclado.", "You will move a sprite smoothly with the keyboard."),
  look: L([
    "En la zona Cuando pase algo usaste “al presionar tecla”, que da un salto cada vez y se traba si mantienes la tecla. Para moverse suave, se pregunta todo el tiempo si la tecla está presionada.",
    "“¿tecla [espacio] presionada?” (Sensores) es verdadera mientras mantienes la tecla apretada. Dentro de un “por siempre”, el objeto se mueve mientras la mantienes.",
  ], [
    "In the When something happens zone you used “when key pressed”, which jumps each time and stutters if you hold the key. To move smoothly, you keep asking whether the key is pressed.",
    "“key [space] pressed?” (Sensing) is true while you hold the key down. Inside a “forever”, the sprite moves while you hold it.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:por siempre {", "control:si ⟨sensing:¿tecla [flecha derecha] presionada?⟩ entonces {", "motion:sumar a x (5)", "}", "control:si ⟨sensing:¿tecla [flecha izquierda] presionada?⟩ entonces {", "motion:sumar a x (-5)", "}", "}"],
    ["events:when ⚑ clicked", "control:forever {", "control:if ⟨sensing:key [right arrow] pressed?⟩ then {", "motion:change x by (5)", "}", "control:if ⟨sensing:key [left arrow] pressed?⟩ then {", "motion:change x by (-5)", "}", "}"],
  ),
  caption: L("Mientras mantienes una flecha, avanza 5 en cada vuelta del bucle: se ve suave.", "While you hold an arrow, it moves 5 in each round of the loop: it looks smooth."),
  activities: [
    {
      id: "if-keys-hold",
      type: "choice",
      prompt: L("Con el programa de arriba, ¿qué pasa mientras mantienes apretada la flecha izquierda?", "With the program above, what happens while you hold the left arrow?"),
      options: L(["Se mueve suave hacia la izquierda", "Da un solo salto", "No pasa nada"], ["It moves smoothly to the left", "It makes a single jump", "Nothing happens"]),
      answer: 0,
      hint: L("El “por siempre” pregunta una y otra vez.", "The “forever” asks again and again."),
      explain: L("Cada vuelta resta 5 a x mientras la tecla siga apretada.", "Each round subtracts 5 from x while the key is held."),
    },
    {
      id: "if-keys-faster",
      type: "choice",
      prompt: L("Quieres que corra más rápido. ¿Qué cambias?", "You want it to run faster. What do you change?"),
      options: L(["El 5 por un número más grande, como 10", "El “por siempre” por “repetir (5)”", "La flecha por otra tecla"], ["The 5 for a bigger number, like 10", "The “forever” for “repeat (5)”", "The arrow for another key"]),
      answer: 0,
      hint: L("En cada vuelta se suma ese número a x.", "Each round adds that number to x."),
      explain: L("Pasos más grandes en cada vuelta: más rápido.", "Bigger steps each round: faster."),
    },
  ],
  scratch: {
    steps: L([
      "Arma “al hacer clic en ⚑” y “por siempre”.",
      "Adentro, un “si ⟨ ⟩ entonces” con “¿tecla [flecha derecha] presionada?” y, adentro, “sumar a x (5)”.",
      "Debajo, otro “si” igual para la flecha izquierda con “sumar a x (-5)”.",
      "Presiona la bandera, haz clic en el escenario y mantén apretadas las flechas.",
    ], [
      "Build “when ⚑ clicked” and “forever”.",
      "Inside, an “if ⟨ ⟩ then” with “key [right arrow] pressed?” and, inside it, “change x by (5)”.",
      "Below it, another “if” like it for the left arrow with “change x by (-5)”.",
      "Press the flag, click the stage and hold the arrows.",
    ]),
    challenge: L("Agrega dos “si” más para arriba y abajo con “sumar a y”.", "Add two more “if” blocks for up and down with “change y by”."),
    expect: L("El objeto se desliza suave mientras mantienes la flecha y se detiene al soltarla.", "The sprite glides smoothly while you hold the arrow and stops when you let go."),
    check: L([
      "Si se mueve a saltos, revisa que usaste “¿tecla … presionada?” dentro del “por siempre” y no el evento “al presionar tecla”.",
      "Si va al revés, revisa los signos.",
    ], [
      "If it moves in jumps, check that you used “key … pressed?” inside the “forever”, not the “when key pressed” event.",
      "If it goes the wrong way, check the signs.",
    ]),
  },
  unplugged: L("Estatuas musicales: te mueves solo mientras suena la música. Es un “¿está sonando?” que se pregunta todo el tiempo.", "Musical statues: you move only while the music plays. It's an “is it playing?” asked all the time."),
  family: L("Es la técnica de los juegos de verdad. Comparen los dos modos: con el evento de tecla y con la condición.", "It's the technique real games use. Compare both ways: with the key event and with the condition."),
};

lessonData.ifColors = {
  goal: L("Vas a usar los colores del escenario como reglas.", "You will use the stage colors as rules."),
  look: L([
    "“¿tocando el color [ ]?” es verdadera cuando el objeto toca ese color en el escenario. Sirve para paredes, metas o lava dibujadas en el fondo.",
    "Para elegir el color, haz clic en el cuadrito de color del bloque y usa el gotero para tocar el color en el escenario: así es exactamente el mismo.",
  ], [
    "“touching color [ ]?” is true when the sprite touches that color on the stage. It's for walls, goals or lava drawn on the backdrop.",
    "To choose the color, click the color square on the block and use the eyedropper to touch the color on the stage: that way it's exactly the same.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "motion:ir a x: (-200) y: (0)", "control:por siempre {", "motion:sumar a x (3)", "control:si ⟨sensing:¿tocando el color [verde]?⟩ entonces {", "looks:decir [¡Gané!] durante (2) segundos", "motion:ir a x: (-200) y: (0)", "}", "}"],
    ["events:when ⚑ clicked", "motion:go to x: (-200) y: (0)", "control:forever {", "motion:change x by (3)", "control:if ⟨sensing:touching color [green]?⟩ then {", "looks:say [I won!] for (2) seconds", "motion:go to x: (-200) y: (0)", "}", "}"],
  ),
  caption: L("Avanza hacia una meta verde dibujada en el fondo; al tocarla dice “¡Gané!” y vuelve a empezar.", "It moves toward a green goal drawn on the backdrop; when it touches it, it says “I won!” and starts again."),
  activities: [
    {
      id: "if-colors-wall",
      type: "choice",
      prompt: L("En tu fondo, las paredes son negras. Quieres que el objeto vuelva al inicio si toca una pared. ¿Qué condición usas?", "On your backdrop, the walls are black. You want the sprite to go back to the start if it touches a wall. Which condition do you use?"),
      options: L(["sensing:¿tocando el color [negro]?", "sensing:¿tecla [espacio] presionada?", "sensing:¿tocando [puntero del ratón]?"], ["sensing:touching color [black]?", "sensing:key [space] pressed?", "sensing:touching [mouse-pointer]?"]),
      answer: 0,
      hint: L("Las paredes son un color del fondo.", "The walls are a color on the backdrop."),
      explain: L("Tocar el color negro = tocar una pared.", "Touching black = touching a wall."),
    },
    {
      id: "if-colors-exact",
      type: "choice",
      prompt: L("El objeto toca la meta, pero no pasa nada. ¿Qué revisas primero?", "The sprite touches the goal, but nothing happens. What do you check first?"),
      options: L(["Que el color del bloque sea exactamente el de la meta (usa el gotero)", "Que el objeto sea más grande", "Que la bandera esté encima"], ["That the block's color is exactly the goal's (use the eyedropper)", "That the sprite is bigger", "That the flag is on top"]),
      answer: 0,
      hint: L("Un verde parecido no es el mismo verde.", "A similar green is not the same green."),
      explain: L("Con el gotero eliges el color exacto.", "The eyedropper picks the exact color."),
    },
  ],
  scratch: {
    steps: L([
      "Haz clic en el escenario y luego en la pestaña Fondos. Con el rectángulo, dibuja una meta verde a la derecha.",
      "Selecciona tu objeto. Arma “al hacer clic en ⚑”, “ir a x: (-200) y: (0)” y “por siempre”.",
      "Adentro: “sumar a x (3)” y un “si ⟨ ⟩ entonces” con “¿tocando el color [ ]?”.",
      "Haz clic en el cuadrito de color del bloque, toca el gotero y luego la meta verde del escenario.",
      "Adentro del “si”: “decir [¡Gané!] durante (2) segundos” e “ir a x: (-200) y: (0)”.",
      "Presiona la bandera verde.",
    ], [
      "Click the stage and then the Backdrops tab. With the rectangle tool, draw a green goal on the right.",
      "Select your sprite. Build “when ⚑ clicked”, “go to x: (-200) y: (0)” and “forever”.",
      "Inside: “change x by (3)” and an “if ⟨ ⟩ then” with “touching color [ ]?”.",
      "Click the color square on the block, tap the eyedropper and then the green goal on the stage.",
      "Inside the “if”: “say [I won!] for (2) seconds” and “go to x: (-200) y: (0)”.",
      "Press the green flag.",
    ]),
    challenge: L("Dibuja una pared negra en medio del camino y agrega otro “si”: si toca el negro, vuelve al inicio sin ganar.", "Draw a black wall in the middle of the way and add another “if”: if it touches black, it goes back to the start without winning."),
    expect: L("El objeto avanza solo; al tocar la meta verde dice “¡Gané!” y vuelve al inicio.", "The sprite moves by itself; when it touches the green goal it says “I won!” and goes back to the start."),
    check: L([
      "Si nunca gana, usa el gotero para elegir el color exacto de la meta.",
      "Si el objeto es muy grande, puede tocar el color antes de tiempo: achícalo con “fijar tamaño al (50) %”.",
    ], [
      "If it never wins, use the eyedropper to pick the goal's exact color.",
      "If the sprite is very big, it may touch the color too early: shrink it with “set size to (50) %”.",
    ]),
  },
  unplugged: L("Rayuela de colores: si pisas el rojo, vuelves al inicio; si llegas al verde, ganas.", "Color hopscotch: if you step on red, go back to the start; if you reach green, you win."),
  family: L("Esta página prepara el laberinto de “Mis juegos”. Pida que le explique la regla de cada color.", "This page prepares the maze in “My games”. Ask for the rule of each color."),
};
