import logo from './logo.svg';
import './App.css';
import { rotateAction } from './Actions/action';
import { connect } from "react-redux";
import { rotateSelector } from './rotateSelector';
 

function App(props) {
  return (
    <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={
              "App-logo" +
              (props.rotating ? "":" App-logo-paused")
            }
            alt="logo"
            onClick={
              () => props.rotateActionProp(!props.rotating)
            }
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

const mapDispatchToProps = dispatch => ({
  rotateActionProp: (payload) => dispatch(rotateAction(payload)),
});


const mapStateToProps = state => ({
  rotating: rotateSelector(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

