// src/data/cats.ts

import type { Cat } from "../types/Cat";

import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";

export const cats: Cat[] = [
  {
    id: "1",
    name: "Mingau",
    age: 2,
    gender: "male",
    image: cat1,
    description: "Brincalhão e carinhoso"
  },

  {
    id: "2",
    name: "Luna",
    age: 1,
    gender: "female",
    image: cat2,
    description: "Calma e dorminhoca"
  },

  {
    id: "3",
    name: "Thor",
    age: 4,
    gender: "male",
    image: cat3,
    description: "Aventureiro e muito curioso"
  },

  {
    id: "4",
    name: "Mel",
    age: 3,
    gender: "female",
    image: cat4,
    description: "Extremamente dócil e amigável"
  },

  {
    id: "5",
    name: "Nino",
    age: 5,
    gender: "male",
    image: cat5,
    description: "Preguiçoso, ama carinho e cobertas"
  }
];