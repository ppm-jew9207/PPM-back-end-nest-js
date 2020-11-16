import { createStructuredSelector } from 'reselect';
import { lessonsActions, lessonsSelectors } from '@ppm/data-access/lessons';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const stateSelector = createStructuredSelector({
  lessons: lessonsSelectors.selectLessons(),
  lesson: lessonsSelectors.selectLesson(),
  loading: lessonsSelectors.selectLoading(),
});

export function useLesson(history: History, id: string) {
  const dispatch = useDispatch();
  const { lessons, lesson, loading } = useSelector(stateSelector);

  useEffect(() => {
    dispatch(lessonsActions.getById(id));
    dispatch(lessonsActions.getAll());
  }, []);

  // TODO: lessons don't have learnItems fields. Will add new fields on new task.
  let learnItems = ['Javascript', 'React', 'Nx', 'NestJS'];

  // TODO: Add functionality
  const onAction = () => {
    alert('paspaudei');
  };

  const [ description, setDescription ] = useState('');
  const [ creator, setCreator ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ categories, setCategories ] = useState([]);
  const [ lessonsData, setLessonsData ] = useState([]);
  const [ startingDate, setStartingDate ] = useState('');
  // const [ learnItems, setLearnItems ] = useState([]); 

  useEffect(() => {
    if (lesson) {
      setDescription(lesson.description);
      setCreator(lesson.creator.name);
      setTitle(lesson.title);
      setImage(lesson.imageUrl);
      setCategories([{title: lesson.category, value: lesson.category}]);
      setStartingDate(lesson.datetime || '');
      // setLearnItems(lesson.learnItems);
    }
  }, [lesson]);

  useEffect(() => {
    if (lessons && lessons.length) {
      let tempArray = [];
      for (let i = 0; i < 6; i++) {
        if (lessons[i]) {
          tempArray.push({ 
            title: lessons[i].title, 
            authorName: lessons[i].creator.name, 
            image: lessons[i].imageUrl 
          });
        }
      }
      setLessonsData(tempArray);
    }
  }, [lessons]);

  return { title, description, creator, image, categories, onAction, learnItems, lessons: lessonsData, startingDate  };
}