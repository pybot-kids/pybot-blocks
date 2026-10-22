// Album, zone diplomas, questions, and the "Start in Scratch" page with the block viewer.
// Loaded after script.js, so it can use its translations, storage and helpers.

Object.assign(translations.en, {
  "meta.albumTitle": "My album — PyBot Blocks",
  "meta.diplomaTitle": "Diploma — PyBot Blocks",
  "meta.faqTitle": "Questions — PyBot Blocks",
  "meta.startTitle": "Start in Scratch — PyBot Blocks",
  "album.eyebrow": "MY ALBUM",
  "album.title": "Stickers and diplomas",
  "album.intro": "Finish activities and zones to fill your album. Missing a day is fine: every day you learn counts.",
  "album.stickers": "Stickers",
  "album.count": "{count} of {total} stickers",
  "album.earnedOn": "Earned {date}",
  "album.diploma": "See diploma",
  "album.noDays": "Do your first mission to start counting your learning days.",
  "album.welcomeBack": "Welcome back! Every day you learn counts.",
  "album.today": "You learned today. Great!",
  "album.best": "Most days in a row: {count}",
  "album.sample": "See a sample diploma",
  "diploma.eyebrow": "YOUR DIPLOMA",
  "diploma.title": "You did it!",
  "diploma.intro": "Check your name, then print your diploma or save it as a PDF.",
  "diploma.nameLabel": "Name on the diploma",
  "diploma.namePlaceholder": "Your name",
  "diploma.sampleName": "Your name here",
  "diploma.sampleMark": "SAMPLE",
  "diploma.sampleIntro": "This is what a diploma looks like. Finish a zone to get your own.",
  "diploma.kicker": "DIPLOMA",
  "diploma.heading": "Great creator!",
  "diploma.line": "This diploma says that",
  "diploma.finished": "finished the PyBot Blocks zone",
  "diploma.date": "Date",
  "diploma.signed": "Signed",
  "diploma.print": "Print or save as PDF",
  "diploma.back": "Back to my album",
  "diploma.missingTitle": "This diploma is still waiting",
  "diploma.missingText": "Finish every page of the zone {name} and your diploma appears here.",
  "diploma.unknownText": "Open your album to see the diplomas you have earned.",
  "diploma.goMap": "Go to the path",
  "faq.eyebrow": "QUESTIONS AND ANSWERS",
  "faq.title": "Got a question?",
  "faq.intro": "Tap a question to see the answer.",
  "faq.jumpAria": "Jump to a group of questions",
  "faq.kidsTitle": "For learners",
  "faq.adultsTitle": "For grown-ups",
  "faq.whatQ": "What is PyBot Blocks?",
  "faq.whatA": "A free guide that shows you how to use Scratch, step by step and in order. It is made for kids from 8 to 10 years old, and it is fine up to about 12. You learn here, and you create in the real Scratch.",
  "faq.accountQ": "Do I need an account for PyBot Blocks?",
  "faq.accountA": "No. There is no sign-up, no email and no password here. Just open the page and start.",
  "faq.startQ": "Where do I start?",
  "faq.startA": "Do the first mission on the home page. Then open “Start in Scratch” to open the editor, and follow the path zone by zone.",
  "faq.errorQ": "My program does something strange. Did I break it?",
  "faq.errorA": "No! Mistakes are clues. Look at the order of your blocks, change one thing, and try again. Every programmer does this all the time.",
  "faq.languageQ": "Can I learn in Spanish or English?",
  "faq.languageA": "Yes. Press EN or ES at the top of any page. Your progress stays the same. Scratch can also be in Spanish: use the globe 🌐 menu in the editor.",
  "faq.albumQ": "What is the album?",
  "faq.albumA": "Your sticker collection. You earn stickers for your first activity, for learning on several days, and for each zone you finish. Each zone also gives you a diploma.",
  "faq.streakQ": "What if I miss a day?",
  "faq.streakA": "Nothing bad happens. The album counts every day you learn and celebrates days in a row, but it never takes anything away.",
  "faq.buddyQ": "How do I hide the little PyBot?",
  "faq.buddyA": "Press its × or the PyBot button at the top of the page. Press the button again to bring it back. It doesn't appear on phones.",
  "faq.replaceQ": "Does this replace Scratch?",
  "faq.replaceA": "No. PyBot Blocks is a guide for using Scratch. We explain, you practice a little here, and then you create in the real Scratch.",
  "faq.whyQ": "Why does PyBot Blocks exist?",
  "faq.whyA": "Scratch is a subject at school for many kids. There is a lot of material about Scratch, but it is hard for a child and their parents to know where to start and what comes next. PyBot Blocks gives that route, almost like a very simple manual, so friends can learn without spending money on a course.",
  "faq.familyQ": "What is the PyBot family?",
  "faq.familyA": "Free sites made with the same idea: small steps, no accounts, and progress that stays in your browser. PyBot teaches Python, PyBot English teaches English, and PyBot Blocks guides you through Scratch.",
  "faq.whereQ": "Where is the progress saved?",
  "faq.whereA": "Only in this browser, on this device. Nothing is sent to a server. What the child creates is saved in Scratch, not here.",
  "faq.loseQ": "Can the progress be lost?",
  "faq.loseA": "Yes, if the browser's data is cleared or you use private browsing. Save a backup file from the home page now and then to be safe.",
  "faq.browserQ": "How do I move to another browser or computer?",
  "faq.browserA": "On the home page, press “Save a backup file”. On the other browser, press “Load a backup file” and choose that file.",
  "faq.oldBackupQ": "Does an old backup still work?",
  "faq.oldBackupA": "Yes. Each backup remembers its progress version. When the path changes, PyBot Blocks updates old backups when you load them.",
  "faq.dataQ": "What data do you collect?",
  "faq.dataA": "None. There are no accounts, no analytics, no ads, and no camera or microphone. Nothing the child types is saved, except the name they choose, and only in this browser.",
  "faq.nameQ": "Why does PyBot ask for a name?",
  "faq.nameA": "So PyBot can greet the child and put the name on diplomas. A nickname works just as well. It stays in this browser and can be forgotten with one button.",
  "faq.resetQ": "How do we start from zero?",
  "faq.resetA": "On the home page, open “For adults: erase all progress”. It asks first if you want a backup, then asks again before erasing.",
  "faq.devicesQ": "Which devices work?",
  "faq.devicesA": "PyBot Blocks works on computers, tablets and phones. To create in Scratch, a computer or tablet is much better. The online editor and the offline app have their own requirements; check scratch.mit.edu/download.",
  "faq.freeQ": "Is it free?",
  "faq.freeA": "Yes, completely. Scratch is free too.",
  "faq.scratchAccountQ": "Do we need a Scratch account?",
  "faq.scratchAccountA": "It is optional. You can use the editor at scratch.mit.edu or the offline app without an account, and save projects to your computer. An account lets you save online and share. For children, Scratch asks for a parent's or guardian's email to confirm the account, so create it together. Check the current age rules and steps on the Scratch sign-up page, because they can change.",
  "faq.accompanyQ": "How can I help my child if I don't know how to program?",
  "faq.accompanyA": "You don't need to know. Sit next to them, ask “what do you think will happen?” before they click the green flag, and ask them to explain their program to you. Celebrate the attempts, not only the results. Short sessions of 15 to 20 minutes work best.",
  "faq.supportQ": "How can I support PyBot?",
  "faq.supportA": "Sharing PyBot Blocks with other families helps a lot. If you want to support the whole PyBot family, the ♥ button at the top opens our Patreon.",
  "faq.helpQ": "Where can I get help or report a problem?",
  "faq.helpA": "Open an issue in the project's GitHub repository. Please don't include personal data of children.",
  "faq.licenseQ": "Can I use this material in my class?",
  "faq.licenseA": "Yes. The code is under the MIT license and the content under CC BY 4.0: you can share and adapt it with credit. This does not include Scratch's name, logo or characters, which belong to their owners.",
  "faq.creditsQ": "Which tools from others does it use?",
  "faq.creditsA": "Scratch blocks in the viewer are drawn by scratchblocks by Tim Radvan and contributors (MIT license). Scratch is a project of the Scratch Foundation; we only link to it and never imitate its editor. We don't use Scratch's logo, cat or characters. Everything else, including PyBot and the blocks on the home page, is our own HTML and CSS. Full details are in THIRD_PARTY_NOTICES.md. Thank you! ♥",
  "faq.scratchLink": "Open scratch.mit.edu",
  "faq.startLink": "Open the path",
  "start.eyebrow": "START IN SCRATCH",
  "start.title": "Your first steps in Scratch",
  "start.intro": "Four steps to do with a grown-up. Check each one when you're done. Scratch opens in a new tab; come back here when you want.",
  "start.done": "I did it",
  "start.optional": "Optional",
  "start.openTitle": "Open Scratch",
  "start.openText": "There are two ways. Choose one:",
  "start.openOnline": "In the browser: go to scratch.mit.edu and press “Create”.",
  "start.openApp": "Without internet: a grown-up installs the Scratch app from scratch.mit.edu/download.",
  "start.openAdult": "For grown-ups: both are free. The browser version needs internet; the app works offline once installed.",
  "start.openLink": "Open Scratch",
  "start.downloadLink": "Get the app",
  "start.editorTitle": "Meet the editor",
  "start.editorText": "Find each part on your screen:",
  "start.editorCategories": "Block categories (left): colors that group the blocks.",
  "start.editorCode": "Code area (center): where you snap blocks together.",
  "start.editorStage": "Stage (top right): where your program happens.",
  "start.editorSprites": "Sprites (bottom right): the characters and objects.",
  "start.editorFlag": "Green flag and stop sign (above the stage): start and stop.",
  "start.editorTabs": "Tabs (top left): Code, Costumes and Sounds.",
  "start.editorTry": "Try it: drag a “move 10 steps” block to the code area and click it. Did the sprite move?",
  "start.accountTitle": "Create an account, with a grown-up",
  "start.accountText": "Only if you want to save online and share. Do it together:",
  "start.account1": "On scratch.mit.edu, press “Join Scratch”.",
  "start.account2": "Choose a username that is not your real name, and a password.",
  "start.account3": "Fill in birth month and year, and country.",
  "start.account4": "Children: write a grown-up's email. The grown-up confirms the account from that email.",
  "start.accountAdult": "For grown-ups: Scratch asks for your email for children's accounts. Check the current rules on the sign-up page. Without an account, everything still works by saving to the computer.",
  "start.joinLink": "Join Scratch",
  "start.saveTitle": "Save and share",
  "start.saveText": "Save often so you don't lose your work:",
  "start.saveAccount": "With an account: File → Save now.",
  "start.saveComputer": "Without an account: File → Save to your computer. Next time: File → Load from your computer.",
  "start.saveShare": "Share only if a grown-up agrees: shared projects are public, and anyone can see and remix them.",
  "viewer.eyebrow": "BLOCK VIEWER",
  "viewer.title": "See example programs",
  "viewer.intro": "Choose an example or write a program as text. The viewer draws the blocks so you can build them in Scratch.",
  "viewer.label": "Program as text",
  "viewer.walk": "Walk",
  "viewer.jump": "Jump",
  "viewer.hello": "Say hello",
  "viewer.loading": "Drawing the blocks…",
  "viewer.ready": "Ready. Change the text and the blocks change too.",
  "viewer.failed": "The blocks could not be drawn right now. You can still read the program as text.",
  "viewer.englishNote": "For now the viewer writes block text in English. In Scratch you can switch the editor to Spanish with the 🌐 menu.",
  "viewer.creditSummary": "The blocks here are drawn thanks to scratchblocks ♥",
  "viewer.creditText": "scratchblocks by Tim Radvan and contributors turns text into pictures of Scratch blocks. Open source under the MIT license. Version 3.7.1, included with this site.",
  "viewer.source": "Source code",
  "viewer.license": "License",
  "viewer.moreCredits": "All credits",
});

Object.assign(translations.es, {
  "meta.albumTitle": "Mi álbum — PyBot Blocks",
  "meta.diplomaTitle": "Diploma — PyBot Blocks",
  "meta.faqTitle": "Preguntas — PyBot Blocks",
  "meta.startTitle": "Empieza en Scratch — PyBot Blocks",
  "album.eyebrow": "MI ÁLBUM",
  "album.title": "Stickers y diplomas",
  "album.intro": "Termina actividades y zonas para llenar tu álbum. Faltar un día está bien: cada día que aprendes cuenta.",
  "album.stickers": "Stickers",
  "album.count": "{count} de {total} stickers",
  "album.earnedOn": "Ganado el {date}",
  "album.diploma": "Ver diploma",
  "album.noDays": "Haz tu primera misión para empezar a contar tus días de aprendizaje.",
  "album.welcomeBack": "¡Qué bueno verte! Cada día que aprendes cuenta.",
  "album.today": "Hoy aprendiste. ¡Muy bien!",
  "album.best": "Más días seguidos: {count}",
  "album.sample": "Ver un diploma de ejemplo",
  "diploma.eyebrow": "TU DIPLOMA",
  "diploma.title": "¡Lo lograste!",
  "diploma.intro": "Revisa tu nombre y luego imprime tu diploma o guárdalo como PDF.",
  "diploma.nameLabel": "Nombre en el diploma",
  "diploma.namePlaceholder": "Tu nombre",
  "diploma.sampleName": "Aquí va tu nombre",
  "diploma.sampleMark": "EJEMPLO",
  "diploma.sampleIntro": "Así se ve un diploma. Termina una zona para recibir el tuyo.",
  "diploma.kicker": "DIPLOMA",
  "diploma.heading": "¡Gran creador!",
  "diploma.line": "Este diploma dice que",
  "diploma.finished": "terminó la zona de PyBot Blocks",
  "diploma.date": "Fecha",
  "diploma.signed": "Firma",
  "diploma.print": "Imprimir o guardar como PDF",
  "diploma.back": "Volver a mi álbum",
  "diploma.missingTitle": "Este diploma todavía te espera",
  "diploma.missingText": "Termina todas las páginas de la zona {name} y tu diploma aparecerá aquí.",
  "diploma.unknownText": "Abre tu álbum para ver los diplomas que has ganado.",
  "diploma.goMap": "Ir al camino",
  "faq.eyebrow": "PREGUNTAS Y RESPUESTAS",
  "faq.title": "¿Tienes una pregunta?",
  "faq.intro": "Toca una pregunta para ver la respuesta.",
  "faq.jumpAria": "Ir a un grupo de preguntas",
  "faq.kidsTitle": "Para aprendices",
  "faq.adultsTitle": "Para adultos",
  "faq.whatQ": "¿Qué es PyBot Blocks?",
  "faq.whatA": "Una guía gratuita que te enseña a usar Scratch paso a paso y en orden. Está hecha para niñas y niños de 8 a 10 años, y sirve hasta los 12 más o menos. Aquí aprendes, y creas en el Scratch de verdad.",
  "faq.accountQ": "¿Necesito una cuenta para PyBot Blocks?",
  "faq.accountA": "No. Aquí no hay registro, ni correo, ni contraseña. Abre la página y empieza.",
  "faq.startQ": "¿Por dónde empiezo?",
  "faq.startA": "Haz la primera misión de la página de inicio. Luego abre “Empieza en Scratch” para abrir el editor y sigue el camino zona por zona.",
  "faq.errorQ": "Mi programa hace algo raro. ¿Lo dañé?",
  "faq.errorA": "¡No! Los errores son pistas. Mira el orden de tus bloques, cambia una cosa y vuelve a probar. Todos los programadores lo hacen todo el tiempo.",
  "faq.languageQ": "¿Puedo aprender en español o en inglés?",
  "faq.languageA": "Sí. Presiona EN o ES arriba en cualquier página. Tu progreso se queda igual. Scratch también puede estar en español: usa el menú del globo 🌐 en el editor.",
  "faq.albumQ": "¿Qué es el álbum?",
  "faq.albumA": "Tu colección de stickers. Ganas stickers por tu primera actividad, por aprender varios días y por cada zona que terminas. Cada zona también te da un diploma.",
  "faq.streakQ": "¿Qué pasa si un día no aprendo?",
  "faq.streakA": "No pasa nada malo. El álbum cuenta cada día que aprendes y celebra los días seguidos, pero nunca te quita nada.",
  "faq.buddyQ": "¿Cómo escondo al PyBot pequeño?",
  "faq.buddyA": "Presiona su × o el botón de PyBot arriba en la página. Presiona el botón otra vez para que vuelva. En los celulares no aparece.",
  "faq.replaceQ": "¿Esto reemplaza a Scratch?",
  "faq.replaceA": "No. PyBot Blocks es una guía para usar Scratch. Aquí te explicamos y practicas un poquito; después creas en el Scratch de verdad.",
  "faq.whyQ": "¿Por qué existe PyBot Blocks?",
  "faq.whyA": "Para muchos niños, Scratch es una materia en el colegio. Hay mucho material sobre Scratch, pero a un niño y a sus papás les cuesta saber por dónde empezar y qué sigue. PyBot Blocks les da esa ruta, casi como un manual muy sencillo, para que los amigos puedan aprender sin gastar en un curso.",
  "faq.familyQ": "¿Qué es la familia PyBot?",
  "faq.familyA": "Sitios gratuitos hechos con la misma idea: pasos pequeños, sin cuentas y con el progreso guardado en tu navegador. PyBot enseña Python, PyBot English enseña inglés y PyBot Blocks te guía por Scratch.",
  "faq.whereQ": "¿Dónde se guarda el progreso?",
  "faq.whereA": "Solo en este navegador, en este dispositivo. No se envía nada a ningún servidor. Lo que el niño crea se guarda en Scratch, no aquí.",
  "faq.loseQ": "¿Se puede perder el progreso?",
  "faq.loseA": "Sí, si se borran los datos del navegador o se usa la navegación privada. Para estar tranquilos, guarden de vez en cuando una copia desde la página de inicio.",
  "faq.browserQ": "¿Cómo paso a otro navegador o computadora?",
  "faq.browserA": "En la página de inicio, presiona “Guardar una copia”. En el otro navegador, presiona “Cargar una copia” y elige ese archivo.",
  "faq.oldBackupQ": "¿Sirve una copia vieja?",
  "faq.oldBackupA": "Sí. Cada copia recuerda su versión del progreso. Cuando el camino cambia, PyBot Blocks actualiza las copias viejas al cargarlas.",
  "faq.dataQ": "¿Qué datos recogen?",
  "faq.dataA": "Ninguno. No hay cuentas, ni analítica, ni anuncios, ni cámara, ni micrófono. No se guarda nada de lo que el niño escribe, salvo el nombre que elige, y solo en este navegador.",
  "faq.nameQ": "¿Por qué PyBot pide un nombre?",
  "faq.nameA": "Para saludar al niño y poner el nombre en los diplomas. Un apodo sirve igual. Se queda en este navegador y se puede olvidar con un botón.",
  "faq.resetQ": "¿Cómo empezamos de cero?",
  "faq.resetA": "En la página de inicio, abre “Para adultos: borrar todo el progreso”. Primero pregunta si quieren guardar una copia y luego vuelve a preguntar antes de borrar.",
  "faq.devicesQ": "¿En qué dispositivos funciona?",
  "faq.devicesA": "PyBot Blocks funciona en computadoras, tabletas y celulares. Para crear en Scratch es mucho mejor una computadora o una tableta. El editor en línea y la app sin conexión tienen sus propios requisitos; revisen scratch.mit.edu/download.",
  "faq.freeQ": "¿Es gratis?",
  "faq.freeA": "Sí, totalmente. Scratch también es gratis.",
  "faq.scratchAccountQ": "¿Necesitamos una cuenta de Scratch?",
  "faq.scratchAccountA": "Es opcional. Se puede usar el editor en scratch.mit.edu o la app sin conexión sin cuenta, y guardar los proyectos en la computadora. La cuenta sirve para guardar en línea y compartir. Para niños, Scratch pide el correo de un papá, mamá o tutor para confirmar la cuenta, así que créenla juntos. Revisen las reglas de edad y los pasos actuales en la página de registro de Scratch, porque pueden cambiar.",
  "faq.accompanyQ": "¿Cómo acompaño a mi hijo si no sé programar?",
  "faq.accompanyA": "No hace falta saber. Siéntese a su lado, pregúntele “¿qué crees que va a pasar?” antes de que haga clic en la bandera verde y pídale que le explique su programa. Celebre los intentos, no solo los resultados. Las sesiones cortas de 15 a 20 minutos funcionan mejor.",
  "faq.supportQ": "¿Cómo puedo apoyar a PyBot?",
  "faq.supportA": "Compartir PyBot Blocks con otras familias ayuda mucho. Si quieren apoyar a toda la familia PyBot, el botón ♥ de arriba abre nuestro Patreon.",
  "faq.helpQ": "¿Dónde pido ayuda o aviso de un problema?",
  "faq.helpA": "Abran un issue en el repositorio del proyecto en GitHub. Por favor, no incluyan datos personales de niños.",
  "faq.licenseQ": "¿Puedo usar este material en mi clase?",
  "faq.licenseA": "Sí. El código está bajo la licencia MIT y el contenido bajo CC BY 4.0: puedes compartirlo y adaptarlo dando crédito. Esto no incluye el nombre, el logo ni los personajes de Scratch, que son de sus dueños.",
  "faq.creditsQ": "¿Qué herramientas de otros usa?",
  "faq.creditsA": "Los bloques del visor los dibuja scratchblocks, de Tim Radvan y colaboradores (licencia MIT). Scratch es un proyecto de la Scratch Foundation; solo enlazamos a él y nunca imitamos su editor. No usamos el logo, el gato ni los personajes de Scratch. Todo lo demás, incluidos PyBot y los bloques de la página de inicio, es HTML y CSS propio. Los detalles están en THIRD_PARTY_NOTICES.md. ¡Gracias! ♥",
  "faq.scratchLink": "Abrir scratch.mit.edu",
  "faq.startLink": "Abrir el camino",
  "start.eyebrow": "EMPIEZA EN SCRATCH",
  "start.title": "Tus primeros pasos en Scratch",
  "start.intro": "Cuatro pasos para hacer con un adulto. Marca cada uno cuando termines. Scratch se abre en otra pestaña; vuelve aquí cuando quieras.",
  "start.done": "Ya lo hice",
  "start.optional": "Opcional",
  "start.openTitle": "Abre Scratch",
  "start.openText": "Hay dos formas. Elige una:",
  "start.openOnline": "En el navegador: entra a scratch.mit.edu y presiona “Crear”.",
  "start.openApp": "Sin internet: un adulto instala la app de Scratch desde scratch.mit.edu/download.",
  "start.openAdult": "Para adultos: las dos son gratis. La versión del navegador necesita internet; la app funciona sin conexión una vez instalada.",
  "start.openLink": "Abrir Scratch",
  "start.downloadLink": "Descargar la app",
  "start.editorTitle": "Conoce el editor",
  "start.editorText": "Encuentra cada parte en tu pantalla:",
  "start.editorCategories": "Categorías de bloques (izquierda): colores que agrupan los bloques.",
  "start.editorCode": "Área de programación (centro): donde encajas los bloques.",
  "start.editorStage": "Escenario (arriba a la derecha): donde pasa tu programa.",
  "start.editorSprites": "Objetos (abajo a la derecha): los personajes y las cosas.",
  "start.editorFlag": "Bandera verde y señal de alto (encima del escenario): empezar y detener.",
  "start.editorTabs": "Pestañas (arriba a la izquierda): Código, Disfraces y Sonidos.",
  "start.editorTry": "Pruébalo: arrastra un bloque “mover 10 pasos” al área de programación y haz clic en él. ¿Se movió el objeto?",
  "start.accountTitle": "Crea una cuenta, con un adulto",
  "start.accountText": "Solo si quieres guardar en línea y compartir. Háganlo juntos:",
  "start.account1": "En scratch.mit.edu, presiona “Únete a Scratch”.",
  "start.account2": "Elige un nombre de usuario que no sea tu nombre real, y una contraseña.",
  "start.account3": "Escribe el mes y el año de nacimiento, y el país.",
  "start.account4": "Niños: escriban el correo de un adulto. El adulto confirma la cuenta desde ese correo.",
  "start.accountAdult": "Para adultos: Scratch pide su correo para las cuentas de niños. Revisen las reglas actuales en la página de registro. Sin cuenta, todo funciona guardando en la computadora.",
  "start.joinLink": "Unirse a Scratch",
  "start.saveTitle": "Guarda y comparte",
  "start.saveText": "Guarda seguido para no perder tu trabajo:",
  "start.saveAccount": "Con cuenta: Archivo → Guardar ahora.",
  "start.saveComputer": "Sin cuenta: Archivo → Guardar en tu computadora. La próxima vez: Archivo → Cargar desde tu computadora.",
  "start.saveShare": "Comparte solo si un adulto está de acuerdo: los proyectos compartidos son públicos y cualquiera puede verlos y remezclarlos.",
  "viewer.eyebrow": "VISOR DE BLOQUES",
  "viewer.title": "Mira programas de ejemplo",
  "viewer.intro": "Elige un ejemplo o escribe un programa como texto. El visor dibuja los bloques para que los armes en Scratch.",
  "viewer.label": "Programa como texto",
  "viewer.walk": "Caminar",
  "viewer.jump": "Saltar",
  "viewer.hello": "Saludar",
  "viewer.loading": "Dibujando los bloques…",
  "viewer.ready": "Listo. Cambia el texto y los bloques cambian también.",
  "viewer.failed": "Ahora no se pudieron dibujar los bloques. Igual puedes leer el programa como texto.",
  "viewer.englishNote": "Por ahora el visor escribe los bloques en inglés. En Scratch puedes poner el editor en español con el menú 🌐.",
  "viewer.creditSummary": "Los bloques se dibujan aquí gracias a scratchblocks ♥",
  "viewer.creditText": "scratchblocks, de Tim Radvan y colaboradores, convierte texto en dibujos de bloques de Scratch. Es código abierto bajo la licencia MIT. Versión 3.7.1, incluida con este sitio.",
  "viewer.source": "Código fuente",
  "viewer.license": "Licencia",
  "viewer.moreCredits": "Todos los créditos",
});

const extrasPage = document.body.dataset.page;

function formatDay(day) {
  const date = new Date(`${day}T12:00:00`);
  return Number.isNaN(date.getTime()) ? day : date.toLocaleDateString(currentLanguage, { dateStyle: "long" });
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function renderAlbum() {
  const { days, bestRun, currentRun } = learningStreak();
  const today = todayString();
  const streakMain = document.querySelector("[data-album-streak]");
  const streakNote = document.querySelector("[data-album-streak-note]");
  if (days.length === 0) {
    streakMain.textContent = textFor("album.noDays");
    streakNote.textContent = "";
  } else {
    const total = days.length === 1 ? textFor("streak.oneDay") : textFor("streak.days").replace("{count}", String(days.length));
    streakMain.textContent = currentRun >= 2 ? `${textFor("streak.run").replace("{count}", String(currentRun))} ${total}` : total;
    const mood = days.includes(today) ? textFor("album.today") : textFor("album.welcomeBack");
    streakNote.textContent = bestRun >= 2 ? `${mood} ${textFor("album.best").replace("{count}", String(bestRun))}` : mood;
  }

  const badges = storedBadges();
  const list = badgeList();
  document.querySelector("[data-sticker-grid]").replaceChildren(...list.map((badge) => {
    const date = badges.get(badge.id);
    const item = makeElement("li", `sticker${date ? " is-earned" : ""}`);
    item.append(makeElement("span", "sticker-icon", badge.icon), makeElement("b", "", textFor(badge.title)));
    item.querySelector(".sticker-icon").setAttribute("aria-hidden", "true");
    item.append(makeElement("small", "", date ? textFor("album.earnedOn").replace("{date}", formatDay(date)) : badgeHint(badge)));
    if (date && badge.zone) {
      const link = makeElement("a", "", textFor("album.diploma"));
      link.href = `diploma.html?zone=${encodeURIComponent(badge.zone.steps[0])}`;
      item.append(link);
    }
    return item;
  }));
  const earnedCount = list.filter((badge) => badges.has(badge.id)).length;
  document.querySelector("[data-sticker-count]").textContent = textFor("album.count")
    .replace("{count}", String(earnedCount))
    .replace("{total}", String(list.length));
}

// ?zone=<first step id> shows a finished zone's diploma; ?sample=1 a marked example.
function renderDiploma() {
  const params = new URLSearchParams(window.location.search);
  const isSample = params.get("sample") === "1";
  const zone = isSample ? pathZones[0] : pathZones.find((candidate) => candidate.steps[0] === params.get("zone")) ?? null;
  const show = isSample || (zone ? zoneProgress().done.has(zone) : false);
  ["[data-diploma]", "[data-diploma-tools]", "[data-diploma-actions]"].forEach((selector) => {
    document.querySelector(selector).hidden = !show;
  });
  document.querySelector("[data-diploma-sample]").hidden = !isSample;
  document.querySelector(".page-intro").hidden = !show;
  document.querySelector(".page-intro p:last-child").textContent = textFor(isSample ? "diploma.sampleIntro" : "diploma.intro");
  const missing = document.querySelector("[data-diploma-missing]");
  missing.hidden = show;
  if (!show) {
    missing.querySelector("p").textContent = zone
      ? textFor("diploma.missingText").replace("{name}", textFor(zone.title))
      : textFor("diploma.unknownText");
    return;
  }

  const nameInput = document.querySelector("[data-diploma-input]");
  if (!nameInput.dataset.ready) {
    nameInput.value = isSample ? "" : learnerName;
    nameInput.dataset.ready = "true";
    nameInput.addEventListener("input", renderDiplomaName);
  }
  renderDiplomaName();
  document.querySelector("[data-diploma-zone]").textContent = textFor(zone.title);
  document.querySelector("[data-diploma-sticker]").textContent = zone.icon;
  document.querySelector("[data-diploma-date]").textContent = formatDay(storedBadges().get(zoneBadgeId(zone)) ?? todayString());
}

function renderDiplomaName() {
  const value = normalizeLearnerName(document.querySelector("[data-diploma-input]").value);
  document.querySelector("[data-diploma-name]").textContent = value || textFor("diploma.sampleName");
}

// Questions: [id, group, optional link]. The credits answer has id="credits".
const faqItems = [
  ["what", "kids"], ["account", "kids"], ["start", "kids", "course.html", "faq.startLink"], ["error", "kids"],
  ["language", "kids"], ["album", "kids"], ["streak", "kids"], ["buddy", "kids"], ["replace", "kids"],
  ["why", "adults"], ["family", "adults"], ["where", "adults"], ["lose", "adults"], ["browser", "adults"],
  ["oldBackup", "adults"], ["data", "adults"], ["name", "adults"], ["reset", "adults"], ["devices", "adults"],
  ["free", "adults"], ["scratchAccount", "adults", "https://scratch.mit.edu", "faq.scratchLink"], ["accompany", "adults"],
  ["support", "adults"], ["help", "adults"], ["license", "adults"], ["credits", "adults"],
];

function renderFaq() {
  const open = new Set([...document.querySelectorAll(".faq-item[open]")].map((item) => item.id));
  document.querySelectorAll("[data-faq-list]").forEach((list) => {
    list.replaceChildren(...faqItems.filter(([, group]) => group === list.dataset.faqList).map(([id, , href, linkKey]) => {
      const item = makeElement("details", "faq-item");
      item.id = id === "credits" ? "credits" : `faq-${id}`;
      item.open = open.has(item.id) || window.location.hash === `#${item.id}`;
      item.append(makeElement("summary", "", textFor(`faq.${id}Q`)), makeElement("p", "", textFor(`faq.${id}A`)));
      if (href) {
        const link = makeElement("a", "faq-link", textFor(linkKey));
        link.href = href;
        if (href.startsWith("http")) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
        item.append(link);
      }
      return item;
    }));
  });
}

// "Start in Scratch": four steps with an "I did it" box each, saved as activities.
const startSteps = [
  { id: "start-open", key: "open", icon: "🌐", items: ["openOnline", "openApp"], adult: "openAdult",
    links: [["https://scratch.mit.edu/projects/editor/", "start.openLink"], ["https://scratch.mit.edu/download", "start.downloadLink"]] },
  { id: "start-editor", key: "editor", icon: "🧭", items: ["editorCategories", "editorCode", "editorStage", "editorSprites", "editorFlag", "editorTabs"], map: true, after: "editorTry" },
  { id: "start-account", key: "account", icon: "👨‍👧", items: ["account1", "account2", "account3", "account4"], adult: "accountAdult", optional: true,
    links: [["https://scratch.mit.edu/join", "start.joinLink"]] },
  { id: "start-save", key: "save", icon: "💾", items: ["saveAccount", "saveComputer", "saveShare"] },
];

function renderStart() {
  document.querySelector("[data-start-steps]").replaceChildren(...startSteps.map((step) => {
    const done = storedActivityState(step.id) === "complete";
    const card = makeElement("li", `start-step${done ? " is-done" : ""}`);
    const icon = makeElement("span", "start-step-icon", step.icon);
    icon.setAttribute("aria-hidden", "true");
    const title = makeElement("h2", "", textFor(`start.${step.key}Title`));
    if (step.optional) {
      title.append(" ", makeElement("span", "chip", textFor("start.optional")));
    }
    const body = makeElement("div");
    body.append(makeElement("p", "", textFor(`start.${step.key}Text`)));
    const list = makeElement(step.map ? "ul" : "ol", step.map ? "editor-map" : "");
    step.items.forEach((key) => list.append(makeElement("li", "", textFor(`start.${key}`))));
    body.append(list);
    if (step.after) {
      body.append(makeElement("p", "", textFor(`start.${step.after}`)));
    }
    if (step.adult) {
      body.append(makeElement("p", "start-adult", textFor(`start.${step.adult}`)));
    }
    const footer = makeElement("div", "start-step-footer");
    (step.links ?? []).forEach(([href, key]) => {
      const link = makeElement("a", "", `${textFor(key)} ↗`);
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      footer.append(link);
    });
    const label = makeElement("label");
    const box = makeElement("input");
    box.type = "checkbox";
    box.checked = done;
    box.addEventListener("change", () => {
      try {
        if (box.checked) {
          localStorage.setItem(activityStorageKey(step.id), "complete");
        } else {
          localStorage.removeItem(activityStorageKey(step.id));
        }
      } catch {
        // The box still works on this page.
      }
      card.classList.toggle("is-done", box.checked);
      if (box.checked) {
        noteLearningDay();
        checkRewards();
        buddyReact("correct");
      }
    });
    label.append(box, textFor("start.done"));
    footer.append(label);
    card.append(icon, title, body, footer);
    return card;
  }));
  renderViewerExamples();
}

// Block viewer. scratchblocks (MIT) is loaded only on this page, with a time
// limit and a plain-text fallback: the drawing must never hang the page.
const VIEWER_TIMEOUT_MS = 8000;
const viewerExamples = {
  walk: "when green flag clicked\nrepeat (10)\n  move (10) steps\n  next costume\n  wait (0.2) seconds\nend",
  jump: "when [space v] key pressed\nchange y by (60)\nwait (0.3) seconds\nchange y by (-60)",
  hello: "when this sprite clicked\nsay [Hello!] for (2) seconds\nthink [What now?] for (2) seconds",
};
const viewerInput = document.querySelector("[data-viewer-input]");
const viewerOutput = document.querySelector("[data-viewer-output]");
const viewerStatus = document.querySelector("[data-viewer-status]");
let viewerLibrary = null;
let viewerTimer = 0;

function loadScratchblocks() {
  viewerLibrary ??= new Promise((resolve, reject) => {
    if (window.scratchblocks?.renderMatching) {
      resolve(window.scratchblocks);
      return;
    }
    const script = document.createElement("script");
    const timer = window.setTimeout(() => reject(new Error("timeout")), VIEWER_TIMEOUT_MS);
    script.src = new URL("vendor/scratchblocks.min.js", scriptBaseUrl).href;
    script.onload = () => {
      window.clearTimeout(timer);
      if (window.scratchblocks?.renderMatching) {
        resolve(window.scratchblocks);
      } else {
        reject(new Error("missing"));
      }
    };
    script.onerror = () => {
      window.clearTimeout(timer);
      reject(new Error("failed"));
    };
    document.head.append(script);
  });
  return viewerLibrary;
}

function setViewerStatus(key) {
  viewerStatus.textContent = textFor(key);
}

async function drawViewer() {
  const pre = makeElement("pre", "viewer-blocks", viewerInput.value);
  viewerOutput.replaceChildren(pre);
  setViewerStatus("viewer.loading");
  try {
    const library = await loadScratchblocks();
    library.renderMatching("[data-viewer-output] pre.viewer-blocks", { style: "scratch3", languages: ["en"], scale: 0.85 });
    setViewerStatus("viewer.ready");
  } catch {
    setViewerStatus("viewer.failed");
  }
}

function renderViewerExamples() {
  const examples = document.querySelector("[data-viewer-examples]");
  examples.replaceChildren(...Object.keys(viewerExamples).map((id) => {
    const button = makeElement("button", "tool-button", textFor(`viewer.${id}`));
    button.type = "button";
    button.addEventListener("click", () => {
      viewerInput.value = viewerExamples[id];
      drawViewer();
    });
    return button;
  }));
}

if (viewerInput) {
  viewerInput.value = viewerExamples.walk;
  viewerInput.addEventListener("input", () => {
    window.clearTimeout(viewerTimer);
    viewerTimer = window.setTimeout(drawViewer, 400);
  });
  drawViewer();
}

const extrasRenderers = { album: renderAlbum, diploma: renderDiploma, faq: renderFaq, start: renderStart };
document.addEventListener("pybot:language", () => extrasRenderers[extrasPage]?.());
document.querySelector("[data-print]")?.addEventListener("click", () => window.print());
setLanguage(currentLanguage, false);
