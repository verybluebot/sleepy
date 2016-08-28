export const fetchLocations = () => {
  return {
    type: "FETCH_LOCATIONS",
    payload: {
      money: "alot"
    }
  }
}

export const addLocation = (loc) => {
  return {
    type: "ADD_LOCATION",
    payload: {
      location: loc
    }
  }
}

export const delLocation = (i) => {
  return {
    type: "DELETE_LOCATION",
    payload: {
      index: i
    }
  }
}

export const updateLoction = (i, name) => {
  return {
    type: "UPDATE_LOCATION",
    payload: {
      index: i,
      location: name
    }
  }
}

export const LocationModalNewisVisble = (isVisible) => {
  return {
    type: "IS_VISIBLE_LOCATION_MODAL_NEW",
    payload: {
      locationModalNewVisible: isVisible
    }
  }
}

export const LocationModalUpdateisVisble = (isVisible) => {
  return {
    type: "IS_VISIBLE_LOCATION_MODAL_UPDATE",
    payload: {
      locationModalUpdateVisible: isVisible
    }
  }
}

export const setModalType = (title, i) => {
  return {
    type: "SET_MODAL_TYPE_LOCATIONS",
    payload: {
      title: title,
      index: i
    }
  }
}
