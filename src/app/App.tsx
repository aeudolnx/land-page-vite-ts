import { Main } from '../components/main';
import { Header } from '../pages/header';
import { Section_1 } from '../pages/section_1';
import styles from './styles.module.scss';

export function App() {
  return (
    <main className={styles.Container}>
      <Header />
      <Section_1 />
    </main>
  );
}
