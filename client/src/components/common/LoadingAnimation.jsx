import React, { useState, useEffect } from "react";

function LoadingAnimation() {
  return (
    <div className="loading-body">
      <span
        className={`loading loading-dots loading-lg loading-span ${
          loadingState ? "loading-span" : "no-display"
        }`}
      ></span>
    </div>
  );
}

export default LoadingAnimation;
