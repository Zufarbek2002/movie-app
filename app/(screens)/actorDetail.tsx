import { fetchPersonDetail, fetchPersonMovies, image342 } from "@/api";
import Loader from "@/components/Loader";
import ScrollCard from "@/components/ScrollCard";
import { h, w } from "@/constants/Screen";
import { PersonI } from "@/types/Actors";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActorDetail() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [person, setPerson] = useState<PersonI | null>(null);
  const [personMovies, setPersonMovies] = useState([]);

  useEffect(() => {
    getPersonDetail();
    getPersonMovies();
  }, [id]);

  const getPersonDetail = async () => {
    const data = await fetchPersonDetail(+id);
    setPerson(data);
    setLoading(false);
  };
  const getPersonMovies = async () => {
    const data = await fetchPersonMovies(+id);
    setPersonMovies(data.cast);
  };
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
      className="flex-1 bg-slate-900"
    >
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
      {loading ? (
        <Loader />
      ) : (
        <View>
          <View
            className="flex-row justify-center "
            style={
              Platform.OS === "ios"
                ? {
                    shadowColor: "gray",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 1,
                    shadowRadius: 40,
                  }
                : {
                    elevation: 10,
                  }
            }
          >
            <View className="items-center rounded-full overflow-hidden w-80 h-80 border-2 border-neutral-500">
              <Image
                source={{ uri: image342(person?.profile_path) ?? undefined }}
                style={{ width: w * 0.74, height: h * 0.43 }}
              />
            </View>
          </View>
          <Text className="text-white text-3xl font-bold text-center my-2">
            {person?.name}
          </Text>
          <Text className="text-neutral-400 text-base text-center">
            {person?.place_of_birth}
          </Text>

          <View className="mx-4 my-6 bg-neutral-700 flex-row justify-between p-4 rounded-full">
            <View className="text-center border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Gender</Text>
              <Text className="text-neutral-400">
                {person?.gender == 1 ? "Female" : "Male"}
              </Text>
            </View>
            <View className="text-center border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Birthday</Text>
              <Text className="text-neutral-400">{person?.birthday}</Text>
            </View>
            <View className="text-center border-r-2 border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Known for</Text>
              <Text className="text-neutral-400">
                {person?.known_for_department}
              </Text>
            </View>
            <View className="text-center px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-400">
                {person?.popularity?.toFixed(2)}%
              </Text>
            </View>
          </View>
          <View className="mx-4 my-2 space-y-2">
            <Text className="text-white font-bold text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              {person?.biography}
            </Text>
          </View>

          {person?.id && personMovies.length > 0 && (
            <ScrollCard data={personMovies} title="Movies" />
          )}
        </View>
      )}
    </ScrollView>
  );
}
