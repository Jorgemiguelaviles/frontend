import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from "./routes";
import MoldeSystem from "./components/moldeSystem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MoldeSystem />}>
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={page.element}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
