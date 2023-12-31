import SingleItem from './SingleItem';
import { useFetchTask } from './ReactQueryCustomHooks';


const Items = ({ items }) => {

  const {isLoading, data, isError} = useFetchTask();

  if (isLoading) {
    return <p style={{marginTop: '1rem'}}>Loading...</p>
  }

  if (isError) {
    return <p style={{marginTop: '1rem'}}>There was an error</p>
  }

  // if(error) {
  //   return <p style={{marginTop: 'rem'}}>{error.message}</p>
  // }

  
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
