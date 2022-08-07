const ADD_CART_ITEM = 'ADD_CART_ITEM';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
const CLEAN_CART = 'CLEAN_CART';
const DELETE_ITEMS_GROUP = 'DELETE_ITEMS_GROUP';

const initialState = {
    items: [],
    sum: 0
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_CART_ITEM:
            return {
                ...state,
                items: state.items.flat().find((item) => item.name === action.payload.name)
                    ? state.items.map(item => (item.find((item) => item.name === action.payload.name) ? [...item, action.payload] : item))
                    : [...state.items, [action.payload]],
                sum: state.sum + action.payload.price
            }

        case DELETE_CART_ITEM:
            return {
                ...state,
                items: state.items.map(item => (item.find((item) => item.name === action.payload.name)
                    ? item.filter(item => item.id !== action.payload.id)
                    : item)),
                sum: state.sum - action.payload.price
            }

        case DELETE_ITEMS_GROUP:
            return {
                ...state,
                items: state.items.filter(item => item[0].name !== action.payload.name),
                sum: state.sum - action.payload.sum
            }

        case CLEAN_CART:
            return {
                ...state,
                items: [],
                sum: 0
            }

        default:
            return state
    };
};

export const addCardItem = obj => ({ type: ADD_CART_ITEM, payload: obj });
export const deleteCartItem = obj => ({ type: DELETE_CART_ITEM, payload: obj });
export const deleteItemsGroup = val => ({ type: DELETE_ITEMS_GROUP, payload: val });
export const cleanCart = () => ({ type: CLEAN_CART });

export default cardReducer;