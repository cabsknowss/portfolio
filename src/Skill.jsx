import React from "react";

const Skill = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="fs-secondary-heading fw-semi-bold">Skills</h2>
        <div className="grid-wrap">
          <div>
            <label for="file">HTML</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">CSS</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">JavaScript</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">TypeScript</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">React.js</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">Vue.js</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">Node.js</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">Express.js</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">MongoDB</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
          <div>
            <label for="file">MySQL</label>
            <progress id="file" value="32" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
