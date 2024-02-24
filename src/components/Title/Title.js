import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../../store/actions';
import styles from './Title.module.scss';

function Title(props) {
  const text = useSelector(state => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log('handle text >>', e.target.value)
    dispatch(inputText(e.target.value))
  }

  return (
    <div className={styles.cardTitle}>
      <div className={styles.cardTitleTop}>
        <input type='text' onChange={handleChange}/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Title;
