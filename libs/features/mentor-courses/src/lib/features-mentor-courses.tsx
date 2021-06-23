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
import { SharedCourseDetails } from '@ppm/shared/course-details';
import { SharedCourseInfo } from '@ppm/shared/course-info';
import { mentorsActions, mentorsSelectors } from '@ppm/data-access/mentors';
// import { likesActions, likesSelectors } from '@ppm/data-access/likes';
import './features-mentor-courses.scss';
import { LikeEnum } from 'libs/data-access/likes/src/lib/types';
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
  const saveClick = (payload: any) => {
    const data = { callback: 'getAll', ...payload };
    dispatch(coursesActions.smallUpdate(data));
  };

  const likeClick = (courseId: string, type: string) => {
    dispatch(likesActions.create({ course: courseId, type: type }));
    const clickedCourse = coursesState.find((item) => item._id === courseId);
    const foundItem = clickedCourse.likesList.some(
      (item) => item.type === type && item.user === profile._id
    );
    if (foundItem) {
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
        creator={`${loadedProfile.firstName} ${loadedProfile.lastName}`}
        image={loadedProfile.photo}
        categories={categories}
        onGetStartedClick={() => alert('get started')}
        getStartedButtonText="Get Started"
      />
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

export default FeaturesMentorCourses;
