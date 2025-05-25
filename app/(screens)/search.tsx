import { fetchSearchMovie, image342 } from "@/api";
import Loader from "@/components/Loader";
import { h, w } from "@/constants/Screen";
import { SearchDetailI } from "@/types/SearchDetail";
import { useRouter } from "expo-router";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [results, setResults] = useState<SearchDetailI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearch = (text: string) => {
    if (text && text.length > 3) {
      setIsLoading(true);
      fetchSearchMovie({
        query: text,
        include_adult: false,
        page: "1",
      }).then((data) => {
        setIsLoading(false);
        setResults(data.results);
      });
    } else {
      setResults([]);
      setIsLoading(false);
    }
  };
  const handleTextDobounce = useCallback(debounce(handleSearch, 400), []);

  const handleTextChange = (text: string) => {
    setSearchText(text);
    handleTextDobounce(text);
  };

  const clearSearch = () => {
    setSearchText("");
    setResults([]);
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="flex-row justify-between items-center border border-neutral-400 mx-4 rounded-full p-2 mb-2 -mt-5">
        <TextInput
          value={searchText}
          onChangeText={handleTextChange}
          placeholder="Search..."
          placeholderTextColor={"gray"}
          className="text-white text-base font-semibold tracking-wide w-[85%]"
        />
        <TouchableOpacity
          className="bg-neutral-400 rounded-full p-3"
          onPress={clearSearch}
        >
          <XMarkIcon color={"white"} size={25} strokeWidth={2.5} />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <Loader />
      ) : results.length > 0 ? (
        <ScrollView>
          <Text className="text-white text-xl font-semibold tracking-wider mx-4">
            Results({results.length})
          </Text>
          <View className="flex-row flex-wrap justify-between my-2 mx-2">
            {results?.map((item) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  router.push({
                    pathname: "/(screens)/movieDetail",
                    params: { id: item.id },
                  })
                }
                key={item.id}
              >
                <View>
                  <Image
                    source={{ uri: image342(item?.poster_path) ?? undefined }}
                    style={{
                      width: w * 0.45,
                      height: h * 0.4,
                      borderRadius: 10,
                    }}
                  />
                  <Text className="text-white text-lg">
                    {item.title.length > 20
                      ? item.title.slice(0, 20) + "..."
                      : item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      ) : (
        <View className="justify-center">
          <Image
            source={require("@/assets/images/not-found.png")}
            className="h-96 w-96 m-auto"
          />
          <Text className="text-3xl text-white text-center">
            Movies not found
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
