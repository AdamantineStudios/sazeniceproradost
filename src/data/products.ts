import type { CategoryId } from "./categories";

export type UmisteniId = "zahon" | "sklenik" | "balkon" | "truhlik";

export const UMISTENI: Record<UmisteniId, string> = {
  zahon: "na záhon",
  sklenik: "do skleníku",
  balkon: "na balkón",
  truhlik: "do truhlíku",
};

export type Product = {
  slug: string;
  nazev: string;
  /** Odrůda, pokud ji uvádíme (např. „Vilma“, „Nela F1“). */
  odruda?: string;
  kategorie: CategoryId;
  /** Krátký text na kartu v nabídce (~1 věta). */
  kratkyPopis: string;
  /** Odstavce delšího popisu na detailu. */
  popis: string[];
  /** Pěstitelské tipy — odrážky na detailu. */
  tipy: string[];
  /** Měsíce, kdy bývá k odběru (1–12). */
  mesice: number[];
  umisteni: UmisteniId[];
  badge?: "Oblíbené" | "Novinka";
  // --- připraveno pro budoucí e-shop, zatím se nikde nezobrazuje ---
  cena?: number;
  skladem?: boolean;
};

export const PRODUCTS: Product[] = [
  // ── Rajčata ────────────────────────────────────────────────────────────
  {
    slug: "rajce-stupicke",
    nazev: "Rajče tyčkové",
    odruda: "Stupické polní rané",
    kategorie: "rajcata",
    kratkyPopis:
      "Legendární česká odrůda — spolehlivá, raná a chuťově pořád jedna z nejlepších.",
    popis: [
      "Stupické polní rané je klasika, na kterou nedají dopustit generace českých zahrádkářů. Středně velké, pravidelné plody s vyváženou sladko-kyselou chutí dozrávají už od července.",
      "Sazenice předpěstováváme jednotlivě v květináčcích, takže mají silný kořenový bal a po výsadbě rychle odrostou.",
    ],
    tipy: [
      "Vysazujte až po „zmrzlých“ (po 15. květnu), na slunné stanoviště.",
      "Veďte na jeden výhon u opory a vylamujte zálistky.",
      "Zalévejte ke kořenům, ne na list — rajče vám poděkuje zdravím.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon", "sklenik"],
    badge: "Oblíbené",
  },
  {
    slug: "rajce-vilma",
    nazev: "Rajče keříčkové",
    odruda: "Vilma",
    kategorie: "rajcata",
    kratkyPopis:
      "Kompaktní balkónové rajčátko do truhlíku i většího květináče. Nepotřebuje oporu.",
    popis: [
      "Vilma je drobná, ale poctivá: nízký keřík obsypaný červenými plody velikosti pingpongového míčku. Ideální volba, když nemáte zahradu — stačí slunný balkón nebo parapet.",
      "Roste determinantně, takže ji nemusíte vyvazovat ani zaštipovat. Prostě jen zaléváte a sklízíte.",
    ],
    tipy: [
      "Květináč aspoň 5 litrů, truhlík klidně sdílený s bazalkou.",
      "Na slunci se vybarví i chuť — čím víc světla, tím sladší plody.",
      "V horkých dnech zalévejte denně, nejlépe ráno.",
    ],
    mesice: [5, 6],
    umisteni: ["balkon", "truhlik"],
    badge: "Oblíbené",
  },
  {
    slug: "rajce-cherry",
    nazev: "Rajče cherry tyčkové",
    kategorie: "rajcata",
    kratkyPopis:
      "Sladké drobné plody v dlouhých hroznech — mlsání rovnou z keře až do podzimu.",
    popis: [
      "Cherry rajčata jsou nejvděčnější pěstování pro rodiny s dětmi: dozrávají postupně, plodí obrovské množství a málokterý plod vůbec dojde do kuchyně.",
      "Předpěstováváme osvědčené sladké odrůdy s vysokou odolností — konkrétní odrůdu v daném roce rádi upřesníme v odpovědi na poptávku.",
    ],
    tipy: [
      "Tyčkové cherry potřebuje oporu 1,8–2 m — poroste výš, než čekáte.",
      "Vylamujte zálistky, ať síla jde do plodů.",
      "Skvěle plodí i ve velkém květináči (10 l+) na terase.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon", "sklenik", "balkon"],
  },
  {
    slug: "rajce-masite",
    nazev: "Rajče masité",
    kategorie: "rajcata",
    kratkyPopis:
      "Velkoplodá „bifteková“ rajčata na krájení — jeden plod, celý salát.",
    popis: [
      "Masitá rajčata s minimem semen a hutnou dužninou jsou král letní kuchyně: na plátky s mozzarellou, do salátů i na zavařování.",
      "Vyžadují trochu víc péče a tepla než klasika, proto je předpěstováváme silné a otužilé, aby měly náskok.",
    ],
    tipy: [
      "Dopřejte jim nejteplejší a nejslunnější místo, ideálně u zdi nebo ve skleníku.",
      "Přihnojujte od nasazení prvních plodů.",
      "Omezte počet květenství na 4–5, plody budou větší.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon", "sklenik"],
  },

  // ── Papriky ────────────────────────────────────────────────────────────
  {
    slug: "paprika-nela",
    nazev: "Paprika sladká",
    odruda: "Nela F1",
    kategorie: "papriky",
    kratkyPopis:
      "Prověřený hybrid se silnostěnnými sladkými plody — jistota i v našem podnebí.",
    popis: [
      "Nela je odrůda, které věříme natolik, že ji pěstujeme i pro sebe. Velké žlutozelené plody zrající do červena mají tlustou, šťavnatou stěnu a spolehlivě dozrávají i venku.",
      "Papriky klíčí a rostou pomalu — proto se vyplatí koupit silnou předpěstovanou sazenici z vytápěného pařeniště.",
    ],
    tipy: [
      "Vysazujte po polovině května do nejteplejšího koutu zahrady.",
      "Paprika nesnáší přelití — raději méně a pravidelně.",
      "První květ v rozvětvení vyštípněte, rostlina se lépe rozroste.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon", "sklenik"],
    badge: "Oblíbené",
  },
  {
    slug: "paprika-berani-roh",
    nazev: "Paprika beraní roh",
    kategorie: "papriky",
    kratkyPopis:
      "Dlouhé špičaté plody na gril, do leča i k nakládání. Sladká, s jemným říznutím.",
    popis: [
      "Beraní rohy patří k létu jako gril a dobrá společnost. Tenkostěnné, aromatické plody se hodí všude tam, kde má paprika chutnat, ne jen křupat.",
      "Sazenice pěstujeme v jednotlivých květináčcích, aby přesazení přežily bez šoku.",
    ],
    tipy: [
      "Čím víc slunce, tím výraznější chuť i barva.",
      "Plody sklízejte průběžně — rostlina pak nasazuje další.",
      "Ve větru rostliny podepřete tyčkou, plody jsou dlouhé a těžké.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon", "sklenik"],
  },
  {
    slug: "paprika-chilli",
    nazev: "Chilli paprička",
    kategorie: "papriky",
    kratkyPopis:
      "Pálivé papričky do květináče i na záhon — od jemného říznutí po pořádný oheň.",
    popis: [
      "Každý rok předpěstováváme několik odrůd chilli různé pálivosti — od kajenek po habanera. Napište do poptávky, jak moc si troufáte, a my vybereme.",
      "Chilli krásně roste v květináči na slunném parapetu, takže na podzim si ho můžete vzít domů a sklízet dál.",
    ],
    tipy: [
      "Květináč od 3 litrů, propustný substrát, slunce co nejvíc.",
      "Mírná „žízeň“ mezi zálivkami pálivost plodů zvyšuje.",
      "Plody sušte nebo zamrazte — chilli se neztrácí.",
    ],
    mesice: [5, 6],
    umisteni: ["balkon", "truhlik", "zahon"],
  },

  // ── Okurky a tykve ─────────────────────────────────────────────────────
  {
    slug: "okurka-marta",
    nazev: "Okurka salátová",
    odruda: "Marta F1",
    kategorie: "okurky-a-tykve",
    kratkyPopis:
      "Dlouhá hadovka s hladkou slupkou a jemnou chutí — do skleníku i teplé zahrady.",
    popis: [
      "Marta je spolehlivá salátová okurka typu hadovka: dlouhé rovné plody bez hořkosti, které rostou tak rychle, že je v sezóně sklízíte ob den.",
      "Sazenice roubujeme… ne, vážně: pěstujeme je poctivě ze semene v teple, s dostatkem místa pro kořeny — a přesně tak vypadají.",
    ],
    tipy: [
      "Okurka miluje teplo a vlahu — zalévejte odstátou vodou, ne studenou.",
      "Ve skleníku veďte vzhůru po provázku, ušetříte místo.",
      "Sklízejte průběžně, přerostlé plody brzdí násadu dalších.",
    ],
    mesice: [5, 6],
    umisteni: ["sklenik", "zahon"],
    badge: "Oblíbené",
  },
  {
    slug: "okurka-santos",
    nazev: "Okurka salátová",
    odruda: "Santos F1",
    kategorie: "okurky-a-tykve",
    kratkyPopis:
      "Odolná salátovka s bohatou násadou — dobrá volba pro pěstování venku.",
    popis: [
      "Santos snáší výkyvy počasí líp než většina salátovek, takže se hodí i na venkovní záhon bez fólie. Plody jsou středně dlouhé, křupavé a šťavnaté.",
      "V kombinaci s Martou pokryjete celou sezónu — jedna ve skleníku, druhá venku.",
    ],
    tipy: [
      "Vysazujte do vyhřáté půdy, dřív než v polovině května to nemá smysl.",
      "Mulč (tráva, sláma) udrží vláhu a čisté plody.",
      "Hnojte opatrně — přehnojená okurka žene do listů, ne do plodů.",
    ],
    mesice: [5, 6],
    umisteni: ["sklenik", "zahon"],
  },
  {
    slug: "cuketa",
    nazev: "Cuketa",
    kategorie: "okurky-a-tykve",
    kratkyPopis:
      "Dvě rostliny uživí rodinu. Mladé plody každý druhý den, od června do mrazů.",
    popis: [
      "Cuketa je nejštědřejší zelenina, jakou můžete zasadit. Z jedné silné sazenice sklidíte desítky plodů — a mladé cukety do 20 cm jsou chuťově úplně jinde než ty přerostlé.",
      "Předpěstované sazenice mají oproti přímému výsevu náskok několik týdnů.",
    ],
    tipy: [
      "Dejte jí místo: jedna rostlina zabere dobrý metr čtvereční.",
      "Zalévejte vydatně ke kořenům, květy nechte suché.",
      "Sklízejte mladé plody — rostlina pak plodí celé léto.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon"],
  },
  {
    slug: "dyne-hokaido",
    nazev: "Dýně Hokkaido",
    kategorie: "okurky-a-tykve",
    kratkyPopis:
      "Oranžová klasika na polévky a pečení. Slupka se jí taky — žádné loupání.",
    popis: [
      "Hokkaido si za posledních pár let právem získalo české kuchyně: oříškově sladká dužnina, slupka, která se rozvaří, a plody akorát na jedno vaření.",
      "Sazenice vysazujeme do světa až otužené — dýně jsou na chlad háklivé, tak jim dáváme čas.",
    ],
    tipy: [
      "Kompost nebo vyzrálý hnůj v jámě = dvojnásobná úroda.",
      "Nechte rostlině 1,5–2 m prostoru, ráda cestuje.",
      "Sklízejte po zaschnutí stopky, vydrží pak celou zimu.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon"],
  },
  {
    slug: "dyne-maslova",
    nazev: "Dýně máslová",
    kategorie: "okurky-a-tykve",
    kratkyPopis:
      "Hruškovitá „butternut“ s jemnou máslovou dužninou — na pyré, kari i pečení.",
    popis: [
      "Máslová dýně dozrává o něco později než Hokkaido, ale odmění vás hladkou, krémovou dužninou skoro bez vláken a semen jen v malé dutině.",
      "Skvěle se skladuje — poslední kusy dojídáme v únoru.",
    ],
    tipy: [
      "Potřebuje dlouhou sezónu — vysazujte hned po zmrzlých.",
      "Teplé, závětrné stanoviště urychlí dozrávání.",
      "Před mrazíky sklidit vše — nedozrálé kusy dojdou doma na okně.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon"],
    badge: "Novinka",
  },

  // ── Zelenina ───────────────────────────────────────────────────────────
  {
    slug: "kedluben-rany",
    nazev: "Kedluben raný bílý",
    kategorie: "zelenina",
    kratkyPopis:
      "První křupání jara. Jemné bulvy bez dřevnatění, k odběru už v dubnu.",
    popis: [
      "Raný kedluben je jedna z prvních věcí, které od nás na jaře odcházejí — sazenice z pařeniště jsou otužilé a snesou i pozdní přízemní mrazíky.",
      "Sklízejte mladé bulvy velikosti tenisáku, dokud jsou nejsladší.",
    ],
    tipy: [
      "Sázejte mělce — bulva má sedět na povrchu, ne v zemi.",
      "Pravidelná zálivka = jemné bulvy bez prasklin.",
      "Sázejte po 2–3 týdnech postupně, ať nesklízíte všechno najednou.",
    ],
    mesice: [4, 5],
    umisteni: ["zahon"],
  },
  {
    slug: "kedluben-modry",
    nazev: "Kedluben modrý",
    kategorie: "zelenina",
    kratkyPopis:
      "Fialové bulvy, o chlup pevnější dužnina a krásný záhon. Chuť stejně jemná.",
    popis: [
      "Modrý kedluben roste pomaleji než bílý, zato déle vydrží v dobré kondici na záhonu. A ta barva — děti ho vytahují ze země jako poklad.",
      "S bílým kedlubnem se skvěle doplňují: bílý na první sklizeň, modrý na průběžnou.",
    ],
    tipy: [
      "Snese i lehký polostín, ale slunce mu svědčí víc.",
      "Přihnojte kompostem, kedluben je žrout dusíku.",
      "Chraňte netkanou textilií proti dřepčíkům na mladých listech.",
    ],
    mesice: [4, 5],
    umisteni: ["zahon"],
  },
  {
    slug: "salat-hlavkovy",
    nazev: "Salát hlávkový",
    kategorie: "zelenina",
    kratkyPopis:
      "Klasické máslové hlávky na jarní záhon — z pařeniště otužilé a rychlé.",
    popis: [
      "Jarní hlávkový salát je závod s časem: čím dřív sedí venku, tím krásnější hlávky stihne udělat, než přijde letní horko. Naše sazenice z pařeniště mají náskok.",
      "Bereme rané odrůdy odolné vybíhání do květu.",
    ],
    tipy: [
      "Sázejte mělce, srdíčko nesmí do země.",
      "Zálivka ráno, večer mokré listy zvou slimáky.",
      "Sklízejte celé hlávky ráno, vydrží v lednici křupavé.",
    ],
    mesice: [4, 5],
    umisteni: ["zahon", "truhlik"],
  },
  {
    slug: "salat-listovy",
    nazev: "Salát listový mix",
    kategorie: "zelenina",
    kratkyPopis:
      "Trhací směs zelených a červených listů — sklízíte průběžně, dorůstá znovu.",
    popis: [
      "Listové saláty jsou ideální do truhlíku za oknem: otrháte vnější listy, střed roste dál a za týden sklízíte znovu. Mix odrůd dělá misku pestrou bez práce.",
      "Sazenice dodáváme v trsech připravených k rozsazení.",
    ],
    tipy: [
      "Stačí truhlík hluboký 15 cm na slunci nebo v polostínu.",
      "Trhejte vnější listy, srdíčko nechte růst.",
      "V horku přistiňte, listy zůstanou jemné a nezhořknou.",
    ],
    mesice: [4, 5, 6],
    umisteni: ["zahon", "truhlik", "balkon"],
  },

  // ── Bylinky ────────────────────────────────────────────────────────────
  {
    slug: "bazalka",
    nazev: "Bazalka pravá",
    kategorie: "bylinky",
    kratkyPopis:
      "Vůně léta a základ každé kuchyně. Silné trsy, ne přepěstované stonky ze supermarketu.",
    popis: [
      "Naše bazalka roste pomalu a poctivě v teple pařeniště, takže má pevné stonky a plné aroma — úplně jiná liga než vytáhlé kelímky ze supermarketu.",
      "Skvěle se má v truhlíku pod rajčaty: společné pěstování oběma prospívá.",
    ],
    tipy: [
      "Ven až po zmrzlých — bazalka nesnese ani náznak mrazu.",
      "Zaštipujte vršky nad párem listů, trs pak houstne.",
      "Nikdy nenechte přeschnout, ale ani stát ve vodě.",
    ],
    mesice: [5, 6],
    umisteni: ["truhlik", "balkon", "zahon"],
    badge: "Oblíbené",
  },
  {
    slug: "levandule",
    nazev: "Levandule lékařská",
    kategorie: "bylinky",
    kratkyPopis:
      "Voňavá trvalka, která kvete roky. Pro včely, do čaje i jen tak pro krásu.",
    popis: [
      "Levanduli množíme řízkováním z vlastních matečných rostlin, takže víte přesně, co sázíte: otužilou lékařskou levanduli, která u nás spolehlivě přezimuje.",
      "Jednou zasadíte a každé léto se zahrada zbarví do fialova — a včely vám budou psát děkovné dopisy.",
    ],
    tipy: [
      "Slunce, chudší propustná půda, žádné přelévání.",
      "Po odkvětu zastřihněte, keřík zůstane hustý.",
      "Na jaře seřízněte do třetiny, ale ne do starého dřeva.",
    ],
    mesice: [5, 6, 7],
    umisteni: ["zahon", "truhlik"],
    badge: "Oblíbené",
  },
  {
    slug: "mata",
    nazev: "Máta peprná",
    kategorie: "bylinky",
    kratkyPopis:
      "Do letní limonády, čaje i mojita. Roste ráda — až moc, proto do květináče.",
    popis: [
      "Máta je nezničitelná a štědrá: čím víc sklízíte, tím hustěji roste. Jediné, co neodpouští, je sucho a nuda — tak ji sklízejte často.",
      "Prodáváme silné trsy s prokořeněným balem, které se rozrostou během pár týdnů.",
    ],
    tipy: [
      "Sázejte do květináče nebo ohraničeného místa — jinak ovládne záhon.",
      "Polostín a vlhko jí svědčí víc než pražící slunce.",
      "Na zimu seřízněte u země, na jaře vyrazí znovu.",
    ],
    mesice: [5, 6, 7],
    umisteni: ["truhlik", "zahon"],
  },
  {
    slug: "pazitka",
    nazev: "Pažitka",
    kategorie: "bylinky",
    kratkyPopis:
      "Trs, který dává celý rok. Na chleba s máslem netřeba nic dodávat.",
    popis: [
      "Pažitka je nejpracovitější bylinka české kuchyně: stříháte od jara do podzimu a na jaře začne znovu. Naše trsy jsou husté, připravené rovnou k osazení truhlíku.",
      "Fialové květy jsou jedlé a krásné — část trsu nechte vykvést.",
    ],
    tipy: [
      "Stříhejte u země, ne jen špičky — trs pak nestárne.",
      "Každé 2–3 roky trs rozdělte, omládne.",
      "V zimě dejte květináč za okno a stříháte dál.",
    ],
    mesice: [4, 5, 6],
    umisteni: ["truhlik", "zahon"],
  },

  // ── Květiny ────────────────────────────────────────────────────────────
  {
    slug: "prvosenka",
    nazev: "Prvosenka jarní (petrklíč)",
    kategorie: "kvetiny",
    kratkyPopis:
      "První barvy po zimě. Drobná trvalka do truhlíku, skalky i pod stromy.",
    popis: [
      "Petrklíče otevírají naši sezónu — když kvetou, víme, že jaro už to nevzdá. Pestré trsy vydrží kvést týdny a příští rok přijdou zas.",
      "Po odkvětu je přesaďte do zahrady, v polostínu se rozrostou.",
    ],
    tipy: [
      "Kvetoucí rostliny nesušte — jarní slunce bere vodu rychle.",
      "Odkvetlé květy vyštipujte, kvetení se protáhne.",
      "V létě jim dopřejte stín a klid, na jaře se vrátí silnější.",
    ],
    mesice: [3, 4],
    umisteni: ["truhlik", "zahon"],
  },
  {
    slug: "aksamitnik",
    nazev: "Aksamitník (afrikán)",
    kategorie: "kvetiny",
    kratkyPopis:
      "Neúnavná letnička, co kvete do mrazů — a navíc hlídá zeleninu před háďátky.",
    popis: [
      "Afrikány jsou dělníci záhonu: kvetou od června do prvních mrazů, snesou sucho i začátečníky a jejich kořeny čistí půdu od háďátek. Proto je sázíme mezi zeleninu.",
      "Oranžová a žlutá ke každé zahradě prostě patří.",
    ],
    tipy: [
      "Odkvetlé květy štípejte, rostlina nasazuje nové.",
      "Skvělý společník rajčat a jahod — sázejte do řádků mezi ně.",
      "Nenáročný na půdu, jen to slunce mu dopřejte.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon", "truhlik"],
  },
  {
    slug: "cinie",
    nazev: "Cínie sličná",
    kategorie: "kvetiny",
    kratkyPopis:
      "Záhon jak z obrázku a váza plná barev — cínie kvete, dokud ji stříháte.",
    popis: [
      "Cínie je královna řezaných letniček: čím víc květů odnesete do vázy, tím víc jich vyroste. Barvy od bílé přes růžovou po tmavě červenou.",
      "Motýli ji milují — se zákusem u ní potkáte babočky i otakárky.",
    ],
    tipy: [
      "Vysazujte do tepla, cínie nesnáší chladné nohy.",
      "Zaštípněte špičku po výsadbě, rostlina se rozvětví.",
      "Stříhejte květy dlouze, do vázy vydrží přes týden.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon"],
  },
  {
    slug: "slunecnice",
    nazev: "Slunečnice ozdobná",
    kategorie: "kvetiny",
    kratkyPopis:
      "Radost, co roste dětem před očima. Od nízkých odrůd po třímetrové obry.",
    popis: [
      "Slunečnice je květina, u které si děti poprvé všimnou, že rostliny žijí — otáčí hlavu za sluncem a roste rychleji než ony. Máme nízké odrůdy do květináče i vysoké na rekordy.",
      "Na podzim nechte terče ptákům, sýkorky se postarají o úklid.",
    ],
    tipy: [
      "Slunce a pravidelná zálivka — je to dříč, ale pije.",
      "Vysoké odrůdy přivažte k opoře, bouřka je umí zlomit.",
      "Sázejte ob dva týdny a kvete vám až do podzimu.",
    ],
    mesice: [5, 6],
    umisteni: ["zahon"],
  },
];

export const productBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const productsByCategory = (kategorie: CategoryId): Product[] =>
  PRODUCTS.filter((p) => p.kategorie === kategorie);

/** Sloučené měsíce dostupnosti všech produktů kategorie (pro kalendář). */
export const categoryMonths = (kategorie: CategoryId): number[] => {
  const set = new Set<number>();
  for (const p of productsByCategory(kategorie)) p.mesice.forEach((m) => set.add(m));
  return [...set].sort((a, b) => a - b);
};
