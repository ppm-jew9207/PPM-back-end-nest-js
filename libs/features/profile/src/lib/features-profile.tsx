import React, { useState, useEffect } from 'react';
import {
  SharedUserProfileCard,
  SharedUserProfileCardProps,
} from '@ppm/shared/user-profile-card';
import { Profile, SharedProfileForm, Category } from '@ppm/shared/profile-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Drawer,
  IconButton,
  Grid,
  CircularProgress,
} from '@material-ui/core';
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
import { likesActions } from '@ppm/data-access/likes';
import { LikeEnum, LikeType } from 'libs/data-access/likes/src/lib/types';
import {
  countriesApiActions,
  countriesApiSelectors,
} from '@ppm/data-access/countries-api';
import { SharedCourseCard } from '@ppm/shared/course-card';
import { SharedCourseList } from '@ppm/shared/course-list';
import {
  CourseData,
  SharedCreateCourseForm,
} from '@ppm/shared/create-course-form';
import { Close as CloseIcon } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ListAltIcon from '@material-ui/icons/ListAlt';
import FilterListIcon from '@material-ui/icons/FilterList';
import Crop32Icon from '@material-ui/icons/Crop32';

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
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [isAddCourseDialogOpen, setIsAddCourseDialogOpen] = useState(false);
  const [courseElement, setCourseElement] = React.useState('list');

  const handleCourseCardChange = (event, newCourseElement) => {
    if (newCourseElement !== null) {
      setCourseElement(newCourseElement);
    }
  };

  const handleClose = () => {
    setIsProfileDialogOpen(false);
    setIsAddCourseDialogOpen(false);
  };

  const openProfileDialog = () => {
    setIsProfileDialogOpen(true);
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
    openProfileDialog,
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
        openProfileDialog: openProfileDialog,
      });
    }
  }, [profile]);

  const addCourse = (data: CourseData) => {
    setIsAddCourseDialogOpen(false);
    dispatch(coursesActions.addCourse(data));
  };

  return (
    <div className="features-profile">
      <Grid container spacing={2} className="profile-container">
        <Grid item md={3} className="profile-card">
          <SharedUserProfileCard
            {...data}
            openProfileDialog={openProfileDialog}
          />
        </Grid>

        <Grid item md={9} container>
          <Grid item md container direction="row">
            <Grid item md={6} className="add-course">
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => setIsAddCourseDialogOpen(true)}
              >
                Add Course
              </Button>
            </Grid>
            <Grid item md={6} className="courses-toggle">
              <Grid container item md justify="flex-end">
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
              </Grid>
            </Grid>
            <Grid item md={12}>
              {loading && <CircularProgress />}
              {!coursesState && (
                <div className="no-items">No courses added...</div>
              )}
              {!!coursesState?.length &&
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className="content">
        <Dialog
          maxWidth="lg"
          open={isAddCourseDialogOpen}
          onClose={handleClose}
        >
          <SharedCreateCourseForm
            onSubmit={addCourse}
            categories={categories}
            lessons={lessons}
            onCancel={handleClose}
          />
        </Dialog>

        <Dialog open={isProfileDialogOpen} onClose={handleClose} maxWidth="lg">
          <DialogContent>
            <SharedProfileForm
              onCancel={handleClose}
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
                setIsProfileDialogOpen(false);

                dispatch(userProfileActions.update(profileData));
              }}
              onAddCategory={(categoryData: Category) => {
                dispatch(categoriesActions.create(categoryData));
                dispatch(categoriesActions.getAll());
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default FeaturesProfile;
