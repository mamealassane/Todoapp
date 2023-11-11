import { useDispatch, useSelector } from "react-redux";
import {  updateFilterStatus } from "./redux";

const TasksHeader = (props) => {
  const filterStatus = useSelector((state)=>state.todo.filterStatus)
  const dispatch = useDispatch()
  
 const updateFilter = (e) => {
  dispatch(updateFilterStatus(e.target.value))
   console.log("🚀 ~ file: TasksHeader.js:11 ~ updateFilter ~ updateFilter:", updateFilter)
 };

  return (
    <header>
      <h1>React Todo List</h1>
      <div style={{ maxWidth: '200px' }}>
      <select id="select1" value={filterStatus} onChange={updateFilter}>
        <option value="All">All</option>
        <option value="Done">Done</option>
        <option value="Not">Not</option>
    </select>
      </div>
    </header>
  );
};

export default TasksHeader;
