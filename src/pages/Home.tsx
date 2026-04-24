// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { cats } from "../data/cats";

export function Home() {
  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const saved = localStorage.getItem("favoritos");
    return saved ? JSON.parse(saved) : [];
  });

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id: string) => {
    setFavoritos(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

 
  const handleAdotar = (nome: string, gender: "male" | "female") => {
    const pronome = gender === "male" ? "Ele" : "Ela";
    const empolgado = gender === "male" ? "louco" : "louca";

    setMensagem(
      `🐱 Você adotou ${nome}! ${pronome} está ${empolgado} para conhecer seu novo lar ❤️`
    );

    setTimeout(() => setMensagem(""), 3000);
  };

  return (
    <div className="container">
      <h1>🌿 MeowFinder 🐱</h1>

      {mensagem && <div className="toast">{mensagem}</div>}

      {favoritos.length > 0 && (
        <div className="favorito-counter">
          ❤️ Você tem {favoritos.length} gato(s) favorito(s)!
        </div>
      )}

      <div className="grid">
        {cats.map((cat) => {
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
                <span>
                  {cat.gender === "male" ? "♂️ Macho" : "♀️ Fêmea"}
                </span>
              </div>

              <p>{cat.description}</p>

              <button
                className="adotar-btn"
                onClick={() => handleAdotar(cat.name, cat.gender)}
              >
                🐾 Adotar {cat.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}