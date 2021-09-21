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
import { updateObject } from "../../utility";

let initialState ={
    ebookgenres: [],
    ebookgenre: {},
    seriesgenres: [],
    seriesgenre: {},
    hardcopygenres: [],
    hardcopygenre: {},
    customerebooks: [],
    customerebook: {},
    customerhardcopies: [],
    customerhardcopy: {},
    customerseries: [],
    customersingleseries: {},
    serieslanguages: [],
    ebooklanguages: [],
    hardcopylanguages: [],
}





const getSeriesLanguageListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const getSeriesLanguageListSuccess = (state, action) => {
    return updateObject(state, {
        serieslanguages: action.serieslanguages,
        error: null,
        loading: true
      });
  };
  
  const getSeriesLanguageListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createSeriesLanguageStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createSeriesLanguageSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const createSeriesLanguageFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const getEbookLanguageListStart =(state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const getEbookLanguageListSuccess = (state, action) => {
    return updateObject(state, {
        ebooklanguages: action.ebooklanguages,
        error: null,
        loading: true
      });
  };
  
  const getEbookLanguageListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createEbookLanguageStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createEbookLanguageSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const createEbookLanguageFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const getHardcopyLanguageListStart =(state, action)=> {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const getHardcopyLanguageListSuccess = (state, action) => {
    return updateObject(state, {
        hardcopylanguages: action.hardcopylanguages,
        error: null,
        loading: true
      });
  };
  
  const getHardcopyLanguageListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createHardcopyLanguageStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  
  const createHardcopyLanguageSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  
  const createHardcopyLanguageFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
  };
  


const getSeriesGenreListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getSeriesGenreListSuccess = (state, action) => {
    return updateObject(state, {
        seriesgenres: action.seriesgenres,
        error: null,
        loading: true
      });
};

const getSeriesGenreListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getSeriesGenreDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const getSeriesGenreDetailSuccess = (state, action) => {
    return updateObject(state, {
        seriesgenre: action.seriesgenre,
        error: null,
        loading: true
    });
};

const getSeriesGenreDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};



const getHardcopyGenreListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getHardcopyGenreListSuccess = (state, action) => {
    return updateObject(state, {
        hardcopygenres: action.hardcopygenres,
        error: null,
        loading: true
      });
};

const getHardcopyGenreListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getHardcopyGenreDetailStart = (state, action) => {
    return updateObject(state, {
        
        error: null,
        loading: true
      });
};

const getHardcopyGenreDetailSuccess = (state, action) => {
    return updateObject(state, {
        hardcopygenre: action.hardcopygenre,
        error: null,
        loading: true
      });
};

const getHardcopyGenreDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};



const getEbookGenreListStart = (state, action) => {
    return updateObject(state, {
        
        error: null,
        loading: true
      });
};
  
const getEbookGenreListSuccess = (state, action) => {
    return updateObject(state, {
        ebookgenres: action.ebookgenres,
        error: null,
        loading: true
      });
};

const getEbookGenreListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const getEbookGenreDetailStart = (state, action) => {
    return updateObject(state, {
        
        error: null,
        loading: true
      });
};

const getEbookGenreDetailSuccess = (state, action) => {
    return updateObject(state, {
        ebookgenre: action.ebookgenre,
        error: null,
        loading: true
      });
};

const getEbookGenreDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};




const getCustomerEbookListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getCustomerEbookListSuccess = (state, action) => {
    return updateObject(state, {
        customerebooks: action.customerebooks,
        error: null,
        loading: true
      });
};

const getCustomerEbookListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getCustomerEbookDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getCustomerEbookDetailSuccess = (state, action) => {
    return updateObject(state, {
        customerebook: action.customerebook,
        error: null,
        loading: true
      });
};

const getCustomerEbookDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};



const getCustomerSeriesListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getCustomerSeriesListSuccess = (state, action) => {
    return updateObject(state, {
        customerseries: action.customerseries,
        error: null,
        loading: true
      });
};

const getCustomerSeriesListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getCustomerSeriesDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getCustomerSeriesDetailSuccess = (state, action) => {
    return updateObject(state, {
        customersingleseries: action.customersingleseries,
        error: null,
        loading: true
      });
};

const getCustomerSeriesDetailFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const getCustomerHardcopyListStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};
  
const getCustomerHardcopyListSuccess = (state, action) => {
    return updateObject(state, {
        customerhardcopies: action.customerhardcopies,
        error: null,
        loading: true
      });
};

const getCustomerHardcopyListFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getCustomerHardcopyDetailStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const getCustomerHardcopyDetailSuccess = (state, action) => {
    return updateObject(state, {
        customerhardcopy: action.customerhardcopy,
        error: null,
        loading: true
      });
};

const getCustomerHardcopyDetailFail = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  })
};



const createSeriesGenreStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createSeriesGenreSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createSeriesGenreFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createEbookGenreStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createEbookGenreSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createEbookGenreFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createHardcopyGenreStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};


const createHardcopyGenreSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};

const createHardcopyGenreFail = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
      });
};




export default function onceoffs(state = initialState, action){
    switch(action.type){
        case GET_EBOOK_GENRES_START:
            return getEbookGenreListStart(state, action);
        case GET_EBOOK_GENRES_SUCCESS:
            return getEbookGenreListSuccess(state, action);
        case GET_EBOOK_GENRES_FAIL:
            return getEbookGenreListFail(state, action);
        case GET_EBOOK_GENRE_START:
            return getEbookGenreDetailStart(state, action);
        case GET_EBOOK_GENRE_SUCCESS:
            return getEbookGenreDetailSuccess(state, action);
        case GET_EBOOK_GENRE_FAIL:
            return getEbookGenreDetailFail(state, action);
        case CREATE_EBOOK_GENRE_START:
            return createEbookGenreStart(state, action);
        case CREATE_EBOOK_GENRE_SUCCESS:
            return createEbookGenreSuccess(state, action);
        case CREATE_EBOOK_GENRE_FAIL:
            return createEbookGenreFail(state, action);
        case GET_HARDCOPY_GENRES_START:
            return getHardcopyGenreListStart(state, action);
        case GET_HARDCOPY_GENRES_SUCCESS:
            return getHardcopyGenreListSuccess(state, action);
        case GET_HARDCOPY_GENRES_FAIL:
            return getHardcopyGenreListFail(state, action);
        case GET_HARDCOPY_GENRE_START:
            return getHardcopyGenreDetailStart(state, action);
        case GET_HARDCOPY_GENRE_SUCCESS:
            return getHardcopyGenreDetailSuccess(state, action);
        case GET_HARDCOPY_GENRE_FAIL:
            return getHardcopyGenreDetailFail(state, action);
        case CREATE_HARDCOPY_GENRE_START:
            return createHardcopyGenreStart(state, action);
        case CREATE_HARDCOPY_GENRE_SUCCESS:
            return createHardcopyGenreSuccess(state, action);
        case CREATE_HARDCOPY_GENRE_FAIL:
            return createHardcopyGenreFail(state, action);
        case GET_SERIES_GENRES_START:
            return getSeriesGenreListStart(state, action);
        case GET_SERIES_GENRES_SUCCESS:
            return getSeriesGenreListSuccess(state, action);
        case GET_SERIES_GENRES_FAIL:
            return getSeriesGenreListFail(state, action);
        case GET_SERIES_GENRE_START:
            return getSeriesGenreDetailStart(state, action);
        case GET_SERIES_GENRE_SUCCESS:
            return getSeriesGenreDetailSuccess(state, action);
        case GET_SERIES_GENRE_FAIL:
            return getSeriesGenreDetailFail(state, action);
        case CREATE_SERIES_GENRE_START:
            return createSeriesGenreStart(state, action);
        case CREATE_SERIES_GENRE_SUCCESS:
            return createSeriesGenreSuccess(state, action);
        case CREATE_SERIES_GENRE_FAIL:
            return createSeriesGenreFail(state, action);
        case GET_CUSTOMER_EBOOKS_START:
            return getCustomerEbookListStart(state, action);
        case GET_CUSTOMER_EBOOKS_SUCCESS:
            return getCustomerEbookListSuccess(state, action);
        case GET_CUSTOMER_EBOOKS_FAIL:
            return getCustomerEbookListFail(state, action);
        case GET_CUSTOMER_EBOOK_START:
            return getCustomerEbookDetailStart(state, action);
        case GET_CUSTOMER_EBOOK_SUCCESS:
            return getCustomerEbookDetailSuccess(state, action);
        case GET_CUSTOMER_EBOOK_FAIL:
            return getCustomerEbookDetailFail(state, action);
        case GET_CUSTOMER_SERIES_START:
            return getCustomerSeriesListStart(state, action);
        case GET_CUSTOMER_SERIES_SUCCESS:
            return getCustomerSeriesListSuccess(state, action);
        case GET_CUSTOMER_SERIES_FAIL:
            return getCustomerSeriesListFail(state, action);
        case GET_CUSTOMER_SINGLE_SERIES_START:
            return getCustomerSeriesDetailStart(state, action);
        case GET_CUSTOMER_SINGLE_SERIES_SUCCESS:
            return getCustomerSeriesDetailSuccess(state, action);
        case GET_CUSTOMER_SINGLE_SERIES_FAIL:
            return getCustomerSeriesDetailFail(state, action);
        case GET_CUSTOMER_HARDCOPIES_START:
            return getCustomerHardcopyListStart(state, action);
        case GET_CUSTOMER_HARDCOPIES_SUCCESS:
            return getCustomerHardcopyListSuccess(state, action);
        case GET_CUSTOMER_HARDCOPIES_FAIL:
            return getCustomerHardcopyListFail(state, action);
        case GET_CUSTOMER_HARDCOPY_START:
            return getCustomerHardcopyDetailStart(state, action);
        case GET_CUSTOMER_HARDCOPY_SUCCESS:
            return getCustomerHardcopyDetailSuccess(state, action);
        case GET_CUSTOMER_HARDCOPY_FAIL:
            return getCustomerHardcopyDetailFail(state, action);

        case GET_SERIES_LANGUAGES_START:
            return getSeriesLanguageListStart(state, action);
        case GET_SERIES_LANGUAGES_SUCCESS:
            return getSeriesLanguageListSuccess(state, action);
        case GET_SERIES_LANGUAGES_FAIL:
            return getSeriesLanguageListFail(state, action);

        case CREATE_SERIES_LANGUAGE_START:
            return createSeriesLanguageStart(state, action);
        case CREATE_SERIES_LANGUAGE_SUCCESS:
            return createSeriesLanguageSuccess(state, action);
        case CREATE_SERIES_LANGUAGE_FAIL:
            return createSeriesLanguageFail(state, action);

        case GET_EBOOK_LANGUAGES_START:
            return getEbookLanguageListStart(state, action);
        case GET_EBOOK_LANGUAGES_SUCCESS:
            return getEbookLanguageListSuccess(state, action);
        case GET_EBOOK_LANGUAGES_FAIL:
            return getEbookLanguageListFail(state, action);
        case CREATE_EBOOK_LANGUAGE_START:
            return createEbookLanguageStart(state, action);
        case CREATE_EBOOK_LANGUAGE_SUCCESS:
            return createEbookLanguageSuccess(state, action);
        case CREATE_EBOOK_LANGUAGE_FAIL:
            return createEbookLanguageFail(state, action);
        case GET_HARDCOPY_LANGUAGES_START:
            return getHardcopyLanguageListStart(state, action);
        case GET_HARDCOPY_LANGUAGES_SUCCESS:
            return getHardcopyLanguageListSuccess(state, action);
        case GET_HARDCOPY_LANGUAGES_FAIL:
            return getHardcopyLanguageListFail(state, action);
        case CREATE_HARDCOPY_LANGUAGE_START:
            return createHardcopyLanguageStart(state, action);
        case CREATE_HARDCOPY_LANGUAGE_SUCCESS:
            return createHardcopyLanguageSuccess(state, action);
        case CREATE_HARDCOPY_LANGUAGE_FAIL:
            return createHardcopyLanguageFail(state, action);

        case EDIT_SERIES_GENRE:
            const arrayList = state.seriesgenres;
            arrayList.splice(arrayList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                seriesgenres: arrayList,
            };
        case EDIT_EBOOK_GENRE:
            const ebookList = state.ebookgenres;
            ebookList.splice(ebookList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                ebookgenres: ebookList,
            };
        case EDIT_HARDCOPY_GENRE:
            const hardcopyList = state.hardcopygenres;
            hardcopyList.splice(hardcopyList.findIndex(item => item.id === action.payload.data.id), 1 , action.payload.data);
            return {
                ...state,
                hardcopygenres: hardcopyList,
            };
        default:
            return state;
    }
}





