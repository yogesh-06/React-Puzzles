import React, { useState } from "react";

const data = {
  "Organize closet": [
    { "Donate old clothes and shoes": false },
    { "Buy new shelf": false },
    { "Put in shelf by color": false },
  ],
  "Finish homework": [
    { "Finish math homework": false },
    { "Finish science homework": false },
    { "Finish Reactjs homework": false },
  ],
  "Achieve nirvana": [
    { "Meditate a little": false },
    { "Gain some wisdom": false },
  ],
};

const TodoOrg = () => {
  const [list, setList] = useState(data);

  const isComplete = (task, id, rc) => {
    const allTasks = { ...list };
    allTasks[task][id][rc] = !allTasks[task][id][rc];
    setList(allTasks);
  };

  return (
    <>
      {Object.entries(list).map(([task, subtasks]) => {
        return (
          <>
            <h5>{task}</h5>
            <p>
              <AllSubTasks
                task={task}
                subtasks={subtasks}
                isComplete={isComplete}
              />
            </p>
          </>
        );
      })}
    </>
  );
};
export default TodoOrg;

const AllSubTasks = ({ task, subtasks, isComplete }) => {
  return (
    <>
      {subtasks.map((subtask, id) => {
        const rc = Object.entries(subtask)[0];

        if (!subtask[rc])
          return <p onClick={() => isComplete(task, id, rc)}>{rc} </p>;
      })}
      <hr />
      {subtasks.map((subtask, id) => {
        const rc = Object.entries(subtask)[0];

        if (subtask[rc]) {
          return <p onClick={() => isComplete(task, id, rc)}>{rc} </p>;
        }
      })}
    </>
  );
};
