import Form from "./components/Form";
import { useEffect, useMemo } from "react";
import ActivityList from "./components/ActivityList";
import CalorieTracker from './components/CalorieTracker';
import { useActivity } from "./hooks/useActivity";

function App() {
  const {state, dispatch} = useActivity()
  
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = useMemo(
    () => () => state.activities.length,
    [state.activities]
  );

  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className=" text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
          <button
            className=" bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: "restart-app" })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section className=" bg-lime-500 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
      <section className=" bg-gray-800 p-10 ">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker/>
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList />
      </section>
    </>
  );
}

export default App;