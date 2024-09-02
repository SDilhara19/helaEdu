import { useDispatch } from "react-redux";
import { validateUserId } from "@reducers/userId";
import { useReactAuthKit } from "react-auth-kit/AuthContext";
import { jwtDecode } from "jwt-decode";

function useAuthorizer() {
  const dispatch = useDispatch();
  const { authValue } = useReactAuthKit();
  const jwtToken = authValue.auth.token;
  const loggedInUserId = jwtDecode(jwtToken);
  const authorizer = {
    authorize: function (validUserId) {
      dispatch(validateUserId({ loggedInUserId, validUserId }));
    },
  };
  return authorizer;
}

export default useAuthorizer;
