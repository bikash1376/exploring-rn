import { useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTodoStore } from "../store/todoStore";

import { Swipeable } from "react-native-gesture-handler";


export default function TodoScreen() {
  const { todos, addTodo, deleteTodo, editTodo } = useTodoStore();

  const [textd, setTextd] = useState("");
  const [valued, setValued] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  function handleSubmit() {
    if (editingId) {
      editTodo(editingId, textd, valued);
      setEditingId(null);
    } else {
      addTodo(textd, valued);
    }

    setTextd("");
    setValued("");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* INPUTS */}
      <TextInput
        style={styles.input}
        placeholder="Title..."
        placeholderTextColor="#aaa"
        value={textd}
        onChangeText={setTextd}
      />

      <TextInput
        style={styles.input}
        placeholder="Details..."
        placeholderTextColor="#aaa"
        value={valued}
        onChangeText={setValued}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {editingId ? "Save" : "Add"}
        </Text>
      </Pressable>

      {/* TODOS LIST */}
      <View style={{ width: "80%", marginTop: 40 }}>
    {/* @ts-ignore */}
        {todos.map((t) => (
          <Swipeable
            key={t.id}
            renderRightActions={() => (
              <Pressable
                style={styles.deleteBtn}
                onPress={() => deleteTodo(t.id)}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>Delete</Text>
              </Pressable>
            )}
          >
            <Pressable
              style={styles.todoItem}
              onPress={() => {
                setEditingId(t.id);
                setTextd(t.text);
                setValued(t.valued);
              }}
            >
              <Text style={styles.todoText}>
                {t.text}: {t.valued}
              </Text>
            </Pressable>
          </Swipeable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    width: "80%",
    borderWidth: 2,
    borderColor: "#444",
    borderRadius: 6,
    paddingHorizontal: 10,
    color: "white",
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    height: 45,
    width: "80%",
    borderRadius: 6,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  todoItem: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  todoText: {
    color: "white",
    fontSize: 16,
  },
  deleteBtn: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    borderRadius: 6,
    marginBottom: 10,
  },
});
