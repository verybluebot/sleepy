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
