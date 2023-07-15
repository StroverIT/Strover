import React from 'react';
import { useState } from 'react';

// {
//     list.length > 1 ? "hover:bg-primary-350" : ""
//   }
const DropDown = ({

    list = [],
    listValue,
    listHandler,
    listNameOnly,
    name,
    color,
}) => {
    const [dropOpen, setDropOpen] = useState(false);

    const setDropHandler = () => {
      if (!listNameOnly) {
        setDropOpen(!dropOpen);
      }
    };
    const dropHandler = (data) => {
      setDropOpen(false);
      listHandler(data);
    };
    return (
            <div className="relative flex-col w-full flex-center">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className={`$ text-black  border border-[#dadce0]   bg-white focus:ring-4 focus:outline-none focus:ring-blue-50  rounded-lg xl:text-lg max-xl:px-2 xl:px-4 py-2.5 flex items-center xl:justify-between  dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 w-full`}
                type="button"
                style={{ backgroundColor: color }}
                onClick={setDropHandler}
              >
                <input  name={name} value={listValue.listValue || listValue.name} className='hidden'/>
                {listValue.listValue || listValue.name}
                {!listNameOnly && (
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </button>
              {dropOpen && (
                <div
                  id="dropdown"
                  className="absolute z-10 w-full overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow-2xl top-12 dark:bg-gray-700 max-h-56"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {list.map((data) => {
                      return (
                        <li
                          key={data._id}
                          className="block px-4 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={() =>
                            dropHandler({ name: data.name, _id: data._id })
                          }
                        >
                          {data.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          
    );
}

export default DropDown;
