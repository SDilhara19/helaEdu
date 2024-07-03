const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case "light":
      return state;
      break;

    default:
      break;
  }
};
