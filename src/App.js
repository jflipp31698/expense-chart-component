import { GlobalStyles } from "./components/styles/Global";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  var data = require('./data.json');

  return (
    <>
      <GlobalStyles />
      <ExpenseChart days={data}/>
    </>
  );
}
export default App;
