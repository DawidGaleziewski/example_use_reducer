import React, {FC} from "react";
import "./App.css";

function App() {
  return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="bg-white pt-7 pb-10 px-5 rounded w-96">
              <CloseIcon className="ml-auto mb-5 cursor-pointer" />
              <div className="flex justify-between grow-1 mb-5">
                <button className="bg-gray-400 px-2 py-3 rounded-l basis-1/3 border-r-2">Step 1</button>
                <button className="bg-gray-400 px-2 py-3 basis-1/3 border-r-2">Step 2</button>
                <button className="bg-gray-400 px-2 py-3 rounded-r basis-1/3">Step 3</button>
              </div>

              {/*STEP 1*/}
              <h2 className="text-lg font-bold mb-5">Fill up the order</h2>
              <form className="flex flex-col">
                <input className="p-2 mb-5 w-12/12 bg-gray-200 border-b-2 border-slate-700 rounded-t-sm" type="email" name="email" placeholder="your email" />
                <select name="product" className="p-2 mb-5 bg-gray-200 border-b-2 border-slate-700 rounded-t-sm">
                  <option>Test 1</option>
                  <option>Test 2</option>
                </select>
                <input name="quantity" placeholder="quantity" className="p-2 mb-5 bg-gray-200 border-b-2 border-slate-700 rounded-t-sm"/>
                <input className="p-2 rounded-md bg-slate-700 text-white" type="submit" value="send" />
              </form>

              {/*STEP 2 a*/}
              {/*  <h2 className="text-lg font-bold mb-5">Specific step for category clothes</h2>*/}

              {/*STEP 2 b*/}
              {/*  <h2 className="text-lg font-bold mb-5">Specific step for category electronics</h2>*/}

              {/*STEP 3*/}
              {/*  <h2 className="text-lg font-bold mb-5">Summary</h2>*/}
            </div>
          </div>
        </div>
      </div>
  );
}

const CloseIcon:FC<{className: string}> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="15px" height="15px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
export default App;
