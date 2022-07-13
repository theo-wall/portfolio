import "../App.css";
import { useState } from "react";
import Header from "./Header";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

type TerminalProps = {
  welcomeMessage: string;
  subText: string;
  prompt: string;
};

const validCommands = ["test"];

const commandKeys = ["test"] as const;

type CommandKeys = typeof commandKeys[number];

const commands: { [key in CommandKeys]: JSX.Element } = {
  test: <p>hello this is a test</p>,
};

const TerminalDisplay = (props: TerminalProps) => {
  const [output, setOutput] = useState<(string | JSX.Element)[]>([]);

  const handleCommand = (input: string) => {
    const inputCommand = input.toLowerCase();
    if (validCommands.includes(inputCommand)) {
      switch (inputCommand) {
        case "test":
          setOutput([
            <div className="terminal-output">{commands[inputCommand]}</div>,
          ]);
      }
    }
  };
  return (
    <div className="terminal-backdrop">
      <div className="terminal-content">
        <Header welcomeMessage={props.welcomeMessage} subText={props.subText} />
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
