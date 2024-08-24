

React.useEffect(() => {
  const onBackPress = () => {
    Alert.alert(
      'Alerta!',
      'Você quer fazer o Logoff?',
      [
        {
          text: 'Não',
          onPress: () => {
            // Do nothing
          },
          style: 'cancel',
        },
        { text: 'Sim', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: false }
    );

    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    onBackPress
  );

  return () => backHandler.remove();
}, []);