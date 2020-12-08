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

export const FeaturesLessonPage = (props: {history: History, match: RouteComponentProps<RouteInfo>}) => {
  const actionButtonText = 'Add to lesson';
  const accordionTitle = 'Related lessons';

  const {title, description, creator, image, categories, onAction, learnItems,  lessons,  startingDate, allCategoriesList, allLearnItemsList } = useLesson(props.history, props.match.params.id);

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
        allLearnItemsList={allLearnItemsList}
      />
      <SharedLessonsAccordion
        lessons={lessons.filter(lesson => lesson._id !== props.match.params.id)}
        accordionTitle={accordionTitle}
      />
    </div>
  );
};

export default FeaturesLessonPage;
