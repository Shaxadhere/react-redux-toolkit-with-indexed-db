import { useSelector } from "react-redux";

export default function App() {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>{JSON.stringify(userData)}</h2>
      <h2>I am saved in indexed db with redux</h2>
    </div>
  );
}
