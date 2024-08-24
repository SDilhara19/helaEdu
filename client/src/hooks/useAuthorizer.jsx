import { useDispatch } from "react-redux";
import { validateUserId } from "@reducers/userId";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

function useAuthorizer() {
  const dispatch = useDispatch();
  const loggedInUserId = useAuthUser()?.userId;

  const authorizer = {
    authorize: function (validUserId) {
      dispatch(validateUserId({ loggedInUserId, validUserId }));
    },
  };
  return authorizer;
}

export default useAuthorizer;
