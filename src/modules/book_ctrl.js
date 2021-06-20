const initialState = {
    arrObjBook: [],
    isEdit: false,
    Idx: '',
};

const book_ctrl = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_OBJ_BOOK': 
        const newArrObjBook = [...state.arrObjBook, {
            book_name: action.inputObjBook.book_name, 
            author: action.inputObjBook.author, 
            book_url: action.inputObjBook.book_url,
            main_content: action.inputObjBook.main_content,
            read_time: action.inputObjBook.read_time,
        }]
        return{ ...state, arrObjBook: newArrObjBook};

        case 'DEL_OBJ_BOOK':
        const filterArrObjBook = state.arrObjBook.filter((item) => item.book_name !== action.book_name);
        return{ ...state, arrObjBook: filterArrObjBook};

        case 'EDIT_OBJ_BOOK':
        const isEdit = !state.isEdit
        const Idx = state.arrObjBook.findIndex(item => item.book_name === action.book_name);
        return{ ...state, isEdit: isEdit, Idx: Idx}

        case 'UPDATE_OBJ_BOOK':

        state.arrObjBook.splice(state.Idx, 1,{
            book_name: action.editValues.book_name,
            author: action.editValues.author,
            book_url: action.editValues.book_url,
            main_content: action.editValues.main_content,
            read_time: action.editValues.read_time,
        });
        const updateArr = [...state.arrObjBook]
        return{ ...state, arrObjBook: updateArr };

        default: return state;
    }
};

export default book_ctrl;