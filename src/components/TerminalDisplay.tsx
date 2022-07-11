type TerminalProps = {
  welcomeMessage: string;
  subText: string;
  prompt: string;
};

const TerminalDisplay = (props: TerminalProps) => {
  return (
    <div className="terminal-header">
      <p>{props.welcomeMessage}</p>
      <p>&copy; {props.subText}</p>
      <p>{props.prompt}</p>
    </div>
  );
};

export default TerminalDisplay;
