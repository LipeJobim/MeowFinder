// src/components/Splash.tsx
import { useEffect } from "react";

interface SplashProps {
  onFinish: () => void;
}

export function Splash({ onFinish }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash">
      <div className="splash-content">
        <div className="splash-emoji">🐱</div>
        <h1 className="splash-title">MeowFinder</h1>
        <p className="splash-subtitle">Encontrando seu amigo peludo...</p>
        <div className="splash-loader">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </div>
  );
}