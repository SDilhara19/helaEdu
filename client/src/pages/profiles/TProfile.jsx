import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Assignment from "@assets/img/articles/assignments.png";
import Articles from "@assets/img/articles/articles.png";
import Users from "@assets/img/articles/social-media.png";
import Notes from "@assets/img/articles/notes.png";
import ProfileHero from "@components/teacher_com/ProfileHero";
import { Header, Footer } from "@components/common";
import { listTeacherDetails, editTeacherProfile } from "@services/TeacherService";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { Link } from "react-router-dom";
import EditProfileModal from "@components/teacher_com/EditProfileModal";

const TProfile = () => {
  const [teacher, setTeacher] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    about: "",
    email: "",
    school: "",
  });

  const authHeader = useAuthHeader();
  const headers = {
    Authorization: authHeader,
  };

  useEffect(() => {
    listTeacherDetails(headers)
      .then((response) => {
        setTeacher(response.data);
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          about: response.data.about,
          email: response.data.email,
          school: response.data.school,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTeacherProfile(formData, headers)
      .then((response) => {
        setTeacher(response.data);
        setIsModalOpen(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Header />
      <ProfileHero email={teacher.email} firstName={teacher.firstName} lastName={teacher.lastName}  profileImg={teacher.profilePictureUrl} />
      <div className="flex justify-between mr-32 ml-32 mt-32">
        <div className="w-1/2 mr-12 mt-12 shadow-2xl p-12">
          <p className="text-2xl m-4">
            <span className="text-blue">About me</span>: {teacher.about}
          </p>
          <div>
            <p className="text-2xl m-4">
              <span className="text-blue">Email</span>: {teacher.email}
            </p>
            <p className="text-2xl m-4">
              <span className="text-blue">Working Institute / School</span>: {teacher.school}
            </p>
            <p className="text-2xl m-4">
              <span className="text-blue">Teaching Subject</span>: {teacher.preferredSubjects}
            </p>
          </div>
          <div className="flex justify-end">
            <div
              className="flex items-center justify-center rounded-full w-20 h-20 bg-yellow cursor-pointer"
              onClick={openModal}
            >
              <FontAwesomeIcon icon={faPencil} className="size-8" />
            </div>
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-8 mt-12">
          <Link to="/assignmentList">
            <div className="shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold">
              <img src={Assignment} className="w-20 h-20" alt="Assignments" />
              <p className="text-2xl">My Assignments</p>
            </div>
          </Link>
          <Link to="/articles/addArticles">
            <div className="shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold">
              <img src={Articles} className="w-20 h-20" alt="Articles" />
              <p className="text-2xl"> My Articles</p>
            </div>
          </Link>
          <Link to="/">
            <div className="shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold">
              <img src={Users} className="w-20 h-20" alt="Users" />
              <p className="text-2xl">My Reputation Points</p>
            </div>
          </Link>
          <Link to="/">
            <div className="shadow-xl rounded-lg w-full h-56 flex flex-col items-center justify-center text-xl font-semibold">
              <img src={Notes} className="w-20 h-20" alt="Users" />
              <p className="text-2xl">My Notes</p>
            </div>
          </Link>
        </div>
      </div>
      <EditProfileModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <br></br>
      <Footer />
    </div>
  );
};

export default TProfile;
