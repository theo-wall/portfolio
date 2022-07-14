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
  "clear",
  "help",
];

export const commandResponses: { [key in CommandKeys]: JSX.Element } = {
  test: <p>hello this is a test page</p>,
  all: <p>hello this is a all page</p>,
  about: (
    <>
      <span>
        <span className="input-prompt">→</span>about
      </span>
      <p>
        I’ve recently moved to Calgary from Vancouver Island and am pivoting
        from a career in formulation chemistry to tech, specifically web
        development. After completing the InceptionU full stack developer
        bootcamp, I expanded my skill set while working as a full stack
        developer at a tech startup.
      </p>
      <p>
        I am proficient with the MERN Stack and the custom serverless stack used
        at the startup. Over the past year, I have worked hard to develop my
        skills to become an effective and productive team member in a software
        production environment.
      </p>
      <p>
        I established a passion for working with a team to write code with best
        practices in mind, collaborating with both the design team and managers,
        and building features that solve a business problem and can be scalable
        in the future. I have learned so much developing myself so far and am
        excited to continue that growth into the future.
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
          Researching and developing new analytical methods for pharmaceuticals
          at CRL Synergy
        </li>
      </ul>
      <p>
        I'm currently looking for new opportunities as a Full Stack Developer.
      </p>
    </>
  ),
  projects: <p>hello this is a projects page</p>,
  skills: <p>hello this is a skills page</p>,
  repo: <p>hello this is a repo page</p>,
  resume: <p>hello this is a resume page</p>,
  contact: <p>hello this is a contact page</p>,
  website: <p>hello this is a website page</p>,
  clear: <p>hello this is a clear page</p>,
  help: <p>hello this is a help page</p>,
};
