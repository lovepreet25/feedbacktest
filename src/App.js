import logo from './logo.svg';
import './App.css';
import FeedbbakForms from './FeedbackForms';

function App() {
  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <div className="App">
      <FeedbbakForms onSubmit = {handleSubmit} />
      </div>
  );
}

export default App;
