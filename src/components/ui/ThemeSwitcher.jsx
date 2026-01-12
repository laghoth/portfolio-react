import { useState } from "react";

const ThemeSwitcher = () => {
  const [primary, setPrimary] = useState("79 70 229"); // indigo-600
  const [font, setFont] = useState("Inter, sans-serif");

  const changeColor = (rgb) => {
    setPrimary(rgb);
    document.documentElement.style.setProperty("--color-primary", rgb);
  };

  const changeFont = (fontFamily) => {
    setFont(fontFamily);
    document.documentElement.style.setProperty("--font-primary", fontFamily);
  };

  return (
    <div className="fixed top-50 m-auto flex flex-col gap-4 z-50">
      {/* Color buttons */}
      <button
        className="w-8 h-8 rounded-full bg-indigo-600"
        onClick={() => changeColor("79 70 229")}
      />
      <button
        className="w-8 h-8 rounded-full bg-red-500"
        onClick={() => changeColor("239 68 68")}
      />
      <button
        className="w-8 h-8 rounded-full bg-green-500"
        onClick={() => changeColor("34 197 94")}
      />
      <button
        className="w-8 h-8 rounded-full bg-yellow-400"
        onClick={() => changeColor("234 179 8")}
      />

      {/* Font buttons */}
      <button onClick={() => changeFont("'Inter', sans-serif")}>Inter</button>
      <button onClick={() => changeFont("'Roboto', sans-serif")}>Roboto</button>
      <button onClick={() => changeFont("'Poppins', sans-serif")}>Poppins</button>
      <button onClick={() => changeFont("'Montserrat', sans-serif")}>Montserrat</button>
    </div>
  );
};

export default ThemeSwitcher;
