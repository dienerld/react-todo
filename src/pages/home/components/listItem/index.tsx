import { Trash2 } from 'lucide-react';
import styles from './styles.module.scss';

interface ListItemProps {
  todo: {
    id: string;
    content: string;
    isCompleted: boolean;
  };
}

export function ListItem({ todo }: ListItemProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" checked={todo.isCompleted} />
      <p>{todo.content} </p>
      <button>
        <Trash2 size={20} />
      </button>
    </div>
  );
}
