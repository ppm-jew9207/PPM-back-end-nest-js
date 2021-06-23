import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import { SharedCourseInfo } from '@ppm/shared/course-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import './features-mentor-courses.scss';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}

const stateSelector = createStructuredSelector({
  courses: coursesSelectors.selectCourses(),
  loading: coursesSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
  loadedProfile: userProfileSelectors.selectOtherProfile(),
});

export const FeaturesMentorCourses = (props: {
  history: History;
  match: RouteComponentProps<RouteInfo>;
}) => {
  const dispatch = useDispatch();
  const { courses, loading, loadedProfile, profile } = useSelector(
    stateSelector
  );
  const [coursesState, setCoursesState] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    courses.forEach((course) => {
      course.image = course.imageUrl;
      course.authorName = course.creator.name;
    });
    setCoursesState(courses);
  }, [courses]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(userProfileActions.getOtherProfile(props.match?.params?.id));
    dispatch(coursesActions.getAllByAuthorId(props.match?.params?.id));
    if (loadedProfile?.categories) categoriesArray(loadedProfile.categories);
  }, []);

  useEffect(() => {
    if (loadedProfile?.categories) categoriesArray(loadedProfile.categories);
  }, [loadedProfile]);

  const categoriesArray = (categories) => {
    let tempCats = [];
    if (Array.isArray(categories)) {
      categories.forEach((category, index) => {
        tempCats.push({
          title: category,
          value: category,
          _id: index,
          checked: false,
        });
      });
    } else {
      tempCats[0] = {
        title: categories[0],
        value: categories[0],
        _id: 0,
        checked: false,
      };
    }

    setCategories(tempCats);
  };
  if (loading) return <CircularProgress />;

  if (!coursesState) return <div className="no-items">No courses added...</div>;
  if (!loadedProfile)
    return <div className="no-items">No mentor selected...</div>;

  return (
    <div className="lessons">
      <SharedCourseInfo
        title={`${loadedProfile.firstName} ${loadedProfile.lastName}`}
        description={loadedProfile.description}
        // TODO: change this to user's photo
        image="https://generative-placeholders.glitch.me/image?width=600&height=300"
        categories={categories}
        onGetStartedClick={() => alert('Contact form to be implemented')}
        getStartedButtonText="Contact Mentor"
      />
      <SharedLessonsAccordion
        isEditable={false}
        lessons={coursesState}
        accordionTitle="Courses"
        listCourses={true}
      />
    </div>
  );
};

export default FeaturesMentorCourses;
