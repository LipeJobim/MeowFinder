// src/data/cats.ts
import type { Cat } from "../types/Cat";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";

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
  }
]