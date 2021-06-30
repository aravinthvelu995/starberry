import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import DropdownContainer from './components/Dropdown/DropdownContainer';
import PreviewContainer from './components/Preview/PreviewContainer';
import Property from './components/Property/Property';

import { Typography } from 'antd';
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/property/:propertyId">
          <Property />
        </Route>
        <Route path="/" exact>
          <Title level={3} className="App-title">Property for Sales</Title>
          <DropdownContainer />
          <PreviewContainer />
        </Route>
        <Route path="*">
          <Redirect to="./" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
