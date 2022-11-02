import React, { Component } from "react";
import JsPDF from "jspdf";

import Sidebar from "./components/Sidebar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Description from "./components/Description";

import "./styles/app.css";

import pdp from "./assets/pdp.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: "Walid",
        lastName: "Belfatmi",
        address: "",
        email: "",
        description: "",
        phoneNumber: "",
        title: "",
        img: pdp,
      },
      education: [],
      educationHolder: {
        school: "",
        major: "",
        from: "",
        to: "",
        city: "",
      },
      experience: [],
      experienceHolder: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
      },
      language: [],
      languageHolder: {
        language: "",
        level: "",
      },
    };

    this.personalHandler = this.personalHandler.bind(this);
    this.educationHandler = this.educationHandler.bind(this);
    this.experienceHandler = this.experienceHandler.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.resetEducation = this.resetEducation.bind(this);
    this.resetExperience = this.resetExperience.bind(this);
    this.imgHandler = this.imgHandler.bind(this);
    this.languageHandler = this.languageHandler.bind(this);
    this.addLanguage = this.addLanguage.bind(this);
    this.resetLanguage = this.resetLanguage.bind(this);
  }

  personalHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ");
    name =
      name.length === 1
        ? name[0].toLowerCase()
        : name[0].toLowerCase() + name[1][0].toUpperCase() + name[1].slice(1);
    this.setState({
      personal: {
        ...this.state.personal,
        [name]: e.target.value,
      },
    });
  }

  educationHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ")[0].toLowerCase();
    this.setState({
      ...this.state,
      educationHolder: {
        ...this.state.educationHolder,
        [name]: e.target.value,
      },
    });
  }

  experienceHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ")[0].toLowerCase();
    this.setState({
      ...this.state,
      experienceHolder: {
        ...this.state.experienceHolder,
        [name]: e.target.value,
      },
    });
  }

  addEducation(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: this.state.education.concat(this.state.educationHolder),
      educationHolder: {
        school: "",
        major: "",
        from: "",
        to: "",
        city: "",
      },
    });
  }

  addExperience(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      experience: this.state.experience.concat(this.state.experienceHolder),
      experienceHolder: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
      },
    });
  }

  resetEducation(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: [],
      educationHolder: {
        school: "",
        major: "",
        from: "",
        to: "",
        city: "",
      },
    });
  }

  resetExperience(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      experience: [],
      experienceHolder: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
      },
    });
  }

  imgHandler(e) {
    console.log(e.target.files[0]);
    this.setState({
      personal: {
        ...this.state.personal,
        img: URL.createObjectURL(e.target.files[0]),
      },
    });
  }

  languageHandler(e) {
    let name = e.target.getAttribute("placeholder").split(" ")[0].toLowerCase();
    let value;
    if (name === "level") {
      let select = document.getElementById("level");
      value = select.options[select.selectedIndex].value;
    } else {
      value = e.target.value;
    }
    this.setState({
      ...this.state,
      languageHolder: {
        ...this.state.languageHolder,
        [name]: value,
      },
    });
  }

  addLanguage(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      language: this.state.language.concat(this.state.languageHolder),
      languageHolder: {
        language: "",
        level: "",
      },
    });
  }

  resetLanguage(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      language: [],
      languageHolder: {
        language: "",
        level: "",
      },
    });
  }

  generatePDF() {
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
  render() {
    return (
      <div className="container">
        <nav className="nav">Walid's CV creator</nav>
        <div id="main">
          <div id="forms">
            <div id="personal-form">
              <form>
                <label>Personal Information</label>
                <input
                  onChange={this.personalHandler}
                  type="text"
                  placeholder="First name"
                />
                <input
                  onChange={this.personalHandler}
                  type="text"
                  placeholder="Last name"
                />
                <input
                  onChange={this.personalHandler}
                  type="text"
                  placeholder="Title"
                />
                <input
                  onChange={this.personalHandler}
                  type="text"
                  placeholder="Address"
                />
                <input
                  onChange={this.personalHandler}
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  onChange={this.personalHandler}
                  type="email"
                  placeholder="Email"
                />
                <textarea
                  onChange={this.personalHandler}
                  type="text"
                  placeholder="Description"
                />
                <input
                  onChange={this.imgHandler}
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
                  onChange={this.educationHandler}
                  type="text"
                  placeholder="School"
                  value={this.state.educationHolder.school}
                />
                <input
                  onChange={this.educationHandler}
                  type="text"
                  placeholder="Major"
                  value={this.state.educationHolder.major}
                />
                <input
                  onChange={this.educationHandler}
                  type="text"
                  placeholder="From"
                  value={this.state.educationHolder.from}
                />
                <input
                  onChange={this.educationHandler}
                  type="text"
                  placeholder="To"
                  value={this.state.educationHolder.to}
                />
                <input
                  onChange={this.educationHandler}
                  type="text"
                  placeholder="City"
                  value={this.state.educationHolder.city}
                />
                <button onClick={this.addEducation}>Add</button>
                <button onClick={this.resetEducation}>Reset</button>
              </form>
            </div>

            <div id="experience-form">
              <form>
                <label>Experience</label>
                <input
                  onChange={this.experienceHandler}
                  type="text"
                  placeholder="Company"
                  value={this.state.experienceHolder.company}
                />
                <input
                  onChange={this.experienceHandler}
                  type="text"
                  placeholder="Position"
                  value={this.state.experienceHolder.position}
                />
                <input
                  onChange={this.experienceHandler}
                  type="text"
                  placeholder="From"
                  value={this.state.experienceHolder.from}
                />
                <input
                  onChange={this.experienceHandler}
                  type="text"
                  placeholder="To"
                  value={this.state.experienceHolder.to}
                />
                <input
                  onChange={this.experienceHandler}
                  type="text"
                  placeholder="City"
                  value={this.state.experienceHolder.city}
                />
                <button onClick={this.addExperience}>Add</button>
                <button onClick={this.resetExperience}>Reset</button>
              </form>
            </div>

            <div id="language-form">
              <form>
                <label>Language</label>
                <input
                  onChange={this.languageHandler}
                  type="text"
                  placeholder="Language"
                  value={this.state.languageHolder.language}
                />
                <select
                  id="level"
                  onChange={this.languageHandler}
                  placeholder="level"
                >
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="C1">C1</option>
                  <option value="C2">C2</option>
                </select>
                <button onClick={this.addLanguage}>Add</button>
                <button onClick={this.resetLanguage}>Reset</button>
              </form>
            </div>
            <button onClick={this.generatePDF} type="button" id="download">
              Download PDF
            </button>
          </div>

          <div id="content">
            <div id="head">
              <h1>
                {this.state.personal.firstName.toUpperCase() +
                  " " +
                  this.state.personal.lastName.toUpperCase()}
              </h1>
              <p>{this.state.personal.title}</p>
            </div>
            <Description infos={this.state.personal} />
            <Sidebar
              personal={this.state.personal}
              language={this.state.language}
            />
            <Education infos={this.state.education} />
            <Experience infos={this.state.experience} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
