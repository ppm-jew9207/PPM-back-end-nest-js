import React, {useEffect} from 'react';
import { SharedAdvertDetails } from '@ppm/shared/advert-details';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { advertsActions, advertsSelectors } from '@ppm/data-access/adverts';
import CircularProgress from '@material-ui/core/CircularProgress';
import './features-advert-page.scss';

const stateSelector = createStructuredSelector({
  advert: advertsSelectors.selectAdvert(),
  loading: advertsSelectors.selectLoading(),
});

let onGetStartedClick = () => {
  alert('paspaudei');
};

export const FeaturesAdvertPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { advert, loading } = useSelector(stateSelector);
  console.log(advert);

  useEffect(() => {
    dispatch(advertsActions.getById(id));
  }, [dispatch]);
  if (loading || !advert) return <CircularProgress />;

  return (
    <div>
      <SharedAdvertInfo
        title={"hardcode"}
        description={advert.description}
        creator={advert.creator.name}
        image={advert.imageUrl}
        categories={[{title: advert.category, value: advert.category}]}
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
};

export default FeaturesAdvertPage;
