import React, { useEffect, useState } from 'react';
import { SharedCourseDetails } from '@ppm/shared/course-details';
import { SharedCourseInfo } from '@ppm/shared/course-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useLesson } from '@ppm/hooks/use-lesson';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import {
  Category,
  Lesson,
  Mentor,
  SharedLessonComponent,
} from '@ppm/shared/lesson-component';
import './features-lesson-page.scss';
import { useCourses } from '@ppm/hooks/use-courses';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}
const stateSelector = createStructuredSelector({
  profile: userProfileSelectors.selectUserProfile(),
});

export const FeaturesLessonPage = (props: {
  history: History;
  match: RouteComponentProps<RouteInfo>;
}) => {
  const actionButtonText = 'Add to lesson';
  const accordionTitle = 'Related lessons';
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNewLesson, setNewLesson] = useState(true);
  const {
    title,
    description,
    creator,
    image,
    categories,
    onAction,
    learnItems,
    lessons,
    startingDate,
    allCategoriesList,
    allLearnItemsList,
    allMentorsList,
    createNewLesson,
    editLesson,
    allLessonsList,
    loading,
  } = useLesson(props.history, props.match.params.id);
  const dispatch = useDispatch();
  const { profile } = useSelector(stateSelector);

  const defaultLesson: Lesson = {
    title: '',
    description: '',
    datetime: '',
    imageUrl: '',
    resources: '',
    mentorName: '',
    connectionUrl: '',
    categories: [],
    _id: '',
  };

  useEffect(() => {
    if (!loading && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [lessons]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
  }, []);

  const closeDrawer = () => {
    setMenuOpen(false);
  };

  const openDrawer = () => {
    setNewLesson(false);
    setMenuOpen(true);
  };

  const checkIsEditable = () => {
    return !!allLessonsList.filter(
      (lesson) =>
        lesson._id === props.match.params.id &&
        lesson.creator._id === profile?._id
    ).length;
  };

  return (
    <div>
      <SharedCourseInfo
        title={title}
        description={description}
        creator={creator}
        image={image}
        categories={categories}
        getStartedButtonText={actionButtonText}
        onGetStartedClick={onAction}
        startingDate={startingDate}
      />
      <SharedCourseDetails learnItems={learnItems} />
      <SharedLessonsAccordion
        lessons={lessons.filter(
          (lesson) => lesson._id !== props.match.params.id
        )}
        accordionTitle={accordionTitle}
        lessonsDescription={
          allLessonsList.find(({ _id }) => _id === props.match.params.id)?.title
        }
        onClick={openDrawer}
        isEditable={checkIsEditable()}
      />
      <Drawer
        open={isMenuOpen}
        ModalProps={{ onBackdropClick: () => closeDrawer() }}
      >
        <SharedLessonComponent
          onSubmit={
            isNewLesson
              ? (lesson) => createNewLesson(lesson)
              : (lesson) => editLesson(lesson)
          }
          lesson={
            isNewLesson
              ? defaultLesson
              : allLessonsList.find(({ _id }) => _id === props.match.params.id)
          }
          mentors={allMentorsList}
          categories={allCategoriesList}
          onCancel={closeDrawer}
        ></SharedLessonComponent>
      </Drawer>
    </div>
  );
};

export default FeaturesLessonPage;
