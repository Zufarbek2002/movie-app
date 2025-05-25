import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useRoute, RouteProp } from "@react-navigation/native";
import { MovieI } from "@/types/Movie";

export default function MovieDetail() {
  const navigation = useNavigation();
  const { params: item } =
    useRoute<RouteProp<Record<string, MovieI>, string>>();
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* <View className="w-full"> */}
      <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color={"white"} strokeWidth={3} size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavourite((prev) => !prev)}>
          <HeartIcon
            color={isFavourite ? "red" : "white"}
            strokeWidth={3}
            size={30}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View className="justify-center items-center">
        <Text className="text-white">{item?.title}</Text>
      </View>
      {/* </View> */}
    </ScrollView>
  );
}
