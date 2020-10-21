import React from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useLesson } from '@ppm/hooks/use-lesson';

import './features-lesson-page.scss';

/* eslint-disable-next-line */
export interface FeaturesLessonPageProps {}

export const FeaturesLessonPage = (props: {history: History}) => {
  const {title, description, creator, image, categories, onGetStartedClick, learnItems, preRequisites, lessonsDescription, lessons } = useLesson(props.history);

  return (
    <div>
      <SharedAdvertInfo
        title={title}
        description={description}
        creator={creator}
        image={image}
        categories={categories}
        onGetStartedClick={onGetStartedClick}
      />
      <SharedAdvertDetails
        learnItems={learnItems}
        preRequisites={preRequisites}
      />
      <SharedLessonsAccordion
        lessonsDescription={lessonsDescription}
        lessons={lessons}
      />
    </div>
  );
};

export default FeaturesLessonPage;
