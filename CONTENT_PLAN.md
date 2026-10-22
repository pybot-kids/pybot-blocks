# Plan de contenido de PyBot Blocks

Este documento es **solo el plan**: qué se va a enseñar, en qué orden, con qué actividades y cómo sabremos que una página está lista. No contiene lecciones escritas. Cada página del camino está marcada hoy como `soon: true` ("Muy pronto") en `script.js`.

> Scratch es un proyecto de la Scratch Foundation. PyBot Blocks es una guía independiente: no está afiliada ni respaldada por ella.

---

## 1. Propósito y alcance

### Para qué existe

En el colegio nuevo de María Ángel, Scratch es una materia. Ella ya lo aprendió en un curso, y queremos que sus amigos también lo aprendan sin gastar mucho dinero. Scratch publica mucho material, pero en la práctica a un niño y a sus papás les cuesta saber **por dónde empezar y en qué orden seguir**. PyBot Blocks les da esa ruta: casi un manual, pero muy simple, con pasos cortos, pruebas pequeñas y "cositas" para practicar.

En el sitio no se nombra el curso ni la empresa; si hace falta, se dice "en un curso".

### Qué es y qué no es

- **Es** una guía ordenada para aprender a **usar Scratch**: explica una idea, la revisa con un juego corto y manda a crear en el Scratch real.
- **No es** un editor de bloques. Nunca imitamos ni reconstruimos el editor de Scratch. La creación siempre ocurre en `https://scratch.mit.edu` o en la app sin conexión.
- **No califica** creaciones. Revisa la comprensión de conceptos y celebra lo que el niño crea en Scratch.

### Para quién

- Niñas y niños de **8 a 10 años** (útil hasta ~12), hispanohablantes.
- Sus **papás, mamás o tutores**, aunque no sepan programar.
- Maestras y maestros que quieran una ruta lista para usar en clase (licencia CC BY 4.0).

### Alcance de la primera versión del contenido

- 9 zonas y una parada final, con 42 páginas en total (ver sección 5).
- Español por defecto, inglés completo.
- Cada página termina con **"Hazlo en Scratch"**.
- Sin cuentas, sin analítica, sin micrófono ni cámara en PyBot Blocks.

### Fuera de alcance (por ahora)

- Incrustar proyectos de Scratch con iframe (ver sección 8 antes de hacerlo).
- Capturas de pantalla del editor (los términos actuales no lo dejan claro; usamos bloques dibujados).
- Extensiones de hardware (micro:bit, LEGO), video y traducción de Scratch.
- Bloques personalizados ("Mis bloques" de Scratch) y listas: van en crecimiento futuro (sección 6).

---

## 2. Principios pedagógicos

1. **Mira → Prueba aquí → Hazlo en Scratch.** Una idea por página. Primero se ve, luego se prueba con un juego corto aquí y al final se construye en Scratch.
2. **Pasos cortos y concretos.** Frases breves. Una instrucción por línea. Nombres de bloques exactos como aparecen en el editor en español.
3. **Predecir antes de ejecutar.** Antes de hacer clic en la bandera verde, el niño dice qué cree que va a pasar.
4. **Los errores son pistas.** Las pistas son cortas, amables y de una en una. Nunca "incorrecto" a secas.
5. **Del cuerpo a la pantalla.** Cada concepto tiene una actividad sin pantalla (robot humano, bailes en bucle, Simón dice, frijoles como puntaje).
6. **Celebrar, no calificar.** Las actividades de comprensión pueden decir "¡sí!" o "casi"; las creaciones en Scratch solo se celebran.
7. **Ir en orden, construir sobre lo anterior.** Cada zona usa lo que enseñó la anterior. Los proyectos de "Mis juegos" juntan todo.
8. **El adulto acompaña, no enseña.** Cada zona tiene una nota para adultos: qué se aprende, cómo acompañar sin saber programar y qué preguntar.
9. **Sesiones cortas.** Una página debe poder hacerse en 15 a 20 minutos, contando el reto en Scratch.
10. **Remezclar está bien.** Copiar una idea para aprender es válido; después se cambia y se hace propia, dando crédito.
11. **Ejemplos con lógica.** Cada bloque de un ejemplo produce un efecto que se ve y que tiene sentido para lo que se pide. Si un bloque no cambia nada en el escenario (por ejemplo, "siguiente disfraz" en un objeto sin disfraces que se distingan), no va en el ejemplo. Lo que se muestra aquí debe pasar igual en Scratch: "mover" es un salto, no una caminata suave; un programa sin evento arriba no arranca con la bandera.
12. **Ningún concepto antes de tiempo.** Palabras propias de Scratch (disfraz, objeto, escenario, clon, mensaje) solo aparecen después de la página que las explica, o con una explicación de una frase en el mismo lugar.
13. **Seguridad y privacidad.** Nada de lo que el niño escribe se guarda, salvo el nombre que elige. Compartir en Scratch solo con permiso de un adulto.

---

## 3. Anatomía de una página de lección

Cada lección vive en `lessons/<id>.html`, usa la cabecera compartida (`arrangeHeader()`) y sigue siempre este orden:

| Parte | Qué tiene | Notas |
| --- | --- | --- |
| 1. Encabezado | Zona, número de página, título y una frase de objetivo ("Hoy vas a…") | El título coincide con `step.<id>` del mapa. |
| 2. Mira | Explicación de 3 a 5 frases y el bloque o programa dibujado (HTML/CSS o scratchblocks) | Un solo concepto. Vocabulario nuevo en **negrita**. |
| 3. Prueba aquí | 1 a 3 actividades del catálogo (abajo) | Cada actividad tiene un id estable y guarda `complete`. |
| 4. Hazlo en Scratch | Pasos exactos en el editor real, un reto corto, qué debería pasar y qué revisar si no funciona | Siempre al final. Enlace a Scratch en pestaña nueva. |
| 5. Sin pantalla | Una actividad para hacer en familia | Opcional, pero siempre presente. |
| 6. Para adultos | 2 o 3 frases: qué se aprendió, qué preguntar, cómo celebrar | Dentro de `<details>`. |
| 7. Cierre | "¿Cómo te fue?" (bien / más o menos / repasar), enlace a la siguiente página | La autoevaluación no bloquea avanzar. |

### "Hazlo en Scratch": plantilla obligatoria

1. **Abre**: "Abre Scratch (scratch.mit.edu → Crear) o la app."
2. **Pasos exactos**, numerados: categoría → bloque → dónde soltarlo → qué valor cambiar. Ejemplo: "En **Movimiento**, arrastra `mover (10) pasos` debajo de `al hacer clic en ⚑`."
3. **Reto corto**: una variación pequeña ("ahora haz que dé 3 pasos más largos").
4. **Qué debería pasar**: una frase observable ("el objeto avanza hacia la derecha y se detiene").
5. **Si no funciona, revisa**: 2 o 3 causas frecuentes (bloque suelto, bloque debajo del evento equivocado, número negativo, objeto equivocado seleccionado).
6. **Guarda**: recordar Archivo → Guardar ahora (con cuenta) o Guardar en tu computadora (sin cuenta).
7. **Celebra**: "¡Muéstraselo a alguien de tu casa!"

### Catálogo de tipos de actividad

Todas las actividades revisan comprensión; ninguna evalúa una creación.

| Tipo | Qué hace el niño | Revisa | Implementación |
| --- | --- | --- | --- |
| **Ordenar bloques** | Toca bloques en el orden correcto para armar un programa | Secuencia, evento arriba | Botones HTML/CSS (como la primera misión). |
| **¿Qué hace este programa?** | Lee un programa y elige qué pasa (3 opciones) | Lectura de código | Programa dibujado + opciones. |
| **Encuentra el bloque que falta** | Elige el bloque que completa un programa | Propósito de cada bloque | Hueco marcado + opciones. |
| **Arregla el programa de PyBot** | Detecta y cambia el bloque o valor equivocado | Depuración | Un bloque tocable; pista en 2 niveles. |
| **Predice antes de ejecutar** | Elige qué pasará y luego ve una animación simple | Modelo mental | Animación CSS del PyBot pequeño, no del editor. |
| **Empareja bloque ↔ resultado** | Une cada bloque con lo que produce | Vocabulario | Pares tocables, accesibles con teclado. |
| **¿Dónde está este bloque en Scratch?** | Elige la categoría (color y nombre) de un bloque | Ubicarse en el editor | Lista de categorías en texto, sin capturas. |
| **Verdadero o falso** | Responde afirmaciones cortas | Conceptos | Para la parada final y repasos. |
| **Cuenta los pasos** | Calcula dónde queda un objeto (x, y, pasos, giros) | Coordenadas y números | Cuadrícula HTML/CSS. |

Reglas comunes:

- Ids en minúsculas con guiones, únicos en todo el sitio: `<zona>-<tema>-<tipo>` (por ejemplo `move-steps-order`).
- Cada actividad guarda `pybotblocks.activity.<id>` = `complete` (o `review` si el niño pide repasar).
- Pistas en dos niveles: primero una pregunta, después la pista concreta. Nunca se muestra la respuesta sin intentar.
- Todo accesible con teclado y lector de pantalla; nada depende solo del color.
- El PyBot pequeño reacciona con `buddyReact("correct" | "wrong")`.

---

## 4. IDs y versiones de progreso

- **Pasos (páginas)**: `camelCase`, definidos en `pathSteps` de `script.js` (por ejemplo `moveSteps`). El id no cambia aunque cambie el título.
- **Zonas**: `pathZones`; el id del diploma de una zona es el id de su primer paso (`diploma.html?zone=helloWhat`).
- **Actividades**: `kebab-case`, listadas en `activities` de su paso. Las que no están en el camino van en `homeActivities` (hoy: `first-mission`, `start-open`, `start-editor`, `start-account`, `start-save`).
- **Versión 1** (`progress-versions.json`): línea base con las 42 páginas sin actividades, la misión y las casillas de "Empieza en Scratch".
- **Cada vez que se agregue, renombre o quite un id** de paso o actividad: `node tools/progress-version.mjs --bump "qué cambió"`. Si se renombra o quita, agregar una migración en `progressMigrations` (`renameProgressStep`, `renameProgressActivity`).
- Al publicar una página: quitar `soon: true`, agregar sus actividades, subir la versión y probar que una copia de seguridad de la versión anterior carga bien.
- Un paso queda **terminado** cuando todas sus actividades están en `complete` (o el niño marca "ya lo sé"). Una zona termina cuando todos sus pasos terminan: eso da su sticker y su diploma.

---

## 5. Plan zona por zona y página por página

Alineado con lo que suele pedirse en Scratch en primaria (secuencias, eventos, bucles, condicionales, variables, sensores, mensajes y proyectos). **Antes de publicar cada página, verificar el texto exacto de cada bloque en el editor en español**, porque las traducciones de Scratch pueden cambiar.

Formato de cada página: **Objetivo** · **Conceptos** · **Bloques** · **Actividades** · **Hazlo en Scratch** · **Sin pantalla** · **Para papás**.

### Zona 00 — Hola, Scratch 👋

Meta de la zona: abrir Scratch, ubicarse en el editor, entender objetos y escenario, y guardar.

#### `helloWhat` — ¿Qué es Scratch?
- **Objetivo**: saber que Scratch sirve para crear historias, juegos y animaciones con bloques.
- **Conceptos**: programa, bloque, proyecto; Scratch en el navegador o en la app.
- **Bloques**: ninguno todavía (se muestran como piezas de rompecabezas).
- **Actividades**: verdadero o falso ("en Scratch se escribe con bloques"); empareja proyecto ↔ ejemplo (historia, juego, animación).
- **Hazlo en Scratch**: abrir scratch.mit.edu → Crear; reconocer la bandera verde; hacer clic en ella. Reto: buscar el botón del globo 🌐 y poner el editor en español. Qué debería pasar: el editor cambia de idioma.
- **Sin pantalla**: "Instrucciones para un sándwich": un adulto sigue literalmente las instrucciones del niño.
- **Para papás**: Scratch es gratis; la cuenta es opcional. Lo importante hoy es perderle el miedo al editor.

#### `helloEditor` — Las partes del editor
- **Objetivo**: nombrar y ubicar las partes del editor.
- **Conceptos**: categorías, área de programación, escenario, lista de objetos, pestañas Código/Disfraces/Sonidos.
- **Bloques**: `mover (10) pasos` como ejemplo para arrastrar.
- **Actividades**: ¿dónde está este bloque? (categoría por color y nombre); empareja parte ↔ para qué sirve.
- **Hazlo en Scratch**: arrastrar `mover (10) pasos` al área de programación y hacer clic en él. Reto: hacer clic 5 veces y contar. Si no funciona: revisar que el bloque esté en el área central y no en la paleta.
- **Sin pantalla**: dibujar el editor en una hoja y ponerle nombre a cada parte.
- **Para papás**: pida al niño que le haga un "tour" del editor.

#### `helloSprites` — Objetos y escenario
- **Objetivo**: agregar, elegir y renombrar objetos; cambiar el fondo.
- **Conceptos**: objeto (sprite), escenario, fondo, cada objeto tiene su propio programa.
- **Bloques**: ninguno nuevo; uso de "Elige un objeto" y "Elige un fondo".
- **Actividades**: verdadero o falso ("cada objeto tiene sus propios bloques"); arregla el programa de PyBot (bloques puestos en el objeto equivocado).
- **Hazlo en Scratch**: agregar un objeto nuevo desde la biblioteca, renombrarlo ("Jugador"), elegir un fondo. Reto: dos objetos y un fondo de tu historia favorita. Si no funciona: revisar qué objeto está seleccionado (borde azul).
- **Sin pantalla**: teatro de títeres: cada títere es un objeto, la caja es el escenario.
- **Para papás**: hablen de nombres claros, como en un cuento.

#### `helloSave` — Guardar y abrir tu proyecto
- **Objetivo**: guardar y volver a abrir un proyecto, con o sin cuenta.
- **Conceptos**: archivo `.sb3`, guardar en la computadora, guardar en línea, compartir (público).
- **Bloques**: ninguno.
- **Actividades**: ordenar pasos para guardar sin cuenta; verdadero o falso sobre compartir.
- **Hazlo en Scratch**: Archivo → Guardar en tu computadora; cerrar; Archivo → Cargar desde tu computadora. Con cuenta: Archivo → Guardar ahora y abrir "Mis cosas". Reto: cambiar el título del proyecto. Si no funciona: buscar el archivo en Descargas.
- **Sin pantalla**: guardar un dibujo en una carpeta con nombre y fecha.
- **Para papás**: decidir juntos si se crea cuenta (ver "Empieza en Scratch"); compartir solo con permiso.

### Zona 01 — Mover y mirar 🏃

Meta: mover objetos con pasos, giros y coordenadas; cambiar cómo se ven y hacerlos hablar.

#### `moveSteps` — Pasos y giros
- **Objetivo**: mover y girar un objeto.
- **Conceptos**: pasos, grados, dirección, secuencia.
- **Bloques**: `mover (10) pasos`, `girar ↻ (15) grados`, `girar ↺ (15) grados`, `apuntar en dirección (90)`.
- **Actividades**: ordenar bloques para llegar a una meta; predice antes de ejecutar (dónde queda tras mover y girar).
- **Hazlo en Scratch**: programa que avance 50 pasos y gire 90 grados. Reto: dibujar un recorrido en forma de L. Si no funciona: revisar el sentido del giro y que los bloques estén encajados.
- **Sin pantalla**: robot humano con "avanza" y "gira".
- **Para papás**: los grados son nuevos; 90 es "una esquina".

#### `moveXY` — ¿Dónde está? x e y
- **Objetivo**: entender el escenario como un plano con x e y.
- **Conceptos**: coordenadas, centro (0, 0), x a los lados, y arriba-abajo.
- **Bloques**: `ir a x: () y: ()`, `cambiar x en ()`, `cambiar y en ()`, `fijar x a ()`.
- **Actividades**: cuenta los pasos en una cuadrícula; empareja coordenada ↔ lugar del escenario.
- **Hazlo en Scratch**: enviar el objeto a las 4 esquinas con `ir a x: y:`. Reto: volver siempre al centro al empezar. Si no funciona: revisar signos negativos.
- **Sin pantalla**: batalla naval en papel.
- **Para papás**: es la misma idea de un mapa con cuadritos.

#### `moveGlide` — Deslizar e ir a
- **Objetivo**: mover suavemente y a lugares al azar.
- **Conceptos**: tiempo, movimiento suave, posición aleatoria.
- **Bloques**: `deslizar en (1) segs a x: () y: ()`, `deslizar en (1) segs a [posición aleatoria]`, `rebotar si toca un borde`.
- **Actividades**: ¿qué hace este programa?; encuentra el bloque que falta.
- **Hazlo en Scratch**: un pez que nada a 3 lugares. Reto: cambiar los segundos para que vaya más lento. Si no funciona: revisar segundos (0 es instantáneo).
- **Sin pantalla**: "cámara lenta": caminar a un punto en 1 o en 5 segundos.
- **Para papás**: pregunte qué cambia al subir o bajar el número de segundos.

#### `looksSay` — Decir y pensar
- **Objetivo**: hacer que un objeto hable o piense.
- **Conceptos**: globo de diálogo, tiempo, secuencia de frases.
- **Bloques**: `decir [¡Hola!] por (2) segundos`, `decir [¡Hola!]`, `pensar [Mmm…] por (2) segundos`.
- **Actividades**: empareja bloque ↔ globo (decir/pensar); arregla el programa de PyBot (frases en desorden).
- **Hazlo en Scratch**: el objeto se presenta en 3 frases. Reto: una frase pensada al final. Si no funciona: revisar que se usó "por () segundos" para que no se tapen.
- **Sin pantalla**: cómic de 3 viñetas con globos de decir y pensar.
- **Para papás**: es buen momento para que el niño invente su personaje.

#### `looksCostumes` — Disfraces: hacer que camine
- **Objetivo**: animar un objeto cambiando de disfraz.
- **Conceptos**: disfraz, animación cuadro por cuadro, esperar.
- **Bloques**: `siguiente disfraz`, `cambiar disfraz a []`, `esperar (0.2) segundos`.
- **Actividades**: ordenar bloques (caminar = mover + disfraz + esperar); predice antes de ejecutar.
- **Hazlo en Scratch**: objeto que camina 5 pasos cambiando de disfraz (sin bucle todavía). Reto: probar distintas esperas. Si no funciona: revisar que el objeto tenga más de un disfraz (pestaña Disfraces).
- **Sin pantalla**: flipbook en las esquinas de un cuaderno.
- **Para papás**: la animación es una ilusión de dibujos rápidos.

#### `looksBackdrops` — Fondos y tamaño
- **Objetivo**: cambiar fondos, tamaño, mostrar y esconder.
- **Conceptos**: escenario con varios fondos, tamaño en porcentaje, visibilidad.
- **Bloques**: `cambiar fondo a []`, `siguiente fondo`, `cambiar tamaño en ()`, `fijar tamaño a () %`, `mostrar`, `esconder`.
- **Actividades**: ¿qué hace este programa?; verdadero o falso.
- **Hazlo en Scratch**: un objeto que crece y aparece en un fondo nuevo. Reto: volver al tamaño 100 % al empezar. Si no funciona: revisar el estado inicial del objeto.
- **Sin pantalla**: escenografía con cajas: cambiar el fondo de la obra.
- **Para papás**: hable de "estado inicial": cómo empieza todo al presionar la bandera.

### Zona 02 — Cuando pase algo ⚡

Meta: entender que los eventos inician programas.

#### `eventsFlag` — La bandera verde
- **Objetivo**: iniciar un programa con la bandera verde y detenerlo.
- **Conceptos**: evento, sombrero (bloque que va arriba), iniciar y detener.
- **Bloques**: `al hacer clic en ⚑`, botón de alto.
- **Actividades**: ordenar bloques (evento primero); arregla el programa de PyBot (sin evento).
- **Hazlo en Scratch**: todo lo de la zona 01 bajo `al hacer clic en ⚑`. Reto: que el objeto vuelva a su lugar al empezar. Si no funciona: el bloque debe estar pegado debajo del evento.
- **Sin pantalla**: "¡En sus marcas, listos, ya!" como evento de inicio.
- **Para papás**: la bandera es como el silbato de inicio.

#### `eventsKeys` — Teclas que mueven
- **Objetivo**: mover un objeto con las flechas del teclado.
- **Conceptos**: causa y efecto, varios eventos para un objeto.
- **Bloques**: `al presionar tecla [flecha derecha]`, `cambiar x en (10)`, `cambiar y en (10)`.
- **Actividades**: empareja tecla ↔ movimiento; encuentra el bloque que falta.
- **Hazlo en Scratch**: control con las 4 flechas. Reto: la barra espaciadora hace que diga "¡Hola!". Si no funciona: revisar la tecla elegida en el menú del bloque.
- **Sin pantalla**: control remoto humano con tarjetas de flechas.
- **Para papás**: es la base de casi todos los juegos.

#### `eventsClick` — Al hacer clic en este objeto
- **Objetivo**: reaccionar cuando se hace clic en un objeto.
- **Conceptos**: interacción, botones.
- **Bloques**: `al hacer clic en este objeto`, `al hacer clic en el escenario`, `iniciar sonido []`.
- **Actividades**: ¿qué hace este programa?; predice antes de ejecutar.
- **Hazlo en Scratch**: un animal que hace un sonido y cambia de disfraz al tocarlo. Reto: 3 animales, cada uno con su sonido. Si no funciona: revisar que el programa esté en el objeto correcto.
- **Sin pantalla**: "toca y responde": tocar el hombro de alguien y que haga un sonido.
- **Para papás**: pida que le muestre su "granja tocable".

#### `eventsTogether` — Varios programas a la vez
- **Objetivo**: entender que varios programas pueden correr al mismo tiempo.
- **Conceptos**: paralelismo, varios eventos iguales en un objeto o en varios.
- **Bloques**: dos `al hacer clic en ⚑` en el mismo objeto; `esperar () segundos`.
- **Actividades**: predice antes de ejecutar (dos programas a la vez); verdadero o falso.
- **Hazlo en Scratch**: un objeto que camina y habla a la vez. Reto: dos objetos que bailan al mismo tiempo. Si no funciona: revisar esperas.
- **Sin pantalla**: cantar y aplaudir al mismo tiempo.
- **Para papás**: conversen sobre hacer dos cosas a la vez.

### Zona 03 — Repetir 🔁

Meta: usar bucles para no repetir bloques.

#### `loopsRepeat` — Repetir varias veces
- **Objetivo**: repetir un grupo de bloques un número de veces.
- **Conceptos**: bucle, cuerpo del bucle, contar repeticiones.
- **Bloques**: `repetir (10)`.
- **Actividades**: ordenar bloques (caminar con repetir); arregla el programa de PyBot (bloque fuera del bucle); cuenta los pasos.
- **Hazlo en Scratch**: convertir la caminata de `looksCostumes` en un `repetir (10)`. Reto: que dé exactamente 2 vueltas al escenario. Si no funciona: revisar qué bloques quedaron dentro de la "boca" del bucle.
- **Sin pantalla**: baile en bucle (3 pasos × 4 veces).
- **Para papás**: el coro de una canción es un bucle.

#### `loopsForever` — Por siempre
- **Objetivo**: usar un bucle que no termina y detenerlo con el alto.
- **Conceptos**: bucle infinito, botón de alto.
- **Bloques**: `por siempre`, `rebotar si toca un borde`.
- **Actividades**: verdadero o falso; empareja bucle ↔ resultado.
- **Hazlo en Scratch**: pelota que rebota por siempre. Reto: que también gire mientras rebota. Si no funciona: revisar el estilo de rotación.
- **Sin pantalla**: canción que nunca termina, hasta que alguien dice "¡alto!".
- **Para papás**: es normal que el niño se ría con los bucles que no paran.

#### `loopsAnimate` — Animaciones que se repiten
- **Objetivo**: crear animaciones con bucles y esperas.
- **Conceptos**: ritmo, velocidad de la animación.
- **Bloques**: `por siempre` + `siguiente disfraz` + `esperar`, `cambiar efecto [color] en ()`.
- **Actividades**: predice antes de ejecutar; encuentra el bloque que falta (la espera).
- **Hazlo en Scratch**: un letrero que cambia de color y un personaje que camina por siempre. Reto: dos velocidades distintas. Si no funciona: sin `esperar` todo va demasiado rápido.
- **Sin pantalla**: luces de Navidad con linternas: encender y apagar en ritmo.
- **Para papás**: pregunte cómo hacer la animación más lenta.

#### `loopsPen` — Dibujar figuras con el lápiz
- **Objetivo**: dibujar figuras con la extensión Lápiz y bucles.
- **Conceptos**: extensión, lápiz arriba/abajo, ángulos de polígonos (360 ÷ lados).
- **Bloques**: `borrar todo`, `bajar lápiz`, `subir lápiz`, `fijar color del lápiz a []`, `repetir`, `mover`, `girar`.
- **Actividades**: cuenta los pasos (cuántas veces repetir para un cuadrado); empareja figura ↔ programa.
- **Hazlo en Scratch**: agregar la extensión Lápiz (botón abajo a la izquierda) y dibujar un cuadrado. Reto: triángulo y estrella. Si no funciona: revisar `bajar lápiz` antes de mover.
- **Sin pantalla**: caminar un cuadrado en el patio contando giros.
- **Para papás**: arte y geometría se juntan; impriman los dibujos.

### Zona 04 — Decidir 🔀

Meta: que el programa elija según lo que pasa.

#### `ifTouching` — ¿Está tocando?
- **Objetivo**: reaccionar cuando un objeto toca a otro o al borde.
- **Conceptos**: condición, sensor, verdadero/falso.
- **Bloques**: `si <> entonces`, `¿tocando [objeto]?`, `¿tocando [borde]?`.
- **Actividades**: ¿qué hace este programa?; arregla el programa de PyBot (condición fuera del bucle).
- **Hazlo en Scratch**: un objeto dice "¡Ay!" cuando toca a otro. Reto: que cambie de color al tocar el borde. Si no funciona: la pregunta debe revisarse dentro de un `por siempre`.
- **Sin pantalla**: "la lava": si tocas el piso rojo, regresas al inicio.
- **Para papás**: los condicionales son las reglas del juego.

#### `ifElse` — Si… si no
- **Objetivo**: elegir entre dos caminos.
- **Conceptos**: alternativa, dos ramas.
- **Bloques**: `si <> entonces / si no`.
- **Actividades**: empareja condición ↔ rama; verdadero o falso.
- **Hazlo en Scratch**: un semáforo: si toca el color rojo dice "Alto", si no dice "Sigue". Reto: inventar otra regla. Si no funciona: revisar qué bloques están en cada rama.
- **Sin pantalla**: Simón dice con "si no".
- **Para papás**: usen ejemplos de la casa: "si llueve, paraguas; si no, gorra".

#### `ifKeys` — ¿Tecla presionada?
- **Objetivo**: mover suavemente con teclas usando condiciones.
- **Conceptos**: comprobar continuamente, movimiento fluido.
- **Bloques**: `¿tecla [] presionada?` dentro de `por siempre` + `si`.
- **Actividades**: compara eventos de tecla vs. sensor (¿cuál es más suave?); encuentra el bloque que falta.
- **Hazlo en Scratch**: control con flechas sin saltos. Reto: correr más rápido con la barra espaciadora. Si no funciona: revisar que esté dentro de `por siempre`.
- **Sin pantalla**: "estatuas musicales": te mueves solo mientras suena la música.
- **Para papás**: es la técnica de los juegos de verdad.

#### `ifColors` — Tocar un color
- **Objetivo**: usar colores del escenario como reglas.
- **Conceptos**: sensor de color, paredes y metas.
- **Bloques**: `¿tocando el color []?`, `¿color [] tocando []?`.
- **Actividades**: ¿dónde está este bloque en Scratch? (Sensores); predice antes de ejecutar.
- **Hazlo en Scratch**: un fondo con una meta verde: al tocarla, dice "¡Gané!". Reto: paredes negras que regresan al inicio. Si no funciona: usar el gotero del bloque para elegir el color exacto.
- **Sin pantalla**: rayuela con colores y reglas.
- **Para papás**: preparan el laberinto de "Mis juegos".

### Zona 05 — Recordar 🧮

Meta: guardar y usar información con variables y números.

#### `varsMake` — Crear una variable
- **Objetivo**: crear una variable y cambiar su valor.
- **Conceptos**: variable como caja con nombre, valor inicial.
- **Bloques**: botón "Crear una variable", `dar a [] el valor ()`, `cambiar [] en (1)`, `mostrar variable []`.
- **Actividades**: predice el valor final; empareja bloque ↔ valor.
- **Hazlo en Scratch**: variable "saltos" que suma 1 en cada salto. Reto: que empiece en 0 al presionar la bandera. Si no funciona: revisar el valor inicial.
- **Sin pantalla**: vaso de frijoles con etiqueta.
- **Para papás**: una variable es como el marcador de un partido.

#### `varsScore` — Contar puntos
- **Objetivo**: llevar un puntaje en un juego.
- **Conceptos**: puntaje, sumar al tocar algo.
- **Bloques**: `cambiar [puntos] en (1)`, `si <¿tocando?> entonces`.
- **Actividades**: arregla el programa de PyBot (suma infinita mientras toca); ¿qué hace este programa?
- **Hazlo en Scratch**: tocar estrellas suma 1 y la estrella se mueve a un lugar al azar. Reto: restar si toca un obstáculo. Si no funciona: mover la estrella después de sumar.
- **Sin pantalla**: puntos con frijoles en un juego de preguntas.
- **Para papás**: celebren el récord, no solo ganar.

#### `varsTimer` — Cronómetro
- **Objetivo**: usar el tiempo en un juego.
- **Conceptos**: cronómetro, cuenta regresiva con variable.
- **Bloques**: `cronómetro`, `reiniciar cronómetro`, `esperar hasta que <>`, `detener [todos]`.
- **Actividades**: predice antes de ejecutar; cuenta los pasos (cuenta regresiva).
- **Hazlo en Scratch**: cuenta regresiva de 10 a 0 que termina el juego. Reto: mostrar "¡Tiempo!" al final. Si no funciona: revisar `esperar 1 segundo` en cada vuelta.
- **Sin pantalla**: reloj de arena o temporizador de cocina.
- **Para papás**: hablen de cuánto es un segundo.

#### `varsAsk` — Preguntar y responder
- **Objetivo**: pedir información y usar la respuesta.
- **Conceptos**: entrada, `respuesta`, unir texto.
- **Bloques**: `preguntar [] y esperar`, `respuesta`, `unir [] []`.
- **Actividades**: ordenar bloques (preguntar → decir unido); verdadero o falso.
- **Hazlo en Scratch**: el objeto pregunta tu color favorito y lo repite. Reto: preguntar dos cosas. Si no funciona: revisar espacios al unir textos.
- **Sin pantalla**: entrevista a alguien de la familia.
- **Para papás**: recuerde que no se escriben datos personales reales en proyectos compartidos.

#### `varsRandom` — Números al azar
- **Objetivo**: usar números aleatorios.
- **Conceptos**: azar, rango.
- **Bloques**: `número aleatorio entre (1) y (10)`.
- **Actividades**: predice (¿siempre sale lo mismo?); empareja rango ↔ ejemplo (dado de 6).
- **Hazlo en Scratch**: un dado que muestra un número del 1 al 6. Reto: que el objeto aparezca en un lugar al azar. Si no funciona: revisar el rango.
- **Sin pantalla**: lanzar un dado de verdad y anotar resultados.
- **Para papás**: pregunte por qué el azar hace los juegos divertidos.

#### `varsCompare` — Comparar: mayor, menor, igual
- **Objetivo**: comparar números y combinar condiciones.
- **Conceptos**: mayor que, menor que, igual, y/o/no.
- **Bloques**: `() > ()`, `() < ()`, `() = ()`, `<> y <>`, `<> o <>`, `no <>`.
- **Actividades**: verdadero o falso con números; encuentra el bloque que falta.
- **Hazlo en Scratch**: adivina el número (mayor/menor). Reto: contar intentos con una variable. Si no funciona: revisar que se compare `respuesta` con el número secreto.
- **Sin pantalla**: "frío o caliente" con números.
- **Para papás**: se conecta directo con las matemáticas del colegio.

### Zona 06 — Sonido y música 🎵

Meta: dar vida a los proyectos con sonido y música.

#### `soundPlay` — Tocar sonidos
- **Objetivo**: reproducir y elegir sonidos.
- **Conceptos**: iniciar sonido vs. tocar hasta que termine; volumen.
- **Bloques**: `iniciar sonido []`, `tocar sonido [] hasta que termine`, `detener todos los sonidos`, `fijar volumen a () %`.
- **Actividades**: empareja bloque ↔ resultado; predice (¿se superponen?).
- **Hazlo en Scratch**: elegir un sonido de la biblioteca (pestaña Sonidos) y tocarlo al hacer clic. Reto: secuencia de 3 sonidos. Si no funciona: revisar el volumen del dispositivo.
- **Sin pantalla**: orquesta de cocina con ollas y cucharas.
- **Para papás**: grabar la voz es opcional y ocurre en Scratch, no en PyBot Blocks; háganlo juntos.

#### `soundMusic` — Hacer música con notas
- **Objetivo**: componer una melodía con la extensión Música.
- **Conceptos**: nota, pulso, tempo, instrumento.
- **Bloques**: `tocar nota (60) durante (0.25) pulsos`, `tocar tambor [] durante () pulsos`, `fijar instrumento a []`, `fijar tempo a ()`.
- **Actividades**: ordenar notas de una melodía conocida; empareja tempo ↔ rápido/lento.
- **Hazlo en Scratch**: agregar la extensión Música y tocar las primeras notas de una canción infantil. Reto: repetirla con un bucle. Si no funciona: revisar que la extensión esté agregada.
- **Sin pantalla**: palmas con ritmo largo y corto.
- **Para papás**: canten juntos la canción antes de programarla.

#### `soundDance` — Bailar con música
- **Objetivo**: sincronizar movimiento y música.
- **Conceptos**: sincronizar, paralelismo con sonido.
- **Bloques**: `tocar sonido hasta que termine`, `por siempre`, disfraces, `esperar`.
- **Actividades**: predice antes de ejecutar; arregla el programa de PyBot (baile fuera de ritmo).
- **Hazlo en Scratch**: un personaje que baila mientras suena una canción en bucle. Reto: dos bailarines coordinados. Si no funciona: separar música y baile en dos programas.
- **Sin pantalla**: coreografía familiar de 8 tiempos.
- **Para papás**: grábenlo bailando (fuera de Scratch) para compararlo.

### Zona 07 — Contar historias 📖

Meta: crear historias con diálogos, escenas y mensajes.

#### `storyDialog` — Diálogos
- **Objetivo**: hacer que dos personajes conversen por turnos.
- **Conceptos**: turnos, tiempo, sincronizar con esperas.
- **Bloques**: `decir [] por () segundos`, `esperar () segundos`.
- **Actividades**: ordenar el diálogo; arregla el programa de PyBot (hablan a la vez).
- **Hazlo en Scratch**: chiste de dos personajes. Reto: un tercer personaje que responde. Si no funciona: sumar los segundos de cada turno.
- **Sin pantalla**: leer un diálogo en voz alta por turnos.
- **Para papás**: verán que coordinar con esperas cuesta; en la siguiente página lo resolvemos con mensajes.

#### `storyScenes` — Cambiar de escena
- **Objetivo**: cambiar fondos para mostrar escenas.
- **Conceptos**: escena, inicio-nudo-desenlace, eventos de fondo.
- **Bloques**: `cambiar fondo a []`, `al cambiar el fondo a []`.
- **Actividades**: ordena escenas de un cuento; ¿qué hace este programa?
- **Hazlo en Scratch**: historia de 3 escenas. Reto: que un personaje aparezca solo en la escena 2. Si no funciona: revisar `mostrar`/`esconder` al cambiar el fondo.
- **Sin pantalla**: cuento en 3 dibujos.
- **Para papás**: pidan que cuenten la historia antes de programarla.

#### `storyMessages` — Enviar mensajes
- **Objetivo**: coordinar personajes con mensajes.
- **Conceptos**: enviar y recibir, comunicación entre objetos.
- **Bloques**: `enviar [mensaje1]`, `al recibir [mensaje1]`, `enviar [] y esperar`.
- **Actividades**: empareja envío ↔ recepción; arregla el programa de PyBot (nombre de mensaje distinto).
- **Hazlo en Scratch**: rehacer el chiste de `storyDialog` con mensajes. Reto: un mensaje que cambia de escena. Si no funciona: revisar que el nombre del mensaje sea igual.
- **Sin pantalla**: teléfono de vasos: solo actúas cuando recibes tu mensaje.
- **Para papás**: los mensajes son como las señales de un director de teatro.

#### `storyPlan` — Planear tu historia
- **Objetivo**: planear antes de programar.
- **Conceptos**: guion gráfico, personajes, escenas, eventos.
- **Bloques**: los de la zona.
- **Actividades**: ordena el plan (personajes → escenas → diálogos → mensajes); verdadero o falso.
- **Hazlo en Scratch**: una historia propia de al menos 2 escenas y 2 personajes. Reto: un final sorpresa. Si no funciona: revisar el guion paso a paso.
- **Sin pantalla**: guion gráfico en una hoja doblada en 4.
- **Para papás**: celebren la historia; no hay una correcta.

### Zona 08 — Mis juegos 🎮

Meta: proyectos guiados que juntan todo. Cada proyecto tiene 3 o 4 "misiones" cortas dentro de la página.

#### `gameCatch` — Atrapa la fruta
- **Objetivo**: juego donde cae una fruta y una canasta la atrapa.
- **Conceptos**: movimiento con teclas, posición aleatoria, puntaje, condición.
- **Bloques**: `ir a x: (aleatorio) y: (180)`, `cambiar y en (-5)`, `¿tocando?`, variable `puntos`.
- **Actividades**: ordena las misiones del juego; encuentra el bloque que falta.
- **Hazlo en Scratch**: construir el juego en 4 misiones. Reto: que la fruta caiga más rápido con más puntos. Si no funciona: revisar que la fruta vuelva arriba al tocar el suelo.
- **Sin pantalla**: atrapar pelotas de papel con una caja.
- **Para papás**: jueguen y cuenten los puntos juntos.

#### `gameMaze` — Laberinto
- **Objetivo**: laberinto con paredes y meta.
- **Conceptos**: sensor de color, regresar al inicio, ganar.
- **Bloques**: `¿tocando el color []?`, `ir a x: y:`, `¿tecla presionada?`.
- **Actividades**: arregla el programa de PyBot (atraviesa paredes); predice.
- **Hazlo en Scratch**: dibujar el laberinto en el editor de fondos y programar al jugador. Reto: un segundo nivel. Si no funciona: hacer el objeto más pequeño.
- **Sin pantalla**: laberinto dibujado con tiza.
- **Para papás**: prueben el laberinto del niño y díganle qué les gustó.

#### `gameQuiz` — Juego de preguntas
- **Objetivo**: un quiz con preguntas y puntaje.
- **Conceptos**: preguntar, comparar respuesta, puntaje, mensajes de ánimo.
- **Bloques**: `preguntar`, `respuesta`, `si/si no`, `() = ()`, variable.
- **Actividades**: ordenar bloques de una pregunta; verdadero o falso.
- **Hazlo en Scratch**: quiz de 3 preguntas de una materia del colegio. Reto: mostrar el puntaje final. Si no funciona: revisar mayúsculas y espacios en las respuestas.
- **Sin pantalla**: concurso familiar de preguntas.
- **Para papás**: puede servir para repasar el colegio.

#### `gamePong` — Pelota y paleta
- **Objetivo**: pelota que rebota y paleta controlada por el ratón.
- **Conceptos**: dirección, rebote, perder, seguir el ratón.
- **Bloques**: `fijar x a (posición x del ratón)`, `rebotar si toca un borde`, `apuntar en dirección`, `¿tocando?`.
- **Actividades**: predice el rebote; encuentra el bloque que falta.
- **Hazlo en Scratch**: juego de pelota y paleta con una línea roja que termina el juego. Reto: puntaje por rebote. Si no funciona: revisar el ángulo después del rebote (`180 - dirección`).
- **Sin pantalla**: pelota contra la pared.
- **Para papás**: es un clásico; cuénteles cómo era jugarlo.

#### `gameClones` — Clones: muchos a la vez
- **Objetivo**: crear muchos objetos iguales con clones.
- **Conceptos**: clon, crear y eliminar, comportamiento de cada clon.
- **Bloques**: `crear clon de [mí mismo]`, `al comenzar como clon`, `eliminar este clon`.
- **Actividades**: ¿qué hace este programa?; verdadero o falso.
- **Hazlo en Scratch**: lluvia de estrellas con clones. Reto: llevarlo al juego de la fruta. Si no funciona: eliminar los clones que salen del escenario (Scratch tiene un límite).
- **Sin pantalla**: fotocopias de un mismo dibujo, cada una pintada distinto.
- **Para papás**: es un concepto avanzado; está bien si toma más de una sesión.

#### `gameMine` — Tu propio juego
- **Objetivo**: diseñar y construir un juego propio.
- **Conceptos**: idea, reglas, plan, probar con otros, mejorar.
- **Bloques**: todos.
- **Actividades**: plan del juego con preguntas guiadas (no se guarda texto: el plan va en papel); verdadero o falso sobre probar y mejorar.
- **Hazlo en Scratch**: construir el juego, pedir a alguien que lo pruebe, mejorar una cosa. Reto opcional: compartirlo con permiso de un adulto. Si no funciona: volver a las páginas de cada concepto.
- **Sin pantalla**: inventar un juego de mesa con reglas escritas.
- **Para papás**: jugar su juego es el mejor halago.

### 🏁 Parada final

#### `finish` — Revísate y recibe tu diploma
- **Objetivo**: repasar todo, autoevaluarse con calma y recibir el diploma.
- **Conceptos**: los de todas las zonas.
- **Actividades**: un repaso corto por zona (verdadero o falso, empareja); autoevaluación por zona (bien / más o menos / repasar) guardada en `pybotblocks.selfcheck`; enlaces para repasar.
- **Hazlo en Scratch**: elegir el proyecto favorito y agregarle una mejora. Reto: explicarlo a alguien en 1 minuto.
- **Sin pantalla**: exposición familiar de proyectos.
- **Para papás**: no es un examen. Celebren el camino recorrido e impriman el diploma.

---

## 6. Crecimiento futuro

**Regla de crecimiento**: un tema nuevo entra como **página dentro de su zona**; solo se crea una zona nueva si ningún tema existente la cubre. Cada cambio de ids sube la versión de progreso (sección 4).

Candidatos y dónde irían:

| Tema | Dónde | Nota |
| --- | --- | --- |
| Editor de disfraces (dibujar tu objeto) | 01 Mover y mirar | Página `looksPaint`. |
| Efectos de apariencia (color, fantasma) | 01 Mover y mirar | Puede ampliar `looksBackdrops`. |
| Grabar sonido | 06 Sonido y música | Siempre con un adulto; el micrófono es de Scratch. |
| Listas | 05 Recordar | Página `varsLists`. |
| Bloques personalizados ("Mis bloques") | 08 Mis juegos o zona nueva "Superpoderes" si crecen | Evaluar con niños primero. |
| Texto a voz y Traducir (extensiones) | 06 o 07 | Revisar privacidad de cada extensión antes. |
| Gravedad y saltos de plataforma | 08 Mis juegos | Página `gamePlatform`. |
| Parada intermedia (después de 04) | Nueva parada `checkpoint` | Solo si las pruebas con niños lo piden. |
| Visor en español | Herramienta | Escribir un archivo propio de traducción de bloques (no usar `scratch-l10n`, AGPL). |
| Guía imprimible por zona | Páginas de apoyo | Retos en papel. |

---

## 7. Páginas de apoyo

| Página | Para qué | Contenido previsto |
| --- | --- | --- |
| **Mis bloques** (glosario) `glossary.html` | Buscar un bloque o palabra | Cada bloque dibujado, su categoría, qué hace, ejemplo mínimo y nombre en inglés/español. Búsqueda simple. |
| **Guía para familias** `guide.html` | Acompañar sin saber programar | Por zona: qué se aprende, tiempo aproximado, preguntas para conversar, dos actividades sin pantalla, reto en papel imprimible. Sección de cuentas de Scratch y seguridad. |
| **Conoce a PyBot** `meet-pybot.html` | Presentar a la mascota | Sus estados de ánimo, cómo tocarlo, qué dice y cómo esconder al PyBot pequeño. |
| **Empieza en Scratch** `start.html` (ya existe) | Primeros pasos | Abrir Scratch, editor, cuenta opcional, guardar; visor de bloques. |

Al agregar una página de apoyo a la cabecera: una entrada en `headerPages` (máximo 5 enlaces para que quepa en una fila).

---

## 8. Recursos y créditos

### Reglas

- Antes de usar cualquier componente externo: **verificar su licencia o términos**; solo se usa si es compatible con MIT (código) y CC BY 4.0 (contenido).
- El crédito se agrega **al mismo tiempo** que el componente: `THIRD_PARTY_NOTICES.md`, un bloque "♥ Gracias a…" junto a donde se usa y la respuesta `id="credits"` en las preguntas frecuentes.
- Nunca dar a entender afiliación con Scratch. Nota visible en cada página: "Scratch es un proyecto de la Scratch Foundation. PyBot Blocks es una guía independiente: no está afiliada ni respaldada por ella."

### Estado verificado (22 de octubre de 2026)

| Recurso | Licencia / términos | Uso |
| --- | --- | --- |
| scratchblocks 3.7.1 (Tim Radvan) | MIT | **Usado**: solo el núcleo, en el visor. |
| Traducciones de scratchblocks | Vienen de `scratch-l10n` (AGPL-3.0 desde v5) | **No usadas**. |
| `scratch-gui` | AGPL-3.0-only | No usado. |
| `scratch-vm` | AGPL-3.0-only | No usado. |
| `scratch-blocks` | Apache-2.0 | No usado (no hace falta un editor). |
| TurboWarp | GPL-3.0 | No usado. |
| Marca Scratch, logo, gato, personajes | Marcas de MIT (archivo TRADEMARK de `scratch-gui`) | No se usan; "Scratch" solo como referencia a la herramienta. |
| Capturas del editor | Los términos actuales remiten a "la licencia aplicable"; no es claro | **No se usan**; bloques dibujados. |
| Proyectos compartidos (iframe oficial) | Publicados con licencia Creative Commons Atribución-CompartirIgual | Pendiente: revisar los Terms of Use vigentes y acreditar a cada autor antes de incrustar. |
| Cuentas de menores | Scratch pide el correo de un adulto; un anuncio reciente habla de permiso para menores de 16 | **Verificar la edad exacta** en la página de registro antes de escribir la página `helloSave` y la guía para familias. |

### Fuentes para planear (enlazar, no copiar)

- Las guías y tarjetas oficiales de Scratch (scratch.mit.edu/ideas), solo como enlace.
- Currículos de primaria que incluyen Scratch (secuencia, bucles, condicionales, variables, eventos, mensajes).
- Las propias pruebas con niños (sección 10).

---

## 9. Fases con criterios de "listo"

| Fase | Contenido | Listo cuando… |
| --- | --- | --- |
| **0. Plan** (esta sesión) | Sitio, índice, camino, extras, plan | Todas las páginas cargan sin errores a 1280 y 390 px; cabecera en una fila; README y este plan escritos. ✅ |
| **1. Plantilla y zona 00** | Plantilla de lección, actividades "ordenar bloques" y "¿qué hace este programa?", 4 páginas de "Hola, Scratch" | Las 4 páginas pasan la checklist; versión de progreso subida; probado con al menos 2 niños. |
| **2. Zonas 01–03** | Movimiento, eventos, bucles + glosario "Mis bloques" | 14 páginas listas; glosario con todos los bloques usados. |
| **3. Zonas 04–05** | Decidir y recordar + guía para familias | 10 páginas; guía imprimible. |
| **4. Zonas 06–07** | Sonido e historias | 7 páginas. |
| **5. Zona 08 y parada final** | Proyectos y autoevaluación | 6 proyectos y `finish`; diplomas por zona probados. |
| **6. Pulido** | Visor en español, Conoce a PyBot, accesibilidad completa | Auditoría de accesibilidad; textos revisados por un adulto hispanohablante y uno angloparlante. |

### Checklist por página

- [ ] Una sola idea; título igual a `step.<id>` en ES y EN.
- [ ] Partes en orden: Mira → Prueba aquí → Hazlo en Scratch → Sin pantalla → Para adultos → Cierre.
- [ ] "Hazlo en Scratch" con pasos exactos, reto corto, qué debería pasar, qué revisar y cómo guardar.
- [ ] Nombres de bloques verificados en el editor de Scratch en español e inglés.
- [ ] Cada ejemplo tiene lógica: cada bloque produce un efecto visible, coherente con el objetivo y fiel a lo que pasa en Scratch.
- [ ] No se usa ningún concepto de Scratch que no se haya explicado antes (o en la misma página).
- [ ] Bloques dibujados con HTML/CSS o scratchblocks; ninguna captura, logo, gato ni personaje de Scratch.
- [ ] Actividades con ids únicos en `pathSteps`; `soon: true` quitado; `node tools/progress-version.mjs --bump` ejecutado.
- [ ] Pistas en dos niveles; ningún mensaje que castigue.
- [ ] Textos ES y EN escritos por separado (no traducción literal), frases cortas.
- [ ] Accesible con teclado; contraste verificado (`node tools/contrast.mjs`).
- [ ] Sin errores de consola; sin desplazamiento horizontal a 390 px; cabecera en una fila.
- [ ] Créditos agregados si se usó algo externo.
- [ ] Se puede terminar en 15–20 minutos, contando el reto en Scratch.

---

## 10. Pruebas con niños

**Observar, no medir.** No se recogen datos: ni grabaciones, ni nombres, ni formularios, ni analítica.

### Cómo

- Sesiones de 15 a 20 minutos con 1 o 2 niños de 8 a 10 años, con su papá o mamá presente.
- El adulto que prueba solo observa y toma notas en papel sobre **la página**, no sobre el niño.
- El niño usa PyBot Blocks y luego Scratch real, como en casa.

### Qué observar

- ¿Entiende el objetivo de la página sin ayuda?
- ¿En qué paso de "Hazlo en Scratch" se detiene? ¿Encuentra el bloque y la categoría?
- ¿Las pistas lo ayudan o lo frustran?
- ¿Termina en el tiempo esperado?
- ¿Sonríe, se aburre, quiere seguir? ¿Pide mostrar lo que hizo?
- ¿El adulto supo acompañar con la nota para papás?

### Qué hacer con lo observado

- Cambiar una cosa a la vez en la página y volver a probar.
- Si varias páginas se sienten largas, dividir el tema **dentro de la misma zona**, no crear zonas nuevas.
- Registrar los cambios en el historial de git, nunca datos de los niños.
