import Project from "./Project";
import DashBoard from '../assets/Admin Dashboard 8.png'
import chatter from "../assets/chatter.png";
 import Media from '../assets/e media.png'
 import school from '../assets/e school.png'
 import rental from '../assets/e rentals.png'
 import food from '../assets/food web.png'
 import commerce from '../assets/ecommerce.png'
 import expense from '../assets/expense tracker.png'

 import {
  FaCss3,
  FaVuejs,
  FaJs,
  FaHtml5,
  FaFigma,
  FaGithub,
  FaReact,
 } from "react-icons/fa";
 import { TbBrandNextjs } from "react-icons/tb";
 import { SiTailwindcss } from "react-icons/si";

 
const iconSets = {
  projectA: [<TbBrandNextjs key="RiNextjsFill" />, <SiTailwindcss />  ,<FaFigma key="figma" />, <FaGithub key="github" />  ],
  projectB: [ <FaVuejs key="Vuejs" />, <FaCss3 key="FaCss3" />, <FaFigma key="figma" />, <FaGithub key="github" />],
  projectC: [<FaHtml5 key="Html5" />,<FaCss3 key="FaCss3" />,< FaJs key="js" />, ],
  projectD: [<FaHtml5 key="Html5" />, <FaCss3 key="FaCss3" />,< FaJs key="js" /> ],
  projectE: [<FaCss3 key="FaCss3" />,<FaReact key="react" />, ],
  projectF: [<FaHtml5 key="Html5" />, <FaCss3 key="FaCss3" />,< FaJs key="js" /> ],
  projectG: [<FaHtml5 key="Html5" />, <FaCss3 key="FaCss3" />,< FaJs key="js" /> ],
  projectH: [<FaHtml5 key="Html5" />, <FaCss3 key="FaCss3" />,< FaJs key="js" /> ],
  projectI: [<FaHtml5 key="Html5" />, <FaCss3 key="FaCss3" />,< FaJs key="js" /> ],
  projectK: [<FaHtml5 key="Html5" />, <FaCss3 key="FaCss3" />,< FaJs key="js" /> ],
};


import Altschoolclone from "../assets/AltschoolClone.png";
import GitRepo from "../assets/gitrepo.png";

 import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface ChildProps {
  toggle: boolean;
}

const Projects: React.FC<ChildProps> = (props) => {
  const [showProjects, setShowProjects] = useState(false);
   const HandleClickProjects = () => {
    setShowProjects(!showProjects)
   }

   
  return (
    <div
      id="projects" 
    >
      <div className="text-center pt-10 pb-10">
        <h1 className= { ` bg ${props. toggle ?"purp  pb-3 font-sans italic   text-5xl" : 'blue  pb-3 font-sans italic   text-5xl'}` } >
          Projects
        </h1>
        <span className="text-xl">Here are a few of my Works</span>
      </div>
      <div className="md:grid md:mb-0 md:pb-0  grid-cols-3 m-10  gap-5">

      <Project
       text="This project is important to me because it was my first paid project as a front-end developer. It seemed very challenging at first but breaking it down made it less complex . "
          text2="This Application Streamlines administrative tasks, making it easier to manage the users data and also to monitor the business performance."
          toggle={props.toggle}
          title="Admin Panel"
          image={DashBoard}
          giturl=""
          liveurl=""
          date='May 2024'
          icon= {iconSets.projectA}
       
        />

      <Project
          text="This was my capstone Project for Altschool Africa. I had to navigate my way through the firebase documentation so as to be able to implement Fire base authentication system ."  
 text2=" I really enjoyed working on this project because it was my first major project . I worked with vue and used pinia as my store Library. The most challenging aspect for me was saving the users data to the firebase database and then retrieving and displaying the data to the users."
          toggle={props.toggle}
          title="Chatter"
          image={chatter}
          liveurl="https://deechatterapp.vercel.app/"
          giturl="https://github.com/divineenofua/DEChatter"
          date='MARCH 2024'
          icon= {iconSets.projectB}
        />
        <Project
          text="This project is a clone of the Altschool website. I worked with a fellow Junior developer on this website. This project features login and sign-up pages utilizing local storage  . we didn't know firebase and other similar platforms were a thing then.    "
          text2=" The project was fun because we told our friends to sign up and try to login into the website and they did.And we would go to the local storage peep at their passwords and tell them we just guessed them correctly. I learnt Team work from this project , and how to manage conflicts from branches when working on a project with someone else. I worked on most of The UI and its responsiveness and also some logics that made the website functional."
          toggle={props.toggle}
          title="AltSchool Clone"
          image={Altschoolclone}
          giturl="https://github.com/divineenofua/Altschool_Clone"
          liveurl="https://altschool-clone.vercel.app/"
          date='AUGUST 2023'
          icon= {iconSets.projectC}
        />

{ showProjects ? <> 

  <Project
          text="This project was for my second second semester exam at Altschool ,I utilized GITHUB API to fetch and display users’ github profiles and projects,providing a seamless browsing experience for users to showcase their work."
          text2="
 Utilized error boundaries and a dedicated error page to enhance the application’s robustness and user experience by gracefully handling and presenting errors.
Implemented pagination for the repository list. Emphasized UI/UX design principles for an enhanced user experience."
          toggle={props.toggle}
          title="Github Repo"
          image={GitRepo}
          liveurl="https://stackblitz.com/edit/stackblitz-starters-csmquv"
          giturl="https://github.com/divineenofua/Github_Repo_Api"
          date='SEPTEMBER 2023'
          icon= {iconSets.projectD}
        />


  <Project
  text="The Vue Expense Tracker features a clean and intuitive user interface designed with Vue.js components and css for styling. Users can easily navigate through different sections of the application."
  text2="Users can add new expenses by entering details such as expense description, amount, and date. The application validates user input to ensure correct formatting and completeness.
  All added expenses are displayed in a list format, showing relevant details. "
  toggle={props.toggle}
  title="Expense Tracker"
  image={expense}
  liveurl="https://github.com/divineenofua/Expense_tracker"
  giturl="https://expense-tracker-iota-eosin.vercel.app/"
  date='NOVEMBER 2023'
  icon= {iconSets.projectE}
/>
  <Project
  text=" Designed and developed a visually engaging e-commerce website featuring a preloader, modal slider, toolbar, and customized scrollbar, enhancing user interaction and navigation throughout the shopping experience."
  text2="Implemented a versatile dark and light mode toggle feature, providing users with the flexibility to switch between themes for optimal viewing comfort and accessibility, enhancing the overall user experience.
  Integrated pop-up notifications to notify users of important events and updates, ensuring timely communication and engagement while browsing the website, thereby enhancing user satisfaction and retention."
  toggle={props.toggle}
  title="ECOMMERCE WEB-APP"
  image={commerce}
  liveurl="https://dee-shop.vercel.app/"
  giturl="https://github.com/divineenofua/Ecommerce-website"
  date=' APRIL 2022'
  icon= {iconSets.projectF}
/>  

   <Project
  text="Designed and developed a comprehensive menu page showcasing various dishes along with their descriptions and prices, providing users with a convenient overview of available options."
  text2="Created a dedicated review page where customers can share their feedback and experiences, fostering community engagement and trust. Integrated user-friendly features such as star ratings
  Developed an efficient order page enabling users to place orders seamlessly, with intuitive selection options for customizing orders based on preferences or dietary requirements.."
  toggle={props.toggle}
  title="FOOD WEB"
  image={food}
  liveurl=" food-web-roan.vercel.app"
  giturl="https://github.com/divineenofua/food-web"
  date=' MAY 2022'
  icon= {iconSets.projectG}
/>
  <Project
  text=" Implemented an intuitive and visually appealing layout using flexbox and grid techniques, optimizing the arrangement of content and ensuring seamless navigation across multiple pages."
  text2="Integrated a  map feature to facilitate easy location of available rental apartments, providing users with a convenient visual representation of property locations and nearby amenities, enhancing decision-making and exploration."
  toggle={props.toggle}
  title="STAYVINE(RENTAL WEBSITE)"
  image={rental}
  liveurl=" https://rental-website-rho.vercel.app/"
  giturl="https://github.com/divineenofua/rental-website"
  date=' AUGUST 2022'
  icon= {iconSets.projectH}
/>

<Project
  text=" A responsive social media platform User Interface"
  text2="Css Grid , flex box were utilized to create the website and make it responsive"
  toggle={props.toggle}
  title="social-media-website"
  image={Media}
  liveurl="dee-connect.vercel.app"
  giturl="https://github.com/divineenofua/social-media-website"
  date=' OCTOBER 2022'
  icon= {iconSets.projectI}
/>
<Project
  text=" In this project, I designed and developed a multipage school website using a combination of HTML for structure, CSS for styling, JavaScript for interactivity, and animations to enhance the user experience."
  text2="  A responsive navigation bar that allows users to navigate between different pages of the website is included and also  JavaScript was used for form validation and I Utilized CSS animations and JavaScript-based animations for dynamic effects "
  toggle={props.toggle}
  title="multipage-school-site"
  image={school}
  liveurl="http://multipage-school-site.vercel.app/"
  giturl="https://github.com/divineenofua/multipage-school-site"
  date=' NOVEMBER 2022'
  icon= {iconSets.projectK}
/>
 </> : ''


}  

      </div> 
      <div className="flex items-center justify-center">
     
     
        {/* <Link to="/projects"> */}
          {" "}
          <button onClick={HandleClickProjects}
            className={
              props.toggle
                ? "animate-bounce  hover:bg-purple-500 purp  border-fuchsia-200 border  rounded-md p-4 flex items-center gap-1 "
                : "animate-bounce border-blue-200 border bg-white blue rounded-md p-4 flex items-center gap-1 "
            }
          >
           {showProjects ? 'View Less ' : 'View More '} <FaArrowRight />
          </button>
        {/* </Link> */}



      </div>
    </div>
  );
};

export default Projects;
