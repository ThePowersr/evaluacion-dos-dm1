import React from "react";
import { Image, View } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import { ScreenNavigationProp } from "../types/types";

const Screen3 = ({
  navigation,
}: {
  navigation: ScreenNavigationProp<"Screen3">;
}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Image
        source={{
          uri: "https://www.mytaskpanel.com/wp-content/uploads/2024/01/03-blog.webp",
        }}
        style={{ width: "50%", height: 200 }}
      />
      <CustomButton title="Regresar" onPress={() => navigation.pop()} />
    </View>
  );
};

export default Screen3;
