import React, { useEffect, useState } from "react";

function Test() {
  let [foo, setFoo] = useState(0);
  useEffect(() => {
    console.log("Working");
  }, [foo]);
  return (
    <>
      <h2> test</h2>
    </>
  );
}

export default Test;
