import "./App.css";

import TerminalDisplay from "./components/TerminalDisplay";

const year = () => new Date().getFullYear();

const welcomeMessage = `
#============================================#
#  ________              _      __     ____  #
# /_  __/ /  ___ ___    | | /| / /__ _/ / /  #
#  / / / _ \\/ -_) _ \\   | |/ |/ / _ \`/ / /   #
# /_/ /_//_/\\__/\\___/   |__/|__/\\_,_/_/_/    #
#                                            #
# © ${year()} ----------------------------------- #
#                                            #
#============================================#
                                                                                                               
`;

const subText = `${year()}`;

const prompt = "→";

function App() {
  return (
    <TerminalDisplay
      welcomeMessage={welcomeMessage}
      subText={subText}
      prompt={prompt}
    />
  );
}

export default App;
