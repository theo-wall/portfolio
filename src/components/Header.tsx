import "../App.css";

type HeaderProps = {
  welcomeMessage: string;
  subText: string;
};

const Header = (props: HeaderProps) => {
  return <pre className="terminal-header">{props.welcomeMessage}</pre>;
};

export default Header;
