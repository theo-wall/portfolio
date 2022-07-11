import "../App.css";
import Header from "./Header";

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
        <p>{props.prompt}</p>
      </div>
    </div>
  );
};

export default TerminalDisplay;
