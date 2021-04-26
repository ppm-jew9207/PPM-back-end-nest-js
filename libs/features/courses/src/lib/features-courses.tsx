import React, { useEffect, useState } from 'react';
import { SharedCourseCard } from '@ppm/shared/course-card';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';
import { likesActions } from '@ppm/data-access/likes';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
// import { likesActions, likesSelectors } from '@ppm/data-access/likes';
import './features-courses.scss';
import { LikeEnum } from 'libs/data-access/likes/src/lib/types';

const stateSelector = createStructuredSelector({
  courses: coursesSelectors.selectCourses(),
  loading: coursesSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
});

export const FeaturesCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading } = useSelector(stateSelector);
  const [coursesState, setCoursesState] = useState([]);
  const { profile } = useSelector(stateSelector);

  const saveClick = (payload: any) => {
    const data = { callback: 'getAll', ...payload };
    dispatch(coursesActions.smallUpdate(data));
  };

  const likeClick = (courseId: string, type: string) => {
    dispatch(likesActions.create({ course: courseId, type: type }));
    const clickedCourse = coursesState.find((item) => item._id === courseId);
    const foundItem = clickedCourse.likesList.findIndex(
      (item) => item.type === type && item.user === profile._id
    );
    if (foundItem !== -1) {
      clickedCourse.likesList.splice(foundItem, 1);
    } else {
      clickedCourse.likesList.push({
        course: courseId,
        type: type,
        user: profile._id,
      });
    }
    setCoursesState([...courses]);
  };

  useEffect(() => {
    setCoursesState(courses);
  }, [courses]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(coursesActions.getAll());
  }, []);

  if (loading) return <CircularProgress />;

  if (!coursesState) return <div className="no-items">No courses added...</div>;
  return (
    <div className="course-cards">
      {coursesState.length &&
        coursesState.map((course, index) => (
          <div key={course._id}>
            <SharedCourseCard
              id={course._id}
              title={course.title}
              author={{
                _id: course.creator._id,
                firstName: course.creator.name,
                lastName: '',
                img: course.creator.imageUrl,
              }}
              createAt={course.createdAt}
              description={course.description}
              like={
                course.likesList
                  ? course.likesList.filter(
                      (like: any) => like.type === LikeEnum.Like
                    ).length
                  : 0
              }
              shared={
                course.likesList
                  ? course.likesList.filter(
                      (like: any) => like.type === LikeEnum.Share
                    ).length
                  : 0
              }
              imgUrl={course.imageUrl}
              onSaveClick={saveClick}
              editable={profile?._id === course.creator._id}
              onLikeClick={() => likeClick(course._id, LikeEnum.Like)}
              onSharedClick={() => likeClick(course._id, LikeEnum.Share)}
            />
          </div>
        ))}
    </div>
  );
};

export default FeaturesCourses;
