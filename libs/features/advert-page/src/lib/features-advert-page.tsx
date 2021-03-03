import React, { useState } from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAdverts } from '@ppm/hooks/use-adverts';
import {
  Category,
  Lesson,
  Mentor,
  SharedLessonComponent,
} from '@ppm/shared/lesson-component';
import { useLesson } from '@ppm/hooks/use-lesson';

import './features-advert-page.scss';
import { Drawer } from '@material-ui/core';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}

export const FeaturesAdvertPage = (props: {
  history: History;
  match: RouteComponentProps<RouteInfo>;
}) => {
  const actionButtonText = 'Add to lesson';
  const accordionTitle = 'Related lessons';
  const [isMenuOpen, setMenuOpen] = useState(false);
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
  } = useLesson(props.history, props?.match?.params?.id);

  const defaultLesson: Lesson = {
    title: '',
    description: '',
    datetime: '',
    imageUrl: '',
    resources: '',
    mentorName: '',
    connectionURL: '',
    categories: [],
    _id: '',
  };

  const { id } = useParams();

  const { advert, loading, onGetStartedClick } = useAdverts(id);

  const closeDrawer = () => {
    setMenuOpen(false);
  };

  const openDrawer = () => {
    setMenuOpen(true);
  };

  if (loading) return <CircularProgress />;

  if (advert) {
    return (
      <div className="lessons">
        <SharedAdvertInfo
          title={advert.title}
          description={advert.description}
          creator={advert.creator.name}
          image={advert.imageUrl}
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
        <SharedAdvertDetails
          learnItems={advert.learnItems}
          preRequisites={advert.preRequisites}
        />
        <SharedLessonsAccordion
          lessonsDescription={advert.lessonsDescription}
          lessons={advert.lessonsList}
          accordionTitle="Lessons"
          onClick={openDrawer}
          showAddButton={true}
        />
        <Drawer
          open={isMenuOpen}
          ModalProps={{ onBackdropClick: () => closeDrawer() }}
        >
          <SharedLessonComponent
            onSubmit={(lesson) => createNewLesson(lesson)}
            lesson={defaultLesson}
            mentors={allMentorsList}
            categories={allCategoriesList}
            onCancel={closeDrawer}
          ></SharedLessonComponent>
        </Drawer>
      </div>
    );
  } else {
    return <div>Data is being loaded or failed to load.</div>;
  }
};

export default FeaturesAdvertPage;
