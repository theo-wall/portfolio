const TerminalOutput = ({ output }: { output: (string | JSX.Element)[] }) => {
  return <div>{output[0]}</div>;
};

export default TerminalOutput;
