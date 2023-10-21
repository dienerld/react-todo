import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Todo = {
  id: string;
  content: string;
  isCompleted: boolean;
};

type StoreProps = {
  todos: Todo[];
  addTodo: (content: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};
export const useTodosStore = create(
  persist<StoreProps>(
    (set, get) => ({
      todos: [],
      addTodo: (content) => {
        const newTodo = {
          id: Date.now().toString(),
          content,
          isCompleted: false,
        };
        return set({ todos: [...get().todos, newTodo] });
      },
      removeTodo: (id) =>
        set({ todos: get().todos.filter((todo) => todo.id !== id) }),
      toggleTodo: (id) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          ),
        }),
    }),
    {
      name: 'todos',
    }
  )
);
