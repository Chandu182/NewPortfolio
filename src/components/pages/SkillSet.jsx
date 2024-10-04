import  { useState } from 'react';
import './SkillSet.css'; // Add your styling here
import SQLLightmode from './Assets/sqldarkmode.png'
import SQLDarkmode from './Assets/sqllightmode.png'
import PowerAppDark from './Assets/powerappsdarkmode.webp'
import PowerAppLight from './Assets/Powerappslightmode.png'
import MSOfficeLight from './Assets/MSOfficeLight.png'
import MSOfficeDark from './Assets/MSOfficeDark.jpg'
import AdobeDark from './Assets/AdobeDark.png'
import AdobeLight from './Assets/AdobetoolsLight.jpg'


function SkillSet({ theme, setTheme }) {
  const [activeSkill, setActiveSkill] = useState(null);
  const skillsData = [
    {
      id: 1,
      name: "SQL",
      description: ["SQL Server2008",
        "SQL Server R2 2008",
         "SQL Server 2014",
        "SQL Server 2016",
        "SQL Server 2017",
        "SQL Server 2019",
        "SQL Server 2022",
        "All MY Sql workbench",
        "My sql shell"],
      logo: theme == 'light' ? SQLDarkmode : SQLLightmode, // Replace with actual image path
    },
    {
      id: 2,
      name: "POWER APPS",
      description: ["Power Apps","Power pages","Power BI","Power Automations","SharePoint"],
      logo: theme == 'light' ? PowerAppLight : PowerAppDark, // Replace with actual image path
    },
    {
      id: 3,
      name: "MS OFFICE",
      description: ["Adobe Photoshop", "Adobe Premiere Pro","Adobe Dream viewer","Adobe After Effects [basics]"],
      logo: theme == 'light' ? MSOfficeLight : MSOfficeDark, // Replace with actual image path
    },
    {
      id: 4,
      name: "ADOBE TOOLS",
      description: ["Built single-page applications using React.", "Used hooks and managed state efficiently."],
      logo: theme == 'light' ? AdobeDark : AdobeLight, // Replace with actual image path
    },
  ];

  const handleSkillClick = (skill) => {
    if (activeSkill === skill) {
      setActiveSkill(null); // collapse if the same skill is clicked again
    } else {
      setActiveSkill(skill); // set the clicked skill as active
    }
  };

  return (
    <div className={`skills-container ${theme}`}>
      {/* Skill Details when clicked */}
      <h1 className="title">
        SkillSet
      </h1>
      {activeSkill && (
        <div className="skill-details">
          <img src={activeSkill.logo} alt={activeSkill.name} className="skill-detail-logo" />
          <div className="skill-details-content">
            <h2>{activeSkill.name}</h2>
            <ul>
              {activeSkill.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button className="close-button" onClick={() => setActiveSkill(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Skill Grid */}
      <div className={`skills-grid ${activeSkill ? 'hide' : ''}`}>
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="skill-item"
            onClick={() => handleSkillClick(skill)}
          >
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default SkillSet