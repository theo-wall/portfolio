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
  "clear",
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
  repo: <p>hello this is a repo page</p>,
  resume: <p>hello this is a resume page</p>,
  contact: <p>hello this is a contact page</p>,
  website: <p>hello this is a website page</p>,
  clear: <p>hello this is a clear page</p>,
  help: (
    <>
      <span>
        <span className="input-prompt">→</span>help
      </span>
      <p>--- Some commands to help you get to know me better ---</p>
      <div className="indent">
        <p>about - A leetle bit about me</p>
        <p>projects - some projects I've worked on</p>
        <p>skills - skills to pay the bills</p>
        <p>repo - repo for this page</p>
        <p>resume - my resume</p>
        <p>contact - contact info</p>
        <p>clear - make some space</p>
      </div>
    </>
  ),
};
