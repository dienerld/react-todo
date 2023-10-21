import { PlusCircle } from 'lucide-react';
import styles from './styles.module.scss';
import { useState } from 'react';
import { useTodosStore } from '@/store/';

export function CreateTodo() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodosStore();

  function handleCreateTodo() {
    addTodo(todo);
    setTodo('');
  }

  return (
    <section className={styles.inputWrapper}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="button" onClick={handleCreateTodo}>
        <PlusCircle size={20} />
        Criar
      </button>
    </section>
  );
}
