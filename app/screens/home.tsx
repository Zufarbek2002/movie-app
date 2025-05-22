import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function Home() {
  return (
    <View className="flex-1 bg-slate-900">
      <SafeAreaView>
        <StatusBar barStyle={"light-content"} />
        <View className="my-2 mx-5 flex flex-row justify-between items-center">
          <View className="flex flex-row items-center gap-1">
            <Image
              source={require("@/assets/images/logo.jpg")}
              className="w-[40px] h-[40px] rounded-lg"
            />
            <Text className="text-white text-4xl">Kino Sifat</Text>
          </View>
          <MagnifyingGlassIcon color={"white"} size={30} strokeWidth={2} />
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10}}>

      </ScrollView>
    </View>
  );
}
