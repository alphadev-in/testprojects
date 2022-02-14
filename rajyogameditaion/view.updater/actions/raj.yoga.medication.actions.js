import {debug} from 'react-native-reanimated';

export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';
export const GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR';
export const GET_HOME_IMAGES = 'GET_HOME_IMAGES';
export const GET_HOME_IMAGES_SUCCESS = 'GET_HOME_IMAGES_SUCCESS';
export const GET_HOME_IMAGES_ERROR = 'GET_HOME_IMAGES_ERROR';
export const ABOUT_RAJYOGA = 'ABOUT_RAJYOGA';
export const ABOUT_RAJYOGA_SUCCESS = 'ABOUT_RAJYOGA_SUCCESS';
export const ABOUT_RAJYOGA_ERROR = 'ABOUT_RAJYOGA_ERROR';
export const COURSE_SOLUTION = 'COURSE_SOLUTION';
export const COURSE_SOLUTION_ERROR = 'COURSE_SOLUTION_ERROR';
export const COURSE_SOLUTION_SUCCESS = 'COURSE_SOLUTION_SUCCESS';
export const GET_GALLERY = 'GET_GALLERY';
export const GET_GALLERY_SUCCESS = 'GET_GALLERY_SUCCESS';
export const GET_GALLERY_ERROR = 'GET_GALLERY_ERROR';
export const GET_ABOUT_US = 'GET_ABOUT_US';
export const GET_ABOUT_US_SUCCESS = 'GET_ABOUT_US_SUCCESS';
export const GET_ABOUT_US_ERROR = 'GET_ABOUT_US_ERROR';
export const GET_RAJYOGA_COURSE = 'GET_RAJYOGA_COURSE';
export const GET_RAJYOGA_COURSE_SUCCESS = 'GET_RAJYOGA_COURSE_SUCCESS';
export const GET_RAJYOGA_COURSE_ERROR = 'GET_RAJYOGA_COURSE_ERROR';
export const GET_RAJYOGA_COURSE_LIST = 'GET_RAJYOGA_COURSE_LIST';
export const GET_RAJYOGA_COURSE_LIST_SUCCESS =
  'GET_RAJYOGA_COURSE_LIST_SUCCESS';
export const GET_RAJYOGA_COURSE_LIST_ERROR = 'GET_RAJYOGA_COURSE_LIST_ERROR';
export const GET_MURLI = 'GET_MURLI';
export const GET_MURLI_SUCCESS = 'GET_MURLI_SUCCESS';
export const GET_MURLI_ERROR = 'GET_MURLI_ERROR';
export const GET_MEDICATION = 'GET_MEDICATION';
export const GET_MEDICATION_SUCCESS = 'GET_MEDICATION_SUCCESS';
export const GET_MEDICATION_ERROR = 'GET_MEDICATION_ERROR';
export const GET_GITA_GIYAN = 'GET_GITA_GIYAN';
export const GET_GITA_GIYAN_SUCCESS = 'GET_GITA_GIYAN_SUCCESS';
export const GET_GITA_GIYAN_ERROR = 'GET_GITA_GIYAN_ERROR';
export const GET_KNOWLEDGE = 'GET_KNOWLEDGE';
export const GET_KNOWLEDGE_SUCCESS = 'GET_KNOWLEDGE_SUCCESS';
export const GET_KNOWLEDGE_ERROR = 'GET_KNOWLEDGE_ERROR';
export const GET_CONTACT = 'GET_CONTACT';
export const GET_CONTACT_SUCCESS = 'GET_CONTACT_SUCCESS';
export const GET_CONTACT_ERROR = 'GET_CONTACT_ERROR';
export const POST_CONTACT = 'POST_CONTACT';
export const POST_CONTACT_SUCCESS = 'POST_CONTACT_SUCCESS';
export const POST_CONTACT_ERROR = 'POST_CONTACT_ERROR';

export function getVideos() {
  return {
    type: GET_VIDEOS,
    url: 'home_images',
  };
}

export function getHomeImages() {
  return {
    type: GET_HOME_IMAGES,
    url: 'gridimages',
  };
}

export function aboutRajyoga() {
  return {
    type: ABOUT_RAJYOGA,
    url: 'about_rajyoga',
  };
}

export function getCourseSolution() {
  return {
    type: COURSE_SOLUTION,
    url: 'course_solution',
  };
}

export function getGallery() {
  return {
    type: GET_GALLERY,
    url: 'gallery',
  };
}

export function getAboutUs() {
  return {
    type: GET_ABOUT_US,
    url: 'about',
  };
}

export function getRajYogaCouse(data) {
  return {
    type: GET_RAJYOGA_COURSE,
    url: '/courses_list',
    data: data,
    method: 'POST',
  };
}

export function getRajYogaCourseList(data) {
  return {
    type: GET_RAJYOGA_COURSE_LIST,
    url: '/courses',
    data: data,
    method: 'POST',
  };
}

export function getMurli() {
  return {
    type: GET_MURLI,
    url: '/murli',
  };
}

export function getMedication() {
  return {
    type: GET_MEDICATION,
    url: '/meditation',
  };
}

export function getGitaGyan() {
  return {
    type: GET_GITA_GIYAN,
    url: '/gita_gyan',
  };
}

export function getKnowLedge() {
  return {
    type: GET_KNOWLEDGE,
    url: '/knowledge',
  };
}

export function getContact() {
  return {
    type: GET_CONTACT,
    url: '/contact',
  };
}

export function postContact(data) {
  console.log(data);
  return {
    type: POST_CONTACT,
    url: 'contact_details',
    data: data,
    method: 'POST',
  };
}
