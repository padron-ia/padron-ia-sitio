// Quick replies per trade for the /herramientas/mensajes tool.
// Tokens: {negocio} business name, {horario} opening hours. Each reply stays under 500
// characters and each shortcut under 25 (WhatsApp Business limits; see docs/PROGRESS.md).
// Prices are left as [precio] on purpose: the owner fills them in before copying.

export const OFICIOS = [
  {
    id: "peluqueria",
    nombre: "Peluquería o barbería",
    respuestas: [
      { atajo: "/horario", pregunta: "¿A qué hora abrís?", texto: "¡Hola! En {negocio} abrimos {horario}. Si quieres cita, dime qué te quieres hacer y qué día te viene mejor y te digo huecos 😊" },
      { atajo: "/cita", pregunta: "¿Tenéis hueco para…?", texto: "¡Claro! Para darte hora dime: qué servicio quieres (corte, color, mechas…), qué día te viene bien y si prefieres mañana o tarde. Te contesto con los huecos libres." },
      { atajo: "/precios", pregunta: "¿Cuánto cuesta…?", texto: "Te paso precios de {negocio}:\n• Corte: [precio]\n• Corte y peinado: [precio]\n• Color: desde [precio]\n• Mechas: desde [precio]\nEl color y las mechas dependen del largo; si me mandas una foto te digo el precio exacto." },
      { atajo: "/cambio", pregunta: "¿Me cambias la hora?", texto: "¡Sin problema! Dime qué otro día y franja te viene bien y te busco hueco. Así libero tu hora para otra persona 🙏" },
      { atajo: "/anular", pregunta: "No puedo ir", texto: "Gracias por avisar con tiempo 🙏 Te la anulo. Cuando quieras volver a pedir, escríbeme por aquí y te busco hueco." },
      { atajo: "/recordatorio", pregunta: "(Recordatorio de cita)", texto: "¡Hola! Te recuerdo tu cita en {negocio} mañana a las [hora]. Si no puedes venir, avísame por aquí y se la doy a otra persona. ¡Te esperamos!" },
      { atajo: "/donde", pregunta: "¿Dónde estáis?", texto: "Estamos en [dirección]. Te dejo la ubicación: [enlace de Google Maps]. ¡Te esperamos!" },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora mismo estamos cerrados; en {negocio} abrimos {horario}. He visto tu mensaje y mañana a primera hora te contesto con hueco. Si es para cita, dime ya servicio y día y te lo dejo apuntado." }
    ]
  },
  {
    id: "estetica",
    nombre: "Estética, uñas o depilación",
    respuestas: [
      { atajo: "/horario", pregunta: "¿Qué horario tenéis?", texto: "¡Hola! En {negocio} estamos {horario}. Dime qué tratamiento te interesa y qué día te viene mejor y te digo huecos 😊" },
      { atajo: "/cita", pregunta: "¿Tenéis hueco?", texto: "¡Claro! Dime qué tratamiento quieres, qué día te viene bien y si prefieres mañana o tarde, y te paso los huecos libres." },
      { atajo: "/precios", pregunta: "¿Cuánto cuesta…?", texto: "Te paso precios de {negocio}:\n• Manicura: [precio]\n• Semipermanente: [precio]\n• Depilación piernas: [precio]\n• Limpieza facial: [precio]\nSi buscas algo que no está aquí, pregúntame sin problema." },
      { atajo: "/bono", pregunta: "¿Tenéis bonos?", texto: "Sí 😊 Tenemos bonos de [número] sesiones por [precio] (sale a [precio] la sesión). Te lo puedo preparar en tu próxima cita." },
      { atajo: "/cambio", pregunta: "¿Me cambias la cita?", texto: "¡Sin problema! Dime otro día y franja y te busco hueco. Gracias por avisar 🙏" },
      { atajo: "/recordatorio", pregunta: "(Recordatorio de cita)", texto: "¡Hola! Te recuerdo tu cita en {negocio} mañana a las [hora]. Si no puedes venir, avísame por aquí y se la doy a otra persona. ¡Hasta mañana!" },
      { atajo: "/antes", pregunta: "¿Tengo que preparar algo?", texto: "Para que el tratamiento salga perfecto: [indicaciones, p. ej. venir sin crema, con el vello de 3-4 mm]. Cualquier duda me dices." },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora estamos cerrados; abrimos {horario}. Mañana a primera hora te contesto. Si es para cita, déjame ya tratamiento y día y te lo dejo apuntado." }
    ]
  },
  {
    id: "taller",
    nombre: "Taller mecánico",
    respuestas: [
      { atajo: "/listo", pregunta: "¿Está ya mi coche?", texto: "¡Hola! Tu coche [ya está listo / estará listo hoy a las X]. Puedes pasar a recogerlo {horario}. Te esperamos." },
      { atajo: "/estado", pregunta: "¿Cómo va mi coche?", texto: "Ahora mismo estamos con él. En cuanto lo tengamos te escribo con lo que hemos hecho y el importe, para que no tengas que llamar." },
      { atajo: "/presupuesto", pregunta: "¿Cuánto me costaría…?", texto: "Para darte un presupuesto ajustado necesito: marca, modelo y año del coche, y qué le pasa o qué quieres hacer. Si puedes, mándame una foto. Te contesto hoy." },
      { atajo: "/cita", pregunta: "¿Cuándo puedo llevarlo?", texto: "Podemos cogerlo [día] a primera hora. Déjalo entre las [hora] y las [hora] y te avisamos por aquí en cuanto esté." },
      { atajo: "/itv", pregunta: "¿Me lo preparáis para la ITV?", texto: "Sí, te lo revisamos antes de la ITV (luces, frenos, neumáticos, niveles) por [precio]. Dime qué día tienes la ITV y te busco hueco antes." },
      { atajo: "/horario", pregunta: "¿Qué horario tenéis?", texto: "En {negocio} estamos {horario}. Para dejar el coche, mejor a primera hora 👍" },
      { atajo: "/pieza", pregunta: "¿Por qué tarda?", texto: "Estamos esperando una pieza que llega [día]. En cuanto llegue la montamos y te aviso por aquí. Siento la espera." },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora el taller está cerrado; abrimos {horario}. Mañana a primera hora te contesto. Si es urgente, dime marca, modelo y qué le pasa y lo miramos primero." }
    ]
  },
  {
    id: "fisio",
    nombre: "Fisioterapia o clínica",
    respuestas: [
      { atajo: "/cita", pregunta: "¿Tenéis hueco?", texto: "¡Hola! Para darte cita dime qué te pasa (o qué tratamiento buscas), qué días te vienen bien y si prefieres mañana o tarde. Te contesto con los huecos libres." },
      { atajo: "/primera", pregunta: "Es la primera vez", texto: "¡Bienvenido/a! La primera sesión dura [minutos] y cuesta [precio]: valoramos qué te pasa y empezamos el tratamiento. Trae ropa cómoda y, si tienes, informes o pruebas." },
      { atajo: "/precios", pregunta: "¿Cuánto cuesta la sesión?", texto: "La sesión en {negocio} cuesta [precio] y dura [minutos]. Tenemos bono de [número] sesiones por [precio]." },
      { atajo: "/recordatorio", pregunta: "(Recordatorio de cita)", texto: "¡Hola! Te recuerdo tu sesión en {negocio} mañana a las [hora]. Si no puedes venir, avísame por aquí y se la doy a otra persona." },
      { atajo: "/seguimos", pregunta: "(Paciente que dejó de venir)", texto: "¡Hola! Hace unas semanas que no te vemos por {negocio}. ¿Qué tal sigues? Si quieres retomar el tratamiento, dime qué días te vienen bien y te busco hueco." },
      { atajo: "/cambio", pregunta: "¿Me cambias la hora?", texto: "¡Claro! Dime otro día y franja y te busco hueco. Gracias por avisar 🙏" },
      { atajo: "/horario", pregunta: "¿Qué horario tenéis?", texto: "En {negocio} atendemos {horario}. Escríbeme y te busco el hueco que mejor te venga." },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora estamos cerrados; abrimos {horario}. Mañana a primera hora te contesto. Si te duele mucho o es urgente, no esperes: acude a tu centro de salud." }
    ]
  },
  {
    id: "restaurante",
    nombre: "Restaurante o bar",
    respuestas: [
      { atajo: "/reserva", pregunta: "¿Tenéis mesa para…?", texto: "¡Hola! Para reservar dime día, hora y cuántas personas sois. Te confirmo enseguida 😊" },
      { atajo: "/confirmada", pregunta: "(Confirmación de reserva)", texto: "¡Reserva confirmada! [día] a las [hora], [número] personas, a nombre de [nombre]. Si cambia algo, avísanos por aquí. ¡Os esperamos en {negocio}!" },
      { atajo: "/horario", pregunta: "¿A qué hora abrís?", texto: "En {negocio} abrimos {horario}. La cocina cierra a las [hora]." },
      { atajo: "/carta", pregunta: "¿Me pasas la carta?", texto: "¡Claro! Aquí tienes la carta: [enlace o foto]. El menú del día es [precio] e incluye primero, segundo, bebida y postre o café." },
      { atajo: "/alergias", pregunta: "¿Tenéis opciones sin…?", texto: "Sí, tenemos opciones sin gluten y para otras alergias. Dinos qué alergias hay en la mesa al reservar y la cocina lo tiene en cuenta." },
      { atajo: "/grupos", pregunta: "Somos un grupo grande", texto: "¡Genial! Para grupos de más de [número] tenemos menú de grupo desde [precio] por persona. Dime día y cuántos sois y te paso las opciones." },
      { atajo: "/encargo", pregunta: "¿Puedo encargar para llevar?", texto: "Sí 😊 Dime qué quieres y a qué hora pasas a recogerlo, y te lo tenemos listo." },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora estamos cerrados; abrimos {horario}. Si es para reservar, déjame día, hora y personas y te lo confirmo en cuanto abramos." }
    ]
  },
  {
    id: "tienda",
    nombre: "Tienda",
    respuestas: [
      { atajo: "/stock", pregunta: "¿Tenéis…?", texto: "¡Hola! Déjame que lo mire y te digo ahora mismo si lo tenemos y en qué tallas o colores. Si puedes, mándame una foto de lo que buscas." },
      { atajo: "/reservar", pregunta: "¿Me lo guardáis?", texto: "¡Claro! Te lo guardo hasta [día] a nombre de [nombre]. Pásate cuando quieras dentro del horario: {horario}." },
      { atajo: "/envio", pregunta: "¿Hacéis envíos?", texto: "Sí, enviamos a toda España por [precio] (gratis a partir de [importe]). Llega en [días] días. Te paso el enlace de pago y lo preparamos hoy." },
      { atajo: "/horario", pregunta: "¿Qué horario tenéis?", texto: "En {negocio} abrimos {horario}. ¡Te esperamos!" },
      { atajo: "/cambio", pregunta: "¿Puedo cambiarlo?", texto: "Sí, tienes [días] días para cambiarlo o devolverlo con el tique y la etiqueta puesta. Pásate por la tienda y lo hacemos en un momento." },
      { atajo: "/llegado", pregunta: "(Aviso: ya ha llegado)", texto: "¡Hola! Ya nos ha llegado lo que nos pediste 🎉 Te lo guardamos hasta [día]. Pásate cuando quieras: {horario}." },
      { atajo: "/donde", pregunta: "¿Dónde estáis?", texto: "Estamos en [dirección]. Ubicación: [enlace de Google Maps]. ¡Te esperamos!" },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora estamos cerrados; abrimos {horario}. Mañana a primera hora te contesto. Si buscas algo concreto, déjame foto o referencia y te digo si lo tenemos." }
    ]
  },
  {
    id: "reformas",
    nombre: "Reformas, fontanería o electricidad",
    respuestas: [
      { atajo: "/presupuesto", pregunta: "¿Me hacéis presupuesto?", texto: "¡Hola! Para darte presupuesto necesito: qué hay que hacer, en qué localidad es y, si puedes, fotos de la zona. Con eso te digo precio aproximado o cuándo puedo pasar a verlo." },
      { atajo: "/visita", pregunta: "¿Cuándo podéis venir?", texto: "Puedo pasar a verlo [día] entre las [hora] y las [hora]. ¿Te viene bien? Mándame la dirección exacta por aquí." },
      { atajo: "/urgencia", pregunta: "¡Es urgente!", texto: "Entendido. Mientras llego: [cierra la llave de paso general / baja el diferencial del cuadro]. Mándame la dirección y una foto y te digo a qué hora puedo estar." },
      { atajo: "/precio", pregunta: "¿Cuánto cobráis?", texto: "La salida son [precio] y la hora de trabajo [precio] más materiales. En cuanto vea el trabajo te doy el precio cerrado antes de empezar." },
      { atajo: "/enviado", pregunta: "(Presupuesto enviado)", texto: "Te acabo de mandar el presupuesto. Si te encaja, dime qué día prefieres y te reservo la fecha. Cualquier duda, pregúntame." },
      { atajo: "/seguimiento", pregunta: "(¿Qué te pareció el presupuesto?)", texto: "¡Hola! ¿Pudiste mirar el presupuesto que te mandé? Si quieres ajustar algo, lo vemos. Tengo hueco [día] por si quieres empezar." },
      { atajo: "/horario", pregunta: "¿Qué horario tenéis?", texto: "Trabajo {horario}. Para urgencias fuera de horario: [condiciones o teléfono]." },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora estoy fuera de horario; trabajo {horario}. Mañana a primera hora te contesto. Si es una urgencia de agua o luz, dímelo y lo miro antes." }
    ]
  },
  {
    id: "academia",
    nombre: "Academia, clases o gimnasio",
    respuestas: [
      { atajo: "/info", pregunta: "Quiero información", texto: "¡Hola! En {negocio} tenemos [clases o actividades]. Cuéntame qué buscas (nivel, días, horario) y te digo qué grupo te encaja mejor." },
      { atajo: "/precios", pregunta: "¿Cuánto cuesta?", texto: "Te paso precios:\n• [opción 1]: [precio] al mes\n• [opción 2]: [precio] al mes\n• Matrícula: [precio]\nLa primera clase es de prueba [gratis / por precio]." },
      { atajo: "/prueba", pregunta: "¿Puedo probar?", texto: "¡Claro! Puedes venir a una clase de prueba [día] a las [hora]. Dime tu nombre y te apunto." },
      { atajo: "/horario", pregunta: "¿Qué horarios hay?", texto: "En {negocio} estamos {horario}. Los grupos de [actividad] son [días] a las [horas]." },
      { atajo: "/falta", pregunta: "No puedo ir hoy", texto: "Gracias por avisar 🙏 Puedes recuperar la clase [día] a las [hora]. ¿Te apunto?" },
      { atajo: "/pago", pregunta: "(Recordatorio de cuota)", texto: "¡Hola! Te recuerdo que la cuota de este mes ([precio]) vence el [día]. Puedes pagar por [Bizum / transferencia a ...]. ¡Gracias!" },
      { atajo: "/vuelves", pregunta: "(Alumno que dejó de venir)", texto: "¡Hola! Hace tiempo que no te vemos por {negocio}. ¿Todo bien? Si te apetece volver, este mes [ventaja]. Te guardo plaza si me dices." },
      { atajo: "/noche", pregunta: "(Mensaje fuera de horario)", texto: "¡Hola! Ahora estamos cerrados; abrimos {horario}. Mañana te contesto con toda la información." }
    ]
  }
];
