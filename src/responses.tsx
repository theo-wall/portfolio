const commandKeys = [
  "test",
  "all",
  "about",
  "projects",
  "skills",
  "repo",
  "resume",
  "contact",
  "website",
  "help",
] as const;

type CommandKeys = typeof commandKeys[number];

export const validCommands = [
  "test",
  "all",
  "about",
  "projects",
  "skills",
  "repo",
  "resume",
  "contact",
  "website",
  "help",
];

export const commandResponses: { [key in CommandKeys]: JSX.Element } = {
  test: <p>hello this is a test page</p>,
  all: <p>hello this is a all page</p>,
  about: (
    <>
      <span>
        <span className="input-prompt">→</span> about
      </span>
      <p>--- More about me ---</p>
      <div className="indent">
        <p>
          I’ve recently moved to Calgary from Vancouver Island and am pivoting
          from a career in formulation chemistry to tech, specifically web
          development. After completing the InceptionU full stack developer boot
          camp, I expanded my skill set while working as a full stack developer
          at a tech startup.
        </p>
        <p>
          I am proficient with the MERN Stack and the custom serverless stack
          used at the startup. Over the past year, I have worked hard to develop
          my skills to become an effective and productive team member in a
          software production environment.
        </p>
        <p>
          I established a passion for working with a team to write code with
          best practices in mind, collaborating with both the design team and
          managers, and building features that solve a business problem and can
          be scalable in the future. I have learned so much developing myself so
          far and am excited to continue that growth into the future.
        </p>
        <p>My previous work experience includes:</p>
        <ul>
          <li>
            Developing property management software at Propra a Calgary based
            start up
          </li>
          <li>
            Working as a Formulation Chemist at Ecosafe Natural Products Inc.
            developing novel pesticides
          </li>
          <li>
            Researching and developing new analytical methods for
            pharmaceuticals at CRL Synergy
          </li>
        </ul>
        <p>
          I'm currently looking for new opportunities as a Full Stack Developer.
        </p>
      </div>
    </>
  ),
  projects: <p>hello this is a projects page</p>,
  skills: (
    <>
      <span>
        <span className="input-prompt">→</span> skills
      </span>
      <p>--- Languages ---</p>
      <div className="indent">
        <p className="green-text">Javascript/Typescript</p>
        <p className="red-text">Python</p>
      </div>
      <p>--- Front End ---</p>
      <div className="indent">
        <p className="green-text">ReactJS</p>
        <p className="yellow-text">ReactNative</p>
        <p className="green-text">MaterialUI</p>
        <p className="green-text">CSS/SASS</p>
      </div>
      <p>--- Back End ---</p>
      <div className="indent">
        <p className="green-text">MongoDB</p>
        <p className="yellow-text">DynamoDB</p>
        <p className="green-text">ExpressJS</p>
        <p className="yellow-text">GraphQL</p>
        <p className="yellow-text">Unit Testing</p>
        <p className="red-text">SQL</p>
      </div>
      <p>--- infrastructure ---</p>
      <div className="indent">
        <p className="yellow-text">Amazon Web Services</p>
        <p className="green-text">CI/CD</p>
      </div>
    </>
  ),
  repo: (
    <>
      <span>
        <span className="input-prompt">→</span> repo
      </span>
      <p>--- Repo ---</p>
      <p>
        GitHub Repo:{" "}
        <a
          href="https://github.com/theo-wall/portfolio"
          className="resume-link"
        >
          https://github.com/theo-wall/portfolio
        </a>
      </p>
      <p>Feel free to check out my other public projects too!</p>
    </>
  ),
  resume: (
    <>
      <span>
        <span className="input-prompt">→</span> resume
      </span>
      <p>--- Check out my resume ---</p>
      <p>
        Click{" "}
        <a
          href="/documents/theoWallResume.pdf"
          download="Theo Wall - Resume"
          className="resume-link"
        >
          HERE
        </a>{" "}
        to download my resume!
      </p>
    </>
  ),
  contact: <p>hello this is a contact page</p>,
  website: <p>hello this is a website page</p>,
  help: (
    <>
      <span>
        <span className="input-prompt">→</span> help
      </span>
      <p>--- Some commands to help you get to know me better ---</p>
      <div className="indent">
        <p>
          <span className="green-text">about</span> - A leetle bit about me
        </p>
        <p>
          <span className="green-text">projects</span> - some projects I've
          worked on
        </p>
        <p>
          <span className="green-text">skills</span> - skills to pay the bills
        </p>
        <p>
          <span className="green-text">repo</span> - repo for this page
        </p>
        <p>
          <span className="green-text">resume </span> - my resume
        </p>
        <p>
          <span className="green-text">contact</span> - contact info
        </p>
        <p>
          <span className="green-text">clear</span> - make some space
        </p>
      </div>
    </>
  ),
};
