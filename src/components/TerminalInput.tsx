import { useState, useRef } from "react";

const TerminalInput = ({
  prompt,
  handleCommand,
  setOutput,
  setScroll,
}: {
  prompt: string;
  handleCommand: (input: string) => void;
  setOutput: React.Dispatch<React.SetStateAction<(string | JSX.Element)[]>>;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [input, setInput] = useState("");
  const outputRef: any = useRef(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInput(input);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    switch (key) {
      case "Enter":
        handleCommand(input);
        setInput("");
        const ref = outputRef.current.offsetTop || 0;
        setScroll(ref);
        break;
    }
  };

  return (
    <div className="input-area">
      <span className="input-prompt">{prompt}</span>
      <input
        type="text"
        className="terminal-input"
        name="input"
        value={input}
        autoFocus
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        ref={outputRef}
        onChange={(e) => {
          handleInputChange(e);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
    </div>
  );
};

export default TerminalInput;
