import React from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useLesson } from '@ppm/hooks/use-lesson';
import { RouteComponentProps, RouteProps } from 'react-router-dom';

import './features-lesson-page.scss';

interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}

/* eslint-disable-next-line */
export interface FeaturesLessonPageProps {}

export const FeaturesLessonPage = (props: {history: History, match: RouteComponentProps<RouteInfo>}) => {
  const lessonsDescription = 'Are you ready to find out what all the hype is about with ReactJS? These ReactJS for beginners tutorials will bring you completely up to speed on the hottest JavaScript framework used on the web today.';
  const actionButtonText = 'Add to lesson';
  const accordionTitle = 'Related lessons';

  const {title, description, creator, image, categories, onAction, learnItems,  lessons,  startingDate } = useLesson(props.history, props.match.params.id);

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
      <SharedAdvertDetails
        learnItems={learnItems}
      />
      <SharedLessonsAccordion
        lessonsDescription={lessonsDescription}
        lessons={lessons}
        accordionTitle={accordionTitle}
      />
    </div>
  );
};

export default FeaturesLessonPage;
