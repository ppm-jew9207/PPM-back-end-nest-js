import React, { useState } from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
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
//import { createLesson } from '@ppm/data-access/lessons';

interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}

export const FeaturesLessonPage = (props: {
  history: History;
  match: RouteComponentProps<RouteInfo>;
}) => {
  const actionButtonText = 'Add to lesson';
  const accordionTitle = 'Related lessons';
  const [isMenuOpen, setMenuOpen] = useState(true);
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
    createLessonHook,
  } = useLesson(props.history, props.match.params.id);

  const defaultLesson: Lesson = {
    title: '',
    description: '',
    datetime: '',
    imageUrl: '',
    resources: '',
    mentorName: '',
    connectionURL: '',
    categories: [],
  };

  const defaultMentors: Array<Mentor> = [
    {
      name: 'MMM',
      value: '123',
      _id: '1',
    },
    {
      name: 'HHH',
      value: '888',
      _id: '2',
    },
  ];

  const defaultCategories: Array<Category> = [
    {
      title: 'CCC',
      value: '321',
      _id: '2',
    },
    {
      title: 'DDD',
      value: '456',
      _id: '3',
    },
    {
      title: 'FFF',
      value: '222',
      _id: '4',
    },
    {
      title: 'EEE',
      value: '333',
      _id: '5',
    },
  ];

  const closeDrawer = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <SharedAdvertInfo
        title={title}
        description={description}
        creator={creator}
        image={image}
        categories={categories}
        getStartedButtonText={actionButtonText}
        onGetStartedClick={onAction}
        startingDate={startingDate}
      />
      <SharedAdvertDetails learnItems={learnItems} />
      <SharedLessonsAccordion
        lessons={lessons.filter(
          (lesson) => lesson._id !== props.match.params.id
        )}
        accordionTitle={accordionTitle}
      />
      <Drawer
        open={isMenuOpen}
        ModalProps={{ onBackdropClick: () => closeDrawer() }}
      >
        <SharedLessonComponent
          onSubmit={(lesson) => createLessonHook(lesson)}
          lesson={defaultLesson}
          mentors={defaultMentors}
          categories={defaultCategories}
          onCancel={closeDrawer}
        ></SharedLessonComponent>
      </Drawer>
    </div>
  );
};

export default FeaturesLessonPage;
