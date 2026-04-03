"use client";
import { useState } from "react";

export default function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 flex items-center rounded-full p-1 transition-all duration-300 cursor-pointer ${
          enabled ? "bg-foreground" : "bg-[#04092152]"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
            enabled ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
