import { Text } from '../../components/text';
import { Main } from '../../components/main';
import styles from './styles.module.scss';
import { Title } from '../../components/title';
import img1 from '../../assets/imgs/img_1.svg';
export function Section_1() {
  return (
    <main className={styles.Container}>
      <Main display="flex" alignItems="center">
        <div className={styles.text_Container}>
          <Title
            text="JANYARY BRINGS US FIREFOX 85"
            color="white"
            size="huge"
          />
          <Text
            text="To wrap up January, we are proud to bring you the release of Firefox 85. In this version we are bringing you support for the :focus-visible pseudo-class in CSS and associated devtools, and the complete removal of Flash support from Firefox."
            color="white"
            size="small"
          />
        </div>
        <img src={img1} alt="peoples" className={styles.main_Img_1} />
      </Main>
    </main>
  );
}
