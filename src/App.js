
import "./App.css";
import Navbar from "./Componets/Navbar";
import Header from "./Componets/Header";
import TodoList from "./Componets/TodoList";
import Footer from "./Componets/Footer";
import {Provider} from 'react-redux';
import store from "./redux/store"
function App() {
  return (
    <Provider store={store}>
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />
      
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr class="mt-4" />
        <TodoList />

        <hr class="mt-4" />
        <Footer/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
