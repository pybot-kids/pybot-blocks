// Zone 05 — Remember. Variables, score, countdown, ask, random and compare.
// Round reporters are written {category:text}; comparisons only from varsCompare on.

lessonData.varsMake = {
  goal: L("Vas a crear una variable y cambiar su valor.", "You will create a variable and change its value."),
  look: L([
    "Una variable es una caja con nombre que recuerda un número o un texto. Por ejemplo, una caja llamada “saltos” puede recordar cuántas veces saltó el objeto.",
    "Se crea en la categoría Variables con el botón “Crear una variable”. Después, “dar a [saltos] el valor (0)” pone un número en la caja y “sumar a [saltos] (1)” le suma.",
    "Si marcas la casilla junto a la variable, su valor se ve en el escenario.",
  ], [
    "A variable is a named box that remembers a number or a text. For example, a box called “jumps” can remember how many times the sprite jumped.",
    "You create it in the Variables category with the “Make a Variable” button. Then “set [jumps] to (0)” puts a number in the box and “change [jumps] by (1)” adds to it.",
    "If you tick the box next to the variable, its value shows on the stage.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "variables:dar a [saltos] el valor (0)", "---", "events:al presionar tecla [espacio]", "motion:sumar a y (50)", "control:esperar (0.3) segundos", "motion:sumar a y (-50)", "variables:sumar a [saltos] (1)"],
    ["events:when ⚑ clicked", "variables:set [jumps] to (0)", "---", "events:when [space] key pressed", "motion:change y by (50)", "control:wait (0.3) seconds", "motion:change y by (-50)", "variables:change [jumps] by (1)"],
  ),
  caption: L("La bandera pone la caja en 0; cada salto con espacio le suma 1.", "The flag puts 0 in the box; each jump with space adds 1."),
  terms: L([["Variable", "Una caja con nombre que recuerda un valor."], ["Valor", "Lo que hay dentro de la caja."]], [["Variable", "A named box that remembers a value."], ["Value", "What's inside the box."]]),
  activities: [
    {
      id: "vars-make-value",
      type: "choice",
      prompt: L("Presionas la bandera y luego saltas 3 veces con espacio. ¿Qué valor tiene “saltos”?", "You press the flag and then jump 3 times with space. What value does “jumps” have?"),
      options: L(["3", "0", "1"], ["3", "0", "1"]),
      answer: 0,
      hint: L("Empieza en 0 y cada salto suma 1.", "It starts at 0 and each jump adds 1."),
      explain: L("0 + 1 + 1 + 1 = 3.", "0 + 1 + 1 + 1 = 3."),
    },
    {
      id: "vars-make-match",
      type: "match",
      prompt: L("Une cada bloque con lo que hace.", "Match each block with what it does."),
      pairs: L([
        ["variables:dar a [saltos] el valor (0)", "Pone 0 en la caja"],
        ["variables:sumar a [saltos] (1)", "Le suma 1 a la caja"],
        ["variables:mostrar variable [saltos]", "Muestra la caja en el escenario"],
      ], [
        ["variables:set [jumps] to (0)", "Puts 0 in the box"],
        ["variables:change [jumps] by (1)", "Adds 1 to the box"],
        ["variables:show variable [jumps]", "Shows the box on the stage"],
      ]),
      explain: L("Dar un valor, sumar y mostrar: lo básico de las variables.", "Set, change and show: the basics of variables."),
    },
  ],
  scratch: {
    steps: L([
      "En Variables, presiona “Crear una variable”, escribe “saltos” y acepta.",
      "Arma “al hacer clic en ⚑” y “dar a [saltos] el valor (0)”.",
      "Arma otro programa: “al presionar tecla [espacio]”, “sumar a y (50)”, “esperar (0.3) segundos”, “sumar a y (-50)” y “sumar a [saltos] (1)”.",
      "Revisa que la casilla de “saltos” esté marcada para verla en el escenario.",
      "Presiona la bandera y salta con espacio.",
    ], [
      "In Variables, press “Make a Variable”, type “jumps” and accept.",
      "Build “when ⚑ clicked” and “set [jumps] to (0)”.",
      "Build another program: “when [space] key pressed”, “change y by (50)”, “wait (0.3) seconds”, “change y by (-50)” and “change [jumps] by (1)”.",
      "Check that the “jumps” box is ticked to see it on the stage.",
      "Press the flag and jump with space.",
    ]),
    challenge: L("Crea otra variable, “aplausos”, que sume 1 cada vez que haces clic sobre el objeto.", "Make another variable, “claps”, that adds 1 each time you click the sprite."),
    expect: L("Al presionar la bandera, “saltos” vuelve a 0; cada salto lo sube en 1.", "When you press the flag, “jumps” goes back to 0; each jump adds 1."),
    check: L([
      "Si el número no vuelve a 0, revisa el programa de la bandera.",
      "Si no ves el número, marca la casilla junto a la variable.",
    ], [
      "If the number doesn't go back to 0, check the flag program.",
      "If you can't see the number, tick the box next to the variable.",
    ]),
  },
  unplugged: L("Un vaso con una etiqueta que dice “saltos”: cada vez que alguien salta, mete un frijol. Al empezar de nuevo, se vacía el vaso.", "A cup labeled “jumps”: each time someone jumps, put a bean in. To start over, empty the cup."),
  family: L("Una variable es como el marcador de un partido: guarda un número que va cambiando.", "A variable is like a scoreboard: it keeps a number that changes."),
};

lessonData.varsScore = {
  goal: L("Vas a llevar el puntaje de un juego.", "You will keep score in a game."),
  look: L([
    "En los juegos, una variable “puntos” cuenta lo que ganas. Al empezar vale 0, y cada vez que pasa algo bueno se le suma.",
    "En este juego, el Jugador se mueve con las flechas y la Estrella aparece en lugares sorpresa. El programa va en la Estrella: cuando toca al Jugador, suma un punto y se va a otro lugar.",
  ], [
    "In games, a “score” variable counts what you win. It starts at 0, and each time something good happens it goes up.",
    "In this game, the Player moves with the arrows and the Star appears in surprise places. The program goes in the Star: when it touches the Player, it adds a point and moves somewhere else.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "variables:dar a [puntos] el valor (0)", "control:por siempre {", "control:si ⟨sensing:¿tocando [Jugador]?⟩ entonces {", "variables:sumar a [puntos] (1)", "motion:ir a [posición aleatoria]", "}", "}"],
    ["events:when ⚑ clicked", "variables:set [score] to (0)", "control:forever {", "control:if ⟨sensing:touching [Player]?⟩ then {", "variables:change [score] by (1)", "motion:go to [random position]", "}", "}"],
  ),
  caption: L("Programa de la Estrella: empieza en 0 y suma 1 cada vez que la atrapan.", "The Star's program: it starts at 0 and adds 1 each time it's caught."),
  activities: [
    {
      id: "vars-score-move",
      type: "choice",
      prompt: L("Si la Estrella NO se fuera a otro lugar después de sumar, ¿qué pasaría?", "If the Star did NOT move away after adding, what would happen?"),
      options: L(["Sumaría muchos puntos seguidos mientras se tocan", "Sumaría solo 1 punto", "No sumaría nada"], ["It would add lots of points in a row while touching", "It would add only 1 point", "It wouldn't add anything"]),
      answer: 0,
      hint: L("El “por siempre” pregunta muchas veces por segundo.", "The “forever” asks many times per second."),
      explain: L("Por eso la Estrella se va: así suma una sola vez.", "That's why the Star moves away: so it adds only once."),
    },
    {
      id: "vars-score-reset",
      type: "choice",
      prompt: L("Cada vez que presionas la bandera, el puntaje sigue con el número del juego anterior. ¿Qué falta?", "Each time you press the flag, the score keeps the number from the last game. What's missing?"),
      options: L(["variables:dar a [puntos] el valor (0)", "variables:sumar a [puntos] (1)", "motion:ir a [posición aleatoria]"], ["variables:set [score] to (0)", "variables:change [score] by (1)", "motion:go to [random position]"]),
      answer: 0,
      hint: L("Al empezar, la caja debe quedar en 0.", "At the start, the box must be 0."),
      explain: L("Con “dar a [puntos] el valor (0)” cada juego empieza de cero.", "With “set [score] to (0)” every game starts from zero."),
    },
  ],
  scratch: {
    steps: L([
      "Prepara dos objetos: Jugador, que se mueve con las flechas como en la página de teclas, y Estrella.",
      "Crea la variable “puntos”.",
      "Selecciona la Estrella. Arma “al hacer clic en ⚑”, “dar a [puntos] el valor (0)” y “por siempre”.",
      "Adentro: “si ⟨¿tocando [Jugador]?⟩ entonces” con “sumar a [puntos] (1)” e “ir a [posición aleatoria]”.",
      "Presiona la bandera y atrapa estrellas.",
    ], [
      "Set up two sprites: Player, which moves with the arrows like on the keys page, and Star.",
      "Make the variable “score”.",
      "Select the Star. Build “when ⚑ clicked”, “set [score] to (0)” and “forever”.",
      "Inside: “if ⟨touching [Player]?⟩ then” with “change [score] by (1)” and “go to [random position]”.",
      "Press the flag and catch stars.",
    ]),
    challenge: L("Agrega un obstáculo que, al tocar al Jugador, reste un punto con “sumar a [puntos] (-1)” y se vaya a otro lugar.", "Add an obstacle that, when it touches the Player, takes away a point with “change [score] by (-1)” and moves somewhere else."),
    expect: L("Cada vez que el Jugador toca la Estrella, el puntaje sube 1 y la Estrella aparece en otro lugar.", "Each time the Player touches the Star, the score goes up by 1 and the Star appears somewhere else."),
    check: L([
      "Si el programa no hace nada, revisa que esté en la Estrella y que el menú diga “Jugador”.",
      "Si suma de a muchos, revisa que “ir a [posición aleatoria]” esté adentro del “si”.",
    ], [
      "If the program does nothing, check that it's in the Star and that the menu says “Player”.",
      "If it adds many at once, check that “go to [random position]” is inside the “if”.",
    ]),
  },
  unplugged: L("Juego de preguntas con frijoles: cada respuesta correcta suma un frijol al vaso. Al terminar, cuenten el puntaje.", "Quiz with beans: each right answer adds a bean to the cup. At the end, count the score."),
  family: L("Celebren el récord, no solo ganar. ¿Puede superar su propio puntaje?", "Celebrate the record, not just winning. Can they beat their own score?"),
};

lessonData.varsTimer = {
  goal: L("Vas a hacer una cuenta regresiva.", "You will make a countdown."),
  look: L([
    "Una variable “tiempo” puede contar hacia atrás: empieza en 10 y, cada segundo, se le resta 1.",
    "Con “repetir (10)”, una espera de 1 segundo y “sumar a [tiempo] (-1)”, la cuenta baja de 10 a 0. Al terminar el bucle, el juego avisa que se acabó el tiempo.",
    "Scratch también trae un “cronómetro” (Sensores) que cuenta los segundos desde que presionas la bandera; “reiniciar cronómetro” lo vuelve a 0.",
  ], [
    "A “time” variable can count backwards: it starts at 10 and, every second, 1 is taken away.",
    "With “repeat (10)”, a 1-second wait and “change [time] by (-1)”, the count goes from 10 to 0. When the loop ends, the game says time is up.",
    "Scratch also has a “timer” (Sensing) that counts the seconds since you pressed the flag; “reset timer” sets it back to 0.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "variables:dar a [tiempo] el valor (10)", "control:repetir (10) {", "control:esperar (1) segundos", "variables:sumar a [tiempo] (-1)", "}", "looks:decir [¡Se acabó el tiempo!] durante (2) segundos", "control:detener [todos]"],
    ["events:when ⚑ clicked", "variables:set [time] to (10)", "control:repeat (10) {", "control:wait (1) seconds", "variables:change [time] by (-1)", "}", "looks:say [Time's up!] for (2) seconds", "control:stop [all]"],
  ),
  caption: L("Cuenta de 10 a 0, un número por segundo; al llegar a 0 avisa y detiene el juego.", "It counts from 10 to 0, one number per second; at 0 it says so and stops the game."),
  activities: [
    {
      id: "vars-timer-length",
      type: "choice",
      prompt: L("¿Cuántos segundos dura esta cuenta regresiva?", "How many seconds does this countdown last?"),
      options: L(["10 segundos", "1 segundo", "20 segundos"], ["10 seconds", "1 second", "20 seconds"]),
      answer: 0,
      hint: L("10 vueltas de 1 segundo cada una.", "10 rounds of 1 second each."),
      explain: L("10 × 1 = 10 segundos.", "10 × 1 = 10 seconds."),
    },
    {
      id: "vars-timer-order",
      type: "order",
      prompt: L("Ordena lo que va adentro del “repetir” para que la cuenta baje un número cada segundo.", "Order what goes inside the “repeat” so the count drops one number each second."),
      blocks: L(["control:esperar (1) segundos", "variables:sumar a [tiempo] (-1)"], ["control:wait (1) seconds", "variables:change [time] by (-1)"]),
      hint: L("Primero pasa el segundo, después se resta.", "First the second passes, then you subtract."),
      explain: L("Espera un segundo y resta 1: así se ve cada número un segundo.", "Wait a second and subtract 1: each number shows for a second."),
    },
  ],
  scratch: {
    steps: L([
      "Crea la variable “tiempo” y deja marcada su casilla.",
      "Arma “al hacer clic en ⚑” y “dar a [tiempo] el valor (10)”.",
      "Encaja “repetir (10)” y adentro “esperar (1) segundos” y “sumar a [tiempo] (-1)”.",
      "Debajo del bucle: “decir [¡Se acabó el tiempo!] durante (2) segundos” y “detener [todos]”.",
      "Presiona la bandera y mira la cuenta.",
    ], [
      "Make the variable “time” and leave its box ticked.",
      "Build “when ⚑ clicked” and “set [time] to (10)”.",
      "Snap “repeat (10)” with “wait (1) seconds” and “change [time] by (-1)” inside.",
      "Below the loop: “say [Time's up!] for (2) seconds” and “stop [all]”.",
      "Press the flag and watch the count.",
    ]),
    challenge: L("Pon esta cuenta regresiva en tu juego de estrellas: ¿cuántas atrapas en 10 segundos?", "Put this countdown in your stars game: how many can you catch in 10 seconds?"),
    expect: L("El número del escenario baja de 10 a 0, uno por segundo, y al final aparece el aviso.", "The number on the stage goes down from 10 to 0, one per second, and the message appears at the end."),
    check: L([
      "Si la cuenta va muy rápido, revisa que la espera sea de 1 segundo.",
      "Si no llega a 0, revisa que el bucle repita 10 veces y que empiece en 10.",
    ], [
      "If the count goes too fast, check that the wait is 1 second.",
      "If it doesn't reach 0, check that the loop repeats 10 times and starts at 10.",
    ]),
  },
  unplugged: L("Usen un reloj de arena o un temporizador de cocina: ¿cuántas cosas puedes ordenar antes de que termine?", "Use a sand timer or a kitchen timer: how many things can you tidy before it ends?"),
  family: L("Hablen de cuánto es un segundo y cuenten juntos hacia atrás, como en un lanzamiento de cohete.", "Talk about how long a second is and count down together, like a rocket launch."),
};

lessonData.varsAsk = {
  goal: L("Vas a hacer una pregunta y usar la respuesta.", "You will ask a question and use the answer."),
  look: L([
    "“preguntar [¿Cómo te llamas?] y esperar” (Sensores) muestra la pregunta y una casilla para escribir. El programa espera hasta que respondas.",
    "Lo que escribiste queda guardado en “respuesta”, un bloque redondo que puedes poner dentro de otros bloques.",
    "“unir [ ] [ ]” (Operadores, la categoría verde) junta dos textos en uno. Con él, el objeto puede decir “¡Hola, ” y tu respuesta juntos.",
  ], [
    "“ask [What's your name?] and wait” (Sensing) shows the question and a box to type in. The program waits until you answer.",
    "What you typed is kept in “answer”, a round block you can put inside other blocks.",
    "“join [ ] [ ]” (Operators, the green category) puts two texts together. With it, the sprite can say “Hello, ” and your answer together.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "sensing:preguntar [¿Cómo te llamas?] y esperar", "looks:decir {operators:unir [¡Hola, ] {sensing:respuesta}} durante (2) segundos"],
    ["events:when ⚑ clicked", "sensing:ask [What's your name?] and wait", "looks:say {operators:join [Hello, ] {sensing:answer}} for (2) seconds"],
  ),
  caption: L("Pregunta tu nombre y te saluda con él.", "It asks your name and greets you with it."),
  activities: [
    {
      id: "vars-ask-says",
      type: "choice",
      prompt: L("Con el programa de arriba, escribes “Sol”. ¿Qué dice el objeto?", "With the program above, you type “Sol”. What does the sprite say?"),
      options: L(["¡Hola, Sol", "¿Cómo te llamas?", "respuesta"], ["Hello, Sol", "What's your name?", "answer"]),
      answer: 0,
      hint: L("“unir” junta “¡Hola, ” con lo que escribiste.", "“join” puts “Hello, ” together with what you typed."),
      explain: L("Une el saludo con tu respuesta.", "It joins the greeting with your answer."),
    },
    {
      id: "vars-ask-order",
      type: "order",
      prompt: L("Ordena el programa: pregunta tu color favorito y luego lo repite.", "Put the program in order: it asks your favorite color and then repeats it."),
      blocks: L(
        ["events:al hacer clic en ⚑", "sensing:preguntar [¿Cuál es tu color favorito?] y esperar", "looks:decir {operators:unir [Me gusta el ] {sensing:respuesta}} durante (2) segundos"],
        ["events:when ⚑ clicked", "sensing:ask [What's your favorite color?] and wait", "looks:say {operators:join [I like ] {sensing:answer}} for (2) seconds"],
      ),
      hint: L("No puede usar la respuesta antes de preguntar.", "It can't use the answer before asking."),
      explain: L("Primero pregunta, después usa la respuesta.", "First it asks, then it uses the answer."),
    },
  ],
  scratch: {
    steps: L([
      "Arma “al hacer clic en ⚑” y “preguntar [¿Cómo te llamas?] y esperar” (Sensores).",
      "Encaja “decir [¡Hola!] durante (2) segundos”.",
      "Arrastra “unir [ ] [ ]” (Operadores) al primer hueco del “decir”. En el primer hueco de “unir” escribe “¡Hola, ” (con un espacio al final).",
      "Arrastra “respuesta” (Sensores) al segundo hueco de “unir”.",
      "Presiona la bandera y escribe un nombre o un apodo.",
    ], [
      "Build “when ⚑ clicked” and “ask [What's your name?] and wait” (Sensing).",
      "Snap “say [Hello!] for (2) seconds”.",
      "Drag “join [ ] [ ]” (Operators) into the first slot of “say”. In the first slot of “join” type “Hello, ” (with a space at the end).",
      "Drag “answer” (Sensing) into the second slot of “join”.",
      "Press the flag and type a name or nickname.",
    ]),
    challenge: L("Agrega otra pregunta, por ejemplo tu comida favorita, y haz que el objeto la comente.", "Add another question, for example your favorite food, and make the sprite comment on it."),
    expect: L("El objeto pregunta, espera a que escribas y te saluda con lo que escribiste.", "The sprite asks, waits for you to type, and greets you with what you typed."),
    check: L([
      "Si las palabras salen pegadas, agrega un espacio al final del primer texto de “unir”.",
      "Si dice la pregunta otra vez, revisa que en el “decir” esté “respuesta” y no la pregunta.",
    ], [
      "If the words are stuck together, add a space at the end of the first text in “join”.",
      "If it repeats the question, check that “say” has “answer” and not the question.",
    ]),
  },
  unplugged: L("Entrevista a alguien de la familia: haz una pregunta, escucha la respuesta y repítela en una frase completa.", "Interview someone in your family: ask a question, listen to the answer and repeat it in a full sentence."),
  family: L("Recuerden no escribir datos personales reales, como apellidos o direcciones, en proyectos que se comparten.", "Remember not to type real personal data, like last names or addresses, in projects that get shared."),
};

lessonData.varsRandom = {
  goal: L("Vas a usar números al azar.", "You will use random numbers."),
  look: L([
    "“número aleatorio entre (1) y (10)” (Operadores) elige un número sorpresa entre esos dos, cada vez distinto. Al azar significa que no sabes cuál saldrá.",
    "Sirve para dados, para que algo aparezca en un lugar sorpresa o para que un juego no sea siempre igual.",
  ], [
    "“pick random (1) to (10)” (Operators) picks a surprise number between those two, different each time. Random means you don't know which one will come up.",
    "It's for dice, for making something appear in a surprise place, or for making a game different every time.",
  ]),
  program: L(
    ["events:al presionar tecla [espacio]", "looks:decir {operators:número aleatorio entre (1) y (6)} durante (2) segundos"],
    ["events:when [space] key pressed", "looks:say {operators:pick random (1) to (6)} for (2) seconds"],
  ),
  caption: L("Un dado: cada vez que presionas espacio, dice un número del 1 al 6.", "A die: each time you press space, it says a number from 1 to 6."),
  activities: [
    {
      id: "vars-random-dice",
      type: "choice",
      prompt: L("Quieres un dado normal, de 6 caras. ¿Qué bloque usas?", "You want a normal 6-sided die. Which block do you use?"),
      options: L(["operators:número aleatorio entre (1) y (6)", "operators:número aleatorio entre (0) y (10)", "operators:número aleatorio entre (6) y (6)"], ["operators:pick random (1) to (6)", "operators:pick random (0) to (10)", "operators:pick random (6) to (6)"]),
      answer: 0,
      hint: L("Un dado tiene caras del 1 al 6.", "A die has faces from 1 to 6."),
      explain: L("Entre 1 y 6, como las caras de un dado.", "Between 1 and 6, like the faces of a die."),
    },
    {
      id: "vars-random-same",
      type: "choice",
      prompt: L("Presionas espacio tres veces. ¿Sale siempre el mismo número?", "You press space three times. Does the same number always come up?"),
      options: L(["No: cada vez puede salir uno distinto", "Sí, siempre el mismo", "Siempre sale 6"], ["No: each time it can be different", "Yes, always the same", "It's always 6"]),
      answer: 0,
      hint: L("Al azar significa sorpresa.", "Random means surprise."),
      explain: L("Cada vez se elige un número nuevo; a veces se repite, por casualidad.", "A new number is picked each time; sometimes it repeats, by chance."),
    },
  ],
  scratch: {
    steps: L([
      "Arma “al presionar tecla [espacio]” y “decir [¡Hola!] durante (2) segundos”.",
      "Arrastra “número aleatorio entre (1) y (10)” (Operadores) al primer hueco del “decir” y cambia el 10 por 6.",
      "Haz clic en el escenario y presiona espacio varias veces.",
    ], [
      "Build “when [space] key pressed” and “say [Hello!] for (2) seconds”.",
      "Drag “pick random (1) to (10)” (Operators) into the first slot of “say” and change 10 to 6.",
      "Click the stage and press space several times.",
    ]),
    challenge: L("Haz que un objeto aparezca en un lugar sorpresa: “ir a x: () y: ()” con un número aleatorio entre -200 y 200 en x, y entre -150 y 150 en y.", "Make a sprite appear in a surprise place: “go to x: () y: ()” with a random number from -200 to 200 for x, and from -150 to 150 for y."),
    expect: L("Cada vez que presionas espacio, el objeto dice un número del 1 al 6.", "Each time you press space, the sprite says a number from 1 to 6."),
    check: L([
      "Si siempre dice lo mismo, revisa que los dos números del bloque sean distintos.",
      "Si las teclas no responden, haz clic una vez en el escenario.",
    ], [
      "If it always says the same thing, check that the block's two numbers are different.",
      "If the keys don't respond, click the stage once.",
    ]),
  },
  unplugged: L("Lancen un dado de verdad 12 veces y anoten los resultados. ¿Salió algún número dos veces seguidas?", "Roll a real die 12 times and write down the results. Did any number come up twice in a row?"),
  family: L("Pregunte por qué el azar hace divertidos los juegos: ¿sería divertido un dado que siempre sale 6?", "Ask why chance makes games fun: would a die that always rolls 6 be fun?"),
};

lessonData.varsCompare = {
  goal: L("Vas a comparar números para decidir.", "You will compare numbers to decide."),
  look: L([
    "Los bloques “( ) > ( )”, “( ) < ( )” y “( ) = ( )” (Operadores) son condiciones: comparan dos valores y dicen si es verdadero o falso. > significa “mayor que” y < significa “menor que”.",
    "Se ponen dentro de un “si”, igual que “¿tocando…?”. Por ejemplo: si la respuesta es igual al número secreto, ganaste.",
    "“y”, “o” y “no” combinan condiciones: “⟨ ⟩ y ⟨ ⟩” es verdadera solo cuando las dos lo son.",
  ], [
    "The blocks “( ) > ( )”, “( ) < ( )” and “( ) = ( )” (Operators) are conditions: they compare two values and say whether it's true or false. > means “greater than” and < means “less than”.",
    "They go inside an “if”, just like “touching…?”. For example: if the answer equals the secret number, you won.",
    "“and”, “or” and “not” combine conditions: “⟨ ⟩ and ⟨ ⟩” is true only when both are.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "variables:dar a [secreto] el valor {operators:número aleatorio entre (1) y (10)}", "control:por siempre {", "sensing:preguntar [Adivina mi número del 1 al 10] y esperar", "control:si ⟨operators:{sensing:respuesta} = {variables:secreto}⟩ entonces {", "looks:decir [¡Adivinaste!] durante (2) segundos", "control:detener [todos]", "} si no {", "control:si ⟨operators:{sensing:respuesta} > {variables:secreto}⟩ entonces {", "looks:decir [Es más pequeño.] durante (1) segundos", "} si no {", "looks:decir [Es más grande.] durante (1) segundos", "}", "}", "}"],
    ["events:when ⚑ clicked", "variables:set [secret] to {operators:pick random (1) to (10)}", "control:forever {", "sensing:ask [Guess my number from 1 to 10] and wait", "control:if ⟨operators:{sensing:answer} = {variables:secret}⟩ then {", "looks:say [You got it!] for (2) seconds", "control:stop [all]", "} else {", "control:if ⟨operators:{sensing:answer} > {variables:secret}⟩ then {", "looks:say [It's smaller.] for (1) seconds", "} else {", "looks:say [It's bigger.] for (1) seconds", "}", "}", "}"],
  ),
  caption: L("Adivina el número: el programa compara tu respuesta con el secreto y te da pistas.", "Guess the number: the program compares your answer with the secret and gives you clues."),
  activities: [
    {
      id: "vars-compare-true",
      type: "match",
      prompt: L("Une cada comparación con su resultado.", "Match each comparison with its result."),
      pairs: L([
        ["operators:(7) > (3)", "Verdadero"],
        ["operators:(2) > (9)", "Falso"],
        ["operators:(5) = (6)", "También falso"],
      ], [
        ["operators:(7) > (3)", "True"],
        ["operators:(2) > (9)", "False"],
        ["operators:(5) = (6)", "Also false"],
      ]),
      explain: L("7 es mayor que 3; 2 no es mayor que 9; 5 no es igual a 6.", "7 is greater than 3; 2 is not greater than 9; 5 is not equal to 6."),
    },
    {
      id: "vars-compare-clue",
      type: "choice",
      prompt: L("El número secreto es 4 y escribes 8. ¿Qué pista te da el juego?", "The secret number is 4 and you type 8. What clue does the game give you?"),
      options: L(["Es más pequeño.", "Es más grande.", "¡Adivinaste!"], ["It's smaller.", "It's bigger.", "You got it!"]),
      answer: 0,
      hint: L("¿8 es mayor que 4?", "Is 8 greater than 4?"),
      explain: L("8 > 4 es verdadero: el secreto es más pequeño.", "8 > 4 is true: the secret is smaller."),
    },
  ],
  scratch: {
    steps: L([
      "Crea la variable “secreto”. Arma “al hacer clic en ⚑” y “dar a [secreto] el valor ( )” con “número aleatorio entre (1) y (10)” adentro.",
      "Encaja “por siempre” y adentro “preguntar [Adivina mi número del 1 al 10] y esperar”.",
      "Debajo, un “si … si no”. En su hueco pon “( ) = ( )” con “respuesta” a un lado y “secreto” al otro.",
      "En la boca de arriba: “decir [¡Adivinaste!] durante (2) segundos” y “detener [todos]”.",
      "En la de abajo, otro “si … si no” con “respuesta > secreto”: arriba “decir [Es más pequeño.]”, abajo “decir [Es más grande.]”, cada uno durante 1 segundo.",
      "Presiona la bandera y juega.",
    ], [
      "Make the variable “secret”. Build “when ⚑ clicked” and “set [secret] to ( )” with “pick random (1) to (10)” inside.",
      "Snap “forever” and put “ask [Guess my number from 1 to 10] and wait” inside.",
      "Below, an “if … else”. In its slot put “( ) = ( )” with “answer” on one side and “secret” on the other.",
      "In the top mouth: “say [You got it!] for (2) seconds” and “stop [all]”.",
      "In the bottom one, another “if … else” with “answer > secret”: on top “say [It's smaller.]”, below “say [It's bigger.]”, each for 1 second.",
      "Press the flag and play.",
    ]),
    challenge: L("Crea la variable “intentos” y súmale 1 en cada pregunta. Al adivinar, que diga cuántos intentos usaste.", "Make a “tries” variable and add 1 for each question. When you guess, make it say how many tries you used."),
    expect: L("El juego pregunta, da pistas de “más pequeño” o “más grande” y se detiene al adivinar.", "The game asks, gives “smaller” or “bigger” clues and stops when you guess."),
    check: L([
      "Si nunca adivinas, revisa que el “=” compare “respuesta” con la variable “secreto”, no con la palabra escrita.",
      "Si las pistas salen al revés, revisa que diga “respuesta > secreto” y no al revés.",
    ], [
      "If you never guess right, check that “=” compares “answer” with the “secret” variable, not the typed word.",
      "If the clues are backwards, check that it says “answer > secret” and not the other way around.",
    ]),
  },
  unplugged: L("Frío o caliente con números: una persona piensa un número del 1 al 20 y la otra adivina; solo se responde “más grande” o “más pequeño”.", "Hot or cold with numbers: one person thinks of a number from 1 to 20 and the other guesses; the only answers are “bigger” or “smaller”."),
  family: L("Se conecta directo con las matemáticas del colegio. ¿En cuántos intentos se puede adivinar siempre un número del 1 al 10?", "It connects directly to school math. In how many tries can you always guess a number from 1 to 10?"),
};
