import React from "react";

import { Image } from "react-native";
import { styles } from "./styles";

type Props = {
  uri?: string;
};

export function GuildIcon({
  uri = "https://icon-library.com/images/what-is-the-discord-icon/what-is-the-discord-icon-18.jpg",
}: Props) {
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
