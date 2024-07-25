import { Link } from '../../components/link';
import { Main } from '../../components/main';
import styles from './styles.module.scss';

export function Section_1() {
  return (
    <main className={styles.Container}>
      <Main>
        <Link text="MERDA" color="white" />
      </Main>
    </main>
  );
}
