import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SharedCourseCard } from '@ppm/shared/course-card';
import { SharedCourseList } from '@ppm/shared/course-list';
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
import { LikeEnum, LikeType } from 'libs/data-access/likes/src/lib/types';
import { useLocation } from 'react-router-dom';
import { Button, Typography, Grid } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FilterListIcon from '@material-ui/icons/FilterList';
import Crop32Icon from '@material-ui/icons/Crop32';

export interface QueryData {
  page?: number;
  search?: string;
  rating?: string;
  topic?: string[];
  categories?: string[];
}

const stateSelector = createStructuredSelector({
  courses: coursesSelectors.selectCourses(),
  loading: coursesSelectors.selectLoading(),
  profile: userProfileSelectors.selectUserProfile(),
  count: coursesSelectors.selectCoursesCount(),
});

export const FeaturesCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, profile, count } = useSelector(stateSelector);
  const [coursesState, setCoursesState] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(true);
  const [queriesState, setQueriesState] = useState({});
  const [courseElement, setCourseElement] = React.useState('list');
  const [currentPage, setCurrentPage] = useState(1);

  const handleCourseCardChange = (event, newCourseElement) => {
    if (newCourseElement !== null) {
      setCourseElement(newCourseElement);
    }
  };

  const ToggleFilter = () => {
    setIsFilterActive(!isFilterActive);
  };

  const fetchMoreData = () => {
    setCurrentPage(currentPage + 1);
  };

  const searchQuery = {
    search: new URLSearchParams(useLocation().search).get('q') || '',
  };

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
    setQueriesState({ ...queriesState, ...searchQuery, page: currentPage + 1 });
    dispatch(
      coursesActions.loadMore({
        ...queriesState,
        ...searchQuery,
        page: currentPage,
      })
    );
  }, [currentPage]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
    dispatch(coursesActions.getAll(searchQuery));
    dispatch(coursesActions.loadAllCount(searchQuery));
  }, []);

  const filterChanges = (queries: QueryData) => {
    queries = { ...queries, ...searchQuery };
    setQueriesState(queries);
    dispatch(coursesActions.getAll(queries));
    dispatch(coursesActions.loadAllCount(queries));
  };
  return (
    <>
      {loading && <CircularProgress />}
      {!coursesState && <div className="no-items">No courses added...</div>}

      <Grid container spacing={1} className="courses-container">
        <Grid item md={isFilterActive === true ? 3 : 2}>
          <div className="fixed">
            <Button
              className="filter-button"
              onClick={ToggleFilter}
              disableRipple={true}
            >
              <FilterListIcon />
              <Typography>Filter</Typography>
            </Button>
            <ToggleButtonGroup
              className="toggle-group"
              value={courseElement}
              exclusive
              onChange={handleCourseCardChange}
              aria-label="text alignment"
            >
              <ToggleButton value="list" aria-label="list">
                <ListAltIcon />
              </ToggleButton>
              <ToggleButton value="card" aria-label="card">
                <Crop32Icon />
              </ToggleButton>
            </ToggleButtonGroup>
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
          md={isFilterActive === true ? 9 : 10}
          className="course-cards"
        >
          <div>
            <InfiniteScroll
              dataLength={coursesState?.length}
              hasMore={count > coursesState?.length}
              loader={<CircularProgress />}
              next={fetchMoreData}
            >
              {coursesState?.length &&
                coursesState.map((course, index) => (
                  <div key={course._id}>
                    {courseElement === 'list' && (
                      <SharedCourseList
                        categories={course.categories}
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
                                (like: LikeType) => like.type === LikeEnum.Like
                              ).length
                            : 0
                        }
                        shared={
                          course.likesList
                            ? course.likesList.filter(
                                (like: LikeType) => like.type === LikeEnum.Share
                              ).length
                            : 0
                        }
                        imgUrl={course.imageUrl}
                        onSaveClick={saveClick}
                        editable={profile?._id === course.creator._id}
                        onLikeClick={() => likeClick(course._id, LikeEnum.Like)}
                        onSharedClick={() =>
                          likeClick(course._id, LikeEnum.Share)
                        }
                      />
                    )}
                    {courseElement === 'card' && (
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
                                (like: LikeType) => like.type === LikeEnum.Like
                              ).length
                            : 0
                        }
                        shared={
                          course.likesList
                            ? course.likesList.filter(
                                (like: LikeType) => like.type === LikeEnum.Share
                              ).length
                            : 0
                        }
                        imgUrl={course.imageUrl}
                        onSaveClick={saveClick}
                        editable={profile?._id === course.creator._id}
                        onLikeClick={() => likeClick(course._id, LikeEnum.Like)}
                        onSharedClick={() =>
                          likeClick(course._id, LikeEnum.Share)
                        }
                      />
                    )}
                  </div>
                ))}
            </InfiniteScroll>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturesCourses;
