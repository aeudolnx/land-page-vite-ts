import { mainProps } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';

export function Main({ children, display = '', alignItems = '' }: mainProps) {
  const displayClass = display ? styles[display] : '';
  const alignItemsClass = display ? styles[alignItems] : '';
  return (
    <main
      className={`${styles.main_Container} ${displayClass} ${alignItemsClass}`}
    >
      {children}
    </main>
  );
}
