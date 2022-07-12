import Typed from "typed.js";
import { useEffect } from "react";

type HeaderProps = {
  welcomeMessage: string;
  subText: string;
};

const gitHub = `
                :~7JY5PPPP5YJ7~:                 
             .~JG#&&&&&&&&&&&&&&#GJ~.             
           :JB&@&&&&&&&&&&&&&&&&&&@&B?:           
         .J#&&&BB#&&&&&&&&&&&&&&#BB&&&#?.         
        ^B&&&&P .:!YP5YJJJJY5PY!:..G&&&&G^        
       ~#&&&&&Y                    5&&&&&B^       
      .B&&&&&&?                    J&&&&&&G.      
      ?&&&&&&7                      ?&&&&&&7      
      P&&&&&B.                      :#&&&&&5      
      G&&&&&#:                      ^&&&&&&P      
      Y&&&&&&J                      Y&&&&&&J      
      ^&&&&&&&J.                  .Y&&&&&&#:      
       ?&&&P5B&#Y!^:.       ..:^75#&&&&&&&7       
        ?&&BJ^?#@@&&5.      .P#&&&&&&&&&#7        
         ~G&@G^^7JYJ^        7&&&&&&&&&G^         
           7G&#5?!!7:        !&&&&&&&G!           
             ~YB&@@@!        7@&&#GJ^             
                ^!JY:        ^5J!:
`;

const linkedIn = `
:JYYYYYYYYYYYYYYYYYYYYYYJ:    
?P55?!!?5555555555555555P?    
?PP!    ~555555555555555P?    
?P5J~::^J5PPPP5PPPPPP555P?    
?P557~~!557!!!J?!~~~7Y55P?    
?P5Y    Y5.           ?5P?    
?P5Y.   Y5.   ^YYY~   .5P?    
?P5Y.   Y5.   JP5PJ   .YP?    
?P5Y.   Y5.   J555J   .YP?    
?P5Y    Y5.   J555J    YP?    
?P557!!!557!!!Y555Y!!!75P?    
:JYYYYYYYYYYYYYYYYYYYYYYJ:    
`;

const mail = `
.:^^:              :7??~             
.!!!!!!~.         ^?GGGGG?            
:7!!!!7??!^    .~7?YGGGGPJ            
:J?7!!!????7~^!????YGGPYJ7            
:JJJJ?7????????????J5JJJJ7            
:JJJJJ7.~7???????7:^JJJJJ7            
:JJJJJ7   ^7???~:  :JJJJJ7            
:JJJJJ7     :^.    :JJJJJ7            
:JJJJJ7            ^JJJJJ7            
.?JJJJ!            .?JJJJ~            
 .^~~:              .^~~:             

`;

const Header = (props: HeaderProps) => {
  const options1 = {
    strings: [
      "Welcome to my site blah blah blah I'm still working on it but I want a long string here so it looks cool",
    ],
    typeSpeed: 20,
    loop: false,
    cursorChar: "",
  };

  const options2 = {
    strings: [
      "this is now different text check check check check out the inputs",
    ],
    typeSpeed: 20,
    startDelay: 4000,
    loop: false,
    cursorChar: "",
  };

  useEffect(() => {
    const typed1 = new Typed(".subText-typing", options1);
    const typed2 = new Typed(".explain-typing", options2);
    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  });

  return (
    <>
      <div className="terminal-header">
        <div className="logo-container">
          <div className="logos">
            <pre className="gitHub-logo">{gitHub}</pre>
          </div>
          <div className="logos">
            <pre className="linkedIn-logo">{linkedIn}</pre>
          </div>
          <div className="logos">
            <pre className="mail-logo">{mail}</pre>
          </div>
        </div>
        <pre className="terminal-banner">{props.welcomeMessage}</pre>
      </div>

      <div>
        <span className="subText-typing"></span>
      </div>
      <br />
      <div>
        <span className="explain-typing"></span>
      </div>
    </>
  );
};

export default Header;
