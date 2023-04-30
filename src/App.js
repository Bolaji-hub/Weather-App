import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Input from "./components/Input";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-slate-600 to-gray-300 h-fit shadow-xl shadow-cyan-50">
      <TopButtons />
      <Input />
    </div>
  );
}

export default App;
