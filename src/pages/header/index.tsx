import { H1 } from '../../components/h1';
import styles from './styles.module.scss';

export function Header() {
  return (
    <main className={styles.Container}>
      <H1 text="Hello Wrld 999!" size="xhuge" />
    </main>
  );
}
