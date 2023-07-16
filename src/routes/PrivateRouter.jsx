import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import loadingScreen from "../assets/loading/loading.gif";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useContext(AuthContext);

  const loading = false;
  const user = true;

  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <img src={loadingScreen} alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
