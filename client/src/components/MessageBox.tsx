import React, { useEffect, useRef, useState } from "react";

export default function MessageBox() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
    return () => window.removeEventListener("resize", resizeTextArea);
  }, []);

  return (
    <div className="App">
      <textarea
        className="w-1/2 min-h-[40px] bg-[#eee] p-1 resize-none overflow-hidden"
        value={value}
        ref={textAreaRef}
        onChange={(e) => {
          setValue(e.target.value);
          resizeTextArea();
        }}
      />
    </div>
  );
}