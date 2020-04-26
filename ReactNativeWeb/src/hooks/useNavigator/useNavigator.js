import {useHistory} from 'react-router';

export default function useNavigator() {
  const history = useHistory();

  function goTo(screen) {
    const {web: path} = screen;
    history.push(path);
  }

  function goBack() {
    history.goBack();
  }

  return {
    goTo,
    goBack,
  };
}
