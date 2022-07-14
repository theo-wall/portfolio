import "./App.css";

import TerminalDisplay from "./components/TerminalDisplay";

const prompt = "→";

function App() {
  return <TerminalDisplay prompt={prompt} />;
}

export default App;
