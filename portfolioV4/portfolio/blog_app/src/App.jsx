import { Route, Routes, Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import Blogs from "./WEBSITE/blogs";
import Layout from "./WEBSITE/component/layout";
import { ROUTES } from "./utils/ROUTES";
import Login from "./WEBSITE/login";

const PrivateRoute = ({ children }) => {
  // Check if the token is in localStorage
  const token = localStorage.getItem("authToken");

  if (!token) {
    // If no token, redirect to the login page
    return <Navigate to={ROUTES.HOMEPAGE} />;
  }

  return children;
};

// Add PropTypes validation for the `children` prop
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate children as a node
};

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOMEPAGE} element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path={ROUTES.BLOGS}
          element={
            <PrivateRoute>
              <Blogs />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
