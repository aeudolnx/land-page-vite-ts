import { linkProps } from '../../interfaces/interfaceGlobal';
import styles from './styles.module.scss';

export function Link({
  text,
  color = 'primaryColor',
  size = 'small',
}: linkProps) {
  const sizeClass = size ? styles[size] : '';
  const colorClass = color ? styles[color] : '';
  return <a className={`${styles.Link} ${sizeClass} ${colorClass}`}>{text}</a>;
}
