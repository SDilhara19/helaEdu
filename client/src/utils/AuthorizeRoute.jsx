import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function AuthorizeRoute({ allowedUserRole = "all", Component }) {
  const currentUserRole = useAuthUser().role;
  if (currentUserRole == allowedUserRole) {
    return <Component />;
  } else {
    return <h3>Forbidden</h3>;
  }
}
export default AuthorizeRoute;
