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
import { Link } from 'react-router-dom';

import './shared-lessons-accordion.scss';
import { Button } from '@material-ui/core';

interface Lesson {
  _id: string;
  title: string;
  authorName: string;
  image: string;
}

export interface SharedLessonsAccordionProps {
  onClick?: () => void;
  lessonsDescription?: string;
  lessons: Lesson[];
  accordionTitle: string;
  showAddButton: true;
}

export const SharedLessonsAccordion = (props: SharedLessonsAccordionProps) => {
  const onClick = () => {
    props.onClick();
  };

  const showButton = props.showAddButton || false;

  return (
    <Container fixed>
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
            <Typography className="lessons-description">
              {props.lessonsDescription}
            </Typography>
          </div>
          <div>
            <Grid container spacing={2}>
              {props.lessons.map((lesson, i) => (
                <Grid key={i} item xs={3}>
                  <div>
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
                          <a
                            href={`/lessons/${lesson._id}`}
                            className="lesson-link"
                          >
                            <Typography variant="body2" gutterBottom>
                              Edit
                            </Typography>
                          </a>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                </Grid>
              ))}
              <div>
                {showButton && (
                  <Button
                    className="margin-example"
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={onClick}
                  >
                    Add Lesson
                  </Button>
                )}
              </div>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default SharedLessonsAccordion;
