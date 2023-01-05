import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import Login from "./Components/LogIn/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import AuthProvider from "./context/AuthProvider";
import Blogs from "./Pages/Blogs/Blogs";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Blog from "./Pages/DashBoard/Blogs/Blog";
import UpdateBlogs from "./Pages/DashBoard/Blogs/UpdateBlogs";
import Contacts from "./Pages/DashBoard/Contact/Contacts";
import MainContent from "./Pages/DashBoard/Content/MainContent";
import DashBoardHome from "./Pages/DashBoard/Home/DashBoardHome";
import Instagram from "./Pages/DashBoard/Instagram/Instagram";
import UpdateInstagram from "./Pages/DashBoard/Instagram/UpdateInstagram";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin/MakeAdmin";
import Orders from "./Pages/DashBoard/Order/Orders";
import Packages from "./Pages/DashBoard/Package/Packages";
import Projects from "./Pages/DashBoard/Projects/Projects";
import UpdateProject from "./Pages/DashBoard/Projects/UpdateProject";
import Slider from "./Pages/DashBoard/Slider/Slider";
import UpdateSlider from "./Pages/DashBoard/Slider/UpdateSlider";
import User from "./Pages/DashBoard/User/User";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reset from "./Shared/Reset";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" />
            <Route
              path="/projects"
              element={
                <RequireAuth>
                  <Project />
                </RequireAuth>
              }
            />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:blogId" element={<BlogDetails />}></Route>
            <Route
              path="/dash-board/blog/update/:blogId"
              element={<UpdateBlogs />}
            ></Route>
            <Route
              path="/dash-board/instagram/update/:instagramId"
              element={<UpdateInstagram />}
            ></Route>
            <Route
              path="/dash-board/project/update/:projectId"
              element={<UpdateProject />}
            ></Route>
            <Route
              path="/dash-board/slider/update/:sliderId"
              element={<UpdateSlider />}
            ></Route>
            <Route
              path="/dash-board"
              element={
                <RequireAuth>
                  <DashBoardHome></DashBoardHome>
                </RequireAuth>
              }
            >
              <Route path="/dash-board/blog" element={<Blog />}></Route>
              <Route path="/dash-board/contact" element={<Contacts />}></Route>
              <Route path="/dash-board/project" element={<Projects />}></Route>
              <Route
                path="/dash-board/instagram"
                element={<Instagram />}
              ></Route>
              <Route path="/dash-board/slider" element={<Slider />}></Route>
              <Route path="/dash-board/user" element={<User />}></Route>
              <Route path="/dash-board/package" element={<Packages />}></Route>
              <Route
                path="/dash-board/main-content"
                element={<MainContent />}
              ></Route>
              <Route path="/dash-board/order" element={<Orders />}></Route>
              <Route path="/dash-board/admin" element={<MakeAdmin />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer position="top-right" autoClose={2000} />
    </QueryClientProvider>
  );
}

export default App;
