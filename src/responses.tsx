const commandKeys = [
  "about",
  "projects",
  "skills",
  "repo",
  "resume",
  "contact",
  "help",
] as const;

type CommandKeys = typeof commandKeys[number];

export const validCommands = [
  "about",
  "projects",
  "skills",
  "repo",
  "resume",
  "contact",
  "help",
];

const handleEmail = () => {
  window.open("mailto:theo.wall11@gmail.com");
};

const handleLink = (link: string) => {
  window.open(link);
};

export const commandResponses: { [key in CommandKeys]: JSX.Element } = {
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
  projects: (
    <>
      <span>
        <span className="input-prompt">→</span> projects
      </span>
      <p>--- A small but growing list of projects! ---</p>
      <div>
        <span className="green-text">Propra</span> - Property Management
        Software -- Junior Full Stack Dev
        <div className="indent">
          <p>
            ● Worked with a team to develop accounting software in a react web
            and mobile app
          </p>
          <p> ● Developed full stack features for both web and mobile</p>
          <p>
            ● Responsible for maintaining version control/reviewing and
            submitting pull requests on GitHub
          </p>
          <p> ● Worked collaboratively with in-person and remote teams</p>
          <p>
            ● Mentored to write clear, concise, and reusable code for use in
            future features and projects
          </p>
        </div>
      </div>
      <div>
        <span className="green-text">Coyl</span> - Social Media Scheduling and
        Sales App -- Full Stack Dev{" "}
        <div className="indent">
          <p>
            ● Worked on a team to develop an app to schedule and post sale items
            onto instagram, check it out{" "}
            <button
              className="button-link"
              onClick={() => {
                handleLink("https://coyl.herokuapp.com/");
              }}
            >
              HERE
            </button>{" "}
          </p>
        </div>
      </div>
      <div>
        <span className="green-text">KMaxJewellery</span> - Promotional page for
        Calgary Jewellery maker Karen Kryzan -- Full Stack Dev{" "}
        <div className="indent">
          <p>
            ● Worked with a local artist to remake promotional website and add
            new features, check it out{" "}
            <button
              className="button-link"
              onClick={() => {
                handleLink("https://coyl.herokuapp.com/");
              }}
            >
              HERE
            </button>{" "}
          </p>
          <p>● Added data base to save/edit/delete posts</p>
          <p>● rebuilt entire sit from ground up using react and MaterialUI</p>
        </div>
      </div>
    </>
  ),
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
  contact: (
    <>
      <span>
        <span className="input-prompt">→</span> contact
      </span>
      <p>--- Contact Me! ---</p>
      <p>
        Email:{" "}
        <button
          className="button-link"
          onClick={() => {
            handleEmail();
          }}
        >
          theo.wall11@gmail.com
        </button>
      </p>
      <p>
        Phone Number: <button className="button-link">1(222)-333-4444</button> -
        Just kidding! Please email me instead and we can figure it out from
        there!
      </p>
      <p>
        LinkedIn:{" "}
        <button
          className="button-link"
          onClick={() => {
            handleLink("https://www.linkedin.com/in/theo-wall-398452211/");
          }}
        >
          https://www.linkedin.com/in/theo-wall-398452211/
        </button>
      </p>
    </>
  ),
  help: (
    <>
      <span>
        <span className="input-prompt">→</span> help
      </span>
      <p>--- Some commands to help you get to know me better ---</p>
      <div className="indent">
        <p>
          <span className="green-text">about</span> - A little bit about me
        </p>
        <p>
          <span className="green-text">projects</span> - Some projects I've
          worked on
        </p>
        <p>
          <span className="green-text">skills</span> - Skills to pay the bills
        </p>
        <p>
          <span className="green-text">repo</span> - My repo for this page and
          more!
        </p>
        <p>
          <span className="green-text">resume </span> - My resume, for your
          pleasure.
        </p>
        <p>
          <span className="green-text">contact</span> - Contact info
        </p>
        <p>
          <span className="green-text">clear</span> - Make some space
        </p>
      </div>
    </>
  ),
};
