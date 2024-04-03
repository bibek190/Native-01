import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isStatusBar, setIsStatusBar] = useState(false);
  return (
    // <View style={styles.container}>
    //   <ScrollView>
    //     <Button
    //       title="Press"
    //       onPress={() => console.log("button pressed")}
    //       color="midnightblue"
    //     />
    //     <Pressable onPress={() => console.log("image pressed")}>
    //       <Image source={logoImg} style={{ width: 300, height: 300 }} />
    //     </Pressable>
    //     <Pressable onPress={() => console.log("text pressed")}>
    //       <Text>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    //         impedit vitae illo! Repudiandae eos aut quaerat quam tempora, dolore
    //         illo consectetur? Dolorem non neque optio, libero maiores,
    //         consequatur corrupti cupiditate ducimus vitae possimus quod ad
    //         voluptas similique dolores blanditiis voluptate laudantium, saepe
    //         pariatur aut iure molestiae dignissimos fugit! Placeat ipsa hic
    //         adipisci laudantium cum magni praesentium possimus. Odio alias
    //         officia repellendus rerum placeat qui molestiae, dolores
    //         reprehenderit minus fugiat ipsum recusandae cumque excepturi animi
    //         aspernatur at eaque est. Pariatur provident quis dignissimos,
    //         laborum, quasi ipsa sequi harum corrupti tenetur recusandae optio
    //         porro. Quae facere dolorem obcaecati dolore vero, recusandae, culpa
    //         nemo eveniet ullam, eos eligendi nulla beatae quas provident amet
    //         esse! Illo, provident! Perferendis, id reprehenderit? Odit quae
    //         delectus impedit ullam iusto. Autem nisi iusto iure delectus libero
    //         reprehenderit omnis aperiam necessitatibus, ut modi nesciunt
    //         corporis, iste aut repellendus, eos voluptates cupiditate quidem
    //         ullam nobis. Minus recusandae pariatur quam labore vero! Architecto
    //         autem consequuntur eos quas corrupti, nostrum neque repellendus
    //         adipisci recusandae maxime. Repellendus error dicta sunt,
    //         temporibus, ipsa sit dolore iusto natus ex id, tenetur nihil
    //         pariatur corporis perferendis velit laborum. Similique natus a
    //         incidunt quaerat velit voluptate, expedita neque, quisquam magni et
    //         voluptatum? Iusto voluptates commodi nobis consequuntur animi
    //         accusamus iste sed quidem corporis voluptatibus enim asperiores,
    //         quam et. Eos aspernatur expedita ducimus et, aliquid rem ex, ut
    //         dolores, quos natus quas! Accusantium eos neque eum nulla cum sint
    //         numquam iure minima ratione eius libero quibusdam, fugiat fugit
    //         molestias ducimus dolorum accusamus. Impedit placeat dicta officia
    //         magni consequatur, culpa, repellat sit voluptate blanditiis, qui
    //         ipsum assumenda. Consectetur voluptas voluptatem dolor culpa,
    //         suscipit quae quis excepturi asperiores aliquid totam vel eligendi
    //         possimus, harum nesciunt animi dolore sapiente est placeat obcaecati
    //         non? Adipisci ex velit animi fugiat repellendus quia a impedit
    //         soluta saepe, nihil aut fugit sint, illum, aliquam est.
    //       </Text>
    //     </Pressable>
    //     <Image source={logoImg} style={{ width: 300, height: 300 }} />
    //   </ScrollView>
    // </View>

    // Modal-------------------

    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Button
    //     title="Press"
    //     onPress={() => setIsModalVisible(true)}
    //     color="midnightblue"
    //   />
    //   <Modal
    //     visible={isModalVisible}
    //     onRequestClose={() => setIsModalVisible(false)}
    //     animationType="slide"
    //     presentationStyle="pageSheet"
    //   >
    //     <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
    //       <Text>Modal content</Text>
    //       <Button
    //         title="Close"
    //         color="midnightblue"
    //         onPress={() => setIsModalVisible(false)}
    //       />
    //     </View>
    //   </Modal>
    // </View>

    // status bar------------------
    // Activity Indicator==------
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" /> */}
      <ActivityIndicator
        size="large"
        color="midnightblue"
        visible={isStatusBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 60,
  },
});
