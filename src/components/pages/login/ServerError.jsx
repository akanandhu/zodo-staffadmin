import { useAuth } from "../../../hooks/useAuth";
import { dangericon, error02 } from "../../imagepath";
import { Link } from "react-router-dom";

const ServerError = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="main-wrapper error-wrapper">
        <div className="error-box">
          <img className="img-fluid" src={error02} alt="Logo" />
          <h3>
            <img className="img-fluid mb-0" src={dangericon} alt="Logo" />{" "}
            Internal Server Error
          </h3>
          <p>You do not have permission to view this resource</p>
          <Link  to={user?`${user.user_type === "hsAdmin" && '/' || user.user_type === "staff" && '/appointment'}`:"/login"} className="btn btn-primary go-home">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServerError;
