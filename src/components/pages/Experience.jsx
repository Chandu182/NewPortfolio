import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css'
// eslint-disable-next-line react/prop-types
const Experience = ({theme}) => {
   const lightThemeStyles = {
      lineColor: '#000', // Dark line color for light theme
      contentBgColor: 'rgba(255, 255, 255, 0.1)', // Light background
      contentTextColor: '#15006A', // Dark text
      background:'#15006A',
      borderRight: '7px solid  #15006A' 
    };
  
    const darkThemeStyles = {
      lineColor: '#fff', // Light line color for dark theme
      contentBgColor: '#333', // Dark background
      contentTextColor: '#fff', // Light text
       background:'#000',
      borderRight: '7px solid  rgb(5, 5, 5)'
    };
  
    const themeStyles = theme === 'light' ? lightThemeStyles : darkThemeStyles;
  return (
    <div id='Experience' className='experience__section'> 
    <h1 className='section__heading'>Work Experience</h1>
         <VerticalTimeline lineColor={themeStyles.lineColor}>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: themeStyles.contentBgColor, color: themeStyles.contentTextColor }}
contentArrowStyle={{ borderRight: themeStyles.borderRight }}
date="March 2020 - present"
dateClassName='date'
iconStyle={{ background: themeStyles.background }}
>
<h3 className="vertical-timeline-element-title">Andhra Pradesh State Skill Development Corporation (APSSDC)</h3>
<h4 className="vertical-timeline-element-subtitle">Role: Technical Skill Trainer</h4>
<p>
   Key Achievements:
   <ul className='achievements'>
    <li>
    Organized and handled engineering programs and online training during the COVID-19 pandemic.
    </li>
    <li>
    Managed internship training and drone pilot training programs.
    </li>
    <li>
    Coordinated Faculty Development Programs, workshops, and online sessions.
    </li>
    <li>
    Designed promotional materials and handled social media.
    </li>
    <li>
    Created and managed training data, project reports, and client communication.
    </li>
   </ul>
</p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: themeStyles.contentBgColor, color: themeStyles.contentTextColor }}
contentArrowStyle={{ borderRight:  themeStyles.borderRight}}
date="April 2016 – November 2019"
dateClassName='date'
iconStyle={{ background: themeStyles.background}}
>
<h3 className="vertical-timeline-element-title">Honeywell Automation (Tata Consultancy Services) </h3>
<h4 className="vertical-timeline-element-subtitle">Role: Building Management Systems (BMS) Service Engineer and Technical Admin Support</h4>
<p>
   Key Achievements:
   <ul className='achievements'>
    <li>
    Carried out IAQ tests, client interaction, and audits.
    </li>
    <li>
    Maintained critical utilities such as UPS, chillers, and HVAC systems.
    </li>
    <li>
    Led the BMS analytical group at REMC COCHI.
    </li>
    <li>
    Proficiency in managing reports, vendor coordination, and technical automation.
    </li>
   </ul>
   </p>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: themeStyles.contentBgColor, color: themeStyles.contentTextColor }}
contentArrowStyle={{ borderRight:  themeStyles.borderRight }}
date="June 2014 – March 2016"
dateClassName='date'
iconStyle={{ background: themeStyles.background}}
>
<h3 className="vertical-timeline-element-title">ICube Solutions </h3>
<h4 className="vertical-timeline-element-subtitle">Role: Software Engineer</h4>
<p>
   Key Achievements:
   <ul className='achievements'>
    <li>
    Project testing using C# and VB.NET, SQL Server database management, Excel file importing, and client interaction.
    </li>
   </ul>
   </p>
</VerticalTimelineElement>
</VerticalTimeline>
    </div>
  );
}

export default Experience