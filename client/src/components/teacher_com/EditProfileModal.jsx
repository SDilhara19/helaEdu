import React from "react";

const EditProfileModal = ({ isModalOpen, closeModal, handleSubmit, formData, handleInputChange }) => {
  return (
    <>
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box max-w-5xl p-14">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-yellow"
              onClick={closeModal}
            >
              ✕
            </button>
            <form onSubmit={handleSubmit}>
              <h3 className="font-bold text-4xl mb-4">Edit Profile</h3>
              <hr className="border-yellow border-t-4 w-1/4 hover:border-white transition duration-300 ease-in-out"></hr>
              <br></br>
              <div className="mb-4">
                <label className="block text-2xl font-medium mb-2">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="w-full rounded-xl p-2 border border-blue focus:border-yellow"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-2xl font-medium mb-2">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="w-full rounded-xl p-2 border border-blue focus:border-yellow"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-2xl font-medium mb-2">
                  About You (Brief Introduction about yourself)
                </label>
                <textarea
                  name="about"
                  className="w-full rounded-xl p-2 h-24 border border-blue focus:border-yellow"
                  value={formData.about}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-2xl font-medium mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-xl p-2 border border-blue focus:border-yellow"
                  value={formData.email}
                  onChange={handleInputChange}
                disabled/>
              </div>
              <div className="mb-4">
                <label className="block text-2xl font-medium mb-2">
                  Working Institute / School
                </label>
                <input
                  name="school"
                  type="text"
                  className="w-full rounded-xl p-2 border border-blue focus:border-yellow"
                  value={formData.school}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue text-2xl py-2 px-3 rounded hover:transition-shadow text-center justify-center"
              >
                Submit
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default EditProfileModal;
