import { CommonActions} from "@react-navigation/native";

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(name, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name,
      params
    })
  );
}


function goBack() {
  navigator.dispatch(CommonActions.goBack());
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack
};
