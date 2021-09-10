import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ExploreIcon from '@material-ui/icons/Explore';
import BookIcon from '@material-ui/icons/Book';
import AdbIcon from '@material-ui/icons/Adb';
import LanguageIcon from '@material-ui/icons/Language';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function RightAlignedTimeline() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>



    <Timeline align="alternate" >

{/* <-------- BOX : Degree WebDev -------->*/}

<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary' >
            <CastForEducationIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography  className='align-text-left' variant="h2">Web Developer Junior Degree</Typography>
              <Typography className='align-text-left' variant="h6">Graduated from <b>IronHack</b> | RNCP Level 6 Degree</Typography>
              <Typography className='align-text-left'>Fullstack Developer course: HTML & CSS, JavaScript, React, Express, NodeJS, MongoDB</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

{/* <-------- BOX : Clustaar : Project Manager -------->*/}

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2018 to 2021
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2 years and 7 months
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <AdbIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography variant="h2">Project Manager & Business Developer</Typography>
              <Typography variant="h6">At <b>Clustaar Conversational AI</b>, Saas solution of conversational agent</Typography>
              <Typography>Tasked with developing the Clustaar's solution in France and internationally, I assisted both private companies and public instituions publiques from initial negociation, outlining the project roadmap, organizing the ideation workshops and following the KPI with the CSM teams. , comme il est souvent exigé en start-up et de développer mes compétences en gestion de projets d'innovation.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

{/* <-------- BOX : PPA  -------->*/}

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017 to 2019
          </Typography>
          <Typography variant="body2" color="textSecondary">
            4 semesters
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <BookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper  elevation={3} className={classes.paper}>
        <Typography className='align-text-left' variant="h2">Speaker</Typography>
              <Typography variant="h6" className='align-text-left'>At PPA, Business School</Typography>
              <Typography className='align-text-left'>Independant of my main job, I taught digital marketing for 2 years. I taught a dozen classes each consisting of 15 hours of in-class time.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

{/* <-------- BOX : Effinity International biz dev  -------->*/}

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017 to 2018
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2 years
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <LanguageIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" >International Business Developer</Typography>
              <Typography>At Effinity Partners, Digital Agency with over more 300 clients</Typography>
              <Typography>Yoyoya</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      

    
{/* <-------- BOX : Effinity Brasil  -------->*/}

<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2015 to 2017
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2 years
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <ExploreIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography className='align-text-left' variant="h2">International Business Developer</Typography>
              <Typography variant="h6" className='align-text-left'>At Effinity Partners in Brazil associated with ForResults Communication Agency</Typography>
              <Typography className='align-text-left'>Yoyoya</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    {/* <-------- BOX : Effinity Brasil  -------->*/}

<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2013 to 2015
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2 years
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <AssignmentTurnedInIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography variant="h2">Digital Project Manager</Typography>
              <Typography variant="h6">At Effinity Partners</Typography>
              <Typography>Yoyoya</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

 {/* <-------- BOX : IFAG  -------->*/}

 <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2011 to 2014
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary'>
            <CardMembershipIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography className='align-text-left' variant="h2">Master II </Typography>
              <Typography variant="h6" className='align-text-left'>From IFAG Business School</Typography>
              <Typography className='align-text-left'>Diplôme en gestion des entreprises</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

          {/* <-------- BOX : Effinity Traffic Manager  -------->*/}

<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2011 to 2013
          </Typography>
          <Typography variant="body2" color="textSecondary">
            2 years
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <InsertLinkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography variant="h2">Traffic Manager </Typography>
              <Typography variant="h6">At Effinity Partners</Typography>
              <Typography>First professional experience where I had the chance to launch e-campaigns and to learn about tracking and affiliate marketing. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

 {/* <-------- BOX : ISCOM  -------->*/}

 <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2008 to 2010
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='secondary'>
            <LocalLibraryIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
        <Typography className='align-text-left' variant="h2">Bachelor</Typography>
              <Typography className='align-text-left' variant="h6">from ISCOM, Communication School</Typography>
              <Typography className='align-text-left'>Bachelor in Communcation and Advertising</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      </Timeline>
      </ThemeProvider>
  );
}
