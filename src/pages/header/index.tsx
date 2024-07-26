import { Link } from '../../components/link';
import { Menu } from '../../components/menu';
import { Title } from '../../components/title/index';
import styles from './styles.module.scss';

export function Header() {
  return (
    <main className={styles.Container}>
      <div className={styles.ContainerMain}>
        <Title text="LOGO" size="large" />
        <Menu>
          <div>
            <Link text="Intro" color="secondaryColor" size="small" />
            <Link text="Grid-one" color="secondaryColor" size="small" />
            <Link text="Gallery" color="secondaryColor" size="small" />
            <Link text="Contact" color="secondaryColor" size="small" />
          </div>
        </Menu>
      </div>
    </main>
  );
}
