export default function reducer(state={
  categories: ['random'],
  foo: ""
}, action) {
  switch (action.type) {
    case 'ADD_CATEGORY':
      console.log("this is the add category reducer: ", action.payload.category);
      return {...state, categories: [...state.categories, action.payload.category]}

    case "FETCH_CATEGORIES":
      console.log("yay!", action.payload.money);
      return {...state, foo: "not this", categories: ["bla ", "crapybla"]}

    default:
      return state
  }
}
