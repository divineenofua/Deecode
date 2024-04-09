import Project from "./Project";
import chatter from "../assets/chatter.png";
 import Media from '../assets/e media.png'
 import school from '../assets/e school.png'
 import rental from '../assets/e rentals.png'
 import food from '../assets/food web.png'
 import commerce from '../assets/ecommerce.png'
 import expense from '../assets/expense tracker.png'



import Altschoolclone from "../assets/AltschoolClone.png";
import GitRepo from "../assets/gitrepo.png";
import { Link } from "react-router-dom";
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
      className={props.toggle ? " bg-gray-800  " : "bg-gray-50"}
    >
      <div className="text-center pt-10 pb-10">
        <h1 className=" pb-3 font-sans italic text-purple-400 text-5xl">
          Projects
        </h1>
        <span className="text-xl">Here are a few of my Works</span>
      </div>
      <div className="md:grid md:mb-0 md:pb-0 grid-cols-3 m-10  gap-5">
        <Project
          text="Developed a fully responsive web app where users can create and publish tech related contents
Implemented a robust authentication system featuring login and sign-up pages utilizing Fire base authentication system ."
          text2="Users can login using Google account and other social media handlesThe Web App is built with Vue , it has  user-friendly interface ensuring a smooth and responsive user experience across devices ."
          toggle={props.toggle}
          title="Chatter"
          image={chatter}
          liveurl="https://deechatterapp.vercel.app/"
          giturl="https://github.com/divineenofua/DEChatter"
          date='MARCH 2024'
        />
        <Project
          text="Developed a fully responsive online school website utilizing HTML,CSS and Javascript exclusively , ensuring seamless user experience across various devices and screen sizes.
Implemented a robust authentication system"
          text2="featuring login and sign-up pages utilizing local storage ,enhancing user security and accessibility without the need for an external database Designed an intuitive and user-friendly interface, prioritizing user experience to facilitate easy navigation and interaction."
          toggle={props.toggle}
          title="AltSchool Clone"
          image={Altschoolclone}
          giturl="https://github.com/divineenofua/Altschool_Clone"
          liveurl="https://altschool-clone.vercel.app/"
          date='AUGUST 2023'
        />


        <Project
          text="Developed a dynamic web application using React , utilizing GITHUB API to fetch and display users’ github profiles and projects,providing a seamless browsing experience for users to showcase their work."
          text2="
 Utilized error boundaries and a dedicated error page to enhance the application’s robustness and user experience by gracefully handling and presenting errors.
Implemented pagination for the repository list. Emphasized UI/UX design principles for an enhanced user experience."
          toggle={props.toggle}
          title="Github Repo"
          image={GitRepo}
          liveurl="https://stackblitz.com/edit/stackblitz-starters-csmquv"
          giturl="https://github.com/divineenofua/Github_Repo_Api"
          date='SEPTEMBER 2023'
        />


{ showProjects ? <> 
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
/>
 </> : ''


}

      </div>
      <div className="flex items-center justify-center">
     
     
        <Link to="/projects">
          {" "}
          <button onClick={HandleClickProjects}
            className={
              props.toggle
                ? "animate-bounce bg-purple-900 hover:bg-purple-400 rounded-md p-4 flex items-center gap-1 "
                : "animate-bounce bg-white border-purple-400 text-purple-400 rounded-md p-4 flex items-center gap-1 "
            }
          >
            View More <FaArrowRight />
          </button>
        </Link>



      </div>
    </div>
  );
};

export default Projects;
