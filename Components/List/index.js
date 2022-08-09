import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../GlobalStyles/Colors";
import TaskItem from "../List/TaskItem";

const List = ({ handleModal, taskList }) => {
  const renderTask = ({ item }) => (
    <TaskItem onPress={handleModal} task={item} />
  );

  return (
    <View style={styles.itemList}>
      {taskList.length !== 0 ? (
        <FlatList
          data={taskList}
          keyExtractor={(task) => task.id}
          renderItem={renderTask}
        />
      ) : (
        <Text style={styles.text}>No hay tareas cargadas.</Text>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: colors.light,
    width: "100%",
    height: "75%",
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});
