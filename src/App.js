import './App.css';
import GridHelperController from './components/GridHelperController';
import GridHelperProvider from './hooks/GridHelperContext';
import ThreeCanvas from './ThreeCanvas';

function App() {
  return (
    <div className="App">
      <GridHelperProvider>
        <GridHelperController />
        <ThreeCanvas />
      </GridHelperProvider>
    </div>
  );
}

export default App;
