import React from "react";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function AuthorizeByRole({ allowedUserRole = [], Component }) {
  const currentUserRole = useAuthUser()?.role;

  allowedUserRole.forEach((role) => {
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

export { AuthorizeByRole as AuthorizeRole, AuthrizeById as AuthrizeId };
