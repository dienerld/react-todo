import { ClipboardList } from 'lucide-react';
import styles from './styles.module.scss'
export function EmptyList() {
  return (
    <>
      <div className={styles.todoEmpty}>
        <ClipboardList />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  );
}
