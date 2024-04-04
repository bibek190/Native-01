// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, View } from "react-native";
// import Greet from "./components/Greet";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Greet name="bibek" />
//       <Greet name="Clart kent" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// styling==------------

// import { View, Text, StyleSheet } from "react-native";

// export default App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.darkMode}>
//         <Text style={styles.darkModeText}>
//           Style inheritance<Text style={styles.boldText}>InBold</Text>
//         </Text>
//       </View>
//       <View style={[styles.box, styles.lightblueBox, styles.boxShadow]}>
//         <Text>Light green</Text>
//       </View>
//       <View
//         style={[
//           styles.box,
//           styles.lightGreen,
//           styles.boxShadow,
//           styles.androidShadow,
//         ]}
//       >
//         <Text>Lightblue</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   darkMode: {
//     backgroundColor: "black",
//   },
//   darkModeText: {
//     color: "white",
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     padding: 60,
//   },
//   box: {
//     width: 250,
//     height: 250,

//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     margin: 10,
//     borderWidth: 2,
//     borderRadius: 5,
//   },
//   lightblueBox: {
//     backgroundColor: "lightblue",
//   },
//   lightGreen: {
//     backgroundColor: "lightgreen",
//   },
//   boxShadow: {
//     shadowColor: "blue",
//     shadowOffset: {
//       width: 6,
//       height: 6,
//     },
//     shadowOpacity: 0.6,
//     shadowRadius: 4,
//   },
//   androidShadow: {
//     elevation: 20,
//   },
// });

import { StyleSheet, Text, View } from "react-native";
import Box from "./components/Box";

export default App = () => {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "aqua" }}>Box1</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box2</Box>
      <Box style={{ backgroundColor: "green" }}>Box3</Box>
      <Box style={{ backgroundColor: "blue" }}>Box4</Box>
      <Box style={{ backgroundColor: "purple" }}>Box5</Box>
      <Box style={{ backgroundColor: "pink" }}>Box6</Box>
      <Box style={{ backgroundColor: "gold" }}>Box7</Box>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 80,
    borderWidth: 6,
    borderColor: "red",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
});
