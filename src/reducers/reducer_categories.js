export default function reducer(state={
  categories: ['random'],
  foo: ""
}, action) {
  if (action.type == "FETCH_CATEGORIES") {
    console.log("yay!", action.payload.money);
    return {...state, foo: "not this", categories: ["bla ", "crapybla"]}
  }

  return state
}
