import { useState } from "react";
import VideoModal from "./VideoModal.jsx";

const projectData = [
  {
    title: "DailyPulse — US News Website",
    desc: "A responsive React-based news platform with real-time updates, API integration, and infinite scrolling.",
    video: "/videos/DailyPulse.mp4",
  },
  {
    title: "TextUtils App",
    desc: "A live text utility tool featuring theme modes and alerts.",
    link: "https://hadiayaseen3347.github.io/TextUtils-React/#/",
    isURL: true,
  },
  {
    title: "To-Do List",
    desc: "A clean and simple JS-based task manager.",
    video: "/videos/TodoList.mp4",
  },
  {
    title: "Rock Paper Scissors",
    desc: "An interactive game built using JavaScript.",
    video: "/videos/RockPaperScissor.mp4",
  },
  {
    title: "Simple Calculator",
    desc: "A basic arithmetic calculator made with HTML, CSS, and JS.",
    video: "/videos/SimpleCalculator.mp4",
  },
  {
    title: "Heart Trial Animation",
    desc: "A CSS-based animated heart using keyframes and transitions.",
    video: "/videos/Heart_Trial_Animation.mp4",
  },
];

function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleProjectClick = (project) => {
    if (project.isURL) {
      window.open(project.link, "_blank");
    } else if (project.video) {
      setSelectedVideo(project.video);
    }
  };

  const closeVideo = () => setSelectedVideo(null);

  return (
    <section id="projects" className="py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">Projects</h2>

        <div className="row mt-4 g-4">
          {projectData.map((project, i) => (
            <div className="col-md-4" key={i}>
              <div
                className="project-card p-4 shadow rounded h-100"
                onClick={() => handleProjectClick(project)}
                style={{ cursor: "pointer" }}
              >
                <h4 className="fw-bold">{project.title}</h4>
                <p className="mt-2">{project.desc}</p>

                {project.isURL ? (
                  <small className="text-primary">Click to open website</small>
                ) : (
                  <small>Click to watch video</small>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideo}
          videoSrc={selectedVideo}
        />
      )}
    </section>
  );
}

export default Projects;
