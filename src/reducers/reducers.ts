import { Actions } from "./actions";
import { Screens } from "./screens";
import { IState, IAction } from "./store";

const initState: IState = {
  displayedScreen: Screens.Index,
  repos: [],
  darkMode:localStorage.getItem("darkMode") === "true" ? true : false,
};

const reducer = (currentState: IState = initState, action: IAction) => {
  switch (action.type) {
    case Actions.SetDisplayedScreen:
      return {
        ...currentState,
        displayedScreen: action.payload,
      };
    case Actions.SetRepos:
      return {
        ...currentState,
        repos: action.payload,
      };
      case Actions.SetDarkMode:
        localStorage.setItem("darkMode", action.payload);
        return {
          ...currentState,
          darkMode: action.payload,
        };
    default:
      return currentState;
  }
};
export default reducer;
