import { titleProps } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';
export function Title({
  text,
  size = 'large',
  color = 'primaryColor',
}: titleProps) {
  const sizeClass = size ? styles[size] : '';
  const colorClass = color ? styles[color] : '';
  return (
    <h1 className={`${styles.Title} ${sizeClass} ${colorClass}`}>{text}</h1>
  );
}
