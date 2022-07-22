let yokaiData = [
  {
    id: "1",
    japaneseName: "小豆洗い",
    romajiName: "Azukiarai",
    img: "../img/azukiarai.png",
    type: "Yokai",
    appearence: "Humana",
    habitat: "Acuático",
    description:
      "El lavahabas es un señor mayor que vive cerca de los ríos. Se dice que es invisible y que asusta a la gente con su sonido de lavar habas de azuki (shoki shoki), pero en realidad es inofensivo. Probablemente necesite ir a un fisio.",
  },

  {
    id: "2",
    japaneseName: "がしゃ髑髏",
    romajiName: "Gashadokuro",
    img: "../img/gashadokuro.jpg",
    type: "Yokai",
    appearence: "Monstruo",
    habitat: "Urbano",
    description:
      "Un temible esqueleto gigante que no dudará en arrancarte la cabeza y comérsela si tiene ocasión. Tiene el tamaño de 15 personas y es invencible excepto para los monjes shinto. Surge por no enterrar a los muertos debidamente y va por ahí haciendo gachi gachi.",
  },

  {
    id: "3",
    japaneseName: "網切",
    romajiName: "Amikiri",
    img: "../img/amikiri.jpg",
    type: "Yokai",
    appearence: "Animal",
    habitat: "Urbano",
    description:
      "El cortaredes es una criatura con pinzas de langosta, cabeza de pájaro y cola de serpiente. Se dedica a cortar los mosquiteros para que entren y te piquen. También corta las redes de pesca para putear. No suele atacar directamente a los humanos.",
  },

  {
    id: "4",
    japaneseName: "垢嘗",
    romajiName: "Akaname",
    img: "../img/akaname.jpg",
    type: "Yokai",
    appearence: "Monstruo",
    habitat: "Urbano",
    description:
      "El limpiamugres aparecerá en tu baño si está sucio y succionará la suciedad con su lengua, especialmente de la bañera. Es un yokai bastante práctico, pero puedes prevenirlo con un poquito de KH7.",
  },

  {
    id: "5",
    japaneseName: "ろくろ首",
    romajiName: "Rokurokubi",
    img: "../img/rokurokubi.png",
    type: "Yokai",
    appearence: "Humana",
    habitat: "Urbano",
    description:
      "Suelen ser mujeres casadas y aparentemente normales pero con la capacidad de estirar sus cuellos por la noches, momento en que salen a asustar o espiar a sus maridos por la casa. Existe también la versión Nukekubi, en la que la cabeza se separa del cuerpo en busca de víctimas de la que beber su sangre.",
  },

  {
    id: "6",
    japaneseName: "傘",
    romajiName: "Karakasa",
    img: "../img/karakasa.jpg",
    type: "Tsukumogami",
    appearence: "Objeto",
    habitat: "Urbano",
    description:
      "Es una sombrilla que tiene más de 100 años y que ha cobrado vida tras haber sido abandonada por su dueño. Suele tener una sola pierna, un ojo y una lengua larga con la que se dedica a gastar bromas y asustar. Es preferible bendecir tus paraguas en un templo antes de deshacerse de ellos.",
  },

  {
    id: "7",
    japaneseName: "提灯お化け",
    romajiName: "Chochin",
    img: "../img/chochin.jpg",
    type: "Tsukumogami",
    appearence: "Objeto",
    habitat: "Urbano",
    description:
      "Es un farolillo tradicional de papel que ha cobrado vida al cumplir 100 años. Suele considerarse un yokai bromista pero algo peligroso. Le gusta incendiar cosas.",
  },

  {
    id: "8",
    japaneseName: "鬼",
    romajiName: "Oni",
    img: "../img/oni.png",
    type: "Yokai",
    appearence: "Monstruo",
    habitat: "Montañoso",
    description:
      "Son criaturas de tipo ogro, con uno o varios cuernos, garras y pelo rizado. Suelen ir en taparrabos de estampado de tigre e ir acompañados de su garrote con el que apalizan a la gente. Son los guardianes del infierno del budismo. Pueden ser de muchos colores, especialmente azules, rojos y verdes.",
  },

  {
    id: "9",
    japaneseName: "産女",
    romajiName: "Ubume",
    img: "../img/ubume.jpg",
    type: "Yurei",
    appearence: "Humana",
    habitat: "Urbano",
    description:
      "Son espíritus de mujeres que han muerto durante el parto y que no pueden abandonar el mundo. Se aparecen a la gente ensangrentadas dejando un bebé recién nacido en brazos de sus víctimas. También pueden visitar a sus hijos vivos para traerles dulces.",
  },

  {
    id: "10",
    japaneseName: "化け猫",
    romajiName: "Bakeneko",
    img: "../img/bakeneko.jpg",
    type: "Henge Yokai",
    appearence: "Animal",
    habitat: "Urbano",
    description:
      "Todos los gatos pueden convertirse en Bakeneko, si son lo suficientemente grandes y viejos. Caminan erguidos, pueden hablar como humanos y asesinar a sus dueños si no se les ha tratado bien. A su vez, pueden transformarse en Nekomata, momento en que se les bifurca la cola y adquieren poderes como crear fuego y resucitar a los muertos. Les encanta imitar a los humanos.",
  },

  {
    id: "11",
    japaneseName: "人面樹",
    romajiName: "Jinmenju",
    img: "../img/jinmenju.webp",
    type: "Yokai",
    appearence: "Planta",
    habitat: "Montañoso",
    description:
      "Es un árbol cuyo fruto cabezas humanas que no paran de reírse, pero no pueden hablar. A veces se ríen tan fuerte que se caen al suelo. Sí, las cabezas pueden comerse y son de sabor dulce / amargo.",
  },

  {
    id: "12",
    japaneseName: "枕返し",
    romajiName: "Makuragaeshi",
    img: "../img/makuragaeshi.png",
    type: "Yokai",
    appearence: "Monstruo",
    habitat: "Urbano",
    description:
      "Es un yokai invisible que se dedica a cambiarte la almohada de sitio mientras duermes para que no descanses bien. También pueden llegar a sentarse en tu pecho y matarte, pero en general sólo quieren molestar.",
  },

  {
    id: "13",
    japaneseName: "化け狸",
    romajiName: "Bakedanuki",
    img: "../img/tanuki.jpg",
    type: "Henge Yokai",
    appearence: "Animal",
    habitat: "Montañoso",
    description:
      "Los bakedanuki no son malignos, pero sí muy traviesos e inteligentes. Son nocturnos y pueden transformarse a voluntad. Tienen habilidades absolutamente extraordinarias con sus testículos gigantes, que utilizan siempre que pueden.",
  },

  {
    id: "14",
    japaneseName: "ぬっぺっぽう",
    romajiName: "Nuppeppo",
    img: "../img/nuppeppo.jpg",
    type: "Yokai",
    appearence: "Monstruo",
    habitat: "Urbano",
    description:
      "Es una masa informe de carne con arrugas que sugieren una cara. Vive en lugares poco frecuentados o abandonados y les divierte asustar a la gente. Se dice que comerse su carne putrefacta puede tener propiedades curativas. Huele muy mal.",
  },

  {
    id: "15",
    japaneseName: "山姥",
    romajiName: "Yamauba",
    img: "../img/yamauba.jpg",
    type: "Yokai",
    appearence: "Humana",
    habitat: "Montañoso",
    description:
      "Tiene forma de mujer vieja y vive en refugios en las montañas. Es experta en brujería y venenos. Se pueden transformar en una joven mujer que suele ofrecer cobijo a los viajeros. Tan pronto como se han dormido se los come vivos.",
  },

  {
    id: "16",
    japaneseName: "二口女",
    romajiName: "Futakuchionna",
    img: "../img/futakuchionna.jpg",
    type: "Yokai",
    appearence: "Humana",
    habitat: "Urbana",
    description:
      "Son mujeres malditas que tienen una boca adicional en la nuca, por debajo de su cabello, que además pueden mover como tentáculos. La segunda boca tiene hambre constantemente, así frecuentemente comen a escondidas para alimentarla.",
  },

  {
    id: "17",
    japaneseName: "狐",
    romajiName: "Kitsune",
    img: "../img/kitsune.png",
    type: "Henge Yokai",
    appearence: "Animal",
    habitat: "Montañoso",
    description:
      "Son extremadamente inteligentes y adquieren colas adicionales con la edad. Pueden llegar a acumular hasta 9, cuando alcanzan el grado máximo de sabiduría. Pueden cambiar de forma, especialmente a humanos. Les encanta hacerse pasar por mujeres bellas, pero tienen problemas para ocultar sus colas. Entre sus habilidades se encuentran la posesión, control del fuego y del rayo, vuelo, invisibilidad y generar ilusiones ópticas.",
  },

  {
    id: "18",
    japaneseName: "髪切り",
    romajiName: "Kamikiri",
    img: "../img/kamikiri.jpg",
    type: "Yokai",
    appearence: "Animal",
    habitat: "Urbano",
    description:
      "Su pasión es cortar el pelo a la gente sin previo aviso. Tiene pico y pinzas en las manos. Se le suele representar con ropa de sumo. Ataca tanto a hombres como mujeres, especialmente en el baño",
  },

  {
    id: "19",
    japaneseName: "滑瓢",
    romajiName: "Nurarihyon",
    img: "../img/nurarihyon.jpg",
    type: "Yokai",
    appearence: "Humana",
    habitat: "Urbano",
    description:
      "Este viejo con cabeza en forma de calabaza es considerado el líder de los Yokai. Se mete en las casas de la gente y actúa como si fueran suya. Exige comida, bebida y tabaco. No se le puede echar.",
  },

  {
    id: "20",
    japaneseName: "河童",
    romajiName: "Kappa",
    img: "../img/kappa.png",
    type: "Yokai",
    appearence: "Animal",
    habitat: "Acuático",
    description:
      "Tiene forma de tortuga y vive cerca de los ríos en comunidad. Tiene un cuenco boca abajo en la cabeza y del agua del cuenco depende su fuerza. Suele dedicarse a ahogar a la gente. Tiene pasión por los pepinos y por extraer bolas del ano de sus víctimas mediante prácticas homosexuales. Son muy populares.",
  },
];

export default yokaiData;
