import React from "react";
import { Button, Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export default ({ navigation, route }) => {
  const { width, height } = Dimensions.get("window");

  const isCollab = String(route.params.mail).includes("@inextenso.fr");

  doLogout = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.start}>
        <Image
          source={require("../../../assets/ied-logo.png")}
          width={128}
          style={{ maxWidth: width - 64, maxHeight: height / 2 }}
          height={128}
          resizeMode={"cover"}
        />
        {isCollab && (
          <Text style={styles.textCollab}>Hello Dear Collaborator!</Text>
        )}
      </View>
      <View style={styles.end}>
        <Button title={"Logout"} onPress={doLogout} style={styles.logout} />
      </View>
    </SafeAreaView>
  );
};
