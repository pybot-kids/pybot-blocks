// Zone 03 — Repeat. Loops (C blocks) and the Pen extension.

lessonData.loopsRepeat = {
  goal: L("Vas a repetir bloques sin tener que copiarlos.", "You will repeat blocks without copying them."),
  look: L([
    "Si quieres que algo pase muchas veces, no tienes que copiar bloques. “repetir (10)” hace 10 veces los bloques que tiene adentro. A eso se le llama bucle.",
    "“repetir” tiene forma de C: abraza los bloques que se repiten. Lo que queda debajo, afuera de la C, se hace una sola vez al terminar.",
    "Mira qué corta queda la caminata de la página de disfraces:",
  ], [
    "If you want something to happen many times, you don't have to copy blocks. “repeat (10)” does the blocks inside it 10 times. That's called a loop.",
    "“repeat” is shaped like a C: it hugs the blocks that repeat. Whatever is below it, outside the C, happens only once at the end.",
    "Look how short the walk from the costumes page becomes:",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:repetir (10) {", "motion:mover (10) pasos", "looks:siguiente disfraz", "control:esperar (0.2) segundos", "}", "looks:decir [¡Llegué!] durante (2) segundos"],
    ["events:when ⚑ clicked", "control:repeat (10) {", "motion:move (10) steps", "looks:next costume", "control:wait (0.2) seconds", "}", "looks:say [I made it!] for (2) seconds"],
  ),
  caption: L("Da 10 pasitos animados y, al terminar el bucle, dice “¡Llegué!” una sola vez.", "It takes 10 animated steps and, when the loop ends, says “I made it!” once."),
  terms: L([["Bucle", "Bloques que se repiten."]], [["Loop", "Blocks that repeat."]]),
  activities: [
    {
      id: "loops-repeat-count",
      type: "choice",
      prompt: L("¿Cuántos pasos avanza en total?", "How many steps does it move in total?"),
      program: L(["events:al hacer clic en ⚑", "control:repetir (5) {", "motion:mover (20) pasos", "}"], ["events:when ⚑ clicked", "control:repeat (5) {", "motion:move (20) steps", "}"]),
      options: L(["100", "25", "20"], ["100", "25", "20"]),
      answer: 0,
      hint: L("5 veces 20…", "5 times 20…"),
      explain: L("5 × 20 = 100 pasos.", "5 × 20 = 100 steps."),
    },
    {
      id: "loops-repeat-inside",
      type: "choice",
      prompt: L("Quieres que diga “¡Llegué!” una sola vez, al final, pero lo dice 10 veces. ¿Qué pasó?", "You want it to say “I made it!” once, at the end, but it says it 10 times. What happened?"),
      program: L(
        ["events:al hacer clic en ⚑", "control:repetir (10) {", "motion:mover (10) pasos", "looks:decir [¡Llegué!] durante (1) segundos", "}"],
        ["events:when ⚑ clicked", "control:repeat (10) {", "motion:move (10) steps", "looks:say [I made it!] for (1) seconds", "}"],
      ),
      options: L(["El “decir” quedó adentro del bucle: va debajo, afuera de la C", "Faltan más pasos", "El bucle debería repetir 1 vez"], ["The “say” is inside the loop: it goes below, outside the C", "It needs more steps", "The loop should repeat once"]),
      answer: 0,
      hint: L("¿Qué bloques abraza la C?", "Which blocks does the C hug?"),
      explain: L("Todo lo de adentro se repite; lo de abajo pasa una vez.", "Everything inside repeats; what's below happens once."),
    },
  ],
  scratch: {
    steps: L([
      "Arma “al hacer clic en ⚑” y debajo “repetir (10)” (Control).",
      "Mete adentro de la C “mover (10) pasos”, “siguiente disfraz” y “esperar (1) segundos”; cambia el 1 por 0.2.",
      "Debajo de la C, afuera, encaja “decir [¡Llegué!] durante (2) segundos”.",
      "Presiona la bandera verde.",
    ], [
      "Build “when ⚑ clicked” and “repeat (10)” (Control) below it.",
      "Put “move (10) steps”, “next costume” and “wait (1) seconds” inside the C; change 1 to 0.2.",
      "Below the C, outside it, snap “say [I made it!] for (2) seconds”.",
      "Press the green flag.",
    ]),
    challenge: L("Encaja “ir a x: (-200) y: (0)” arriba del bucle. ¿Cuántas vueltas hacen falta para llegar a x: 200? Pista: cada vuelta suma 10.", "Snap “go to x: (-200) y: (0)” above the loop. How many repeats does it take to reach x: 200? Clue: each repeat adds 10."),
    expect: L("El objeto da 10 pasitos animados y al final dice “¡Llegué!” una vez. En el reto, con 40 vueltas llega a x: 200.", "The sprite takes 10 animated steps and says “I made it!” once at the end. In the challenge, 40 repeats reach x: 200."),
    check: L([
      "Si dice “¡Llegué!” muchas veces, sácalo de la C y ponlo debajo.",
      "Si va muy rápido, revisa la espera adentro del bucle.",
    ], [
      "If it says “I made it!” many times, take it out of the C and put it below.",
      "If it goes too fast, check the wait inside the loop.",
    ]),
  },
  unplugged: L("Baile en bucle: inventen 3 pasos de baile y repítanlos 4 veces. Después cambien el número de vueltas.", "Dance loop: invent 3 dance moves and repeat them 4 times. Then change the number of repeats."),
  family: L("El coro de una canción es un bucle: se repite. Pregunte qué otras cosas de la casa se repiten.", "A song's chorus is a loop: it repeats. Ask what other things at home repeat."),
};

lessonData.loopsForever = {
  goal: L("Vas a usar un bucle que no se detiene.", "You will use a loop that never stops."),
  look: L([
    "“por siempre” repite sus bloques sin parar, hasta que presionas la señal de alto.",
    "Se usa para lo que debe pasar todo el tiempo: un objeto que se mueve sin parar, una música de fondo o un juego que revisa qué pasa.",
    "Debajo de “por siempre” no se puede encajar nada: como nunca termina, lo de abajo nunca llegaría.",
  ], [
    "“forever” repeats its blocks without stopping, until you press the stop sign.",
    "It's used for things that must happen all the time: a sprite that keeps moving, background music, or a game that keeps checking what happens.",
    "Nothing can snap below “forever”: since it never ends, whatever is below would never happen.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:por siempre {", "motion:mover (5) pasos", "motion:si toca un borde, rebotar", "}"],
    ["events:when ⚑ clicked", "control:forever {", "motion:move (5) steps", "motion:if on edge, bounce", "}"],
  ),
  caption: L("Va y viene de borde a borde hasta que presionas la señal de alto.", "It goes back and forth between the edges until you press the stop sign."),
  activities: [
    {
      id: "loops-forever-end",
      type: "choice",
      prompt: L("¿Cuándo termina este programa?", "When does this program end?"),
      program: L(
        ["events:al hacer clic en ⚑", "control:por siempre {", "motion:mover (5) pasos", "motion:si toca un borde, rebotar", "}"],
        ["events:when ⚑ clicked", "control:forever {", "motion:move (5) steps", "motion:if on edge, bounce", "}"],
      ),
      options: L(["Cuando presionas la señal de alto", "Después de 5 pasos", "Cuando toca el borde"], ["When you press the stop sign", "After 5 steps", "When it touches the edge"]),
      answer: 0,
      hint: L("“por siempre” no tiene un número de vueltas.", "“forever” has no number of repeats."),
      explain: L("Solo la señal de alto lo detiene.", "Only the stop sign stops it."),
    },
    {
      id: "loops-forever-which",
      type: "choice",
      prompt: L("Una pelota debe rebotar durante todo el juego. ¿Qué bloque usas?", "A ball must bounce for the whole game. Which block do you use?"),
      options: L(["control:por siempre", "control:repetir (3)", "control:esperar (1) segundos"], ["control:forever", "control:repeat (3)", "control:wait (1) seconds"]),
      answer: 0,
      hint: L("El juego no tiene un número fijo de rebotes.", "The game has no fixed number of bounces."),
      explain: L("Mientras dure el juego, la pelota sigue: “por siempre”.", "As long as the game lasts, the ball keeps going: “forever”."),
    },
  ],
  scratch: {
    steps: L([
      "Elige un objeto, por ejemplo una pelota.",
      "Arma “al hacer clic en ⚑” y debajo “por siempre” (Control).",
      "Mete adentro “mover (10) pasos” con 5 y “si toca un borde, rebotar” (Movimiento).",
      "Presiona la bandera y, cuando quieras, la señal de alto.",
    ], [
      "Choose a sprite, for example a ball.",
      "Build “when ⚑ clicked” and “forever” (Control) below it.",
      "Put “move (10) steps” with 5 and “if on edge, bounce” (Motion) inside.",
      "Press the flag and, whenever you want, the stop sign.",
    ]),
    challenge: L("Antes del bucle encaja “apuntar en dirección (45)”: ahora rebota en diagonal por todo el escenario.", "Before the loop, snap “point in direction (45)”: now it bounces diagonally all over the stage."),
    expect: L("La pelota va y viene sin parar hasta que presionas la señal de alto. Con el reto, rebota en diagonal.", "The ball goes back and forth until you press the stop sign. With the challenge, it bounces diagonally."),
    check: L([
      "Si se mueve una sola vez, revisa que los bloques estén adentro de la C de “por siempre”.",
      "Si queda de cabeza al rebotar, es normal: el objeto gira para mirar hacia el otro lado.",
    ], [
      "If it moves only once, check that the blocks are inside the C of “forever”.",
      "If it ends up upside down when bouncing, that's normal: the sprite turns to face the other way.",
    ]),
  },
  unplugged: L("Una canción que nunca termina: canten en ronda hasta que alguien diga “¡alto!”. Esa palabra es la señal de alto.", "A song that never ends: sing in a round until someone says “stop!”. That word is the stop sign."),
  family: L("Es normal que se rían con los bucles que no paran. La señal de alto siempre los detiene.", "It's normal to laugh at loops that don't stop. The stop sign always stops them."),
};

lessonData.loopsAnimate = {
  goal: L("Vas a crear animaciones que se repiten.", "You will create animations that repeat."),
  look: L([
    "Con un bucle y una espera puedes hacer animaciones que se repiten: un letrero que cambia de color, un personaje que camina sin parar o un corazón que late.",
    "“sumar al efecto [color] (25)”, en Apariencia, cambia un poco el color del objeto. Repetido muchas veces, pasa por todos los colores.",
    "La espera decide el ritmo: más espera, animación más lenta.",
  ], [
    "With a loop and a wait you can make animations that repeat: a sign that changes color, a character that keeps walking, or a beating heart.",
    "“change [color] effect by (25)”, in Looks, changes the sprite's color a little. Repeated many times, it goes through all the colors.",
    "The wait sets the rhythm: longer wait, slower animation.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "control:por siempre {", "looks:sumar al efecto [color] (25)", "control:esperar (0.2) segundos", "}"],
    ["events:when ⚑ clicked", "control:forever {", "looks:change [color] effect by (25)", "control:wait (0.2) seconds", "}"],
  ),
  caption: L("Cambia de color sin parar, un poquito cada 0.2 segundos.", "It keeps changing color, a little every 0.2 seconds."),
  activities: [
    {
      id: "loops-animate-slow",
      type: "choice",
      prompt: L("¿Con qué espera la animación va más lenta?", "With which wait is the animation slower?"),
      options: L(["control:esperar (1) segundos", "control:esperar (0.1) segundos"], ["control:wait (1) seconds", "control:wait (0.1) seconds"]),
      answer: 0,
      hint: L("Más tiempo entre cambios…", "More time between changes…"),
      explain: L("1 segundo entre cambios es más lento que 0.1.", "1 second between changes is slower than 0.1."),
    },
    {
      id: "loops-animate-heart",
      type: "order",
      prompt: L("Ordena lo que va adentro del “por siempre” para que el corazón lata: crece, espera un poquito, vuelve a su tamaño y descansa un poco más.", "Order what goes inside the “forever” so the heart beats: it grows, waits a little, goes back to its size and rests a bit longer."),
      blocks: L(
        ["looks:cambiar tamaño por (20)", "control:esperar (0.2) segundos", "looks:cambiar tamaño por (-20)", "control:esperar (0.6) segundos"],
        ["looks:change size by (20)", "control:wait (0.2) seconds", "looks:change size by (-20)", "control:wait (0.6) seconds"],
      ),
      hint: L("Primero crece, después espera poco; luego vuelve y espera más.", "First it grows, then waits a little; then it shrinks back and waits longer."),
      explain: L("Crece, espera, vuelve, descansa: ¡late!", "Grow, wait, shrink, rest: it beats!"),
    },
  ],
  scratch: {
    steps: L([
      "Elige o dibuja un objeto, por ejemplo un corazón.",
      "Arma “al hacer clic en ⚑” y encaja “fijar tamaño al (100) %” para que siempre empiece igual.",
      "Encaja “por siempre” y mete adentro “cambiar tamaño por (20)”, “esperar (0.2) segundos”, “cambiar tamaño por (-20)” y “esperar (0.6) segundos”.",
      "Presiona la bandera verde.",
    ], [
      "Choose or draw a sprite, for example a heart.",
      "Build “when ⚑ clicked” and snap “set size to (100) %” so it always starts the same.",
      "Snap “forever” and put “change size by (20)”, “wait (0.2) seconds”, “change size by (-20)” and “wait (0.6) seconds” inside.",
      "Press the green flag.",
    ]),
    challenge: L("Agrega “sumar al efecto [color] (25)” adentro del bucle: ahora late y cambia de color.", "Add “change [color] effect by (25)” inside the loop: now it beats and changes color."),
    expect: L("El corazón crece y vuelve a su tamaño una y otra vez, como si latiera.", "The heart grows and shrinks back again and again, as if it were beating."),
    check: L([
      "Si crece sin parar, revisa que el segundo bloque de tamaño tenga -20.",
      "Si va muy rápido, aumenta las esperas.",
    ], [
      "If it keeps growing, check that the second size block has -20.",
      "If it goes too fast, make the waits longer.",
    ]),
  },
  unplugged: L("Luces con linternas: enciendan y apaguen siguiendo un ritmo que se repite. Cambien la espera para hacerlo más rápido o más lento.", "Flashlight lights: switch on and off following a rhythm that repeats. Change the wait to make it faster or slower."),
  family: L("Pregunte cómo hacer la animación más lenta o más rápida: la respuesta es la espera.", "Ask how to make the animation slower or faster: the answer is the wait."),
};

lessonData.loopsPen = {
  goal: L("Vas a dibujar figuras con el lápiz y un bucle.", "You will draw shapes with the pen and a loop."),
  look: L([
    "La extensión Lápiz deja que el objeto dibuje una línea mientras se mueve. Se agrega con el botón de extensiones, abajo a la izquierda del editor.",
    "“bajar lápiz” empieza a dibujar, “subir lápiz” deja de dibujar y “borrar todo” limpia el escenario.",
    "Un cuadrado tiene 4 lados iguales y 4 giros de 90 grados. Con “repetir (4)” queda muy corto. Para cualquier figura, el giro es 360 dividido entre el número de lados.",
  ], [
    "The Pen extension lets the sprite draw a line as it moves. You add it with the extensions button, at the bottom left of the editor.",
    "“pen down” starts drawing, “pen up” stops drawing and “erase all” clears the stage.",
    "A square has 4 equal sides and 4 turns of 90 degrees. With “repeat (4)” it's very short. For any shape, the turn is 360 divided by the number of sides.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "pen:borrar todo", "pen:bajar lápiz", "control:repetir (4) {", "motion:mover (100) pasos", "motion:girar ↻ (90) grados", "}", "pen:subir lápiz"],
    ["events:when ⚑ clicked", "pen:erase all", "pen:pen down", "control:repeat (4) {", "motion:move (100) steps", "motion:turn ↻ (90) degrees", "}", "pen:pen up"],
  ),
  caption: L("Limpia, baja el lápiz y repite 4 veces “avanza y gira una esquina”: dibuja un cuadrado.", "It clears, puts the pen down and repeats “move and turn a corner” 4 times: it draws a square."),
  activities: [
    {
      id: "loops-pen-triangle",
      type: "choice",
      prompt: L("Quieres dibujar un triángulo. ¿Qué bucle usas?", "You want to draw a triangle. Which loop do you use?"),
      options: L(
        ["Repetir 3 veces: mover 100 y girar 120", "Repetir 3 veces: mover 100 y girar 90", "Repetir 4 veces: mover 100 y girar 90"],
        ["Repeat 3 times: move 100 and turn 120", "Repeat 3 times: move 100 and turn 90", "Repeat 4 times: move 100 and turn 90"],
      ),
      answer: 0,
      hint: L("360 ÷ 3 = ?", "360 ÷ 3 = ?"),
      explain: L("3 lados y giros de 360 ÷ 3 = 120 grados.", "3 sides and turns of 360 ÷ 3 = 120 degrees."),
    },
    {
      id: "loops-pen-shapes",
      type: "match",
      prompt: L("Une cada figura con su bucle.", "Match each shape with its loop."),
      pairs: L([
        ["Cuadrado", "Repetir 4, girar 90"],
        ["Triángulo", "Repetir 3, girar 120"],
        ["Hexágono", "Repetir 6, girar 60"],
      ], [
        ["Square", "Repeat 4, turn 90"],
        ["Triangle", "Repeat 3, turn 120"],
        ["Hexagon", "Repeat 6, turn 60"],
      ]),
      explain: L("Vueltas × grados siempre da 360.", "Repeats × degrees always makes 360."),
    },
  ],
  scratch: {
    steps: L([
      "Haz clic en el botón de extensiones, abajo a la izquierda, y elige Lápiz.",
      "Arma “al hacer clic en ⚑”, “borrar todo” y “bajar lápiz”.",
      "Encaja “repetir (4)” y mete adentro “mover (100) pasos” y “girar ↻ (90) grados”.",
      "Debajo del bucle, encaja “subir lápiz”.",
      "Presiona la bandera verde.",
    ], [
      "Click the extensions button at the bottom left and choose Pen.",
      "Build “when ⚑ clicked”, “erase all” and “pen down”.",
      "Snap “repeat (4)” and put “move (100) steps” and “turn ↻ (90) degrees” inside.",
      "Below the loop, snap “pen up”.",
      "Press the green flag.",
    ]),
    challenge: L("Dibuja un triángulo y un hexágono cambiando el número de vueltas y los grados.", "Draw a triangle and a hexagon by changing the number of repeats and the degrees."),
    expect: L("Aparece un cuadrado dibujado con la línea del lápiz.", "A square appears, drawn with the pen line."),
    check: L([
      "Si no dibuja, revisa que “bajar lápiz” esté antes del bucle.",
      "Si la figura no se cierra, revisa que vueltas × grados dé 360.",
      "Si el dibujo se sale, lleva el objeto al centro antes de empezar.",
    ], [
      "If it doesn't draw, check that “pen down” is before the loop.",
      "If the shape doesn't close, check that repeats × degrees makes 360.",
      "If the drawing goes off the stage, move the sprite to the center before starting.",
    ]),
  },
  unplugged: L("Caminen un cuadrado en el patio: 4 pasos y un giro de esquina, 4 veces. Después intenten un triángulo.", "Walk a square in the yard: 4 steps and a corner turn, 4 times. Then try a triangle."),
  family: L("Arte y geometría se juntan. Pregunten qué figura sale con 5 vueltas de 72 grados.", "Art and geometry come together. Ask what shape you get with 5 repeats of 72 degrees."),
};
