
import { useState, useEffect, useCallback } from "react";

// ═══ WEEK CONFIG ══════════════════════════════════════════════════════
const W = {
  2: { c:'#B57A72', l:'#FBF0EE', dk:'#7A4038', name:'Más valiosa que las joyas', emoji:'💎', days:[10,11,12,13,14] },
  3: { c:'#6B9E8A', l:'#E8F5F0', dk:'#3A6B58', name:'Hábitos que transforman',   emoji:'🌿', days:[15,16,17,18,19,20,21] },
  4: { c:'#B08A5A', l:'#FBF4EA', dk:'#7A5A2A', name:'Intimidad con el Padre',     emoji:'🙏', days:[22,23,24,25,26,27,28] },
  5: { c:'#7A7AAA', l:'#EEEEF7', dk:'#4A4A7A', name:'El Consolador',              emoji:'🕊', days:[29,30,31] },
};
const WK = (d) => d<=14?2:d<=21?3:d<=28?4:5;

// ═══ WEEK INTROS ══════════════════════════════════════════════════════
const WI = {
  2: { verse:'"Eres preciosa a mis ojos, eres honorable y yo te amo."', ref:'Isaías 43:4 (NTV)', text:'Vivimos en un mundo que define el valor por la apariencia y los logros. Esta semana la Escritura te habla diferente: tu valor no se construye, se recibe. Antes de que hicieras nada, ya eras más valiosa que las joyas. Esta es la verdad que transforma: no tienes que ganar lo que ya tienes.' },
  3: { verse:'"Dejen que Dios los transforme en personas nuevas al cambiarles la manera de pensar."', ref:'Romanos 12:2 (NTV)', text:'La vida espiritual no es una lista de reglas — es un conjunto de hábitos que nos forman a imagen de Cristo. Esta semana exploramos disciplinas concretas: oración, Palabra, gratitud, dominio propio, mente renovada, comunidad. No para ganarnos el amor de Dios, sino porque ya lo recibimos.' },
  4: { verse:'"Lo único que le pido al SEÑOR es vivir en su casa todos los días de mi vida."', ref:'Salmo 27:4 (NTV)', text:'Conocer sobre Dios no es lo mismo que conocer a Dios. Esta semana profundizamos en lo que significa vivir en intimidad real con el Padre — no como empleadas cumpliendo obligaciones, sino como hijas amadas que quieren estar cerca de quien las ama primero.' },
  5: { verse:'"Y yo le pediré al Padre, y él les dará otro Abogado Defensor, quien estará con ustedes para siempre."', ref:'Juan 14:16 (NTV)', text:'Antes de partir, Jesús no nos dejó solas. Nos dejó al Consolador: el Espíritu Santo. No es una fuerza abstracta — es una Persona que habita en ti, te guía, intercede por ti y te sella como propiedad de Dios. Esta semana lo conocemos de cerca.' },
};

// ═══ DAYS DATA ════════════════════════════════════════════════════════
const DAYS = [
{day:10,date:'Viernes, 10 de julio',week:2,title:'Eres su obra maestra',ref:'Efesios 2:10',
verse:'Pues somos la obra maestra de Dios. Él nos creó de nuevo en Cristo Jesús, a fin de que hagamos las cosas buenas que preparó para nosotros tiempo atrás.',
verseRef:'Efesios 2:10 (NTV)',
context:'Pablo escribe Efesios desde la prisión romana (~62 d.C.). Éfeso era capital de la provincia de Asia, sede del templo de Artemisa —una de las siete maravillas del mundo— y centro de filosofía y comercio.\n\nLa palabra griega poiēma (ποίημα) — de donde viene "poema" — no describía un objeto fabricado en serie, sino una obra creada con maestría deliberada y artística. Es la palabra para la escultura más cuidada, el himno más elaborado.\n\nEl contexto es poderoso: en v.1-3, Pablo describe a sus lectores como "muertos en sus delitos". El movimiento de muerte a vida pasa por la gracia (v.4-9). Y la conclusión de ese movimiento es: eres el poema de Dios. No fuiste rescatada para ser un número más.\n\nLa frase "que preparó de antemano" usa el griego proetoimasen (antes de + preparar con cuidado). Los propósitos para los que fuiste diseñada existían en la mente de Dios antes de que tú existieras.',
teaching:'Muchas personas llevan toda la vida sintiéndose como borradores — versiones fallidas de algo que debería ser mejor. Este versículo dice lo contrario: eres el resultado final y deliberado de la creación más cuidadosa.\n\nNota que Pablo no dice que llegarás a ser la obra maestra cuando seas más madura. Lo dice en tiempo presente: ya eres. El artesano no llama "obra maestra" a lo que está a medias — Dios te llama así porque ve lo que está haciendo con una perspectiva que tú aún no tienes.\n\nEsto no niega que hay crecimiento. Significa que el crecimiento ocurre desde una identidad segura. No caminamos para convertirnos en alguien valioso — caminamos como alguien que ya sabe que lo es.',
application:'Escribe 3 dones, rasgos de carácter o formas únicas de ver el mundo que Dios puso en ti (no logros — rasgos de quién eres). Al lado de cada uno escribe: "Gracias, Padre, por diseñar esto en mí."',
prayer:'Señor, me cuesta creer que soy tu obra maestra cuando veo tantas áreas incompletas. Pero hoy elijo creer lo que tú dices sobre mí. Gracias porque no me hiciste en serie — me diseñaste con intención. Ayúdame a caminar en los propósitos que preparaste antes de que yo existiera. Amén.',
phrase:'No soy un borrador — soy el poema que Dios escribió deliberadamente, antes de que yo supiera que existía.'},

{day:11,date:'Sábado, 11 de julio',week:2,title:'Tu verdadera belleza',ref:'1 Pedro 3:3-4',
verse:'En cambio, vístanse con la belleza interior, la que no se desvanece, la belleza de un espíritu tierno y sereno, lo cual es tan precioso a los ojos de Dios.',
verseRef:'1 Pedro 3:4 (NTV)',
context:'Pedro escribe (~64-67 d.C.) a creyentes bajo persecución de Nerón. El contexto cultural es clave: en Roma, la apariencia femenina era un marcador de estatus social visible — joyas elaboradas, peinados complejos y telas costosas señalaban la posición de una familia.\n\nLa palabra clave es praus (πραΰς) — "tierno" o "apacible". Es exactamente la misma palabra que Jesús usó para describir su propio corazón en Mateo 11:29. No significa pasividad — significa fuerza puesta al servicio de los demás, poder bajo control.\n\nLa palabra incorrupto (ἄφθαρτος) contrasta directamente con la belleza física perecedera: lo que Pedro describe como bello ante Dios es, literalmente, "lo que no puede corromperse". El tiempo no lo toca.\n\nY la escala de valor es radical: polyteles — de gran precio, de valor excepcional. A los ojos de Dios, no de las redes sociales.',
teaching:'La cultura ha perfeccionado el sistema de evaluación visual. Hay filtros para todo, cirugías para casi todo, y una industria entera dedicada a que sintamos que como somos no es suficiente.\n\nPedro no está en contra de cuidar la apariencia. Está diciendo algo más radical: hay una belleza que el tiempo no puede deshacer. Un espíritu tierno que responde con ternura en lugar de con reactividad. Un espíritu sereno que opera desde la paz aunque las circunstancias sean turbulentas.\n\nEsa belleza se cultiva en la intimidad con Dios. No se compra, no se filtra, no se edita. Crece cuando el Espíritu Santo tiene espacio para trabajar en lo profundo del carácter.',
application:'¿Cuánto tiempo inviertes semanalmente en tu apariencia externa vs. en cultivar tu mundo interior (oración, Palabra, reflexión)? No para condenarte — para tomar una decisión intencional. ¿Qué hábito interior quieres desarrollar esta semana?',
prayer:'Padre, en un mundo que evalúa la superficie, ayúdame a valorar lo que tú valoras. Quiero desarrollar esa belleza que no se desvanece. Que el Espíritu Santo trabaje en lo profundo de mi carácter, en las áreas que nadie más ve. Amén.',
phrase:'La belleza que Dios ve en mí no la puede tocar el tiempo ni el espejo — se cultiva en lo profundo.'},

{day:12,date:'Domingo, 12 de julio',week:2,title:'Más preciosa que las joyas',ref:'Proverbios 3:13-15',
verse:'La sabiduría es más preciosa que los rubíes; nada de lo que deseas puede compararse a ella.',
verseRef:'Proverbios 3:15 (NTV)',
context:'Proverbios pertenece al género de la "literatura de sabiduría" del antiguo Cercano Oriente. Israel transformó radicalmente este género: mientras la sabiduría de otras culturas era técnica (cómo gobernar, cómo vivir materialmente bien), la sabiduría bíblica tiene un fundamento teológico: "El temor del Señor es el principio de la sabiduría" (9:10).\n\nLa palabra hebrea ḥokmāh no describe conocimiento académico sino habilidad práctica para vivir bien delante de Dios — la capacidad de un artesano para trabajar bien, de una persona para tomar decisiones sabias.\n\nEl término "rubíes" (penīnīm) refería a lo más valioso del mundo material conocido. Esta misma comparación aparece en Proverbios 31:10 para la mujer de carácter noble. No es coincidencia: lo que hace valiosa a esa mujer es que vive con sabiduría — su vida está orientada hacia Dios.',
teaching:'El mundo tiene una ecuación del valor: apariencia + logros + reconocimiento social. Por eso muchas personas sienten que su valor fluctúa según el día, según quién las vea, según lo que produzcan.\n\nLa sabiduría bíblica propone algo completamente diferente. El valor de la mujer de Proverbios 31 no viene de la lista de cosas que hace — viene de quién es en su relación con Dios: "La mujer que teme al Señor será sumamente alabada" (31:30).\n\nLa sabiduría, en su sentido más profundo, es una postura del corazón que comienza con una pregunta: ¿estoy orientando mi vida hacia Dios o hacia otro centro?',
application:'Piensa en una decisión pendiente. ¿Cómo cambiaría tu perspectiva si la filtraras a través de esta pregunta: "¿Qué haría alguien que teme a Dios y no solo al resultado?" Escríbelo.',
prayer:'Señor, dame sabiduría — no solo conocimiento, sino la habilidad de vivir bien delante de ti. Que mis decisiones estén marcadas por el temor del Señor, no por el miedo al qué dirán. Orienta toda mi vida hacia ti. Amén.',
phrase:'Valgo más que rubíes no por lo que logro — sino por quién soy cuando estoy orientada hacia Dios.'},

{day:13,date:'Lunes, 13 de julio',week:2,title:'La mujer que teme al Señor',ref:'Proverbios 31:25-31',
verse:'El encanto es engañoso y la belleza no perdura, pero la mujer que teme al SEÑOR será sumamente alabada.',
verseRef:'Proverbios 31:30 (NTV)',
context:'Proverbios 31:10-31 es un poema acróstico en hebreo: cada versículo comienza con una letra consecutiva del alefato. Este recurso literario decía que esta mujer encarna la sabiduría de la A a la Z — en su totalidad.\n\nLa frase ʾēšet ḥayil — "mujer virtuosa" — usa la palabra ḥayil, la misma que describe a los soldados valientes, los guerreros poderosos. Esta es una mujer de valor guerrero — no en sentido militar, sino alguien que enfrenta la vida con fuerza y propósito.\n\nLa tradición judía conoce este poema como "Ešet Ḥayil", cantado por los esposos a sus esposas cada viernes en el Shabat. No es una lista de tareas que cumplir — es una canción de victoria que el esposo le canta a ella, celebrando quién es.\n\nLa clave está en el v.30: yir'at YHWH — el temor del Señor. No pavor, sino una orientación fundamental de toda la vida hacia Dios. De ahí brotan todas las demás cualidades.',
teaching:'Proverbios 31 ha sido usada durante siglos para hacer sentir culpables a las mujeres. Pero cuando entiendes su género — una canción de elogio, no un manual de rendimiento — la ves diferente.\n\n"Se ríe sin temor al futuro": no porque su vida sea perfecta, sino porque su seguridad no está en las circunstancias. Está en quién la sostiene.\n\n"Está vestida de fortaleza y dignidad": son prendas interiores, no externas. Esta mujer no vale porque lo hace todo. Lo hace todo porque sabe quién es ante Dios.',
application:'De todas las características de Proverbios 31, ¿cuál sientes que más necesitas que Dios desarrolle en ti ahora mismo? No la más impresionante — la más necesaria. Escríbela y por qué.',
prayer:'Señor, quiero ser una mujer que te teme — que orienta toda su vida hacia ti. Que la fortaleza y dignidad que describe este texto sean mías no porque me las gané sino porque me las das. Que me ría sin temor al futuro porque confío en ti. Amén.',
phrase:'Me río sin temor al futuro — no porque todo esté bajo control, sino porque confío en quien sí lo está.'},

{day:14,date:'Martes, 14 de julio',week:2,title:'Reposo y reflexión',ref:'Salmo 139:13-16',
verse:'¡Gracias por hacerme tan maravillosamente compleja! Tu fino trabajo es maravilloso, lo sé muy bien.',
verseRef:'Salmo 139:14 (NTV)',
context:'El Salmo 139 es uno de los textos más personales del Salterio. La palabra hebrea sakak (v.13) — "entretejiste" — describe bordado intrincado, igual al de los ornamentos del sumo sacerdote (Éxodo 28). David no dice "Dios me ensambló" sino "Dios me bordó".\n\nLa exclamación niplē\'îm ma\'aseka — "maravilloso es tu obra" — usa la misma raíz que describe los milagros más extraordinarios de Dios en el AT. Eso eres tú para Él: una obra que entra en la categoría de lo maravilloso.\n\nLa palabra qānāh (v.13) — "creaste" — también significa "poseer con ternura". Hay un matiz de propiedad amorosa: Dios no solo te creó, sino que te posee desde el primer momento.',
teaching:'Hoy cierra la Semana 2 con este salmo porque es el fundamento de todo lo que viste esta semana: antes de que puedas hacer algo por Dios, Él ya hizo algo extraordinario contigo. Eres la obra bordada de sus manos. Eres más preciosa que los rubíes. Eres una mujer a quien Él diseñó para reflejar su carácter.\n\nEl descanso espiritual del séptimo día no es vacío — es un día de memoria intencional. David escribe "que nunca olvide" porque sabemos que olvidamos fácilmente. Esta semana te trajo verdades que el mundo trabaja constantemente para borrar.\n\nPuedes cerrar los ojos y decirle: "Me veo bordada por tus manos. Soy tu obra maravillosa." Y dejarlo ser verdad.',
application:'Mira atrás la semana. ¿Cuál día te habló más? ¿Qué verdad sobre tu valor se asentó de forma distinta? Escríbela con tus propias palabras — no como cita de un versículo, sino como algo que ahora es tuyo.',
prayer:'Padre, hoy te doy gracias por cómo me hiciste. No por lo que puedo producir — por cómo me bordaste. Que esta semana haya plantado en mí una imagen de mi valor más fuerte que la del espejo. Amén.',
phrase:'Fui bordada por manos que saben lo que hacen — y Dios llamó a su obra "maravillosa".'},

{day:15,date:'Miércoles, 15 de julio',week:3,title:'El hábito de la oración',ref:'Mateo 6:5-13',
verse:'Pero tú, cuando ores, apártate a solas, cierra la puerta detrás de ti y ora a tu Padre en privado. Entonces, tu Padre, quien todo lo ve, te recompensará.',
verseRef:'Mateo 6:6 (NTV)',
context:'El Sermón del Monte (Mateo 5-7) aborda en el capítulo 6 tres prácticas centrales del judaísmo: dar limosna, orar y ayunar. En los tres casos, el problema no es la práctica sino la motivación: hacerlo "para ser vistos".\n\nEn el siglo I, la oración judía era estructurada. Los fariseos practicaban el Amidá — dieciocho bendiciones tres veces al día — y era común hacerlo en las esquinas visibles para ser vistos. Había competencia religiosa: quien oraba más elaboradamente gozaba de mayor prestigio.\n\nJesús usa la palabra tameion (ταμεῖον) — "cuarto secreto" — que refería al almacén privado de una casa, el lugar más escondido. "Cierra la puerta" (kleisas tēn thyran): privacidad total, sin audiencia, sin rendimiento espiritual.\n\nY la promesa: "tu Padre, que ve en lo secreto, te recompensará." La recompensa no se especifica porque es relacional: en el cuarto cerrado, lo encuentras a Él.',
teaching:'Jesús no dice "si oras" sino "cuando ores" — asume la oración como parte natural de la vida. Pero critica dos distorsiones: orar para impresionar, o usar muchas palabras para convencer a un Dios que ya sabe lo que necesitas (v.8).\n\n¿Por qué orar si Dios ya sabe? Porque la oración no cambia la mente de Dios hacia nosotros — nos cambia a nosotros hacia Él. Es el mecanismo por el cual nos sintonizamos con su perspectiva, recibimos su paz y alineamos nuestros deseos con los suyos.\n\nEl Padre Nuestro que Jesús enseña no es una fórmula para recitar — es un modelo de relación: primero reconocer a quién le hablas, luego alinear tu corazón con sus prioridades, y solo entonces presentar tus necesidades.',
application:'Establece hoy un "cuarto cerrado" — un tiempo y lugar físico específico para orar. 10 minutos de consistencia valen más que una hora esporádica. ¿Cuándo y dónde será?',
prayer:'Padre, enséñame a orar de verdad — no para cumplir un requisito, sino para conocerte. Que mi cuarto cerrado sea el lugar donde más me siento yo misma, donde no hay actuación. Enséñame a escucharte tanto como a hablarte. Amén.',
phrase:'La oración no cambia la mente de Dios hacia mí — me cambia a mí hacia Él.'},

{day:16,date:'Jueves, 16 de julio',week:3,title:'Meditando en la Palabra',ref:'Josué 1:7-9',
verse:'Estudia constantemente este libro de instrucción. Medita en él de día y de noche para asegurarte de obedecer todo lo que allí está escrito. Solo entonces prosperarás.',
verseRef:'Josué 1:8 (NTV)',
context:'Este pasaje ocurre en uno de los momentos más tensos de la historia de Israel: Moisés acaba de morir y Josué tiene que liderar al pueblo a través del Jordán para conquistar Canaán. En ese contexto de máxima presión, Dios no le da un plan de batalla. Le da una instrucción: medita en mi Palabra.\n\nLa palabra hebrea hāgāh (הָגָה) para "meditar" es una palabra de movimiento sonoro — se usa para el arrullo de una paloma (Isaías 38:14), el gruñido de un león sobre su presa (Isaías 31:4). La meditación bíblica no es silenciosa — es el murmullo continuo de quien rumia una verdad, la repite en voz baja.\n\nLa promesa de v.8 — taskîl — no es éxito material, sino sabiduría en el actuar, prudencia en las decisiones, eficacia en lo que haces.',
teaching:'Hay una diferencia enorme entre leer la Biblia y meditar en ella. Leer es recibir información. Meditar es dejar que esa información se convierta en convicción, en perspectiva, en forma de ver el mundo.\n\nLa meditación bíblica no es vaciamiento mental — es llenado intencional. Tomas un versículo, lo repites, lo masticas, le preguntas: ¿qué me estás diciendo a mí, hoy, en esta situación?\n\nEn la práctica, puede ser tan simple como llevar un versículo en la mente durante el día. No necesitas dos horas de silencio. Necesitas el hábito del murmullo continuo: la Palabra como ruido de fondo positivo que va reemplazando poco a poco los otros rumores que llenan tu mente.',
application:'Elige un versículo de esta semana y repítelo 5 veces en voz alta, lentamente. Cierra los ojos y recita lo que puedas de memoria. ¿Qué palabra o imagen te quedó? Busca una manera de llevarlo en la mente el resto del día.',
prayer:'Señor, que tu Palabra no sea solo lectura sino alimento. Que meditar en ella cambie la manera en que pienso, en que reacciono, en que veo mi vida. Plántame junto a tu corriente. Amén.',
phrase:'No leo la Biblia para cumplir un requisito — la medito para que cambie cómo pienso sin que me dé cuenta.'},

{day:17,date:'Viernes, 17 de julio',week:3,title:'La gratitud como hábito',ref:'1 Tesalonicenses 5:16-18',
verse:'Estén siempre alegres. Nunca dejen de orar. Sean agradecidos en toda circunstancia, pues esta es la voluntad de Dios para ustedes.',
verseRef:'1 Tesalonicenses 5:16-18 (NTV)',
context:'Pablo escribe a Tesalónica (~50 d.C.) — probablemente la carta más temprana que tenemos. Esta comunidad enfrentaba persecución activa y presión de vivir la fe cristiana en una ciudad de fuertes lealtades al Imperio Romano.\n\nLa estructura griega es notable: tres imperativos brevísimos. La distinción crucial está en la preposición: Pablo no dice "dad gracias por todas las cosas" — dice "en toda circunstancia". La diferencia es enorme: no tienes que fingir que el dolor es bueno. Tienes que elegir gratitud dentro del dolor.\n\nLa neurociencia moderna confirma lo que la Escritura ha dicho siempre: la gratitud intencional reconfigura los circuitos neuronales. El cerebro que habitualmente busca lo que falta puede ser entrenado para notar lo que está presente.',
teaching:'La gratitud como emoción depende de las circunstancias — aparece y desaparece según cómo te va el día. La gratitud como hábito es diferente: una práctica deliberada que no espera sentir ganas. Es elegir mirar lo que hay antes de mirar lo que falta.\n\nPara el creyente, la gratitud tiene una capa adicional: es un acto de fe. Decir "gracias" en el dolor es afirmar que hay un Dios bueno que está activo incluso cuando no lo sientes. Es anclar la emoción en una verdad objetiva en lugar de en las circunstancias cambiantes.\n\nEl hábito comienza pequeño: tres cosas específicas por las que dar gracias cada día, escritas en papel. La especificidad importa — "gracias por la conversación con Sara hoy" activa más el cerebro que "gracias por todo".',
application:'Esta noche, antes de dormir, escribe 3 cosas específicas (no genéricas) por las que le das gracias a Dios hoy. Empieza así durante 7 días y observa qué cambia en tu perspectiva. Escribe las de hoy:',
prayer:'Padre, hoy elijo ver lo que diste antes de lo que falta. Gracias por lo que tengo, por quien soy y por donde estoy — aunque no siempre sea donde quiero estar. Desarrolla en mí el hábito de la gratitud que no depende del humor del día. Amén.',
phrase:'La gratitud no niega el dolor — lo ancla en la bondad de un Dios que sigue presente incluso cuando no lo siento.'},

{day:18,date:'Sábado, 18 de julio',week:3,title:'El fruto del dominio propio',ref:'Gálatas 5:22-23',
verse:'La clase de fruto que el Espíritu Santo produce en nuestra vida es: amor, alegría, paz, paciencia, gentileza, bondad, fidelidad, humildad y control propio.',
verseRef:'Gálatas 5:22-23 (NTV)',
context:'Gálatas fue escrita en respuesta a una crisis teológica: maestros judeo-cristianos argumentaban que la fe en Cristo no era suficiente — también había que cumplir la ley. Pablo responde con vehemencia: eso es abandonar el evangelio.\n\nEn capítulo 5, contrasta las "obras de la carne" con el "fruto del Espíritu". La distinción gramatical es clave: las obras están en plural (actividades que uno produce por esfuerzo); el fruto está en singular (karpos, καρπός) — una unidad de la que brotan múltiples expresiones.\n\nEnkrateia (ἐγκράτεια) — "dominio propio" — literalmente "el que se tiene a sí mismo". En la filosofía estoica griega era una virtud alcanzable solo por los más disciplinados. Pablo la reubica: no es producto del entrenamiento humano sino del Espíritu Santo trabajando desde adentro.',
teaching:'El enfoque cultural del dominio propio es la fuerza de voluntad: un recurso que se agota bajo presión, que falla cuando estás cansada o estresada.\n\nEl fruto del Espíritu funciona diferente. No se agota porque no viene de ti — viene del Espíritu que vive en ti. Tu parte es crear las condiciones en las que crece. Un árbol junto al río no produce fruto por esforzarse — produce fruto porque está plantado en el lugar correcto.\n\nEsto cambia la pregunta: no es "¿cómo me controlo más?" sino "¿qué está obstruyendo el flujo del Espíritu en esta área de mi vida?"',
application:'¿En qué área de tu vida sientes más falta de dominio propio (redes, palabras, emociones, tiempo)? ¿Qué hábito o condición obstruye el flujo del Espíritu ahí? ¿Qué puedes cambiar esta semana?',
prayer:'Espíritu Santo, produce en mí fruto de dominio propio. No en mi fuerza sino en la tuya. Muéstrame las condiciones que necesito crear para que tú puedas trabajar. Amén.',
phrase:'El dominio propio no es fuerza de voluntad que se agota — es fruto del Espíritu que crece cuando permanezco conectada a la vid.'},

{day:19,date:'Domingo, 19 de julio',week:3,title:'Renueva tu mente',ref:'Romanos 12:1-2',
verse:'No imiten las conductas ni las costumbres de este mundo, más bien dejen que Dios los transforme en personas nuevas al cambiarles la manera de pensar.',
verseRef:'Romanos 12:2 (NTV)',
context:'Pablo escribe Romanos desde Corinto (~57 d.C.). Después de once capítulos exponiendo la doctrina de la justificación, el capítulo 12 marca un giro: "por lo tanto" — toda la teología anterior conecta ahora con las implicaciones prácticas.\n\n"No se conformen" usa el griego syschēmatizō — de schēma (forma exterior). Pablo dice: no permitas que el sistema de valores del mundo te moldee desde afuera.\n\n"Sean transformados" usa metamorphoō (μεταμορφόω) — la misma palabra de la Transfiguración de Jesús (Mateo 17:2), cuando su apariencia cambió desde adentro hacia afuera. La metamorfosis ocurre desde el interior.\n\nEl mecanismo es la anakainōsis tou noos — renovación de la mente. No un evento instantáneo sino un proceso gradual de reconfiguración.',
teaching:'El cerebro humano es más plástico de lo que pensamos. Los patrones de pensamiento repetidos crean vías neuronales — surcos por donde el pensamiento fluye con menos esfuerzo cada vez. Los pensamientos habituales de miedo, insuficiencia o comparación se vuelven más automáticos con el tiempo.\n\nLa buena noticia: lo mismo ocurre en sentido contrario. La exposición repetida a la verdad de Dios crea nuevas vías neuronales. Los hábitos que exploramos esta semana son entradas de información que van reemplazando los patrones viejos.\n\nEl resultado que promete Pablo es notable: "aprenderán a conocer la voluntad de Dios" — no solo en las grandes decisiones, sino en el discernimiento cotidiano.',
application:'Identifica un patrón de pensamiento recurrente que reconoces que no viene de Dios (insuficiencia, comparación, miedo al futuro). Cuando aparezca hoy, no pelees con él — reemplázalo con un versículo específico de esta semana.',
prayer:'Señor, renueva mi mente. No solo mis acciones — lo que pienso automáticamente. Que la verdad de tu Palabra vaya reemplazando los patrones viejos. Transforma desde adentro lo que yo no puedo cambiar desde afuera. Amén.',
phrase:'Cambio de vida empieza en cambio de mente — y eso es exactamente lo que Dios promete hacer en mí.'},

{day:20,date:'Lunes, 20 de julio',week:3,title:'La comunidad que sostiene',ref:'Hebreos 10:19-25',
verse:'Y no dejemos de congregarnos, como lo hacen algunos, sino animémonos unos a otros, sobre todo ahora que el día de su regreso se acerca.',
verseRef:'Hebreos 10:25 (NTV)',
context:'La carta a los Hebreos fue escrita a creyentes judíos que consideraban abandonar la fe cristiana — en parte por presión social y persecución. El autor escribe para mostrarles que Cristo es superior al sistema levítico.\n\nLos tres imperativos de v.19-25 están en plural, dirigidos a la comunidad, no al individuo. "Animémonos" usa parakaleō (παρακαλέω) — la misma raíz que Jesús usa para el Espíritu Santo: Paráclito, el que viene al lado. La comunidad es una de las formas en que el Espíritu opera en el mundo: a través de personas que se posicionan al lado de otras para sostenerlas.\n\n"No dejemos de congregarnos" sugiere que algunos ya lo estaban haciendo. El aislamiento espiritual era una tentación real en el siglo I, como lo sigue siendo en el XXI.',
teaching:'El mito del "cristiano solitario" no tiene base bíblica. De Génesis ("no es bueno que el hombre esté solo") a Apocalipsis (una nueva comunidad sin separación), la narrativa bíblica entera es comunitaria.\n\nEl aislamiento espiritual es peligroso no porque Dios deje de estar presente, sino porque hay formas en que Dios trabaja a través de la comunidad que no puede reemplazar la soledad. El estímulo de alguien que dice "yo también lo he sentido". La responsabilidad compartida de quien te conoce de verdad.\n\nLa comunidad auténtica no es ir a un servicio una vez por semana. Es conocer y ser conocida. Es tener personas que noten cuando no estás.',
application:'¿A quién puedes animar hoy específicamente? Envía un mensaje, haz una llamada, ora por alguien por nombre. Escribe quién es y qué harás:',
prayer:'Señor, ayúdame a no intentar caminar sola. Que sepa recibir comunidad y ofrecerla. Que en mi vida haya personas que me conozcan de verdad. Amén.',
phrase:'La fe no está diseñada para vivirse sola — la comunidad no es extra, es parte del diseño.'},

{day:21,date:'Martes, 21 de julio',week:3,title:'Reposo y reflexión',ref:'Salmo 1:1-3',
verse:'Son como árboles plantados a la orilla de un río, que siempre dan fruto en su tiempo. Sus hojas nunca se marchitan, y prosperan en todo lo que hacen.',
verseRef:'Salmo 1:3 (NTV)',
context:'El Salmo 1 fue puesto deliberadamente al inicio de todo el Salterio como una declaración de principios. Antes de los lamentos, los himnos y los salmos reales, el editor dice: aquí está el fundamento.\n\nLa imagen del árbol plantado junto a corrientes de agua es una imagen de vida en el Medio Oriente donde el agua es escasa. Un árbol junto al río no depende de las lluvias — tiene acceso permanente a una fuente que no se agota.\n\nEl verbo hāgāh (meditar, v.2) es el mismo de Josué 1:8 — el murmullo continuo. La palabra ʾašrê que abre el salmo — "Bienaventurado" — está en plural en hebreo: la plenitud que describe es multidimensional, abarca toda la vida.',
teaching:'Esta semana exploraste seis hábitos: oración, meditación en la Palabra, gratitud, dominio propio, renovación de la mente, comunidad. Ninguno es magia. Todos comparten una lógica común: son formas de mantenerte plantada junto a la fuente correcta.\n\nEl árbol de Salmo 1 no da fruto por esforzarse — da fruto porque sus raíces llegan al agua. Tu parte no es producir fruto; tu parte es asegurarte de que tus raíces lleguen a Dios.\n\nHoy, en el día de reposo, no hay nueva instrucción. Solo hay espacio para mirar atrás y notar: ¿dónde estoy más enraizada? ¿qué está bloqueando las raíces?',
application:'Revisa los hábitos de esta semana. ¿Cuál se te hizo más fácil? ¿Cuál más difícil? ¿Cuál quieres comprometerte a practicar durante el resto de julio?',
prayer:'Señor, quiero ser ese árbol plantado junto a tu corriente. Que los hábitos que cultivo sean raíces reales, no actuación religiosa. Gracias porque mientras yo intento acercarme, tú ya estás ahí. Amén.',
phrase:'Mis hábitos espirituales no me dan el amor de Dios — me acercan a la corriente que ya fluye desde siempre.'},

{day:22,date:'Miércoles, 22 de julio',week:4,title:'Abba Padre',ref:'Romanos 8:14-17',
verse:'Pues todos los que son guiados por el Espíritu de Dios son hijos de Dios. Ahora lo llamamos «Abba, Padre».',
verseRef:'Romanos 8:14-15 (NTV)',
context:'La palabra Abba (אַבָּא) es arameo — el idioma que hablaba Jesús en su vida diaria. La usó en el momento de mayor angustia: en Getsemaní, la noche antes de la crucifixión, oró "Abba, Padre, todo es posible para ti" (Marcos 14:36).\n\nEn el contexto judío del siglo I, "Abba" era usada por los niños pequeños para dirigirse a su padre en el hogar — la forma infantil y familiar, equivalente a "papi" en español. Que Jesús usara esta palabra para dirigirse a Dios era teológicamente escandaloso.\n\nPablo dice que el Espíritu produce en nosotros el mismo impulso. Y la imagen de la adopción (huiothesia, υἱοθεσία) es especialmente rica: en Roma, la adopción era uno de los actos legales más vinculantes. El hijo adoptado recibía los mismos derechos que el natural, y la adopción era irrevocable.',
teaching:'No han recibido un espíritu de esclavitud para volver al miedo — esta frase describe dos formas de relacionarse con Dios. Una basada en el miedo (el esclavo que sirve por temor al castigo) y otra basada en el amor y la pertenencia (el hijo que vive desde la seguridad de ser amado).\n\nMuchos creyentes viven en "orfandad espiritual": técnicamente adoptados pero emocionalmente funcionando como huérfanos. Sirven a Dios por miedo a su desaprobación. Nunca logran relajarse en su presencia.\n\nLa intimidad que Dios ofrece es diferente: la del niño que entra al cuarto de su padre sin pedir cita. "Abba" no es una palabra de protocolo — es una palabra de confianza.',
application:'Hoy, en tu momento de oración, empieza solo con esta palabra: "Abba." Quédate en silencio por un minuto. ¿Qué sentiste? ¿Fue fácil o difícil? ¿Qué te dice eso sobre cómo te relacionas con Dios?',
prayer:'Abba Padre, gracias porque soy tu hija — no tu empleada, no tu visitante. Gracias porque me adoptaste con todos los derechos y nada puede quitarme ese nombre. Enséñame a vivir desde esa realidad, no solo a conocerla. Amén.',
phrase:'No soy empleada de Dios — soy su hija adoptada, con todos los derechos y para siempre.'},

{day:23,date:'Jueves, 23 de julio',week:4,title:'Orar en lo secreto',ref:'Mateo 6:6',
verse:'Pero tú, cuando ores, apártate a solas, cierra la puerta detrás de ti y ora a tu Padre en privado. Entonces, tu Padre, quien todo lo ve, te recompensará.',
verseRef:'Mateo 6:6 (NTV)',
context:'Volvemos a Mateo 6:6, pero desde el ángulo de la promesa en lugar de la corrección. La palabra tameion — "cuarto secreto" — describe el almacén privado de una casa, donde se guardaba lo más valioso. El tesoro. Jesús dice que el lugar más privado de tu vida es donde encuentras al Padre.\n\nLa recompensa que promete Jesús no se detalla. No dice "te concederá lo que pidas" ni "tendrás éxito". La recompensa de la oración secreta no puede ser material porque nadie más sabe que oraste — por definición, no puedes mostrarla. La recompensa es relacional: en el cuarto cerrado, encuentras al Padre de una manera que no encuentras en ningún otro lugar.\n\nHay una teología del ocultamiento: "el que ve en lo secreto" implica que Dios habita particularmente en los espacios que el mundo no ve.',
teaching:'Hay cosas que solo ocurren en el cuarto cerrado. No porque Dios esté más presente ahí — sino porque tú estás más presente. Sin audiencia, sin imagen que mantener, sin distracción del rendimiento espiritual.\n\nLa tentación de la generación digital es exactamente la contraria: hacer públicas hasta las experiencias espirituales, compartir los versículos, postear la oración. No hay nada malo en compartir. Pero si la vida de oración se vuelve material para las redes, algo se ha perdido.\n\nLo que construyes en privado con Dios es lo que sostiene todo lo demás. La fe visible viene de la intimidad invisible.',
application:'Esta semana, elige un lugar físico específico para tu oración privada. Puede ser un rincón de tu habitación, una silla, un espacio en el balcón. Nómbralo. Comprométete a ir ahí al menos 5 veces esta semana.',
prayer:'Padre, enséñame a amar el cuarto cerrado. A no buscar audiencia para mi vida espiritual. Que lo que construyo en privado contigo sea lo más real de todo lo que soy. Amén.',
phrase:'La intimidad con Dios se construye en los momentos que nadie más ve — y esos son los más reales de todos.'},

{day:24,date:'Viernes, 24 de julio',week:4,title:'Conocida por su nombre',ref:'Juan 10:11-15',
verse:'Yo soy el buen pastor; conozco a mis ovejas, y ellas me conocen a mí, así como mi Padre me conoce a mí y yo conozco al Padre.',
verseRef:'Juan 10:14-15 (NTV)',
context:'En el mundo mediterráneo del siglo I, el pastoreo era una de las profesiones más humildes pero también más representativas del cuidado personal. Un pastor en Israel caminaba delante de sus ovejas, las llamaba por nombre y ellas reconocían su voz entre cientos.\n\nJesús usa dos palabras griegas diferentes para "conocer". Aquí usa ginōskō (γινώσκω) — conocimiento experiencial y relacional, que crece con el tiempo. No es solo conocer datos sobre alguien — es conocer a alguien de la manera en que conoces a una persona íntima.\n\nLa profundidad se compara con el conocimiento mutuo entre el Padre y el Hijo: "así como mi Padre me conoce a mí". Esta es la escala de la intimidad que Jesús ofrece — no una relación religiosa de bajo nivel, sino algo comparable a la comunión trinitaria.',
teaching:'Ser completamente conocida y seguir siendo amada es lo que todos más anhelamos y más tememos. Nos expone a la posibilidad del rechazo. Por eso muchos mantienen distancias cuidadosas incluso con las personas más cercanas.\n\nJesús dice que te conoce como el buen pastor conoce a sus ovejas — por nombre, por voz, por particularidades. El conocimiento que Él tiene de ti no es la versión genérica de "cristiana": es la versión específica de quién eres, con tu historia, tus miedos, tus momentos de gloria y tus vergüenzas.\n\nY te conoce así y sigue eligiéndote.',
application:'Escribe: "Jesús me conoce — [algo que sabes que Él ve en ti que la mayoría no ve, bueno o difícil]". Deja que el conocimiento de Jesús sea más real que tu autocrítica. ¿Qué cambia si lo crees?',
prayer:'Jesús, gracias porque me conoces a mí — no la versión que muestro en público, sino la real. Gracias porque ese conocimiento no te alejó sino que te acercó. Que yo te conozca a ti de la misma manera. Amén.',
phrase:'No soy un número en la lista de Dios — soy conocida por nombre por el Buen Pastor que eligió ir a buscarme.'},

{day:25,date:'Sábado, 25 de julio',week:4,title:'La oración de Jesús por ti',ref:'Juan 17:20-26',
verse:'No te pido solo por estos discípulos, sino también por todos los que creerán en mí por el mensaje de ellos.',
verseRef:'Juan 17:20 (NTV)',
context:'Juan 17 es la "oración sumo-sacerdotal" de Jesús — la oración más larga registrada en los evangelios. Ocurre la noche antes de la crucifixión, después de la Última Cena. Jesús sabe lo que viene: la traición ya está en marcha.\n\nEn ese contexto, en los versículos 20-26, amplía la oración más allá de los Once que están con él. "No te pido solo por estos discípulos, sino también por todos los que creerán en mí por el mensaje de ellos." Sabía que habría generaciones de creyentes que leerían este texto. Tú eres una de ellas.\n\nLa palabra theōreō (θεωρέω) en v.24 — "que contemplen mi gloria" — no describe una mirada rápida. Es la contemplación sostenida que transforma al que mira. Y la petición final es la más íntima: "quiero que los que me diste estén conmigo donde yo estoy." El verbo "quiero" (thelō) expresa deseo profundo.',
teaching:'Jesús pensó en ti específicamente esa noche. No en general, no en una categoría vaga de "futuros creyentes" — sino en ti, que leerías esto algún día. Te incluyó en su oración con la misma intención con que un padre ora por su hijo que aún no ha nacido.\n\nEsto cambia la oración que haces tú. No oras hacia un Dios que no sabe que existes, que necesita que le recuerdes tus necesidades. Oras a un Padre cuyo Hijo ya oró por ti antes de que supieras que necesitabas oración.\n\nLa meta no es un lugar: es la compañía. "Quiero que estén conmigo donde yo estoy." Jesús quiere tu compañía.',
application:'Lee Juan 17:20-26 despacio, en voz alta, como si fuera una carta dirigida a ti. Detente en cada frase. ¿Cuál te impacta más? Escríbela y explica por qué.',
prayer:'Jesús, gracias porque pensaste en mí esa noche antes de la cruz. Gracias porque tu oración me incluyó. Que yo sea alguien que quiere estar donde tú estás — no solo en el futuro sino ahora. Amén.',
phrase:'Jesús me incluyó en su oración la noche antes de morir — quiere mi compañía, no solo mi obediencia.'},

{day:26,date:'Domingo, 26 de julio',week:4,title:'Permanece en mí',ref:'Juan 15:1-8',
verse:'Permanezcan en mí, y yo permaneceré en ustedes. Pues una rama no puede producir fruto si la cortan de la vid, y ustedes tampoco pueden ser fructíferos a menos que permanezcan en mí.',
verseRef:'Juan 15:4 (NTV)',
context:'La imagen de la vid es una de las más arraigadas de toda la Escritura. En el AT, la vid era el símbolo de Israel (Isaías 5:1-7, Salmo 80:8-16). Pero siempre con la misma tragedia: Israel como vid que no dio el fruto esperado.\n\nJesús hace una afirmación radical: "Yo soy la vid verdadera" — no Israel como nación, sino Él mismo. El verbo menō (μένω) aparece once veces en Juan 15:1-11. Implica residencia permanente, no visita ocasional.\n\nLa fisiología de la vid es relevante: una rama separada puede mantenerse verde por días. Desde afuera parece viva. Pero el proceso de muerte comenzó en el momento en que fue cortada. Jesús usa esto para describir una realidad espiritual: es posible parecer productivo por un tiempo sin estar verdaderamente conectada.',
teaching:'"Sin mí nada podéis hacer" — no es un reclamo divino de poder sino una descripción de cómo fue diseñada la creación: el fruto significativo viene de la conexión con la fuente correcta.\n\nPermanecer en Cristo no es pasivo. El verbo está en imperativo: "¡Permanezcan!" Hay una decisión activa de mantenerse conectada, de resistir la gravedad del mundo que nos atrae hacia otros centros.\n\nY la promesa es doble: "permanezcan en mí, y yo permaneceré en ustedes". Tu permanencia en Él activa su permanencia en ti. No es relación unilateral — es un pacto de mutua presencia.',
application:'¿Qué acción concreta puedes tomar hoy para "permanecer" activamente en Cristo — no en teoría sino en práctica? Escoge una y escríbela con el horario de cuándo la harás.',
prayer:'Jesús, quiero permanecer en ti — no visitarte de vez en cuando sino residir en ti. Que mis hábitos diarios sean formas de mantenerme conectada a la vid. Que el fruto de mi vida venga de ti. Amén.',
phrase:'El fruto no viene del esfuerzo — viene de permanecer conectada a la fuente que nunca se agota.'},

{day:27,date:'Lunes, 27 de julio',week:4,title:'Busca primero su reino',ref:'Mateo 6:25-34',
verse:'Busquen el reino de Dios por encima de todo lo demás y lleven una vida justa, y él les dará todo lo que necesiten.',
verseRef:'Mateo 6:33 (NTV)',
context:'El contexto inmediato es la enseñanza de Jesús sobre la ansiedad. La palabra griega merimnāō (μεριμνάω) — "preocuparse" — viene de merizo (dividir) + nous (mente): la ansiedad es una mente dividida, tirada en múltiples direcciones.\n\nJesús no condena la ansiedad — la entiende. Las ilustraciones de los pájaros y las flores no trivializan el problema sino que abren una teología de la provisión: si el Padre cuida de lo que no le puede pedir nada, cuánto más cuidará de sus hijos.\n\n"Busquen primero" usa zēteite prōton: la palabra "primero" no describe solo prioridad en el tiempo sino primacía en el orden de importancia. El "reino de Dios" en Mateo no es solo el cielo futuro — es el reinado de Dios manifestándose aquí y ahora.',
teaching:'La ansiedad es el resultado natural de un corazón sin centro. Cuando el centro de gravedad de tu vida son las circunstancias (el trabajo, las relaciones, la salud), vives a merced de su vaivén. Cuando hay algo que permanece estable en el centro — el reino de Dios, su presencia — las circunstancias no tienen el mismo poder de desestabilizarte.\n\n"Él les dará todo lo que necesiten" no es una promesa de prosperidad material. Es una promesa de providencia: las necesidades reales serán provistas. No todas las que queremos — todas las que necesitamos.\n\nBuscar primero el reino es una orientación que se renueva constantemente. Cada mañana hay una pregunta previa: ¿lo primero hoy es su reino o son mis circunstancias?',
application:'Lista tus principales preocupaciones de esta semana. Al lado de cada una escribe: "Padre, ¿cómo se ve tu reino en esto?" No para tener respuestas inmediatas — para reorientar el corazón.',
prayer:'Padre, ayúdame a buscar primero tu reino — como la reorientación de todo lo demás. Que cuando la ansiedad aparezca, la primera pregunta no sea "¿cómo lo resuelvo?" sino "¿dónde estás tú en esto?" Amén.',
phrase:'Cuando busco primero su reino, todo lo demás encuentra su lugar correcto — es promesa, no teoría.'},

{day:28,date:'Martes, 28 de julio',week:4,title:'Reposo y reflexión',ref:'Salmo 27:1-4',
verse:'Lo único que le pido al SEÑOR — lo que más anhelo — es vivir en la casa del SEÑOR todos los días de mi vida, deleitándome en la perfección del SEÑOR.',
verseRef:'Salmo 27:4 (NTV)',
context:'El Salmo 27 es singular: los primeros seis versículos expresan confianza victoriosa ("el SEÑOR es mi luz"), mientras los versículos 7-14 son una oración angustiada ("¡No me abandones!"). Fe que afirma y fe que lucha conviven en el mismo salmo.\n\nEl versículo 4 es el momento central: en medio de todo, David identifica una sola cosa. ʾaḥat šāʾaltî en hebreo: "una sola cosa he pedido." No doce cosas — una.\n\nLa palabra la\'ot — "contemplar" — describe una mirada sostenida y placentera, la forma en que un amante mira a la persona amada. No el turista que pasa rápido — el que se sienta y mira sin prisa.',
teaching:'Esta semana exploraste la intimidad con el Padre: llamarlo Abba, orar en lo secreto, ser conocida por nombre, estar en la oración de Jesús, permanecer en la vid, buscar primero su reino.\n\nHoy cierra con la pregunta más importante de David: ¿qué es lo que más anhelas? No lo que deberías anhelar — lo que realmente anhelas cuando eres honesta.\n\nLa intimidad con Dios no se produce por obligación. Se produce cuando el corazón genuinamente quiere estar cerca de Él. El "una sola cosa" de David puede ser también el tuyo.',
application:'Escribe honestamente: ¿qué es lo que más anhelas en este momento de tu vida? ¿Cómo se compara con el anhelo de David por la presencia de Dios? No hay respuesta correcta — solo honestidad.',
prayer:'Señor, pido que desee lo que David deseaba. Que la intimidad contigo sea el fin, no el medio. Que lo que más quiera sea estar en tu presencia. Amén.',
phrase:'La intimidad con Dios no es medio para otro fin — es el fin mismo, y el más satisfactorio.'},

{day:29,date:'Miércoles, 29 de julio',week:5,title:'El Consolador prometido',ref:'Juan 14:15-21',
verse:'Y yo le pediré al Padre, y él les dará otro Abogado Defensor, quien estará con ustedes para siempre. Me refiero al Espíritu Santo, quien guía a toda la verdad.',
verseRef:'Juan 14:16-17 (NTV)',
context:'Juan 14 ocurre en el aposento alto, la noche antes de la crucifixión. Jesús anuncia su partida y los discípulos están desestabilizados. La sección 14-16 es su respuesta al miedo: no se van a quedar solos.\n\nParaklētos (Παράκλητος) — "Abogado Defensor" en NTV, "Consolador" en RVR1960 — es prácticamente intraducible. Literalmente: "el que es llamado al lado de" para ayudar, defender, consolar, abogar.\n\nLa palabra "otro" es allos (ἄλλος) — otro del mismo tipo, no de tipo diferente. El Espíritu Santo no es un sustituto inferior de Jesús.\n\nLa distinción más radical: antes el Espíritu estaba "con" ellos; después de Pentecostés vendría a vivir "en" ellos. La intimidad subió de nivel.',
teaching:'El Espíritu Santo es probablemente la Persona de la Trinidad menos conocida. Para algunos es una fuerza impersonal. Para otros, un dispensador de experiencias emocionales. Para otros, irrelevante en lo práctico.\n\nPero Jesús lo describe como un Paraklētos: una Persona que toma posición activa a tu lado. No un poder que invocas en emergencias — una Persona que ya está ahí, que ya habita en ti, que ya trabaja en lo que no puedes ver.\n\nLa promesa es de permanencia: "estará con ustedes para siempre." No abandona cuando fallas, no se retira cuando dudas. Conocer al Espíritu Santo es aprender a notar quién ya está ahí.',
application:'Hoy, antes de tomar una decisión (grande o pequeña), di en voz baja: "Espíritu Santo, tú estás aquí. Guíame." Al final del día, escribe un momento en que sentiste que lo reconociste.',
prayer:'Espíritu Santo, gracias porque estás aquí — a mi lado, en mí. No eres abstracto ni lejano. Eres real y personal. Que aprenda a reconocerte y seguirte cada día. Amén.',
phrase:'El Espíritu Santo no es una fuerza que invoco — es una Persona que siempre está a mi lado.'},

{day:30,date:'Jueves, 30 de julio',week:5,title:'El Espíritu que intercede',ref:'Romanos 8:26-28',
verse:'Y el Espíritu Santo nos ayuda en nuestra debilidad. Nosotros no sabemos qué quiere Dios que le pidamos en oración, pero el Espíritu Santo ora por nosotros con gemidos que no pueden expresarse con palabras.',
verseRef:'Romanos 8:26 (NTV)',
context:'Romanos 8 habla de las "primicias del Espíritu" (v.23) — el Espíritu como anticipo de la redención completa. Toda la creación gime (v.22), los creyentes gemimos (v.23), y ahora el Espíritu mismo intercede con "gemidos que no pueden expresarse con palabras".\n\nLa palabra huperentynchanei (ὑπερεντυγχάνει) es única en el NT: "hyper" (superlativamente) + "en" + "tynchanō" (alcanzar). El Espíritu intercede con una profundidad que va más allá de lo articulable.\n\nLos stenagmois alalētois — "gemidos que no pueden expresarse" — describen comunicación que trasciende el lenguaje humano. No es que Dios no entienda el idioma — es que hay realidades del corazón tan profundas que ningún idioma las alcanza. El Espíritu las lleva al Padre en su propio idioma.',
teaching:'Hay momentos donde las palabras no alcanzan. El dolor es demasiado grande. La situación demasiado compleja. Abres la boca para orar y no sale nada coherente.\n\nPablo no dice que eso es un problema espiritual. Dice que para eso exactamente está el Espíritu. Cuando tú no tienes vocabulario, el Espíritu tiene el suyo. Lleva al Padre lo que tú no puedes articular — con una precisión que supera cualquier oración que tú pudieras formular.\n\n"Sabemos que Dios hace que todas las cosas cooperen para el bien" (v.28) viene justo después. Las cosas cooperan para bien porque hay alguien que está orando incluso cuando tú no puedes.',
application:'La próxima vez que no sepas cómo orar, siéntate en silencio por 3 minutos y di solo: "Espíritu Santo, tú intercede por mí en esto." Escribe hoy una situación donde no sabes cómo orar, y entrégasela al Espíritu con esa frase.',
prayer:'Espíritu Santo, gracias porque oras por mí cuando no tengo palabras. Hoy te entrego lo que no puedo articular. Confío en que tú lo llevas al Padre perfectamente. Amén.',
phrase:'Cuando no tengo palabras, el Espíritu tiene las suyas — y ora por mí con una profundidad que yo no alcanzo.'},

{day:31,date:'Viernes, 31 de julio',week:5,title:'Sellada con el Espíritu',ref:'Efesios 1:11-14',
verse:'Y cuando creyeron en Cristo, Dios los identificó como suyos dándoles el Espíritu Santo. El Espíritu es la garantía de que Dios cumplirá su promesa.',
verseRef:'Efesios 1:13-14 (NTV)',
context:'Cerramos julio con el mismo libro con que comenzamos la semana 2: Efesios. La carta que habla de nuestra identidad como obra maestra de Dios también habla del sello que marca esa identidad como permanente.\n\nSphragizō (σφραγίζω) — "sellar" — tenía varios usos: los reyes sellaban documentos para autenticar su autoridad, los comerciantes sellaban mercancías para marcar propiedad. Un sello era una declaración que nadie podía ignorar: esto pertenece a alguien poderoso.\n\nArrabōn (ἀρραβών) — "garantía" o "arras" — era un término comercial: el depósito inicial que comprometía legalmente a un comprador, el pago inicial que garantizaba que la transacción se completaría. El Espíritu no es la totalidad de la herencia — es el anticipo que garantiza que la herencia completa llegará.',
teaching:'Julio termina con esta promesa: estás sellada. No condicionalmente — sellada. El Espíritu que vive en ti es la declaración divina de que perteneces a Dios, que Él completará lo que comenzó.\n\nY eres el anticipo. Todo lo que has experimentado de Dios este mes es solo el depósito inicial de una relación que se mueve hacia algo que Juan llama "morar con Él" de manera permanente y completa (Apocalipsis 21:3).\n\nJulio no fue perfecto. Hubieron días que se perdieron. El sello no depende de tu consistencia — depende de su fidelidad. Dios no retira el sello cuando fallas. Lo reafirma.',
application:'Cierra julio escribiendo lo que Dios hizo en ti este mes — no lo que lograste tú, sino lo que Él hizo. Una verdad que se asentó. Un hábito que comenzó. Una imagen de Dios que cambió. Un momento de su presencia.',
prayer:'Padre, gracias por julio. Gracias porque el Espíritu me sella como tuya — en los días buenos y en los que fallé. Lo que comenzaste en mí este mes, termínalo. Lo que plantaste, riégalo. En el nombre de Jesús, amén.',
phrase:'El Espíritu que vive en mí es el anticipo de todo lo que Dios prometió — y Él siempre cumple lo que promete.'},
];

// ═══ CALENDAR DATA ════════════════════════════════════════════════════
const CAL = [[null,null,1,2,3,4,5],[6,7,8,9,10,11,12],[13,14,15,16,17,18,19],[20,21,22,23,24,25,26],[27,28,29,30,31,null,null]];
const DAY_NAMES = ['L','M','M','J','V','S','D'];

// ═══ COMPONENTS ═══════════════════════════════════════════════════════
const s = (obj) => obj; // inline style helper

function Section({label, color, children}) {
  return (
    <div style={{marginBottom:24}}>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
        <div style={{width:3,height:14,background:color,borderRadius:2}}/>
        <span style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color,letterSpacing:2,textTransform:'uppercase'}}>{label}</span>
      </div>
      {children}
    </div>
  );
}

function VerseCard({verse, verseRef, light, color}) {
  return (
    <div style={{background:light,borderRadius:12,padding:'16px 18px',marginBottom:20}}>
      <p style={{fontFamily:'Lora',fontStyle:'italic',fontSize:15,color:'#1C2B3A',lineHeight:1.7,margin:'0 0 10px'}}>&ldquo;{verse}&rdquo;</p>
      <span style={{fontFamily:'Poppins',fontWeight:600,fontSize:10,color,letterSpacing:1}}>{verseRef}</span>
    </div>
  );
}

function DayScreen({day, onBack, onNext, onPrev, onComplete, isCompleted}) {
  const wk = W[day.week];
  return (
    <div style={{minHeight:'100vh',background:'#FAFAF7',fontFamily:'Poppins'}}>
      {/* Sticky Header */}
      <div style={{position:'sticky',top:0,zIndex:10,background:wk.c,padding:'12px 18px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <button onClick={onBack} style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:8,padding:'6px 12px',color:'white',cursor:'pointer',fontFamily:'Poppins',fontSize:13,display:'flex',alignItems:'center',gap:6}}>
          ← Inicio
        </button>
        <div style={{textAlign:'center'}}>
          <div style={{fontFamily:'Poppins',fontWeight:700,fontSize:15,color:'white'}}>Día {day.day}</div>
          <div style={{fontFamily:'Poppins',fontSize:10,color:'rgba(255,255,255,0.75)',letterSpacing:1}}>{wk.emoji} {wk.name}</div>
        </div>
        <div style={{width:68}}/>
      </div>

      {/* Content */}
      <div style={{padding:'24px 20px 40px',maxWidth:480,margin:'0 auto'}}>
        {/* Date + Title */}
        <div style={{marginBottom:20}}>
          <p style={{fontFamily:'Poppins',fontSize:11,color:'#9AAAB5',letterSpacing:1,margin:'0 0 6px'}}>{day.date.toUpperCase()}</p>
          <h1 style={{fontFamily:'Lora',fontSize:24,color:'#1C2B3A',margin:'0 0 4px',lineHeight:1.2}}>{day.title}</h1>
          <p style={{fontFamily:'Poppins',fontSize:11,color:wk.c,fontWeight:600,margin:0}}>📖 {day.ref}</p>
        </div>

        <VerseCard verse={day.verse} verseRef={day.verseRef} light={wk.l} color={wk.c}/>

        <Section label="Contexto histórico-bíblico" color={wk.c}>
          {day.context.split('\n\n').map((p,i) => (
            <p key={i} style={{fontFamily:'Poppins',fontSize:13,color:'#3D4E5E',lineHeight:1.75,margin:'0 0 12px'}} dangerouslySetInnerHTML={{__html:p.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}}/>
          ))}
        </Section>

        <Section label="Enseñanza del día" color={wk.c}>
          {day.teaching.split('\n\n').map((p,i) => (
            <p key={i} style={{fontFamily:'Poppins',fontSize:13,color:'#3D4E5E',lineHeight:1.75,margin:'0 0 12px'}}>{p}</p>
          ))}
        </Section>

        {/* Application */}
        <div style={{background:'#F5F2EE',borderRadius:12,padding:'16px 18px',marginBottom:24}}>
          <div style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color:wk.c,letterSpacing:2,textTransform:'uppercase',marginBottom:10}}>→ Aplicación</div>
          <p style={{fontFamily:'Poppins',fontSize:13,color:'#3D4E5E',lineHeight:1.7,margin:'0 0 14px'}}>{day.application}</p>
          {[...Array(4)].map((_,i) => (
            <div key={i} style={{borderBottom:'1.5px solid #D4CFC7',marginBottom:18,minHeight:24}}/>
          ))}
        </div>

        <Section label="🙏 Oración" color={wk.c}>
          <p style={{fontFamily:'Poppins',fontStyle:'italic',fontSize:13,color:'#3D4E5E',lineHeight:1.75,margin:0}}>{day.prayer}</p>
        </Section>

        {/* Phrase */}
        <div style={{background:wk.c,borderRadius:14,padding:'18px 20px',marginBottom:28}}>
          <div style={{fontFamily:'Poppins',fontSize:10,color:'rgba(255,255,255,0.65)',letterSpacing:2,textTransform:'uppercase',marginBottom:8}}>💎 Para no olvidar</div>
          <p style={{fontFamily:'Lora',fontStyle:'italic',fontSize:15,color:'white',lineHeight:1.5,margin:0}}>&ldquo;{day.phrase}&rdquo;</p>
        </div>

        {/* Notes */}
        <div style={{marginBottom:32}}>
          <div style={{fontFamily:'Poppins',fontSize:10,color:'#B0A898',letterSpacing:2,textTransform:'uppercase',marginBottom:12}}>✏ Mis notas</div>
          {[...Array(5)].map((_,i) => (
            <div key={i} style={{borderBottom:'1.5px solid #E0DCD4',marginBottom:20,minHeight:28}}/>
          ))}
        </div>

        {/* Complete button */}
        <button onClick={onComplete} style={{
          width:'100%',padding:'16px',borderRadius:12,border:'none',cursor:'pointer',
          background: isCompleted ? '#6B9E8A' : wk.c,
          color:'white',fontFamily:'Poppins',fontWeight:700,fontSize:15,
          transition:'all 0.2s',marginBottom:16
        }}>
          {isCompleted ? '✓ Completado' : 'Marcar como completado'}
        </button>

        {/* Nav buttons */}
        <div style={{display:'flex',gap:12}}>
          <button onClick={onPrev} style={{flex:1,padding:'12px',borderRadius:10,border:`1.5px solid ${wk.c}`,background:'transparent',color:wk.c,fontFamily:'Poppins',fontWeight:600,fontSize:13,cursor:'pointer'}}>
            ← Día anterior
          </button>
          <button onClick={onNext} style={{flex:1,padding:'12px',borderRadius:10,border:`1.5px solid ${wk.c}`,background:'transparent',color:wk.c,fontFamily:'Poppins',fontWeight:600,fontSize:13,cursor:'pointer'}}>
            Día siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

function WeekIntroScreen({weekNum, onBack, onStartDay}) {
  const wk = W[weekNum];
  const wi = WI[weekNum];
  const days = DAYS.filter(d => d.week === weekNum);
  return (
    <div style={{minHeight:'100vh',background:'#FAFAF7',fontFamily:'Poppins'}}>
      {/* Header */}
      <div style={{background:wk.c,padding:'20px 20px 24px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-30,right:-20,width:100,height:100,borderRadius:'50%',background:'rgba(255,255,255,0.09)'}}/>
        <button onClick={onBack} style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:8,padding:'6px 12px',color:'white',cursor:'pointer',fontFamily:'Poppins',fontSize:13,marginBottom:16}}>← Inicio</button>
        <p style={{fontFamily:'Poppins',fontWeight:300,fontSize:11,color:'rgba(255,255,255,0.65)',letterSpacing:4,textTransform:'uppercase',margin:'0 0 8px'}}>Semana {weekNum}</p>
        <h1 style={{fontFamily:'Lora',fontStyle:'italic',fontSize:22,color:'white',margin:'0 0 4px'}}>{wk.emoji} {wk.name}</h1>
        <p style={{fontFamily:'Poppins',fontSize:11,color:'rgba(255,255,255,0.6)',letterSpacing:2,margin:0}}>{wk.days[0]} – {wk.days[wk.days.length-1]} de julio</p>
      </div>

      <div style={{padding:'24px 20px',maxWidth:480,margin:'0 auto'}}>
        <p style={{fontFamily:'Poppins',fontSize:13.5,color:'#3D4E5E',lineHeight:1.75,marginBottom:20}}>{wi.text}</p>

        {/* Verse */}
        <div style={{background:wk.l,borderLeft:`4px solid ${wk.c}`,borderRadius:'0 10px 10px 0',padding:'14px 16px',marginBottom:24}}>
          <p style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color:wk.c,letterSpacing:2,textTransform:'uppercase',margin:'0 0 8px'}}>Versículo ancla</p>
          <p style={{fontFamily:'Lora',fontStyle:'italic',fontSize:14,color:'#1C2B3A',lineHeight:1.65,margin:'0 0 8px'}}>{wi.verse}</p>
          <p style={{fontFamily:'Poppins',fontSize:11,color:'#9AAAB5',margin:0}}>{wi.ref}</p>
        </div>

        {/* Day list */}
        <p style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color:'#9AAAB5',letterSpacing:2,textTransform:'uppercase',marginBottom:14}}>Días de esta semana</p>
        <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:28}}>
          {days.map(d => (
            <button key={d.day} onClick={() => onStartDay(d.day)} style={{
              display:'flex',alignItems:'center',gap:14,padding:'14px 16px',
              background:'white',border:`1.5px solid ${wk.l}`,borderRadius:12,cursor:'pointer',
              textAlign:'left',width:'100%',transition:'all 0.15s'
            }}>
              <div style={{width:36,height:36,borderRadius:10,background:wk.c,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <span style={{fontFamily:'Poppins',fontWeight:700,fontSize:14,color:'white'}}>{d.day}</span>
              </div>
              <div>
                <p style={{fontFamily:'Poppins',fontWeight:600,fontSize:13,color:'#1C2B3A',margin:'0 0 2px'}}>{d.title}</p>
                <p style={{fontFamily:'Poppins',fontSize:11,color:'#9AAAB5',margin:0}}>{d.ref}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeScreen({onOpenDay, onOpenWeek, completed}) {
  const total = DAYS.length;
  const done = completed.size;
  const pct = Math.round((done / total) * 100);

  return (
    <div style={{minHeight:'100vh',background:'#FAFAF7',fontFamily:'Poppins'}}>
      {/* Header */}
      <div style={{background:'linear-gradient(135deg,#5A7F93,#7B9FB0)',padding:'28px 20px 24px',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:-20,right:-15,width:80,height:80,borderRadius:'50%',background:'rgba(255,255,255,0.08)'}}/>
        <p style={{fontFamily:'Poppins',fontWeight:300,fontSize:11,color:'rgba(255,255,255,0.65)',letterSpacing:3,textTransform:'uppercase',margin:'0 0 4px'}}>Devocional</p>
        <h1 style={{fontFamily:'Lora',fontStyle:'italic',fontSize:26,color:'white',margin:'0 0 16px'}}>Julio 2026</h1>
        {/* Progress */}
        <div style={{background:'rgba(255,255,255,0.15)',borderRadius:8,padding:'10px 14px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
            <span style={{fontFamily:'Poppins',fontSize:11,color:'rgba(255,255,255,0.8)'}}>Progreso del mes</span>
            <span style={{fontFamily:'Poppins',fontWeight:700,fontSize:13,color:'white'}}>{done}/{total} días</span>
          </div>
          <div style={{height:6,background:'rgba(255,255,255,0.25)',borderRadius:3,overflow:'hidden'}}>
            <div style={{height:'100%',width:`${pct}%`,background:'white',borderRadius:3,transition:'width 0.5s'}}/>
          </div>
        </div>
      </div>

      <div style={{padding:'20px',maxWidth:480,margin:'0 auto'}}>
        {/* Calendar */}
        <div style={{marginBottom:24}}>
          <p style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color:'#9AAAB5',letterSpacing:2,textTransform:'uppercase',margin:'0 0 12px'}}>Calendario julio</p>
          <div style={{background:'white',borderRadius:14,overflow:'hidden',border:'1px solid #EEE'}}>
            {/* Day names */}
            <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',background:'#F5F4F0'}}>
              {DAY_NAMES.map(d => (
                <div key={d} style={{textAlign:'center',padding:'8px 0',fontFamily:'Poppins',fontWeight:600,fontSize:10,color:'#9AAAB5'}}>{d}</div>
              ))}
            </div>
            {/* Weeks */}
            {CAL.map((row,ri) => (
              <div key={ri} style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',borderTop:'1px solid #F0EDE8'}}>
                {row.map((cell,ci) => {
                  if (!cell) return <div key={ci} style={{height:54,background:'#FAFAF8'}}/>;
                  const isPast = cell < 10;
                  const wk = WK(cell);
                  const color = W[wk]?.c || '#AAA';
                  const isDone = completed.has(cell);
                  return (
                    <div key={ci} onClick={() => cell>=10 && onOpenDay(cell)}
                      style={{height:54,padding:'4px 4px 3px',borderLeft:ci>0?'1px solid #F0EDE8':'none',cursor:cell>=10?'pointer':'default',background:isDone?W[wk].l+'88':'white',transition:'background 0.2s'}}>
                      <div style={{fontFamily:'Poppins',fontWeight:isPast?400:500,fontSize:12,color:isPast?'#CCC':'#1C2B3A',textAlign:'right',marginBottom:2}}>{cell}</div>
                      {isPast && <div style={{fontFamily:'Poppins',fontSize:8,color:'#CCC',textAlign:'center'}}>✓</div>}
                      {!isPast && (
                        <div style={{
                          height:4,borderRadius:2,margin:'0 2px',
                          background: isDone ? color : color+'40',
                          transition:'background 0.2s'
                        }}/>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div style={{display:'flex',gap:12,marginTop:10,flexWrap:'wrap'}}>
            {Object.entries(W).map(([wk,cfg]) => (
              <div key={wk} style={{display:'flex',alignItems:'center',gap:5}}>
                <div style={{width:8,height:8,borderRadius:2,background:cfg.c}}/>
                <span style={{fontFamily:'Poppins',fontSize:10,color:'#6A7A8A'}}>Sem {wk}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick access - continue */}
        {DAYS.find(d => !completed.has(d.day)) && (
          <div style={{marginBottom:24}}>
            <p style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color:'#9AAAB5',letterSpacing:2,textTransform:'uppercase',margin:'0 0 10px'}}>Continuar</p>
            {(() => {
              const next = DAYS.find(d => !completed.has(d.day));
              const wk = W[next.week];
              return (
                <button onClick={() => onOpenDay(next.day)} style={{
                  width:'100%',background:wk.c,border:'none',borderRadius:14,padding:'18px 20px',
                  color:'white',cursor:'pointer',textAlign:'left',display:'flex',alignItems:'center',justifyContent:'space-between'
                }}>
                  <div>
                    <p style={{fontFamily:'Poppins',fontSize:11,color:'rgba(255,255,255,0.7)',margin:'0 0 4px',letterSpacing:1}}>{wk.emoji} {wk.name}</p>
                    <p style={{fontFamily:'Lora',fontStyle:'italic',fontSize:17,color:'white',margin:'0 0 2px'}}>{next.title}</p>
                    <p style={{fontFamily:'Poppins',fontSize:11,color:'rgba(255,255,255,0.65)',margin:0}}>Día {next.day} · {next.date.split(',')[0]}</p>
                  </div>
                  <span style={{fontSize:22,color:'rgba(255,255,255,0.8)'}}>→</span>
                </button>
              );
            })()}
          </div>
        )}

        {/* Weeks */}
        <div>
          <p style={{fontFamily:'Poppins',fontWeight:700,fontSize:10,color:'#9AAAB5',letterSpacing:2,textTransform:'uppercase',margin:'0 0 12px'}}>Semanas</p>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {Object.entries(W).map(([wk,cfg]) => {
              const weekDays = DAYS.filter(d => d.week === Number(wk));
              const weekDone = weekDays.filter(d => completed.has(d.day)).length;
              return (
                <button key={wk} onClick={() => onOpenWeek(Number(wk))} style={{
                  display:'flex',alignItems:'center',gap:14,padding:'14px 16px',
                  background:'white',border:`1.5px solid ${cfg.l}`,borderRadius:12,
                  cursor:'pointer',textAlign:'left',width:'100%'
                }}>
                  <div style={{width:44,height:44,borderRadius:12,background:cfg.c,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0}}>{cfg.emoji}</div>
                  <div style={{flex:1}}>
                    <p style={{fontFamily:'Poppins',fontWeight:600,fontSize:13,color:'#1C2B3A',margin:'0 0 2px'}}>{cfg.name}</p>
                    <p style={{fontFamily:'Poppins',fontSize:11,color:'#9AAAB5',margin:0}}>Días {cfg.days[0]}–{cfg.days[cfg.days.length-1]} · {weekDone}/{weekDays.length} completados</p>
                  </div>
                  <span style={{color:cfg.c,fontSize:16}}>›</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div style={{marginTop:32,textAlign:'center',paddingBottom:16}}>
          <p style={{fontFamily:'Lora',fontStyle:'italic',fontSize:12,color:'#B0A898',margin:'0 0 4px'}}>"El que comenzó la buena obra en ustedes la continuará."</p>
          <p style={{fontFamily:'Poppins',fontSize:10,color:'#C8C0B4',margin:0,letterSpacing:1}}>— Filipenses 1:6 (NTV)</p>
        </div>
      </div>
    </div>
  );
}

// ═══ MAIN APP ═════════════════════════════════════════════════════════
export default function App() {
  const [screen, setScreen] = useState('home');
  const [dayNum, setDayNum]   = useState(10);
  const [weekNum, setWeekNum] = useState(2);
  const [completed, setCompleted] = useState(new Set());

  useEffect(() => {
    // Load Google Fonts
    if (!document.getElementById('dev-fonts')) {
      const l = document.createElement('link');
      l.id = 'dev-fonts'; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap';
      document.head.appendChild(l);
    }
    // Load progress
    (async () => {
      try {
        const r = await window.storage.get('dev-julio-2026');
        if (r?.value) setCompleted(new Set(JSON.parse(r.value)));
      } catch {}
    })();
  }, []);

  const saveCompleted = async (newSet) => {
    try { await window.storage.set('dev-julio-2026', JSON.stringify([...newSet])); } catch {}
  };

  const openDay = (num) => { setDayNum(num); setScreen('day'); };
  const openWeek = (num) => { setWeekNum(num); setScreen('week'); };

  const currentDay = DAYS.find(d => d.day === dayNum) || DAYS[0];
  const dayIdx = DAYS.indexOf(currentDay);

  const toggleComplete = async () => {
    const next = new Set(completed);
    if (next.has(dayNum)) next.delete(dayNum); else next.add(dayNum);
    setCompleted(next);
    await saveCompleted(next);
  };

  const goNext = () => { if (dayIdx < DAYS.length-1) { const n = DAYS[dayIdx+1].day; setDayNum(n); } };
  const goPrev = () => { if (dayIdx > 0) { const n = DAYS[dayIdx-1].day; setDayNum(n); } };

  return (
    <div style={{maxWidth:480,margin:'0 auto',minHeight:'100vh',background:'#FAFAF7'}}>
      {screen === 'home' && <HomeScreen onOpenDay={openDay} onOpenWeek={openWeek} completed={completed}/>}
      {screen === 'week' && <WeekIntroScreen weekNum={weekNum} onBack={() => setScreen('home')} onStartDay={(d) => { setDayNum(d); setScreen('day'); }}/>}
      {screen === 'day' && <DayScreen day={currentDay} onBack={() => setScreen('home')} onNext={goNext} onPrev={goPrev} onComplete={toggleComplete} isCompleted={completed.has(dayNum)}/>}
    </div>
  );
}
