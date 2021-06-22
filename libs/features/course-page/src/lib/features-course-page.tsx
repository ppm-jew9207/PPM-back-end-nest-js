import React, { useEffect, useState } from 'react';
import { SharedCourseDetails } from '@ppm/shared/course-details';
import { SharedCourseInfo } from '@ppm/shared/course-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCourses } from '@ppm/hooks/use-courses';
import {
  Category,
  Lesson,
  Mentor,
  SharedLessonComponent,
} from '@ppm/shared/lesson-component';
import { useLesson } from '@ppm/hooks/use-lesson';
import { useSelector, useDispatch } from 'react-redux';
import './features-course-page.scss';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Drawer,
} from '@material-ui/core';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import {
  userProfileActions,
  userProfileSelectors,
} from '@ppm/data-access/user-profile';
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

export const FeaturesCoursePage = (props: {
  history: History;
  match: RouteComponentProps<RouteInfo>;
}) => {
  const actionButtonText = 'Add to lesson';
  const accordionTitle = 'Related lessons';
  const [isAddLessonDialogOpen, setIsAddLessonDialogOpen] = useState(false);
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
  } = useLesson(props.history, props.match?.params?.id);

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

  const { id } = useParams();
  const { profile } = useSelector(stateSelector);
  const { course, loading, onGetStartedClick } = useCourses(id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && isAddLessonDialogOpen) {
      setIsAddLessonDialogOpen(false);
    }
  }, [lessons]);

  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
  }, []);

  const handleClose = () => {
    setIsAddLessonDialogOpen(false);
  };

  const openAddLessonDialog = () => {
    setIsAddLessonDialogOpen(true);
  };

  const showAddLessonBtn = () => {
    return profile?._id === course.creator._id;
  };

  if (loading) return <CircularProgress />;

  if (course) {
    return (
      <div className="lessons">
        <SharedCourseInfo
          title={course.title}
          description={course.description}
          creator={course.creator.name}
          image={course.imageUrl}
          categories={[
            {
              title: 'Category A',
              value: 'category-a',
              _id: 'as3dg432af',
              checked: false,
            },
            {
              title: 'Category B',
              value: 'category-b',
              _id: 'as33dg4432af',
              checked: false,
            },
          ]}
          onGetStartedClick={onGetStartedClick}
          getStartedButtonText="Get Started"
        />
        <SharedCourseDetails
          learnItems={course.learnItems}
          preRequisites={course.preRequisites}
        />
        <SharedLessonsAccordion
          lessonsDescription={course.lessonsDescription}
          lessons={course.lessonsList}
          accordionTitle="Lessons"
          onClick={openAddLessonDialog}
          showAddButton={showAddLessonBtn()}
        />
        <Dialog open={isAddLessonDialogOpen} onClose={handleClose}>
          <DialogContent>
            <SharedLessonComponent
              onSubmit={(lesson) => createNewLesson(lesson)}
              lesson={defaultLesson}
              mentors={allMentorsList}
              categories={allCategoriesList}
              courseId={props.match?.params?.id}
              onCancel={handleClose}
            ></SharedLessonComponent>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else {
    return <div>Data is being loaded or failed to load.</div>;
  }
};

export default FeaturesCoursePage;
