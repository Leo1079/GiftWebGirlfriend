/**
 * Nuestra historia — contenido editable
 * -----------------------------------------------------------------------------
 * Todo el texto y las fotos de la página se configuran desde acá.
 * Cambiá los textos, la fecha o el listado de fotos sin tocar los componentes.
 */

export type GalleryPhoto = {
  type: "photo";
  /** Ruta de la foto dentro de /public/images (ej: "/images/photo-01.jpg"). */
  src?: string;
  alt: string;
  /** Relación de aspecto (utilidad de Tailwind): "aspect-square", "aspect-[3/4]", "aspect-[4/3]", ... */
  aspect?: string;
  caption?: string;
};

export type GalleryText = {
  type: "text";
  text: string;
};

export type GalleryItem = GalleryPhoto | GalleryText;

export const story = {
  names: {
    loveWord: "Amor",
    nickname: "Sote",
    signature: "Tu amor",
  },

  anniversary: {
    /** Fecha de inicio de la relación (aaaa-mm-ddT00:00:00, hora local). */
    date: "2024-11-12T00:00:00",
    display: "12 · 11 · 2024",
  },

  music: {
    /**
     * Música opcional (nunca suena sola, el botón aparece solo si existe el archivo).
     * Colocá un archivo en /public/audio/our-song.mp3.
     */
    src: "/audio/our-song.mp3",
  },

  hero: {
    photo: "/images/photo-09.jpg",
    badge: "Para vos",
    greeting: "Hola, amor.",
    title: "Esta es nuestra historia.",
    subtitle:
      "Una historia que comenzó mucho antes de que supiéramos todo lo que íbamos a vivir.",
    cta: "Comenzar nuestra historia",
  },

  timeline: {
    kicker: "Capítulo 1",
    title: "Cómo empezó todo",
    steps: [
      {
        date: "2024",
        title: "Una fiesta, un cumpleaños, una coincidencia",
        text: "Nos conocimos en una fiesta, en un cumpleaños, allá por 2024. En ese momento todo parecía ser simplemente una coincidencia más. Nos conocimos, estuvimos ahí, compartimos ese momento... y después, como si nada, dejamos de hablar.",
      },
      {
        date: "Un poco después",
        title: "Tu WhatsApp llegó de casualidad",
        text: "Hasta que un día, gracias a una amiga, conseguí tu WhatsApp. Y ahí empezó algo que ninguno de los dos sabía hasta dónde iba a llegar.",
      },
      {
        date: "12 de noviembre de 2024",
        title: "Comenzó oficialmente",
        text: "Y el 12 de noviembre de 2024 comenzó oficialmente nuestra historia.",
      },
    ],
    transitionLine: "Y el",
    transitionDate: "12 · 11 · 2024",
    transitionAfter: "comenzó oficialmente nuestra historia.",
  },

  dateSection: {
    kicker: "Nuestra fecha",
    title: "El día en que empezó oficialmente nuestro para siempre.",
    labels: ["Años", "Meses", "Días", "Horas", "Minutos", "Segundos"],
    note: "Y mientras el tiempo sigue pasando, nosotros seguimos escribiendo nuestra historia.",
  },

  firstMemories: {
    kicker: "Para empezar",
    title: "Las primeras cosas que recuerdo de vos",
    photo: "/images/photo-05.jpg",
    photoAlt: "Un recuerdo de nosotros",
    blocks: [
      {
        kicker: "Primera impresión",
        text: "Lo primero que pensé de vos fue que nunca parabas de hablar.",
        footer: "Y, siendo sincero... parece que eso nunca cambió.",
      },
      {
        kicker: "Tus ojos",
        text: "Pero si hay algo que siempre me llamó la atención fueron tus ojos.",
        footer: "Esos ojos tan claros y tan lindos que desde el principio tuvieron algo que me hacía mirarte un poco más.",
      },
    ],
  },

  whatILove: {
    kicker: "Mi parte favorita",
    title: "Lo que amo de vos",
    words: ["AMOR", "FORTALEZA", "SONRISA"],
    intro: "Te amo por lo que sos.",
    list: [
      "Por tus ojos.",
      "Por tu sonrisa.",
      "Por tus sentimientos.",
      "Por cómo me abrazás.",
      "Por lo graciosa que sos.",
      "Por tu carisma.",
      "Por la forma en la que conseguís alegrarme incluso en los días más difíciles.",
    ],
    affection: {
      title: "Me encanta la forma en la que demostrás el amor que sentís por mí.",
      body: "Tu manera de ser afectiva me hace sentir querido, acompañado y con ganas de seguir adelante.",
      close: [
        "Me hace querer ser alguien para vos.",
        "Alguien que esté a tu altura.",
        "Alguien que pueda hacerte sentir todo el amor que vos me das.",
      ],
    },
  },

  alwaysByMySide: {
    kicker: "Lo más importante",
    title: "Siempre a mi par",
    lines: [
      "Hay días en los que siento que no puedo más.",
      "Días en los que no me veo capaz de hacer determinadas cosas.",
      "Y aun así, vos estás ahí.",
    ],
    reasons: [
      "Para empujarme.",
      "Para darme fuerzas.",
      "Para hacerme reír.",
      "Para recordarme que puedo.",
    ],
    close: "Incluso cuando todo parece estar en ruinas, vos seguís a mi par.",
    highlight: "Gracias por nunca soltarme.",
  },

  whatILearned: {
    kicker: "Porque crecí con vos",
    title: "Lo que aprendí con vos",
    lines: [
      "Con vos aprendí a ser más afectivo.",
      "Aprendí a reconocer mis errores.",
      "A mirar las cosas que hice y también las que no hice.",
      "Aprendí a crecer.",
      "Cambiaste mucho mi manera de pensar.",
      "Cambiaste la forma en la que me veo a mí mismo.",
      "Y, de alguna manera, me ayudaste a descubrir que sí tengo la capacidad de hacer las cosas.",
    ],
    highlight: "Gracias por ayudarme a convertirme en una mejor versión de mí.",
  },

  gallery: {
    kicker: "Nuestra historia en fotos",
    title: "Nuestros momentos",
    subtitle:
      "Para agregar fotos, colocá los archivos en public/images/ y aparecen solas.",
    /**
     * Fotos de la galería (masonry).
     * - { type: "text", text }  → tarjeta con una frase.
     * - { type: "photo", src, alt, aspect, caption? } → foto.
     * Si el archivo todavía no existe, se muestra un placeholder elegante.
     */
    photos: [
      { type: "text", text: "Nosotros." },
      { type: "photo", src: "/images/photo-01.jpg", alt: "Un momento nuestro", aspect: "aspect-[3/4]" },
      { type: "photo", src: "/images/photo-08.jpg", alt: "Mirándonos así", aspect: "aspect-[16/9]" },
      { type: "text", text: "Una de tantas." },
      { type: "photo", src: "/images/photo-03.jpg", alt: "Nuestra foto favorita", aspect: "aspect-[9/16]" },
      { type: "photo", src: "/images/photo-02.jpg", alt: "Otro recuerdo", aspect: "aspect-[4/3]" },
      { type: "text", text: "Otro recuerdo que guardo para siempre." },
      { type: "photo", src: "/images/photo-04.jpg", alt: "Juntos", aspect: "aspect-[4/3]" },
      { type: "photo", src: "/images/photo-07.jpg", alt: "Nuestra sonrisa", aspect: "aspect-[4/3]" },
      { type: "text", text: "Y todas las risas que todavía nos quedan." },
      { type: "photo", src: "/images/photo-06.jpg", alt: "Siempre nosotros", aspect: "aspect-[4/3]" },
    ] satisfies GalleryItem[],
  },

  anecdotes: {
    kicker: "Las que ya vivimos",
    title: "Nuestras anécdotas",
    intro: "Tenemos tantas historias que sería imposible ponerlas todas acá.",
    items: [
      "Las veces que nos juntamos y terminamos cagándonos de risa.",
      "Las conversaciones interminables.",
      "Los momentos que quizás para cualquiera serían pequeños, pero para nosotros significan muchísimo.",
    ],
    outro: "Y todavía nos quedan muchísimas historias por vivir.",
  },

  thanks: {
    kicker: "Desde el corazón",
    title: "Gracias por tanto.",
    paragraphs: [
      "Gracias por siempre estar a mi par.",
      "Gracias por quedarte incluso cuando yo no soy una persona perfecta.",
      "Sé que cometo errores. Sé que muchas veces podría hacer las cosas mejor.",
      "Pero también sabés que siempre trato de hacer lo mejor que puedo. Por vos. Por mí. Por nosotros.",
      "Y por el sueño de que algún día podamos mirar hacia atrás y decir:",
    ],
    highlight: "Lo logramos juntos.",
  },

  savedMe: {
    kicker: "Con el corazón en la mano",
    title: "Una parte que nunca te dije",
    paragraphs: [
      "Hay algo que quizás nunca te dije de la manera en la que debería.",
      "Me salvaste la vida.",
      "Más de una vez.",
      "Hubo momentos en los que atravesé situaciones muy difíciles y sentí que no encontraba la luz al final del túnel.",
      "Y vos estuviste ahí.",
      "No quiero convertir esta parte en algo triste. Quiero que sea una forma de agradecerte.",
      "Porque tu presencia en mi vida significó más de lo que probablemente alguna vez puedas imaginar.",
    ],
    closing: "Gracias por salvarme sin siquiera saber todas las veces que lo hiciste.",
  },

  youAre: {
    kicker: "Lo que sos para mí",
    big: "Sos el pilar de mi vida.",
    lines: [
      "Sos una de las razones por las que pude convertirme en quien soy hoy.",
      "El pilar que me ayuda a seguir.",
      "El apoyo que me impulsa.",
      "La persona que quiero tener a mi lado mientras sigo construyendo mi futuro.",
    ],
    feelings: [
      "Con vos me siento bien.",
      "Me siento seguro.",
      "Me siento feliz.",
      "Me siento en casa.",
    ],
  },

  future: {
    kicker: "Hacia adelante",
    title: "Nuestro futuro",
    intro: "Cuando pienso en el futuro, te veo ahí.",
    dreams: [
      "Una casa linda donde seguir creciendo.",
      "Viajes y lugares nuevos por descubrir.",
      "Nuevas experiencias juntos.",
      "Momentos que todavía ni siquiera conocemos.",
    ],
    paragraphs: [
      "Quiero verte triunfar.",
      "Quiero que me veas triunfar.",
      "Y quiero que, cuando llegue ese momento, podamos mirar todo lo que vivimos y saber que lo hicimos juntos.",
    ],
    highlight: "Lo mejor de nuestra historia todavía no fue escrito.",
  },

  promise: {
    kicker: "En voz baja",
    title: "Mi promesa",
    lines: [
      "Te prometo que quiero seguir caminando a tu lado.",
      "Quiero que seamos compañeros. Amigos. Novios.",
      "Quiero que podamos crecer juntos, equivocarnos juntos, aprender juntos y celebrar cada victoria.",
      "Y quiero que algún día podamos mirar hacia atrás y recordar todo esto con una sonrisa.",
    ],
    closing: "Siempre juntos.",
  },

  letter: {
    kicker: "Para vos",
    title: "Una carta para vos",
    greeting: "Hola, amor.",
    intro: "Soy yo, cumpliendo tu capricho de tener una página.",
    paragraphs: [
      "¿Te acordás de aquel cumpleaños, allá por 2024? Si en ese momento me decís que íbamos a llegar hasta acá, no te hubiese creído. Y acá estamos: con una página entera escrita para vos, para contar lo que empezó como una casualidad y se convirtió en todo.",
      "Nunca imaginé todo lo que íbamos a vivir. Y no me canso de repetirlo: sos una persona fundamental en mi vida. Tus ojos y tu sonrisa siguen siendo de las cosas que más amo de vos. Y saber que siempre estás a mi lado es de las cosas que más agradezco.",
      "Con vos aprendí a crecer. Me ayudaste a convertirme en una mejor versión de mí. Y, aunque quizás no lo sepas del todo, me salvaste la vida más de una vez.",
      "Quiero triunfar. Quiero crecer. Y quiero poder devolverte, algún día, todo lo que hiciste por mí. Porque quiero compartir el futuro con vos.",
    ],
    wish: [
      "Si pudiera volver al día en que te conocí, volvería a elegirte.",
      "Y estaría exactamente igual que hoy:",
      "Con la misma cara de felicidad.",
      "Y con la misma cara de enamorado.",
    ],
    closing: [
      "Gracias por tanto.",
      "Gracias por siempre estar a mi par.",
      "Quiero que sepas que me salvaste la vida más de una vez.",
      "Y que te amo muchísimo.",
    ],
    signature: ["Siempre tuyo.", "Tu amor."],
  },

  finalQuestion: {
    kicker: "El final, solo por ahora",
    question: "¿Querés seguir escribiendo esta historia conmigo?",
    chapter: "Capítulo 1: 12 de noviembre de 2024.",
    continues: "Continuará...",
    button: "Siempre",
    response: "Entonces sigamos.",
  },
};
