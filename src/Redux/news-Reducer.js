const SET_NEWS = 'SET-NEWS';

const initialState = {
    // weather : [
    //     {id:1, country: 'Ukraine', town: 'Pokrov', time: '00:00', temperature: '35', sun: true, rain: true}
    // ]
    news: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {...state, news: action.news}
        }
        default:
            return state
    }
    }

export const setNewsAC = (news) => ({type:SET_NEWS, news});

export default newsReducer