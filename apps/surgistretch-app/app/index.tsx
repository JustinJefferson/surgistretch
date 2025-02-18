import { Text, ScrollView, View } from "react-native";
import { Section } from "@/components/Section";
import { exerciseData } from "@/constants/Data";

export default function Index() {
  return (
    <ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {exerciseData.map((data, index) =>
          <Section
            key={index}
            title={data.title}
            subheading={data.subheading}
            icon={data.icon}
            cards={data.cards}
            category={data.category}
          />
        )}
      </View>
    </ScrollView>
  );
}
