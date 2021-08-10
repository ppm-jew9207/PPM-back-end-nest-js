import React, { useEffect, useState } from 'react';
import { SharedCourseCard } from '@ppm/shared/course-card';
import { SharedFilter } from '@ppm/shared/filter';
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
import { useLocation } from 'react-router-dom';

const stateSelector = createStructuredSelector({
  courses: coursesSelectors.selectCourses(),
  loading: coursesSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
});
const filter = [
  {
    title: 'Ratings',
    type: 'radio',
    details: [
      { label: '5 star', name: 'html' },
      { label: '4 start', name: 'css' },
      { label: '3 start', name: 'webdevelopment' },
      { label: '2 start', name: 'react' },
      { label: '1 start', name: 'javascript' },
    ],
  },
  {
    title: 'Topic',
    type: 'checkbox',
    details: [
      { label: 'HTML', name: 'html' },
      { label: 'CSS', name: 'css' },
      { label: 'Web development', name: 'webdevelopment' },
      { label: 'React.js', name: 'react' },
      { label: 'Javascript', name: 'javascript' },
    ],
  },
  {
    title: 'Subcategory',
    type: 'checkbox',
    details: [
      { label: 'Web development', name: 'text1' },
      { label: 'Programming Languages', name: 'text1' },
      { label: 'Game development', name: 'text1' },
      { label: 'Web Design', name: 'text1' },
      { label: 'Software Testing', name: 'text1' },
    ],
  },
  {
    title: 'Level',
    type: 'checkbox',
    details: [
      { label: 'All Levels', name: 'text1' },
      { label: 'Beginner', name: 'text1' },
      { label: 'Intermediate', name: 'text1' },
      { label: 'Expert', name: 'text1' },
    ],
  },
  {
    title: 'Video Duration',
    type: 'checkbox',
    details: [
      { label: '0-1 hour', name: 'text1' },
      { label: '1-3 hours', name: 'text1' },
      { label: '3-6 hours', name: 'text1' },
      { label: '6-10 hours', name: 'text1' },
      { label: '10+ hours', name: 'text1' },
    ],
  },
];
export const FeaturesCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, profile } = useSelector(stateSelector);
  const [coursesState, setCoursesState] = useState([]);
  const [filtersList, setFiltersList] = useState([]);

  const searchQuery = new URLSearchParams(useLocation().search).get('q');

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
    setFiltersList(filter);
  }, [courses]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(coursesActions.getAll(searchQuery));
  }, []);

  if (loading) return <CircularProgress />;

  if (!coursesState) return <div className="no-items">No courses added...</div>;
  return (
    <div className="flex-card">
      <div className="filter-sidebar">
        {filtersList.length &&
          filtersList.map((filterList, index) => (
            <SharedFilter
              key={index}
              title={filterList.title}
              type={filterList.type}
              details={filterList.details}
            />
          ))}
      </div>

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
    </div>
  );
};

export default FeaturesCourses;
