// Datová struktura prezentace. Nové bannerové páry se přidávají
// do `bannerPairs` array — zbytek (navigace, progress dots, layout)
// se přizpůsobí automaticky.

export const bannerPairs = [
  {
    id: 'pair-1',
    label: 'Doprava zdarma',
    context: 'Statický banner / 4x5 a 9x16',
    images: {
      ours: '/images/pair1-ours.png',
      client: null, // doplnit po dodání souboru
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
];

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
