import { createStructuredSelector } from 'reselect';
import {
  createLesson,
  lessonsActions,
  lessonsSelectors,
} from '@ppm/data-access/lessons';
import {
  categoriesActions,
  categoriesSelectors,
} from '@ppm/data-access/categories';
import {
  learnItemsActions,
  learnItemsSelectors,
} from '@ppm/data-access/learn-items';
import { mentorsSelectors } from 'libs/data-access/mentors/src';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const stateSelector = createStructuredSelector({
  lessons: lessonsSelectors.selectLessons(),
  lesson: lessonsSelectors.selectLesson(),
  loading: lessonsSelectors.selectLoading(),
  categoriesList: categoriesSelectors.selectCategories(),
  mentorsList: mentorsSelectors.selectMentors(),
  learnItemsList: learnItemsSelectors.selectLearnItems(),
});

export function useLesson(history: History, id: string) {
  const dispatch = useDispatch();
  const {
    lessons,
    lesson,
    loading,
    categoriesList,
    mentorsList,
    learnItemsList,
  } = useSelector(stateSelector);

  useEffect(() => {
    if (id) {
      dispatch(lessonsActions.getById(id));
    }
    dispatch(lessonsActions.getAll());
    dispatch(categoriesActions.getAll());
    dispatch(learnItemsActions.getAll());
  }, []);

  // TODO: Add functionality
  const onAction = () => {
    alert('paspaudei');
  };

  const [description, setDescription] = useState('');
  const [creator, setCreator] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState([]);
  const [allCategoriesList, setAllCategoriesList] = useState([]);
  const [allMentorsList, setAllMentorsList] = useState([]);
  const [allLearnItemsList, setAllLearnItemsList] = useState([]);
  const [lessonsData, setLessonsData] = useState([]);
  const [startingDate, setStartingDate] = useState('');
  const [learnItems, setLearnItems] = useState([]);

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
            image: lessons[i].imageUrl,
          });
        }
      }
      setLessonsData(tempArray);
    }
  }, [lessons]);

  const createNewLesson = (data: any) => {
    dispatch(lessonsActions.create(data));
  };

  useEffect(() => {
    if (categoriesList) {
      setAllCategoriesList(categoriesList);
    }
  }, [categoriesList]);

  useEffect(() => {
    console.log(mentorsList);
    if (mentorsList) {
      setAllMentorsList(mentorsList);
    }
  }, [mentorsList]);

  useEffect(() => {
    if (learnItemsList) {
      setAllLearnItemsList(learnItemsList);
    }
  }, [learnItemsList]);

  return {
    title,
    description,
    creator,
    image,
    categories,
    createNewLesson,
    onAction,
    learnItems,
    lessons: lessonsData,
    startingDate,
    allCategoriesList,
    allLearnItemsList,
    allMentorsList,
  };
}
