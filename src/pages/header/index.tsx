import { Text } from '../../components/text';
import { Title } from '../../components/title/index';
import styles from './styles.module.scss';

export function Header() {
  return (
    <main className={styles.Container}>
      <Title text="Hello Wrld 999!" size="large" />
      <Text text="Testing styles" color="secondaryColor" size="small" />
    </main>
  );
}
