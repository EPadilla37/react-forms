import React from 'react';

function Todo({ task, removeTodo, index }) {
  const handleRemove = () => {
    removeTodo(index);
  };

  return (
    <div className="todo">
      {task}
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Todo;
