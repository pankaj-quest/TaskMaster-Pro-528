import React from 'react';
import { motion } from 'framer-motion';
import { MdDelete, MdCheckCircle, MdRadioButtonUnchecked } from 'react-icons/md';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={`text-2xl ${todo.completed ? 'text-green-500' : 'text-gray-400'}`}
        >
          {todo.completed ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
        </button>
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700 text-xl transition-colors"
      >
        <MdDelete />
      </button>
    </motion.div>
  );
};

export default TodoItem;