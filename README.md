# Kreativa pod lupou

Prezentace ve formátu slidů pro rozbor bannerové kreativy vůči Meta Advantage+.

## Spuštění lokálně

```bash
npm install
npm run dev
```

## Nasazení na Vercel

1. Nahraj tuto složku jako repo na GitHub (nebo použij `vercel` CLI přímo ze složky).
2. Na [vercel.com](https://vercel.com) → **New Project** → vyber repo.
3. Vercel framework preset detekuje Vite automaticky. Build command i output directory jsou navíc předdefinované v `vercel.json`.
4. Deploy.

Případně přes CLI:
```bash
npm install -g vercel
vercel
```

## Navigace v prezentaci

- Šipky vlevo/vpravo na obrazovce, nebo klávesy ←/→ (případně ↑/↓, mezerník).
- Swipe na mobilu/tabletu.
- Tečky nahoře = přímý skok na slide.

## Jak přidat další bannerový pár

Otevři `src/content.js` a přidej nový objekt do `bannerPairs` array, např.:

```js
{
  id: 'pair-4',
  label: 'Název kampaně',
  context: 'Statický banner / formát',
  images: {
    ours: '/images/pair4-ours.png',
    client: '/images/pair4-client.png',
  },
  verdictOurs: 'krátký verdikt',
  verdictClient: 'krátký verdikt',
  points: [
    { heading: 'Text na ploše', ours: '...', client: '...' },
    { heading: 'CTA', ours: '...', client: '...' },
    { heading: 'Brand recall', ours: '...', client: '...' },
  ],
  summary: 'Shrnující věta pro daný pár.',
},
```

Samotné obrázky vlož do `public/images/`. Slide se do prezentace zařadí automaticky — nemusí se upravovat `App.jsx` ani CSS.

## Pozn. k chybějícímu obrázku

`pair-1.images.client` je momentálně `null` (banner s červenými kruhy "VÍKENDOVÁ DOPRAVA ZDARMA" nebyl nahraný jako soubor, jen vložen v textu konverzace). Po doplnění souboru do `public/images/` stačí v `content.js` vyplnit cestu.
