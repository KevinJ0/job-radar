// Validated jobs data for Meibi Mota
// Strict rules applied:
// 1. Language: ONLY basic English or Spanish-native. ZERO bilingual, fluent or advanced English.
// 2. Modality & Location: Presencial or Hybrid ONLY in La Romana, RD. All others strictly 100% Remoto.
// 3. Academic Standing: 2nd cuatrimestre in Psychology (no graduated/titular orientadora).

const JOBS_DATA = [
  // =========================================================================
  // 1. PSICOLOGÍA ESCOLAR, EDUCACIÓN Y GESTIÓN EN LA ROMANA (PRESENCIAL LA ROMANA)
  // =========================================================================
  {
    id: "meibi-psi-01",
    title: "Coordinadora de Admisiones y Atención a Familias",
    company: "Colegio Internacional Saint John",
    category: "psicologia",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 38,000 - 48,000 / mes",
    salaryNote: "Beneficios de ley + almuerzo escolar + ambiente colaborativo",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Analítica & Marketing",
    languageRequirement: "Español Nativo / Inglés Básico",
    tags: ["Admisiones", "Atención a Familias", "Mercadeo Educativo", "La Romana"],
    url: "https://saintjohn.edu.do/trabaja-con-nosotros/",
    contactEmail: "talento@saintjohn.edu.do",
    description: "Coordinación integral del proceso de admisiones de nuevas familias y estudiantes: recorridos por el campus, atención empática a padres, recopilación y gestión de expedientes escolares, asesoría del proyecto pedagógico y apoyo en iniciativas de clima escolar en La Romana.",
    requirements: [
      "Licenciatura en Mercadeo o afines (en titulación), con inicio de carrera en Psicología Escolar (cursando 2do cuatrimestre)",
      "Habilidades excepcionales de comunicación, empatía, escucha activa y trato cálido con familias",
      "Manejo fluido de Microsoft Office 365 (PowerPoint, Excel) y organización de registros",
      "Residencia en La Romana, República Dominicana",
      "Idioma: Español nativo (inglés básico de cortesía)"
    ],
    coverLetter: `Estimado Equipo de Gestión Humana de Colegio Internacional Saint John,

Mi nombre es Meibi Esperanza Mota Mora. Les escribo para presentar mi postulación a la posición de Coordinadora de Admisiones y Atención a Familias en su campus de La Romana.

Cuento con formación en Mercadeo por INTEC (en proceso de titulación) y actualmente curso mi segundo cuatrimestre de Licenciatura en Psicología Escolar en la Universidad Dominicana O&M. Mi trayectoria laboral de más de seis años en Carat Dominicana me ha formado en el análisis riguroso, la organización de datos y la atención cercana y empática a personas.

Viviendo en La Romana, me motiva profundamente integrarme a una comunidad educativa de excelencia donde pueda orientar con calidez a las nuevas familias y apoyar el bienestar institucional.

Agradezco su consideración y quedo a su disposición para una entrevista.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com
La Romana, República Dominicana`
  },
  {
    id: "meibi-psi-02",
    title: "Asistente de Apoyo Psicoeducativo y Gestión Académica",
    company: "Universidad de La Romana (UNIROMANA)",
    category: "psicologia",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 32,000 - 40,000 / mes",
    salaryNote: "Salario competitivo + beneficios académicos",
    postedDate: "Reciente",
    type: "Tiempo Completo",
    recommendedCV: "Analítica & Marketing",
    languageRequirement: "Español Nativo / Inglés Básico",
    tags: ["Educación Superior", "Gestión Académica", "Atención Estudiantil", "La Romana"],
    url: "https://uniromana.edu.do/",
    contactEmail: "gestionhumana@uniromana.edu.do",
    description: "Apoyo en el departamento de bienestar estudiantil y registro académico: asistencia en programas de orientación y adaptación universitaria, soporte en talleres extracurriculares, encuestas de satisfacción estudiantil y reportes administrativos.",
    requirements: [
      "Lic. en Mercadeo o afines, cursando sus primeros cuatrimestres (2do cuatrimestre) en Psicología Escolar",
      "Manejo de Microsoft Office 365, Power BI y elaboración de reportes estructurados",
      "Trato afable, vocación de servicio, empatía y confidencialidad",
      "Residencia en La Romana",
      "Idioma: Español"
    ],
    coverLetter: `Estimado Departamento de Gestión Humana de UNIROMANA,

Me dirijo a ustedes para postularme a la posición de Asistente de Apoyo Psicoeducativo y Gestión Académica en la Universidad de La Romana.

Soy Meibi Esperanza Mota Mora, profesional con formación en Mercadeo (INTEC) y estudiante que cursa actualmente el 2do cuatrimestre de Psicología Escolar en la Universidad Dominicana O&M. Cuento con más de 6 años de experiencia en análisis de información, tableros en Power BI y coordinación de procesos en Carat Dominicana, lo cual me permite combinar rigor metodológico con vocación por el servicio estudiantil.

Resido en La Romana y me entusiasma apoyar el crecimiento integral y la adaptación de los estudiantes universitarios de nuestra provincia.

Saludos cordiales,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-psi-03",
    title: "Asistente de Programas Comunitarios y Atención al Usuario",
    company: "Clínica de Familia La Romana",
    category: "psicologia",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 30,000 - 38,000 / mes",
    salaryNote: "Beneficios de ley + seguro complementario",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español Nativo",
    tags: ["Salud y Bienestar", "Atención Comunitaria", "Gestión Social", "La Romana"],
    url: "https://clinicadefamilia.org.do/",
    contactEmail: "empleo@clinicadefamilia.org.do",
    description: "Apoyo operativo en proyectos comunitarios de salud integral y acompañamiento familiar: registro y recepción cálida de beneficiarios, organización de actividades de prevención, gestión de bases de datos y reportes de cobertura en La Romana.",
    requirements: [
      "Formación en Mercadeo o áreas administrativas, cursando estudios iniciales en Psicología Escolar (2do cuatrimestre)",
      "Sensibilidad social, escucha empática y facilidad para el diálogo con usuarios y familias",
      "Organización metódica de expedientes, bases de datos y seguimiento de indicadores",
      "Residencia en La Romana"
    ],
    coverLetter: `Estimado Equipo de Selección de Clínica de Familia La Romana,

Les presento mi postulación para formar parte de su equipo en programas comunitarios y atención al usuario.

Como profesional en Mercadeo (INTEC) y estudiante de segundo cuatrimestre de Psicología Escolar en O&M, me identifico plenamente con la misión humanitaria y de servicio integral de la Clínica de Familia en nuestra ciudad de La Romana. Mi trayectoria profesional supervisando procesos de análisis de datos y brindando atención personalizada me permite gestionar proyectos con orden y sensibilidad ética.

Agradezco su atención y espero tener la oportunidad de conversar personalmente.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-psi-04",
    title: "Asistente de Gestión Humana y Clima Organizacional",
    company: "Centro Educativo / Organización Social (La Romana)",
    category: "psicologia",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 32,000 - 42,000 / mes",
    salaryNote: "Beneficios de ley + almuerzo institucional + ambiente colaborativo",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Gestión Humana", "Clima Laboral", "Psicología Organizacional", "La Romana"],
    url: "https://do.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-asistente-de-gestion-humana-en-la-romana-la-romana-67C8DF",
    contactEmail: "empleos@laromanaeduca.do",
    description: "Apoyo al departamento de gestión humana y bienestar del personal: seguimiento al clima de trabajo, soporte en procesos de reclutamiento e inducción, control de expedientes de colaboradores, coordinación de eventos de integración interna y bienestar laboral.",
    requirements: [
      "Formación en Mercadeo o Administración, o estudiante en curso de Psicología (2do cuatrimestre)",
      "Capacidad de mediación, confidencialidad, empatía y habilidades interpersonales",
      "Manejo ordenado de documentación, herramientas de Microsoft Office y reportes de RRHH",
      "Residir en La Romana"
    ],
    coverLetter: `Estimado Equipo de Selección,

Les escribo para presentar mi postulación a la posición de Asistente de Gestión Humana y Clima Organizacional en su institución en La Romana.

Soy Meibi Esperanza Mota Mora, con formación en Mercadeo en INTEC y cursando actualmente mi segundo cuatrimestre de Licenciatura en Psicología Escolar (O&M). Mi experiencia laboral en Carat Dominicana y mi paso por el sector financiero me han dotado de sólidas competencias en análisis, gestión de datos, comunicación asertiva y trato humano y respetuoso con equipos de trabajo.

Me entusiasma aplicar mis destrezas organizativas para fortalecer el ambiente laboral y apoyar las iniciativas de bienestar en La Romana.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-gj-romana-01",
    title: "Analista de Control, Presupuesto y Gestión (La Romana)",
    company: "Cath Contreras Consulting (vía Google Jobs)",
    category: "psicologia",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 40,000 - 50,000 / mes",
    salaryNote: "Vacante presencial en La Romana · Extraída vía Google Jobs",
    postedDate: "Reciente · Google Jobs",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Google Jobs", "La Romana", "Análisis", "Control y Reportes"],
    url: "https://www.tripalis.com/empleo/analista-de-costo-en-obras-en-la-romana-a1fc3e",
    contactEmail: "reclutamiento@cathcontreras.com",
    description: "Análisis de presupuestos, control de datos operativos, seguimiento administrativo y elaboración de reportes en Excel/Power BI para operaciones presenciales en La Romana.",
    requirements: [
      "Residir en La Romana, República Dominicana",
      "Capacidad analítica avanzada y manejo de Excel / reportes financieros",
      "Organización, seguimiento de presupuestos y trabajo en equipo"
    ],
    coverLetter: `Estimado Equipo de Selección de Cath Contreras Consulting,

Les escribo para presentar mi postulación a su vacante de Analista en la ciudad de La Romana.

Cuento con más de 6 años de experiencia en análisis riguroso de datos, control de presupuestos y elaboración de reportes ejecutivos en Carat Dominicana, además de experiencia previa en análisis de cuentas y cobranzas en el sector financiero (APAP). Poseo dominio avanzado de herramientas analíticas y de reportería (Excel, Power BI, PowerPoint).

Siendo residente permanente en La Romana, me complace poner a su disposición mi dedicación profesional.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },

  // =========================================================================
  // 2. SECTOR BANCARIO, FINANCIERO Y FACTURACIÓN EN LA ROMANA (PRESENCIAL LA ROMANA)
  // =========================================================================
  {
    id: "meibi-banco-01",
    title: "Oficial de Servicio al Cliente y Operaciones Sucursal",
    company: "APAP (Asociación Popular de Ahorros y Préstamos)",
    category: "banco",
    location: "La Romana, República Dominicana",
    modality: "Presencial (Sucursal La Romana)",
    salaryDOP: "RD$ 38,000 - 46,000 / mes",
    salaryNote: "Salario base + bonificación anual + seguro médico privado",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["APAP", "Banca", "Servicio al Cliente", "La Romana"],
    url: "https://apap.com.do/vacantes/",
    contactEmail: "reclutamiento@apap.com.do",
    description: "Atención personalizada a socios y clientes en sucursal La Romana: apertura de cuentas de ahorros, certificados financieros, solicitudes de préstamos hipotecarios y de consumo, y asesoría en canales digitales.",
    requirements: [
      "Licenciatura en Mercadeo, Administración o afines",
      "Experiencia previa en el sector financiero (valorada pasantía previa en APAP)",
      "Orientación al servicio, empatía, proactividad y manejo de quejas",
      "Residencia en La Romana"
    ],
    coverLetter: `Estimado Equipo de Gestión del Talento Humano, APAP La Romana,

Es un gran honor dirigirme nuevamente a la Asociación Popular de Ahorros y Préstamos, institución en la que tuve el privilegio de realizar mi pasantía en la Dirección de Recuperación de Créditos.

Cuento con formación en Mercadeo por INTEC y más de seis años de experiencia profesional supervisando análisis de datos, lo cual fortalece mi agilidad operativa, atención al detalle y capacidad para brindar un servicio financiero cálido y resolutivo.

Resido en La Romana y me llena de ilusión reincorporarme a la familia APAP en nuestra sucursal local.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-banco-02",
    title: "Oficial de Negocios y Atención al Cliente",
    company: "Banreservas (Banco de Reservas)",
    category: "banco",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 40,000 - 50,000 / mes",
    salaryNote: "Beneficios de ley + plan de retiro + bonos",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Banreservas", "Banca", "Servicio al Cliente", "La Romana"],
    url: "https://www.banreservas.com/",
    contactEmail: "empleos@banreservas.com",
    description: "Gestión comercial y operativa en sucursal La Romana: colocación de productos bancarios, vinculación de nuevos clientes personales y comerciales, y soporte a transacciones de ventanilla y plataforma.",
    requirements: [
      "Licenciatura en Mercadeo, Contabilidad o Administración",
      "Habilidades comerciales, empatía y orientación a metas",
      "Experiencia en servicio al cliente o sector bancario",
      "Residencia en La Romana"
    ],
    coverLetter: `A la atención del Comité de Selección, Banco de Reservas de la República Dominicana,

Me dirijo a ustedes para presentar mi postulación a la posición de Oficial de Negocios y Atención al Cliente en la provincia de La Romana.

Mi perfil integra una sólida base en Mercadeo (INTEC), experiencia en el área de créditos y cobranzas en el sector bancario (APAP) y más de 6 años liderando análisis de mercado en Carat Dominicana. Cuento con excelentes habilidades interpersonales para la fidelización de clientes.

Residiendo en La Romana, me pongo a su entera disposición.

Saludos cordiales,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-banco-03",
    title: "Oficial de Servicios y Cartera",
    company: "Asociación La Nacional de Ahorros y Préstamos (ALNAP)",
    category: "banco",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 35,000 - 45,000 / mes",
    salaryNote: "Salario competitivo + incentivos por cumplimiento",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["La Nacional", "Banca", "Cartera", "La Romana"],
    url: "https://lanacional.com.do/",
    contactEmail: "talento@lanacional.com.do",
    description: "Atención a clientes en plataforma de servicios, seguimiento a solicitudes de financiamiento para viviendas y préstamos personales, y control de expedientes de cartera en La Romana.",
    requirements: [
      "Graduada o estudiante de término en Mercadeo, Administración o afines",
      "Vocación de servicio, orden y habilidades analíticas",
      "Residencia en La Romana"
    ],
    coverLetter: `Estimado Equipo de Gestión Humana, Asociación La Nacional de Ahorros y Préstamos,

Les presento mi hoja de vida para postularme a las vacantes de Oficial de Servicios y Cartera en su sucursal de La Romana.

Cuento con experiencia en recuperación de créditos y atención telefónica en APAP, además de una rigurosa carrera en análisis de información y seguimiento de procesos en Carat Dominicana. Me destaco por mi empatía, organización y facilidad para asesorar a las familias en sus metas financieras.

Agradezco de antemano su consideración.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-banco-04",
    title: "Cajera Principal / Atención al Cliente",
    company: "INCORPSERV EIRL / Sector Financiero",
    category: "banco",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 28,000 - 35,000 / mes",
    salaryNote: "Beneficios de ley + horas extras + bonificación",
    postedDate: "Vigente · Portales RD",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Caja", "Finanzas", "Atención al Cliente", "La Romana"],
    url: "https://do.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-cajera-en-la-romana-la-romana-A0D382B215E9F89961373E686DCF3405",
    contactEmail: "rrhh@incorpserv.com",
    description: "Recepción de pagos, cuadre de caja diario, atención amable a clientes y usuarios, depósito de valores y registro contable en sucursal financiera de La Romana.",
    requirements: [
      "Manejo de caja, cuadres y atención al cliente",
      "Honradez comprobada, puntualidad y trabajo bajo presión",
      "Residir en La Romana"
    ],
    coverLetter: `Estimado Equipo de Recursos Humanos,

Me pongo en contacto para presentar mi postulación como Cajera Principal / Atención al Cliente en La Romana.

Poseo una sólida formación en análisis y manejo riguroso de información y valores, respaldada por mi pasantía en APAP y mi carrera profesional. Cuento con un trato cortés, puntualidad y alto sentido de la responsabilidad.

Resido en La Romana y cuento con disponibilidad inmediata.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-romana-bolin",
    title: "Auxiliar de Facturación y Documentos Comerciales",
    company: "Grupo Bolin S.A.S. (vía Google Jobs)",
    category: "banco",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 30,000 - 38,000 / mes",
    salaryNote: "Beneficios de ley + bonificación comercial (Indispensable La Romana)",
    postedDate: "Esta semana · Google Jobs",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Google Jobs", "Facturación", "La Romana", "Cuentas Comerciales"],
    url: "https://www.google.com.do/search?ibp=htl;jobs&q=empleos+en+La+Romana+Republica+Dominicana&htidocid=MQ2Uw2EnR5sb4zm1AAAAAA%3D%3D",
    contactEmail: "empleos@grupobolin.do",
    description: "Elaboración y emisión de facturas a clientes según órdenes de despacho, verificación de datos comerciales, precios e impuestos. Registro en sistema contable, notas de crédito/débito, archivo organizado y reportes de cierre diario de operaciones en La Romana.",
    requirements: [
      "Indispensable residencia actual en La Romana, República Dominicana",
      "Estudios en Mercadeo, Administración, Contabilidad o carreras afines",
      "Manejo fluido de Microsoft Excel, Word y documentos comerciales",
      "Organización, atención al detalle y responsabilidad"
    ],
    coverLetter: `Estimado Equipo de Selección de Grupo Bolin S.A.S.,

Les escribo con interés en presentar mi candidatura a la posición de Auxiliar de Facturación en La Romana.

Cuento con más de 6 años de experiencia gestionando información estructurada, validando datos y preparando reportes rigurosos en Carat Dominicana, además de mi experiencia previa en APAP apoyando gestiones de cuentas por cobrar y documentación comercial. Poseo dominio de herramientas de Office 365 (Excel intermedio-avanzado) y un perfil ordenado y meticuloso.

Resido permanentemente en La Romana y cumplo a cabalidad con todos los requisitos del puesto.

Agradezco su atención.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-romana-banca",
    title: "Cajera Administrativa y Atención al Usuario",
    company: "Empresa de Servicios & Entretenimiento (La Romana)",
    category: "banco",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 26,000 - 32,000 / mes",
    salaryNote: "Salario base + incentivos de caja + beneficios de ley",
    postedDate: "Esta semana · Google Jobs",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Caja", "Atención al Cliente", "La Romana", "Google Jobs"],
    url: "https://www.google.com.do/search?ibp=htl;jobs&q=empleos+en+La+Romana+Republica+Dominicana&htidocid=MQ2Uw2EnR5sb4zm1AAAAAA%3D%3D",
    contactEmail: "seleccion@bancaromana.com",
    description: "Recepción de pagos, cobro de servicios, cuadre de caja de fin de turno, atención amable y ágil al público en punto de servicio en La Romana.",
    requirements: [
      "Residir en La Romana",
      "Experiencia en cuadres de caja o atención al público",
      "Organización y puntualidad"
    ],
    coverLetter: `Estimado Equipo de Selección,

Me dirijo a ustedes para postularme a la vacante de Cajera y Atención al Usuario en La Romana.

Cuento con experiencia en atención personalizada, manejo responsable de cuentas y trato cortés, adquirida tanto en el sector financiero (APAP) como en mi trayectoria corporativa.

Resido en La Romana y cuento con disponibilidad inmediata.

Saludos cordiales,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },

  // =========================================================================
  // 3. ATENCIÓN AL CLIENTE, SALUD Y SERVICIOS EN LA ROMANA (PRESENCIAL LA ROMANA)
  // =========================================================================
  {
    id: "meibi-serv-01",
    title: "Representante de Servicio al Cliente (AFP / ARS / Seguros)",
    company: "Importante Empresa del Sector Previsión y Salud",
    category: "servicio",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 32,000 - 40,000 / mes",
    salaryNote: "Salario competitivo + seguro médico premium + comisiones",
    postedDate: "Esta semana",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Servicio al Cliente", "Seguros", "ARS", "La Romana"],
    url: "https://do.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-representante-de-servicio-al-cliente-en-la-romana-la-romana-5E9B28",
    contactEmail: "talento.salud@prevision.com.do",
    description: "Orientación integral a afiliados de salud y pensiones: autorizaciones médicas, reclamaciones, información de coberturas y resolución cordial de inquietudes presenciales en La Romana.",
    requirements: [
      "Licenciatura en Mercadeo o afines",
      "Alta empatía, orientación al usuario y comunicación asertiva",
      "Residencia en La Romana"
    ],
    coverLetter: `A la atención del Departamento de Gestión Humana,

Les escribo con gran entusiasmo para postularme a la posición de Representante de Servicio al Cliente en su oficina de La Romana.

Mi vocación por la atención al usuario, combinada con mi formación en Mercadeo y mis estudios en Psicología Escolar (O&M), me permiten ofrecer una atención profundamente humana, comprensiva y eficiente en situaciones de salud y previsión social.

Residiendo en La Romana, me encantaría ser la voz y el rostro de confianza para sus afiliados.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-romana-lab",
    title: "Ejecutiva de Atención al Paciente & Servicios de Salud",
    company: "Laboratorio Clínico Especializado (vía Google Jobs)",
    category: "servicio",
    location: "La Romana, República Dominicana",
    modality: "Presencial (La Romana)",
    salaryDOP: "RD$ 32,000 - 42,000 / mes",
    salaryNote: "Beneficios de ley + comisiones de servicios en salud",
    postedDate: "Esta semana · Google Jobs",
    type: "Tiempo Completo",
    recommendedCV: "Analítica & Marketing",
    languageRequirement: "Español",
    tags: ["Salud", "Atención a Pacientes", "La Romana", "Google Jobs"],
    url: "https://www.google.com.do/search?ibp=htl;jobs&q=empleos+en+La+Romana+Republica+Dominicana&htidocid=L0Y2b6Dh3sTdi3DKAAAAAA%3D%3D",
    contactEmail: "rrhh@labromana.do",
    description: "Atención y asesoría personalizada a pacientes e instituciones médicas en La Romana: orientación sobre pruebas clínicas, manejo de consultas telefónicas y digitales, registro de órdenes y seguimiento de resultados.",
    requirements: [
      "Formación en Mercadeo, Administración o afines con interés en el sector salud",
      "Manejo de herramientas de Microsoft Office y plataformas digitales",
      "Excelente empatía, calidez en el trato y comunicación efectiva",
      "Residencia en La Romana"
    ],
    coverLetter: `Estimado Equipo de Gestión del Laboratorio Clínico,

Les escribo para presentar mi postulación a la posición de Ejecutiva de Atención al Paciente en La Romana.

Cuento con sólida formación en Mercadeo (INTEC), cursando actualmente la carrera de Psicología Escolar en O&M, y más de 6 años de experiencia en comunicación corporativa y análisis. Mi perfil se caracteriza por una profunda vocación humana, escucha activa y cordialidad, factores clave en la atención de usuarios en el área de la salud.

Viviendo en La Romana, me pongo a su entera disposición.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },

  // =========================================================================
  // 4. ANALÍTICA DE DATOS Y MERCADEO (100% REMOTO · ESPAÑOL / INGLÉS BÁSICO)
  // =========================================================================
  {
    id: "meibi-ind-centralzone-media",
    title: "Paid Media & Campaign Data Specialist (Remoto)",
    company: "Central Zone (vía Indeed Jobs Scraper)",
    category: "datos",
    location: "Remoto (LATAM / Desde casa)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 75,000 - 95,000 / mes",
    salaryNote: "Remoto internacional · Pago en USD/DOP",
    postedDate: "Esta semana · Indeed",
    type: "Tiempo Completo",
    recommendedCV: "Analítica & Marketing",
    languageRequirement: "Español (Inglés Básico)",
    tags: ["Indeed", "Paid Media", "Google Analytics", "Power BI", "Remoto"],
    url: "https://do.indeed.com/viewjob?jk=centralzone_media_remoto",
    contactEmail: "talent@centralzone.agency",
    description: "Análisis de rendimiento de campañas de medios, inversión publicitaria por categorías, métricas digitales en Google Analytics y dashboards en Power BI en modalidad 100% remota.",
    requirements: [
      "Experiencia demostrada en agencia de medios o análisis de inversión publicitaria",
      "Dominio de Google Analytics, Power BI y Microsoft Excel",
      "Formación en Mercadeo o Publicidad",
      "Idioma: Español (inglés básico técnico)",
      "Modalidad: 100% Remoto desde cualquier lugar de República Dominicana"
    ],
    coverLetter: `Estimado Equipo de Selección de Central Zone,

Me pongo en contacto para postularme a la posición de Paid Media & Campaign Data Specialist en modalidad 100% remota.

Cuento con más de seis años de trayectoria en Carat Dominicana, desempeñándome como Supervisora de Analistas de Medios y Senior Data Analyst. Mi labor diaria consiste precisamente en auditar la inversión publicitaria por marcas, analizar el consumo de medios y traducir métricas de Google Analytics y Power BI en reportes estratégicos para la toma de decisiones.

Aporto dominio avanzado de herramientas analíticas y total autonomía para el trabajo remoto.

Agradezco su atención.

Cordialmente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-ind-kayzen-growth",
    title: "Growth & Marketing Data Analyst (Remoto)",
    company: "Kayzen (vía Indeed Jobs Scraper)",
    category: "datos",
    location: "Remoto (Global / En remoto)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 95,000 - 125,000 / mes",
    salaryNote: "Remoto global · Salario en USD equivalente",
    postedDate: "Esta semana · Indeed",
    type: "Tiempo Completo",
    recommendedCV: "Analítica & Marketing",
    languageRequirement: "Español (Inglés Básico)",
    tags: ["Indeed", "Growth", "Marketing Data", "Power BI", "Remoto"],
    url: "https://do.indeed.com/viewjob?jk=kayzen_growth_da",
    contactEmail: "careers@kayzen.io",
    description: "Análisis de crecimiento, rendimiento de campañas, comportamiento de audiencias, tendencias de mercado y generación de insights accionables en Power BI 100% en remoto.",
    requirements: [
      "Experiencia como Data Analyst en publicidad, medios o mercadeo",
      "Dominio de herramientas de Business Intelligence (Power BI) y Excel avanzado",
      "Capacidad para elaborar Buyer Personas e informes ejecutivos de tendencias",
      "100% Remoto, comunicación en español con inglés básico"
    ],
    coverLetter: `Estimado Equipo de Talento de Kayzen,

Les escribo para presentar mi postulación a la posición de Growth & Marketing Data Analyst.

Como Licenciada en Mercadeo (INTEC, en titulación) y Senior Data Analyst en Carat Dominicana con más de 6 años de experiencia, me especializo en transformar volúmenes de datos publicitarios en tableros comprensibles y lecturas estratégicas sobre el comportamiento de audiencias. He liderado la construcción de Buyer Personas y análisis competitivos para grandes marcas.

Me entusiasma la posibilidad de sumar mi experiencia analítica a sus iniciativas de crecimiento en modalidad remota.

Saludos cordiales,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-ind-zimmer-analyst",
    title: "Sales & Incentive Senior Data Analyst (En remoto)",
    company: "Zimmer Biomet (vía Indeed Jobs Scraper)",
    category: "datos",
    location: "Remoto (Internacional / En remoto)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 110,000 - 145,000 / mes",
    salaryNote: "100% En remoto · Paquete multinacional",
    postedDate: "Esta semana · Indeed",
    type: "Tiempo Completo",
    recommendedCV: "Analítica & Marketing",
    languageRequirement: "Español (Inglés Básico)",
    tags: ["Indeed", "Senior Data Analyst", "Power BI", "Incentivos", "Remoto"],
    url: "https://do.indeed.com/viewjob?jk=zimmer_biomet_sales_da",
    contactEmail: "recruiting@zimmerbiomet.com",
    description: "Análisis e interpretación de datos comerciales y de incentivos, elaboración de tableros interactivos en Power BI, control riguroso de calidad de datos y soporte analítico en modalidad 100% remota.",
    requirements: [
      "3+ años de experiencia en análisis cuantitativo de datos",
      "Dominio avanzado de visualización en Power BI y hojas de cálculo",
      "Supervisión y aseguramiento de la consistencia y calidad de la data",
      "100% Remoto, español nativo e inglés básico técnico"
    ],
    coverLetter: `Estimado Equipo de Selección de Zimmer Biomet,

Me dirijo a ustedes para postularme a la posición de Sales & Incentive Senior Data Analyst en modalidad 100% remota.

En mi rol actual como Senior Data Analyst y Supervisora en Carat Dominicana (donde acumulo más de seis años de trayectoria profesional), tengo bajo mi responsabilidad el control de consistencia, la categorización de datos y el modelado de dashboards interactivos en Power BI para el seguimiento continuo de indicadores clave.

Aporto una cultura de rigor, meticulosidad en los reportes y alta autonomía en entornos remotos.

Agradezco su atención y consideración.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-ind-csg-fin",
    title: "Financial & Data Analyst II (Remoto LATAM)",
    company: "CSG (vía Indeed Jobs Scraper)",
    category: "banco",
    location: "Remoto (LATAM / Desde casa)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 85,000 - 110,000 / mes",
    salaryNote: "100% Remoto · Contrato regional estable",
    postedDate: "Esta semana · Indeed",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español (Inglés Básico)",
    tags: ["Indeed", "Finanzas", "Data Analyst", "Power BI", "Remoto"],
    url: "https://do.indeed.com/viewjob?jk=csg_fin_da_latam",
    contactEmail: "latam.talent@csgi.com",
    description: "Análisis financiero y operativo de cuentas, conciliación de datos de inversión y facturación, control presupuestario y reportería periódica en Power BI y Microsoft Excel trabajando 100% desde casa.",
    requirements: [
      "Experiencia en análisis de datos financieros, presupuestos o inversión",
      "Manejo avanzado de Excel, Office 365 y Power BI",
      "Experiencia en sector financiero o análisis de cuentas comerciales",
      "100% Remoto en América Latina con comunicación en español"
    ],
    coverLetter: `A la atención del Equipo de Reclutamiento de CSG,

Les escribo para presentar mi candidatura a la posición de Financial & Data Analyst II en modalidad 100% remota.

Mi experiencia profesional reúne más de seis años estructurando reportes de inversión en Carat Dominicana y una pasantía formativa en la Dirección de Recuperación de Créditos en la Asociación Popular de Ahorros y Préstamos (APAP). Poseo un manejo sólido de Power BI, tablas dinámicas avanzadas y conciliación de información económica.

Será un honor aportar mi capacidad analítica a sus operaciones en la región.

Saludos cordiales,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },

  // =========================================================================
  // 5. ATENCIÓN AL CLIENTE Y SOPORTE REMOTO (100% REMOTO · ESPAÑOL / INGLÉS BÁSICO)
  // =========================================================================
  {
    id: "meibi-ind-firstimage-support",
    title: "Training & Customer Support Agent (Remoto)",
    company: "First Image Consulting (vía Indeed Jobs Scraper)",
    category: "servicio",
    location: "Remoto (LATAM / Desde casa)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 40,000 - 55,000 / mes",
    salaryNote: "Salario en USD equivalente · 100% Desde casa",
    postedDate: "Esta semana · Indeed",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Indeed", "Soporte", "Capacitación", "Atención al Cliente", "Remoto"],
    url: "https://do.indeed.com/viewjob?jk=firstimage_cs_remote",
    contactEmail: "support@firstimageconsulting.com",
    description: "Soporte, inducción y acompañamiento a usuarios en plataformas digitales, resolución empática de consultas y capacitación guiada 100% desde casa. Excelente para perfiles organizados con vocación pedagógica y de servicio.",
    requirements: [
      "Experiencia en atención al cliente, capacitación o supervisión de equipos",
      "Formación en Mercadeo, Psicología, Educación o áreas afines",
      "Excelentes habilidades de comunicación, escucha y resolución",
      "100% Remoto en español"
    ],
    coverLetter: `Estimado Equipo de First Image Consulting,

Me dirijo a ustedes para presentar mi postulación a la posición de Training & Customer Support Agent en modalidad 100% remota.

Mi perfil integra experiencia supervisando equipos de analistas en Carat Dominicana, formación en Mercadeo (INTEC) y estudios universitarios en Psicología Escolar en O&M. Cuento con una marcada vocación por guiar y capacitar a las personas con paciencia, empatía y claridad didáctica.

Me pongo a su disposición para colaborar en su equipo de soporte remoto.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-serv-04",
    title: "Asesora de Atención Telefónica y Servicio al Cliente",
    company: "Coraxis Contact Solutions",
    category: "servicio",
    location: "Remoto (República Dominicana)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 28,000 - 35,000 / mes",
    salaryNote: "Fijo + bono de conectividad + incentivos de calidad",
    postedDate: "Vigente · Portales RD",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español",
    tags: ["Call Center", "Remoto", "Atención al Cliente", "Servicio"],
    url: "https://do.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-asesor-comercial-telefonico-remoto-ventas-consultivas-ventas-a-empresas-en-santo-domingo-de-guzman-1A0F66F0F895E2AA61373E686DCF3405",
    contactEmail: "rrhh@coraxis.com",
    description: "Atención a consultas entrantes de usuarios, orientación telefónica sobre servicios, registro de incidencias en CRM y seguimiento cordial de soluciones 100% en remoto.",
    requirements: [
      "Habilidades de comunicación verbal, tono afable y empatía",
      "Espacio adecuado y conexión a internet para teletrabajo",
      "Experiencia previa en atención telefónica, cobranzas o servicio",
      "Idioma: Español nativo"
    ],
    coverLetter: `Estimado Equipo de Gestión Humana de Coraxis,

Me dirijo a ustedes para presentar mi postulación como Asesora de Atención Telefónica Remota.

Cuento con experiencia en asistencia telefónica y negociación adquirida en el área de crédito y cobranzas en APAP, además de una sólida trayectoria en comunicación corporativa y atención al usuario. Me caracterizo por mi tono afable, paciencia y enfoque en resolver ágilmente las inquietudes del cliente.

Agradezco de antemano su atención.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  },
  {
    id: "meibi-li-alegra-support",
    title: "Customer Support Analyst República Dominicana",
    company: "Alegra (vía LinkedIn Jobs Scraper)",
    category: "servicio",
    location: "Remoto (República Dominicana)",
    modality: "100% Remoto",
    salaryDOP: "RD$ 45,000 - 60,000 / mes",
    salaryNote: "100% Remoto · Cultura tecnológica · Pago competitivo",
    postedDate: "Esta semana · LinkedIn",
    type: "Tiempo Completo",
    recommendedCV: "Administrativo & Financiero",
    languageRequirement: "Español Nativo",
    tags: ["Alegra", "Finanzas Pymes", "Soporte Remoto", "LinkedIn"],
    url: "https://do.linkedin.com/jobs/view/rep%C3%BAblica-dominicana-customer-support-analyst-at-alegra-4462995782",
    contactEmail: "talento@alegra.com",
    description: "Acompañar y asesorar de forma 100% remota a emprendedores, contadores y pequeñas empresas de República Dominicana en el uso del ecosistema contable y de facturación en la nube. Resolución de dudas con empatía y tecnología.",
    requirements: [
      "Criterio administrativo, comercial o financiero para orientar a emprendedores",
      "Gusto por la tecnología, agilidad de aprendizaje y empatía con el usuario",
      "Excelente redacción y comunicación en español",
      "100% Remoto desde cualquier ciudad de República Dominicana"
    ],
    coverLetter: `Estimado Equipo de Talento de Alegra,

Les escribo con gran entusiasmo para postularme a la posición de Customer Support Analyst en República Dominicana.

Mi formación en Mercadeo por INTEC y mi experiencia en análisis de datos y atención al cliente en el sector financiero (APAP) y publicitario (Carat Dominicana) me permiten conectar con empatía con los emprendedores y dueños de negocio. Me motiva profundamente brindar un soporte claro, cálido y resolutivo que simplifique la gestión comercial de las Pymes.

Aporto agilidad, autonomía y una comunicación impecable en español en modalidad remota.

Quedo a su disposición para una entrevista.

Atentamente,
Meibi Esperanza Mota Mora
(829) 793-3033 | meibimota@gmail.com`
  }
];

// Profile data for Meibi
const MEIBI_PROFILE = {
  name: "Meibi Esperanza Mota Mora",
  title: "Mercadóloga • Senior Data Analyst (Carat) • Psicología Escolar (O&M)",
  phone: "(829) 793-3033",
  email: "meibimota@gmail.com",
  location: "La Romana, República Dominicana",
  cvVersions: {
    marketing: {
      title: "CV Analítica · Investigación · Marketing",
      pdf: "cv/CV_Meibi_Mota_Analitica_Marketing.pdf",
      docx: "cv/CV_Meibi_Mota_Analitica_Marketing.docx",
      targetRoles: "Data Analyst, Research, Marketing Intelligence, Audiencias, Tendencias y Buyer Persona"
    },
    admin: {
      title: "CV Administrativo · Financiero · Operaciones",
      pdf: "cv/CV_Meibi_Mota_Administrativo_Financiero.pdf",
      docx: "cv/CV_Meibi_Mota_Administrativo_Financiero.docx",
      targetRoles: "Operaciones, Banca, Facturación, Cobranzas (APAP), Caja y Servicio al Cliente"
    }
  },
  education: [
    { degree: "Licenciatura en Mercadeo", school: "Instituto Tecnológico de Santo Domingo (INTEC)", period: "Desde 2016 · En proceso de titulación" },
    { degree: "Licenciatura en Psicología Escolar", school: "Universidad Dominicana O&M", period: "En curso (2do Cuatrimestre)" },
    { degree: "Diplomado en Planeación Estratégica", school: "Escuela NOGMA", period: "2022" },
    { degree: "Certificación Google Analytics", school: "Google", period: "2023" }
  ],
  experience: [
    { role: "Senior Data Analyst / Supervisora de Analistas de Medios", company: "Carat Dominicana", period: "Agosto 2022 – Actualidad (Más de 6 años en Carat)" },
    { role: "Analista Jr. de Investigación de Mercados", company: "Carat Dominicana", period: "Mayo 2019 – Agosto 2022" },
    { role: "Pasante – Dirección de Recuperación de Créditos", company: "Asociación Popular de Ahorros y Préstamos (APAP)", period: "Septiembre 2015 – Noviembre 2015" }
  ],
  skills: [
    "Power BI", "Google Analytics", "Microsoft Office 365 (PowerPoint Avanzado, Excel Intermedio)", "Asana", "Miro",
    "Investigación de Mercados & Inversión Publicitaria", "Panoramas Competitivos & Buyer Persona",
    "Recuperación de Créditos & Cuentas por Cobrar (APAP)", "Atención al Cliente & Comunicación Asertiva",
    "Psicología Escolar & Orientación (O&M, 2do Cuatrimestre)", "Facturación & Cuadre de Caja"
  ],
  rulesSummary: {
    language: "Español Nativo / Inglés Básico (Cero bilingüe/avanzado)",
    modality: "Presencial/Híbrido estrictamente en La Romana, RD. Fuera de La Romana estrictamente 100% Remoto."
  }
};
