import { createStructuredSelector } from 'reselect';
import { lessonsActions, lessonsSelectors } from '@ppm/data-access/lessons';
import { categoriesActions, categoriesSelectors} from '@ppm/data-access/categories';
import { learnItemsActions, learnItemsSelectors} from '@ppm/data-access/learn-items';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const stateSelector = createStructuredSelector({
  lessons: lessonsSelectors.selectLessons(),
  lesson: lessonsSelectors.selectLesson(),
  loading: lessonsSelectors.selectLoading(),
  categoriesList: categoriesSelectors.selectCategories(),
  learnItemsList: learnItemsSelectors.selectLearnItems()
});

export function useLesson(history: History, id: string) {
  const dispatch = useDispatch();
  const { lessons, lesson, loading, categoriesList, learnItemsList } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(lessonsActions.getById(id));
    dispatch(lessonsActions.getAll());
    dispatch(categoriesActions.getAll());
    dispatch(learnItemsActions.getAll());
  }, []);

  // TODO: Add functionality
  const onAction = () => {
    alert('paspaudei');
  };

  const [ description, setDescription ] = useState('');
  const [ creator, setCreator ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ categories, setCategories ] = useState([]);
  const [ allCategoriesList, setAllCategoriesList ] = useState([]);
  const [ allLearnItemsList, setAllLearnItemsList ] = useState([]);
  const [ lessonsData, setLessonsData ] = useState([]);
  const [ startingDate, setStartingDate ] = useState('');
  const [ learnItems, setLearnItems ] = useState([]); 

  useEffect(() => {
    if (lesson) {
      setDescription(lesson.description);
      setCreator(lesson.creator.name);
      setTitle(lesson.title);
      setImage(lesson.imageUrl);
      setCategories(lesson.categories);
      setStartingDate(lesson.datetime || '');
      setLearnItems(lesson.learnItems);
    }
  }, [lesson]);

  useEffect(() => {
    if (lessons && lessons.length) {
      let tempArray = [];
      for (let i = 0; i < 6; i++) {
        if (lessons[i]) {
          tempArray.push({ 
            _id: lessons[i]._id,
            title: lessons[i].title, 
            authorName: lessons[i].creator.name, 
            image: lessons[i].imageUrl 
          });
        }
      }
      setLessonsData(tempArray);
    }
  }, [lessons]);

  useEffect(() => {
    if (categoriesList) {
      setAllCategoriesList(categoriesList);
    }
  }, [categoriesList]);

  useEffect(() => {
    if (learnItemsList) {
      setAllLearnItemsList(learnItemsList);
    }
  }, [learnItemsList]);

  return { title, description, creator, image, categories, onAction, learnItems, lessons: lessonsData, startingDate, allCategoriesList, allLearnItemsList };
}