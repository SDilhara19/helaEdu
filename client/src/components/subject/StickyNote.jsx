import React, { useMemo } from "react";

import JoditEditor from "jodit-react";

function StickyNote() {
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typings...",
      height: "90vh",
    }),
    []
  );
  return (
    <>
      <JoditEditor config={config} />
    </>
  );
}

export default StickyNote;
