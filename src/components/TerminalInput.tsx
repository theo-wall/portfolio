const TerminalInput = ({ prompt }: { prompt: string }) => {
  return (
    <div className="input-area">
      <span className="input-prompt">{prompt}</span>
      <input type="text" className="terminal-input" autoFocus />
    </div>
  );
};

export default TerminalInput;
