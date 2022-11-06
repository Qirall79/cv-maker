import React, { useState } from "react";
import JsPDF from "jspdf";

import Sidebar from "./components/Sidebar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Description from "./components/Description";

import "./styles/app.css";

import pdp from "./assets/pdp.jpg";

const App = (props) => {
  let [personal, setPersonal] = useState({
    firstName: "Walid",
    lastName: "Belfatmi",
    address: "",
    email: "",
    description: "",
    phoneNumber: "",
    title: "",
    img: pdp,
  });

  let [education, setEducation] = useState([]);
  let [educationHolder, setEducationHolder] = useState({
    school: "",
    major: "",
    from: "",
    to: "",
    city: "",
  });

  let [experience, setExperience] = useState([]);
  let [experienceHolder, setExperienceHolder] = useState({
    company: "",
    position: "",
    from: "",
    to: "",
    city: "",
  });

  let [language, setLanguage] = useState([]);
  let [languageHolder, setLanguageHolder] = useState({
    language: "",
    level: "",
  });

  function personalHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ");
    name =
      name.length === 1
        ? name[0].toLowerCase()
        : name[0].toLowerCase() + name[1][0].toUpperCase() + name[1].slice(1);
    setPersonal({ ...personal, [name]: e.target.value });
  }

  function educationHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ")[0].toLowerCase();
    setEducationHolder({ ...educationHolder, [name]: e.target.value });
  }

  function experienceHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ")[0].toLowerCase();
    setExperienceHolder({ ...experienceHolder, [name]: e.target.value });
  }

  function addEducation(e) {
    e.preventDefault();
    setEducation(education.concat(educationHolder));
    setEducationHolder({ school: "", major: "", from: "", to: "", city: "" });
  }

  function addExperience(e) {
    e.preventDefault();
    setExperience(experience.concat(experienceHolder));
    setExperienceHolder({
      company: "",
      position: "",
      from: "",
      to: "",
      city: "",
    });
  }

  function resetEducation(e) {
    e.preventDefault();
    setEducation([]);
    setEducationHolder({ school: "", major: "", from: "", to: "", city: "" });
  }

  function resetExperience(e) {
    e.preventDefault();
    setExperience([]);
    setExperienceHolder({
      company: "",
      position: "",
      from: "",
      to: "",
      city: "",
    });
  }

  function imgHandler(e) {
    setPersonal({ ...personal, img: URL.createObjectURL(e.target.files[0]) });
  }

  function languageHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ")[0].toLowerCase();
    let value;
    if (name === "level") {
      let select = document.getElementById("level");
      value = select.options[select.selectedIndex].value;
    } else {
      value = e.target.value;
    }
    setLanguageHolder({ ...languageHolder, [name]: value });
  }

  function addLanguage(e) {
    e.preventDefault();
    setLanguage(language.concat(languageHolder));
    setLanguageHolder({ language: "", level: "" });
  }

  function resetLanguage(e) {
    e.preventDefault();
    setLanguage([]);
    setLanguageHolder({ language: "", level: "" });
  }

  function generatePDF() {
    const report = new JsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });
    report.html(document.querySelector("#content"), {
      callback: function (report) {
        report.save();
      },
      x: 0,
      y: 0,
      html2canvas: { scale: 0.75 },
    });
  }

  return (
    <div className="container">
      <nav className="nav">Walid's CV creator</nav>
      <div id="main">
        <div id="forms">
          <div id="personal-form">
            <form>
              <label>Personal Information</label>
              <input
                onChange={personalHandler}
                type="text"
                placeholder="First name"
              />
              <input
                onChange={personalHandler}
                type="text"
                placeholder="Last name"
              />
              <input
                onChange={personalHandler}
                type="text"
                placeholder="Title"
              />
              <input
                onChange={personalHandler}
                type="text"
                placeholder="Address"
              />
              <input
                onChange={personalHandler}
                type="text"
                placeholder="Phone Number"
              />
              <input
                onChange={personalHandler}
                type="email"
                placeholder="Email"
              />
              <textarea
                onChange={personalHandler}
                type="text"
                placeholder="Description"
              />
              <input
                onChange={imgHandler}
                type="file"
                placeholder="Image"
                accept="image/png, image/jpeg"
              />
            </form>
          </div>

          <div id="education-form">
            <form>
              <label>Education</label>
              <input
                onChange={educationHandler}
                type="text"
                placeholder="School"
                value={educationHolder.school}
              />
              <input
                onChange={educationHandler}
                type="text"
                placeholder="Major"
                value={educationHolder.major}
              />
              <input
                onChange={educationHandler}
                type="text"
                placeholder="From"
                value={educationHolder.from}
              />
              <input
                onChange={educationHandler}
                type="text"
                placeholder="To"
                value={educationHolder.to}
              />
              <input
                onChange={educationHandler}
                type="text"
                placeholder="City"
                value={educationHolder.city}
              />
              <button onClick={addEducation}>Add</button>
              <button onClick={resetEducation}>Reset</button>
            </form>
          </div>

          <div id="experience-form">
            <form>
              <label>Experience</label>
              <input
                onChange={experienceHandler}
                type="text"
                placeholder="Company"
                value={experienceHolder.company}
              />
              <input
                onChange={experienceHandler}
                type="text"
                placeholder="Position"
                value={experienceHolder.position}
              />
              <input
                onChange={experienceHandler}
                type="text"
                placeholder="From"
                value={experienceHolder.from}
              />
              <input
                onChange={experienceHandler}
                type="text"
                placeholder="To"
                value={experienceHolder.to}
              />
              <input
                onChange={experienceHandler}
                type="text"
                placeholder="City"
                value={experienceHolder.city}
              />
              <button onClick={addExperience}>Add</button>
              <button onClick={resetExperience}>Reset</button>
            </form>
          </div>

          <div id="language-form">
            <form>
              <label>Language</label>
              <input
                onChange={languageHandler}
                type="text"
                placeholder="Language"
                value={languageHolder.language}
              />
              <select id="level" onChange={languageHandler} placeholder="level">
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
              <button onClick={addLanguage}>Add</button>
              <button onClick={resetLanguage}>Reset</button>
            </form>
          </div>
          <button onClick={generatePDF} type="button" id="download">
            Download PDF
          </button>
        </div>

        <div id="content">
          <div id="head">
            <h1>
              {personal.firstName.toUpperCase() +
                " " +
                personal.lastName.toUpperCase()}
            </h1>
            <p>{personal.title}</p>
          </div>
          <Description infos={personal} />
          <Sidebar personal={personal} language={language} />
          <Education infos={education} />
          <Experience infos={experience} />
        </div>
      </div>
    </div>
  );
};

export default App;
