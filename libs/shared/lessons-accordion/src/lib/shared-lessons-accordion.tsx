import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import './shared-lessons-accordion.scss';
import { Edit as EditIcon } from '@material-ui/icons';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';
interface Lesson {
  _id: string;
  title: string;
  image: string;
  authorName: string;
  imageUrl: string;
  description: string;
  type: string;
}

export interface SharedLessonsAccordionProps {
  onClick?: () => void;
  isEditable?: boolean;
  lessonsDescription?: string;
  lessons: Lesson[];
  accordionTitle: string;
  showAddButton?: boolean;
  listCourses?: boolean;
}

export const SharedLessonsAccordion = (props: SharedLessonsAccordionProps) => {
  const onClick = () => {
    props.onClick();
  };

  return (
    <Container fixed>
      <div>
        <Typography className="lessons-description">
          {props.lessonsDescription}
          {!props.showAddButton && props.isEditable && (
            <EditIcon className="editIcon" onClick={onClick} />
          )}
        </Typography>
      </div>
      <Accordion className="lessons-accordion" defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="lessons"
          className="lessons-title"
        >
          <Typography className="text">{props.accordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails className="lessons-accordion">
          <div>
            <Grid container spacing={2}>
              {props.showAddButton && (
                <Grid key={1} item xs={3} onClick={onClick}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    color="primary"
                    className="addCircleIcon"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      fontSize: '20px',
                    }}
                  >
                    <AddCircleIcon fontSize="large" />
                    Add Lesson
                  </Typography>
                </Grid>
              )}
              {props.lessons.map((lesson, i) => (
                <Grid key={i} item xs={3}>
                  <Link
                    to={`/${props.listCourses ? 'courses' : 'lessons'}/${
                      lesson._id
                    }`}
                    className="lesson-link"
                  >
                    <Card>
                      <CardActionArea>
                        {lesson.imageUrl && (
                          <CardMedia
                            className="lesson-image"
                            id={lesson._id}
                            image={lesson.imageUrl}
                            title={lesson.title}
                          />
                        )}
                        <CardContent>
                          <Typography variant="h6">{lesson.title}</Typography>
                          <Typography
                            variant="body1"
                            gutterBottom={true}
                            className="short-desc"
                          >
                            {lesson.description?.slice(0, 35)}
                          </Typography>
                          <Typography
                            variant="body1"
                            gutterBottom
                            className="lesson-type"
                          >
                            {lesson.type}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default SharedLessonsAccordion;
