import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';

const stateSelector = createStructuredSelector({
  course: coursesSelectors.selectCourse(),
  loading: coursesSelectors.selectLoading(),
});

export function useCourses(courseId) {
  const dispatch = useDispatch();
  const { course, loading } = useSelector(stateSelector);

  const getCourseById = (id: string) => {
    dispatch(coursesActions.getById(id));
  };

  useEffect(() => {
    getCourseById(courseId);
  }, []);

  const onGetStartedClick = () => {
    dispatch(coursesActions.addStudentToCourse(courseId));
  };

  return { getCourseById, course, loading, onGetStartedClick };
}
