import React, { useState } from "react";
import notesImage from "../images/notes.png";
import doublrTick from "../images/double-tick.png";
import plus from "../images/plus.png";
import { useDispatch } from "react-redux";
import { added, allcompleted, clearcompleted } from "../redux/todos/action";
const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodos = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const completeAll = () => {
    dispatch(allcompleted());
  };
  const clearAll = () => {
    dispatch(clearcompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleAddTodos}
      >
        <img src={notesImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          onChange={handleInput}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doublrTick} alt="Complete" />
          <span onClick={completeAll}>Complete All Tasks</span>
        </li>
        <li onClick={clearAll} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
