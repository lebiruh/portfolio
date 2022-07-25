import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: '#3e497a', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          date="2021 - present"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Addis Ababa, ETHIOPIA</h4>
          <p>
            Helped the team launch 2 major features by working both in the front end and back end 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: '#3e497a', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          date="2018 - 2020"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Addis Ababa, ETHIOPIA</h4>
          <p>
            Developed the font end pages and components for 4 projects. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: '#3e497a', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          date="2012 - 2018"
          iconStyle={{ background: '#3e497a', color: '#fff' }}
          icon={<WorkHistoryIcon />}
        >
          <h3 className="vertical-timeline-element-title">Office Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Addis Ababa, ETHIOPIA</h4>
          <p>
            Coordinated and followed up the construction of different building and road projects. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: '#3e497a', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  #3e497a' }}
          date="2008 - 2011"
          iconStyle={{ background: '#e9d35b', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Addis Ababa University, Addis Ababa, ETHIOPIA</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
          <p>
            Civil Engineering
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience