import React from "react";

import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";

import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { ImageBackground, Text, View, FlatList } from "react-native";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Gus#4720",
      avatar_url: "https://github.com/GuAugLop.png",
      status: "online",
    },
    {
      id: "2",
      username: "Whojj#7715",
      avatar_url:
        "https://cdn.discordapp.com/avatars/255840840042283009/3b6d6afc32a2fab558ba70ccc9c4f729.png?size=128",
      status: "offline",
    },
    {
      id: "3",
      username: "respect#7593",
      avatar_url:
        "https://cdn.discordapp.com/avatars/344217268646969345/ee75cd0cf3e854346175aac6f2a98264.png?size=128",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar no challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subTitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
