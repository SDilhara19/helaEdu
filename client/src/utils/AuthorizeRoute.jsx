import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function AuthorizeRoute({
  allowedUserRole = "all",
  multiple = false,
  Component,
}) {
  const currentUserRole = useAuthUser()?.role;
  let isUserValid = allowedUserRole == "all" ? true : false;

  if (multiple) {
    allowedUserRole.forEach((role) => {
      isUserValid |= currentUserRole == role;
    });
  } else {
    isUserValid |= currentUserRole == allowedUserRole;
  }

  if (isUserValid) {
    return <Component />;
  } else {
    return <h3>Forbidden</h3>;
  }
}
export default AuthorizeRoute;
