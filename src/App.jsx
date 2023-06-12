import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./firebase/ThemeProvider/ThemeContext";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;

  return (
    <ThemeProvider>
      <div>
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
