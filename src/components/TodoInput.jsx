import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdAdd } from 'react-icons/md';

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center gap-2"
        >
          <MdAdd className="text-xl" />
          Add
        </motion.button>
      </div>
    </form>
  );
};

export default TodoInput;