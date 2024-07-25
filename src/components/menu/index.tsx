import { menuProps } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';
export function Menu({ children }: menuProps) {
  return <nav className={styles.Container}>{children}</nav>;
}
