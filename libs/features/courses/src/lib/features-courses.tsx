import React, { useEffect, useState } from 'react';
import { SharedCourseCard } from '@ppm/shared/course-card';
import { SharedFilter, FilterFormData } from '@ppm/shared/filter';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStructuredSelector } from 'reselect';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';
import { likesActions } from '@ppm/data-access/likes';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import './features-courses.scss';
import { LikeEnum } from 'libs/data-access/likes/src/lib/types';
import { useLocation } from 'react-router-dom';
import FilterListIcon from '@material-ui/icons/FilterList';
import {
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';

const stateSelector = createStructuredSelector({
  courses: coursesSelectors.selectCourses(),
  loading: coursesSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
});

export const FeaturesCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, profile } = useSelector(stateSelector);
  const [coursesState, setCoursesState] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(true);

  const ToggleFilter = () => {
    setIsFilterActive(!isFilterActive);
  };

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
  }, [courses]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(coursesActions.getAll(searchQuery));
  }, []);

  const filterChanges = (queries: FilterFormData) => {
    dispatch(coursesActions.filterCourses(queries));
  };

  return (
    <>
      {loading && <CircularProgress />}
      {!coursesState && <div className="no-items">No courses added...</div>}

      <Grid container spacing={4} className="courses-container">
        <Grid item xs={6} md={isFilterActive === true ? 3 : 1}>
          <div className="fixedd">
            <Button
              className="filter-button"
              onClick={ToggleFilter}
              disableRipple={true}
            >
              <FilterListIcon />
              <Typography>Filter</Typography>
            </Button>
            <div
              className={`filter-sidebar ${
                isFilterActive ? 'filter-open' : 'filter-closed'
              }`}
            >
              <SharedFilter onSubmit={(queries) => filterChanges(queries)} />
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          md={isFilterActive === true ? 9 : 11}
          className="course-cards"
        >
          <div>
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
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesCourses;
