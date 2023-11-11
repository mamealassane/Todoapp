import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = (props) => {
  const filterStatus = useSelector((state)=>state.todo.filterStatus)
  const tasks = useSelector((state)=> state.todo.tasks)

  const filterTodoList = tasks.filter((task) => {
    if (filterStatus === 'Done') {
      return task.done === true;
    } else if (filterStatus === 'Not') {
      return task.done === false;
    } else {
      return true; 
    }
  });

  return (
    <>
      {filterTodoList.map((t) => (
        <Task
          task={t}
          key={t.id}

        />
      ))}
    </>
  );
};

export default ListTask;
