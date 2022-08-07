import { getItems } from '../api/api';

const ADD_ITEMS = 'ADD_ITEMS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    items: [],
    isLoading: false
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            };

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: true
            };

        default:
            return state
    };
};

export const fetchItems = name => async dispatch => {
    dispatch(toggleIsLoading());
    const items = await getItems(name);
    dispatch(addItems(items));
};

const addItems = items => ({ type: ADD_ITEMS, payload: items });
const toggleIsLoading = () => ({ type: TOGGLE_IS_LOADING });

export default itemsReducer;