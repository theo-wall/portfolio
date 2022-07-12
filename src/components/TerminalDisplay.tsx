import "../App.css";
import Header from "./Header";
import TerminalInput from "./TerminalInput";

type TerminalProps = {
  welcomeMessage: string;
  subText: string;
  prompt: string;
};

const TerminalDisplay = (props: TerminalProps) => {
  return (
    <div className="terminal-backdrop">
      <div className="terminal-content">
        <Header welcomeMessage={props.welcomeMessage} subText={props.subText} />
        <TerminalInput prompt={props.prompt} />
      </div>
    </div>
  );
};

export default TerminalDisplay;
