import React, { useState } from "react";
import { useAuthorizer } from "@hooks";
import { useEffect } from "react";

function Test() {
  const auth = useAuthorizer();

  useEffect(() => {
    async function foo() {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      await sleep(5000);
      console.log("finished");
      auth.authorize(false);
    }
    foo();
  }, []);

  return (
    <>
      <h2 onClick={() => {}}>Foo</h2>
    </>
  );
}

export default Test;
