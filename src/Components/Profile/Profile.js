import React from "react";
import Typography from "@mui/material/Typography";
import resumeData from "../../Utils/resumeData";
import "./Profile.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomTimeline from "../Timeline/Timeline";
import { CustomTimelineSeparator } from "../Timeline/Timeline";
import "../Timeline/Timeline.css";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem className={"timeline_firstItem"}>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}</span>{" "}
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
};

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      {/* This is for my profile image*/}
      <figure className="profile_image">
        <img src={require("../../Assets/images/Chainsawman.png")} alt="" />
      </figure>

      <div className="profile_information" style={{ maxHeight: "600px" }}>
        <CustomTimeline
          title={resumeData.title}
          icon={<PersonOutlineOutlinedIcon />}
        />
        <Timeline>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          <CustomTimelineItem title="Birthday" text={resumeData.birthday} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </Timeline>
        <div className="button_container">
          <CustomButton
            text={"Download CV"}
            icon={<GetAppIcon />}
            downloadCV={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
