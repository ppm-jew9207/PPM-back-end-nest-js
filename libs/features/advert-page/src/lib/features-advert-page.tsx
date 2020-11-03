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
      <div>
        <SharedAdvertInfo
          title={advert.title}
          description={advert.description}
          creator={advert.creator.name}
          image={advert.imageUrl}
          categories={[{ title: advert.category, value: advert.category }]}
          onGetStartedClick={onGetStartedClick}
        />
        <SharedAdvertDetails
          learnItems={advert.programmingLanguages}
          preRequisites={advert.preRequisites}
        />
        <SharedLessonsAccordion
          lessonsDescription={advert.lessonsDescription}
          lessons={advert.lessonsList}
        />
      </div>
    );
  } else {
    return <div>Data is being loaded or failed to load.</div>;
  }
};

export default FeaturesAdvertPage;
