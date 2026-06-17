// Datová struktura prezentace. Nové bannerové páry se přidávají
// do `bannerPairs` array — zbytek (navigace, progress dots, layout)
// se přizpůsobí automaticky.

export const bannerPairs = [
  {
    id: 'pair-1',
    label: 'Doprava zdarma',
    context: 'Statický banner / 4x5 a 9x16',
    images: {
      ours: '/images/pair1-ours-alt.png',
      client: '/images/pair1-client-circles.png', // doplnit po dodání souboru
    },
    verdictOurs: 'doporučeno vyšší quality score',
    verdictClient: 'vyšší text-to-image ratio',
    points: [
      {
        heading: 'Text na ploše',
        ours: 'Text v levé třetině, zbytek čistá produktová fotka.',
        client: 'Pět řádků textu vyplňuje celou kruhovou plochu, žádný produkt.',
      },
      {
        heading: 'CTA',
        ours: '„Nakoupit nyní →“ — kontrastní tlačítko, jasná akce.',
        client: 'Bez CTA tlačítka, pouze informační sdělení.',
      },
      {
        heading: 'Brand recall',
        ours: 'Logo + claim „Česká výroba od 1879“, produkt na modelkách.',
        client: 'Logo drobné v rohu, bez claimu, bez produktu.',
      },
    ],
    summary: 'Banner s modelkami spojuje sdělení slevy s produktem, jasným CTA a silnějším brandingem — Advantage+ by mu měl přiřadit vyšší quality score ještě před náběhem reálných dat.',
  },
  {
    id: 'pair-2',
    label: 'Kalhoty Marilyn & Monroe',
    context: 'Statický banner / 4x5',
    images: {
      ours: '/images/pair2-ours.png',
      client: '/images/pair2-client.png',
    },
    verdictOurs: 'doporučeno vyšší quality score',
    verdictClient: 'roztříštěná hierarchie',
    points: [
      {
        heading: 'Text na ploše',
        ours: 'Textový blok soustředěný do jedné zóny, jasná hierarchie.',
        client: 'Čtyři textové prvky + dvě šipky roztroušené po celé ploše.',
      },
      {
        heading: 'CTA',
        ours: '„Objevte kolekci →“ — kontrastní tlačítko, oddělené od textu.',
        client: '„Chci své kalhoty“ v ovále splývá s pozadím, nízký kontrast.',
      },
      {
        heading: 'Brand recall',
        ours: 'Logo + claim, jednotná barevná paleta jako stylizovaná kampaň.',
        client: 'Bez loga, čistě produktová koláž 6 modelek.',
      },
    ],
    summary: 'Klientský banner působí jako interní srovnávací grafika, ne jako optimalizovaná reklamní kreativa — chybí CTA i branding, textové prvky jsou rozptýlené.',
  },
  {
    id: 'pair-3',
    label: 'Sleva 20 % na vše',
    context: 'Statický banner / 4x5 — pozn.: klientský banner měl srovnatelné PNO a o něco lepší ROAS',
    images: {
      ours: '/images/pair3-ours.png',
      client: '/images/pair3-client.png',
    },
    verdictOurs: 'lepší quality score',
    verdictClient: 'lepší reálný ROAS',
    points: [
      {
        heading: 'Text na ploše',
        ours: 'Text v levé třetině, pravá strana lifestyle fotka.',
        client: 'Banner poskládaný skoro celý z textových/grafických bloků.',
      },
      {
        heading: 'CTA',
        ours: '„Nakoupit se slevou →“ — konkrétní, akční formulace.',
        client: '„KLIKNI“ — funguje jako CTA, ale obecné, bez akce.',
      },
      {
        heading: 'Brand recall',
        ours: 'Logo s claimem, integrované do designu.',
        client: 'Logo jen jako malá krabička v rohu.',
      },
    ],
    summary: 'Quality score favorizuje náš banner, ale klientský přesto performoval srovnatelně/lépe — pattern interrupt, agresivní vizuál čísla slevy a nižší "ad-like" vzhled mohou zvýšit CTR/CVR nezávisle na quality score, které ovlivňuje primárně cenu zobrazení (CPM), ne přímo konverzi.',
  },
  {
    id: 'pair-4',
    label: 'Night Shopping',
    context: 'Statický banner / 4x5 — rozdíl mezi bannery je menší než u předchozích případů',
    images: {
      ours: '/images/pair5-ours.png',
      client: '/images/pair5-client.png',
    },
    verdictOurs: 'jasná hierarchie a CTA',
    verdictClient: 'chybí CTA tlačítko',
    points: [
      {
        heading: 'Text na ploše',
        ours: 'Vertikální hierarchie — datum nahoře, nadpis, sleva, podmínka, kód.',
        client: 'Stejné sdělení komprimované do menšího prostoru, plošší hierarchie.',
      },
      {
        heading: 'CTA',
        ours: '„Nakoupit se slevou →“ — kontrastní tlačítko s šipkou.',
        client: '„PRO SLEVU“ jen jako popisek ke kódu, bez akčního tlačítka.',
      },
      {
        heading: 'Brand recall',
        ours: 'Logo + claim, kontrastně dole vpravo na temném pozadí.',
        client: 'Logo + claim přítomné, podobně viditelné jako u našeho banneru.',
      },
    ],
    summary: 'Rozdíl mezi bannery je tu nejmenší ze všech srovnání — oba mají logo i podobnou fotku. Hlavní slabina klientského banneru je chybějící CTA tlačítko, což je opakující se problém i u dřívějších klientských kreativ.',
  },
];

export const singleBanner = {
  id: 'web-leto',
  label: 'Léto patří šatům',
  context: 'Webový hero banner — není v Meta kampani',
  image: '/images/web-banner-leto.png',
  points: [
    {
      heading: 'Text na ploše a hierarchie',
      text: 'Tři odlišné typografické styly v jednom sdělení (brush font, serif, brush script) — chybí jasná hierarchie hlavního nadpisu a doplňujícího textu.',
    },
    {
      heading: 'CTA',
      text: '„Chci si vybrat“ je funkční a kontrastní, ale je nejmenším a nejméně výrazným prvkem banneru, zaniká v levém dolním rohu.',
    },
    {
      heading: 'Brand recall',
      text: 'Chybí logo Evona úplně — pro konzistenci vizuální identity napříč kreativami by mělo být přítomné i na webových bannerech.',
    },
    {
      heading: 'Produktové fotky',
      text: 'Tři modelky, tři různá prostředí a barevné tóny — chybí jednotící vizuální linka, působí jako tři samostatné shooty vedle sebe.',
    },
    {
      heading: 'Barva pozadí',
      text: 'Teplá žlutooranžová asociuje léto a funguje, ale v kombinaci s nesourodými fotkami nepůsobí jako sjednocující prvek.',
    },
  ],
  summary: 'Formát/poměr stran pro Meta zde nehraje roli — jde o webový hero banner. Hlavní doporučení: sjednotit typografii na max. 2 styly, doplnit logo, sjednotit produktové fotky a posílit CTA vizuálně.',
};

export const doList = [
  'Čistý vizuál s minimem textu — produkt/lifestyle foto na většině plochy.',
  'Jasné, kontrastní CTA tlačítko s konkrétní akcí (ne jen „Klikni“).',
  'Viditelné logo a brand prvky integrované do designu, ne odsunuté do rohu.',
  'Logo musí být na první pohled čitelné — dostatečný kontrast vůči pozadí, ne zanikající v textuře fotky.',
  'Bez chyb v textu — gramatika, diakritika, interpunkce na 100 %.',
  'Tečka do názvu (H1) nepatří — nadpis není věta.',
  'Nezaměnitelný vzhled — banner musí být na první pohled poznat jako Evona, i bez loga.',
  'Jednotná vizuální identita napříč kampaní — paleta, typografie, kompozice.',
];

export const dontList = [
  'Banner přeplácaný textem na úkor produktové fotografie.',
  'Chybějící nebo nenápadné CTA, které splývá s pozadím.',
  'Logo jako drobný doplněk bez claimu, bez vazby na produkt.',
  'Logo zanikající v pozadí (nízký kontrast, příliš malé, schované v rohu fotky).',
  'Gramatické chyby, chybějící diakritika, nekonzistentní interpunkce.',
  'Tečky za nadpisy a krátkými claimy.',
  'Vzhled zaměnitelný s jakoukoliv jinou značkou v kategorii.',
  'Roztříštěná textová hierarchie — víc rovnocenných bloků bez jasného hlavního sdělení.',
];

export const additionalIssues = [
  {
    title: 'Vzhled IG feedu',
    body: 'Bannery se neposuzují jen jednotlivě — důležité je, jak vedle sebe vypadají v gridu IG profilu. Feed by měl působit jako jednotná, rozpoznatelná řada, ne jako sled nesouvisejících kreativ. Při plánování kampaně je nutné dívat se na feed jako celek, ne jen na jednotlivý banner.',
  },
  {
    title: 'YouTube videa',
    body: 'Na YouTube by neměla jít jednotlivá produktová videa izolovaně, ale spíše přehledová videa, kde jsou produkty ukázané společně (např. celá kolekce). Videa by měla mít větší detail záběru na produkt a jasnou dramaturgii — musí dávat smysl jako celek, ne působit jako odstřižek z jiného formátu.',
  },
];
