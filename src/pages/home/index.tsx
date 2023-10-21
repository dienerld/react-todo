import { PlusCircle } from 'lucide-react';
import styles from './styles.module.scss';
import Rocket from '@/assets/rocket.svg';
import { EmptyList } from './components/emptyList';
import { ListItem } from './components/listItem';

export function Home() {
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
        <section className={styles.inputWrapper}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            <PlusCircle size={20} />
            Criar
          </button>
        </section>

        <section className={styles.todos}>
          <div className={styles.todosHeader}>
            <p>
              Minhas tarefas <span>3</span>
            </p>
            <p>
              Minhas tarefas <span>1 de 3</span>
            </p>
          </div>
          <div className={styles.todosContent}>
            <ListItem />
            <EmptyList />
          </div>
        </section>
      </div>
    </main>
  );
}
