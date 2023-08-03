import React from "react";
import "./Resume.css";
import Grid from "@mui/material/Grid";
import CustomTimeline from "../../Components/Timeline/Timeline";
import { CustomTimelineSeparator } from "../../Components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import "../../Components/Timeline/Timeline.css";
import Typography from "@mui/material/Typography";
import resumeData from "../../Utils/resumeData";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import TimelineDot from "@mui/lab/TimelineDot";
import TextField from "@mui/material/TextField";
import CustomButton from "../../Components/Button/Button";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pt_45">
        <Grid item className="section_title">
          <span></span>
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text pd_20">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experiences */}
      <Grid container className="section pb_45 top_30">
        <Grid item className="section_title">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="pt_30">
            {/* Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography variant="h6" className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="body2" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/*  Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<WorkIcon />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography variant="h6" className="timeline_title">
                        {education.title}
                      </Typography>
                      <Typography variant="body2" className="timeline_date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="timeline_description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Coding Services */}
      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">My Coding Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            className="pt_30"
            spacing={3}
            justifyContent={"space-around"}
          >
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={service.title}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Coding Skills */}
      <Grid
        container
        justifyContent="space-between"
        className="section graybg pb_45 pt_45"
      >
        {resumeData.coding_skills.map((skill) => (
          <Grid item xs={12} sm={12} md={3}>
            <Paper elevation={2} className="skill">
              <Typography variant="h6" className="skills_title">
                {skill.title}
              </Typography>
              {skill.description.map((element) => (
                <Typography variant="body2" className="skill_description">
                  <TimelineDot
                    variant={"outlined"}
                    sx={{ borderColor: "var(--main-color)", m: 1 }}
                  />
                  <span className="dot_description">{element}</span>
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Biomedical Skills */}
      <Grid
        container
        justifyContent="space-between"
        className="section graybg pb_45 pt_45"
      >
        {resumeData.biomed_skills.map((skill) => (
          <Grid item xs={12} sm={12} md={3} spacing={1}>
            <Paper elevation={2} className="skill">
              <Typography variant="h6" className="skills_title">
                {skill.title}
              </Typography>
              {skill.description.map((element) => (
                <Typography variant="body2" className="skill_description">
                  <TimelineDot
                    variant={"outlined"}
                    sx={{ borderColor: "var(--main-color)", m: 1 }}
                  />
                  <span className="dot_description">{element}</span>
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact */}
      <Grid container className="section pd_30">
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container className="section pb_45 top_30">
            <Grid item className="section_title">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="pt_30" spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWdith name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWdith name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWdith
                    name="message"
                    label="Message"
                    multiline-rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title pt_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography className="contactInfo_item pt_30">
                    <span>Phone: </span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className="contactInfo_item">
                    <span>E-mail: </span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="contactInfo_social">
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
