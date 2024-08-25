import { Header, Footer } from "@components/common";
import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useNavigate } from "react-router-dom";
import { createAssignment } from "@services/AssignmentService";
export default function CreateAssignments() {

  const [title,setTitle]=useState("");
  const [instructions,setInstruction]=useState("");
  const [totalTime,setTotalTime]=useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authHeader = useAuthHeader;
  const headers = {
    Authorization: authHeader(),
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInstruction = (e) => {
    setInstruction(e.target.value);
  };
  const handleTotalTime = (e) => {
    setTotalTime(e.target.value);
  };

  const saveAssignment = async (e) => {
    e.preventDefault();

    if (!title.trim() || !instructions.trim() || !totalTime.trim()) {
      setError("All the fileds are required.");
      return;
    }

    const assignment = {
      title,
      instructions,
      totalTime,
    };

    try {
      const response = await createAssignment(assignment, headers);
      console.log("Create Assignment Response:", response);
      const assignmentId = response.data;
      navigate(`/quizFormat/${assignmentId}`);

    } catch (error) {
      console.error("Failed to create assignment", error);
      setError("Failed to create assignment");
    }
  };
  return (
    <div>
      <Header />
      <div className="my-24 mx-96  rounded-lg p-8 shadow-xl">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={saveAssignment}>
        <div className=" mb-6">
            
            <div className=" ">
              <label className="text-3xl block mb-2 ">Title</label>
              <input
                placeholder="Enter title"
                className="border border-blue h-16 rounded-lg w-full px-4 text-xl"
                value={title}
                onChange={handleTitle}
                name="title"
                required/>
            </div>
            
          </div>
          <div className="mb-6">
            <label className="text-3xl block mb-2 ">
              Instructions for student
            </label>
            <textarea
              placeholder="Enter instructions"
              className="border border-blue h-40 rounded-lg w-full px-4 text-xl"
              value={instructions}
                onChange={handleInstruction}
                name="instructions"
                required></textarea>
          </div>
          <div className="flex justify-between mb-6">
          
            <div className="w-4/5">
              <label className="text-3xl block mb-2 ">Total Time</label>
              <input
                placeholder="Enter total time"
                className="border border-blue h-16 rounded-lg w-full px-4 text-xl"
                value={totalTime}
                onChange={handleTotalTime}
                name="totalTime"
                required/>
            </div>
            <div className="flex items-end">
              
                <button className="bg-yellow text-white text-2xl px-8 py-4 rounded-lg ml-4" type="submit">
                  Create Quiz
                </button>
              
            </div>
          </div>

              
            </form>
        
        </div>
      <Footer />
    </div>
  );
}
