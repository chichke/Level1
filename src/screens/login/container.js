import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import validator from "validator";
import IEDFormButton from "../../components/IEDFormButton";
import IEDFormInput from "../../components/IEDFormInput";
import { styles } from "./styles";
export default ({ navigation }) => {
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/g; //Special Char regexp

  const [error, setError] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [disabled, setDisabled] = useState(true);
  
  onLogin = () => {
    navigation.navigate("Logged", { mail: mail }); // Pass the mail value to the Logged View
  };

  useEffect(() => {
    setDisabled(true);

    if (!validator.isEmail(mail)) setError("Invalid mail!");
    else if (validator.isEmpty(pass)) setError("Password is empty!");
    else if (!validator.isLength(pass, { min: 6 }))
      setError("Password too short!");
    else if (!specialChar.test(pass))
      setError("Please add a special char to your password!");
    else {
      setError("");
      setDisabled(false);
    }
  }, [mail, pass]); // Update when mail or pass changes

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Level 1</Text>
      <IEDFormInput value={mail} setValue={setMail} type={"emailAddress"} />
      <IEDFormInput value={pass} setValue={setPass} type={"password"} secure />
      <Text style={styles.error}>{error}</Text>
      <IEDFormButton onPress={onLogin} disabled={disabled} />
    </SafeAreaView>
  );
};
