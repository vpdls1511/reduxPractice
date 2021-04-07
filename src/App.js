import InputBox from "./component/InputBox";
import Lists from "./component/lists";
import {Provider} from "react-redux";
import store from './redux/store'

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <InputBox/>
              <Lists/>
          </div>
      </Provider>

  );
}

export default App;
