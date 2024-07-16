import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

function Chat() {
  const authHeader = useAuthHeader();
  const headers = {
    Authorization: authHeader,
  };
  let [responsePayload, setResponsePayload] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:8081/chat/", { name: "John Doe" }, { headers })
      .then((res) => {
        setResponsePayload(res.data);
      });
  }, []);

  return (
    <>
      <h2>Chat test</h2>

      <h3>Decoded or Recieved from server:</h3>
      <h4>
        <pre>{JSON.stringify(responsePayload)}</pre>
      </h4>
    </>
  );
}

export default Chat;
