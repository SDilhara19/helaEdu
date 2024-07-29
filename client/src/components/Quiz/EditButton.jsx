import React from "react";
import PrimaryButton from "../common/PrimaryButton";

const EditButton = () => {
  return (
    <div className="flex justify-end mx-96 mt-32">
      <PrimaryButton name="Edit" className="bg-red-500 mr-3" />
    </div>
  );
};

export default EditButton;
