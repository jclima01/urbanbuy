import React, { useEffect } from "react";
import { loginClientAdmin, registerClientAdmin } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Test = () => {
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    // if (isAuthenticated)
    // dispatch(loginClientAdmin(user.email, "123asdASD")).finally(() => {
    //   navigate("/dashboard");
    // });
    if (isAuthenticated && user)
      dispatch(
        registerClientAdmin(user.given_name, user.email, "123asdASD")
      ).finally(
        dispatch(loginClientAdmin(user.email, "123asdASD")).finally(() => {
          if (clientAdmin) navigate("/dashboard");
        })
      );
  }, [user, isAuthenticated]);
  return <div>Test</div>;
};

export default Test;
