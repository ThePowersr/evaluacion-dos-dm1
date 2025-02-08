import React from "react";
import { Image, View } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import { ScreenNavigationProp } from "../types/types";

const Screen2 = ({
  navigation,
}: {
  navigation: ScreenNavigationProp<"Screen2">;
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
          uri: "https://netcontent.tech/wp-content/uploads/2019/07/minimalart-netcontent-el-movil-el-nuevo-estandard.jpg",
        }}
        style={{ width: "50%", height: 200 }}
      />
      <CustomButton title="Regresar" onPress={() => navigation.pop()} />
    </View>
  );
};

export default Screen2;
