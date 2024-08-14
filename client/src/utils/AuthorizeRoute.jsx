import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function AuthorizeByRoles({ allowedUserRoles = [], Component }) {
  let isUserValid = false;
  const currentUserRole = useAuthUser()?.role;

  allowedUserRoles.forEach((role) => {
    isUserValid |= currentUserRole === role;
  });

  if (isUserValid) {
    return <Component />;
  } else {
    return <h3>Forbidden</h3>;
  }
}

function AuthrizeById({ userId, Component }) {
  const currentUserId = useAuthUser()?.userId;

  if (currentUserId === userId) {
    return <Component />;
  } else {
    return <h3>Forbidden</h3>;
  }
}

export { AuthorizeByRoles as AuthorizeRoles, AuthrizeById as AuthrizeId };
