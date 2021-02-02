import React from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAdverts } from '@ppm/hooks/use-adverts';

import './features-advert-page.scss';

export const FeaturesAdvertPage = () => {
  const { id } = useParams();

  const { advert, loading, onGetStartedClick } = useAdverts(id);

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
        />
      </div>
    );
  } else {
    return <div>Data is being loaded or failed to load.</div>;
  }
};

export default FeaturesAdvertPage;
