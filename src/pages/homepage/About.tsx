import React from "react";

export default function About() {
  return (
    <section id="about" className="mt-10">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="https://images.unsplash.com/photo-1635514874042-beb98fd8ea43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mz3h-SmTjaNlgszYEcbxmBTKqRm8XcbgefSggkhB57Y9LecJYg4w9Tq-fcsJ_0TbOkQ&usqp=CAU"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                Proficient in <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="https://www.kaleida.co.uk/app/uploads/2015/09/education-icon.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Tech <br />
                Computer Science
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a web developer proficient in front-end and back-end
              development, creating dynamic and visually appealing websites and
              web applications. Skilled in HTML, CSS, JavaScript, and various
              frameworks (e.g., React, Angular), with a strong focus on
              responsive design and user experience.Dedicated DSA problem solver
              with a passion for tackling intricate computational challenges.
              Expertise in designing efficient algorithms and implementing data
              structures to optimize software performance.
            </p>
          </div>
        </div>
      </div>
      <img
        src="https://icon-library.com/images/white-down-arrow-icon/white-down-arrow-icon-11.jpg"
        alt="Arrow icon"
        className="icon arrow"
      />
    </section>
  );
}
