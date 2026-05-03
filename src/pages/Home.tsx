// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { cats } from "../data/cats";

import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Home() {
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const saved = localStorage.getItem("favoritos");
    return saved ? JSON.parse(saved) : [];
  });

  const [mensagem, setMensagem] = useState("");


  const [genderFilter, setGenderFilter] = useState("");
  const [sortAge, setSortAge] = useState("");
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);


  const toggleFavorito = (id: string) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  
  const handleAdotar = (nome: string, gender: "male" | "female") => {
    const pronome = gender === "male" ? "Ele" : "Ela";
    setMensagem(`🐱 Você adotou ${nome}! ${pronome} está muito feliz com o novo lar ❤️`);
    setTimeout(() => setMensagem(""), 3000);
  };

 
  const filteredCats = cats
    .filter((cat) => {
      const genderMatch = genderFilter === "" || cat.gender === genderFilter;
      const searchMatch = cat.name.toLowerCase().includes(search.toLowerCase());
      return genderMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortAge === "older") return b.age - a.age;
      if (sortAge === "younger") return a.age - b.age;
      return 0;
    });

  return (
    <>
     
      <Navbar>
        <div className="filters">
          <input
            type="text"
            placeholder="🔎 Buscar gatinho..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">🐱 Todos os gêneros</option>
            <option value="male">♂️ Machos</option>
            <option value="female">♀️ Fêmeas</option>
          </select>

          <select value={sortAge} onChange={(e) => setSortAge(e.target.value)}>
            <option value="">📅 Ordenar idade</option>
            <option value="older">⬆️ Mais velhos</option>
            <option value="younger">⬇️ Mais novos</option>
          </select>
        </div>
      </Navbar>

      
      <Header />

      <div className="container">
        {mensagem && <div className="toast">{mensagem}</div>}

        {favoritos.length > 0 && (
          <div className="favorito-counter">❤️ Você tem {favoritos.length} gato(s) favorito(s)!</div>
        )}

        <div className="grid">
          {filteredCats.map((cat) => {
            const isFavorito = favoritos.includes(cat.id);
            return (
              <div className="card" key={cat.id}>
                <img src={cat.image} alt={cat.name} />

                <button
                  className={`heart-btn ${isFavorito ? "active" : ""}`}
                  onClick={() => toggleFavorito(cat.id)}
                >
                  {isFavorito ? "❤️" : "🤍"}
                </button>

                <h2>{cat.name}</h2>

                <div className="info">
                  <span>📅 {cat.age} ano{cat.age !== 1 ? "s" : ""}</span>
                  <span>{cat.gender === "male" ? "♂️ Macho" : "♀️ Fêmea"}</span>
                </div>

                <p>{cat.description}</p>

                <button className="adotar-btn" onClick={() => handleAdotar(cat.name, cat.gender)}>
                  🐾 Adotar {cat.name}
                </button>
              </div>
            );
          })}
        </div>

        {filteredCats.length === 0 && (
          <div className="empty-message">
            😿 Nenhum gatinho encontrado...
            <br />
            <button onClick={() => {
              setSearch("");
              setGenderFilter("");
              setSortAge("");
            }}>
              Limpar filtros 🔄
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}