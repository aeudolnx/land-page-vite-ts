import { mainProps } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';

export function Main({ children }: mainProps) {
  return <main className={styles.Container}>{children}</main>;
}
