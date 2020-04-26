import {useNavigation} from '@react-navigation/native';

export default function useNavigator() {
  const navigation = useNavigation();

  function goTo(screen) {
    const {mobile: screenName} = screen;
    navigation.navigate(screenName);
  }

  function goBack() {
    navigation.goBack();
  }

  return {
    goTo,
    goBack,
  };
}
