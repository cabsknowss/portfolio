import React from "react";

const Skill = () => {
  return (
    <section
      id="skill"
      className="skills text-neutral-100 padding-block-900 bg-accent-400"
    >
      <div className="container">
        <h2 className="padding-bottom-500 text-align-center padding-bottom fs-secondary-heading fw-bold">
          Skills
        </h2>
        <div className="grid-wrap">
          <div>
            <label for="file">HTML</label>
            <progress id="file" value="99" max="100"></progress>
          </div>
          <div>
            <label for="file">CSS</label>
            <progress id="file" value="80" max="100"></progress>
          </div>
          <div>
            <label for="file">JavaScript</label>
            <progress id="file" value="78" max="100"></progress>
          </div>
          <div>
            <label for="file">TypeScript</label>
            <progress id="file" value="60" max="100"></progress>
          </div>
          <div>
            <label for="file">React.js</label>
            <progress id="file" value="80" max="100"></progress>
          </div>
          <div>
            <label for="file">Vue.js</label>
            <progress id="file" value="70" max="100"></progress>
          </div>
          <div>
            <label for="file">Node.js</label>
            <progress id="file" value="80" max="100"></progress>
          </div>
          <div>
            <label for="file">Express.js</label>
            <progress id="file" value="90" max="100"></progress>
          </div>
          <div>
            <label for="file">MongoDB</label>
            <progress id="file" value="67" max="100"></progress>
          </div>
          <div>
            <label for="file">MySQL</label>
            <progress id="file" value="40" max="100"></progress>
          </div>
          <div>
            <label for="file">Java</label>
            <progress id="file" value="44" max="100"></progress>
          </div>
          <div>
            <label for="file">Python</label>
            <progress id="file" value="50" max="100"></progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
