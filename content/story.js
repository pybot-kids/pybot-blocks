// Zone 07 — Tell stories. Dialogues, scenes, messages and planning.

lessonData.storyDialog = {
  goal: L("Vas a hacer que dos personajes conversen por turnos.", "You will make two characters talk in turns."),
  look: L([
    "En una conversación, cada personaje habla en su turno. Con lo que ya sabes, eso se logra con esperas: mientras uno habla, el otro espera.",
    "Si Ana habla durante 2 segundos, Beto debe esperar 2 segundos antes de responder. Y Ana espera mientras Beto habla. Hay que sumar bien los tiempos.",
  ], [
    "In a conversation, each character talks in turn. With what you know, you do it with waits: while one talks, the other waits.",
    "If Ana talks for 2 seconds, Beto must wait 2 seconds before answering. And Ana waits while Beto talks. The times must add up.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "looks:decir [¿Qué le dijo un semáforo a otro?] durante (2) segundos", "control:esperar (2) segundos", "looks:decir [¡No me mires, que me estoy cambiando!] durante (3) segundos", "---", "events:al hacer clic en ⚑", "control:esperar (2) segundos", "looks:decir [No sé, ¿qué le dijo?] durante (2) segundos"],
    ["events:when ⚑ clicked", "looks:say [What did one traffic light say to the other?] for (2) seconds", "control:wait (2) seconds", "looks:say [Don't look, I'm changing!] for (3) seconds", "---", "events:when ⚑ clicked", "control:wait (2) seconds", "looks:say [I don't know, what?] for (2) seconds"],
  ),
  caption: L("Ana (izquierda) pregunta; Beto (derecha) espera 2 segundos y responde; Ana espera esos 2 segundos y dice el final.", "Ana (left) asks; Beto (right) waits 2 seconds and answers; Ana waits those 2 seconds and says the punchline."),
  activities: [
    {
      id: "story-dialog-wait",
      type: "choice",
      prompt: L("Ana habla durante 3 segundos. ¿Cuánto debe esperar Beto antes de responder?", "Ana talks for 3 seconds. How long must Beto wait before answering?"),
      options: L(["3 segundos", "0 segundos", "10 segundos"], ["3 seconds", "0 seconds", "10 seconds"]),
      answer: 0,
      hint: L("Beto responde cuando Ana termina.", "Beto answers when Ana finishes."),
      explain: L("Espera lo mismo que dura la frase de Ana.", "He waits as long as Ana's sentence lasts."),
    },
    {
      id: "story-dialog-same",
      type: "choice",
      prompt: L("Los dos personajes hablan al mismo tiempo y no se entiende nada. ¿Qué falta?", "Both characters talk at the same time and nothing makes sense. What's missing?"),
      options: L(["Un “esperar” al inicio del programa del que responde", "Un fondo nuevo", "Más bloques “decir”"], ["A “wait” at the start of the program of the one who answers", "A new backdrop", "More “say” blocks"]),
      answer: 0,
      hint: L("Los dos programas empiezan con la bandera al mismo tiempo.", "Both programs start with the flag at the same time."),
      explain: L("Quien responde espera su turno.", "The one who answers waits for their turn."),
    },
  ],
  scratch: {
    steps: L([
      "Agrega dos personajes y llámalos Ana y Beto.",
      "En Ana: “al hacer clic en ⚑”, “decir [¿Qué le dijo un semáforo a otro?] durante (2) segundos”, “esperar (2) segundos” y “decir [¡No me mires, que me estoy cambiando!] durante (3) segundos”.",
      "En Beto: “al hacer clic en ⚑”, “esperar (2) segundos” y “decir [No sé, ¿qué le dijo?] durante (2) segundos”.",
      "Presiona la bandera verde.",
    ], [
      "Add two characters and name them Ana and Beto.",
      "In Ana: “when ⚑ clicked”, “say [What did one traffic light say to the other?] for (2) seconds”, “wait (2) seconds” and “say [Don't look, I'm changing!] for (3) seconds”.",
      "In Beto: “when ⚑ clicked”, “wait (2) seconds” and “say [I don't know, what?] for (2) seconds”.",
      "Press the green flag.",
    ]),
    challenge: L("Agrega una frase más de Beto al final, como “¡Ja, ja!”. ¿Cuánto debe esperar? Suma los tiempos.", "Add one more line for Beto at the end, like “Ha ha!”. How long must he wait? Add up the times."),
    expect: L("Ana pregunta, Beto responde y Ana dice el final, sin pisarse.", "Ana asks, Beto answers and Ana says the punchline, without talking over each other."),
    check: L([
      "Si hablan a la vez, revisa las esperas de cada uno.",
      "Si el programa de Ana no avanza, revisa que su “esperar” sea igual a lo que dura la frase de Beto.",
    ], [
      "If they talk at once, check each one's waits.",
      "If Ana's program seems stuck, check that her “wait” equals the length of Beto's line.",
    ]),
  },
  unplugged: L("Lean un diálogo en voz alta por turnos. Una persona cuenta los segundos con los dedos para saber cuándo le toca.", "Read a dialogue out loud in turns. One person counts the seconds on their fingers to know when it's their turn."),
  family: L("Verán que coordinar con esperas cuesta. En la página “Enviar mensajes” se resuelve de una forma más fácil.", "You'll see that coordinating with waits is tricky. The “Send messages” page solves it in an easier way."),
};

lessonData.storyScenes = {
  goal: L("Vas a contar una historia en varias escenas.", "You will tell a story in several scenes."),
  look: L([
    "Una historia tiene escenas: en la casa, en el parque, en la noche… Cada escena puede ser un fondo distinto. “cambiar fondo a [ ]” pasa de una escena a otra.",
    "“cuando el fondo cambie a [ ]” (Eventos) empieza un programa cuando aparece ese fondo. Así un personaje puede aparecer solo en la escena que le toca.",
    "Recuerda el estado inicial: al presionar la bandera, quien no está en la primera escena se esconde.",
  ], [
    "A story has scenes: at home, at the park, at night… Each scene can be a different backdrop. “switch backdrop to [ ]” moves from one scene to another.",
    "“when backdrop switches to [ ]” (Events) starts a program when that backdrop appears. That way a character can appear only in its scene.",
    "Remember the starting state: when the flag is pressed, whoever is not in the first scene hides.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "looks:cambiar fondo a [Casa]", "looks:decir [Voy al parque.] durante (2) segundos", "looks:cambiar fondo a [Parque]", "---", "events:al hacer clic en ⚑", "looks:esconder", "---", "events:cuando el fondo cambie a [Parque]", "looks:mostrar", "looks:decir [¡Guau!] durante (1) segundos"],
    ["events:when ⚑ clicked", "looks:switch backdrop to [Home]", "looks:say [I'm going to the park.] for (2) seconds", "looks:switch backdrop to [Park]", "---", "events:when ⚑ clicked", "looks:hide", "---", "events:when backdrop switches to [Park]", "looks:show", "looks:say [Woof!] for (1) seconds"],
  ),
  caption: L("Primer programa: la niña, que cambia de escena. Los otros dos: el perro, que se esconde al empezar y aparece en el parque.", "First program: the girl, who changes the scene. The other two: the dog, which hides at the start and appears at the park."),
  activities: [
    {
      id: "story-scenes-when",
      type: "choice",
      prompt: L("Con esos programas, ¿cuándo aparece el perro?", "With those programs, when does the dog appear?"),
      options: L(["Cuando el fondo cambia a Parque", "Apenas presionas la bandera", "Nunca"], ["When the backdrop switches to Park", "As soon as you press the flag", "Never"]),
      answer: 0,
      hint: L("Mira el evento de su segundo programa.", "Look at the event of its second program."),
      explain: L("Al empezar se esconde; con el fondo Parque, se muestra.", "At the start it hides; with the Park backdrop, it shows."),
    },
    {
      id: "story-scenes-start",
      type: "choice",
      prompt: L("Al volver a presionar la bandera, el perro aparece en la casa, donde no debería estar. ¿Qué falta?", "When you press the flag again, the dog appears at home, where it shouldn't be. What's missing?"),
      options: L(["looks:esconder", "looks:mostrar", "looks:siguiente disfraz"], ["looks:hide", "looks:show", "looks:next costume"]),
      answer: 0,
      hint: L("Al empezar la historia, el perro no está en escena.", "When the story starts, the dog is not in the scene."),
      explain: L("“al hacer clic en ⚑” + “esconder” prepara la primera escena.", "“when ⚑ clicked” + “hide” sets up the first scene."),
    },
  ],
  scratch: {
    steps: L([
      "Agrega dos fondos para tu historia, por ejemplo una casa y un parque.",
      "En el personaje principal: “al hacer clic en ⚑”, “cambiar fondo a [ ]” con la casa, un “decir … durante (2) segundos” y “cambiar fondo a [ ]” con el parque.",
      "Agrega un segundo personaje. En él: “al hacer clic en ⚑” y “esconder”.",
      "En el segundo personaje, otro programa: “cuando el fondo cambie a [ ]” con el parque, “mostrar” y un “decir”.",
      "Presiona la bandera verde.",
    ], [
      "Add two backdrops for your story, for example a house and a park.",
      "In the main character: “when ⚑ clicked”, “switch backdrop to [ ]” with the house, a “say … for (2) seconds” and “switch backdrop to [ ]” with the park.",
      "Add a second character. In it: “when ⚑ clicked” and “hide”.",
      "In the second character, another program: “when backdrop switches to [ ]” with the park, “show” and a “say”.",
      "Press the green flag.",
    ]),
    challenge: L("Agrega una tercera escena, por ejemplo la noche, con algo que solo aparezca ahí.", "Add a third scene, for example night, with something that only appears there."),
    expect: L("La historia empieza en la casa; al cambiar al parque, aparece el segundo personaje y habla.", "The story starts at home; when it switches to the park, the second character appears and talks."),
    check: L([
      "Si el segundo personaje aparece desde el principio, revisa su programa de la bandera con “esconder”.",
      "Si no aparece nunca, revisa que el menú de “cuando el fondo cambie a” tenga el fondo correcto.",
    ], [
      "If the second character shows from the start, check its flag program with “hide”.",
      "If it never appears, check that the “when backdrop switches to” menu has the right backdrop.",
    ]),
  },
  unplugged: L("Cuenten un cuento en tres dibujos, uno por escena. ¿Quién aparece en cada una?", "Tell a story in three drawings, one per scene. Who appears in each one?"),
  family: L("Pidan que cuenten la historia antes de programarla: inicio, nudo y final.", "Ask for the story to be told before coding it: beginning, middle and end."),
};

lessonData.storyMessages = {
  goal: L("Vas a coordinar personajes con mensajes.", "You will coordinate characters with messages."),
  look: L([
    "Un mensaje es un aviso invisible que un objeto envía y otros reciben. “enviar [ ]” manda el aviso y “al recibir [ ]” empieza un programa cuando llega.",
    "Con mensajes ya no hay que sumar esperas: cada personaje avisa cuando termina su parte, y el otro empieza al recibir el aviso.",
    "El nombre del mensaje tiene que ser exactamente el mismo al enviar y al recibir.",
  ], [
    "A message is an invisible signal that one sprite sends and others receive. “broadcast [ ]” sends the signal and “when I receive [ ]” starts a program when it arrives.",
    "With messages you no longer add up waits: each character signals when its part is done, and the other one starts when it receives the signal.",
    "The message name must be exactly the same when sending and receiving.",
  ]),
  program: L(
    ["events:al hacer clic en ⚑", "looks:decir [¿Qué le dijo un semáforo a otro?] durante (2) segundos", "events:enviar [tu turno]", "---", "events:al recibir [tu turno]", "looks:decir [No sé, ¿qué le dijo?] durante (2) segundos", "events:enviar [remate]", "---", "events:al recibir [remate]", "looks:decir [¡No me mires, que me estoy cambiando!] durante (3) segundos"],
    ["events:when ⚑ clicked", "looks:say [What did one traffic light say to the other?] for (2) seconds", "events:broadcast [your turn]", "---", "events:when I receive [your turn]", "looks:say [I don't know, what?] for (2) seconds", "events:broadcast [punchline]", "---", "events:when I receive [punchline]", "looks:say [Don't look, I'm changing!] for (3) seconds"],
  ),
  caption: L("El mismo chiste: Ana pregunta y avisa “tu turno”; Beto responde y avisa “remate”; Ana termina.", "The same joke: Ana asks and signals “your turn”; Beto answers and signals “punchline”; Ana finishes."),
  terms: L([["Mensaje", "Un aviso que un objeto envía y otros reciben."]], [["Message", "A signal one sprite sends and others receive."]]),
  activities: [
    {
      id: "story-messages-pair",
      type: "match",
      prompt: L("Une cada envío con el programa que empieza.", "Match each broadcast with the program that starts."),
      pairs: L([
        ["events:enviar [tu turno]", "events:al recibir [tu turno]"],
        ["events:enviar [remate]", "events:al recibir [remate]"],
        ["events:enviar [fin]", "events:al recibir [fin]"],
      ], [
        ["events:broadcast [your turn]", "events:when I receive [your turn]"],
        ["events:broadcast [punchline]", "events:when I receive [punchline]"],
        ["events:broadcast [the end]", "events:when I receive [the end]"],
      ]),
      explain: L("Mismo nombre al enviar y al recibir.", "Same name when sending and receiving."),
    },
    {
      id: "story-messages-name",
      type: "choice",
      prompt: L("Ana envía “tu turno”, pero Beto espera “turno”. ¿Qué pasa?", "Ana broadcasts “your turn”, but Beto waits for “turn”. What happens?"),
      options: L(["Beto nunca habla, porque los nombres no coinciden", "Beto habla igual", "Ana habla dos veces"], ["Beto never talks, because the names don't match", "Beto talks anyway", "Ana talks twice"]),
      answer: 0,
      hint: L("El aviso solo llega a quien espera ese nombre exacto.", "The signal only reaches whoever waits for that exact name."),
      explain: L("Elige el mismo mensaje del menú en los dos bloques.", "Pick the same message from the menu in both blocks."),
    },
  ],
  scratch: {
    steps: L([
      "Usa los personajes de la página de diálogos y borra las esperas.",
      "En Ana, debajo de su pregunta, encaja “enviar [mensaje1]”. En el menú elige “Nuevo mensaje” y escribe “tu turno”.",
      "En Beto: “al recibir [tu turno]”, su “decir … durante (2) segundos” y “enviar [remate]” (otro mensaje nuevo).",
      "En Ana, otro programa: “al recibir [remate]” y el final del chiste.",
      "Presiona la bandera verde.",
    ], [
      "Use the characters from the dialogues page and delete the waits.",
      "In Ana, below her question, snap “broadcast [message1]”. In the menu choose “New message” and type “your turn”.",
      "In Beto: “when I receive [your turn]”, his “say … for (2) seconds” and “broadcast [punchline]” (another new message).",
      "In Ana, another program: “when I receive [punchline]” and the joke's ending.",
      "Press the green flag.",
    ]),
    challenge: L("Usa un mensaje para cambiar de escena: al recibir “fin”, el fondo cambia y aparece un letrero.", "Use a message to change the scene: when “the end” is received, the backdrop changes and a sign appears."),
    expect: L("El chiste sale igual que antes, pero sin esperas: cada uno habla cuando recibe su aviso.", "The joke works like before, but without waits: each one talks when they receive their signal."),
    check: L([
      "Si alguien no habla, revisa que el nombre del mensaje sea igual en “enviar” y en “al recibir”.",
      "Si hablan a la vez, revisa que el “enviar” esté debajo del “decir … durante”.",
    ], [
      "If someone doesn't talk, check that the message name is the same in “broadcast” and “when I receive”.",
      "If they talk at once, check that “broadcast” is below the “say … for”.",
    ]),
  },
  unplugged: L("Teléfono de vasos: solo actúas cuando recibes tu mensaje. Pasen una palabra secreta de persona en persona; cada una hace algo al recibirla.", "Cup telephone: you act only when you receive your message. Pass a secret word from person to person; each one does something when they get it."),
  family: L("Los mensajes son como las señales de una directora de teatro: “¡ahora tú!”.", "Messages are like a theater director's cues: “now you!”."),
};

lessonData.storyPlan = {
  goal: L("Vas a planear tu propia historia antes de programarla.", "You will plan your own story before coding it."),
  look: L([
    "Las historias buenas se planean primero en papel. Un guion gráfico es una hoja con cuadros, uno por escena, donde dibujas qué pasa.",
    "Para cada escena anota: el fondo, quién aparece, qué dice cada personaje y qué mensaje avisa que la escena terminó.",
    "Después programas escena por escena y pruebas cada una antes de seguir.",
  ], [
    "Good stories are planned on paper first. A storyboard is a sheet with boxes, one per scene, where you draw what happens.",
    "For each scene write down: the backdrop, who appears, what each character says and which message signals the scene is over.",
    "Then you code scene by scene and test each one before going on.",
  ]),
  terms: L([["Guion gráfico", "Dibujos en cuadros que muestran cada escena."]], [["Storyboard", "Drawings in boxes that show each scene."]]),
  activities: [
    {
      id: "story-plan-order",
      type: "order",
      prompt: L("Ordena los pasos para crear una historia.", "Put the steps to create a story in order."),
      blocks: L(
        ["Invento la historia y sus personajes", "Dibujo el guion gráfico, una escena por cuadro", "Programo y pruebo la primera escena", "Programo las demás escenas con mensajes"],
        ["I invent the story and its characters", "I draw the storyboard, one scene per box", "I code and test the first scene", "I code the other scenes with messages"],
      ),
      hint: L("Primero se piensa, después se dibuja y al final se programa.", "First you think, then you draw, and last you code."),
      explain: L("Planear primero ahorra mucho trabajo.", "Planning first saves a lot of work."),
    },
    {
      id: "story-plan-tool",
      type: "match",
      prompt: L("Une cada parte de la historia con lo que usas en Scratch.", "Match each part of the story with what you use in Scratch."),
      pairs: L([
        ["Cambiar de lugar", "looks:cambiar fondo a [Parque]"],
        ["Hablar", "looks:decir [¡Hola!] durante (2) segundos"],
        ["Dar el turno a otro personaje", "events:enviar [tu turno]"],
      ], [
        ["Change place", "looks:switch backdrop to [Park]"],
        ["Talk", "looks:say [Hello!] for (2) seconds"],
        ["Give another character the turn", "events:broadcast [your turn]"],
      ]),
      explain: L("Fondos, diálogos y mensajes: todo lo que necesita una historia.", "Backdrops, dialogues and messages: everything a story needs."),
    },
  ],
  scratch: {
    steps: L([
      "Dobla una hoja en cuatro y dibuja en cada cuadro una escena de tu historia.",
      "Debajo de cada cuadro anota el fondo, los personajes, lo que dicen y el mensaje que da paso a la siguiente escena.",
      "En Scratch, agrega los fondos y los personajes.",
      "Programa la primera escena y pruébala. Luego sigue con las demás.",
    ], [
      "Fold a sheet in four and draw one scene of your story in each box.",
      "Under each box write the backdrop, the characters, what they say and the message that leads to the next scene.",
      "In Scratch, add the backdrops and characters.",
      "Code the first scene and test it. Then go on with the others.",
    ]),
    challenge: L("Dale a tu historia un final sorpresa.", "Give your story a surprise ending."),
    expect: L("Tu historia tiene al menos dos escenas y dos personajes que hablan por turnos.", "Your story has at least two scenes and two characters who talk in turns."),
    check: L([
      "Si una escena falla, pruébala sola antes de seguir.",
      "Compara lo que pasa en la pantalla con tu guion gráfico.",
    ], [
      "If a scene fails, test it alone before going on.",
      "Compare what happens on the screen with your storyboard.",
    ]),
  },
  unplugged: L("Dobla una hoja en cuatro y dibuja un cuento corto. Cuéntalo en voz alta señalando cada cuadro.", "Fold a sheet in four and draw a short story. Tell it out loud pointing at each box."),
  family: L("Celebren la historia: no hay una correcta. Pregunte cuál fue su escena favorita de programar.", "Celebrate the story: there is no right one. Ask which scene was their favorite to code."),
};
