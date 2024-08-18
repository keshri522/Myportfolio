import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FaWpexplorer } from "react-icons/fa";

const VerticaltimeLine = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //   contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2022 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaWpexplorer />}
        >
          <h4 className="vertical-timeline-element-title">
            Mern Stack Trainee At (AlmaBetter)
          </h4>

          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Learned MERN Stack Development, Agile Methodology, and UI/UX Design.
            Gained experience in both frontend and backend development. Worked
            effectively with team members and collaborated with others to solve
            problems. Developed real-time projects such as a Flashcard Generator
            and a Resume Builder.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Proficiency in React Next Js , Node.js, Express.js, and MongoDB:
            Leveraged these technologies to build scalable and high-performance
            applications
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Understanding of RESTful APIs: Designed and integrated APIs to
            facilitate communication between frontend and backend.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Version Control with Git: Managed project versions and collaborated
            with team members using Git and GitHub.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Continuous Learning: Stay updated with the latest industry trends
            and technologies to improve development practices.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023(Nov) - 2024(Jan)"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaWpexplorer />}
        >
          <h4 className="vertical-timeline-element-title">
            Mern Stack Intern/Team Lead(Sankhayana Consultancy)
          </h4>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Collaborating with team members to Solve the problem,creating
            UI/UX.Working with Frontend (React/next),Use MongoDb/Sql in Backend,
            Convert Figma Design into Code
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Working with Version control system like Git and Github to keep the
            Track of the Codes.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Use Agile Methodoloy for completing the task on the given time.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Connecting with team Members to Meet the deadline of the
            Project.HandOver the given Projects on time.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Spending Time On R & D. Presenting my Idea on the Given Projects
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024(Feb) - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaWpexplorer />}
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineer(Doceree Media India Limited/AdTech )
          </h4>

          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            As a Software Engineer, In my current role at ADTECH, I am an
            integral part of the team working on the Supply Side Platform (SSP).
            ADTECH is a leading company specializing in advanced advertising
            technologies, and the SSP team focuses on optimizing ad inventory
            and maximizing revenue for publishers. My work involves:
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Creating User Interfaces: Designing and implementing user interfaces
            that provide a seamless and efficient user experience, ensuring that
            ad operations are intuitive and effective.
          </p>

          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Developing Complex Functionality: Leveraging Redux,
            Next.js,React-query and TypeScript to build and manage sophisticated
            features and functionalities required for SSP operations.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Collaborating with Teams: Working closely with cross-functional
            teams, including backend developers, designers, and product
            managers, to develop and optimize solutions that enhance the
            performance and scalability of the SSP.
          </p>
          <p style={{ fontSize: "13px", marginBottom: "3px" }}>
            Continuous Improvement: Applying Agile methodologies to ensure
            iterative improvements and high-quality deliverables, adapting to
            the evolving needs of the advertising technology landscape.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default VerticaltimeLine;
