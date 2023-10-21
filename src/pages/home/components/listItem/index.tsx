import { Trash2 } from 'lucide-react';
import styles from './styles.module.scss';
import { useTodosStore } from '@/store';

interface ListItemProps {
  todo: {
    id: string;
    content: string;
    isCompleted: boolean;
  };
}

export function ListItem({ todo }: ListItemProps) {
  const { toggleTodo, removeTodo } = useTodosStore();

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <p>{todo.content} </p>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        <Trash2 size={20} />
      </button>
    </div>
  );
}
