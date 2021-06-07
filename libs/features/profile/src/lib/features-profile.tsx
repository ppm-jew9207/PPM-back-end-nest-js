import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { Profile, SharedProfileForm, Category } from '@ppm/shared/profile-form';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, IconButton } from '@material-ui/core';
import { createStructuredSelector } from 'reselect';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import './features-profile.scss';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';
import {
  categoriesActions,
  categoriesSelectors,
} from '@ppm/data-access/categories';
import { lessonsActions, lessonsSelectors } from '@ppm/data-access/lessons';
import { LikeEnum, likesActions } from '@ppm/data-access/likes';
import {
  countriesApiActions,
  countriesApiSelectors,
} from '@ppm/data-access/countries-api';
import { SharedCourseCard } from '@ppm/shared/course-card';
import {
  CourseData,
  SharedCreateCourseForm,
} from '@ppm/shared/create-course-form';

import { Close as CloseIcon } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const stateSelector = createStructuredSelector({
  profile: userProfileSelectors.selectUserProfile(),
  loading: userProfileSelectors.selectLoading(),
  courses: coursesSelectors.selectCourses(),
  categories: categoriesSelectors.selectCategories(),
  countries: countriesApiSelectors.selectCountries(),
  states: countriesApiSelectors.selectStates(),
  cities: countriesApiSelectors.selectCities(),
  lessons: lessonsSelectors.selectLessons(),
});

export const FeaturesProfile = (props) => {
  const [coursesState, setCoursesState] = useState([]);
  const dispatch = useDispatch();
  const {
    profile,
    loading,
    courses,
    categories,
    countries,
    states,
    cities,
    lessons,
  } = useSelector(stateSelector);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [addDrawer, setAddDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  const saveClick = (payload: any) => {
    const data = { callback: 'getAllByAuthor', ...payload };
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
    dispatch(coursesActions.getAllByAuthor());
    dispatch(userProfileActions.getUserProfile());
    dispatch(categoriesActions.getAll());
    dispatch(countriesApiActions.getCountries());
    dispatch(lessonsActions.getAll());
  }, []);

  const defaultData = {
    mentorImage: '',
    fullName: '',
    aboutMentor: '',
    mentorLocation: '',
    socialLinks: [],
    toggleDrawer,
  };

  const [data, setData] = useState<SharedUserProfileCardProps>(defaultData);

  useEffect(() => {
    if (profile) {
      setData({
        mentorImage: profile.photo,
        fullName: profile.firstName + ' ' + profile.lastName,
        aboutMentor: profile.description,
        mentorLocation: profile.city,
        socialLinks: profile.socialLinks,
        toggleDrawer: toggleDrawer,
      });
    }
  }, [profile]);

  const addCourse = (data: CourseData) => {
    setAddDrawer(false);
    dispatch(coursesActions.addCourse(data));
  };

  return (
    <div className="features-profile">
      <div className="profile-card-container">
        <SharedUserProfileCard {...data} toggleDrawer={toggleDrawer} />
      </div>
      <div className="content">
        <div className="course-button">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setAddDrawer(true)}
          >
            Add Course
          </Button>
        </div>

        <Drawer
          anchor="right"
          open={addDrawer}
          onClose={() => setAddDrawer(false)}
        >
          <SharedCreateCourseForm
            onSubmit={addCourse}
            onCancel={() => {}}
            categories={categories}
            lessons={lessons}
            toggleAddDrawer={() => setAddDrawer(false)}
          />
        </Drawer>

        {coursesState.map((course, i) => (
          <SharedCourseCard
            id={course._id}
            key={course._id}
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
            editable={profile?._id === course?.creator?._id}
            onLikeClick={() => likeClick(course._id, LikeEnum.Like)}
            onSharedClick={() => likeClick(course._id, LikeEnum.Share)}
          />
        ))}
      </div>

      <Drawer
        open={isMenuOpen}
        ModalProps={{ onBackdropClick: () => toggleDrawer(false) }}
        anchor="right"
      >
        <div className="shared-left-side-menu">
          <IconButton
            onClick={() => toggleDrawer(false)}
            aria-label="close drawer"
          >
            <CloseIcon />
          </IconButton>
          <SharedProfileForm
            profile={profile}
            categories={categories}
            countries={countries}
            cities={cities}
            states={states}
            onSelectCountry={(countryName: string) =>
              dispatch(countriesApiActions.getStates(countryName))
            }
            onSelectState={(stateName: string) =>
              dispatch(countriesApiActions.getCities(stateName))
            }
            onSubmit={(profileData: Profile) => {
              setMenuOpen(false);
              dispatch(userProfileActions.update(profileData));
            }}
            onAddCategory={(categoryData: Category) => {
              dispatch(categoriesActions.create(categoryData));
              dispatch(categoriesActions.getAll());
            }}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default FeaturesProfile;
