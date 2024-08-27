import { useState, createContext } from "react";
import ToDoListWithToolbar from "./components/todo/ToDoListWithToolbar";
import { TodosDataProvider } from "./contexts/ToDosDataContext";
import ToDoManager from "./components/todo/ToDoManager";
import Layout from "./components/layout/Layout";

export const ThemeContext = createContext({});

const App = () => {
  const [displayStatus, setDisplayStatus] = useState("all"); // all, pending, completed
  const [important, setImportant] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const value = {
    darkTheme: darkTheme,
    toggleTheme: toggleTheme,
  };
  return (
    <TodosDataProvider>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        <Layout toggleTheme={toggleTheme} darkTheme={darkTheme}>
          <ToDoListWithToolbar
            displayStatus={displayStatus}
            setDisplayStatus={setDisplayStatus}
            import={important}
            setImportant={setImportant}
            searchText={searchText}
            setSearchText={setSearchText}
          >
            <ToDoManager
              displayStatus={displayStatus}
              important={important}
              searchText={searchText}
              // darkTheme={darkTheme} Removed this because it is used easily using themeContext
            />
          </ToDoListWithToolbar>
        </Layout>
      </ThemeContext.Provider>
    </TodosDataProvider>
  );
};
export default App;
