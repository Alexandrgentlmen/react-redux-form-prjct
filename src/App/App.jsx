import styles from './App.module.css';
import {Spinner} from "../ui/Spinner";
import Comments from "../components/comments/Comments";
import Title from "../components/Title/Title";
import Likes from "../components/Likes/Likes";
import imageSea from  "./../assets/sea.jpg";

export function App() {
  let error = false;

  return(
  <div className={styles.App}>
    <div className={styles.Wrap}>
      <Spinner />
      <div className={styles.Card}>
        {error && (
          <div className={styles.ErrorMessage}>
            {error}
          </div>
        )}
        <div className={styles.CardImage}>
          <img src={imageSea} alt="surfing"/>
          <Title />
          <Likes />
        </div>
        <Comments />
      </div>
    </div>
  </div>)
    ;
}
