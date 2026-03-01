export type Difficulty = 'easy' | 'medium' | 'hard';
export type TrapType = 'active' | 'passive' | 'adhesive';

export interface CareGroup {
  name: string;       // "Lowland" / "Intermediate" / "Highland"
  altitude: string;   // "0–1000 m"
  tempDay: string;    // "28–35°C"
  tempNight: string;  // ">20°C"
  humidity: string;   // "70–90%"
  examplesEs: string;
  examplesEn: string;
  noteEs: string;
  noteEn: string;
  color: string;      // "lowland" | "intermediate" | "highland"
}

export interface SpeciesData {
  slug: string;          // ES slug
  slugEn: string;        // EN slug
  scientific: string;
  nameEs: string;
  nameEn: string;
  family: string;
  originEs: string;
  originEn: string;
  mechanismEs: string;
  mechanismEn: string;
  trapType: TrapType;
  difficulty: Difficulty;
  light: string;
  water: string;
  humidity: string;
  temperature: string;
  substrate: string;
  dormancyEs: string;
  dormancyEn: string;
  descriptionEs: string;
  descriptionEn: string;
  careEs: string;
  careEn: string;
  careGroups?: CareGroup[];
  curiosityEs: string;
  curiosityEn: string;
  image: string;
  images: string[];
  featured: boolean;
}

export const species: SpeciesData[] = [
  {
    slug: 'dionaea-muscipula',
    slugEn: 'venus-flytrap',
    scientific: 'Dionaea muscipula',
    nameEs: 'Venus Atrapamoscas',
    nameEn: 'Venus Flytrap',
    family: 'Droseraceae',
    originEs: 'Carolina del Norte y del Sur (EE. UU.)',
    originEn: 'North and South Carolina (USA)',
    mechanismEs: 'Trampa activa de cierre rápido',
    mechanismEn: 'Fast-closing snap trap',
    trapType: 'active',
    difficulty: 'medium',
    light: '6-8h sol directo',
    water: 'Agua destilada — método del plato',
    humidity: '50-70%',
    temperature: '5-35°C (invierno: 2-10°C)',
    substrate: 'Turba + perlita 1:1',
    dormancyEs: 'Sí — 3-4 meses de noviembre a febrero',
    dormancyEn: 'Yes — 3-4 months from November to February',
    descriptionEs: 'La Venus atrapamoscas es sin duda la planta carnívora más famosa del mundo. Sus hojas modificadas forman trampas bilobuladas con dientes marginales que se cierran en menos de 100 milisegundos cuando un insecto estimula dos veces sus cilios sensitivos. Esta extraordinaria adaptación la convierte en una de las plantas más fascinantes de la naturaleza. Es endémica de una pequeña zona húmeda de las Carolinas, donde crece en suelos ácidos y pobres en nutrientes.',
    descriptionEn: 'The Venus flytrap is undoubtedly the world\'s most famous carnivorous plant. Its modified leaves form bilobed traps with marginal teeth that close in less than 100 milliseconds when an insect stimulates its sensitive hairs twice. This extraordinary adaptation makes it one of the most fascinating plants in nature. It is endemic to a small humid area of the Carolinas, where it grows in acidic, nutrient-poor soils.',
    careEs: 'Necesita pleno sol para que las trampas desarrollen el color rojizo interior que atraerá a los insectos. Riega únicamente con agua destilada o de lluvia mediante el método del plato (1-2 cm de agua bajo la maceta). En otoño-invierno, reduce el riego y proporciona temperaturas de entre 2-10°C durante al menos 3 meses de hibernación. No fuerces la apertura de las trampas: cada una solo puede cerrarse unas 3-5 veces antes de agotarse.',
    careEn: 'It needs full sun for the traps to develop the reddish interior color that will attract insects. Water only with distilled or rainwater using the tray method (1-2 cm of water under the pot). In autumn-winter, reduce watering and provide temperatures of 2-10°C for at least 3 months of dormancy. Do not force the traps open: each can only close 3-5 times before being exhausted.',
    curiosityEs: 'La trampa de la Dionaea se cierra en 100 milisegundos, siendo uno de los movimientos vegetales más rápidos conocidos. Requiere dos estimulaciones separadas por menos de 20 segundos para evitar falsas alarmas por gotas de lluvia.',
    curiosityEn: 'The Dionaea trap closes in 100 milliseconds, making it one of the fastest known plant movements. It requires two stimulations separated by less than 20 seconds to avoid false alarms from raindrops.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/108567955/large.jpg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/108567955/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/511537671/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/56503709/large.jpeg',
    ],
    featured: true,
  },
  {
    slug: 'nepenthes',
    slugEn: 'nepenthes',
    scientific: 'Nepenthes spp.',
    nameEs: 'Nepenthes Tropicales',
    nameEn: 'Tropical Pitcher Plants',
    family: 'Nepenthaceae',
    originEs: 'Sudeste Asiático, Madagascar, Australia',
    originEn: 'Southeast Asia, Madagascar, Australia',
    mechanismEs: 'Trampa pasiva de jarro con fluido digestivo',
    mechanismEn: 'Passive pitcher trap with digestive fluid',
    trapType: 'passive',
    difficulty: 'medium',
    light: '4-6h luz brillante indirecta',
    water: 'Agua destilada — riegos frecuentes',
    humidity: '70-90%',
    temperature: '18-30°C (nocturna: 15-20°C)',
    substrate: 'Musgo Sphagnum + perlita + corteza de orquídea',
    dormancyEs: 'No requiere hibernación',
    dormancyEn: 'No dormancy required',
    descriptionEs: 'Las Nepenthes son las plantas carnívoras más diversas en forma y tamaño. Sus jarras pueden medir desde pocos centímetros hasta más de 40 cm y contienen un fluido viscoso con enzimas digestivas. Algunas especies como Nepenthes rajah son tan grandes que han llegado a capturar ratas pequeñas. Crecen como enredaderas en selvas tropicales, mostrando una extraordinaria variedad morfológica entre las más de 170 especies descritas.',
    descriptionEn: 'Nepenthes are the most diverse carnivorous plants in form and size. Their pitchers can measure from a few centimeters to over 40 cm and contain a viscous fluid with digestive enzymes. Some species like Nepenthes rajah are so large they have been known to capture small rats. They grow as climbers in tropical rainforests, showing extraordinary morphological variety among the over 170 described species.',
    careEs: 'Las Nepenthes se dividen en tres grupos según su altitud de origen, cada uno con exigencias muy distintas de temperatura y humedad. Identificar a qué grupo pertenece tu planta es el primer paso para cultivarla con éxito. Todas prefieren luz brillante indirecta, sustrato muy aireado (Sphagnum + perlita + corteza de orquídea) y riego con agua destilada.',
    careEn: 'Nepenthes are divided into three groups according to their native altitude, with very different temperature and humidity requirements. Identifying which group your plant belongs to is the first step to successfully growing it. All prefer bright indirect light, a very aerated substrate (Sphagnum + perlite + orchid bark) and distilled water.',
    careGroups: [
      {
        name: 'Lowland',
        altitude: '0–1000 m',
        tempDay: '28–35°C',
        tempNight: '>20°C',
        humidity: '70–90%',
        examplesEs: 'N. rafflesiana, N. ampullaria, N. bicalcarata, N. mirabilis',
        examplesEn: 'N. rafflesiana, N. ampullaria, N. bicalcarata, N. mirabilis',
        noteEs: 'Las más tolerantes al calor. Ideales para principiantes en climas cálidos. No soportan noches frías.',
        noteEn: 'The most heat-tolerant. Ideal for beginners in warm climates. Cannot tolerate cold nights.',
        color: 'lowland',
      },
      {
        name: 'Intermediate',
        altitude: '500–1500 m',
        tempDay: '20–30°C',
        tempNight: '15–20°C',
        humidity: '70–85%',
        examplesEs: 'N. ventricosa, N. alata, N. maxima, N. fusca, N. truncata',
        examplesEn: 'N. ventricosa, N. alata, N. maxima, N. fusca, N. truncata',
        noteEs: 'Las más recomendadas para comenzar. Toleran un rango amplio de temperaturas y son robustas.',
        noteEn: 'The most recommended for beginners. They tolerate a wide temperature range and are robust.',
        color: 'intermediate',
      },
      {
        name: 'Highland',
        altitude: '+1500 m',
        tempDay: '20–25°C',
        tempNight: '8–15°C',
        humidity: '80–95%',
        examplesEs: 'N. villosa, N. lowii, N. rajah, N. veitchii, N. edwardsiana',
        examplesEn: 'N. villosa, N. lowii, N. rajah, N. veitchii, N. edwardsiana',
        noteEs: 'Las más exigentes. Requieren noches frescas obligatorias. Sin descenso térmico no producen jarras.',
        noteEn: 'The most demanding. Mandatory cool nights required. Without temperature drop they do not produce pitchers.',
        color: 'highland',
      },
    ],
    curiosityEs: 'Las jarras de Nepenthes albergan ecosistemas enteros llamados inquilinatos: mosquitos, ranas, cangrejos y bacterias que viven dentro del fluido digestivo sin ser digeridos y contribuyen a descomponer las presas.',
    curiosityEn: 'Nepenthes pitchers harbor entire ecosystems called inquilines: mosquitoes, frogs, crabs and bacteria that live inside the digestive fluid without being digested and help decompose prey.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/1285801/large.jpg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/1285801/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/258527543/large.jpg',
      'https://static.inaturalist.org/photos/71228504/large.jpg',
    ],
    featured: true,
  },
  {
    slug: 'sarracenia',
    slugEn: 'sarracenia',
    scientific: 'Sarracenia spp.',
    nameEs: 'Sarracenia',
    nameEn: 'American Pitcher Plants',
    family: 'Sarraceniaceae',
    originEs: 'Este de América del Norte',
    originEn: 'Eastern North America',
    mechanismEs: 'Trampa pasiva tubular con néctar y cerdas',
    mechanismEn: 'Passive tubular trap with nectar and bristles',
    trapType: 'passive',
    difficulty: 'easy',
    light: '6-8h sol directo',
    water: 'Agua destilada — método del plato',
    humidity: '50-70%',
    temperature: '-10 a 35°C (muy resistente)',
    substrate: 'Turba + perlita 1:1',
    dormancyEs: 'Sí — 4-5 meses de noviembre a marzo',
    dormancyEn: 'Yes — 4-5 months from November to March',
    descriptionEs: 'Las Sarracenia son las plantas carnívoras más robustas y fáciles de cultivar. Sus hojas tubulares erectas, que pueden superar el metro de altura, actúan como trampas pasivas: el néctar atrae a los insectos hacia el borde, el opérculo los desorienta y las cerdas apuntando hacia abajo impiden su escape. Son plantas templadas que soportan heladas y necesitan pleno sol. La variedad de colores, formas y tamaños entre las 11 especies las hace perfectas para la colección.',
    descriptionEn: 'Sarracenia are the most robust and easy-to-grow carnivorous plants. Their erect tubular leaves, which can exceed one meter in height, act as passive traps: nectar attracts insects to the edge, the operculum disorients them and downward-pointing bristles prevent escape. They are temperate plants that withstand frost and need full sun. The variety of colors, shapes and sizes among the 11 species makes them perfect for collecting.',
    careEs: 'Son las más fáciles de cultivar. Necesitan pleno sol y el método del plato con agua destilada. Toleran heladas leves pero necesitan protección ante heladas fuertes. La hibernación es obligatoria: en invierno las hojas mueren y en primavera rebrotan con fuerza. Retira las hojas muertas en otoño. Son perfectas para terraza o jardín.',
    careEn: 'They are the easiest to grow. They need full sun and the tray method with distilled water. They tolerate light frost but need protection against hard frost. Dormancy is mandatory: in winter the leaves die and in spring they vigorously resprout. Remove dead leaves in autumn. They are perfect for terraces or gardens.',
    curiosityEs: 'Algunas Sarracenia producen flores tan elaboradas que los insectos polinizadores deben penetrar en la flor y salir por un orificio diferente. La planta asegura la polinización antes de que los insectos caigan en las trampas.',
    curiosityEn: 'Some Sarracenia produce such elaborate flowers that pollinating insects must enter the flower and exit through a different opening. The plant ensures pollination before insects fall into the traps.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/56349988/large.jpeg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/56349988/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/66213377/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/68928300/large.jpg',
    ],
    featured: true,
  },
  {
    slug: 'drosera',
    slugEn: 'sundew',
    scientific: 'Drosera spp.',
    nameEs: 'Drosera',
    nameEn: 'Sundews',
    family: 'Droseraceae',
    originEs: 'Distribución mundial (más de 200 especies)',
    originEn: 'Worldwide distribution (over 200 species)',
    mechanismEs: 'Trampa adhesiva con tentáculos móviles',
    mechanismEn: 'Adhesive trap with moving tentacles',
    trapType: 'adhesive',
    difficulty: 'easy',
    light: '6-8h sol directo o semisombra brillante',
    water: 'Agua destilada — método del plato',
    humidity: '50-80%',
    temperature: 'Variable según especie',
    substrate: 'Turba + perlita 1:1 o arena silícea',
    dormancyEs: 'Varía: especies templadas sí, tropicales no',
    dormancyEn: 'Varies: temperate species yes, tropical no',
    descriptionEs: 'Las Drosera son el género más numeroso de plantas carnívoras, con más de 200 especies distribuidas por todos los continentes excepto la Antártida. Sus hojas están cubiertas de tentáculos con una gota brillante de mucílago en el extremo, que parece rocío pero es una trampa mortal. Cuando un insecto queda atrapado, los tentáculos se doblan lentamente hacia la presa para maximizar el contacto digestivo. La extraordinaria diversidad de formas las hace muy populares entre coleccionistas.',
    descriptionEn: 'Drosera are the most numerous genus of carnivorous plants, with over 200 species distributed across all continents except Antarctica. Their leaves are covered with tentacles with a bright drop of mucilage at the tip, which looks like dew but is a deadly trap. When an insect is caught, the tentacles slowly bend toward the prey to maximize digestive contact. Their extraordinary diversity of forms makes them very popular among collectors.',
    careEs: 'Son muy agradecidas y de fácil cultivo. Necesitan sustrato húmedo con el método del plato y buena luz. Las Drosera de climas templados (D. rotundifolia, D. anglica) necesitan hibernación invernal. Las tropicales (D. capensis, D. aliciae) son de crecimiento continuo y perfectas para principiantes. D. capensis es la más recomendada para empezar.',
    careEn: 'They are very rewarding and easy to grow. They need moist substrate with the tray method and good light. Temperate climate Drosera (D. rotundifolia, D. anglica) need winter dormancy. Tropical ones (D. capensis, D. aliciae) grow continuously and are perfect for beginners. D. capensis is the most recommended to start with.',
    curiosityEs: 'Los tentáculos de las Drosera pueden doblarse y rodear a la presa en menos de un minuto en algunas especies. El mucílago es tan fuerte que puede retener insectos del tamaño de un tábano.',
    curiosityEn: 'Drosera tentacles can bend and surround prey in less than a minute in some species. The mucilage is so strong it can retain insects as large as a horsefly.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/61889240/large.jpg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/61889240/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/9788583/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/40368015/large.jpeg',
    ],
    featured: false,
  },
  {
    slug: 'pinguicula',
    slugEn: 'butterwort',
    scientific: 'Pinguicula spp.',
    nameEs: 'Pinguiculas',
    nameEn: 'Butterworts',
    family: 'Lentibulariaceae',
    originEs: 'Europa, América y Asia',
    originEn: 'Europe, America and Asia',
    mechanismEs: 'Trampa adhesiva de hoja plana',
    mechanismEn: 'Flat leaf adhesive trap',
    trapType: 'adhesive',
    difficulty: 'easy',
    light: '4-6h luz brillante indirecta',
    water: 'Agua destilada — riego moderado',
    humidity: '50-70%',
    temperature: '10-30°C',
    substrate: 'Turba + perlita + arena volcánica',
    dormancyEs: 'Algunas especies forman rosetas de hibernación (hibernáculo)',
    dormancyEn: 'Some species form hibernation rosettes (hibernaculum)',
    descriptionEs: 'Las Pinguicula son plantas carnívoras de aspecto delicado, con hojas planas y carnosas recubiertas de glándulas que segregan un mucílago brillante. Atrapan principalmente pequeños insectos, esporas y fragmentos de materia orgánica. A diferencia de otras carnívoras, sus hojas no se mueven; la digestión ocurre directamente sobre la superficie foliar. Las especies mexicanas son especialmente populares por sus llamativas flores y su relativa facilidad de cultivo.',
    descriptionEn: 'Pinguicula are delicate-looking carnivorous plants with flat, fleshy leaves covered in glands that secrete a bright mucilage. They mainly trap small insects, spores and fragments of organic matter. Unlike other carnivores, their leaves do not move; digestion occurs directly on the leaf surface. Mexican species are especially popular for their showy flowers and relative ease of cultivation.',
    careEs: 'Las Pinguicula mexicanas son las más fáciles de cultivar. Necesitan un sustrato muy bien drenado (mezcla mineral con poca turba) y riego moderado: deja que el sustrato se seque ligeramente entre riegos. Evita mojar las hojas directamente. Necesitan menos luz que otras carnívoras. Las flores son muy decorativas y aparecen en primavera-verano.',
    careEn: 'Mexican Pinguicula are the easiest to grow. They need a very well-drained substrate (mineral mix with little peat) and moderate watering: let the substrate dry slightly between waterings. Avoid wetting leaves directly. They need less light than other carnivores. The flowers are very decorative and appear in spring-summer.',
    curiosityEs: 'Las Pinguicula alpinas europeas cazan incluso esporas de helechos y semillas de gramíneas. Sus hojas se enrollan ligeramente sobre la presa para aumentar la superficie de contacto con las glándulas digestivas.',
    curiosityEn: 'European alpine Pinguicula even hunt fern spores and grass seeds. Their leaves slightly curl over the prey to increase contact area with digestive glands.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/11172207/large.jpeg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/11172207/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/7377788/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/12708476/large.jpeg',
    ],
    featured: false,
  },
  {
    slug: 'heliamphora',
    slugEn: 'heliamphora',
    scientific: 'Heliamphora spp.',
    nameEs: 'Heliamforas',
    nameEn: 'Sun Pitchers',
    family: 'Sarraceniaceae',
    originEs: 'Tepuyes de Venezuela, Brasil y Guyana',
    originEn: 'Tepuis of Venezuela, Brazil and Guyana',
    mechanismEs: 'Trampa pasiva de jarro primitivo',
    mechanismEn: 'Primitive passive pitcher trap',
    trapType: 'passive',
    difficulty: 'hard',
    light: '4-6h luz brillante indirecta',
    water: 'Agua destilada — riego frecuente, jarra llena',
    humidity: '70-90%',
    temperature: '15-28°C (frescas por la noche: 10-15°C)',
    substrate: 'Musgo Sphagnum vivo + perlita',
    dormancyEs: 'No requiere hibernación formal',
    dormancyEn: 'No formal dormancy required',
    descriptionEs: 'Las Heliamphoras son consideradas las plantas carnívoras más primitivas, sin glándulas digestivas propias. Sus jarras capturan el agua de lluvia y confían en bacterias simbióticas para descomponer las presas. Crecen exclusivamente en las cimas de los tepuyes, las antiguas mesetas aisladas de Venezuela y Guyana, entre nubes perpetuas. Son joyas botánicas de difícil acceso y aún más difícil cultivo, aunque algunas especies como H. nutans son relativamente manejables en colección.',
    descriptionEn: 'Heliamphoras are considered the most primitive carnivorous plants, without their own digestive glands. Their pitchers capture rainwater and rely on symbiotic bacteria to decompose prey. They grow exclusively on the summits of tepuis, the ancient isolated plateaus of Venezuela and Guyana, among perpetual clouds. They are botanical gems that are difficult to access and even harder to grow, although some species like H. nutans are relatively manageable in a collection.',
    careEs: 'Son las más exigentes. Necesitan temperaturas frescas constantes (noches de 10-15°C), alta humedad y agua de muy baja conductividad. Viven en zonas con lluvia diaria, por lo que el sustrato debe estar siempre húmedo. Luz brillante pero no sol directo durante muchas horas. Un terrario climatizado o una zona fría e iluminada del hogar son ideales.',
    careEn: 'They are the most demanding. They need consistently cool temperatures (nights of 10-15°C), high humidity and very low conductivity water. They live in areas with daily rain, so the substrate must always be moist. Bright light but not direct sunlight for many hours. A climate-controlled terrarium or a cool, well-lit area of the home is ideal.',
    curiosityEs: 'Las Heliamphoras crecen en cimas de tepuyes a más de 2000 metros sobre el mar, en uno de los ecosistemas más aislados del planeta. Muchas especies son endémicas de un único tepuy y se consideran en peligro de extinción.',
    curiosityEn: 'Heliamphoras grow on tepui summits at over 2000 meters above sea level, in one of the most isolated ecosystems on the planet. Many species are endemic to a single tepui and are considered endangered.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/28898145/large.jpeg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/28898145/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/105784026/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/162437166/large.jpeg',
    ],
    featured: false,
  },
  {
    slug: 'cephalotus-follicularis',
    slugEn: 'cephalotus',
    scientific: 'Cephalotus follicularis',
    nameEs: 'Cephalotus',
    nameEn: 'Albany Pitcher Plant',
    family: 'Cephalotaceae',
    originEs: 'Suroeste de Australia Occidental',
    originEn: 'Southwest Western Australia',
    mechanismEs: 'Trampa pasiva de jarro con tapa articulada',
    mechanismEn: 'Passive pitcher trap with articulated lid',
    trapType: 'passive',
    difficulty: 'hard',
    light: '4-6h luz brillante indirecta',
    water: 'Agua destilada — riego moderado, nunca encharcado',
    humidity: '60-80%',
    temperature: '5-30°C (frescos en invierno: 5-10°C)',
    substrate: 'Turba + perlita + arena silícea 1:1:1',
    dormancyEs: 'Sí — período de frío invernal recomendado',
    dormancyEn: 'Yes — winter cold period recommended',
    descriptionEs: 'Cephalotus follicularis es el único representante de su familia y uno de los tesoros más codiciados entre los cultivadores de plantas carnívoras. Sus pequeñas jarras, de apenas 3-5 cm, poseen una tapa articulada con costillas translúcidas que guían a los insectos hacia el interior mediante fototropismo. A diferencia de otras carnívoras de jarro, Cephalotus produce simultáneamente hojas fotosintéticas normales y hojas transformadas en jarras. Es endémica de una pequeña región pantanosa del suroeste australiano, donde las condiciones son muy específicas.',
    descriptionEn: 'Cephalotus follicularis is the sole member of its family and one of the most coveted treasures among carnivorous plant growers. Its small pitchers, just 3-5 cm, feature an articulated lid with translucent ribs that guide insects inside through phototropism. Unlike other pitcher plants, Cephalotus simultaneously produces both normal photosynthetic leaves and leaves transformed into pitchers. It is endemic to a small boggy region of southwest Australia, where conditions are very specific.',
    careEs: 'Es una de las más difíciles de cultivar. Necesita un sustrato muy drenado pero siempre húmedo, sin encharcamiento directo. La clave es la variación de temperatura: días cálidos (20-28°C) y noches frescas (10-15°C) en verano, y un invierno suave (5-10°C). Tolera mal el calor extremo y la sequía. Usa agua de muy baja conductividad. Trasplanta con mucho cuidado: tiene raíces frágiles. La alta humedad ambiente es imprescindible.',
    careEn: 'It is one of the most difficult to grow. It needs a very well-drained but always moist substrate, without direct waterlogging. The key is temperature variation: warm days (20-28°C) and cool nights (10-15°C) in summer, and a mild winter (5-10°C). It tolerates extreme heat and drought poorly. Use very low conductivity water. Repot very carefully: it has fragile roots. High ambient humidity is essential.',
    curiosityEs: 'Cephalotus es el único miembro de la familia Cephalotaceae, una línea evolutiva completamente independiente de todas las demás plantas carnívoras. Sus jarras evolucionaron de forma convergente con las de Nepenthes y Sarracenia, sin ningún ancestro común que fuera carnívoro.',
    curiosityEn: 'Cephalotus is the only member of the Cephalotaceae family, a completely independent evolutionary lineage from all other carnivorous plants. Its pitchers evolved convergently with those of Nepenthes and Sarracenia, without any common ancestor that was carnivorous.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/53613144/large.jpeg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/53613144/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/202394685/large.jpg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/202394703/large.jpg',
    ],
    featured: false,
  },
  {
    slug: 'brocchinia-reducta',
    slugEn: 'brocchinia',
    scientific: 'Brocchinia reducta',
    nameEs: 'Brocchinia',
    nameEn: 'Brocchinia',
    family: 'Bromeliaceae',
    originEs: 'Gran Sabana, Venezuela y Guyana',
    originEn: 'Gran Sabana, Venezuela and Guyana',
    mechanismEs: 'Trampa pasiva de roseta con fluido digestivo',
    mechanismEn: 'Passive rosette trap with digestive fluid',
    trapType: 'passive',
    difficulty: 'hard',
    light: '5-7h sol directo o luz muy brillante',
    water: 'Agua destilada — roseta siempre llena',
    humidity: '70-90%',
    temperature: '18-28°C (nocturna: 12-18°C)',
    substrate: 'Mezcla mineral: perlita + arena volcánica + poca turba',
    dormancyEs: 'No requiere hibernación',
    dormancyEn: 'No dormancy required',
    descriptionEs: 'Brocchinia reducta es una de las pocas bromelias carnívoras conocidas, y una rareza botánica fascinante. Sus hojas forman una roseta tubular cerrada que acumula agua de lluvia y secreciones. Las paredes internas están cubiertas de escamas cerosas resbaladizas que impiden el escape de los insectos que caen atraídos por el brillo y el olor dulce que emana la planta. Crece en la cima de los tepuyes venezolanos junto a Heliamphora, en suelos extremadamente pobres donde la carnivoria es una ventaja evolutiva decisiva.',
    descriptionEn: 'Brocchinia reducta is one of the few known carnivorous bromeliads, and a fascinating botanical rarity. Its leaves form a closed tubular rosette that collects rainwater and secretions. The inner walls are covered with slippery waxy scales that prevent the escape of insects that fall in, attracted by the shine and sweet scent the plant emits. It grows on the summit of Venezuelan tepuis alongside Heliamphora, in extremely nutrient-poor soils where carnivory is a decisive evolutionary advantage.',
    careEs: 'Muy difícil de encontrar y de cultivar fuera de su hábitat. Necesita alta humedad constante, luz intensa y temperatura con diferencia notable entre día y noche. El centro de la roseta debe mantenerse siempre con agua destilada. El sustrato debe ser muy mineral y bien drenado. Es más tolerante al calor que Heliamphora pero igualmente exigente en humedad. Se cultiva mejor en terrario climatizado.',
    careEn: 'Very difficult to find and grow outside its habitat. It needs constant high humidity, intense light and temperature with a notable difference between day and night. The rosette center must always be kept filled with distilled water. The substrate must be very mineral and well-drained. It is more heat-tolerant than Heliamphora but equally demanding in humidity. Best grown in a climate-controlled terrarium.',
    curiosityEs: 'Brocchinia reducta no es una planta carnívora "clásica" en el sentido de tener glándulas digestivas propias: depende de bacterias simbióticas para descomponer a sus presas. Su carnivoria es tan primitiva que algunos botánicos debaten si clasificarla como planta protocarnívora.',
    curiosityEn: 'Brocchinia reducta is not a "classic" carnivorous plant in the sense of having its own digestive glands: it relies on symbiotic bacteria to decompose its prey. Its carnivory is so primitive that some botanists debate whether to classify it as a proto-carnivorous plant.',
    image: 'https://inaturalist-open-data.s3.amazonaws.com/photos/11852667/large.jpeg',
    images: [
      'https://inaturalist-open-data.s3.amazonaws.com/photos/11852667/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/30926162/large.jpeg',
      'https://inaturalist-open-data.s3.amazonaws.com/photos/60706233/large.jpeg',
    ],
    featured: false,
  },
];

export function getSpeciesBySlug(slug: string): SpeciesData | undefined {
  return species.find((s) => s.slug === slug);
}

export function getSpeciesBySlugEn(slugEn: string): SpeciesData | undefined {
  return species.find((s) => s.slugEn === slugEn);
}

export function getFeaturedSpecies(): SpeciesData[] {
  return species.filter((s) => s.featured);
}
