import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import DownloadIcon from "@mui/icons-material/Download";
import resumeData from "../../utils/resumeData.js";
import "./Profile.css";
import AgeCounter from "../../utils/ageCounter";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import CustomButton from "../Button/Button.js";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/displayImage.jpg")} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline classname="person_icon" icon={<PersonPinIcon />}>
          <CustomTimelineItem
            title="Name"
            text={
              <div>
                {resumeData.name}
                <br />
              </div>
            }
          />
          <CustomTimelineItem
            title="Email"
            text={
              <div>
                {resumeData.email}
                <br />
              </div>
            }
          />
          <CustomTimelineItem
            title="Age"
            text={
              <div>
                <AgeCounter />
                <br />
              </div>
            }
          />
          <CustomTimelineItem
            title="Location"
            text={
              <div>
                {resumeData.location}
                <br />
              </div>
            }
          />
        </CustomTimeline>
        <div className="button_container">
          <CustomButton text={"Download my CV"} icon={<DownloadIcon />} />
        </div>
    </div>
    </div>
  );
};

export default Profile;
