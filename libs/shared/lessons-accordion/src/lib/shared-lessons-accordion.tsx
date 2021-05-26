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

interface Lesson {
  _id: string;
  title: string;
  authorName: string;
  image: string;
}

export interface SharedLessonsAccordionProps {
  onClick?: () => void;
  isEditable?: boolean;
  lessonsDescription?: string;
  lessons: Lesson[];
  accordionTitle: string;
  showAddButton?: boolean;
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
                  <Card>
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          variant="body1"
                          gutterBottom
                          color="primary"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            fontSize: '20px',
                        }}
                        >
                          <AddCircleIcon fontSize="large"	/>
                          Add Lesson
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )}
              {props.lessons.map((lesson, i) => (
                <Grid key={i} item xs={3}>
                  <a href={`/lessons/${lesson._id}`} className="lesson-link">
                    <Card>
                      <CardActionArea>
                        {lesson.image && (
                          <CardMedia
                            className="lesson-image"
                            id={lesson._id}
                            image={lesson.image}
                            title={lesson.title}
                          />
                        )}
                        <CardContent>
                          <Typography variant="body1" gutterBottom>
                            {lesson.title}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {lesson.authorName}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </a>
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
