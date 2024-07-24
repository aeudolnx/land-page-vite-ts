import { h1Props } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';
export function H1({ text, size = 'large' }: h1Props) {
  const sizeClass = size ? styles[size] : '';
  return <h1 className={`${styles.h1} ${sizeClass}`}>{text}</h1>;
}
