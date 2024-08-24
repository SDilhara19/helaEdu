import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useSelector } from "react-redux";
import _403 from "@pages/common/_403";

function AuthorizeByRoles({ allowedUserRoles = [], Component }) {
  const currentUserRole = useAuthUser()?.role;
  let isUserValid = false;

  allowedUserRoles.forEach((role) => {
    isUserValid |= currentUserRole === role;
  });

  if (isUserValid) {
    return <Component />;
  } else {
    return <h3>Forbidden</h3>;
  }
}

function AuthorizeById({ Component }) {
  const isUserValid = useSelector((state) => state.isUserValid.value);
  if (isUserValid) {
    return <Component />;
  } else {
    return <_403 />;
  }
}

export { AuthorizeByRoles as AuthorizeRoles, AuthorizeById as AuthorizeId };
