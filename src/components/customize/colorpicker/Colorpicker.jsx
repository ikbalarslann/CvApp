import { useState } from "react";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const Colorpicker = () => {
  const updateProperty = (key, val) =>
    document.body.style.setProperty(key, val);

  const handleOnChange = (e) => {
    const hexColor = e.target.value;

    const { r, g, b } = hexToRgb(hexColor);
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const isBrighter = brightness > 127.5;
    const sectionResumeBg = isBrighter
      ? "rgba(0, 0, 0, 0.9)"
      : "rgba(14, 55, 78, 0.07)";
    const headerResumeColor = isBrighter ? "black" : "white";

    updateProperty("--header-resume-color", headerResumeColor);
    updateProperty("--section-resume-bg", sectionResumeBg);
    updateProperty("--resume-accent", hexColor);
    setColor(hexColor);
  };

  const [color, setColor] = useState(() => {
    return getComputedStyle(document.body).getPropertyValue("--resume-accent");
  });
  return (
    <label className="accent-color">
      Accent Color
      <input type="color" value={color} onChange={handleOnChange} />
    </label>
  );
};
export default Colorpicker;
