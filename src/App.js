import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Courses } from './component/Courses';
import { Dashboard } from './component/Dashboard';
import { OverView } from './component/OverView';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Row } from 'react-bootstrap';
import { Home } from "./component/Home";
function App() {
  return (
    <div>
      <Router>
        <Row>
          <Col lg={1}><Home /></Col>
          <Col >
            <Switch>
              <Route exact path='/'><Courses /></Route>
              <Route path='/dashboard'><Dashboard /></Route>
              <Route path='/overview'><OverView /></Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
