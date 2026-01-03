import { Text, View } from "react-native";
// import Onboarding from "./onboarding";
import {Link} from "expo-router";

export default function Index() {
  return (
    <>
    <View className="flex-1 items-center justify-center bg-dark-100">
      <Text className="text-2xl font-extrabold text-red-500">Hii Jaiswal How are You Aditya </Text>
       <Link href="/onboarding" className="text-red-200 font-bold">Go to Onboarding</Link>
       <Link href="/movie/avangers" className="text-red-200 font-bold">Avangers</Link>
    </View>
    {/* <Onboarding /> */}
    
    </>

  );
}
