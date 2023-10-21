import { Trash2 } from 'lucide-react';
import styles from './styles.module.scss';

export function ListItem() {
  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash2 size={20} />
      </button>
    </div>
  );
}
