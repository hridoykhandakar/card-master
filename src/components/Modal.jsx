import { useState } from "react";

const Modal = ({
  title = "This is Title",
  setValue,
  setEdit,
  value,
  type = "number",
}) => {
  const [inputValue, setInputValue] = useState(value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "number") {
      setValue(Math.floor(inputValue));
    } else {
      setValue(inputValue);
    }
    setEdit(false);
  };
  return (
    <div
      id="default-modal"
      className="absolute top-0 w-[320px] rounded mt-10 py-5 text-white flex  justify-center items-center"
    >
      <div className=" flex flex-col justify-center ">
        <div className="relative">
          <div className="relative px-4 py-5 bg-white shadow-lg rounded-xl ">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-black">{title}</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        required={true}
                        id="name"
                        name="name"
                        type={type}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <label
                        for="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Team Name
                      </label>
                    </div>
                    <div className="relative">
                      <button className="bg-blue-500 text-white rounded-md px-2 py-1">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
