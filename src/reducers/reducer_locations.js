export default function reducer(state={
  locations: [{
    name: "park",
    address: "in the park",
    category: "first one",
    coordinates:" 34.232, 22.35235235"
  }],
  locationModalNewVisible: false,
  locationModalUpdateVisible: false
}, action) {
  switch(action.type){
    case "IS_VISIBLE_LOCATION_MODAL_NEW":
      return {...state, locationModalNewVisible: action.payload.locationModalNewVisible}
    case "IS_VISIBLE_LOCATION_MODAL_UPDATE":
      return {...state, locationModalUpdateVisible: action.payload.locationModalUpdateVisible}
    case "ADD_LOCATION":
    return {...state, locations: [...state.locations, action.payload.location]}
    case "DELETE_LOCATION":
      return {...state, locations: [...state.locations.slice(0, action.payload.index).concat(...state.locations.slice(action.payload.index + 1))]}

  }
  return state

}
