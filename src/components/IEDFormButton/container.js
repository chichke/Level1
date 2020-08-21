import React from "react";
import { Button, View } from "react-native";
import { styles } from "./styles";
export default ({ disabled, onPress }) => {
  return (
    <View style={styles.container}>
      <Button disabled={disabled} onPress={onPress} title={"Connect"} />
    </View>
  );
};
