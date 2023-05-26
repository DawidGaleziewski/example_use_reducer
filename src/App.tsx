import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <input type="email" name="email" placeholder="your email" />
              <select>
                <option>Test 1</option>
                <option>Test 2</option>
              </select>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
