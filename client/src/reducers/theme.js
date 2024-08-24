const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case "THEME/TOGGLE":
      return state == "light" ? "dark" : "light";
  }
};

export default themeReducer;
