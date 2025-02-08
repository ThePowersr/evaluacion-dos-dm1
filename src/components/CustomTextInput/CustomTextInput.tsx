import { FC } from "react";
import { TextInput, View } from "react-native";
import { CustomTextInputProps } from "./CustomTextInput.interface";

const CustomTextInput: FC<CustomTextInputProps> = ({ ...rest }) => {
  return (
    <TextInput
      {...rest}
      style={{ borderWidth: 1, borderRadius: 10, padding: 10, width: 200 }}
    />
  );
};

export default CustomTextInput;
