const temas = [
  {
    nombre: "TEST 1",
    preguntas: [
      {
        letra: "1",
        pregunta: "¿Qué ley regula actualmente las cooperativas en Castilla-La Mancha?",
        opciones: [
          "Ley 20/2002, de 14 de noviembre",
          "Ley 11/2010, de 4 de noviembre",
          "Ley 27/1999, de 16 de julio",
          "Ley 14/2011, de 16 de diciembre"
        ],
        correcta: 1
      },
      {
    letra: "2",
    pregunta: "¿Cuál es el número mínimo de socios requerido para constituir una cooperativa de primer grado en Castilla-La Mancha?",
    opciones: [
      "Dos socios",
      "Tres socios, de los que al menos dos serán ordinarios",
      "Cinco socios",
      "Diez socios"
    ],
    correcta: 1
  },
  {
    letra: "3",
    pregunta: "¿Qué denominación deben incluir obligatoriamente las cooperativas en su razón social?",
    opciones: [
      "Sociedad Cooperativa o S.Coop.",
      "Sociedad Cooperativa de Castilla-La Mancha o S.Coop. de C-LM",
      "Cooperativa Regional o C.R.",
      "Sociedad Cooperativa Regional o S.C.R."
    ],
    correcta: 1
  },
  {
    letra: "4",
    pregunta: "¿Qué órgano social es el supremo de expresión de la voluntad social en una cooperativa?",
    opciones: [
      "El Consejo Rector",
      "La Comisión de Intervención",
      "La Asamblea General",
      "El Comité de Recursos"
    ],
    correcta: 2
  },
  {
    letra: "5",
    pregunta: "¿Cuál es el quórum de constitución de la Asamblea General en primera convocatoria, salvo disposición estatutaria contraria?",
    opciones: [
      "La mitad más uno de los votos de la cooperativa",
      "El 25% de los votos",
      "El 10% de los votos",
      "La tercera parte de los votos"
    ],
    correcta: 0
  },
  {
    letra: "6",
    pregunta: "¿Cuál es el plazo máximo de preaviso que pueden establecer los estatutos para la baja voluntaria de un socio?",
    opciones: [
      "Tres meses",
      "Seis meses (un año en cooperativas agrarias)",
      "Un año en todos los casos",
      "Dos años"
    ],
    correcta: 1
  },
  {
  letra: "7",
  pregunta: "¿Qué órgano se encarga de la administración y gestión de la cooperativa?",
  opciones: [
    "La Asamblea General",
    "El Consejo Rector",
    "La Comisión de Intervención",
    "El Comité de Ética"
  ],
  correcta: 1
},
{
  letra: "8",
  pregunta: "¿Qué clase de socio es aquel que participa en la actividad cooperativizada típica de la cooperativa?",
  opciones: [
    "Socio colaborador",
    "Socio temporal",
    "Socio ordinario",
    "Socio de trabajo"
  ],
  correcta: 2
},
{
  letra: "9",
  pregunta: "¿En qué registro deben inscribirse las cooperativas para adquirir personalidad jurídica?",
  opciones: [
    "Registro Mercantil",
    "Registro de Cooperativas de Castilla-La Mancha",
    "Registro de Sociedades Laborales",
    "Registro de Entidades de Economía Social"
  ],
  correcta: 1
},
{
  letra: "10",
  pregunta: "¿Qué mayoría se requiere para modificar los estatutos sociales de una cooperativa?",
  opciones: [
    "Mayoría simple de los votos presentes",
    "Mayoría absoluta de los votos de la cooperativa",
    "Dos tercios de los votos presentes y representados",
    "Unanimidad de todos los socios"
  ],
  correcta: 2
},
{
  letra: "11",
  pregunta: "¿Cuál es el ámbito territorial de aplicación de la Ley 11/2010?",
  opciones: [
    "Todo el territorio nacional",
    "Exclusivamente la provincia de Toledo",
    "El territorio de la Comunidad Autónoma de Castilla-La Mancha",
    "Las cinco provincias de Castilla-La Mancha y provincias limítrofes"
  ],
  correcta: 2
},
{
  letra: "12",
  pregunta: "¿Qué tipo de cooperativa está integrada necesariamente por al menos dos sociedades cooperativas?",
  opciones: [
    "Cooperativa de primer grado",
    "Cooperativa de segundo grado",
    "Cooperativa asociada",
    "Cooperativa mixta"
  ],
  correcta: 1
},
{
  letra: "13",
  pregunta: "¿Qué sucede si un socio incumple el plazo de preaviso establecido para la baja voluntaria?",
  opciones: [
    "La baja se considera nula",
    "La baja se considera no justificada",
    "El socio pierde todas sus aportaciones",
    "No tiene ninguna consecuencia"
  ],
  correcta: 1
},
{
  letra: "14",
  pregunta: "¿Pueden las cooperativas constituir secciones para desarrollar actividades específicas?",
  opciones: [
    "No, está prohibido por la Ley",
    "Sí, pero solo con autorización administrativa previa",
    "Sí, mediante acuerdo de la Asamblea General que debe inscribirse en el Registro",
    "Sí, pero solo las cooperativas de segundo grado"
  ],
  correcta: 2
},
      

      {
        letra: "15",
        pregunta: "¿Qué carácter tiene el Registro de Cooperativas de Castilla-La Mancha según la Ley?",
        opciones: [
          "Registro administrativo",
          "Registro jurídico",
          "Registro mercantil especial",
          "Registro fiscal"
        ],
        correcta: 1
      }
    ]
  },
  {
    nombre: "TEST PRUEBA 2",
    preguntas: [
      {
        letra: "16",
        pregunta: "Según el artículo 43.1 de la Ley 11/2010, ¿cuál de las siguientes materias es de competencia exclusiva e indelegable de la Asamblea General?",
        opciones: [
          "La ejecución de los acuerdos de fusión aprobados por la asamblea",
          "La determinación de la política salarial de los trabajadores asalariados",
          "La aprobación del reglamento interno de la cooperativa",
          "La designación del gerente de la sección de crédito"
        ],
        correcta: 2
      },{
      letra: "17",
  pregunta: "De conformidad con el artículo 48.1, ¿cuál es el quórum de constitución válido en segunda convocatoria para la Asamblea General, salvo disposición estatutaria que refuerce dicho quórum?",
  opciones: [
    "La presencia de al menos el 20% de los socios o 30 votos sociales",
    "La presencia de al menos el 10% de los socios o 25 votos sociales",
    "La presencia de más de la mitad de los votos sociales",
    "La presencia de al menos el 15% de los socios o 20 votos sociales"
  ],
  correcta: 1
},
{
  letra: "18",
  pregunta: "Según el artículo 43.1.i), ¿qué porcentaje del activo inmovilizado, si se transmite o enajena, obliga a que la decisión sea adoptada exclusivamente por la Asamblea General por suponer modificación sustancial de la estructura económica?",
  opciones: [
    "Más del 15% del inmovilizado",
    "Más del 20% del inmovilizado",
    "Más del 25% del inmovilizado",
    "Más del 30% del inmovilizado"
  ],
  correcta: 1
},
{
  letra: "19",
  pregunta: "De acuerdo con el artículo 56.1, ¿qué función NO corresponde al Órgano de Administración de la cooperativa?",
  opciones: [
    "La gestión y representación de la sociedad",
    "La fijación de las directrices generales de la gestión conforme a la política de la asamblea",
    "La aprobación de las cuentas anuales y distribución de excedentes",
    "La aplicación de la ley y los estatutos en promoción del interés social"
  ],
  correcta: 2
},
{
  letra: "20",
  pregunta: "Según el artículo 55, ¿cuáles son las cuatro formas posibles de organizar la administración en la cooperativa según la Ley 11/2010?",
  opciones: [
    "Administrador único, dos administradores mancomunados, consejo rector y comisario de cuentas",
    "Administrador único, dos o más administradores solidarios, dos o más administradores mancomunados y consejo rector",
    "Administrador único, consejo rector, junta directiva y gerencia exclusiva",
    "Administrador único, consejo rector, interventor y auditor de cuentas"
  ],
  correcta: 1
},
{
  letra: "21",
  pregunta: "Conforme al artículo 48.3, ¿quiénes forman normalmente la mesa de la Asamblea General, salvo disposición estatutaria en contra?",
  opciones: [
    "El presidente y el secretario del comité social",
    "El presidente y el secretario del Órgano de Administración",
    "El vicepresidente y el secretario general de la cooperativa",
    "Tres socios elegidos por la propia asamblea al inicio de la sesión"
  ],
  correcta: 1
},
{
  letra: "22",
  pregunta: "Según el artículo 43.1.a), la Asamblea General es competente de forma exclusiva para:",
  opciones: [
    "Nombrar al gerente de la cooperativa",
    "Nombrar y revocar a los miembros del Órgano de Administración y determinar su retribución",
    "Aprobar el balance provisional de la cooperativa",
    "Designar a los apoderados singulares de la cooperativa"
  ],
  correcta: 1
},
{
  letra: "23",
  pregunta: "De conformidad con el artículo 56.2.a), en caso de administrador o administradora únicos, ¿cómo se ejerce el poder de representación?",
  opciones: [
    "Se ejerce conjuntamente con el presidente del comité social",
    "Le corresponde necesariamente el poder de representación",
    "Se ejerce mancomunadamente con el secretario de la cooperativa",
    "Requiere siempre la autorización previa de la Asamblea General"
  ],
  correcta: 1
},
{
  letra: "24",
  pregunta: "Según el artículo 43.2, salvo disposición contraria de los estatutos, la Asamblea General puede:",
  opciones: [
    "Revocar unilateralmente cualquier Acuerdo del Órgano de Administración sin motivación",
    "Impartir instrucciones al Órgano de Administración o someter a autorización decisiones de especial trascendencia",
    "Modificar los estatutos sin necesidad de mayoría cualificada",
    "Delegar sus competencias exclusivas en el consejo rector"
  ],
  correcta: 1
},
{
  letra: "25",
  pregunta: "Conforme al artículo 48.4.c), ¿quién dirige las deliberaciones de la Asamblea General haciendo respetar el orden del día?",
  opciones: [
    "El secretario del Órgano de Administración",
    "El presidente de la mesa de la asamblea",
    "El vocal más antiguo del consejo rector",
    "El comisario de cuentas designado"
  ],
  correcta: 1
},
{
  letra: "26",
  pregunta: "Según el artículo 56.4, ¿qué efecto tiene cualquier limitación estatutaria de las facultades representativas de los administradores, aunque esté inscrita en el Registro?",
  opciones: [
    "Es plenamente oponible a terceros de buena fe",
    "Es ineficaz frente a terceros",
    "Solo es oponible si se comunica previamente a terceros",
    "Es válida solo para actos superiores a 50.000 euros"
  ],
  correcta: 1
},
{
  letra: "27",
  pregunta: "De acuerdo con el artículo 43.1.a), la Asamblea General es competente exclusivamente para:",
  opciones: [
    "La contratación de personal directivo",
    "La fusión, escisión, transformación y disolución de la cooperativa",
    "La aprobación de convenios colectivos sectoriales",
    "La celebración de contratos con terceros no socios"
  ],
  correcta: 1
},
{
  letra: "28",
  pregunta: "Según el artículo 48.1, los estatutos pueden reforzar los quórum de asistencia, pero con la siguiente limitación:",
  opciones: [
    "No pueden ser equivalentes en ambas convocatorias",
    "No pueden superar el 75% de los votos sociales en primera convocatoria",
    "No pueden exigir más del 30% de socios en segunda convocatoria",
    "No pueden diferir en más del 10% entre primera y segunda convocatoria"
  ],
  correcta: 0
},
{
  letra: "29",
  pregunta: "Conforme al artículo 57, ¿qué regula principalmente este artículo sobre el Órgano de Administración?",
  opciones: [
    "Las competencias de gestión del consejo rector",
    "El nombramiento y las incompatibilidades de los miembros del Órgano de Administración",
    "La responsabilidad civil de los administradores",
    "La duración del mandato de los administradores"
  ],
  correcta: 1
},
      // PREGUNTAS 17 A 29...

      {
        letra: "30",
        pregunta: "Según el artículo 43.3, la Asamblea General podrá decidir sobre recursos interpuestos contra decisiones del Órgano de Administración relativas a:",
        opciones: [
          "La aprobación de las cuentas anuales",
          "Las altas y bajas de socios, inadmisión de aspirantes, suspensión de derechos y sanciones por faltas graves o muy graves",
          "La designación de auditores de cuentas",
          "La modificación del objeto social"
        ],
        correcta: 1
      }
    ]
  },

  {
    nombre: "TEST PRUEBA 3",
    preguntas: [

      {
        letra: "31",
        pregunta: "En relación con el principio de participación económica de los socios, ¿qué establece la ley sobre la distribución de excedentes?",
        opciones: [
          "Deben distribuirse obligatoriamente en proporción al capital aportado",
          "Pueden distribuirse en función de la actividad cooperativizada",
          "Se reparten siempre a partes iguales",
          "Solo pueden destinarse a reservas irrepartibles"
        ],
        correcta: 1
      },{
        letra: "32",
  pregunta: "¿Cuál es el número mínimo de socios para constituir una cooperativa de primer grado en Castilla-La Mancha?",
  opciones: [
    "2",
    "3",
    "5",
    "10"
  ],
  correcta: 1
},
{
  letra: "33",
  pregunta: "El Fondo de Reserva Obligatorio tiene como característica principal:",
  opciones: [
    "Ser repartible entre los socios en caso de liquidación",
    "Ser irrepartible entre los socios",
    "Ser opcional",
    "Destinarse exclusivamente a formación"
  ],
  correcta: 1
},
{
  letra: "34",
  pregunta: "¿Qué órgano es competente para modificar los estatutos sociales?",
  opciones: [
    "Consejo Rector",
    "Interventores",
    "Asamblea General",
    "Comité de Recursos"
  ],
  correcta: 2
},
{
  letra: "35",
  pregunta: "El derecho de baja voluntaria del socio:",
  opciones: [
    "Puede ejercerse libremente en cualquier momento sin condiciones",
    "Puede estar condicionado a preaviso estatutario",
    "Está prohibido durante los primeros 5 años",
    "Solo se permite por causa justificada"
  ],
  correcta: 1
},
{
  letra: "36",
  pregunta: "El capital social mínimo de una cooperativa:",
  opciones: [
    "Está fijado por la ley en 8.000 €",
    "Es libre y se determina en estatutos",
    "Debe ser al menos 60.000 €",
    "Depende del número de socios"
  ],
  correcta: 1
},
{
  letra: "37",
  pregunta: "La responsabilidad de los socios por las deudas sociales es:",
  opciones: [
    "Ilimitada",
    "Limitada a su aportación",
    "Solidaria",
    "Subsidiaria ilimitada"
  ],
  correcta: 1
},
{
  letra: "38",
  pregunta: "Una cooperativa entra en pérdidas. ¿Puede aplicarse el Fondo de Reserva Obligatorio?",
  opciones: [
    "No, nunca",
    "Sí, para compensar pérdidas",
    "Solo con autorización judicial",
    "Solo en liquidación"
  ],
  correcta: 1
},
{
  letra: "39",
  pregunta: "El Fondo de Educación y Promoción:",
  opciones: [
    "Es repartible entre socios",
    "Tiene carácter obligatorio",
    "Solo existe en cooperativas agrarias",
    "Es opcional"
  ],
  correcta: 1
},
{
  letra: "40",
  pregunta: "¿Cuál de los siguientes NO es un órgano necesario de la cooperativa?",
  opciones: [
    "Asamblea General",
    "Consejo Rector",
    "Comité Ejecutivo",
    "Intervención"
  ],
  correcta: 2
},
{
  letra: "41",
  pregunta: "En caso de expulsión de un socio, ¿qué órgano resuelve en primera instancia?",
  opciones: [
    "Asamblea General",
    "Consejo Rector",
    "Juzgado Mercantil",
    "Interventores"
  ],
  correcta: 1
},
{
  letra: "42",
  pregunta: "La figura del socio colaborador:",
  opciones: [
    "Tiene los mismos derechos políticos que los socios ordinarios",
    "No puede participar en la actividad cooperativizada",
    "Debe aportar capital obligatoriamente",
    "Solo existe en cooperativas de segundo grado"
  ],
  correcta: 1
},
{
  letra: "43",
  pregunta: "Una cooperativa limita el derecho de información del socio en estatutos.",
  opciones: [
    "Es válido",
    "Es nulo si vulnera derechos esenciales",
    "Es discrecional",
    "Solo impugnable judicialmente"
  ],
  correcta: 1
},
{
  letra: "44",
  pregunta: "La auditoría de cuentas será obligatoria cuando:",
  opciones: [
    "Siempre",
    "Lo decida el Consejo Rector",
    "Se superen ciertos límites legales o lo establezcan estatutos",
    "Lo solicite cualquier socio"
  ],
  correcta: 2
},
{
  letra: "45",
  pregunta: "Las cooperativas de segundo grado están formadas por:",
  opciones: [
    "Personas físicas exclusivamente",
    "Otras cooperativas principalmente",
    "Empresas mercantiles",
    "Administraciones públicas"
  ],
  correcta: 1
},
{
  letra: "46",
  pregunta: "El retorno cooperativo se define como:",
  opciones: [
    "Intereses al capital",
    "Beneficio distribuido según capital",
    "Excedente distribuido según actividad",
    "Reserva obligatoria"
  ],
  correcta: 2
},
{
  letra: "47",
  pregunta: "El plazo mínimo de preaviso para la baja voluntaria, salvo previsión estatutaria, es:",
  opciones: [
    "15 días",
    "1 mes",
    "3 meses",
    "6 meses"
  ],
  correcta: 2
},
{
  letra: "48",
  pregunta: "Un socio impugna un acuerdo de la Asamblea por ser contrario a la ley. ¿Plazo general?",
  opciones: [
    "15 días",
    "30 días",
    "1 mes",
    "1 año"
  ],
  correcta: 3
},
{
  letra: "49",
  pregunta: "¿Cuál es la finalidad principal del Fondo de Educación y Promoción?",
  opciones: [
    "Cubrir pérdidas",
    "Financiar inversiones",
    "Formación y difusión del cooperativismo",
    "Retribuir a los socios"
  ],
  correcta: 2
},
      // PREGUNTAS 32 A 49...

      {
        letra: "50",
        pregunta: "En caso de liquidación, el haber líquido sobrante:",
        opciones: [
          "Se reparte entre los socios",
          "Se destina a una entidad pública o al movimiento cooperativo",
          "Se reparte entre acreedores",
          "Se devuelve al Estado"
        ],
        correcta: 1
      }

    ]
  }
];

let indice = 0;
let seleccionada = null;
let aciertos = 0;
let fallos = 0;
let pasadas = 0;
let respondidas = 0;
let esperandoSiguiente = false;
let temaActual = 0;
let preguntas = temas[temaActual].preguntas;

const selectorTema = document.getElementById("selectorTema");
const nombreTema = document.getElementById("nombreTema");
const rosco = document.getElementById("rosco");
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const contador = document.getElementById("contador");
const resultado = document.getElementById("resultado");
const empieza = document.getElementById("empieza");
const estado = document.getElementById("estado");
const progressFill = document.getElementById("progressFill");

const aciertosHTML = document.getElementById("aciertos");
const fallosHTML = document.getElementById("fallos");
const pasadasHTML = document.getElementById("pasadas");

function cargarSelectorTemas() {
  selectorTema.innerHTML = "";

  temas.forEach((tema, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = tema.nombre;
    selectorTema.appendChild(option);
  });

  selectorTema.value = temaActual;
  nombreTema.textContent = temas[temaActual].nombre;
}

function cambiarTema() {
  const card = document.querySelector(".quiz-card");

  card.classList.remove("cambiando");

  void card.offsetWidth;

  card.classList.add("cambiando");
  
  temaActual = Number(selectorTema.value);
  preguntas = temas[temaActual].preguntas;

  indice = 0;
  seleccionada = null;
  aciertos = 0;
  fallos = 0;
  pasadas = 0;
  respondidas = 0;
  esperandoSiguiente = false;

  document.querySelector(".actions").style.display = "flex";

  nombreTema.textContent = temas[temaActual].nombre;

  resultado.textContent = "";
  actualizarStats();
  crearRosco();
  mostrarPregunta();
}

function crearRosco() {
  rosco.innerHTML = "";

  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("letra");
    div.textContent = p.letra;
    div.id = `letra-${i}`;
    rosco.appendChild(div);
  });
}

function mostrarPregunta() {
  if (respondidas === preguntas.length) {
    finalizarJuego();
    return;
  }

  seleccionada = null;
  esperandoSiguiente = false;

  resultado.textContent = "";
  estado.textContent = "Elige una respuesta";

  document.querySelectorAll(".letra").forEach(letra => {
    letra.classList.remove("activa");
  });

  document.getElementById(`letra-${indice}`).classList.add("activa");

  empieza.textContent = `EMPIEZA POR ${preguntas[indice].letra}`;
  preguntaTexto.textContent = preguntas[indice].pregunta;

  opcionesDiv.innerHTML = "";

  preguntas[indice].opciones.forEach((opcion, i) => {
    const btn = document.createElement("button");
    btn.classList.add("opcion");
    btn.textContent = opcion;

    btn.onclick = () => {
      if (esperandoSiguiente) return;

      document.querySelectorAll(".opcion").forEach(boton => {
        boton.classList.remove("seleccionada");
      });

      btn.classList.add("seleccionada");
      seleccionada = i;

      estado.textContent = "Respuesta seleccionada";
    };

    opcionesDiv.appendChild(btn);
  });

  actualizarProgreso();
}

function siguientePregunta() {

  if (esperandoSiguiente) {
    avanzar();
    return;
  }

  if (seleccionada === null) {
    alert("Selecciona una respuesta o pulsa Pasapalabra.");
    return;
  }

  const letraActual = document.getElementById(`letra-${indice}`);
  const correcta = preguntas[indice].correcta;

  esperandoSiguiente = true;

  document.querySelectorAll(".opcion").forEach((btn, i) => {

    if (
      (Array.isArray(correcta) && correcta.includes(i)) ||
      i === correcta
    ) {
      btn.style.background = "#22c55e";
      btn.style.color = "white";
    }

    if (
      i === seleccionada &&
      !(
        (Array.isArray(correcta) && correcta.includes(i)) ||
        i === correcta
      )
    ) {
      btn.style.background = "#ef4444";
      btn.style.color = "white";
    }

    btn.disabled = true;
  });

  let esCorrecta = false;

  if (Array.isArray(correcta)) {
    esCorrecta = correcta.includes(seleccionada);
  } else {
    esCorrecta = seleccionada === correcta;
  }

  if (esCorrecta) {

    aciertos++;

    letraActual.classList.add("correcta");

    document.getElementById('snd-ok').play();

    estado.textContent = "✅ Correcto. Pulsa siguiente.";

  } else {

    fallos++;

    letraActual.classList.add("incorrecta");

    document.getElementById('snd-err').play();

    estado.textContent = "❌ Incorrecto. Mira la respuesta correcta y pulsa siguiente.";
  }

  respondidas++;

  actualizarStats();
}

function pasarPregunta() {

  if (esperandoSiguiente) return;

  pasadas++;

  actualizarStats();

  avanzar();
}

function avanzar() {

  if (respondidas === preguntas.length) {
    finalizarJuego();
    return;
  }

  let intentos = 0;

  do {
    indice = (indice + 1) % preguntas.length;
    intentos++;
  } while (
    (
      document.getElementById(`letra-${indice}`).classList.contains("correcta") ||
      document.getElementById(`letra-${indice}`).classList.contains("incorrecta")
    ) &&
    intentos < preguntas.length
  );

  mostrarPregunta();
}

function actualizarStats() {
  aciertosHTML.textContent = aciertos;
  fallosHTML.textContent = fallos;
  pasadasHTML.textContent = pasadas;
}

function actualizarProgreso() {
  contador.textContent = `Pregunta ${respondidas + 1} de ${preguntas.length}`;

  const porcentaje = (respondidas / preguntas.length) * 100;

  progressFill.style.width = `${porcentaje}%`;
}

function finalizarJuego() {

  preguntaTexto.textContent = "Juego terminado";

  empieza.textContent = "RESULTADO FINAL";

  estado.textContent = "Partida finalizada";

  opcionesDiv.innerHTML = "";

  contador.textContent = `Completado ${preguntas.length} de ${preguntas.length}`;

  progressFill.style.width = "100%";

  resultado.innerHTML = `
    Aciertos: ${aciertos}<br>
    Fallos: ${fallos}<br>
    Nota final: ${(aciertos / preguntas.length * 10).toFixed(2)}
  `;

  document.querySelector(".actions").style.display = "none";
}

cargarSelectorTemas();
crearRosco();
mostrarPregunta();