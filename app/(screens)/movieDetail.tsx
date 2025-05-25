import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import {
  fetchMovieCredits,
  fetchMovieDetail,
  fetchSimilarMovie,
  image500,
} from "@/api";
import { h, w } from "@/constants/Screen";
import { LinearGradient } from "expo-linear-gradient";
import Loader from "@/components/Loader";
import Actors from "@/components/MovieDetail/Actors";
import ScrollCard from "@/components/ScrollCard";
export default function MovieDetail() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [isFavourite, setIsFavourite] = useState(false);
  const [detail, setDetail] = useState<any>({});
  const [credits, setCredits] = useState<any[]>([]);
  const [similar, setSimilar] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovieDetail();
    getMovieCredits();
    getSimilarMovie();
  }, [id]);

  const getMovieDetail = async () => {
    const data = await fetchMovieDetail(+id);
    setDetail(data);
    setLoading(false);
  };
  const getMovieCredits = async () => {
    const data = await fetchMovieCredits(+id);
    setCredits(data.cast);
  };
  const getSimilarMovie = async () => {
    const data = await fetchSimilarMovie(+id);
    setSimilar(data.results);
  };
  return (
    <ScrollView className="flex-1 bg-slate-900">
      <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
        <StatusBar backgroundColor={"transparent"} />
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
        <View className="">
          <Image
            source={{ uri: image500(detail?.poster_path) ?? "" }}
            style={{ width: w, height: h * 0.5 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width: w, height: h * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      )}
      <View className="flex gap-y-4 items-center -mt-10">
        <Text className="text-white text-4xl space-x-4 font-bold tracking-widest text-center">
          {detail?.title}
        </Text>
        <Text className="text-stone-400 text-xl">
          {detail.status} • {detail?.release_date?.split("-")[0]} •{" "}
          {detail?.runtime} min
        </Text>
        <View className="flex-row">
          {detail?.genres?.map(
            (item: { id: number; name: string }, idx: number) => (
              <Text key={item?.id} className="text-stone-400 text-xl text-bace">
                {item?.name}
                {detail.genres.length !== idx + 1 ? " • " : null}
              </Text>
            )
          )}
        </View>
        <Text className="text-neutral-400 tracking-wide mx-4">
          {detail.overview}
        </Text>
      </View>
      {detail.id && credits.length > 0 && (
        <Actors data={credits} title={"Actors"} />
      )}
      {detail.id && similar.length > 0 && (
        <ScrollCard data={similar} title={"Similar movies"} />
      )}
    </ScrollView>
  );
}
