import {createSelector} from 'reselect';

const selectRajYOgaMedicaiton = (state) => state.get('RajyogaReducer');

const makeSelectVideos = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('homeImages'),
  );
const makeSelectVideosLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('homeImagesIsLoading'),
  );
const makeSelectVideosError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('homeImagesIsError'),
  );

const makeSelectGridImages = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gridImages'),
  );
const makeSelectGridImagesLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gridImagesIsLoading'),
  );
const makeSelectGridImagesError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gridImagesIsError'),
  );

const makeSelectAboutRajYoga = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('aboutRajyoga'),
  );
const makeSelectAboutRajYogaLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('aboutRajYogaLoading'),
  );
const makeSelectAboutRajYogaError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('aboutRajYogaError'),
  );

const makeSelectCouseSolution = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('courseSolution'),
  );
const makeSelectCouseSolutionLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('courseSolutionLoading'),
  );
const makeSelectCouseSolutionError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('courseSolutionError'),
  );

const makeSelectGallery = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gallary'),
  );
const makeSelectGalleryLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gallaryLoading'),
  );
const makeSelectGallaryError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gallaryError'),
  );

const makeSelectAboutUs = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('aboutUs'),
  );
const makeSelectAboutUsLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('aboutUsLoading'),
  );
const makeSelectAboutUsError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('aboutUsError'),
  );

const makeSelectRajYogaCourse = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('rajyogaCouse'),
  );
const makeSelectRajYogaCourseLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('rajyogaCourseLoading'),
  );
const makeSelectRajYogaCourseError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('rajyogaCouseError'),
  );

const makeSelectRajyogaCouseList = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('rajyogaCouseList'),
  );
const makeSelectRajyogaCourseListLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('rajyogaCouseListLoading'),
  );
const makeSelectRajyogaCourseListError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('rajyogaCouseListError'),
  );

const makeSelectMurli = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('murli'),
  );
const makeSelectMurliLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('murliLoading'),
  );
const makeSelectMurliError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('murliError'),
  );

const makeSelectKnowledge = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('knowledge'),
  );
const makeSelectKnowledgeLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('knowledgeLoading'),
  );
const makeSelectKnowledgeError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('knowledgeError'),
  );

const makeSelectMedication = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('medication'),
  );
const makeSelectMedicationLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('medicationLoading'),
  );
const makeSelectMedicationError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('medicationError'),
  );

const makeSelectGitaGayan = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gitaGayan'),
  );
const makeSelectGitaGayanLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gitaGayanLoading'),
  );
const makeSelectGitaGayanError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('gitaGayaError'),
  );

const makeSelectContact = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('contact'),
  );
const makeSelectContactLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('contactLoading'),
  );
const makeSelectContactError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('contactError'),
  );

const makeSelectPostContact = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('postContact'),
  );
const makeSelectPostContactLoading = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('postContactLoading'),
  );
const makeSelectPostContactError = () =>
  createSelector(selectRajYOgaMedicaiton, (selectRajYOgaMedicaiton) =>
    selectRajYOgaMedicaiton.get('postContactError'),
  );

export {
  selectRajYOgaMedicaiton,
  makeSelectVideos,
  makeSelectVideosLoading,
  makeSelectVideosError,
  makeSelectGridImages,
  makeSelectGridImagesLoading,
  makeSelectGridImagesError,
  makeSelectAboutRajYoga,
  makeSelectAboutRajYogaLoading,
  makeSelectAboutRajYogaError,
  makeSelectCouseSolution,
  makeSelectCouseSolutionLoading,
  makeSelectCouseSolutionError,
  makeSelectGallery,
  makeSelectGalleryLoading,
  makeSelectGallaryError,
  makeSelectAboutUs,
  makeSelectAboutUsLoading,
  makeSelectAboutUsError,
  makeSelectRajYogaCourse,
  makeSelectRajYogaCourseLoading,
  makeSelectRajYogaCourseError,
  makeSelectRajyogaCouseList,
  makeSelectRajyogaCourseListError,
  makeSelectRajyogaCourseListLoading,
  makeSelectMurli,
  makeSelectMurliError,
  makeSelectMurliLoading,
  makeSelectKnowledge,
  makeSelectKnowledgeError,
  makeSelectKnowledgeLoading,
  makeSelectGitaGayan,
  makeSelectGitaGayanError,
  makeSelectGitaGayanLoading,
  makeSelectMedication,
  makeSelectMedicationLoading,
  makeSelectMedicationError,
  makeSelectContact,
  makeSelectContactLoading,
  makeSelectContactError,
  makeSelectPostContact,
  makeSelectPostContactLoading,
  makeSelectPostContactError,
};
