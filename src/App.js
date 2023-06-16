import { AppBar, Toolbar } from "@mui/material";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
  useNavigate,
} from "react-router-dom";

import './App.css'
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";
import { NoticeSnackbar } from "./components/NoticeSnackbar";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            to="/main"
            className="items-center font-bold select-none self-stretch flex  mr-auto ml-auto"
          >
            To Do List
          </NavLink>
          {location.pathname == "/main" && (
            <NavLink
              to="/write"
              className="select-none self-stretch flex items-center"
            >
              {/* 플러스버튼 */}
              <div className="plus1"></div>
              <div className="plus2"></div>
            </NavLink>
          )}
          {location.pathname != "/main" && (
            <span
              to="/main"
              className="select-none self-stretch  items-center cursor-pointer column"
              onClick={() => navigate(-1)}
            >
              {/* 메뉴버튼 */}
              <div className="menu1"></div>
              <div className="menu2"></div>
              <div className="menu3"></div>
            </span>
          )}
        </Toolbar>
      </AppBar>
      <NoticeSnackbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;