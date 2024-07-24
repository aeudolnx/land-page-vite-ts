import { textProps } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';
export function Text({
  text,
  size = 'small',
  color = 'mediumGrey',
}: textProps) {
  const sizeClass = size ? styles[size] : '';
  const colorClass = color ? styles[color] : '';
  return <p className={`${styles.h1} ${sizeClass} ${colorClass}`}>{text}</p>;
}
