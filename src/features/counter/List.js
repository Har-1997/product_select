import styles from './List.module.css';
import ListItem from '../../components/listItem/ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getFetch,
  selectCount,
} from './userSlice';
import Pagination from '../../components/pagination/Pagination';


export default function List() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const {users, loading} = useSelector(state => state.user);

  useEffect(()=> {
    let newCount = count -1; 
    if (newCount < 0 || newCount === 0) {
      newCount = "";
    }
    dispatch(getFetch({start: newCount}));
  },[count]);


  let paginationPages = users.total/10;

  if (loading) {
    return <h2>Loading ...</h2>
  }
  return (
    <div className={styles.list}>
      { users.products?.map((item)=> <ListItem key={item.id} item={item} />)}
      <Pagination paginationPages={paginationPages} count={count}/>
    </div>
  );
}
