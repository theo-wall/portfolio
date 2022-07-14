const TerminalOutput = ({ output }: { output: (string | JSX.Element)[] }) => {
  const items = output.map((item, index) => {
    return <div key={index}>{item}</div>;
  });

  return <div>{items}</div>;
};

export default TerminalOutput;
