import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../../store/actions';
import styles from './Like.module.scss';

function Likes(props) {
  return (
    <div className={styles.ButtonControls}>
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {

  const { likesReducer } = state;
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
