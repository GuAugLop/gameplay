import React from "react";

import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";

import { GuildIcon } from "../../components/GuildIcon";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { GuildProps } from "../../components/Guild";

export function AppointmentCreate() {
  const [category, setCategory] = React.useState("");
  const [openGuildsModal, setOpenGuildsModal] = React.useState(false);
  const [guild, setGuild] = React.useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasChechBox
            categorySelected={category}
            setCategory={setCategory}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.id && guild.icon && <GuildIcon uri={guild.icon} />}
                {guild.id && !guild.icon && <GuildIcon />}
                {!guild.id && <View style={styles.image} />}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather name="chevron-right" color={theme.colors.heading} />
              </View>
            </RectButton>

            <View style={[styles.field, { marginTop: 35 }]}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.column}>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                  <Text style={styles.divider}> / </Text>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Hora e minuto</Text>
                <View style={styles.column}>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                  <Text style={styles.divider}> : </Text>
                  <SmallInput keyboardType="numeric" maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={[styles.subLabel]}>Max. 100 caracteres</Text>
            </View>
            <TextArea maxLength={100} numberOfLines={5} autoCorrect={false} />

            <View style={styles.footer}>
              <ButtonIcon title="Agendar" icon={false} />
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView closeModal={handleCloseGuilds} visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
