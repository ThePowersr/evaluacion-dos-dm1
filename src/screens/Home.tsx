import { View } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../navigator/Navigator";

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          gap: 10,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "90%", flexDirection: "row", gap: 10 }}>
          <CustomButton
            title="Imagen 1"
            onPress={() => navigation.navigate("Screen2")}
          />
          <CustomButton
            title="Imagen 2"
            onPress={() => navigation.navigate("Screen3")}
          />
        </View>
        <View style={{ width: "90%", flexDirection: "row", gap: 10 }}>
          <CustomButton
            title=">="
            onPress={() => navigation.navigate("Screen4")}
          />
          <CustomButton
            title="<="
            onPress={() => navigation.navigate("Screen5")}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
