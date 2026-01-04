const skills = [
  "HTML", "CSS", "JavaScript", "React", "Python",
  "C++", "SQL", "Git/GitHub", "Bootstrap", 
  "Figma", "Canva", "Communication"
];

function Skills() {
  return (
    <section id="skills" className="skills py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">My Skills</h2>

        <div className="row mt-4 g-3">
          {skills.map((skill, i) => (
            <div className="col-md-3" key={i}>
              <div className="skill-card p-3 text-center shadow-sm rounded">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
