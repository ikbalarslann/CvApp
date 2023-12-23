import { useState } from "react";

const Fonts = () => {
  const [font, setFont] = useState("_sans");
  const handleOnClick = (e) => {
    const sellectedFont =
      e.target.innerText.toLowerCase() === "aa serif"
        ? "_serif"
        : e.target.innerText.toLowerCase() === "aa sans"
        ? "_sans"
        : e.target.innerText.toLowerCase() === "aa mono"
        ? "_mono"
        : "";
    setFont(sellectedFont);

    const layout = document.querySelector(".layout");
    layout.style.fontFamily = font;
  };

  return (
    <div>
      <h1>Fonts</h1>

      <button onClick={handleOnClick}> Aa serif</button>
      <button onClick={handleOnClick}> Aa sans</button>
      <button onClick={handleOnClick}>Aa mono</button>
      {font}
    </div>
  );
};

export default Fonts;
