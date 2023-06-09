import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.date ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg"},
    {label: "Work History", logoSrc: "work-history.svg"},
    {label: "Programming Skills", logoSrc: "programming-skills.svg"},
    {label: "Projects", logoSrc: "projects.svg"},
    {label: "Interests", logoSrc: "interests.svg"},
  ];

  const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage: 85},
    {skill: "React Js", ratingPercentage: 85},
    {skill: "Angular", ratingPercentage: 85},
    {skill: "HTML", ratingPercentage: 85},
    {skill: "CSS", ratingPercentage: 85},
    {skill: "Express", ratingPercentage: 85},
    {skill: "Core Java", ratingPercentage: 85},
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: 
    }
  ]

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
      </div>
    </div>
  );
}
