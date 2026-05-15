// App.jsx

import { useState } from "react";
import Input from "./components/Input.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState(null);

  function onClickHandler() {
    if (todo.trim()) {
      setTodos((prev) => [...prev, { id: Date.now(), name: todo }]);
      setTodo("");
    }
  }

  function onDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function onClickHandlerUpdate(id, updatedName) {
    if (!updatedName.trim()) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, name: updatedName } : todo,
      ),
    );

    setUpdateTodo(null);
  }

  return (
    <>
      {updateTodo && (
        <Modal
          updateTodo={updateTodo}
          setUpdateTodo={setUpdateTodo}
          onClickHandlerUpdate={onClickHandlerUpdate}
        />
      )}

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Todo App
          </h1>

          <Input
            todo={todo}
            setTodo={setTodo}
            onClickHandler={onClickHandler}
          />

          <div className="mt-6 flex flex-col gap-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-400">No todos added yet</p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
                >
                  <p className="text-gray-700 break-words">{todo.name}</p>

                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md transition"
                      onClick={() => {
                        setUpdateTodo(todo);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                      onClick={() => onDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
