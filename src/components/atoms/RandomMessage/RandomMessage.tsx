import { useEffect, useState } from "react";

export const MESSAGES = [
  "Ei recruta, você já pensou em ser um desenvolvedor?",
  "Que tal dar uma chance para os desenvolvedores júniors?",
  "Estamos dando o nosso melhor para encontrar o desenvolvedor ideal para você!",
  "Você sabia que a maioria dos desenvolvedores são autodidatas?",
];

const DEFAULT_MS = 8000;

export function RandomMessage() {
  const [message, setMessage] = useState(MESSAGES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      setMessage(randomMessage);
    }, DEFAULT_MS);

    return () => clearInterval(interval);
  }, []);

  return <p data-testid="random-message">{message}</p>;
}
