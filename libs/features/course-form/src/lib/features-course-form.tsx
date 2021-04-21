import React, { useEffect, useState } from 'react';
import { useHistory, RouteComponentProps, RouteProps } from 'react-router-dom';
import {
  SharedCreateCourseForm,
  CourseData,
  SharedCreateCourseFormProps,
} from '@ppm/shared/create-course-form';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { coursesActions, coursesSelectors } from '@ppm/data-access/courses';
import {
  categoriesSelectors,
  categoriesActions,
} from '@ppm/data-access/categories';
import './features-course-form.scss';
import { PrivateRoutesPath } from '@ppm/common/main';
import { CircularProgress } from '@material-ui/core';
interface RouteInfo extends RouteProps {
  params: {
    id: string;
  };
  path?: string | string[];
}

const stateSelector = createStructuredSelector({
  courses: coursesSelectors.selectCourses(),
  course: coursesSelectors.selectCourse(),
  loading: coursesSelectors.selectLoading(),
  categories: categoriesSelectors.selectCategories(),
});

export const FeaturesCourseForm = (props: RouteComponentProps<RouteInfo>) => {
  const dispatch = useDispatch();
  const { categories, course, loading } = useSelector(stateSelector);
  const redirect = () => history.push(`/${PrivateRoutesPath.COURSES}`);

  const history = useHistory();

  const create = (data: CourseData) => {
    dispatch(
      coursesActions.update({
        ...data,
        _id: course._id,
        courseImageUrl: course.courseImage,
      })
    );
    redirect();
  };

  const update = (data: CourseData) => {
    if (data.courseImage.length) {
      data.id = course._id;
      dispatch(
        coursesActions.update({
          ...data,
          _id: course._id,
          courseImageUrl: data.courseImage,
        })
      );
      redirect();
    } else {
      dispatch(
        coursesActions.update({
          ...data,
          _id: course._id,
          courseImageUrl: course.courseImageUrl,
        })
      );
      redirect();
    }
  };

  const createContent = {
    onSubmit: create,
    onCancel: redirect,
    data: {
      ...course,
      courseImage: course?.FileList,
    },
    categories: categories,
    course,
  };

  const editContent = {
    onSubmit: update,
    onCancel: redirect,
    data: {
      ...course,
      courseImage: course?.FileList,
    },
    categories: categories,
    course,
  };

  const [content, setContent] = useState<SharedCreateCourseFormProps>(
    createContent
  );

  useEffect(() => {
    props.match.path ===
      `/${PrivateRoutesPath.COURSES}${PrivateRoutesPath.GET_BY_ID}/edit` &&
      dispatch(coursesActions.getById(props.match.params.id));
    dispatch(categoriesActions.getAll());
  }, []);

  useEffect(() => {
    course ? setContent(editContent) : setContent(createContent);
  }, [editContent, createContent]);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <SharedCreateCourseForm {...content} />
    </div>
  );
};

export default FeaturesCourseForm;
