import { useReducer } from "react";
import { initialState, reducer } from "./state/reducer";

const LongForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-auto">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={submit}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            style={{ border: "1px solid red" }}
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            style={{ border: "1px solid red" }}
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            style={{ border: "1px solid red" }}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Gender</h1>
          <div className="flex gap-3">
            <div>
              <input
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                style={{ border: "1px solid red" }}
                type="radio"
                id="male"
                name="gender"
                value="male"
              />
              <label className="ml-2 text-lg" htmlFor="male">
                Male
              </label>
            </div>
            <div>
              <input
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                style={{ border: "1px solid red" }}
                type="radio"
                id="female"
                name="gender"
                value="female"
              />
              <label className="ml-2 text-lg" htmlFor="female">
                Female
              </label>
            </div>
            <div>
              <input
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                style={{ border: "1px solid red" }}
                type="radio"
                id="other"
                name="gender"
                value="other"
              />
              <label className="ml-2 text-lg" htmlFor="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="education">
            Education
          </label>
          <select
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            style={{ border: "1px solid red" }}
            name="education"
            id="education"
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="underGrad">Under Graduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3">Number of PCs</label>
          <div className="flex justify-between items-center gap-2 ">
            <button
              onClick={() =>
                dispatch({
                  type: "DECREMENT",
                  payload: { name: "quantity", count: 1 },
                })
              }
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10 "
            >
              -
            </button>
            <div className="border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300">
              <span className="text-lg">{state.quantity}</span>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "INCREMENT",
                  payload: { name: "quantity", count: 1 },
                })
              }
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            style={{ border: "1px solid red" }}
            name="feedback"
            id="feedback"
            cols="30"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex  w-full max-w-xs">
            <input
              onClick={(e) =>
                dispatch({
                  type: "TOGGLE",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              className="mr-3"
              type="checkbox"
              name="term"
              id="terms"
            />
            <label htmlFor="terms">I agree to terms and conditions</label>
          </div>
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
            disabled={!state.term}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
