// Zone 00 — Hello, Scratch. Read by lessons.js. Block names checked against the
// Spanish Scratch editor text; see CONTENT_PLAN.md before changing them.

lessonData.helloWhat = {
  goal: L("Vas a conocer Scratch y a abrirlo por primera vez.", "You will meet Scratch and open it for the first time."),
  look: L([
    "Scratch es un programa gratuito para crear historias, juegos y animaciones. En vez de escribir con letras, armas programas encajando bloques, como piezas de un rompecabezas.",
    "Cada bloque es una instrucción. Un programa es una lista de instrucciones que la computadora sigue en orden, de arriba abajo.",
  ], [
    "Scratch is a free tool for making stories, games and animations. Instead of typing, you build programs by snapping blocks together, like puzzle pieces.",
    "Each block is one instruction. A program is a list of instructions the computer follows in order, from top to bottom.",
  ]),
  program: L(["events:al hacer clic en ⚑", "motion:mover (10) pasos"], ["events:when ⚑ clicked", "motion:move (10) steps"]),
  caption: L("Un programa de dos bloques: al hacer clic en la bandera verde, el personaje avanza 10 pasos.", "A two-block program: when you click the green flag, the character moves 10 steps."),
  terms: L([
    ["Bloque", "Una instrucción, como una pieza de rompecabezas."],
    ["Programa", "Bloques encajados que se siguen en orden."],
    ["Proyecto", "Todo lo que creas y guardas en Scratch."],
  ], [
    ["Block", "One instruction, like a puzzle piece."],
    ["Program", "Blocks snapped together and followed in order."],
    ["Project", "Everything you make and save in Scratch."],
  ]),
  activities: [
    {
      id: "hello-what-build",
      type: "choice",
      prompt: L("¿Cómo se arma un programa en Scratch?", "How do you build a program in Scratch?"),
      options: L(["Encajando bloques, como un rompecabezas", "Escribiendo una carta", "Dibujando con lápiz y papel"], ["By snapping blocks together, like a puzzle", "By writing a letter", "By drawing with pencil and paper"]),
      answer: 0,
      hint: L("Mira el programa de arriba: ¿de qué está hecho?", "Look at the program above: what is it made of?"),
      explain: L("En Scratch los programas se arman con bloques.", "In Scratch, programs are built with blocks."),
    },
    {
      id: "hello-what-words",
      type: "match",
      prompt: L("Une cada palabra con lo que significa.", "Match each word with its meaning."),
      pairs: L([
        ["Bloque", "Una instrucción"],
        ["Programa", "Instrucciones en orden"],
        ["Proyecto", "Lo que creas y guardas"],
      ], [
        ["Block", "One instruction"],
        ["Program", "Instructions in order"],
        ["Project", "What you make and save"],
      ]),
      explain: L("¡Ya hablas como quien programa!", "You already talk like a programmer!"),
    },
  ],
  scratch: {
    steps: L([
      "Con una persona adulta, entra a scratch.mit.edu (o abre la app de Scratch).",
      "Presiona “Crear”, arriba a la izquierda.",
      "Si el editor está en inglés, haz clic en el globo 🌐 de la barra de arriba y elige “Español”.",
      "Busca la bandera verde encima del recuadro blanco de la derecha y haz clic en ella.",
    ], [
      "With a grown-up, go to scratch.mit.edu (or open the Scratch app).",
      "Press “Create”, at the top left.",
      "If the editor is not in your language, click the globe 🌐 in the top bar and choose it.",
      "Find the green flag above the white box on the right and click it.",
    ]),
    challenge: L("Busca el bloque “mover (10) pasos”. Pista: está en la categoría azul, Movimiento.", "Find the “move (10) steps” block. Clue: it is in the blue category, Motion."),
    expect: L("Al hacer clic en la bandera no pasa nada, porque todavía no hay ningún programa. ¡Es normal!", "When you click the flag nothing happens, because there is no program yet. That's normal!"),
    check: L([
      "Si no carga, revisa la conexión a internet o usa la app sin conexión.",
      "Si no ves el globo 🌐, está en la barra de arriba, a la izquierda.",
    ], [
      "If it doesn't load, check the internet connection or use the offline app.",
      "If you can't see the globe 🌐, it is in the top bar, on the left.",
    ]),
  },
  unplugged: L("Juega a “instrucciones para un sándwich”: escribe en un papel los pasos para preparar un sándwich o servir un vaso de agua. Una persona adulta los sigue al pie de la letra, sin adivinar nada. ¿Faltó algún paso? ¡Así sigue instrucciones una computadora!", "Play “sandwich instructions”: write on paper the steps to make a sandwich or pour a glass of water. A grown-up follows them exactly, without guessing anything. Was a step missing? That's how a computer follows instructions!"),
  family: L("Hoy solo se trata de abrir Scratch y perderle el miedo. Scratch es gratis y no hace falta una cuenta para practicar. Pregunte: “¿qué te gustaría crear aquí?”.", "Today is only about opening Scratch and feeling at ease. Scratch is free and you don't need an account to practice. Ask: “what would you like to make here?”."),
};

lessonData.helloEditor = {
  goal: L("Vas a encontrar las partes del editor de Scratch.", "You will find the parts of the Scratch editor."),
  look: L([
    "El editor es la pantalla donde creas. Tiene cuatro zonas principales. Para usar un bloque, lo arrastras de la columna de bloques al área de programación. Si haces clic en un bloque, Scratch lo hace.",
  ], [
    "The editor is the screen where you create. It has four main areas. To use a block, drag it from the blocks column to the code area. If you click a block, Scratch runs it.",
  ]),
  terms: L([
    ["Categorías (izquierda)", "Círculos de colores que agrupan los bloques: Movimiento, Apariencia, Sonido, Eventos…"],
    ["Bloques (al lado)", "La columna con los bloques de la categoría que elegiste."],
    ["Área de programación (centro)", "Donde arrastras y encajas los bloques."],
    ["Escenario (arriba a la derecha)", "Donde ves lo que hace tu programa. Encima están la bandera verde y la señal de alto."],
  ], [
    ["Categories (left)", "Colored circles that group the blocks: Motion, Looks, Sound, Events…"],
    ["Blocks (next to them)", "The column with the blocks of the category you chose."],
    ["Code area (center)", "Where you drag and snap blocks together."],
    ["Stage (top right)", "Where you see what your program does. Above it are the green flag and the stop sign."],
  ]),
  activities: [
    {
      id: "hello-editor-where",
      type: "choice",
      prompt: L("¿Dónde arrastras los bloques para armar tu programa?", "Where do you drag blocks to build your program?"),
      options: L(["En el área de programación, en el centro", "En el escenario", "Sobre la bandera verde"], ["In the code area, in the center", "On the stage", "Onto the green flag"]),
      answer: 0,
      hint: L("El escenario muestra el resultado; los bloques se arman en otro lugar.", "The stage shows the result; blocks are built somewhere else."),
      explain: L("Los programas se arman en el área de programación.", "Programs are built in the code area."),
    },
    {
      id: "hello-editor-category",
      type: "choice",
      prompt: L("¿En qué categoría buscas este bloque?", "In which category do you look for this block?"),
      program: L(["motion:mover (10) pasos"], ["motion:move (10) steps"]),
      options: L(["Movimiento", "Sonido", "Eventos"], ["Motion", "Sound", "Events"]),
      answer: 0,
      hint: L("Este bloque hace que algo se mueva.", "This block makes something move."),
      explain: L("Los bloques que mueven están en Movimiento, la categoría azul.", "Blocks that move things are in Motion, the blue category."),
    },
    {
      id: "hello-editor-buttons",
      type: "match",
      prompt: L("Une cada parte con lo que hace.", "Match each part with what it does."),
      pairs: L([
        ["Bandera verde", "Empieza los programas"],
        ["Señal de alto", "Detiene todo"],
        ["Escenario", "Muestra lo que pasa"],
      ], [
        ["Green flag", "Starts the programs"],
        ["Stop sign", "Stops everything"],
        ["Stage", "Shows what happens"],
      ]),
      explain: L("¡Ya conoces el editor!", "You know the editor now!"),
    },
  ],
  scratch: {
    steps: L([
      "Abre Scratch y presiona “Crear”.",
      "Haz clic en la categoría Movimiento (el círculo azul de la izquierda).",
      "Arrastra el bloque “mover (10) pasos” al área de programación y suéltalo.",
      "Haz clic sobre el bloque que soltaste.",
    ], [
      "Open Scratch and press “Create”.",
      "Click the Motion category (the blue circle on the left).",
      "Drag the “move (10) steps” block to the code area and drop it.",
      "Click the block you dropped.",
    ]),
    challenge: L("Haz clic en el bloque 5 veces. ¿Hacia dónde avanza el personaje?", "Click the block 5 times. Which way does the character go?"),
    expect: L("Con cada clic, el personaje del escenario avanza un poquito hacia la derecha.", "With each click, the character on the stage moves a little to the right."),
    check: L([
      "Si no se mueve, revisa que soltaste el bloque en el área de programación y no de vuelta en la columna de bloques.",
      "Si llegó al borde, arrástralo con el ratón de vuelta al centro del escenario.",
    ], [
      "If it doesn't move, check that you dropped the block in the code area, not back in the blocks column.",
      "If it reached the edge, drag it with the mouse back to the middle of the stage.",
    ]),
  },
  unplugged: L("Dibuja el editor en una hoja: un rectángulo a la izquierda para las categorías y los bloques, uno grande en el centro para programar y uno arriba a la derecha para el escenario. Ponle nombre a cada parte.", "Draw the editor on paper: a rectangle on the left for categories and blocks, a big one in the center for coding, and one at the top right for the stage. Label each part."),
  family: L("Pídale que le haga un “tour” del editor: ¿para qué sirve cada parte? Explicarlo en voz alta ayuda a recordar.", "Ask for a “tour” of the editor: what is each part for? Explaining out loud helps to remember."),
};

lessonData.helloSprites = {
  goal: L("Vas a agregar personajes y un fondo a tu proyecto.", "You will add characters and a backdrop to your project."),
  look: L([
    "En Scratch, los personajes y las cosas que aparecen en el escenario se llaman objetos. Detrás de todo está el fondo, como el decorado de un teatro.",
    "Cada objeto tiene sus propios programas. Cuando eliges un objeto en la lista de abajo a la derecha, el área de programación muestra solo sus bloques. El objeto elegido tiene un borde azul.",
  ], [
    "In Scratch, the characters and things on the stage are called sprites. Behind everything is the backdrop, like the scenery in a theater.",
    "Each sprite has its own programs. When you choose a sprite in the list at the bottom right, the code area shows only its blocks. The chosen sprite has a blue border.",
  ]),
  terms: L([
    ["Objeto", "Un personaje o una cosa del proyecto."],
    ["Escenario", "El lugar donde actúan los objetos."],
    ["Fondo", "La imagen del escenario, detrás de todo."],
  ], [
    ["Sprite", "A character or thing in the project."],
    ["Stage", "The place where the sprites act."],
    ["Backdrop", "The picture on the stage, behind everything."],
  ]),
  activities: [
    {
      id: "hello-sprites-whose",
      type: "choice",
      prompt: L("Tienes dos objetos: Pelota y Jugador. Quieres que la Pelota se mueva. ¿Dónde pones el bloque “mover (10) pasos”?", "You have two sprites: Ball and Player. You want the Ball to move. Where do you put the “move (10) steps” block?"),
      options: L(["En los programas de la Pelota", "En los programas del Jugador", "En el fondo"], ["In the Ball's programs", "In the Player's programs", "In the backdrop"]),
      answer: 0,
      hint: L("Cada objeto tiene sus propios programas.", "Each sprite has its own programs."),
      explain: L("Eliges la Pelota en la lista y armas el programa ahí.", "You choose the Ball in the list and build the program there."),
    },
    {
      id: "hello-sprites-words",
      type: "match",
      prompt: L("Une cada palabra con lo que es.", "Match each word with what it is."),
      pairs: L([
        ["Objeto", "Un personaje o una cosa"],
        ["Escenario", "Donde actúan los objetos"],
        ["Fondo", "La imagen de atrás"],
      ], [
        ["Sprite", "A character or thing"],
        ["Stage", "Where sprites act"],
        ["Backdrop", "The picture behind"],
      ]),
      explain: L("Objetos, escenario y fondo: las piezas de todo proyecto.", "Sprites, stage and backdrop: the pieces of every project."),
    },
  ],
  scratch: {
    steps: L([
      "Abre Scratch y presiona “Crear”.",
      "Abajo a la derecha, haz clic en el botón redondo “Elige un objeto” y elige uno de la biblioteca, por ejemplo un animal.",
      "Arriba de la lista de objetos, en la casilla “Objeto”, cambia su nombre a “Jugador”.",
      "En la esquina de abajo a la derecha, en “Escenario”, usa el botón “Elige un fondo” y elige uno.",
    ], [
      "Open Scratch and press “Create”.",
      "At the bottom right, click the round “Choose a Sprite” button and pick one from the library, for example an animal.",
      "Above the sprite list, in the “Sprite” box, change its name to “Player”.",
      "In the bottom right corner, under “Stage”, use the “Choose a Backdrop” button and pick one.",
    ]),
    challenge: L("Agrega un segundo objeto y ponle un nombre claro. Haz clic en cada objeto de la lista y mira el área de programación.", "Add a second sprite and give it a clear name. Click each sprite in the list and look at the code area."),
    expect: L("Hay dos objetos con su nombre y un fondo nuevo. Al cambiar de objeto, el área de programación cambia, porque cada objeto tiene sus propios programas.", "There are two named sprites and a new backdrop. When you switch sprites, the code area changes, because each sprite has its own programs."),
    check: L([
      "Si un objeto quedó escondido detrás de otro, arrástralo con el ratón en el escenario.",
      "Si no ves “Elige un objeto”, búscalo abajo a la derecha, debajo de la lista de objetos.",
    ], [
      "If a sprite is hidden behind another one, drag it with the mouse on the stage.",
      "If you can't see “Choose a Sprite”, look at the bottom right, below the sprite list.",
    ]),
  },
  unplugged: L("Teatro de títeres: cada títere es un objeto y la caja es el escenario. Dibujen otro decorado para cambiar el fondo. Cada títere sabe hacer cosas distintas, ¡como los objetos con sus programas!", "Puppet theater: each puppet is a sprite and the box is the stage. Draw new scenery to change the backdrop. Each puppet knows different things to do, just like sprites with their programs!"),
  family: L("Hablen de nombres claros: “Jugador” y “Pelota” dicen mucho más que “Objeto1” y “Objeto2”.", "Talk about clear names: “Player” and “Ball” say much more than “Sprite1” and “Sprite2”."),
};

lessonData.helloSave = {
  goal: L("Vas a guardar tu proyecto y volver a abrirlo.", "You will save your project and open it again."),
  look: L([
    "Si cierras Scratch sin guardar, pierdes tu trabajo. Hay dos formas de guardar, según tengas cuenta o no.",
    "Compartir es distinto a guardar: publica tu proyecto en la página de Scratch, donde cualquier persona puede verlo y remezclarlo. Comparte solo si una persona adulta está de acuerdo.",
  ], [
    "If you close Scratch without saving, you lose your work. There are two ways to save, depending on whether you have an account.",
    "Sharing is not the same as saving: it publishes your project on the Scratch website, where anyone can see and remix it. Share only if a grown-up agrees.",
  ]),
  terms: L([
    ["Sin cuenta", "Archivo → Guardar en tu computadora. Se descarga un archivo que termina en .sb3."],
    ["Abrir otra vez", "Archivo → Cargar desde tu computadora, y eliges ese archivo .sb3."],
    ["Con cuenta", "Archivo → Guardar ahora. Tu proyecto queda en “Mis cosas”."],
  ], [
    ["Without an account", "File → Save to your computer. A file ending in .sb3 is downloaded."],
    ["Open it again", "File → Load from your computer, and choose that .sb3 file."],
    ["With an account", "File → Save now. Your project stays in “My Stuff”."],
  ]),
  activities: [
    {
      id: "hello-save-steps",
      type: "order",
      prompt: L("Ordena los pasos para guardar sin cuenta y volver a abrir tu proyecto.", "Put the steps in order to save without an account and open your project again."),
      blocks: L([
        "Abro el menú Archivo",
        "Elijo “Guardar en tu computadora”",
        "Cierro Scratch",
        "Abro Scratch y elijo Archivo → Cargar desde tu computadora",
      ], [
        "I open the File menu",
        "I choose “Save to your computer”",
        "I close Scratch",
        "I open Scratch and choose File → Load from your computer",
      ]),
      hint: L("Primero se guarda, después se cierra y al final se vuelve a abrir.", "First you save, then you close, and last you open it again."),
      explain: L("Así tu proyecto vuelve tal como lo dejaste.", "That way your project comes back just as you left it."),
    },
    {
      id: "hello-save-share",
      type: "choice",
      prompt: L("¿Qué pasa cuando compartes un proyecto?", "What happens when you share a project?"),
      options: L(["Cualquier persona puede verlo y remezclarlo", "Solo tú puedes verlo", "Se borra de tu computadora"], ["Anyone can see and remix it", "Only you can see it", "It is deleted from your computer"]),
      answer: 0,
      hint: L("Compartir es como poner tu dibujo en un tablero que todo el mundo ve.", "Sharing is like pinning your drawing on a board everyone can see."),
      explain: L("Por eso compartes solo con permiso de una persona adulta.", "That's why you share only with a grown-up's permission."),
    },
  ],
  scratch: {
    steps: L([
      "Abre el proyecto de la página anterior, o crea uno nuevo y agrega un objeto.",
      "Haz clic en Archivo → Guardar en tu computadora.",
      "Busca el archivo .sb3 en la carpeta Descargas.",
      "Cierra Scratch, ábrelo otra vez y usa Archivo → Cargar desde tu computadora para abrir el archivo.",
    ], [
      "Open the project from the previous page, or create a new one and add a sprite.",
      "Click File → Save to your computer.",
      "Find the .sb3 file in the Downloads folder.",
      "Close Scratch, open it again and use File → Load from your computer to open the file.",
    ]),
    challenge: L("Ponle a tu archivo un nombre que reconozcas, por ejemplo “mi-primer-proyecto”.", "Give your file a name you will recognize, for example “my-first-project”."),
    expect: L("Al cargar el archivo, aparecen otra vez tus objetos y tu fondo, tal como los dejaste.", "When you load the file, your sprites and backdrop appear again, just as you left them."),
    check: L([
      "Si no encuentras el archivo, revisa la carpeta Descargas o pide ayuda a una persona adulta.",
      "Con cuenta, revisa que hayas iniciado sesión: si no, no aparece “Guardar ahora”.",
    ], [
      "If you can't find the file, look in the Downloads folder or ask a grown-up for help.",
      "With an account, check that you are signed in: otherwise “Save now” doesn't appear.",
    ]),
  },
  unplugged: L("Guarda un dibujo en una carpeta con tu nombre y la fecha. ¿Lo puedes encontrar mañana? Guardar en la computadora es igual: un nombre claro y un lugar que recuerdes.", "Put a drawing in a folder with your name and the date. Can you find it tomorrow? Saving on the computer is the same: a clear name and a place you remember."),
  family: L("Decidan juntos si crean una cuenta (la página “Empieza en Scratch” explica cómo). Sin cuenta todo funciona guardando en la computadora. Compartir, solo con su permiso.", "Decide together whether to create an account (the “Start in Scratch” page explains how). Without one, everything works by saving to the computer. Share only with your permission."),
};
