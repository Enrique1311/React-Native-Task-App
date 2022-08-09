import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../GlobalStyles/Colors";

const TaskItem = ({ task, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onPress(task)}>
        <Text
          style={[
            styles.text,
            {
              textDecorationLine:
                task.completed === true ? "line-through" : "none",
              fontStyle: task.completed === true ? "italic" : null,
              opacity: task.completed === true ? 0.3 : 1,
            },
          ]}
        >
          {task.task}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    width: 280,
  },
});
