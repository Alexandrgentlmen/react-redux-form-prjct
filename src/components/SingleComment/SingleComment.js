import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from '../../store/actions';
import styles from './SingleComment.module.scss';

function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id))
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  }

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  return (
      <form onSubmit={handleUpdate} className={styles.Comment}>
        <div onClick={handleDelete} className={styles.CommentDelete}>&times;</div>
        <input type='text' value={commentText} onChange={handleInput}/>
        <input type='submit' hidden />
      </form>
  )
}

export default SingleComment;
