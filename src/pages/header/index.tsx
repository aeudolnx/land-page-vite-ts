import { H1 } from '../../components/h1';
import styles from './styles.module.scss';

export function Header() {
  return (
    <main className={styles.Container}>
      <H1 text="Vai se fuder" size="xhuge" />
    </main>
  );
}
