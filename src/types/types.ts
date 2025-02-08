import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParam } from "../navigator/Navigator";

export type ScreenNavigationProp<T extends keyof RootStackParam> =
  NativeStackNavigationProp<RootStackParam, T>;
