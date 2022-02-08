import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (event) =>
      setPosition({ x: event.clientX, y: event.clientY })
    );
  });
  return position;
}
