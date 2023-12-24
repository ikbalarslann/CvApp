import { useState } from "react";

const Fonts = () => {
  const [font, setFont] = useState("_sans");

  const handleOnClick = (e) => {
    setFont(e);

    const layout = document.querySelector(".layout");
    layout.style.fontFamily = font;
  };

  const bgcolor = "f5f5f5";

  const bg = {
    serif:
      font === "_serif" ? { backgroundColor: "#0e374e", color: "white" } : {},
    sans:
      font === "_sans" ? { backgroundColor: "#0e374e", color: "white" } : {},
    mono:
      font === "_mono" ? { backgroundColor: "#0e374e", color: "white" } : {},
  };

  return (
    <div className="font">
      <div
        className="font__option serif"
        onClick={() => handleOnClick("_serif")}
        style={bg.serif}
      >
        <span>Aa</span> serif
      </div>
      <div
        className="font__option sans"
        onClick={() => handleOnClick("_sans")}
        style={bg.sans}
      >
        <span>Aa</span> sans
      </div>
      <div
        className="font__option mono"
        onClick={() => handleOnClick("_mono")}
        style={bg.mono}
      >
        <span>Aa</span> mono
      </div>
    </div>
  );
};

export default Fonts;
