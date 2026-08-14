export type CategoryId =
  | "rajcata"
  | "papriky"
  | "okurky-a-tykve"
  | "zelenina"
  | "bylinky"
  | "kvetiny";

export type Category = {
  id: CategoryId;
  nazev: string;
  popis: string;
};

/** Pořadí v poli = pořadí sekcí v nabídce i řádků v sezónním kalendáři. */
export const CATEGORIES: Category[] = [
  {
    id: "rajcata",
    nazev: "Rajčata",
    popis: "Od poctivých tyčkových odrůd po keříčková rajčata na balkón.",
  },
  {
    id: "papriky",
    nazev: "Papriky",
    popis: "Sladké papriky, beraní rohy i chilli — předpěstované v teple pařeniště.",
  },
  {
    id: "okurky-a-tykve",
    nazev: "Okurky a tykve",
    popis: "Salátové okurky, cukety a dýně s dobře prokořeněným balem.",
  },
  {
    id: "zelenina",
    nazev: "Zelenina",
    popis: "Kedlubny, saláty a další jarní zelenina na první záhony.",
  },
  {
    id: "bylinky",
    nazev: "Bylinky",
    popis: "Bazalka, levandule a spol. — vůně léta do truhlíku i zahrady.",
  },
  {
    id: "kvetiny",
    nazev: "Květiny",
    popis: "Květiny pro radost — od jarních petrklíčů po slunečnice.",
  },
];

export const categoryById = (id: CategoryId): Category =>
  CATEGORIES.find((c) => c.id === id)!;
