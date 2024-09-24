import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
    return (
        <div className="flex items-center h-screen justify-center">
            <div className="flex gap-5 justify-center items-center bg-red-300 p-10 rounded-xl">
                <button onClick={() => dispatch(increment())} className="p-5 font-bold text-white bg-green-600 rounded-md">
                    Increment
                </button>
                <p className="text-3xl font-bold ">{count}</p>
                <button onClick={() => dispatch(decrement())} className="p-5 font-bold text-white bg-red-600 rounded-md">
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default App;
