import logo from './logo.svg';
import './App.css';
import { HomePage } from './HomePageNavBar/HomePage';
import { BrowserRouter as Router } from "react-router-dom"
import { TeacherApplicationView } from './TeacherSide/TeacherApplicationView';
import { Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <HomePage></HomePage>
      <Route exact path="/teacher" render={
        props => <TeacherApplicationView {...props} />
      } />
    </div>
  );
}

export default App;
