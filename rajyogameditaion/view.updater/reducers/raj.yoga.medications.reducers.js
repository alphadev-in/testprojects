import Immutable from 'immutable';
import {
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR,
  GET_HOME_IMAGES,
  GET_HOME_IMAGES_SUCCESS,
  GET_HOME_IMAGES_ERROR,
  ABOUT_RAJYOGA,
  ABOUT_RAJYOGA_ERROR,
  ABOUT_RAJYOGA_SUCCESS,
  COURSE_SOLUTION,
  COURSE_SOLUTION_ERROR,
  COURSE_SOLUTION_SUCCESS,
  GET_GALLERY,
  GET_GALLERY_ERROR,
  GET_GALLERY_SUCCESS,
  GET_ABOUT_US,
  GET_ABOUT_US_SUCCESS,
  GET_ABOUT_US_ERROR,
  GET_RAJYOGA_COURSE,
  GET_RAJYOGA_COURSE_ERROR,
  GET_RAJYOGA_COURSE_SUCCESS,
  GET_RAJYOGA_COURSE_LIST,
  GET_RAJYOGA_COURSE_LIST_ERROR,
  GET_RAJYOGA_COURSE_LIST_SUCCESS,
  GET_MURLI,
  GET_MURLI_ERROR,
  GET_MURLI_SUCCESS,
  GET_GITA_GIYAN,
  GET_GITA_GIYAN_ERROR,
  GET_GITA_GIYAN_SUCCESS,
  GET_KNOWLEDGE,
  GET_KNOWLEDGE_ERROR,
  GET_KNOWLEDGE_SUCCESS,
  GET_MEDICATION,
  GET_MEDICATION_ERROR,
  GET_MEDICATION_SUCCESS,
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_ERROR,
  POST_CONTACT,
  POST_CONTACT_ERROR,
  POST_CONTACT_SUCCESS,
} from './../actions/raj.yoga.medication.actions';

const initialState = Immutable.fromJS({
  homeImages: false,
  homeImagesIsLoading: false,
  homeImagesIsError: false,
  gridImages: false,
  gridImagesIsLoading: false,
  gridImagesIsError: false,
  aboutRajyoga: false,
  aboutRajYogaError: false,
  aboutRajYogaLoading: false,
  courseSolution: false,
  courseSolutionError: false,
  courseSolutionLoading: false,
  gallary: false,
  gallaryError: false,
  gallaryLoading: false,
  aboutUs: false,
  aboutUsLoading: false,
  aboutUsError: false,
  rajyogaCouse: false,
  rajyogaCouseError: false,
  rajyogaCourseLoading: false,
  rajyogaCouseList: false,
  rajyogaCouseListError: false,
  rajyogaCouseListLoading: false,
  murli: false,
  murliLoading: false,
  murliError: false,
  knowledge: false,
  knowledgeLoading: false,
  knowledgeError: false,
  gitaGayan: false,
  gitaGayanLoading: false,
  gitaGayaError: false,
  knowledge: false,
  knowledgeLoading: false,
  knowledgeError: false,
  medication: false,
  medicationError: false,
  medicationLoading: false,
  contact: false,
  contactLoading: false,
  contactError: false,
  postContact: false,
  postContactError: false,
  postContactLoading: false,
});

function RajyogaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return state
        .set('homeImagesIsLoading', true)
        .set('homeImagesIsError', false);
    case GET_VIDEOS_SUCCESS:
      return state
        .set('homeImagesIsLoading', false)
        .set('homeImagesIsError', false)
        .set('homeImages', action.response);
    case GET_VIDEOS_ERROR:
      return state
        .set('homeImagesIsLoading', false)
        .set('homeImagesIsError', true);
    case GET_HOME_IMAGES:
      return state
        .set('gridImagesIsLoading', true)
        .set('gridImagesIsError', false);
    case GET_HOME_IMAGES_SUCCESS:
      return state
        .set('gridImagesIsLoading', false)
        .set('gridImagesIsError', false)
        .set('gridImages', action.response);
    case GET_HOME_IMAGES_ERROR:
      return state
        .set('gridImagesIsLoading', false)
        .set('gridImagesIsError', true);
    case ABOUT_RAJYOGA:
      return state
        .set('aboutRajYogaLoading', true)
        .set('aboutRajYogaError', false);
    case ABOUT_RAJYOGA_SUCCESS:
      return state
        .set('aboutRajYogaLoading', false)
        .set('aboutRajYogaError', false)
        .set('aboutRajyoga', action.response);
    case ABOUT_RAJYOGA_ERROR:
      return state
        .set('aboutRajYogaLoading', false)
        .set('aboutRajYogaError', true);
    case COURSE_SOLUTION:
      return state
        .set('courseSolutionLoading', true)
        .set('courseSolutionError', false);
    case COURSE_SOLUTION_SUCCESS:
      return state
        .set('courseSolutionLoading', false)
        .set('courseSolutionError', false)
        .set('courseSolution', action.response);
    case COURSE_SOLUTION_ERROR:
      return state
        .set('aboutRajYogaLoading', false)
        .set('courseSolutionError', true);
    case GET_GALLERY:
      return state.set('gallaryLoading', true).set('gallaryError', false);
    case GET_GALLERY_SUCCESS:
      return state
        .set('gallaryLoading', false)
        .set('gallaryError', false)
        .set('gallary', action.response);
    case GET_GALLERY_ERROR:
      return state.set('gallaryLoading', false).set('gallaryError', true);
    case GET_ABOUT_US:
      return state.set('aboutUsLoading', true).set('aboutUsError', false);
    case GET_ABOUT_US_SUCCESS:
      return state
        .set('aboutUsLoading', false)
        .set('aboutUsError', false)
        .set('aboutUs', action.response);
    case GET_ABOUT_US_ERROR:
      return state.set('aboutUsLoading', false).set('aboutUsError', true);
    case GET_RAJYOGA_COURSE:
      return state
        .set('rajyogaCourseLoading', true)
        .set('rajyogaCouseError', false);
    case GET_RAJYOGA_COURSE_SUCCESS:
      return state
        .set('rajyogaCourseLoading', false)
        .set('rajyogaCouseError', false)
        .set('rajyogaCouse', action.response);
    case GET_RAJYOGA_COURSE_ERROR:
      return state
        .set('rajyogaCourseLoading', false)
        .set('rajyogaCouseError', true);
    case GET_RAJYOGA_COURSE_LIST:
      return state
        .set('rajyogaCouseListLoading', true)
        .set('rajyogaCouseListError', false);
    case GET_RAJYOGA_COURSE_LIST_SUCCESS:
      console.log(action.response);
      return state
        .set('rajyogaCouseListLoading', false)
        .set('rajyogaCouseListError', false)
        .set('rajyogaCouseList', action.response);
    case GET_RAJYOGA_COURSE_LIST_ERROR:
      return state
        .set('rajyogaCouseListLoading', false)
        .set('rajyogaCouseListError', true);
    case GET_MURLI:
      return state.set('murliLoading', true).set('murliError', false);
    case GET_MURLI_SUCCESS:
      console.log(action.response);
      return state
        .set('murliLoading', false)
        .set('murliError', false)
        .set('murli', action.response);
    case GET_MURLI_ERROR:
      return state.set('murliLoading', false).set('murliError', true);

    case GET_KNOWLEDGE:
      return state.set('knowledgeLoading', true).set('knowledgeError', false);
    case GET_KNOWLEDGE_SUCCESS:
      console.log(action.response);
      return state
        .set('knowledgeLoading', false)
        .set('knowledgeError', false)
        .set('knowledge', action.response);
    case GET_KNOWLEDGE_ERROR:
      return state.set('knowledgeLoading', false).set('knowledgeError', true);

    case GET_GITA_GIYAN:
      return state.set('gitaGayanLoading', true).set('gitaGayaError', false);
    case GET_GITA_GIYAN_SUCCESS:
      console.log(action.response);
      return state
        .set('gitaGayanLoading', false)
        .set('gitaGayaError', false)
        .set('gitaGayan', action.response);
    case GET_GITA_GIYAN_ERROR:
      return state.set('gitaGayanLoading', false).set('gitaGayaError', true);

    case GET_MEDICATION:
      return state.set('medicationLoading', true).set('medicationError', false);
    case GET_MEDICATION_SUCCESS:
      console.log(action.response);
      return state
        .set('medicationLoading', false)
        .set('medicationError', false)
        .set('medication', action.response);
    case GET_MEDICATION_ERROR:
      return state.set('medicationLoading', false).set('medicationError', true);

    case GET_CONTACT:
      return state.set('contactLoading', true).set('contactError', false);
    case GET_CONTACT_SUCCESS:
      console.log(action.response);
      return state
        .set('contactLoading', false)
        .set('contactError', false)
        .set('contact', action.response);
    case GET_CONTACT_ERROR:
      return state.set('contactLoading', false).set('contactError', true);

    case POST_CONTACT:
      return state
        .set('postContactLoading', true)
        .set('postContactError', false);
    case POST_CONTACT_SUCCESS:
      console.log(action.response);
      return state
        .set('postContactLoading', false)
        .set('postContactError', false)
        .set('postContact', action.response);
    case POST_CONTACT_ERROR:
      return state
        .set('postContactLoading', false)
        .set('postContactError', true);

    default:
      return state;
  }
}

export default RajyogaReducer;
