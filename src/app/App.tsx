import { Posts } from '../pages/posts';
import styles from './styles.module.scss';

export function App() {
  return (
    <main className={styles.Container}>
      <Posts />
    </main>
  );
}
