import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const Interest = this.props.data.interest.map(function (interest) {
      return (
        <div key={interest.hobby}>
          <h3>{interest.hobby}</h3>
          <p>{interest.describe}</p>
        </div>
      );
    });

    const pengalaman_organisasi = this.props.data.pengalaman_organisasi.map(function (pengalaman) {
      return (
        <div key={pengalaman.nama}>
          <h3>{pengalaman.nama}</h3>
          <span>&bull;</span> <em className="date">{pengalaman.tanggal} : {pengalaman.pangkat}</em>
        </div>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row interest">
            <div className="three columns header-col">
              <h1>
                <span>Interest</span>
              </h1>
            </div>

            <div className="nine columns main-col">{Interest}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row interest">
            <div className="three columns header-col">
              <h1>
                Pengalaman <span>Organisasi</span>
              </h1>
            </div>

            <div className="nine columns main-col">{pengalaman_organisasi}</div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
