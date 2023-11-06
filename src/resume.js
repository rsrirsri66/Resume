import React from "react";
import img from "./Sridharan R.png";
import "./res.css";
import {AiTwotonePhone} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

function Resume(){
    return(
        <div className="overall">
          
          <div className="line">
         
            <div className="personal">
            <b>Sridharan Ravichandran</b><br></br><br></br>
       
        <div className="info">
         <div> <AiTwotonePhone/> 9159170022 <br></br></div> 
         <div><AiOutlineMail/> rsrirsri66@gmail.com<br></br></div>
         <div> <AiFillLinkedin/>https://www.linkedin.com/in/sridharan-ravichandran-0b4593253</div>
         </div></div>
         <img className="image" src={img} alt="sri"/>
      </div>
        <div className="body">
        
           <p className="heading"><h><b>Career Objective</b></h></p>
    
            <p>A challenging position in an innovative and forward-thinking company that will allow me <br></br>to
            utilize my skills and experience in a new and exciting way.</p><br></br>

            <h className="heading"><b>Project Undertook</b></h><br></br>
            <ul className="list">
                <li>
            <p>Personal assistance for seniors who are self-reliant.</p></li>
            <li>
            <p>Project On Progress (Using Frontend: ReactJS , Backend: NodeJS, Database: MongoDB)</p></li></ul>
         <br></br>
        <p className="heading"><h><b>Core Skills</b></h></p>
        <div className="info-item">
        <span className="label">Language:</span>
        <span className="value">Java, DSA</span>
      </div>
      <div className="info-item">
        <span className="label">Tools:</span>
        <span className="value">GitHub, Eclipse, VS Code</span>
      </div>
      <div className="info-item">
        <span className="label">Server Side Programming:</span>
        <span className="value">Node.js, Express.js</span>
      </div>
      <div className="info-item">
        <span className="label">Client Side Programming:</span>
        <span className="value">React.js</span>
      </div>
      <div className="info-item">
        <span className="label">Domain:</span>
        <span className="value">Full Stack Developer</span>
      </div>
      <div className="info-item">
        <span className="label">Database:</span>
        <span className="value">NoSQL (MongoDB)</span>
      </div>
        <p className="heading"><h><b>Skills</b></h></p>
        <div className="info-item">
        <span className="label">Web Technologies:</span>
        <span className="value">HTML, CSS, Java Script.</span>
      </div>
      <div className="info-item">
        <span className="label">Designing Skills:</span>
        <span className="value">Figma, Photoshop.</span>
      </div>
        <p className="heading"><h><b>Certification</b></h></p>
        <ul><li>
        <p>Fogwing Industrial IoT Developer - FACTANA.</p></li>
        <li>
        <p>Introduction to Cloud - IBM.</p></li>
        </ul>
        <p className="heading"><h><b>Educational Profile</b></h></p>
        <table className="table" border="2">
            <tr>
            <th><b>Course</b></th>
            <th><b>University</b></th>
            <th><b>Institution</b></th>
            <th><b>Year of Passing</b></th>
            <th><b>Percentage/CGP</b></th>
            </tr>
            <tr>
                <th>B.E.(CSE)</th>
                <td className="tabletext">Anna University</td>
                <td className="tabletext">Jansons Institute of Technology</td>
                <td className="tabletext">2023</td>
                <td className="tabletext">8.0</td>
            </tr>
            <tr>
                <th>HSC</th>
                <td className="tabletext">State Board</td>
                <td className="tabletext">Spic Nagar Higher Secondary School</td>
                <td className="tabletext">2019</td>
                <td className="tabletext">69%</td>
            </tr>
            <tr>
                <th>SSLC</th>
                <td className="tabletext">State Board</td>
                <td className="tabletext">Spic Nagar Higher Secondary School</td>
                <td className="tabletext">2017</td>
                <td className="tabletext">89%</td>
            </tr>
        </table>
        <p className="heading"><h><b>Language Known</b></h></p>
        <ul><li>
        <p>Tamil.</p></li>
        <li>
        <p>English.</p></li></ul>
        <p className="heading"><h><b>Hobbies</b></h></p>
        <ul><li>
        <p>Photography.</p></li>
        <li>
        <p>Fitness enthusiast.</p></li>
        </ul>
        <p className="heading"><h><b>Declaration</b></h></p>
        <p>
        I hereby insist that the above details are true to the best of my knowledge.
        </p>
        <p><h><b>Place :</b></h></p>
        <p><h><b>Date :</b></h></p>
        <p className="sign"><h><b>(SRIDHARAN R)</b></h></p>
        </div>
        </div>


    )
}
export default Resume