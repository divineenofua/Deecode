import Project from "./Project"
import chatter from "../assets/chatter.png";
import Altschoolclone from "../assets/AltschoolClone.png";
import GitRepo from "../assets/gitrepo.png";

const Projects = () => {
  return (
    <div className=" m-10    ">
      <div className="text-center pt-10 pb-10">
        <h1 className=" pb-3 font-sans italic text-purple-400 text-5xl">
          Projects
        </h1>
        <span className="text-xl">Here are a few of my Works</span>
      </div>
      <div className="sm:grid grid-cols-3 grid-rows-2 gap-5">
<Project  title="Chatter" image={chatter} liveurl ='https://deechatterapp.vercel.app/' giturl="https://github.com/divineenofua/DEChatter" />
<Project title="AltSchool Clone" image={Altschoolclone} giturl="https://github.com/divineenofua/Altschool_Clone" liveurl="https://altschool-clone.vercel.app/" />
     <Project title="Github Repo" image={GitRepo} liveurl="https://stackblitz.com/edit/stackblitz-starters-csmquv" giturl="https://github.com/divineenofua/Github_Repo_Api" />
     
      </div>
    </div>
  )
}

export default Projects