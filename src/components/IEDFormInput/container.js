import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export default ({ setValue, value, type, secure }) => {
  return (
    <>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        textContentType={type}
        secureTextEntry={secure}
      />
    </>
  );
};
