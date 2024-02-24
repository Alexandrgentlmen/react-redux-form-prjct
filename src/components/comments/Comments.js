import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate, commentsLoad } from '../../store/actions';

import styles from './Comments.module.scss';
import SingleComment from "../SingleComment/SingleComment";
import {getUUID} from "../../utils/getUUID";

function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const comments = useSelector(state => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = getUUID();
    dispatch(commentCreate(textComment, id));
  }

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className={styles.CardComments}>
      <form onSubmit={handleSubmit} className={styles.CommentCreate}>
        <input type='text' value={textComment} onChange={handleInput}/>
        <input type='submit' hidden />
      </form>
      {!!comments.length && comments.map(res => {
        return <SingleComment key={res.id} data={res}/>
      })}
    </div>
  )
}

export default Comments;
