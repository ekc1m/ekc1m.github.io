import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "./Resume.css";
import CustomTimeline, {
    CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import TimelineDot from "@mui/lab/TimelineDot";

const Resume = () => {
    return (
        <>
        {/* about me */}
        <Grid container className="section pb_45">
        <Grid item className="section_title bottom_30">
        <span></span>
        <h6 className='section_title_text'>About me</h6>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body2" className="aboutme_text">{resumeData.about_me}</Typography>
        </Grid>
        </Grid>

        {/* work history and education */}

        <Grid container className='section'>
        <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Resume</h6>
        </Grid>

        <Grid item xs={12}>
        <Grid container className='resume_timeline'>
        {/* work history */}
        <Grid item sm={12} md={6}>
        <CustomTimeline
        title='Work history'
        icon={<WorkHistoryIcon />}>
        {resumeData.workhistory.map((history) =>(
            <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline_content'>
            <Typography className='timeline_title'>{history.title}</Typography>
            <Typography variant='caption' className='timeline_date'>{history.date}</Typography>
            <Typography variant='body2' className='timeline_description'>{history.description}</Typography>
            </TimelineContent>
            </TimelineItem>
        ))}
        <TimelineDot className='timeline_end_dot' />
        </CustomTimeline>
        </Grid>
        {/* education */}
        <Grid item sm={12} md={6}>
        <CustomTimeline
        title='Education'
        icon={<SchoolIcon />}>
        {resumeData.education.map((edu) =>(
            <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className='timeline_content'>
            <Typography className='timeline_title'>{edu.title}</Typography>
            <Typography variant='caption' className='timeline_date'>{edu.date}</Typography>
            <Typography variant='body2' className='timeline_description'>{edu.description}</Typography>
            </TimelineContent>
            </TimelineItem>
        ))}
        <TimelineDot className='timeline_end_dot' />
        </CustomTimeline>
        </Grid>
        </Grid>
        </Grid>
        </Grid>

        {/* skills */}

        <Grid container spacing={3} className='bottom_30 skills_container'>
        <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={0} className='skill'>
        <Typography variant='body' className='title_skills'>
        <LanguageIcon className='lang_icon' />
        <span className='lang_title'>{resumeData.skills[0].title}<br /></span>
        </Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[0].description[0]}<br /></Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[0].description[1]}<br /></Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[0].description[2]}<br /></Typography>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={0} className='skill'>
        <Typography variant='body' className='title_skills'>
        <CodeIcon className='code_icon' />
        <span className='code_title'>{resumeData.skills[1].title}<br /></span>
        </Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[1].description[0]}<br /></Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[1].description[1]}<br /></Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[1].description[2]}<br /></Typography>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Paper elevation={0} className='skill'>
        <Typography variant='body' className='title_skills'>
        <ComputerIcon className='computer_icon' />
        <span className='it_title'>{resumeData.skills[2].title}<br /></span>
        </Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[2].description[0]}<br /></Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[2].description[1]}<br /></Typography>
        <Typography variant='caption' className='skills_description'>{resumeData.skills[2].description[2]}<br /></Typography>
        </Paper>
        </Grid>
        </Grid>
        </>
    );
};

export default Resume;
