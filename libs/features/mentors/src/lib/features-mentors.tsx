import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import CircularProgress from '@material-ui/core/CircularProgress';
import { mentorsActions, mentorsSelectors } from '@ppm/data-access/mentors';
import { useSelector, useDispatch } from 'react-redux';
import { MentorCard } from '@ppm/shared/mentor-card';

import './features-mentors.scss';
import Box from '@material-ui/core/Box/Box';
import Container from '@material-ui/core/Container/Container';
import Grid from '@material-ui/core/Grid/Grid';

/* eslint-disable-next-line */
export interface FeaturesMentorsProps {}

const stateSelector = createStructuredSelector({
  mentors: mentorsSelectors.selectMentors(),
  loading: mentorsSelectors.selectLoading(),
});

export const FeaturesMentors = (props: FeaturesMentorsProps) => {
  const { mentors, loading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mentorsActions.getAll());
  }, []);

  if (loading) return <CircularProgress />;
  if (!mentors.list) return <div className="no-items">No mentors...</div>;
  if (!mentors.list.length)
    return <div className="no-items">No mentors...</div>;

  return (
    <Container maxWidth="md" className="mentors-container">
      <Grid container spacing={3}>
        {mentors.list.length &&
          mentors.list.map((mentor, index) => (
            <Grid item md={4} xs={12}>
              <MentorCard
                key={mentor._id}
                mentorImage={mentor.photo}
                fullName={`${mentor.firstName} ${mentor.lastName}`}
                aboutMentor={mentor.description}
                url={`/mentor/${mentor._id}`}
                location={mentor.city}
                socialLinks={mentor.socialLinks}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default FeaturesMentors;
