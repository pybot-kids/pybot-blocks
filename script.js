// PyBot Blocks — shared script for every page.
// Pages: home, course, album, diploma, faq and start. extras.js adds the extra pages.
// Built with the same strategy as PyBot (https://github.com/pybot-kids/pybot-kids.github.io).

const translations = {
  en: {
    "meta.homeTitle": "PyBot Blocks — learn to use Scratch, one step at a time",
    "meta.homeDescription": "A simple, free guide for kids and their families to learn to use Scratch in order, with short steps and small challenges.",
    "meta.courseTitle": "The path — PyBot Blocks",
    "a11y.skip": "Skip to content",
    "a11y.home": "PyBot Blocks, home",
    "a11y.mainNav": "Main navigation",
    "a11y.language": "Choose language",
    "a11y.features": "Important features",
    "a11y.backTop": "PyBot Blocks, back to top",
    "nav.path": "The path",
    "nav.pathAria": "The learning path",
    "nav.start": "Start in Scratch",
    "nav.album": "Album",
    "nav.albumAria": "My album",
    "nav.faq": "Questions",
    "nav.faqAria": "Frequently asked questions",
    "nav.menu": "Menu",
    "support.aria": "Support PyBot on Patreon (opens in a new tab)",
    "notice.affiliation": "Scratch is a project of the Scratch Foundation. PyBot Blocks is an independent guide: it is not affiliated with or endorsed by it.",
    "chip.soon": "Coming soon",

    "hero.eyebrow": "A guide to Scratch",
    "hero.titleStart": "Learn Scratch,",
    "hero.titleEnd": "one block at a time.",
    "hero.intro": "PyBot shows you the way: what to learn first, what comes next, and a small challenge to make in Scratch.",
    "hero.start": "See the path",
    "hero.firstSteps": "Start in Scratch",
    "trust.free": "Free",
    "trust.accounts": "No accounts here",
    "trust.progress": "Progress stays with you",
    "pybot.says": "PYBOT SAYS",
    "pybot.aria": "PyBot, the robot guide. Tap it to change its face.",
    "mood.happy": "Hi! I am PyBot. Shall we snap some blocks together?",
    "mood.happyNamed": "Hi, {name}! Shall we snap some blocks together?",
    "mood.celebrating": "Every block you learn is a new superpower!",
    "mood.curious": "What do you think this block does? Let's find out!",
    "mood.wink": "Psst… mistakes are clues. Shh, it's a secret.",
    "mood.starry": "Imagine it first. Then build it in Scratch!",
    "mood.thinking": "Hmm… first the event, then the moves.",
    "mood.proud": "I am proud of you for trying, {name}!",
    "mood.proudPlain": "I am proud of you for trying!",
    "name.question": "What would you like me to call you?",
    "name.placeholder": "Name or nickname",
    "name.save": "That's my name!",
    "name.privateNote": "Only this browser remembers it.",
    "name.error": "Please type a name or nickname.",
    "name.forget": "Forget this name",
    "name.savedPrefix": "PyBot calls you",
    "name.change": "Change",

    "loop.eyebrow": "HOW WE LEARN",
    "loop.title": "Look. Try. Create.",
    "loop.intro": "One idea on each page, and always something to make in Scratch.",
    "loop.step1Title": "Look",
    "loop.step1Text": "PyBot shows one block and what it does.",
    "loop.step2Title": "Try it here",
    "loop.step2Text": "A tiny game: order blocks, guess what happens, fix PyBot's program.",
    "loop.step3Title": "Create in Scratch",
    "loop.step3Text": "Exact steps and a short challenge to build in the real Scratch.",

    "mission.eyebrow": "YOUR FIRST MISSION",
    "mission.title": "Make PyBot move and say hello.",
    "mission.text": "Tap the blocks in the right order to build the program. Then press Try it.",
    "mission.hint": "Clue: every program starts with something that happens.",
    "mission.blocks": "Blocks",
    "mission.program": "Your program",
    "mission.empty": "Tap a block to put it here.",
    "mission.blockFlag": "when the green flag is clicked",
    "mission.blockMove": "move {value} steps",
    "mission.blockSay": "say {value} for 2 seconds",
    "mission.hello": "Hello!",
    "mission.try": "▶ Try it",
    "mission.clear": "Start again",
    "mission.needAll": "Use all three blocks first.",
    "mission.needEvent": "Nothing happened! A program needs a block that says when to start, and it goes on top.",
    "mission.good": "Yes! The green flag starts the program. Then PyBot does each block in order, from top to bottom.",
    "mission.again": "You already did this mission. Want to try again?",
    "mission.next": "Next: try it in Scratch",
    "mission.stage": "Stage",

    "unplugged.eyebrow": "TRY IT WITHOUT A SCREEN",
    "unplugged.title": "Programming games for the whole family",
    "unplugged.intro": "These games use the same ideas as Scratch. You only need people, paper, and a little space.",
    "unplugged.robotTitle": "Human robot",
    "unplugged.robotText": "One person is the robot. Another gives orders: “move 2 steps”, “turn right”. Reach the treasure!",
    "unplugged.loopTitle": "Dance loop",
    "unplugged.loopText": "Invent 3 dance moves and repeat them 4 times. That's a repeat block!",
    "unplugged.ifTitle": "If… then",
    "unplugged.ifText": "“If I clap, you jump. If I whistle, you sit.” Take turns making the rules.",
    "unplugged.scoreTitle": "Bean points",
    "unplugged.scoreText": "Each right answer earns one bean in the cup. The cup is a variable that remembers the score.",
    "unplugged.who": "With your family or friends",

    "extras.eyebrow": "MORE FOR YOU",
    "extras.title": "Stickers, first steps and questions",
    "extras.album": "My album",
    "extras.albumText": "Your stickers, diplomas and learning days.",
    "extras.start": "Start in Scratch",
    "extras.startText": "Open Scratch, meet the editor, and see example programs.",
    "extras.faq": "Questions",
    "extras.faqText": "Answers for kids and for families.",

    "local.eyebrow": "YOUR WORK IS YOURS",
    "local.title": "No account. Your progress stays here.",
    "local.text": "This browser remembers your progress. What you create lives in Scratch, not here. Ask an adult before clearing the browser's data.",
    "backup.title": "Moving to another browser?",
    "backup.text": "Save a backup file here. Then load it in the other browser.",
    "backup.export": "Save a backup file",
    "backup.import": "Load a backup file",
    "backup.versionLabel": "Progress version",
    "backup.exported": "Backup saved. Keep the file somewhere safe.",
    "backup.failed": "This browser could not save or load the backup.",
    "backup.invalid": "That file is not a PyBot Blocks backup, or it is damaged.",
    "backup.newer": "That backup comes from a newer PyBot Blocks. Reload the page and try again.",
    "backup.confirm": "Load this backup? It replaces the progress in this browser ({count} finished activities in the file).",
    "backup.loadYes": "Yes, load it",
    "backup.cancelled": "Nothing changed.",
    "backup.imported": "Backup loaded. Welcome back!",
    "backup.upgraded": "Backup loaded and updated to the new path.",
    "reset.title": "For adults: erase all progress",
    "reset.text": "Use this only if you really need it. It erases finished activities, stickers and learning days in this browser. Language, PyBot's settings and the name stay.",
    "reset.button": "Erase all progress",
    "reset.askBackup": "Do you want to save a backup first?",
    "reset.saveFirst": "Save a backup first",
    "reset.skipBackup": "Erase without a backup",
    "reset.confirm": "Erase all progress in this browser? This cannot be undone.",
    "reset.eraseYes": "Yes, erase everything",
    "reset.cancelled": "Nothing was erased.",
    "reset.done": "Progress erased. A fresh start!",
    "reset.failed": "This browser could not erase the progress.",
    "ask.cancel": "Cancel",
    "ask.keep": "No, keep it",

    "family.eyebrow": "THE PYBOT FAMILY",
    "family.title": "Want to learn something else?",
    "family.pythonAsk": "Want to learn Python?",
    "family.pythonText": "real code, one step at a time.",
    "family.englishAsk": "Want to learn English?",
    "family.englishText": "one word at a time, with PyBot.",
    "family.blocksAsk": "Want to learn to use Scratch?",
    "family.blocksText": "a simple guide for kids and families.",
    "family.visit": "Visit →",
    "family.soon": "Coming soon",

    "footer.line": "Small steps. Real Scratch.",
    "footer.family": "From the PyBot family.",
    "footer.credit": "© 2026 Sorey Garcia. Code under MIT, content under CC BY 4.0.",
    "footer.license": "License",

    "course.eyebrow": "THE PATH",
    "course.title": "Your way through Scratch",
    "course.intro": "A few big zones, each with its own route of pages. Go in order: each zone uses what the one before taught.",
    "course.growth": "🚧 Work in progress: we publish the lessons zone by zone. Pages marked “Coming soon” arrive later. Each lesson ends with a “Make it in Scratch” challenge.",
    "course.here": "You are here",
    "course.zone": "ZONE {count}",
    "course.final": "FINAL STOP",
    "course.adults": "For families",
    "course.diploma": "See my diploma",
    "course.pages": "Pages in this zone",

    "zone.hello.title": "Hello, Scratch",
    "zone.hello.text": "What Scratch is, the stage, sprites, and how to save your project.",
    "zone.hello.adults": "Your child learns to open Scratch and find their way around the editor. You don't need to know how to program: sit together, let them click, and ask “what is this for?”. An account is optional; you can practice without one.",
    "zone.move.title": "Move and look",
    "zone.move.text": "Steps, turns, x and y, costumes, saying and thinking.",
    "zone.move.adults": "Motion and Looks blocks: the first programs that make something happen. Ask them to show you how the sprite walks and talks.",
    "zone.events.title": "When something happens",
    "zone.events.text": "The green flag, keys, clicks, and several scripts at once.",
    "zone.events.adults": "Events start programs. It is the idea of cause and effect: “when I press the space key, it jumps”. Try it with real-life examples.",
    "zone.loops.title": "Repeat",
    "zone.loops.text": "Repeat a number of times, forever, animations, and drawing with the pen.",
    "zone.loops.adults": "Loops avoid writing the same thing many times. A song chorus or a hand-clap pattern is a good example to talk about.",
    "zone.decide.title": "Decide",
    "zone.decide.text": "If… then, if… else, and sensing: touching, keys and colors.",
    "zone.decide.adults": "Conditionals let a program choose. Play “Simon says” together: it is an if… then.",
    "zone.remember.title": "Remember",
    "zone.remember.text": "Variables, score, timer, ask and answer, random numbers, and comparing.",
    "zone.remember.adults": "A variable is a box that remembers a value, like a game score. Counting points with beans in a cup is a great way to see it.",
    "zone.sound.title": "Sound and music",
    "zone.sound.text": "Play sounds, make music with notes, and dance to the beat.",
    "zone.sound.adults": "Sound makes projects come alive. If they want to record their voice in Scratch, do it together; it uses the microphone in Scratch, not in PyBot Blocks.",
    "zone.story.title": "Tell stories",
    "zone.story.text": "Dialogues, scene changes, messages between sprites, and planning a story.",
    "zone.story.adults": "Here programming meets storytelling. Ask them to tell you the story first, then build it scene by scene.",
    "zone.games.title": "My games",
    "zone.games.text": "Guided projects: catch, maze, quiz, ball and paddle, clones, and your own game.",
    "zone.games.adults": "Projects bring all the ideas together. Celebrate what they create; there is no grade. Playing their game is the best compliment.",
    "zone.finish.title": "Final stop",
    "zone.finish.text": "Look back at everything you learned, check yourself, and get your diploma.",
    "zone.finish.adults": "A calm review, not an exam. The child marks what they feel sure about and what to practice again.",

    "step.helloWhat": "What is Scratch?",
    "step.helloEditor": "The parts of the editor",
    "step.helloSprites": "Sprites and the stage",
    "step.helloSave": "Save and open your project",
    "step.moveSteps": "Steps and turns",
    "step.moveXY": "Where is it? x and y",
    "step.moveGlide": "Glide and go to",
    "step.looksSay": "Say and think",
    "step.looksCostumes": "Costumes: make it walk",
    "step.looksBackdrops": "Backdrops and size",
    "step.eventsFlag": "The green flag",
    "step.eventsKeys": "Keys that move",
    "step.eventsClick": "When this sprite is clicked",
    "step.eventsTogether": "Several scripts at once",
    "step.loopsRepeat": "Repeat a number of times",
    "step.loopsForever": "Forever",
    "step.loopsAnimate": "Animations that repeat",
    "step.loopsPen": "Draw shapes with the pen",
    "step.ifTouching": "Is it touching?",
    "step.ifElse": "If… else",
    "step.ifKeys": "Is a key pressed?",
    "step.ifColors": "Touching a color",
    "step.varsMake": "Make a variable",
    "step.varsScore": "Keep score",
    "step.varsTimer": "Timer",
    "step.varsAsk": "Ask and answer",
    "step.varsRandom": "Random numbers",
    "step.varsCompare": "Compare: greater, less, equal",
    "step.soundPlay": "Play sounds",
    "step.soundMusic": "Make music with notes",
    "step.soundDance": "Dance to the music",
    "step.storyDialog": "Dialogues",
    "step.storyScenes": "Change the scene",
    "step.storyMessages": "Send messages",
    "step.storyPlan": "Plan your story",
    "step.gameCatch": "Catch the fruit",
    "step.gameMaze": "Maze",
    "step.gameQuiz": "Quiz game",
    "step.gamePong": "Ball and paddle",
    "step.gameClones": "Clones: many at once",
    "step.gameMine": "Your own game",
    "step.finish": "Check yourself and diploma",

    "badge.firstStep": "First step",
    "badge.firstStepHint": "Finish your first activity.",
    "badge.days3": "3 days in a row",
    "badge.days3Hint": "Learn on 3 days in a row.",
    "badge.days7": "One week",
    "badge.days7Hint": "Learn on 7 days in a row.",
    "badge.days10": "10 days",
    "badge.days10Hint": "Learn on 10 different days.",
    "badge.zoneHint": "Finish the zone {name}.",
    "badge.allZones": "Trophy",
    "badge.allZonesHint": "Finish every zone of the path.",
    "streak.oneDay": "You have learned on 1 day.",
    "streak.days": "You have learned on {count} days.",
    "streak.run": "{count} days in a row!",
    "reward.new": "New sticker: {name}!",
    "reward.newMany": "{count} new stickers!",
    "reward.open": "Open my album",

    "buddy.on": "PyBot",
    "buddy.off": "PyBot",
    "buddy.turnOff": "Hide little PyBot",
    "buddy.turnOn": "Show little PyBot",
    "buddy.hide": "Hide little PyBot",
    "buddy.greetMorning": "Good morning",
    "buddy.greetAfternoon": "Good afternoon",
    "buddy.greetEvening": "Good evening",
    "buddy.greet": "{greet}! I'm little PyBot. Tap me if you want a joke.",
    "buddy.greetNamed": "{greet}, {name}! Tap me if you want a joke.",
    "buddy.hover1": "Hi there!",
    "buddy.hover2": "So nice to see you!",
    "buddy.hover3": "Beep boop! That means hi.",
    "buddy.poke1": "Hee hee, that tickles!",
    "buddy.poke2": "Boop!",
    "buddy.poke3": "You found my button!",
    "buddy.pokeLots": "Ha ha ha! Okay, okay, you win!",
    "buddy.dragging": "Wheee! Where are we going?",
    "buddy.shaking": "Whoa, whoa, whoa!",
    "buddy.dizzy1": "Everything is spinning…",
    "buddy.dizzy2": "I see little stars!",
    "buddy.dizzy3": "Wobble, wobble… I'm okay!",
    "buddy.dropped1": "Nice spot!",
    "buddy.dropped2": "I like it here.",
    "buddy.dropped3": "Good view from here!",
    "buddy.wake": "Huh? I was dreaming about blocks!",
    "buddy.bottom": "You read all the way down. Wow!",
    "buddy.typing1": "Nice typing!",
    "buddy.typing2": "Ooh, what are you writing?",
    "buddy.typing3": "Keep going!",
    "buddy.sing": "La la la, blocks go clack!",
    "buddy.stretch": "Time for a stretch!",
    "buddy.scan": "Scanning for good ideas…",
    "buddy.nameSaved": "Nice to meet you, {name}!",
    "buddy.correct1": "Yes! Great job!",
    "buddy.correct2": "You got it!",
    "buddy.correct3": "Wow, well done!",
    "buddy.correct4": "That's it!",
    "buddy.correctNamed": "Great job, {name}!",
    "buddy.wrong1": "Almost! Try again.",
    "buddy.wrong2": "That's a clue. Look again.",
    "buddy.wrong3": "Not yet, but you're close!",
    "buddy.wrong4": "Mistakes help us learn.",
    "buddy.pageDone": "You finished! Now make it in Scratch!",
    "buddy.pageDoneNamed": "You finished, {name}! Now make it in Scratch!",
    "buddy.joke1Q": "Why did the robot go on vacation?",
    "buddy.joke1A": "It needed to recharge its batteries!",
    "buddy.joke2Q": "What do you call a sleeping dinosaur?",
    "buddy.joke2A": "A dino-snore!",
    "buddy.joke3Q": "Why did the cookie go to the doctor?",
    "buddy.joke3A": "Because it felt crummy!",
    "buddy.joke4Q": "What did one block say to the other block?",
    "buddy.joke4A": "Let's stick together!",
    "buddy.joke5Q": "Why are fish so smart?",
    "buddy.joke5A": "Because they live in schools!",
    "buddy.joke6Q": "What do you call a bear with no teeth?",
    "buddy.joke6A": "A gummy bear!",
    "buddy.joke7Q": "Why did the bicycle fall over?",
    "buddy.joke7A": "It was two tired!",
    "buddy.joke8Q": "What did the ocean say to the beach?",
    "buddy.joke8A": "Nothing. It just waved!",
    "buddy.joke9Q": "What is a robot's favorite snack?",
    "buddy.joke9A": "Computer chips!",
    "buddy.joke10Q": "What has ears but cannot hear?",
    "buddy.joke10A": "A cornfield!",
    "buddy.joke11Q": "Why was the math book sad?",
    "buddy.joke11A": "It had too many problems.",
    "buddy.joke12Q": "Why did the forever block never get tired?",
    "buddy.joke12A": "It kept going and going and going…",
    "buddy.riddle1Q": "I have hands and a face, but I can't smile. What am I?",
    "buddy.riddle1A": "A clock!",
    "buddy.riddle2Q": "The more you take away, the bigger I get. What am I?",
    "buddy.riddle2A": "A hole!",
    "buddy.riddle3Q": "I fly without wings and cry without eyes. What am I?",
    "buddy.riddle3A": "A cloud!",
    "buddy.riddle4Q": "I have keys but I can't open doors. What am I?",
    "buddy.riddle4A": "A keyboard, or a piano!",
    "buddy.riddle5Q": "What gets wetter the more it dries?",
    "buddy.riddle5A": "A towel!",
    "buddy.riddle6Q": "If you say my name, I disappear. What am I?",
    "buddy.riddle6A": "Silence!",
    "buddy.riddle7Q": "I have four legs but I never walk. What am I?",
    "buddy.riddle7A": "A table!",
    "buddy.riddle8Q": "What goes up and down but never moves?",
    "buddy.riddle8A": "The stairs!",
    "buddy.fact1": "Scratch was born at the MIT Media Lab. Today the Scratch Foundation takes care of it.",
    "buddy.fact2": "In Scratch you build programs by snapping blocks, like puzzle pieces.",
    "buddy.fact3": "Some of the first “programs” were punched cards that told looms what pattern to weave.",
    "buddy.fact4": "Ada Lovelace wrote one of the first programs almost 200 years ago!",
    "buddy.fact5": "An octopus has three hearts.",
    "buddy.fact6": "Bees dance to tell other bees where the flowers are. It's like sending a message!",
    "buddy.fact7": "The word robot comes from a Czech word that means “work”.",
    "buddy.fact8": "Games use x and y to know where every character is on the screen.",
    "buddy.fact9": "Grace Hopper once found a real bug, a moth, inside a computer!",
    "buddy.fact10": "A hummingbird can fly backwards.",
    "buddy.cheer1": "You're doing great!",
    "buddy.cheer2": "Every expert started as a beginner.",
    "buddy.cheer3": "Your ideas are awesome!",
    "buddy.cheer4": "Little steps make big things.",
    "buddy.cheer5": "I believe in you!",
    "buddy.cheer6": "Learning is an adventure!",
    "buddy.tip1": "Before you click the green flag, say out loud what you think will happen.",
    "buddy.tip2": "Play “human robot”: someone gives you orders one step at a time.",
    "buddy.tip3": "If something doesn't work, change one thing and try again.",
    "buddy.tip4": "Draw your idea on paper before you open Scratch.",
    "buddy.tip5": "Give your sprites clear names, like Ball or Player.",
    "buddy.tip6": "Save your project often. Ask a grown-up if you need help.",
    "buddy.tip7": "Explain your program to someone at home.",
    "buddy.tip8": "Click one block at a time to see what each one does.",
    "buddy.tip9": "A clapping pattern is a loop: it repeats!",
    "buddy.tip10": "Write the steps to brush your teeth. That's an algorithm!",
    "buddy.tip11": "A stretch break helps you think, too.",
    "buddy.tip12": "Copying an idea to learn is fine. Then change it and make it yours.",
    "buddy.tip13": "A mistake is a clue, not a problem.",
    "buddy.tip14": "Play “Simon says”: it's an if… then.",
    "buddy.tip15": "Count points with beans or pebbles. That's a variable!",
    "buddy.tip16": "Short sessions are best. Fifteen minutes is plenty.",
  },
  es: {
    "meta.homeTitle": "PyBot Blocks — aprende a usar Scratch, un paso a la vez",
    "meta.homeDescription": "Una guía sencilla y gratuita para que niñas, niños y sus familias aprendan a usar Scratch en orden, con pasos cortos y retos pequeños.",
    "meta.courseTitle": "El camino — PyBot Blocks",
    "a11y.skip": "Saltar al contenido",
    "a11y.home": "PyBot Blocks, inicio",
    "a11y.mainNav": "Navegación principal",
    "a11y.language": "Elegir idioma",
    "a11y.features": "Características importantes",
    "a11y.backTop": "PyBot Blocks, volver arriba",
    "nav.path": "El camino",
    "nav.pathAria": "El camino de aprendizaje",
    "nav.start": "Empieza en Scratch",
    "nav.album": "Álbum",
    "nav.albumAria": "Mi álbum",
    "nav.faq": "Preguntas",
    "nav.faqAria": "Preguntas frecuentes",
    "nav.menu": "Menú",
    "support.aria": "Apoya a PyBot en Patreon (se abre en una pestaña nueva)",
    "notice.affiliation": "Scratch es un proyecto de la Scratch Foundation. PyBot Blocks es una guía independiente: no está afiliada ni respaldada por ella.",
    "chip.soon": "Muy pronto",

    "hero.eyebrow": "Una guía para Scratch",
    "hero.titleStart": "Aprende Scratch,",
    "hero.titleEnd": "un bloque a la vez.",
    "hero.intro": "PyBot te muestra el camino: qué aprender primero, qué sigue y un reto pequeño para hacer en Scratch.",
    "hero.start": "Ver el camino",
    "hero.firstSteps": "Empieza en Scratch",
    "trust.free": "Gratis",
    "trust.accounts": "Sin cuentas aquí",
    "trust.progress": "Tu progreso se queda contigo",
    "pybot.says": "PYBOT DICE",
    "pybot.aria": "PyBot, el robot guía. Tócalo para que cambie de cara.",
    "mood.happy": "¡Hola! Soy PyBot. ¿Armamos unos bloques?",
    "mood.happyNamed": "¡Hola, {name}! ¿Armamos unos bloques?",
    "mood.celebrating": "¡Cada bloque que aprendes es un superpoder nuevo!",
    "mood.curious": "¿Qué crees que hace este bloque? ¡Vamos a descubrirlo!",
    "mood.wink": "Psst… los errores son pistas. Es un secreto.",
    "mood.starry": "Primero imagínalo. ¡Después constrúyelo en Scratch!",
    "mood.thinking": "Mmm… primero el evento y luego los movimientos.",
    "mood.proud": "¡Qué orgullo verte intentarlo, {name}!",
    "mood.proudPlain": "¡Qué orgullo verte intentarlo!",
    "name.question": "¿Cómo te gustaría que te llamara?",
    "name.placeholder": "Nombre o apodo",
    "name.save": "¡Así me llamo!",
    "name.privateNote": "Solo este navegador lo recuerda.",
    "name.error": "Escribe un nombre o un apodo.",
    "name.forget": "Olvidar este nombre",
    "name.savedPrefix": "PyBot te llama",
    "name.change": "Cambiar",

    "loop.eyebrow": "CÓMO APRENDEMOS",
    "loop.title": "Mira. Prueba. Crea.",
    "loop.intro": "Una idea en cada página y siempre algo para hacer en Scratch.",
    "loop.step1Title": "Mira",
    "loop.step1Text": "PyBot te muestra un bloque y lo que hace.",
    "loop.step2Title": "Prueba aquí",
    "loop.step2Text": "Un juego cortito: ordena bloques, adivina qué pasa, arregla el programa de PyBot.",
    "loop.step3Title": "Crea en Scratch",
    "loop.step3Text": "Pasos exactos y un reto corto para construir en el Scratch de verdad.",

    "mission.eyebrow": "TU PRIMERA MISIÓN",
    "mission.title": "Haz que PyBot avance y salude.",
    "mission.text": "Toca los bloques en el orden correcto para armar el programa. Después presiona Probar.",
    "mission.hint": "Pista: todo programa empieza con algo que pasa.",
    "mission.blocks": "Bloques",
    "mission.program": "Tu programa",
    "mission.empty": "Toca un bloque para ponerlo aquí.",
    "mission.blockFlag": "al hacer clic en la bandera verde",
    "mission.blockMove": "mover {value} pasos",
    "mission.blockSay": "decir {value} durante 2 segundos",
    "mission.hello": "¡Hola!",
    "mission.try": "▶ Probar",
    "mission.clear": "Empezar de nuevo",
    "mission.needAll": "Primero usa los tres bloques.",
    "mission.needEvent": "¡No pasó nada! Un programa necesita un bloque que diga cuándo empezar, y va arriba.",
    "mission.good": "¡Sí! La bandera verde empieza el programa. Luego PyBot hace cada bloque en orden, de arriba abajo.",
    "mission.again": "Ya hiciste esta misión. ¿Quieres intentarlo otra vez?",
    "mission.next": "Ahora pruébalo en Scratch",
    "mission.stage": "Escenario",

    "unplugged.eyebrow": "PRUEBA SIN PANTALLA",
    "unplugged.title": "Juegos de programar para toda la familia",
    "unplugged.intro": "Estos juegos usan las mismas ideas que Scratch. Solo necesitas personas, papel y un poco de espacio.",
    "unplugged.robotTitle": "Robot humano",
    "unplugged.robotText": "Una persona es el robot. Otra le da órdenes: “avanza 2 pasos”, “gira a la derecha”. ¡Lleguen al tesoro!",
    "unplugged.loopTitle": "Baile en bucle",
    "unplugged.loopText": "Inventa 3 pasos de baile y repítelos 4 veces. ¡Eso es un bloque repetir!",
    "unplugged.ifTitle": "Si… entonces",
    "unplugged.ifText": "“Si aplaudo, saltas. Si silbo, te sientas.” Túrnense para inventar las reglas.",
    "unplugged.scoreTitle": "Puntos con frijoles",
    "unplugged.scoreText": "Cada respuesta correcta gana un frijol en el vaso. El vaso es una variable que recuerda el puntaje.",
    "unplugged.who": "Con tu familia o tus amistades",

    "extras.eyebrow": "MÁS PARA TI",
    "extras.title": "Stickers, primeros pasos y preguntas",
    "extras.album": "Mi álbum",
    "extras.albumText": "Tus stickers, diplomas y días de aprendizaje.",
    "extras.start": "Empieza en Scratch",
    "extras.startText": "Abre Scratch, conoce el editor y mira programas de ejemplo.",
    "extras.faq": "Preguntas",
    "extras.faqText": "Respuestas para niñas, niños y familias.",

    "local.eyebrow": "TU TRABAJO ES TUYO",
    "local.title": "Sin cuenta. Tu progreso se queda aquí.",
    "local.text": "Este navegador recuerda tu progreso. Lo que creas vive en Scratch, no aquí. Pregúntale a una persona adulta antes de borrar los datos del navegador.",
    "backup.title": "¿Vas a usar otro navegador?",
    "backup.text": "Guarda aquí una copia de seguridad. Después cárgala en el otro navegador.",
    "backup.export": "Guardar una copia",
    "backup.import": "Cargar una copia",
    "backup.versionLabel": "Versión del progreso",
    "backup.exported": "Copia guardada. Guarda el archivo en un lugar seguro.",
    "backup.failed": "Este navegador no pudo guardar ni cargar la copia.",
    "backup.invalid": "Ese archivo no es una copia de PyBot Blocks o está dañado.",
    "backup.newer": "Esa copia viene de un PyBot Blocks más nuevo. Recarga la página e inténtalo otra vez.",
    "backup.confirm": "¿Cargar esta copia? Reemplaza el progreso de este navegador ({count} actividades terminadas en el archivo).",
    "backup.loadYes": "Sí, cargarla",
    "backup.cancelled": "No cambió nada.",
    "backup.imported": "Copia cargada. ¡Qué bueno verte otra vez!",
    "backup.upgraded": "Copia cargada y actualizada al camino nuevo.",
    "reset.title": "Para personas adultas: borrar todo el progreso",
    "reset.text": "Úsalo solo si de verdad lo necesitas. Borra actividades terminadas, stickers y días de aprendizaje en este navegador. El idioma, el ajuste de PyBot y el nombre se quedan.",
    "reset.button": "Borrar todo el progreso",
    "reset.askBackup": "¿Quieres guardar una copia antes?",
    "reset.saveFirst": "Guardar una copia primero",
    "reset.skipBackup": "Borrar sin copia",
    "reset.confirm": "¿Borrar todo el progreso de este navegador? No se puede deshacer.",
    "reset.eraseYes": "Sí, borrar todo",
    "reset.cancelled": "No se borró nada.",
    "reset.done": "Progreso borrado. ¡Un nuevo comienzo!",
    "reset.failed": "Este navegador no pudo borrar el progreso.",
    "ask.cancel": "Cancelar",
    "ask.keep": "No, dejarlo así",

    "family.eyebrow": "LA FAMILIA PYBOT",
    "family.title": "¿Quieres aprender algo más?",
    "family.pythonAsk": "¿Quieres aprender Python?",
    "family.pythonText": "programa de verdad, un paso a la vez.",
    "family.englishAsk": "¿Quieres aprender inglés?",
    "family.englishText": "una palabra a la vez, con PyBot.",
    "family.blocksAsk": "¿Quieres aprender a usar Scratch?",
    "family.blocksText": "una guía sencilla para niñas, niños y familias.",
    "family.visit": "Visitar →",
    "family.soon": "Muy pronto",

    "footer.line": "Pasos pequeños. Scratch de verdad.",
    "footer.family": "De la familia de PyBot.",
    "footer.credit": "© 2026 Sorey Garcia. Código bajo MIT, contenido bajo CC BY 4.0.",
    "footer.license": "Licencia",

    "course.eyebrow": "EL CAMINO",
    "course.title": "Tu ruta por Scratch",
    "course.intro": "Pocas zonas grandes, cada una con su ruta de páginas. Ve en orden: cada zona usa lo que enseñó la anterior.",
    "course.growth": "🚧 Proyecto en construcción: publicamos las lecciones zona por zona. Las páginas que dicen “Muy pronto” llegan después. Cada lección termina con un reto “Hazlo en Scratch”.",
    "course.here": "Estás aquí",
    "course.zone": "ZONA {count}",
    "course.final": "PARADA FINAL",
    "course.adults": "Para familias",
    "course.diploma": "Ver mi diploma",
    "course.pages": "Páginas de esta zona",

    "zone.hello.title": "Hola, Scratch",
    "zone.hello.text": "Qué es Scratch, el escenario, los objetos y cómo guardar tu proyecto.",
    "zone.hello.adults": "Aquí se aprende a abrir Scratch y a ubicarse en el editor. No necesita saber programar: siéntense juntos, déjele hacer clic y pregunte “¿esto para qué sirve?”. La cuenta es opcional; se puede practicar sin ella.",
    "zone.move.title": "Mover y mirar",
    "zone.move.text": "Pasos, giros, x e y, disfraces, decir y pensar.",
    "zone.move.adults": "Bloques de Movimiento y Apariencia: los primeros programas que hacen que algo pase. Pídale que le muestre cómo camina y habla su personaje.",
    "zone.events.title": "Cuando pase algo",
    "zone.events.text": "La bandera verde, las teclas, los clics y varios programas a la vez.",
    "zone.events.adults": "Los eventos inician los programas. Es la idea de causa y efecto: “cuando presiono la barra espaciadora, salta”. Busquen ejemplos de la vida diaria.",
    "zone.loops.title": "Repetir",
    "zone.loops.text": "Repetir varias veces, por siempre, animaciones y dibujar con el lápiz.",
    "zone.loops.adults": "Los bucles evitan escribir lo mismo muchas veces. El coro de una canción o un juego de palmas son buenos ejemplos para conversar.",
    "zone.decide.title": "Decidir",
    "zone.decide.text": "Si… entonces, si… si no, y sensores: tocar, teclas y colores.",
    "zone.decide.adults": "Los condicionales dejan que un programa elija. Jueguen “Simón dice”: es un si… entonces.",
    "zone.remember.title": "Recordar",
    "zone.remember.text": "Variables, puntaje, cronómetro, preguntar y responder, números al azar y comparar.",
    "zone.remember.adults": "Una variable es una caja que recuerda un valor, como el puntaje de un juego. Contar puntos con frijoles en un vaso ayuda mucho a entenderlo.",
    "zone.sound.title": "Sonido y música",
    "zone.sound.text": "Tocar sonidos, hacer música con notas y bailar al ritmo.",
    "zone.sound.adults": "El sonido le da vida a los proyectos. Si quiere grabar su voz en Scratch, háganlo juntos; usa el micrófono en Scratch, no en PyBot Blocks.",
    "zone.story.title": "Contar historias",
    "zone.story.text": "Diálogos, cambios de escena, mensajes entre objetos y planear una historia.",
    "zone.story.adults": "Aquí programar se junta con contar cuentos. Pídale que primero le cuente la historia y luego la construya escena por escena.",
    "zone.games.title": "Mis juegos",
    "zone.games.text": "Proyectos guiados: atrapar, laberinto, preguntas, pelota y paleta, clones y tu propio juego.",
    "zone.games.adults": "Los proyectos juntan todas las ideas. Celebre lo que crea; no hay calificación. Jugar su juego es el mejor halago.",
    "zone.finish.title": "Parada final",
    "zone.finish.text": "Mira todo lo que aprendiste, revísate a ti mismo y recibe tu diploma.",
    "zone.finish.adults": "Un repaso tranquilo, no un examen. Cada quien marca lo que siente seguro y lo que quiere practicar otra vez.",

    "step.helloWhat": "¿Qué es Scratch?",
    "step.helloEditor": "Las partes del editor",
    "step.helloSprites": "Objetos y escenario",
    "step.helloSave": "Guardar y abrir tu proyecto",
    "step.moveSteps": "Pasos y giros",
    "step.moveXY": "¿Dónde está? x e y",
    "step.moveGlide": "Deslizar e ir a",
    "step.looksSay": "Decir y pensar",
    "step.looksCostumes": "Disfraces: hacer que camine",
    "step.looksBackdrops": "Fondos y tamaño",
    "step.eventsFlag": "La bandera verde",
    "step.eventsKeys": "Teclas que mueven",
    "step.eventsClick": "Al hacer clic en este objeto",
    "step.eventsTogether": "Varios programas a la vez",
    "step.loopsRepeat": "Repetir varias veces",
    "step.loopsForever": "Por siempre",
    "step.loopsAnimate": "Animaciones que se repiten",
    "step.loopsPen": "Dibujar figuras con el lápiz",
    "step.ifTouching": "¿Está tocando?",
    "step.ifElse": "Si… si no",
    "step.ifKeys": "¿Tecla presionada?",
    "step.ifColors": "Tocar un color",
    "step.varsMake": "Crear una variable",
    "step.varsScore": "Contar puntos",
    "step.varsTimer": "Cronómetro",
    "step.varsAsk": "Preguntar y responder",
    "step.varsRandom": "Números al azar",
    "step.varsCompare": "Comparar: mayor, menor, igual",
    "step.soundPlay": "Tocar sonidos",
    "step.soundMusic": "Hacer música con notas",
    "step.soundDance": "Bailar con música",
    "step.storyDialog": "Diálogos",
    "step.storyScenes": "Cambiar de escena",
    "step.storyMessages": "Enviar mensajes",
    "step.storyPlan": "Planear tu historia",
    "step.gameCatch": "Atrapa la fruta",
    "step.gameMaze": "Laberinto",
    "step.gameQuiz": "Juego de preguntas",
    "step.gamePong": "Pelota y paleta",
    "step.gameClones": "Clones: muchos a la vez",
    "step.gameMine": "Tu propio juego",
    "step.finish": "Revísate y recibe tu diploma",

    "badge.firstStep": "Primer paso",
    "badge.firstStepHint": "Termina tu primera actividad.",
    "badge.days3": "3 días seguidos",
    "badge.days3Hint": "Aprende 3 días seguidos.",
    "badge.days7": "Una semana",
    "badge.days7Hint": "Aprende 7 días seguidos.",
    "badge.days10": "10 días",
    "badge.days10Hint": "Aprende en 10 días diferentes.",
    "badge.zoneHint": "Termina la zona {name}.",
    "badge.allZones": "Trofeo",
    "badge.allZonesHint": "Termina todas las zonas del camino.",
    "streak.oneDay": "Has aprendido 1 día.",
    "streak.days": "Has aprendido {count} días.",
    "streak.run": "¡{count} días seguidos!",
    "reward.new": "¡Sticker nuevo: {name}!",
    "reward.newMany": "¡{count} stickers nuevos!",
    "reward.open": "Abrir mi álbum",

    "buddy.on": "PyBot",
    "buddy.off": "PyBot",
    "buddy.turnOff": "Esconder al PyBot pequeño",
    "buddy.turnOn": "Mostrar al PyBot pequeño",
    "buddy.hide": "Esconder al PyBot pequeño",
    "buddy.greetMorning": "Buenos días",
    "buddy.greetAfternoon": "Buenas tardes",
    "buddy.greetEvening": "Buenas noches",
    "buddy.greet": "¡{greet}! Soy PyBot pequeño. Tócame si quieres un chiste.",
    "buddy.greetNamed": "¡{greet}, {name}! Tócame si quieres un chiste.",
    "buddy.hover1": "¡Hola, hola!",
    "buddy.hover2": "¡Qué gusto verte!",
    "buddy.hover3": "¡Bip bup! Eso quiere decir hola.",
    "buddy.poke1": "¡Ji, ji, me haces cosquillas!",
    "buddy.poke2": "¡Bup!",
    "buddy.poke3": "¡Encontraste mi botón!",
    "buddy.pokeLots": "¡Ja, ja, ja! ¡Está bien, tú ganas!",
    "buddy.dragging": "¡Uiii! ¿A dónde vamos?",
    "buddy.shaking": "¡Epa, epa, epa!",
    "buddy.dizzy1": "Todo da vueltas…",
    "buddy.dizzy2": "¡Veo estrellitas!",
    "buddy.dizzy3": "Tambaleo, tambaleo… ¡estoy bien!",
    "buddy.dropped1": "¡Buen lugar!",
    "buddy.dropped2": "Me gusta aquí.",
    "buddy.dropped3": "¡Qué buena vista!",
    "buddy.wake": "¿Eh? ¡Estaba soñando con bloques!",
    "buddy.bottom": "¡Leíste hasta el final! ¡Guau!",
    "buddy.typing1": "¡Qué bien escribes!",
    "buddy.typing2": "Uy, ¿qué estás escribiendo?",
    "buddy.typing3": "¡Sigue así!",
    "buddy.sing": "¡La, la, la, los bloques hacen clac!",
    "buddy.stretch": "¡Hora de estirarse!",
    "buddy.scan": "Buscando buenas ideas…",
    "buddy.nameSaved": "¡Mucho gusto, {name}!",
    "buddy.correct1": "¡Sí! ¡Muy bien!",
    "buddy.correct2": "¡Lo lograste!",
    "buddy.correct3": "¡Guau, excelente!",
    "buddy.correct4": "¡Eso es!",
    "buddy.correctNamed": "¡Muy bien, {name}!",
    "buddy.wrong1": "¡Casi! Inténtalo otra vez.",
    "buddy.wrong2": "Eso es una pista. Mira otra vez.",
    "buddy.wrong3": "Todavía no, ¡pero estás cerca!",
    "buddy.wrong4": "Los errores nos ayudan a aprender.",
    "buddy.pageDone": "¡Terminaste! ¡Ahora hazlo en Scratch!",
    "buddy.pageDoneNamed": "¡Terminaste, {name}! ¡Ahora hazlo en Scratch!",
    "buddy.joke1Q": "¿Qué le dijo un semáforo a otro?",
    "buddy.joke1A": "¡No me mires, que me estoy cambiando!",
    "buddy.joke2Q": "¿Qué le dice una iguana a su hermana gemela?",
    "buddy.joke2A": "¡Somos iguanitas!",
    "buddy.joke3Q": "¿Por qué el libro de matemáticas estaba triste?",
    "buddy.joke3A": "Porque tenía muchos problemas.",
    "buddy.joke4Q": "¿Qué hace una abeja en el gimnasio?",
    "buddy.joke4A": "¡Zum-ba!",
    "buddy.joke5Q": "¿Qué le dijo el número 1 al número 10?",
    "buddy.joke5A": "Para ser como yo, tienes que ser sincero.",
    "buddy.joke6Q": "¿Qué le dijo un pez a otro pez?",
    "buddy.joke6A": "¡Nada, nada!",
    "buddy.joke7Q": "¿Qué le dice un bloque a otro bloque?",
    "buddy.joke7A": "¡Juntitos somos un programa!",
    "buddy.joke8Q": "¿Por qué los robots nunca se aburren?",
    "buddy.joke8A": "¡Porque siempre tienen pilas!",
    "buddy.joke9Q": "¿Qué le dice una pared a otra pared?",
    "buddy.joke9A": "Nos vemos en la esquina.",
    "buddy.joke10Q": "¿Qué le dijo la luna al sol?",
    "buddy.joke10A": "¡Tan grande y no te dejan salir de noche!",
    "buddy.joke11Q": "¿Cuál es el animal más antiguo?",
    "buddy.joke11A": "La cebra, ¡porque está en blanco y negro!",
    "buddy.joke12Q": "¿Qué le dijo un bucle a otro bucle?",
    "buddy.joke12A": "¡Nos vemos otra vez, y otra vez, y otra vez!",
    "buddy.riddle1Q": "Tengo agujas pero no coso; tengo números pero no soy teléfono. ¿Qué soy?",
    "buddy.riddle1A": "¡El reloj!",
    "buddy.riddle2Q": "Mientras más me quitas, más grande soy. ¿Qué soy?",
    "buddy.riddle2A": "¡Un hoyo!",
    "buddy.riddle3Q": "Vuelo sin alas y lloro sin ojos. ¿Qué soy?",
    "buddy.riddle3A": "¡La nube!",
    "buddy.riddle4Q": "Tengo teclas pero no abro puertas. ¿Qué soy?",
    "buddy.riddle4A": "¡Un teclado, o un piano!",
    "buddy.riddle5Q": "¿Qué se moja mientras seca?",
    "buddy.riddle5A": "¡La toalla!",
    "buddy.riddle6Q": "Si dices mi nombre, desaparezco. ¿Qué soy?",
    "buddy.riddle6A": "¡El silencio!",
    "buddy.riddle7Q": "Tengo cuatro patas y nunca camino. ¿Qué soy?",
    "buddy.riddle7A": "¡La mesa!",
    "buddy.riddle8Q": "Sube y baja, pero nunca se mueve. ¿Qué es?",
    "buddy.riddle8A": "¡La escalera!",
    "buddy.fact1": "Scratch nació en el MIT Media Lab. Hoy lo cuida la Scratch Foundation.",
    "buddy.fact2": "En Scratch armas programas encajando bloques, como piezas de rompecabezas.",
    "buddy.fact3": "Algunos de los primeros “programas” eran tarjetas con agujeros que le decían a un telar qué dibujo tejer.",
    "buddy.fact4": "¡Ada Lovelace escribió uno de los primeros programas hace casi 200 años!",
    "buddy.fact5": "Un pulpo tiene tres corazones.",
    "buddy.fact6": "Las abejas bailan para decirles a otras dónde hay flores. ¡Es como enviar un mensaje!",
    "buddy.fact7": "La palabra robot viene de una palabra checa que significa “trabajo”.",
    "buddy.fact8": "Los juegos usan x e y para saber dónde está cada personaje en la pantalla.",
    "buddy.fact9": "¡Grace Hopper encontró un bicho de verdad, una polilla, dentro de una computadora!",
    "buddy.fact10": "Un colibrí puede volar hacia atrás.",
    "buddy.cheer1": "¡Lo estás haciendo muy bien!",
    "buddy.cheer2": "Nadie nace sabiendo: todo el mundo empezó por el principio.",
    "buddy.cheer3": "¡Tus ideas son geniales!",
    "buddy.cheer4": "Los pasos pequeños hacen cosas grandes.",
    "buddy.cheer5": "¡Creo en ti!",
    "buddy.cheer6": "¡Aprender es una aventura!",
    "buddy.tip1": "Antes de hacer clic en la bandera verde, di en voz alta qué crees que va a pasar.",
    "buddy.tip2": "Juega a “robot humano”: alguien te da órdenes paso a paso.",
    "buddy.tip3": "Si algo no funciona, cambia una sola cosa y vuelve a probar.",
    "buddy.tip4": "Dibuja tu idea en papel antes de abrir Scratch.",
    "buddy.tip5": "Ponles nombres claros a tus objetos, como Pelota o Jugador.",
    "buddy.tip6": "Guarda tu proyecto seguido. Pide ayuda a una persona adulta si la necesitas.",
    "buddy.tip7": "Explícale tu programa a alguien de tu casa.",
    "buddy.tip8": "Haz clic en un bloque a la vez para ver qué hace cada uno.",
    "buddy.tip9": "Un juego de palmas es un bucle: ¡se repite!",
    "buddy.tip10": "Escribe los pasos para lavarte los dientes. ¡Eso es un algoritmo!",
    "buddy.tip11": "Una pausa para estirarte también te ayuda a pensar.",
    "buddy.tip12": "Copiar una idea para aprender está bien. Luego cámbiala y hazla tuya.",
    "buddy.tip13": "Un error es una pista, no un problema.",
    "buddy.tip14": "Juega “Simón dice”: es un si… entonces.",
    "buddy.tip15": "Cuenta puntos con frijoles o piedritas. ¡Eso es una variable!",
    "buddy.tip16": "Las sesiones cortas son las mejores. Quince minutos es suficiente.",
  },
};

// Storage keys. Every key is listed in the storage registry in README.md.
const STORAGE_PREFIX = "pybotblocks.";
const LANGUAGE_KEY = `${STORAGE_PREFIX}language`;
const BUDDY_PREFERENCE_KEY = `${STORAGE_PREFIX}buddy.enabled`;
const BUDDY_POSITION_KEY = `${STORAGE_PREFIX}buddy.position`;
const BUDDY_GREETED_KEY = `${STORAGE_PREFIX}buddy.greeted`;
const LEARNER_NAME_KEY = `${STORAGE_PREFIX}learner.name`;
const PATH_CURRENT_KEY = `${STORAGE_PREFIX}path.current`;
const PATH_VISITED_KEY = `${STORAGE_PREFIX}path.visited`;
const PATH_DONE_KEY = `${STORAGE_PREFIX}path.done`;
const PATH_KNOWN_KEY = `${STORAGE_PREFIX}path.known`;
const SELF_CHECK_KEY = `${STORAGE_PREFIX}selfcheck`;
const BADGES_KEY = `${STORAGE_PREFIX}badges`;
const DAYS_KEY = `${STORAGE_PREFIX}days`;
const PROGRESS_VERSION_KEY = `${STORAGE_PREFIX}progress.version`;
const PATH_LIST_KEYS = [PATH_VISITED_KEY, PATH_DONE_KEY, PATH_KNOWN_KEY];
const SELF_CHECK_RATINGS = ["good", "okay", "review"];
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const DAYS_KEPT = 400;
const BACKUP_FORMAT = "pybotblocks-progress";
const BACKUP_SCHEMA_VERSION = 1;
// The version of the course content that saved progress belongs to. Bump it in
// every change that adds, renames, or removes a step or activity id
// (`node tools/progress-version.mjs --bump "note"`), and add a migration below
// when an id is renamed or removed.
const PROGRESS_VERSION = 3;
const BACKUP_MAX_BYTES = 100_000;
// Preferences and the name survive an emergency progress reset.
const RESET_KEPT_KEYS = [LANGUAGE_KEY, BUDDY_PREFERENCE_KEY, BUDDY_POSITION_KEY, LEARNER_NAME_KEY];

// Pages of the path, in order. A new topic becomes a page inside its zone; a new
// zone is only added when no zone covers the topic. `soon` pages show "Coming
// soon" and have no lesson file yet. Lesson files will live in lessons/<id>.html.
const pathSteps = [
  { id: "helloWhat", activities: ["hello-what-build", "hello-what-words"] },
  { id: "helloEditor", activities: ["hello-editor-where", "hello-editor-category", "hello-editor-buttons"] },
  { id: "helloSprites", activities: ["hello-sprites-whose", "hello-sprites-words"] },
  { id: "helloSave", activities: ["hello-save-steps", "hello-save-share"] },
  { id: "moveSteps", activities: ["move-steps-facing", "move-steps-order"] },
  { id: "moveXY", activities: ["move-xy-where", "move-xy-map"] },
  { id: "moveGlide", activities: ["move-glide-which", "move-glide-speed"] },
  { id: "looksSay", activities: ["looks-say-bubbles", "looks-say-order"] },
  { id: "looksCostumes", activities: ["looks-costumes-walk", "looks-costumes-wait"] },
  { id: "looksBackdrops", activities: ["looks-backdrops-size", "looks-backdrops-match"] },
  { id: "eventsFlag", activities: [], soon: true },
  { id: "eventsKeys", activities: [], soon: true },
  { id: "eventsClick", activities: [], soon: true },
  { id: "eventsTogether", activities: [], soon: true },
  { id: "loopsRepeat", activities: [], soon: true },
  { id: "loopsForever", activities: [], soon: true },
  { id: "loopsAnimate", activities: [], soon: true },
  { id: "loopsPen", activities: [], soon: true },
  { id: "ifTouching", activities: [], soon: true },
  { id: "ifElse", activities: [], soon: true },
  { id: "ifKeys", activities: [], soon: true },
  { id: "ifColors", activities: [], soon: true },
  { id: "varsMake", activities: [], soon: true },
  { id: "varsScore", activities: [], soon: true },
  { id: "varsTimer", activities: [], soon: true },
  { id: "varsAsk", activities: [], soon: true },
  { id: "varsRandom", activities: [], soon: true },
  { id: "varsCompare", activities: [], soon: true },
  { id: "soundPlay", activities: [], soon: true },
  { id: "soundMusic", activities: [], soon: true },
  { id: "soundDance", activities: [], soon: true },
  { id: "storyDialog", activities: [], soon: true },
  { id: "storyScenes", activities: [], soon: true },
  { id: "storyMessages", activities: [], soon: true },
  { id: "storyPlan", activities: [], soon: true },
  { id: "gameCatch", activities: [], soon: true },
  { id: "gameMaze", activities: [], soon: true },
  { id: "gameQuiz", activities: [], soon: true },
  { id: "gamePong", activities: [], soon: true },
  { id: "gameClones", activities: [], soon: true },
  { id: "gameMine", activities: [], soon: true },
  { id: "finish", activities: [], soon: true },
];
// Activities outside the path: the first mission on the home page and the
// "I did it" boxes on the Start in Scratch page.
const homeActivities = ["first-mission", "start-open", "start-editor", "start-account", "start-save"];
const stepActivityIds = (step) => step.activities;
const activityIds = [...homeActivities, ...pathSteps.flatMap(stepActivityIds)];

// Zones on the course map, in order. Few and broad on purpose.
const pathZones = [
  { id: "hello", icon: "👋", steps: ["helloWhat", "helloEditor", "helloSprites", "helloSave"] },
  { id: "move", icon: "🏃", steps: ["moveSteps", "moveXY", "moveGlide", "looksSay", "looksCostumes", "looksBackdrops"] },
  { id: "events", icon: "⚡", steps: ["eventsFlag", "eventsKeys", "eventsClick", "eventsTogether"] },
  { id: "loops", icon: "🔁", steps: ["loopsRepeat", "loopsForever", "loopsAnimate", "loopsPen"] },
  { id: "decide", icon: "🔀", steps: ["ifTouching", "ifElse", "ifKeys", "ifColors"] },
  { id: "remember", icon: "🧮", steps: ["varsMake", "varsScore", "varsTimer", "varsAsk", "varsRandom", "varsCompare"] },
  { id: "sound", icon: "🎵", steps: ["soundPlay", "soundMusic", "soundDance"] },
  { id: "story", icon: "📖", steps: ["storyDialog", "storyScenes", "storyMessages", "storyPlan"] },
  { id: "games", icon: "🎮", steps: ["gameCatch", "gameMaze", "gameQuiz", "gamePong", "gameClones", "gameMine"] },
  { id: "finish", icon: "🏁", steps: ["finish"], final: true },
].map((zone) => ({ ...zone, title: `zone.${zone.id}.title` }));

// The PyBot family: the same list on every site. Each site hides itself with
// THIS_SITE. A sibling that is not published yet has `soon: true`.
const THIS_SITE = "blocks";
const pybotFamily = [
  { id: "python", name: "PyBot", url: "https://pybot-kids.github.io/", icon: "</>", ask: "family.pythonAsk", text: "family.pythonText" },
  { id: "english", name: "PyBot English", url: "https://pybot-kids.github.io/pybot-english/", icon: "Aa", ask: "family.englishAsk", text: "family.englishText", soon: true },
  { id: "blocks", name: "PyBot Blocks", url: "https://pybot-kids.github.io/pybot-blocks/", icon: "🧩", ask: "family.blocksAsk", text: "family.blocksText" },
];

// Links in the shared header, built by arrangeHeader() on every page.
const headerPages = [
  { page: "course", href: "course.html", icon: "🗺️", label: "nav.path", aria: "nav.pathAria" },
  { page: "start", href: "start.html", icon: "🚀", label: "nav.start" },
  { page: "album", href: "album.html", icon: "★", label: "nav.album", aria: "nav.albumAria" },
  { page: "faq", href: "faq.html", icon: "?", label: "nav.faq", aria: "nav.faqAria" },
];

const PYBOT_MARKUP = `
  <div class="pybot">
    <div class="antenna"><span></span></div>
    <div class="ear ear-left"></div>
    <div class="ear ear-right"></div>
    <div class="bot-head">
      <div class="bot-screen">
        <div class="brow brow-left"></div>
        <div class="brow brow-right"></div>
        <div class="eye eye-left"><span></span></div>
        <div class="eye eye-right"><span></span></div>
        <div class="cheek cheek-left"></div>
        <div class="cheek cheek-right"></div>
        <div class="mouth"></div>
      </div>
    </div>
    <div class="bot-neck"></div>
    <div class="arm arm-left"><span class="hand"></span></div>
    <div class="arm arm-right"><span class="hand"></span></div>
    <div class="bot-body">
      <div class="chest-light"></div>
      <span class="chest-code"><i></i><i></i></span>
    </div>
  </div>`;

const scriptBaseUrl = document.currentScript?.src || window.location.href;
const languageButtons = document.querySelectorAll(".language-button");
const backupExportButton = document.querySelector("[data-backup-export]");
const backupImportButton = document.querySelector("[data-backup-import]");
const backupImportInput = document.querySelector("[data-backup-file]");
const backupStatus = document.querySelector("[data-backup-status]");
const progressVersionLabel = document.querySelector("[data-progress-version]");
const progressResetButton = document.querySelector("[data-progress-reset]");
const resetStatus = document.querySelector("[data-reset-status]");
let currentLanguage = "es";
let learnerName = "";

// Upgrades saved progress, as { storageKey: value }, from the version before to
// the given PROGRESS_VERSION. Adding ids needs no migration. Renaming or removing
// one does, e.g.  2: (progress) => renameProgressStep(progress, "moveSteps", "moveWalk"),
const progressMigrations = {};
upgradeStoredProgress();

function textFor(key) {
  return translations[currentLanguage][key] ?? translations.es[key] ?? key;
}

function textWithName(key) {
  return textFor(key).replaceAll("{name}", learnerName);
}

function normalizeLearnerName(value) {
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().replace(/\s+/g, " ").slice(0, 24);
}

function storedLearnerName() {
  try {
    return normalizeLearnerName(localStorage.getItem(LEARNER_NAME_KEY) ?? "");
  } catch {
    return "";
  }
}

function storedList(key) {
  try {
    return (localStorage.getItem(key) ?? "").split(",").filter(Boolean);
  } catch {
    return [];
  }
}

function storedActivityState(activityId) {
  try {
    return localStorage.getItem(activityStorageKey(activityId));
  } catch {
    return null;
  }
}

// A step is done when the lesson page marked it done, or the learner said they know it.
function doneSteps() {
  const ids = new Set([...storedList(PATH_DONE_KEY), ...storedList(PATH_KNOWN_KEY)]);
  return pathSteps.filter((step) => ids.has(step.id));
}

function zoneProgress() {
  const done = new Set(doneSteps().map((step) => step.id));
  return { done: new Set(pathZones.filter((zone) => zone.steps.every((id) => done.has(id)))) };
}


// Stickers and learning days, from PyBot.
const zoneBadgeId = (zone) => `zone-${zone.steps[0]}`;
const todayString = (date = new Date()) => date.toLocaleDateString("en-CA");

function badgeList() {
  return [
    { id: "first-step", icon: "👣", title: "badge.firstStep", hint: "badge.firstStepHint", earned: (stats) => stats.activities > 0 },
    { id: "days-3", icon: "🔥", title: "badge.days3", hint: "badge.days3Hint", earned: (stats) => stats.bestRun >= 3 },
    { id: "days-7", icon: "🌈", title: "badge.days7", hint: "badge.days7Hint", earned: (stats) => stats.bestRun >= 7 },
    { id: "days-10", icon: "📅", title: "badge.days10", hint: "badge.days10Hint", earned: (stats) => stats.days.length >= 10 },
    ...pathZones.map((zone) => ({
      id: zoneBadgeId(zone),
      icon: zone.icon,
      title: zone.title,
      zone,
      earned: (stats) => stats.doneZones.has(zone),
    })),
    { id: "all-zones", icon: "🏆", title: "badge.allZones", hint: "badge.allZonesHint", earned: (stats) => pathZones.every((zone) => stats.doneZones.has(zone)) },
  ];
}

function badgeHint(badge) {
  return badge.zone ? textFor("badge.zoneHint").replace("{name}", textFor(badge.zone.title)) : textFor(badge.hint);
}

function learningDays() {
  try {
    return (localStorage.getItem(DAYS_KEY) ?? "").split(",").filter((day) => DATE_PATTERN.test(day));
  } catch {
    return [];
  }
}

// Counts a day the learner opened a lesson. Missing a day is never punished:
// the map only celebrates runs and the total.
function noteLearningDay() {
  const days = learningDays();
  const today = todayString();
  if (days.includes(today)) {
    return;
  }
  try {
    localStorage.setItem(DAYS_KEY, [...days, today].sort().slice(-DAYS_KEPT).join(","));
  } catch {
    // Lessons still work when browser storage is unavailable.
  }
}

function learningStreak() {
  const days = learningDays().sort();
  const dayNumber = (day) => Math.round(Date.parse(`${day}T12:00:00Z`) / 86_400_000);
  let run = 0;
  let bestRun = 0;
  days.forEach((day, index) => {
    run = index > 0 && dayNumber(day) - dayNumber(days[index - 1]) === 1 ? run + 1 : 1;
    bestRun = Math.max(bestRun, run);
  });
  const last = days.at(-1);
  const sinceLast = last ? dayNumber(todayString()) - dayNumber(last) : Infinity;
  return { days, bestRun, currentRun: sinceLast <= 1 ? run : 0 };
}

function storedBadges() {
  const badges = new Map();
  try {
    (localStorage.getItem(BADGES_KEY) ?? "").split(",").forEach((pair) => {
      const [id, date] = pair.split(":");
      if (id && DATE_PATTERN.test(date ?? "")) {
        badges.set(id, date);
      }
    });
  } catch {
    // An empty album is fine.
  }
  return badges;
}

// Saves any sticker the learner just earned and says so once.
function checkRewards() {
  const stats = {
    ...learningStreak(),
    activities: activityIds.filter((id) => storedActivityState(id) === "complete").length,
    doneZones: zoneProgress().done,
  };
  const badges = storedBadges();
  const earned = badgeList().filter((badge) => !badges.has(badge.id) && badge.earned(stats));
  if (earned.length === 0) {
    return;
  }
  earned.forEach((badge) => badges.set(badge.id, todayString()));
  try {
    localStorage.setItem(BADGES_KEY, [...badges].map(([id, date]) => `${id}:${date}`).join(","));
  } catch {
    return;
  }
  showRewardToast(earned);
}

function showRewardToast(earned) {
  document.querySelector(".reward-toast")?.remove();
  const toast = document.createElement("p");
  toast.className = "reward-toast";
  toast.setAttribute("role", "status");
  const text = earned.length === 1
    ? textFor("reward.new").replace("{name}", textFor(earned[0].title))
    : textFor("reward.newMany").replace("{count}", String(earned.length));
  toast.innerHTML = `<span class="reward-toast-icon" aria-hidden="true"></span><span></span><a></a>`;
  toast.querySelector(".reward-toast-icon").textContent = earned[0].icon;
  toast.querySelector("span:not([aria-hidden])").textContent = text;
  toast.querySelector("a").href = new URL("album.html", scriptBaseUrl).href;
  toast.querySelector("a").textContent = textFor("reward.open");
  document.body.append(toast);
  window.setTimeout(() => toast.classList.add("is-leaving"), 7000);
  window.setTimeout(() => toast.remove(), 7600);
}

function renderStreak() {
  document.querySelectorAll("[data-streak]").forEach((element) => {
    const { days, currentRun } = learningStreak();
    element.hidden = days.length === 0;
    const total = days.length === 1 ? textFor("streak.oneDay") : textFor("streak.days").replace("{count}", String(days.length));
    element.textContent = currentRun >= 2 ? `🔥 ${textFor("streak.run").replace("{count}", String(currentRun))} ${total}` : total;
  });
}

// The shared header: page links on the left, compact controls on the right,
// and a menu button that holds the links on small screens.
function headerLink(page, href, icon, labelKey, ariaKey) {
  const link = document.createElement("a");
  link.className = `header-link header-link-${page}`;
  link.href = new URL(href, scriptBaseUrl).href;
  if (ariaKey) {
    link.dataset.i18nAriaLabel = ariaKey;
  }
  if (document.body.dataset.page === page) {
    link.setAttribute("aria-current", "page");
  }
  link.innerHTML = `<span class="header-link-icon" aria-hidden="true">${icon}</span><span class="header-link-label" data-i18n="${labelKey}"></span>`;
  return link;
}

function arrangeHeader() {
  const header = document.querySelector(".site-header");
  const tools = header?.querySelector(".lesson-header-tools, .site-nav");
  if (!tools) {
    return;
  }

  const links = document.createElement("nav");
  links.className = "header-links";
  links.id = "header-links";
  links.dataset.i18nAriaLabel = "a11y.mainNav";
  links.append(...headerPages.map(({ page, href, icon, label, aria }) => headerLink(page, href, icon, label, aria)));

  const support = document.createElement("a");
  support.className = "header-icon-button support-link";
  support.href = "https://www.patreon.com/pybot";
  support.target = "_blank";
  support.rel = "noopener";
  support.dataset.i18nAriaLabel = "support.aria";
  support.innerHTML = '<span class="support-link-icon" aria-hidden="true">♥</span>';

  const menuButton = document.createElement("button");
  menuButton.className = "header-icon-button header-menu-button";
  menuButton.type = "button";
  menuButton.dataset.i18nAriaLabel = "nav.menu";
  menuButton.setAttribute("aria-controls", links.id);
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.innerHTML = '<span class="header-menu-icon" aria-hidden="true"></span>';

  buddyToggle?.classList.add("header-icon-button");

  const actions = document.createElement("div");
  actions.className = "header-actions";
  actions.append(
    ...[support, buddyToggle, tools.querySelector(".language-switch"), menuButton].filter(Boolean),
  );
  tools.replaceWith(links, actions);

  const setMenuOpen = (open) => {
    header.classList.toggle("is-menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  };
  menuButton.addEventListener("click", () => setMenuOpen(!header.classList.contains("is-menu-open")));
  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !header.contains(event.target)) {
      setMenuOpen(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-menu-open")) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
}

// Icon-only header buttons show their name as a tooltip.
function syncHeaderTooltips() {
  document.querySelectorAll(".header-icon-button[aria-label]").forEach((button) => {
    button.title = button.getAttribute("aria-label");
  });
}

const buddyScreenQuery = window.matchMedia("(min-width: 761px) and (min-height: 481px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const BUDDY_TIP_COUNT = 16;
const BUDDY_JOKE_COUNT = 12;
const BUDDY_RIDDLE_COUNT = 8;
const BUDDY_FACT_COUNT = 10;
const BUDDY_CHEER_COUNT = 6;
const BUDDY_MARGIN = 14;
// After this long without the learner moving or typing, PyBot takes a nap.
const BUDDY_NAP_AFTER_MS = 75_000;
// Idle antics: a mood, a body move, optional floating particles, and whether
// PyBot may say something (a tip, or its own line).
const BUDDY_IDLE_ANTICS = [
  { mood: "happy", move: "wave" },
  { mood: "wink", move: "hop" },
  { mood: "curious", move: "look", tip: true },
  { mood: "counting", move: "", tip: true },
  { mood: "starry", move: "spin", particles: "✦" },
  { mood: "thinking", move: "", tip: true },
  { mood: "deciding", move: "look" },
  { mood: "welcoming", move: "wave", tip: true },
  { mood: "proud", move: "dance", particles: "♪", say: "buddy.sing" },
  { mood: "happy", move: "blink", tip: true },
  { mood: "surprised", move: "peek" },
  { mood: "happy", move: "stretch", say: "buddy.stretch" },
  { mood: "welcoming", move: "hop", particles: "♥" },
  { mood: "focused", move: "scan", say: "buddy.scan" },
  { mood: "celebrating", move: "flip" },
  { mood: "wink", move: "wiggle", tip: true },
  { mood: "wink", move: "hop", joke: true },
  { mood: "happy", move: "", joke: true },
  { mood: "thinking", move: "", riddle: true },
  { mood: "curious", move: "look", fact: true },
  { mood: "starry", move: "", fact: true },
  { mood: "proud", move: "wave", cheer: true, particles: "♥" },
];
let buddyToggle = null;
let buddy = null;
let buddyEnabled = true;
let buddyIdleTimer = null;
let buddyRestTimer = null;
let buddyBubbleTimer = null;
let buddyBusyUntil = 0;
let buddyBubbleUntil = 0;
let buddyHovered = false;
let buddyAsleep = false;
let buddyLastInput = Date.now();
let buddyPosition = null;
let buddyLookFrame = 0;
let buddySpeechId = 0;
let buddyHoverAfter = 0;
let buddyPokes = [];
let buddySaidBottom = false;
let buddySaidTyping = false;

function storedBuddyPreference() {
  try {
    return localStorage.getItem(BUDDY_PREFERENCE_KEY) !== "false";
  } catch {
    return true;
  }
}

// The spot is kept as fractions of the free space, so it survives resizing.
function storedBuddyPosition() {
  try {
    const [x, y] = (localStorage.getItem(BUDDY_POSITION_KEY) ?? "").split(",").map(Number);
    if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
      return { x, y };
    }
  } catch {
    // PyBot starts in the corner when storage is unavailable.
  }
  return { x: 1, y: 1 };
}

function buddyFreeSpace() {
  return {
    width: Math.max(0, window.innerWidth - buddy.offsetWidth - BUDDY_MARGIN * 2),
    height: Math.max(0, window.innerHeight - buddy.offsetHeight - BUDDY_MARGIN * 2),
  };
}

function placeBuddy(left, top) {
  const space = buddyFreeSpace();
  const x = Math.min(Math.max(left - BUDDY_MARGIN, 0), space.width);
  const y = Math.min(Math.max(top - BUDDY_MARGIN, 0), space.height);
  buddy.style.left = `${x + BUDDY_MARGIN}px`;
  buddy.style.top = `${y + BUDDY_MARGIN}px`;
  buddyPosition = { x: space.width ? x / space.width : 1, y: space.height ? y / space.height : 1 };
  // Keep the speech bubble on the screen.
  buddy.classList.toggle("bubble-right", x + BUDDY_MARGIN + buddy.offsetWidth / 2 < window.innerWidth / 2);
  buddy.classList.toggle("bubble-below", y + BUDDY_MARGIN < 150);
}

function restoreBuddyPosition() {
  if (!buddy || buddy.hidden) {
    return;
  }
  const space = buddyFreeSpace();
  const position = buddyPosition ?? storedBuddyPosition();
  placeBuddy(BUDDY_MARGIN + position.x * space.width, BUDDY_MARGIN + position.y * space.height);
}

function saveBuddyPosition() {
  try {
    localStorage.setItem(BUDDY_POSITION_KEY, `${buddyPosition.x.toFixed(3)},${buddyPosition.y.toFixed(3)}`);
  } catch {
    // The new spot still works for the current page.
  }
}

function createBuddyToggle() {
  const tools = document.querySelector(".lesson-header-tools, .site-nav");
  if (!tools) {
    return null;
  }

  const button = document.createElement("button");
  button.className = "buddy-toggle";
  button.type = "button";
  button.innerHTML = '<span class="buddy-toggle-icon" aria-hidden="true"></span><span class="buddy-toggle-label"></span>';
  tools.insertBefore(button, tools.querySelector(".language-switch"));
  button.addEventListener("click", () => setBuddyEnabled(!buddyEnabled));
  return button;
}

function updateBuddyButton() {
  if (!buddyToggle) {
    return;
  }

  buddyToggle.classList.toggle("is-on", buddyEnabled);
  buddyToggle.setAttribute("aria-pressed", String(buddyEnabled));
  buddyToggle.setAttribute("aria-label", textFor(buddyEnabled ? "buddy.turnOff" : "buddy.turnOn"));
  buddyToggle.querySelector(".buddy-toggle-label").textContent = textFor(buddyEnabled ? "buddy.on" : "buddy.off");
  buddy?.querySelector(".buddy-hide")?.setAttribute("aria-label", textFor("buddy.hide"));
  syncHeaderTooltips();
}

function createBuddy() {
  const element = document.createElement("div");
  element.className = "pybot-buddy";
  element.hidden = true;
  element.innerHTML = `
    <p class="buddy-bubble" aria-hidden="true"></p>
    <button class="buddy-hide" type="button">×</button>
    <div class="buddy-body" aria-hidden="true">
      <div class="pybot-wrap" data-mood="welcoming">${PYBOT_MARKUP}</div>
    </div>`;
  element.querySelector(".buddy-hide").addEventListener("click", () => {
    setBuddyEnabled(false);
    buddyToggle?.focus();
  });
  element.addEventListener("pointerenter", () => {
    buddyHovered = true;
    window.clearTimeout(buddyBubbleTimer);
    buddyHoverHello();
  });
  element.addEventListener("pointerleave", () => {
    buddyHovered = false;
    buddyHideBubbleLater(Math.max(1800, buddyBubbleUntil - Date.now()));
  });
  armBuddyDrag(element.querySelector(".buddy-body"));
  document.body.append(element);
  return element;
}

// Dragging moves PyBot; a tap without moving pokes it.
function armBuddyDrag(handle) {
  let drag = null;

  handle.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) {
      return;
    }
    const box = buddy.getBoundingClientRect();
    drag = {
      id: event.pointerId, startX: event.clientX, startY: event.clientY, dx: event.clientX - box.left, dy: event.clientY - box.top,
      moved: false, lastX: event.clientX, lastY: event.clientY, dirX: 0, dirY: 0, turns: [], shook: false,
    };
    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.id) {
      return;
    }
    if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < 6) {
      return;
    }
    if (!drag.moved) {
      drag.moved = true;
      buddyWake(false);
      buddy.classList.add("is-dragging");
      buddyAct("surprised", "", textFor("buddy.dragging"), 60_000);
    }
    placeBuddy(event.clientX - drag.dx, event.clientY - drag.dy);
    noteBuddyShake(drag, event.clientX, event.clientY);
  });

  const end = (event) => {
    if (!drag || event.pointerId !== drag.id) {
      return;
    }
    const { moved, shook } = drag;
    drag = null;
    buddy.classList.remove("is-dragging", "is-shaking");
    if (moved) {
      saveBuddyPosition();
      if (shook) {
        buddyAct("happy", "dizzy", buddyPick("buddy.dizzy", 3), 3800);
        buddyParticles("★", 5);
        return;
      }
      buddyAct("happy", "hop", buddyPick("buddy.dropped", 3), 2400);
    } else if (event.type === "pointerup") {
      buddyPoke();
    }
  };
  handle.addEventListener("pointerup", end);
  handle.addEventListener("pointercancel", end);
}

// Quick back-and-forth while dragging counts as shaking, and makes PyBot dizzy.
function noteBuddyShake(drag, x, y) {
  const now = Date.now();
  [["X", x - drag.lastX], ["Y", y - drag.lastY]].forEach(([axis, delta]) => {
    if (Math.abs(delta) < 4) {
      return;
    }
    const direction = Math.sign(delta);
    if (drag[`dir${axis}`] && direction !== drag[`dir${axis}`]) {
      drag.turns.push(now);
    }
    drag[`dir${axis}`] = direction;
  });
  drag.lastX = x;
  drag.lastY = y;
  drag.turns = drag.turns.filter((time) => now - time < 1200);

  const shaking = drag.turns.length >= 5;
  buddy.classList.toggle("is-shaking", shaking);
  if (shaking && !drag.shook) {
    drag.shook = true;
    buddyShowBubble(textFor("buddy.shaking"));
  }
}

function buddyActive() {
  return Boolean(buddy) && buddyEnabled && buddyScreenQuery.matches && !document.hidden;
}

// Long messages stay longer, so there is time to read them.
function buddyReadingTime(text) {
  return Math.min(13_000, Math.max(4000, 1800 + text.length * 80));
}

function buddyHideBubbleLater(delay) {
  window.clearTimeout(buddyBubbleTimer);
  if (buddyHovered) {
    return;
  }
  buddyBubbleTimer = window.setTimeout(() => buddy?.querySelector(".buddy-bubble")?.classList.remove("is-visible"), delay);
}

function buddyShowBubble(text) {
  const bubble = buddy?.querySelector(".buddy-bubble");
  if (!bubble) {
    return;
  }

  const duration = buddyReadingTime(text);
  buddySpeechId += 1;
  bubble.textContent = text;
  bubble.classList.remove("is-visible");
  void bubble.offsetWidth;
  bubble.classList.add("is-visible");
  buddyBubbleUntil = Date.now() + duration;
  buddyHideBubbleLater(duration);
}

function buddyParticles(symbol, count = 5) {
  if (!buddy || reducedMotionQuery.matches) {
    return;
  }
  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    particle.className = "buddy-particle";
    particle.textContent = symbol;
    particle.style.setProperty("--particle-x", `${Math.round((Math.random() - 0.5) * 90)}px`);
    particle.style.setProperty("--particle-delay", `${index * 140}ms`);
    buddy.append(particle);
    window.setTimeout(() => particle.remove(), 1800 + index * 140);
  }
}

// Sets a mood and a move for a while, then PyBot goes back to resting.
function buddyAct(mood, move = "", text = "", duration = 2600) {
  if (!buddyActive()) {
    return;
  }

  const wrap = buddy.querySelector(".pybot-wrap");
  wrap.dataset.mood = mood;
  buddy.dataset.move = "";
  void buddy.offsetWidth;
  buddy.dataset.move = move;
  if (text) {
    buddyShowBubble(text);
  }

  // Wait until the learner had time to read before the next antic.
  buddyBusyUntil = Date.now() + Math.max(duration, text ? buddyReadingTime(text) : 0);
  window.clearTimeout(buddyRestTimer);
  buddyRestTimer = window.setTimeout(() => {
    wrap.dataset.mood = "happy";
    buddy.dataset.move = "";
  }, duration);
  scheduleBuddyIdle();
}

function buddyPick(prefix, count) {
  return textFor(`${prefix}${1 + Math.floor(Math.random() * count)}`);
}

function buddyPoke() {
  if (buddyAsleep) {
    buddyWake();
    return;
  }
  // Lots of quick pokes in a row: PyBot gives up, giggling.
  const now = Date.now();
  buddyPokes = buddyPokes.filter((time) => now - time < 4000).concat(now);
  if (buddyPokes.length >= 5) {
    buddyPokes = [];
    buddyAct("celebrating", "dance", textFor("buddy.pokeLots"), 3000);
    buddyParticles("♥", 6);
    return;
  }
  const roll = Math.random();
  if (roll < 0.3) {
    buddyAct("wink", "wiggle", buddyPick("buddy.poke", 3), 2200);
    buddyParticles("♥", 3);
  } else if (roll < 0.6) {
    buddyTellTwoPart("buddy.joke", BUDDY_JOKE_COUNT, "wink");
  } else if (roll < 0.75) {
    buddyTellTwoPart("buddy.riddle", BUDDY_RIDDLE_COUNT, "thinking");
  } else {
    buddyIdleAntic(true);
  }
}

// A joke or riddle: the question first, the answer once there was time to think.
function buddyTellTwoPart(prefix, count, mood) {
  const number = 1 + Math.floor(Math.random() * count);
  const question = textFor(`${prefix}${number}Q`);
  const wait = Math.max(3500, buddyReadingTime(question) - 500);
  buddyAct(mood, "", question, wait + 2000);
  const speech = buddySpeechId;
  window.setTimeout(() => {
    // Skip the answer when something else already took the bubble.
    if (speech !== buddySpeechId || !buddyActive() || buddyAsleep) {
      return;
    }
    buddyAct("celebrating", "hop", textFor(`${prefix}${number}A`), 3000);
    buddyParticles(prefix === "buddy.joke" ? "♪" : "✦", 4);
  }, wait);
}

function buddyHoverHello() {
  const now = Date.now();
  if (!buddyActive() || buddyAsleep || now < buddyBusyUntil || now < buddyHoverAfter || buddy.classList.contains("is-dragging")) {
    return;
  }
  buddyHoverAfter = now + 30_000;
  if (Math.random() < 0.6) {
    buddyAct("happy", "wave", buddyPick("buddy.hover", 3), 2000);
  }
}

function buddyGreeting() {
  const hour = new Date().getHours();
  const part = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";
  const greet = textFor(`buddy.greet${part}`);
  const text = learnerName ? textWithName("buddy.greetNamed") : textFor("buddy.greet");
  return text.replaceAll("{greet}", greet);
}

// Small one-time reactions to what the learner does on the page.
function buddyNoticePage(event) {
  if (!buddyActive() || buddyAsleep || Date.now() < buddyBusyUntil) {
    return;
  }
  if (event.type === "scroll" && !buddySaidBottom) {
    const page = document.documentElement;
    if (page.scrollHeight > window.innerHeight * 1.5 && window.innerHeight + window.scrollY >= page.scrollHeight - 40) {
      buddySaidBottom = true;
      buddyAct("starry", "spin", textFor("buddy.bottom"), 2600);
      buddyParticles("✦", 5);
    }
  } else if (event.type === "input" && !buddySaidTyping && event.target.matches?.("textarea")) {
    buddySaidTyping = true;
    buddyAct("focused", "", buddyPick("buddy.typing", 3), 2200);
  }
}

function buddyIdleAntic(poked = false) {
  if (!buddyActive() || buddyAsleep || (!poked && Date.now() < buddyBusyUntil)) {
    scheduleBuddyIdle();
    return;
  }

  if (!poked && Date.now() - buddyLastInput > BUDDY_NAP_AFTER_MS) {
    buddySleep();
    return;
  }

  const antic = BUDDY_IDLE_ANTICS[Math.floor(Math.random() * BUDDY_IDLE_ANTICS.length)];
  if (antic.joke || antic.riddle) {
    buddyTellTwoPart(antic.joke ? "buddy.joke" : "buddy.riddle", antic.joke ? BUDDY_JOKE_COUNT : BUDDY_RIDDLE_COUNT, antic.mood);
    return;
  }
  let text = "";
  if (antic.say) {
    text = textFor(antic.say);
  } else if (antic.fact) {
    text = buddyPick("buddy.fact", BUDDY_FACT_COUNT);
  } else if (antic.cheer) {
    text = buddyPick("buddy.cheer", BUDDY_CHEER_COUNT);
  } else if (antic.tip && (poked || Math.random() < 0.6)) {
    text = buddyPick("buddy.tip", BUDDY_TIP_COUNT);
  }
  buddyAct(antic.mood, antic.move, text, 2400);
  if (antic.particles) {
    buddyParticles(antic.particles);
  }
}

function buddySleep() {
  buddyAsleep = true;
  buddy.querySelector(".pybot-wrap").dataset.mood = "happy";
  buddy.dataset.move = "sleep";
  buddy.querySelector(".buddy-bubble").classList.remove("is-visible");
  buddyParticles("z", 3);
  window.clearTimeout(buddyIdleTimer);
  // Little snores while napping.
  buddyIdleTimer = window.setInterval(() => buddyParticles("z", 3), 4000);
}

function buddyWake(greet = true) {
  if (!buddyAsleep) {
    return;
  }
  buddyAsleep = false;
  window.clearInterval(buddyIdleTimer);
  buddy.dataset.move = "";
  if (greet) {
    buddyAct("surprised", "hop", textFor("buddy.wake"), 2400);
  } else {
    scheduleBuddyIdle();
  }
}

function scheduleBuddyIdle() {
  if (buddyAsleep) {
    return;
  }
  window.clearTimeout(buddyIdleTimer);
  if (!buddyActive()) {
    return;
  }

  // Calmer when the learner prefers less motion.
  const delay = (reducedMotionQuery.matches ? 22000 : 9000) + Math.random() * 8000;
  buddyIdleTimer = window.setTimeout(buddyIdleAntic, delay);
}

// PyBot's eyes follow the pointer.
function buddyLookAt(clientX, clientY) {
  if (!buddyActive() || buddy.hidden || buddyLookFrame) {
    return;
  }
  buddyLookFrame = window.requestAnimationFrame(() => {
    buddyLookFrame = 0;
    const box = buddy.querySelector(".buddy-body").getBoundingClientRect();
    const dx = clientX - (box.left + box.width / 2);
    const dy = clientY - (box.top + box.height * 0.3);
    const distance = Math.hypot(dx, dy) || 1;
    const reach = Math.min(1, distance / 160);
    buddy.style.setProperty("--look-x", `${((dx / distance) * 11 * reach).toFixed(1)}px`);
    buddy.style.setProperty("--look-y", `${((dy / distance) * 8 * reach).toFixed(1)}px`);
  });
}

function noteBuddyInput(event) {
  buddyLastInput = Date.now();
  // A tap on PyBot itself wakes it through the poke.
  if (buddyAsleep && buddyActive() && !buddy.contains(event.target)) {
    buddyWake();
  }
}

// Called from the places that already tell the learner how they did.
function buddyReact(event) {
  if (!buddyActive()) {
    return;
  }
  buddyWake(false);

  if (event === "correct") {
    const stepActivities = document.querySelectorAll(".step-activity");
    const pageDone = stepActivities.length > 0 && [...stepActivities].every((item) => item.classList.contains("is-complete"));
    if (pageDone) {
      buddyAct("celebrating", "dance", learnerName ? textWithName("buddy.pageDoneNamed") : textFor("buddy.pageDone"), 4200);
      buddyParticles("✦", 8);
      return;
    }
    const roll = Math.random();
    let text = buddyPick("buddy.correct", 4);
    if (learnerName && roll < 0.25) {
      text = textWithName("buddy.correctNamed");
    } else if (roll > 0.8) {
      text = buddyPick("buddy.cheer", BUDDY_CHEER_COUNT);
    }
    const mood = ["celebrating", "starry", "proud"][Math.floor(Math.random() * 3)];
    buddyAct(mood, "hop", text, 3000);
    buddyParticles("✦", 4);
  } else if (event === "wrong") {
    buddyAct("encouraging", "nod", buddyPick("buddy.wrong", 4), 3000);
  } else if (event === "nameSaved") {
    buddyAct("welcoming", "wave", textWithName("buddy.nameSaved"), 3200);
    buddyParticles("♥", 4);
  }
}

function syncBuddy() {
  if (!buddy) {
    return;
  }

  const visible = buddyEnabled && buddyScreenQuery.matches;
  buddy.hidden = !visible;
  if (!visible || document.hidden) {
    window.clearTimeout(buddyIdleTimer);
    window.clearInterval(buddyIdleTimer);
    window.clearTimeout(buddyRestTimer);
    buddyAsleep = false;
    return;
  }
  restoreBuddyPosition();
  scheduleBuddyIdle();
}

function setBuddyEnabled(enabled) {
  buddyEnabled = enabled;
  try {
    localStorage.setItem(BUDDY_PREFERENCE_KEY, String(enabled));
  } catch {
    // The companion control still works for the current page.
  }

  updateBuddyButton();
  syncBuddy();
  if (enabled) {
    buddyAct("welcoming", "wave", buddyGreeting(), 2800);
  }
}

function startBuddy() {
  buddyEnabled = storedBuddyPreference();
  buddyToggle = createBuddyToggle();
  buddy = createBuddy();
  updateBuddyButton();
  syncBuddy();
  buddyScreenQuery.addEventListener("change", syncBuddy);
  document.addEventListener("visibilitychange", syncBuddy);
  window.addEventListener("resize", restoreBuddyPosition);
  document.addEventListener("pointermove", (event) => {
    noteBuddyInput(event);
    buddyLookAt(event.clientX, event.clientY);
  }, { passive: true });
  ["keydown", "scroll", "pointerdown"].forEach((type) => document.addEventListener(type, noteBuddyInput, { passive: true }));
  ["scroll", "input"].forEach((type) => document.addEventListener(type, buddyNoticePage, { passive: true }));
  // Say hello once per visit, not on every page.
  let greeted = false;
  try {
    greeted = sessionStorage.getItem(BUDDY_GREETED_KEY) === "true";
    sessionStorage.setItem(BUDDY_GREETED_KEY, "true");
  } catch {
    // Without storage PyBot greets on every page.
  }
  if (!greeted) {
    window.setTimeout(() => buddyAct("welcoming", "wave", buddyGreeting(), 3000), 900);
  }
}

function activityStorageKey(activityId) {
  return `${STORAGE_PREFIX}activity.${activityId}`;
}

// The backup allowlist mirrors the storage registry in README.md.
function backupValidators() {
  const validators = {
    [LANGUAGE_KEY]: (value) => Boolean(translations[value]),
    [BUDDY_PREFERENCE_KEY]: (value) => value === "true" || value === "false",
    [BUDDY_POSITION_KEY]: (value) => /^(0(\.\d+)?|1(\.0+)?),(0(\.\d+)?|1(\.0+)?)$/.test(value),
    [LEARNER_NAME_KEY]: (value) => value.length > 0 && normalizeLearnerName(value) === value,
    [PATH_CURRENT_KEY]: (value) => pathSteps.some((step) => step.id === value),
    [PATH_VISITED_KEY]: (value) => value.split(",").every((id) => pathSteps.some((step) => step.id === id)),
    [PATH_DONE_KEY]: (value) => value === "" || value.split(",").every((id) => pathSteps.some((step) => step.id === id)),
    [PATH_KNOWN_KEY]: (value) => value === "" || value.split(",").every((id) => pathSteps.some((step) => step.id === id)),
    [SELF_CHECK_KEY]: (value) => value === "" || value.split(",").every((pair) => {
      const [id, rating] = pair.split(":");
      return pathSteps.some((step) => step.id === id) && SELF_CHECK_RATINGS.includes(rating);
    }),
    [BADGES_KEY]: (value) => value === "" || value.split(",").every((pair) => {
      const [id, date] = pair.split(":");
      return badgeList().some((badge) => badge.id === id) && DATE_PATTERN.test(date ?? "");
    }),
    [DAYS_KEY]: (value) => value === "" || value.split(",").every((day) => DATE_PATTERN.test(day)),
  };

  activityIds.forEach((activityId) => {
    validators[activityStorageKey(activityId)] = (value) => value === "complete" || value === "review";
  });

  return validators;
}

function renameProgressStep(progress, from, to) {
  const rename = (id) => (id === from ? to : id);
  if (progress[PATH_CURRENT_KEY] === from) {
    progress[PATH_CURRENT_KEY] = to;
  }
  PATH_LIST_KEYS.filter((key) => typeof progress[key] === "string").forEach((key) => {
    progress[key] = progress[key].split(",").map(rename).join(",");
  });
  if (typeof progress[SELF_CHECK_KEY] === "string") {
    progress[SELF_CHECK_KEY] = progress[SELF_CHECK_KEY]
      .split(",")
      .map((pair) => pair.split(":"))
      .map(([id, rating]) => `${rename(id)}:${rating}`)
      .join(",");
  }
}

function renameProgressActivity(progress, from, to) {
  const fromKey = activityStorageKey(from);
  if (Object.hasOwn(progress, fromKey)) {
    progress[activityStorageKey(to)] ??= progress[fromKey];
    delete progress[fromKey];
  }
}

// Runs every migration after `fromVersion`, then drops steps and activities the
// current course no longer has, so progress from any older version still loads.
function upgradeProgress(progress, fromVersion) {
  const upgraded = { ...progress };
  if (fromVersion >= PROGRESS_VERSION) {
    return upgraded;
  }

  for (let version = fromVersion + 1; version <= PROGRESS_VERSION; version += 1) {
    progressMigrations[version]?.(upgraded);
  }

  const isStep = (id) => pathSteps.some((step) => step.id === id);
  const keepIds = (key, isKept) => {
    if (typeof upgraded[key] === "string") {
      upgraded[key] = upgraded[key].split(",").filter(isKept).join(",");
    }
  };
  PATH_LIST_KEYS.forEach((key) => keepIds(key, isStep));
  keepIds(SELF_CHECK_KEY, (pair) => isStep(pair.split(":")[0]));
  if (upgraded[PATH_VISITED_KEY] === "") {
    delete upgraded[PATH_VISITED_KEY];
  }
  if (Object.hasOwn(upgraded, PATH_CURRENT_KEY) && !isStep(upgraded[PATH_CURRENT_KEY])) {
    delete upgraded[PATH_CURRENT_KEY];
  }
  Object.keys(upgraded)
    .filter((key) => key.startsWith(activityStorageKey("")) && !activityIds.includes(key.slice(activityStorageKey("").length)))
    .forEach((key) => delete upgraded[key]);

  return upgraded;
}

// Brings the progress in this browser up to PROGRESS_VERSION after the course changes.
// Progress saved before versions existed counts as version 1.
function upgradeStoredProgress() {
  try {
    const stored = Number.parseInt(localStorage.getItem(PROGRESS_VERSION_KEY) ?? "1", 10);
    const fromVersion = Number.isInteger(stored) && stored > 0 ? stored : 1;
    if (fromVersion > PROGRESS_VERSION) {
      return;
    }

    if (fromVersion < PROGRESS_VERSION) {
      const progress = {};
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key?.startsWith(STORAGE_PREFIX) && key !== PROGRESS_VERSION_KEY) {
          progress[key] = localStorage.getItem(key);
        }
      }

      const upgraded = upgradeProgress(progress, fromVersion);
      Object.keys(progress).filter((key) => !Object.hasOwn(upgraded, key)).forEach((key) => localStorage.removeItem(key));
      Object.entries(upgraded).forEach(([key, value]) => localStorage.setItem(key, value));
    }

    localStorage.setItem(PROGRESS_VERSION_KEY, String(PROGRESS_VERSION));
  } catch {
    // Storage failure must never block a lesson.
  }
}

function createBackup() {
  const progress = {};

  Object.entries(backupValidators()).forEach(([key, isValid]) => {
    const value = localStorage.getItem(key);
    if (value !== null && isValid(value)) {
      progress[key] = value;
    }
  });

  return {
    format: BACKUP_FORMAT,
    schemaVersion: BACKUP_SCHEMA_VERSION,
    progressVersion: PROGRESS_VERSION,
    exportedAt: new Date().toISOString(),
    progress,
  };
}

// Returns the validated progress entries, or an error key when the file must be rejected.
function readBackup(text) {
  let backup;
  try {
    backup = JSON.parse(text);
  } catch {
    return { error: "backup.invalid" };
  }

  if (!backup || typeof backup !== "object" || backup.format !== BACKUP_FORMAT) {
    return { error: "backup.invalid" };
  }

  // Backups saved before progress versions existed belong to version 1.
  const progressVersion = backup.progressVersion ?? 1;
  if (
    (Number.isInteger(backup.schemaVersion) && backup.schemaVersion > BACKUP_SCHEMA_VERSION) ||
    (Number.isInteger(progressVersion) && progressVersion > PROGRESS_VERSION)
  ) {
    return { error: "backup.newer" };
  }

  const { progress } = backup;
  if (
    backup.schemaVersion !== BACKUP_SCHEMA_VERSION ||
    !Number.isInteger(progressVersion) ||
    progressVersion < 1 ||
    !progress ||
    typeof progress !== "object" ||
    Array.isArray(progress) ||
    !Object.values(progress).every((value) => typeof value === "string")
  ) {
    return { error: "backup.invalid" };
  }

  const validators = backupValidators();
  const entries = Object.entries(upgradeProgress(progress, progressVersion));
  const allValid = entries.every(([key, value]) => Object.hasOwn(validators, key) && validators[key](value));

  return allValid ? { entries, upgraded: progressVersion < PROGRESS_VERSION } : { error: "backup.invalid" };
}

function replaceProgress(entries) {
  const previous = Object.keys(backupValidators()).map((key) => [key, localStorage.getItem(key)]);

  try {
    previous.forEach(([key]) => localStorage.removeItem(key));
    entries.forEach(([key, value]) => localStorage.setItem(key, value));
  } catch (error) {
    previous.forEach(([key, value]) => {
      try {
        if (value === null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, value);
        }
      } catch {
        // Restoring the earlier progress is best effort.
      }
    });
    throw error;
  }
}

function setBackupStatus(key, element = backupStatus) {
  if (!element) {
    return;
  }

  if (!key) {
    delete element.dataset.i18n;
    element.textContent = "";
    return;
  }

  element.dataset.i18n = key;
  element.textContent = textFor(key);
}

// Returns false when the browser could not build the backup file.
function downloadBackup() {
  let backup;
  try {
    backup = createBackup();
  } catch {
    return false;
  }

  const file = new Blob([`${JSON.stringify(backup, null, 2)}\n`], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = `pybot-blocks-backup-${backup.exportedAt.slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  return true;
}

// Keeps the preferences and the name, and drops every other registered key.
function progressAfterReset() {
  return RESET_KEPT_KEYS.map((key) => [key, localStorage.getItem(key)]).filter(([, value]) => value !== null);
}

// Shows an in-page question card right after `anchor` and resolves with the
// chosen value, or null when the card is dismissed with Escape.
function askInPage(anchor, { tone = "info", textKey, count, noteKey, choices }) {
  document.querySelectorAll(".inline-ask").forEach((card) => card.cancel?.());

  return new Promise((resolve) => {
    const card = document.createElement("div");
    card.className = `inline-ask inline-ask-tone-${tone}`;
    card.setAttribute("role", "group");

    const icon = document.createElement("span");
    icon.className = "inline-ask-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = tone === "danger" ? "!" : "?";

    const body = document.createElement("div");
    body.className = "inline-ask-body";

    if (noteKey) {
      const note = document.createElement("p");
      note.className = "inline-ask-note";
      note.dataset.i18n = noteKey;
      note.textContent = textFor(noteKey);
      body.append(note);
    }

    const text = document.createElement("p");
    text.className = "inline-ask-text";
    text.id = `inline-ask-${Date.now()}`;
    text.dataset.i18n = textKey;
    if (count !== undefined) {
      text.dataset.i18nCount = String(count);
    }
    text.textContent = textFor(textKey).replaceAll("{count}", String(count ?? ""));
    card.setAttribute("aria-labelledby", text.id);
    body.append(text);

    const actions = document.createElement("div");
    actions.className = "inline-ask-actions";
    body.append(actions);

    const finish = (value) => {
      card.remove();
      anchor.hidden = false;
      anchor.focus();
      resolve(value);
    };
    card.cancel = () => finish(null);

    choices.forEach(({ value, key, style = "secondary" }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `inline-ask-button inline-ask-${style}`;
      button.dataset.i18n = key;
      button.textContent = textFor(key);
      button.addEventListener("click", () => finish(value));
      actions.append(button);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        finish(null);
      }
    });

    card.append(icon, body);
    anchor.after(card);
    anchor.hidden = true;
    actions.querySelector("button")?.focus();
  });
}

backupExportButton?.addEventListener("click", () => {
  setBackupStatus(downloadBackup() ? "backup.exported" : "backup.failed");
});

progressResetButton?.addEventListener("click", async () => {
  setBackupStatus("", resetStatus);
  const backupChoice = await askInPage(progressResetButton, {
    tone: "info",
    textKey: "reset.askBackup",
    choices: [
      { value: "backup", key: "reset.saveFirst", style: "primary" },
      { value: "skip", key: "reset.skipBackup" },
      { value: null, key: "ask.cancel", style: "quiet" },
    ],
  });
  if (!backupChoice) {
    setBackupStatus("reset.cancelled", resetStatus);
    return;
  }

  const savedBackup = backupChoice === "backup";
  if (savedBackup && !downloadBackup()) {
    setBackupStatus("backup.failed", resetStatus);
    return;
  }

  const eraseChoice = await askInPage(progressResetButton, {
    tone: "danger",
    noteKey: savedBackup ? "backup.exported" : undefined,
    textKey: "reset.confirm",
    choices: [
      { value: "erase", key: "reset.eraseYes", style: "danger" },
      { value: null, key: "ask.keep" },
    ],
  });
  if (eraseChoice !== "erase") {
    setBackupStatus("reset.cancelled", resetStatus);
    return;
  }

  try {
    replaceProgress(progressAfterReset());
  } catch {
    setBackupStatus("reset.failed", resetStatus);
    return;
  }

  setLanguage(storedLanguage(), false);
  setBackupStatus("reset.done", resetStatus);
});

if (progressVersionLabel) {
  progressVersionLabel.textContent = String(PROGRESS_VERSION);
}

backupImportButton?.addEventListener("click", () => backupImportInput?.click());

backupImportInput?.addEventListener("change", async () => {
  const file = backupImportInput.files?.[0];
  backupImportInput.value = "";
  if (!file) {
    return;
  }

  const result = file.size > BACKUP_MAX_BYTES ? { error: "backup.invalid" } : readBackup(await file.text());
  if (result.error) {
    setBackupStatus(result.error);
    return;
  }

  const finished = result.entries.filter(([, value]) => value === "complete").length;
  setBackupStatus("");
  const answer = await askInPage(backupImportButton, {
    tone: "warn",
    textKey: "backup.confirm",
    count: finished,
    choices: [
      { value: "load", key: "backup.loadYes", style: "primary" },
      { value: null, key: "ask.keep" },
    ],
  });
  if (answer !== "load") {
    setBackupStatus("backup.cancelled");
    return;
  }

  try {
    replaceProgress(result.entries);
  } catch {
    setBackupStatus("backup.failed");
    return;
  }

  learnerName = storedLearnerName();
  setLanguage(storedLanguage(), false);
  updateLearnerNamePanel(!learnerName);
  if (storedBuddyPreference() !== buddyEnabled) {
    setBuddyEnabled(!buddyEnabled);
  }
  setBackupStatus(result.upgraded ? "backup.upgraded" : "backup.imported");
});


// Home: the big PyBot changes its face when tapped.
const heroMoods = ["happy", "celebrating", "curious", "wink", "starry", "thinking", "proud"];
const pybotWrap = document.querySelector(".hero-stage .pybot-wrap");
const pybotMessage = document.querySelector("#pybot-message p");

function moodMessage(mood) {
  if (mood === "happy" && learnerName) {
    return textWithName("mood.happyNamed");
  }
  if (mood === "proud") {
    return learnerName ? textWithName("mood.proud") : textFor("mood.proudPlain");
  }
  return textFor(`mood.${mood}`);
}

function setMood(mood) {
  if (!pybotWrap || !pybotMessage) {
    return;
  }
  pybotWrap.dataset.mood = mood;
  pybotMessage.textContent = moodMessage(mood);
}

function nextMood() {
  const index = heroMoods.indexOf(pybotWrap.dataset.mood);
  setMood(heroMoods[(index + 1) % heroMoods.length]);
}

if (pybotWrap) {
  pybotWrap.querySelector(".pybot").outerHTML = PYBOT_MARKUP;
  pybotWrap.setAttribute("role", "button");
  pybotWrap.tabIndex = 0;
  pybotWrap.dataset.i18nAriaLabel = "pybot.aria";
  pybotWrap.addEventListener("click", nextMood);
  pybotWrap.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      nextMood();
    }
  });
}

// Home: "What would you like me to call you?"
const learnerNameForm = document.querySelector("[data-name-form]");
const learnerNameInput = document.querySelector("#learner-name");
const learnerNameSaved = document.querySelector("[data-name-saved]");
const learnerNameError = document.querySelector("#learner-name-error");
const learnerNameForget = document.querySelector("[data-name-forget]");

function updateLearnerNamePanel(showForm = !learnerName) {
  if (!learnerNameForm) {
    return;
  }
  learnerNameForm.hidden = !showForm;
  learnerNameSaved.hidden = showForm;
  learnerNameForget.hidden = !learnerName;
  learnerNameSaved.querySelector("[data-learner-name]").textContent = learnerName;
  if (showForm) {
    learnerNameInput.value = learnerName;
  }
}

function saveLearnerName(name) {
  learnerName = name;
  try {
    if (name) {
      localStorage.setItem(LEARNER_NAME_KEY, name);
    } else {
      localStorage.removeItem(LEARNER_NAME_KEY);
    }
  } catch {
    // The name still works on this page.
  }
  setMood(pybotWrap?.dataset.mood ?? "happy");
}

learnerNameForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = normalizeLearnerName(learnerNameInput.value);
  learnerNameError.hidden = Boolean(name);
  if (!name) {
    learnerNameInput.focus();
    return;
  }
  saveLearnerName(name);
  updateLearnerNamePanel(false);
  setMood("welcoming");
  pybotMessage.textContent = textWithName("buddy.nameSaved");
  buddyReact("nameSaved");
});

learnerNameSaved?.querySelector("[data-name-edit]").addEventListener("click", () => {
  updateLearnerNamePanel(true);
  learnerNameInput.focus();
});

learnerNameForget?.addEventListener("click", () => {
  saveLearnerName("");
  updateLearnerNamePanel(true);
  learnerNameInput.focus();
});

// Home: the PyBot family. Drawn again when the language changes.
function renderFamily() {
  const list = document.querySelector("[data-family]");
  if (!list) {
    return;
  }
  list.replaceChildren(...pybotFamily.filter((site) => site.id !== THIS_SITE).map((site) => {
    const item = document.createElement("li");
    const card = document.createElement(site.soon ? "div" : "a");
    card.className = "family-card";
    if (!site.soon) {
      card.href = site.url;
    }
    const icon = document.createElement("span");
    icon.className = `family-icon family-icon-${site.id}`;
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = site.icon;
    const ask = document.createElement("b");
    ask.textContent = textFor(site.ask);
    const text = document.createElement("span");
    text.textContent = `${site.name}: ${textFor(site.text)}`;
    const visit = document.createElement("span");
    visit.className = site.soon ? "chip chip-soon" : "family-visit";
    visit.textContent = textFor(site.soon ? "family.soon" : "family.visit");
    card.append(icon, ask, text, visit);
    item.append(card);
    return item;
  }));
}

// Course: zones with their route of pages.
function renderCourse() {
  const list = document.querySelector("[data-zone-list]");
  if (!list) {
    return;
  }
  const done = new Set(doneSteps().map((step) => step.id));
  const doneZones = zoneProgress().done;
  let current = "";
  try {
    current = localStorage.getItem(PATH_CURRENT_KEY) ?? "";
  } catch {
    // Without storage no page is marked.
  }
  let number = 0;
  list.replaceChildren(...pathZones.map((zone) => {
    const card = document.createElement("li");
    card.className = `zone-card${zone.final ? " zone-final" : ""}`;
    card.id = `zone-${zone.id}`;
    const label = zone.final ? textFor("course.final") : textFor("course.zone").replace("{count}", String(number++).padStart(2, "0"));
    card.innerHTML = `
      <span class="zone-badge" aria-hidden="true"></span>
      <p class="zone-number"></p>
      <h2></h2>
      <p class="zone-text"></p>
      <ol class="zone-route"></ol>
      <details class="zone-adults"><summary></summary><p></p></details>`;
    card.querySelector(".zone-badge").textContent = zone.icon;
    card.querySelector(".zone-number").textContent = label;
    card.querySelector("h2").textContent = textFor(zone.title);
    card.querySelector(".zone-text").textContent = textFor(`zone.${zone.id}.text`);
    const route = card.querySelector(".zone-route");
    route.setAttribute("aria-label", textFor("course.pages"));
    zone.steps.forEach((id, index) => {
      const step = pathSteps.find((candidate) => candidate.id === id);
      const stop = document.createElement("li");
      stop.className = `route-stop${done.has(id) ? " is-done" : ""}`;
      stop.innerHTML = '<span class="route-dot" aria-hidden="true"></span><span></span>';
      stop.querySelector(".route-dot").textContent = done.has(id) ? "✓" : String(index + 1);
      const name = stop.querySelector("span:last-child");
      name.textContent = textFor(`step.${id}`);
      if (!step.soon) {
        const link = document.createElement("a");
        link.href = `lessons/${id}.html`;
        link.textContent = name.textContent;
        name.replaceChildren(link);
      }
      if (id === current) {
        stop.classList.add("is-current");
        const here = document.createElement("span");
        here.className = "chip";
        here.textContent = textFor("course.here");
        stop.append(here);
      }
      if (step.soon) {
        const chip = document.createElement("span");
        chip.className = "chip chip-soon";
        chip.textContent = textFor("chip.soon");
        stop.append(chip);
      }
      route.append(stop);
    });
    card.querySelector(".zone-adults summary").textContent = textFor("course.adults");
    card.querySelector(".zone-adults p").textContent = textFor(`zone.${zone.id}.adults`);
    if (doneZones.has(zone)) {
      const diploma = document.createElement("a");
      diploma.className = "zone-diploma";
      diploma.href = `diploma.html?zone=${encodeURIComponent(zone.steps[0])}`;
      diploma.textContent = `🎓 ${textFor("course.diploma")}`;
      card.append(diploma);
    }
    return card;
  }));
}

// Home: first mission. Order three blocks so PyBot moves and says hello. Every
// block has a visible effect, as in Scratch: without the event on top nothing
// runs; then the blocks run in order (moving is a quick jump, saying waits 2 s).
const mission = document.querySelector("[data-mission]");
const missionBlocks = {
  flag: { kind: "events", key: "mission.blockFlag" },
  move: { kind: "motion", key: "mission.blockMove", value: "150" },
  say: { kind: "looks", key: "mission.blockSay", valueKey: "mission.hello" },
};
let missionProgram = [];
let missionFeedbackKey = "";

function missionBlock(id, tag) {
  const block = document.createElement(tag);
  const { kind, key, valueKey } = missionBlocks[id];
  const value = valueKey ? textFor(valueKey) : missionBlocks[id].value;
  block.className = `block block-${kind}`;
  const parts = textFor(key).split("{value}");
  block.append(parts[0]);
  if (value) {
    const bubble = document.createElement("span");
    bubble.className = "block-value";
    bubble.textContent = value;
    block.append(bubble, parts[1]);
  }
  return block;
}

function renderMission() {
  if (!mission) {
    return;
  }
  const tray = mission.querySelector("[data-mission-tray]");
  const program = mission.querySelector("[data-mission-program]");
  // A fixed shuffled order, so the answer is never already in place.
  tray.replaceChildren(...["move", "say", "flag"].filter((id) => !missionProgram.includes(id)).map((id) => {
    const item = document.createElement("li");
    const button = missionBlock(id, "button");
    button.type = "button";
    button.addEventListener("click", () => {
      missionProgram.push(id);
      missionFeedbackKey = "";
      resetMissionStage();
      renderMission();
      mission.querySelector("[data-mission-tray] button, [data-mission-try]")?.focus();
    });
    item.append(button);
    return item;
  }));
  program.replaceChildren(...missionProgram.map((id) => {
    const item = document.createElement("li");
    item.append(missionBlock(id, "div"));
    return item;
  }));
  mission.querySelector("[data-mission-empty]").hidden = missionProgram.length > 0;
  const feedback = mission.querySelector("[data-mission-feedback]");
  feedback.textContent = missionFeedbackKey ? textFor(missionFeedbackKey) : "";
  feedback.classList.toggle("is-good", missionFeedbackKey === "mission.good" || missionFeedbackKey === "mission.again");
  mission.querySelector("[data-mission-next]").hidden = missionFeedbackKey !== "mission.good";
}

let missionRun = 0;

function resetMissionStage() {
  missionRun += 1;
  const actor = mission.querySelector(".mission-actor");
  actor.classList.remove("is-moved");
  actor.querySelector(".mission-say").hidden = true;
  actor.querySelector(".pybot-wrap").dataset.mood = "happy";
}

// Runs the blocks under the event one by one, like Scratch does.
function runMissionProgram() {
  const run = missionRun;
  const actor = mission.querySelector(".mission-actor");
  const bubble = actor.querySelector(".mission-say");
  const steps = missionProgram.slice(1);
  const next = (index) => {
    if (run !== missionRun) {
      return;
    }
    if (index >= steps.length) {
      actor.querySelector(".pybot-wrap").dataset.mood = "celebrating";
      return;
    }
    if (steps[index] === "move") {
      actor.classList.add("is-moved");
      window.setTimeout(() => next(index + 1), 600);
    } else {
      bubble.textContent = textFor("mission.hello");
      bubble.hidden = false;
      window.setTimeout(() => {
        bubble.hidden = true;
        next(index + 1);
      }, 2000);
    }
  };
  window.setTimeout(() => next(0), 300);
}

function tryMission() {
  resetMissionStage();
  if (missionProgram.length < 3) {
    missionFeedbackKey = "mission.needAll";
  } else if (missionProgram[0] !== "flag") {
    missionFeedbackKey = "mission.needEvent";
    buddyReact("wrong");
  } else {
    missionFeedbackKey = "mission.good";
    runMissionProgram();
    try {
      localStorage.setItem(activityStorageKey("first-mission"), "complete");
    } catch {
      // The mission still works without storage.
    }
    noteLearningDay();
    checkRewards();
    renderStreak();
    buddyReact("correct");
  }
  renderMission();
}

if (mission) {
  mission.querySelector(".mission-actor .pybot-wrap").innerHTML = PYBOT_MARKUP;
  mission.querySelector("[data-mission-try]").addEventListener("click", tryMission);
  mission.querySelector("[data-mission-clear]").addEventListener("click", () => {
    missionProgram = [];
    missionFeedbackKey = "";
    resetMissionStage();
    renderMission();
  });
  if (storedActivityState("first-mission") === "complete") {
    missionFeedbackKey = "mission.again";
  }
}

function setLanguage(language, persist = true) {
  if (!translations[language]) {
    language = "es";
  }
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = textFor(element.dataset.i18n);
    element.textContent = element.dataset.i18nCount ? text.replaceAll("{count}", element.dataset.i18nCount) : text;
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", textFor(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute("content", textFor(element.dataset.i18nContent));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", textFor(element.dataset.i18nPlaceholder));
  });

  const page = document.body.dataset.page || "home";
  document.title = textFor(`meta.${page}Title`);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateBuddyButton();
  setMood(pybotWrap?.dataset.mood ?? "happy");
  renderStreak();
  renderFamily();
  renderCourse();
  renderMission();
  document.dispatchEvent(new CustomEvent("pybot:language"));

  if (persist) {
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      // The language still changes when browser storage is unavailable.
    }
  }
}

// Spanish by default.
function storedLanguage() {
  try {
    const language = localStorage.getItem(LANGUAGE_KEY);
    return translations[language] ? language : "es";
  } catch {
    return "es";
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

learnerName = storedLearnerName();
updateLearnerNamePanel();
startBuddy();
arrangeHeader();
setLanguage(storedLanguage(), false);
syncHeaderTooltips();
