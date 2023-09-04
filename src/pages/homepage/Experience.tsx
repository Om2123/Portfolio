import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              Front-End Skills
            </div>
            <div className="grid grid-cols-2">
             <div>s</div>
             <div>s</div>
            </div>
            <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              2 days ago
            </div>
          </div>
          <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              Back-End Skills
            </div>
            <div className="grid grid-cols-2">
              <div>
              {/* <article>
                <img
                  src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article> */}
              </div>
              <div>s</div>
            </div>
            <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              2 days ago
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}
