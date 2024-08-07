import React, {useState}from "react";
import {Divider} from "@nextui-org/react";
import './divider.css'
import Fade from "react-reveal/Fade"


export const MyDivider = ({number, hidden}) => {
    const [college, setCollege] = useState("");
    const [cert, setCert] = useState("");
    const [job, setJob] = useState("selected");

    const setHighlight = (select) =>{
        setCollege("");
        setCert("");
        setJob("");
        if(select ==="college"){
            setCollege("selected")
        }
        else if (select === "cert"){
            setCert("selected");
        }
        else{
            setJob("selected")
        }
    }

  return (
    <>
    <div className="flex-left">
        <div className="max-w-md">
        <div className="space-y-1">
            <h4 className="text-medium font-medium">Career Highlights</h4>
            <p className="text-small text-default-400">2022-2024</p>
        </div>
        <Divider className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-small">
            <div onClick={()=>{setHighlight("job")}} className={`btn-hover ${job}`}>Current Job</div>
            <Divider orientation="vertical" />
            <div onClick={()=>{setHighlight("cert")}} className={`btn-hover ${cert}`}>Certifications</div>
            <Divider orientation="vertical" />
            <div onClick={()=>{setHighlight("college")}} className={`btn-hover ${college}`}>College</div>

        </div>
        </div>
    </div>
    {college &&
    <div className="highlights-text">
        <Fade>
            <>
            <div>Cedarville University,</div>
            <div>
            During my time at college, I dove into the world of computer science with a focus on Cyber Operations. I got my hands dirty with Object-Oriented Programming (OOP), Dynamic Programming, Threading, and lots more. Beyond the classroom, I immersed myself in computer-related clubs like the Cyber Defense Club, where I learned practical skills and soaked up knowledge like a sponge. Along the way, I also delved into databases and web applications, gaining valuable insights that continue to shape my journey as a web developer. Cedarville University was more than just a school; it was where my passion for technology truly flourished, setting me on the path to becoming the developer I am today.
            </div>
            </>
        </Fade>
    </div>
   
    }
    {cert &&
    <div className="highlights-text">
        <Fade>
            <div>Certifications,</div>
            <div>
                During my intensive four-month training at Skillstorm, I achieved significant milestones in my professional development. Notably, I obtained the Java Foundations certification by successfully passing the Java Foundations | 1Z0-811 exam. This certification not only validated my comprehensive understanding of Java but also highlighted my proficiency in foundational Java concepts. Additionally, I dedicated myself to mastering cybersecurity principles, a commitment evidenced by my successful completion of the Security+ exam, resulting in my attainment of the CompTIA Security+ ce certification. These accomplishments not only signify my expertise in Java programming and cybersecurity but also demonstrate my relentless pursuit of excellence and readiness to tackle complex challenges in the ever-evolving tech landscape.
            </div>
        </Fade>
    </div>
    }
    {job &&
    <div className="highlights-text">
        <Fade>
            <div>SkillStorm,</div>
            <div>
            Currently, I am employed at Skillstorm, where I am contracted to work with Price Waterhouse Coopers (PwC). Over the past year, my team and I have embarked on an exciting journey, building from scratch a cutting-edge React web application and a robust Spring Boot backend. Together, these components seamlessly interact to drastically improve the user experience for technology registration at PwC. It's been a thrilling process witnessing our project evolve from conceptualization to implementation, and I take pride in our collective effort to deliver a solution that not only meets but exceeds expectations. Our collaboration underscores the power of teamwork and innovation in creating transformative solutions for real-world challenges.
            </div>
        </Fade>
    </div>
    }
    </>
  );
}
