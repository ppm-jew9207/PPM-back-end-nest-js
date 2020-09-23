import React, { useState, useEffect, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import moment from 'moment';

import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from '@material-ui/core';
import './shared-lesson-component.scss';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

export interface LessonDefaultParams {
  title: string;
  titleInputLabel: string;
  descriptionInputLabel: string;
  resourcesInputLabel: string;
  mentorInputLabel: string;
  connectionURLInputLabel: string;
  datetimeInputLabel: string;
  submitButtonText: string;
  cancelButtonText: string;
}
export interface Mentor {
  name: string;
  value: string;
  _id: string;
}

export interface Lesson {
  mentorName: string;
  description: string;
  resources: string;
  imageUrl: string;
  title: string;
  connectionURL: string;
  date: string;
}

export interface SharedLessonComponentProps {
  onSubmit: (lesson: {
    mentorName: string;
    description: string;
    resources: string;
    imageUrl: string;
    title: string;
    connectionURL: string;
    date: string;
  }) => void;
  onCancel: () => void;
  data: LessonDefaultParams;
  mentors: Mentor[];
  lesson?: Lesson;
}

export const SharedLessonComponent = (props: SharedLessonComponentProps) => {
        const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(
          null
        );
        const [mentors, setMentors] = useState<Mentor[]>([]);
        const [lesson, setLesson] = useState<Lesson>();

         

         console.log(lesson);

         useEffect(() => {
           !lesson && setLesson(props.lesson);
         props.lesson && !uploadedImg && setUploadedImg(props.lesson.imageUrl);
           !mentors.length && setMentors(props.mentors);
         }, [props, lesson, mentors, uploadedImg]);

         const onFileLoad = (e) => {
           const file = e.currentTarget.files[0];

           const fileReader = new FileReader();
           fileReader.onload = (e) => {
             setUploadedImg(e.target.result);
           };
           if (file) fileReader.readAsDataURL(file);
         };

         const { handleSubmit, control, register, reset } = useForm();

         if (!props.data) return <div>Loading...</div>;

         return (
           <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
             <Typography className="header" component="h1" variant="h5">
               {props.data.title}
             </Typography>
             <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
               <Controller
                 as={
                   <TextField
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     label={props.data.titleInputLabel}
                     type="text"
                     className="header"
                     inputRef={register({
                       required: 'Required',
                     })}
                   />
                 }
                 name="title"
                 control={control}
                 defaultValue={(lesson && lesson.title) || ''}
               />
               <Controller
                 as={
                   <TextField
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     label={props.data.descriptionInputLabel}
                     type="text"
                     className="description"
                     inputRef={register({
                       required: 'Required',
                     })}
                     multiline
                     rows={8}
                   />
                 }
                 name="description"
                 control={control}
                 defaultValue={(lesson && lesson.description) || ''}
               />
               <Controller
                 as={
                   <TextField
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     label={props.data.datetimeInputLabel}
                     type="datetime-local"
                     className="datetime"
                     inputRef={register({})}
                   />
                 }
                 name="date"
                 control={control}
                 defaultValue={
                   (lesson && lesson.date) ||
                   moment().format('YYYY-MM-DDTHH:MM')
                 }
               />
               <div className="inner-container">
                 <div
                   className={`draggable-container ${
                     !uploadedImg ? 'empty' : ''
                   }`}
                 >
                   <TextField
                     inputRef={register({})}
                     type="file"
                     id="file-browser-input"
                     name="imageUrl"
                     onDragOver={(e) => {
                       e.preventDefault();
                       e.stopPropagation();
                     }}
                     onDrop={onFileLoad.bind(this)}
                     onChange={onFileLoad.bind(this)}
                   />
                   <div className="files-preview-container">
                     <img
                       className="files-preview-container__image"
                       src={(!!uploadedImg && uploadedImg.toString()) || ''}
                       alt="files-preview"
                     />
                   </div>
                   <div className="helper-text">
                     <Typography
                       variant="body1"
                       component="p"
                       align="center"
                       gutterBottom
                     >
                       Drag and Drop Images Here
                     </Typography>
                     <SystemUpdateAltIcon display="inline" />
                   </div>
                 </div>
               </div>
               <Controller
                 as={
                   <TextField
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     label={props.data.resourcesInputLabel}
                     type="text"
                     className="resources"
                     inputRef={register({})}
                     multiline
                     rows={8}
                   />
                 }
                 name="resources"
                 control={control}
                 defaultValue={(lesson && lesson.resources) || ''}
               />
               <InputLabel style={{ padding: '8.5px 14px' }}>
                 {props.data.mentorInputLabel}
               </InputLabel>
               <Controller
                 control={control}
                 name="mentor"
                 defaultValue={
                   (props.lesson && props.lesson.mentorName) ||
                   props.mentors[0]._id
                 }
                 as={
                   <Select variant="outlined" fullWidth ref={register}>
                     {props.mentors.map((mentor) => (
                       <MenuItem key={mentor._id} value={mentor._id}>
                         {mentor.name}
                       </MenuItem>
                     ))}
                   </Select>
                 }
               />
               <Controller
                 as={
                   <TextField
                     variant="outlined"
                     margin="normal"
                     fullWidth
                     label={props.data.connectionURLInputLabel}
                     type="text"
                     className="header"
                     inputRef={register({
                       required: 'Required',
                     })}
                   />
                 }
                 name="connectionURL"
                 control={control}
                 defaultValue={(lesson && lesson.connectionURL) || ''}
               />
               <Button
                 fullWidth
                 variant="contained"
                 color="primary"
                 type="submit"
                 className="submit-form"
               >
                 {props.data.submitButtonText}
               </Button>
               <Button
                 fullWidth
                 variant="contained"
                 color="secondary"
                 type="reset"
                 className="cancel-form"
                 onClick={() => 
                   reset()
                  //  reset({
                  //    mentorName: '',
                  //    description: '',
                  //    resources: '',
                  //    imageUrl: '',
                  //    title: '',
                  //    connectionURL: '',
                  //    date: moment().format('YYYY-MM-DDTHH:MM'),
                  //  });
                 }
               >
                 {props.data.cancelButtonText}
               </Button>
             </form>
           </Box>
         );
       };

export default SharedLessonComponent;
