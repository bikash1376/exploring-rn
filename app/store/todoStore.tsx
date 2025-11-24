import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

// -----------------------------
// Types
// -----------------------------

export interface Todo {
  id: number;
  text: string;
  valued: string;
}

interface TodoState {
  todos: Todo[];

  addTodo: (text: string, valued: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string, newValued: string) => void;
}

// -----------------------------
// Store
// -----------------------------

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text, valued) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, valued }],
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),

      editTodo: (id, newText, newValued) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, text: newText, valued: newValued } : t
          ),
        })),
    }),

    {
      name: "todo-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
