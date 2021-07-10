import React from "react";
import { styles } from "./styles";

import { View, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { useNavigation } from "@react-navigation/native";

const appointments = [
  {
    id: "1",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description:
      "É hoje que vamos chegar no challenger sem perder uma partida da md10",
  },
  {
    id: "2",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description:
      "É hoje que vamos chegar no challenger sem perder uma partida da md10",
  },
];

export function Home() {
  const [category, setCategory] = React.useState("");
  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        <View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>

        <ListHeader title="Partidas agendadas" subTitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment onPress={handleAppointmentDetails} data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matchs}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </View>
    </Background>
  );
}
