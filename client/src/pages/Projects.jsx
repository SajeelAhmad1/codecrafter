import { projectData } from "../services";

const Projects = () => {
  const Games = projectData.map((game, index) => {
    let head = index === 0 ? true : false;
    let foot = index === 5 ? true : false;

    return (
      <div className="flex justify-between items-center gap-4 md:gap-8" key={index}>
        <div>{game.title}</div>
        <div className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-3 py-1">
          <a href={game.link} download>
            Download
          </a>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="my-10 md:my-10 px-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-10">
          We offer following
          <span className="text-indigo-500"> Projects</span>
        </h2>
        <div className="flex flex-col gap-2">{Games}</div>
      </div>
    </>
  );
};
export default Projects;
