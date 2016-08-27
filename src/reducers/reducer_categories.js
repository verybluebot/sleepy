export default function reducer(state={
  categories: ['first one'],
  categoryModalNewVisible: false,
  categoryModalUpdateVisible: false
}, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {...state, categories: [...state.categories, action.payload.category]}
    case "FETCH_CATEGORIES":
      return {...state, foo: "bar", categories: ["bla ", "testing"]}
    case 'UPDATE_CATEGORY':
      return {...state, }
    case "DELETE_CATEGORY":
      return {...state, categories: [...state.categories.slice(0, action.payload.index).concat(...state.categories.slice(action.payload.index + 1))]}
    case "IS_VISIBLE_CATEGORY_MODAL_NEW":
      return {...state, categoryModalNewVisible: action.payload.categoryModalNewVisible}
    case "IS_VISIBLE_CATEGORY_MODAL_UPDATE":
      return {...state, categoryModalUpdateVisible: action.payload.categoryModalUpdateVisible}
    case "SET_MODAL_TYPE_CATEGORIES":
      return {...state, modalType: action.payload.title, modalIndexUpdate: action.payload.index}
    default:
      return state
  }
}
