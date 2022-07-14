import "../App.css";
import { commandResponses, validCommands } from "../responses";
import { useState } from "react";
import Header from "./Header";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

type TerminalProps = {
  prompt: string;
};

const TerminalDisplay = (props: TerminalProps) => {
  const [output, setOutput] = useState<(string | JSX.Element)[]>([]);

  const handleCommand = (input: string) => {
    const inputCommand = input.toLowerCase();
    if (validCommands.includes(inputCommand)) {
      switch (inputCommand) {
        case "test":
        case "all":
        case "about":
        case "projects":
        case "skills":
        case "repo":
        case "resume":
        case "contact":
        case "website":
        case "clear":
        case "help":
          setOutput([
            ...output,
            <div className="terminal-output">
              {commandResponses[inputCommand]}
            </div>,
          ]);
      }
    }
  };

  return (
    <div className="terminal-backdrop">
      <div className="terminal-content">
        <Header />
        <TerminalOutput output={output} />
        <TerminalInput
          prompt={props.prompt}
          handleCommand={handleCommand}
          setOutput={setOutput}
        />
      </div>
    </div>
  );
};

export default TerminalDisplay;
