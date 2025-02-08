import { Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps } from "./CustomButton.interface";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: "#318ce7",
        borderRadius: 10,
        minWidth: 120,
      }}
      onPress={onPress}
      {...rest}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 24,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
