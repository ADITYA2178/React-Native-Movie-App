import { Text, View } from "react-native";
// import Onboarding from "./onboarding";
import {Link} from "expo-router";

export default function Index() {
  return (
    <>
    <View className="flex-1 items-center justify-center bg-dark-100">
      <Text className="text-2xl font-extrabold text-red-500">Hii Jaiswal How are You Aditya </Text>
       <Link href="/onboarding">
        <Text className="text-lg font-semibold text-accent">Go to Onboarding</Text>
      </Link>
    </View>
    {/* <Onboarding /> */}
    
    </>

  );
}
