import axios from 'axios';
import {
    GET_EBOOK_GENRES_START,
    GET_EBOOK_GENRES_SUCCESS,
    GET_EBOOK_GENRES_FAIL,
    GET_EBOOK_GENRE_START,
    GET_EBOOK_GENRE_SUCCESS,
    GET_EBOOK_GENRE_FAIL,
    CREATE_EBOOK_GENRE_START,
    CREATE_EBOOK_GENRE_SUCCESS,
    CREATE_EBOOK_GENRE_FAIL,
    EDIT_EBOOK_GENRE,
    GET_SERIES_GENRES_START,
    GET_SERIES_GENRES_SUCCESS,
    GET_SERIES_GENRES_FAIL,
    GET_SERIES_GENRE_START,
    GET_SERIES_GENRE_SUCCESS,
    GET_SERIES_GENRE_FAIL,
    CREATE_SERIES_GENRE_START,
    CREATE_SERIES_GENRE_SUCCESS,
    CREATE_SERIES_GENRE_FAIL,
    EDIT_SERIES_GENRE,
    GET_HARDCOPY_GENRES_START,
    GET_HARDCOPY_GENRES_SUCCESS,
    GET_HARDCOPY_GENRES_FAIL,
    GET_HARDCOPY_GENRE_START,
    GET_HARDCOPY_GENRE_SUCCESS,
    GET_HARDCOPY_GENRE_FAIL,
    CREATE_HARDCOPY_GENRE_START,
    CREATE_HARDCOPY_GENRE_SUCCESS,
    CREATE_HARDCOPY_GENRE_FAIL,
    EDIT_HARDCOPY_GENRE,
    GET_CUSTOMER_EBOOKS_START,
    GET_CUSTOMER_EBOOKS_SUCCESS,
    GET_CUSTOMER_EBOOKS_FAIL,
    GET_CUSTOMER_EBOOK_START,
    GET_CUSTOMER_EBOOK_SUCCESS,
    GET_CUSTOMER_EBOOK_FAIL,
    GET_CUSTOMER_HARDCOPIES_START,
    GET_CUSTOMER_HARDCOPIES_SUCCESS,
    GET_CUSTOMER_HARDCOPIES_FAIL,
    GET_CUSTOMER_HARDCOPY_START,
    GET_CUSTOMER_HARDCOPY_SUCCESS,
    GET_CUSTOMER_HARDCOPY_FAIL,
    GET_CUSTOMER_SERIES_START,
    GET_CUSTOMER_SERIES_SUCCESS,
    GET_CUSTOMER_SERIES_FAIL,
    GET_CUSTOMER_SINGLE_SERIES_START,
    GET_CUSTOMER_SINGLE_SERIES_SUCCESS,
    GET_CUSTOMER_SINGLE_SERIES_FAIL,
    GET_SERIES_LANGUAGES_START,
    GET_SERIES_LANGUAGES_SUCCESS,
    GET_SERIES_LANGUAGES_FAIL,
    CREATE_SERIES_LANGUAGE_START,
    CREATE_SERIES_LANGUAGE_SUCCESS,
    CREATE_SERIES_LANGUAGE_FAIL,
    GET_EBOOK_LANGUAGES_START,
    GET_EBOOK_LANGUAGES_SUCCESS,
    GET_EBOOK_LANGUAGES_FAIL,
    CREATE_EBOOK_LANGUAGE_START,
    CREATE_EBOOK_LANGUAGE_SUCCESS,
    CREATE_EBOOK_LANGUAGE_FAIL,
    GET_HARDCOPY_LANGUAGES_START,
    GET_HARDCOPY_LANGUAGES_SUCCESS,
    GET_HARDCOPY_LANGUAGES_FAIL,
    CREATE_HARDCOPY_LANGUAGE_START,
    CREATE_HARDCOPY_LANGUAGE_SUCCESS,
    CREATE_HARDCOPY_LANGUAGE_FAIL,
} from '../../types/publicationTypes';
import {
    seriesgenresURL,
    ebookgenresURL,
    hardcopygenresURL,
    customerebooksURL,
    customerseriesURL,
    customerhardcopiesURL,
    serieslanguagequeriesURL,
    serieslanguagesURL,
    ebooklanguagequeriesURL,
    ebooklanguagesURL,
    hardcopylanguagequeriesURL,
    hardcopylanguagesURL,

} from '../../constants'

import {
    returnErrors
} from '../messages';


const getSeriesLanguageListStart = () => {
  return {
    type: GET_SERIES_LANGUAGES_START
  };
};

const getSeriesLanguageListSuccess = serieslanguages => {
  return {
      type: GET_SERIES_LANGUAGES_SUCCESS,
      serieslanguages
  };
};

const getSeriesLanguageListFail = error => {
  return {
      type: GET_SERIES_LANGUAGES_FAIL,
      error: error
  };
};


const createSeriesLanguageStart = () => {
  return {
      type: CREATE_SERIES_LANGUAGE_START
  };
};


const createSeriesLanguageSuccess = language => {
  return {
      type: CREATE_SERIES_LANGUAGE_SUCCESS,
      language
  };
};

const createSeriesLanguageFail = error => {
  return {
      type: CREATE_SERIES_LANGUAGE_FAIL,
      error: error
  };
};

const getEbookLanguageListStart = () => {
  return {
    type: GET_EBOOK_LANGUAGES_START
  };
};

const getEbookLanguageListSuccess = ebooklanguages => {
  return {
      type: GET_EBOOK_LANGUAGES_SUCCESS,
      ebooklanguages
  };
};

const getEbookLanguageListFail = error => {
  return {
      type: GET_EBOOK_LANGUAGES_FAIL,
      error: error
  };
};


const createEbookLanguageStart = () => {
  return {
      type: CREATE_EBOOK_LANGUAGE_START
  };
};


const createEbookLanguageSuccess = language => {
  return {
      type: CREATE_EBOOK_LANGUAGE_SUCCESS,
      language
  };
};

const createEbookLanguageFail = error => {
  return {
      type: CREATE_EBOOK_LANGUAGE_FAIL,
      error: error
  };
};


const getHardcopyLanguageListStart = () => {
  return {
    type: GET_HARDCOPY_LANGUAGES_START
  };
};

const getHardcopyLanguageListSuccess = hardcopylanguages => {
  return {
      type: GET_HARDCOPY_LANGUAGES_SUCCESS,
      hardcopylanguages
  };
};

const getHardcopyLanguageListFail = error => {
  return {
      type: GET_HARDCOPY_LANGUAGES_FAIL,
      error: error
  };
};


const createHardcopyLanguageStart = () => {
  return {
      type: CREATE_HARDCOPY_LANGUAGE_START
  };
};


const createHardcopyLanguageSuccess = language => {
  return {
      type: CREATE_HARDCOPY_LANGUAGE_SUCCESS,
      language
  };
};

const createHardcopyLanguageFail = error => {
  return {
      type: CREATE_HARDCOPY_LANGUAGE_FAIL,
      error: error
  };
};




const getSeriesGenreListStart = () => {
    return {
      type: GET_SERIES_GENRES_START
    };
};

const getSeriesGenreListSuccess = seriesgenres => {
    return {
        type: GET_SERIES_GENRES_SUCCESS,
        seriesgenres
    };
};

const getSeriesGenreListFail = error => {
    return {
        type: GET_SERIES_GENRES_FAIL,
        error: error
    };
};

const getSeriesGenreDetailStart = () => {
    return {
        type: GET_SERIES_GENRE_START
    };
};

const getSeriesGenreDetailSuccess = seriesgenre => {
    return {
        type: GET_SERIES_GENRE_SUCCESS,
        seriesgenre
    };
};

const getSeriesGenreDetailFail = error => {
  return {
    type: GET_SERIES_GENRE_FAIL,
    error: error
  };
};



const getHardcopyGenreListStart = () => {
    return {
      type: GET_HARDCOPY_GENRES_START
    };
};

const getHardcopyGenreListSuccess = hardcopygenres => {
    return {
        type: GET_HARDCOPY_GENRES_SUCCESS,
        hardcopygenres
    };
};

const getHardcopyGenreListFail = error => {
    return {
        type: GET_HARDCOPY_GENRES_FAIL,
        error: error
    };
};

const getHardcopyGenreDetailStart = () => {
    return {
        type: GET_HARDCOPY_GENRE_START
    };
};

const getHardcopyGenreDetailSuccess = hardcopygenre => {
    return {
        type: GET_HARDCOPY_GENRE_SUCCESS,
        hardcopygenre
    };
};

const getHardcopyGenreDetailFail = error => {
  return {
    type: GET_HARDCOPY_GENRE_FAIL,
    error: error
  };
};



const getEbookGenreListStart = () => {
    return {
      type: GET_EBOOK_GENRES_START
    };
};

const getEbookGenreListSuccess = ebookgenres => {
    return {
        type: GET_EBOOK_GENRES_SUCCESS,
        ebookgenres
    };
};

const getEbookGenreListFail = error => {
    return {
        type: GET_EBOOK_GENRES_FAIL,
        error: error
    };
};


const getEbookGenreDetailStart = () => {
    return {
        type: GET_EBOOK_GENRE_START
    };
};

const getEbookGenreDetailSuccess = ebookgenre => {
    return {
        type: GET_EBOOK_GENRE_SUCCESS,
        ebookgenre
    };
};

const getEbookGenreDetailFail = error => {
  return {
    type: GET_EBOOK_GENRE_FAIL,
    error: error
  };
};




const getCustomerEbookListStart = () => {
    return {
      type: GET_CUSTOMER_EBOOKS_START
    };
};

const getCustomerEbookListSuccess = customerebooks => {
    return {
        type: GET_CUSTOMER_EBOOKS_SUCCESS,
        customerebooks
    };
};

const getCustomerEbookListFail = error => {
    return {
        type: GET_CUSTOMER_EBOOKS_FAIL,
        error: error
    };
};

const getCustomerEbookDetailStart = () => {
    return {
        type: GET_CUSTOMER_EBOOK_START
    };
};

const getCustomerEbookDetailSuccess = customerebook => {
    return {
        type: GET_CUSTOMER_EBOOK_SUCCESS,
        customerebook
    };
};

const getCustomerEbookDetailFail = error => {
  return {
    type: GET_CUSTOMER_EBOOK_FAIL,
    error: error
  };
};



const getCustomerSeriesListStart = () => {
    return {
      type: GET_CUSTOMER_SERIES_START
    };
};

const getCustomerSeriesListSuccess = customerseries => {
    return {
        type: GET_CUSTOMER_SERIES_SUCCESS,
        customerseries
    };
};

const getCustomerSeriesListFail = error => {
    return {
        type: GET_CUSTOMER_SERIES_FAIL,
        error: error
    };
};

const getCustomerSeriesDetailStart = () => {
    return {
        type: GET_CUSTOMER_SINGLE_SERIES_START
    };
};

const getCustomerSeriesDetailSuccess = customersingleseries => {
    return {
        type: GET_CUSTOMER_SINGLE_SERIES_SUCCESS,
        customersingleseries
    };
};

const getCustomerSeriesDetailFail = error => {
  return {
    type: GET_CUSTOMER_SINGLE_SERIES_FAIL,
    error: error
  };
};


const getCustomerHardcopyListStart = () => {
    return {
      type: GET_CUSTOMER_HARDCOPIES_START
    };
};

const getCustomerHardcopyListSuccess = customerhardcopies => {
    return {
        type: GET_CUSTOMER_HARDCOPIES_SUCCESS,
        customerhardcopies
    };
};

const getCustomerHardcopyListFail = error => {
    return {
        type: GET_CUSTOMER_HARDCOPIES_FAIL,
        error: error
    };
};

const getCustomerHardcopyDetailStart = () => {
    return {
        type: GET_CUSTOMER_HARDCOPY_START
    };
};

const getCustomerHardcopyDetailSuccess = customerhardcopy => {
    return {
        type: GET_CUSTOMER_HARDCOPY_SUCCESS,
        customerhardcopy
    };
};

const getCustomerHardcopyDetailFail = error => {
  return {
    type: GET_CUSTOMER_HARDCOPY_FAIL,
    error: error
  };
};



const createSeriesGenreStart = () => {
    return {
        type: CREATE_SERIES_GENRE_START
    };
};


const createSeriesGenreSuccess = seriesgenre => {
    return {
        type: CREATE_SERIES_GENRE_SUCCESS,
        seriesgenre
    };
};

const createSeriesGenreFail = error => {
    return {
        type: CREATE_SERIES_GENRE_FAIL,
        error: error
    };
};


const createEbookGenreStart = () => {
    return {
        type: CREATE_EBOOK_GENRE_START
    };
};


const createEbookGenreSuccess = ebookgenre => {
    return {
        type: CREATE_EBOOK_GENRE_SUCCESS,
        ebookgenre
    };
};

const createEbookGenreFail = error => {
    return {
        type: CREATE_EBOOK_GENRE_FAIL,
        error: error
    };
};


const createHardcopyGenreStart = () => {
    return {
        type: CREATE_HARDCOPY_GENRE_START
    };
};


const createHardcopyGenreSuccess = hardcopygenre => {
    return {
        type: CREATE_HARDCOPY_GENRE_SUCCESS,
        hardcopygenre
    };
};

const createHardcopyGenreFail = error => {
    return {
        type: CREATE_HARDCOPY_GENRE_FAIL,
        error: error
    };
};




export const getEbookGenres = () => {
    return dispatch => {
      dispatch(getEbookGenreListStart());
      axios
        .get(ebookgenresURL)
        .then(res => {
          const ebookgenres = res.data;
          dispatch(getEbookGenreListSuccess(ebookgenres));
          })
        .catch(err => {
          dispatch(getEbookGenreListFail(err));
      });
    };
};

  export const getEbookGenre = (id) => {
    return dispatch => {
      dispatch(getEbookGenreDetailStart());

      axios
        .get(`${ebookgenresURL}${id}`)
        .then(res => {
          const ebookgenre = res.data;
          dispatch(getEbookGenreDetailSuccess(ebookgenre));
          })
        .catch(err => {
          dispatch(getEbookGenreDetailFail(err));
      });
    };
  };

  export const addEbookGenre = (ebookgenre) => {
    return dispatch => {
      dispatch(createEbookGenreStart());

      axios
        .post(ebookgenresURL, ebookgenre)
        .then(res => {
          dispatch(createEbookGenreSuccess(ebookgenre));
        })
        .catch(err => {
          dispatch(createEbookGenreFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};

export const editEbookGenre = (id, ebookgenre) => dispatch => {

    JSON.stringify(id, null, 3)
    axios.patch(`${ebookgenresURL}${id}/`, ebookgenresURL)
    .then(res => {
      dispatch({
          type: EDIT_EBOOK_GENRE,
          payload: res.data
      });
    }).catch(err => console.log(err))
}



export const getSeriesGenres = () => {
    return dispatch => {
      dispatch(getSeriesGenreListStart());
      axios
        .get(seriesgenresURL)
        .then(res => {
          const seriesgenres = res.data;
          dispatch(getSeriesGenreListSuccess(seriesgenres));
          })
        .catch(err => {
          dispatch(getSeriesGenreListFail(err));
      });
    };
};

  export const getSeriesGenre = (id) => {
    return dispatch => {
      dispatch(getSeriesGenreDetailStart());
      axios
        .get(`${seriesgenresURL}${id}/`)
        .then(res => {
          const seriesgenre = res.data;
          dispatch(getSeriesGenreDetailSuccess(seriesgenre));
          })
        .catch(err => {
          dispatch(getSeriesGenreDetailFail(err));
      });
    };
};

  export const addSeriesGenre = (seriesgenre) => {
    return dispatch => {
      dispatch(createSeriesGenreStart());
      axios
        .post(seriesgenresURL, seriesgenre)
        .then(res => {
          dispatch(createSeriesGenreSuccess(seriesgenre));
        })
        .catch(err => {
          dispatch(createSeriesGenreFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};

export const editSeriesGenre = (id, seriesgenre) => dispatch => {
    JSON.stringify(id, null, 3)
    axios.patch(`${seriesgenresURL}${id}/`, seriesgenre)
    .then(res => {
      dispatch({
          type: EDIT_SERIES_GENRE,
          payload: res.data
      });
    }).catch(err => console.log(err))
}



export const getHardcopyGenres = (id) => {
    return dispatch => {
      dispatch(getHardcopyGenreListStart());
      axios
        .get(hardcopygenresURL)
        .then(res => {
          const hardcopygenres = res.data;
          dispatch(getHardcopyGenreListSuccess(hardcopygenres));
          })
        .catch(err => {
          dispatch(getHardcopyGenreListFail(err));
      });
    };
};

  export const getHardcopyGenre = (id) => {
    return dispatch => {
      dispatch(getHardcopyGenreDetailStart());

      axios
        .get(`${hardcopygenresURL}${id}/`)
        .then(res => {
          const hardcopygenre = res.data;
          dispatch(getHardcopyGenreDetailSuccess(hardcopygenre));
          })
        .catch(err => {
          dispatch(getHardcopyGenreDetailFail(err));
      });
    };
};

  export const addHardcopyGenre = (hardcopygenre) => {
    return dispatch => {
      dispatch(createHardcopyGenreStart());
      axios
        .post(hardcopygenresURL, hardcopygenre)
        .then(res => {
          dispatch(createHardcopyGenreSuccess(hardcopygenre));
        })
        .catch(err => {
          dispatch(createHardcopyGenreFail(err));
          dispatch(returnErrors(err.response.data, err.response.status));
      });
    };
};

export const editHardcopyGenre = (id, hardcopygenre) => dispatch => {

    JSON.stringify(id, null, 3)
    axios.patch(`${hardcopygenresURL}${id}/`, hardcopygenre)
    .then(res => {
      dispatch({
          type: EDIT_HARDCOPY_GENRE,
          payload: res.data
      });
    }).catch(err => console.log(err))
}





export const getCustomerEbooks = (id) => {
    return dispatch => {
      dispatch(getCustomerEbookListStart());
      axios
        .get(`${customerebooksURL}?id=${id}`)
        .then(res => {
          const customerebooks = res.data;
          dispatch(getCustomerEbookListSuccess(customerebooks));
          })
        .catch(err => {
          dispatch(getCustomerEbookListFail(err));
      });
    };
};

  export const getCustomerEbook = (id) => {
    return dispatch => {
      dispatch(getCustomerEbookDetailStart());

      axios
        .get(`${customerebooksURL}${id}`)
        .then(res => {
          const customerebook = res.data;
          dispatch(getCustomerEbookDetailSuccess(customerebook));
          })
        .catch(err => {
          dispatch(getCustomerEbookDetailFail(err));
      });
    };
};




export const getCustomerHardcopies = (id) => {
    return dispatch => {
      dispatch(getCustomerHardcopyListStart());

      axios
        .get(`${customerhardcopiesURL}?id=${id}`)
        .then(res => {
          const customerhardcopies = res.data;
          dispatch(getCustomerHardcopyListSuccess(customerhardcopies));
          })
        .catch(err => {
          dispatch(getCustomerHardcopyListFail(err));
      });
    };
};



  export const getCustomerHardcopy = (id) => {
    return dispatch => {
      dispatch(getCustomerHardcopyDetailStart());

      axios
        .get(`${customerhardcopiesURL}${id}`)
        .then(res => {
          const customerhardcopy = res.data;
          dispatch(getCustomerHardcopyDetailSuccess(customerhardcopy));
          })
        .catch(err => {
          dispatch(getCustomerHardcopyDetailFail(err));
      });
    };
};




export const getCustomerSeries = (id) => {
    return dispatch => {
      dispatch(getCustomerSeriesListStart());

      axios
        .get(`${customerseriesURL}?id=${id}`)
        .then(res => {
          const customerseries = res.data;
          dispatch(getCustomerSeriesListSuccess(customerseries));
          })
        .catch(err => {
          dispatch(getCustomerSeriesListFail(err));
      });
    };
};

export const getCustomerSingleSeries= (id) => {
    return dispatch => {
      dispatch(getCustomerSeriesDetailStart());
      axios
        .get(`${customerseriesURL}${id}`)
        .then(res => {
          const customersingleseries = res.data;
          dispatch(getCustomerSeriesDetailSuccess(customersingleseries));
          })
        .catch(err => {
          dispatch(getCustomerSeriesDetailFail(err));
      });
    };
};


export const getSeriesLanguages = (id) => {
  return dispatch => {
    dispatch(getSeriesLanguageListStart());

    axios
      .get(`${serieslanguagequeriesURL}?id=${id}`)
      .then(res => {
        const serieslanguages = res.data;
        dispatch(getSeriesLanguageListSuccess(serieslanguages));
        })
      .catch(err => {
        dispatch(getSeriesLanguageListFail(err));
    });
  };
};


export const addSeriesLanguage = (language) => {
  return dispatch => {
    dispatch(createSeriesLanguageStart());
    axios
      .post(serieslanguagesURL, language)
      .then(res => {
        dispatch(createSeriesLanguageSuccess(language));
      })
      .catch(err => {
        dispatch(createSeriesLanguageFail(err));
        dispatch(returnErrors(err.response.data, err.response.status));
    });
  };
};



export const getEbookLanguages = (id) => {
  return dispatch => {
    dispatch(getEbookLanguageListStart());

    axios
      .get(`${ebooklanguagequeriesURL}?id=${id}`)
      .then(res => {
        const ebooklanguages = res.data;
        dispatch(getEbookLanguageListSuccess(ebooklanguages));
        })
      .catch(err => {
        dispatch(getEbookLanguageListFail(err));
    });
  };
};


export const addEbookLanguage = (language) => {
  return dispatch => {
    dispatch(createEbookLanguageStart());
    axios
      .post(ebooklanguagesURL, language)
      .then(res => {
        dispatch(createEbookLanguageSuccess(language));
      })
      .catch(err => {
        dispatch(createEbookLanguageFail(err));
        dispatch(returnErrors(err.response.data, err.response.status));
    });
  };
};



export const getHardcopyLanguages = (id) => {
  return dispatch => {
    dispatch(getHardcopyLanguageListStart());

    axios
      .get(`${hardcopylanguagequeriesURL}?id=${id}`)
      .then(res => {
        const hardcopylanguages = res.data;
        dispatch(getHardcopyLanguageListSuccess(hardcopylanguages));
        })
      .catch(err => {
        dispatch(getHardcopyLanguageListFail(err));
    });
  };
};


export const addHardcopyLanguage = (language) => {
  return dispatch => {
    dispatch(createHardcopyLanguageStart());
    axios
      .post(hardcopylanguagesURL, language)
      .then(res => {
        dispatch(createHardcopyLanguageSuccess(language));
      })
      .catch(err => {
        dispatch(createHardcopyLanguageFail(err));
        dispatch(returnErrors(err.response.data, err.response.status));
    });
  };
};
