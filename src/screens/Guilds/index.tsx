import React from "react";

import { View, FlatList } from "react-native";
import { Guild, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "MrBacon",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "SPK",
      icon: "https://cdn.discordapp.com/icons/320362626729246722/36398ae8420a4bf567f3741a8b65a786.png?size=128",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={ListDivider}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
