import { useEffect, useState } from "react";

const TypingText = () => {
  const text = "hi, Minal here :)";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 100);

    return () => clearTimeout(timeout);
  }, [index, text]);

  return <h3 style={{fontFamily: "Poppins, Arial, Helvetica, sans-serif"}}>{displayedText}</h3>;
};

export default TypingText;
