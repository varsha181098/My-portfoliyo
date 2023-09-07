import React from 'react'
import "../index.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Demo = () => {
  return (
    <div>
      <Tabs>
        <TabList style={{ width: "0px" }}>
          <Tab style={{ color: "#ff004f" }}><h3 style={{ color: "#ababab" }}>Skills</h3></Tab>
          <Tab style={{ color: "#ff004f" }}><h3 style={{ color: "#ababab" }}>Experience</h3></Tab>
          <Tab style={{ color: "#ff004f" }}><h3 style={{ color: "#ababab" }}>Education</h3></Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <h2 style={{ color: "#b54769" }}>Frontend Developer</h2>
            <p style={{ fontSize: "17px" }}>Implements visual elements that users see and interact with in a websites.
              Created a responsive website for desktop, tablet, & mobile using HTML, CSS, JS, React.</p>
          </TabPanel>
          <TabPanel>
           
       
            <h2 style={{ color: "#b54769" }}>  2023 </h2>
            <p style={{ fontSize: "17px" }}>Intern at TechnoHub education Services 
              Gain experience from basic languages like HTML, CSS and JavaScript.
              Practiced on libraries like Bootstrap, ReactJS.
              Working on Attendance and Monitoring Management System.
              Trello for project management, GitHub for version control.
              Hand on working with VS Code software.</p>
          </TabPanel>
          <TabPanel>
            <h2 style={{ color: "#b54769" }}> July-2019</h2>
            <p style={{ fontSize: "17px" }}> Bachelor of Engineering from Bhopal University (RGPV)</p>
            <h2 style={{ color: "#b54769" }}> Dec 2021</h2>
            <p style={{ fontSize: "17px" }}>Master of Technology from Bhopal University (RGPV)</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default Demo;
