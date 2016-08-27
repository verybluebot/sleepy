export const fetchCategories = () => {
  return {
    type: "FETCH_CATEGORIES",
    payload: {
      money: "alot"
    }
  }
}

export const addCategory = (cat) => {
  return {
    type: "ADD_CATEGORY",
    payload: {
      category: cat
    }
  }
}

export const delCategory = (i) => {
  return {
    type: "DELETE_CATEGORY",
    payload: {
      index: i
    }
  }
}

export const updateCategory = (i, name) => {
  return {
    type: "UPDATE_CATEGORY",
    payload: {
      index: i,
      category: name
    }
  }
}

export const CategotryModalNewisVisble = (isVisible) => {
  return {
    type: "IS_VISIBLE_CATEGORY_MODAL_NEW",
    payload: {
      categoryModalNewVisible: isVisible
    }
  }
}

export const CategotryModalUpdateisVisble = (isVisible) => {
  return {
    type: "IS_VISIBLE_CATEGORY_MODAL_UPDATE",
    payload: {
      categoryModalUpdateVisible: isVisible
    }
  }
}

export const setModalType = (title, i) => {
  return {
    type: "SET_MODAL_TYPE_CATEGORIES",
    payload: {
      title: title,
      index: i
    }
  }
}
