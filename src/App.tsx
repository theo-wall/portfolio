import "./App.css";

import TerminalDisplay from "./components/TerminalDisplay";

const year = () => new Date().getFullYear();
const welcomeMessage = "***Theo Walls portfolio in progress***";

const subText = `${year()}`;

const prompt = ">";

function App() {
  return (
    <div className="terminal-backdrop">
      <TerminalDisplay
        welcomeMessage={welcomeMessage}
        subText={subText}
        prompt={prompt}
      />
    </div>
  );
}

export default App;
