import { ScrollView } from "react-native";
import { sharedContainerStyles } from "../utils/sharedStyles";
import { MainListItem, ReplyListItem } from "./CastListItem";

export default function Cast(): JSX.Element {
  return (
    <ScrollView style={[sharedContainerStyles.container]}>
      <MainListItem />
      <ReplyListItem />
    </ScrollView>
  );
}
