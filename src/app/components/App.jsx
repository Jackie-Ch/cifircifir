import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import PersonalCharacteristics from "./PersonalCharacteristics/PersonalCharacteristics";
import HumanCompatibility from "./HumanCompatibility/HumanCompatibility";
import Layout from "../Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="personal" element={<PersonalCharacteristics />} />
          <Route path="compatibility" element={<HumanCompatibility />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
