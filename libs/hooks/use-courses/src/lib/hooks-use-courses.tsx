import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';

const stateSelector = createStructuredSelector({
  course: coursesSelectors.selectCourse(),
  loading: coursesSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
});

export function useCourses(courseId: string) {
  const dispatch = useDispatch();
  const { course, loading, profile } = useSelector(stateSelector);

  const getCourseById = (id: string) => {
    dispatch(coursesActions.getById(id));
  };

  useEffect(() => {
    getCourseById(courseId);
  }, []);

  const onGetStartedClick = () => {
    dispatch(coursesActions.addStudentToCourse(courseId));
    dispatch(userProfileActions.getUserProfile());
    dispatch(userProfileActions.update({ ...profile, courseId: courseId }));
  };

  return { getCourseById, course, loading, onGetStartedClick };
}
