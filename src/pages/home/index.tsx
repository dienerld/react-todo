import styles from './styles.module.scss';
import Rocket from '@/assets/rocket.svg';
import { EmptyList } from './components/emptyList';
import { ListItem } from './components/listItem';
import { useTodosStore } from '@/store';
import { CreateTodo } from './components/createTodo';

export function Home() {
  const { todos } = useTodosStore();
  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.isCompleted).length,
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src={Rocket} className={styles.logo} alt="Rocket" />
        <h1 className={styles.title}>
          <span className={styles.to}>to</span>
          <span className={styles.do}>do</span>
        </h1>
      </header>

      <div className={styles.contentWrapper}>
        <CreateTodo />
        <section className={styles.todos}>
          <div className={styles.todosHeader}>
            <p>
              Minhas tarefas <span>{stats.total}</span>
            </p>
            <p>
              Minhas tarefas{' '}
              <span>
                {stats.completed} de {stats.total}
              </span>
            </p>
          </div>
          <div className={styles.todosContent}>
            {todos.length > 0 ? (
              todos.map((todo) => <ListItem key={todo.id} todo={todo} />)
            ) : (
              <EmptyList />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
