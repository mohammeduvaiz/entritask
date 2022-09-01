import './App.scss';
import { NewsArticle, BreakingNews, Navbar } from './container'
function App() {
  return (
    <div className="App">
      <Navbar />
      <BreakingNews />
      <NewsArticle />
    </div>
  );
}

export default App;
