import React, { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchTrendingMovie,
} from "@/api";
import Loader from "@/components/Loader";
import CarouselCard from "@/components/CarouselCard";
import ScrollCard from "@/components/ScrollCard";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopRatedMovie();
    getTrendingMovie();
    getPopularMovie();
  }, []);

  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    setTrending(data.results);
    setIsLoading(false);
  };

  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    setTopRated(data.results);
  };

  const getPopularMovie = async () => {
    const data = await fetchPopularMovie();
    setPopular(data.results);
  };
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
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {trending.length > 0 && <CarouselCard data={trending} />}
          {topRated.length > 0 && (
            <ScrollCard data={topRated} title={"Top rated movies"} />
          )}
          {trending.length > 0 && (
            <ScrollCard data={trending} title={"Trending movies"} />
          )}
          {popular.length > 0 && <CarouselCard data={popular} />}
        </ScrollView>
      )}
    </View>
  );
}
