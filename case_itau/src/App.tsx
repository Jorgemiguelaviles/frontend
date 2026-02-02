import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from "./application/routes";
import MoldeSystem from "./interfaces/components/MoldeSystem";

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
