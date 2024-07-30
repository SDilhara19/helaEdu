import React, { useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faShare } from "@fortawesome/free-solid-svg-icons";
import TextEditor from "@components/articles/TextEditor";
import {
  createArticle,
  uploadAdditionalFiles,
  uploadArticleCover,
} from "@services/ArticleService";
import { useNavigate } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import { useDropzone } from "react-dropzone";

export default function AddArticlesForm() {
  const coverImageInputRef = useRef(null);
  const additionalFilesInputRef = useRef(null);
  const handleUploadClick = (ref) => {
    ref.current.click();
  };

  const [selectedTags, setSelectedTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const predefinedTags = [
    "Sinhala",
    "English",
    "Poems",
    "Mathematics",
    "Science",
    "History",
    "Biology",
  ];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [additionalFiles, setAdditionalFiles] = useState([]);
  const navigator = useNavigate();
  const authHeader = useAuthHeader;
  const headers = {
    Authorization: authHeader(),
  };

  const onDropAdditionalFiles = useCallback((acceptedFiles) => {
    setAdditionalFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const onDropCoverImage = useCallback((acceptedFiles) => {
    setCoverImage(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getRootPropsAdditional,
    getInputProps: getInputPropsAdditional,
  } = useDropzone({ onDrop: onDropAdditionalFiles });

  const { getRootProps: getRootPropsCover, getInputProps: getInputPropsCover } =
    useDropzone({ onDrop: onDropCoverImage, multiple: false });

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const saveArticle = async (e) => {
    e.preventDefault();

    const article = {
      title,
      content,
      tags: selectedTags,
    };

    try {
      const response = await createArticle(article, headers);
      console.log("Create Article Response:", response);
      const articleId = response.data;

      if (coverImage) {
        const formData = new FormData();
        formData.append("articleCoverImage", coverImage);
        await uploadArticleCover(articleId, formData, headers);
      }

      if (additionalFiles.length > 0) {
        const formData = new FormData();
        additionalFiles.forEach((file) => {
          formData.append("additionalFiles", file);
        });
        await uploadAdditionalFiles(articleId, formData, headers);
      }

      navigator("/articles/addArticles");
    } catch (error) {
      console.error("Failed to create article or upload files", error);
    }
  };

  const handleSelect = (value) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(value)) {
        return prevSelectedTags.filter((tag) => tag !== value);
      } else {
        return [...prevSelectedTags, value];
      }
    });
  };

  const handleAddNewTag = () => {
    if (newTag.trim() && !selectedTags.includes(newTag.trim())) {
      setSelectedTags((prevSelectedTags) => [
        ...prevSelectedTags,
        newTag.trim(),
      ]);
      setNewTag("");
    }
  };

  const isSelected = (value) => selectedTags.includes(value);

  return (
    <div className="mx-96 my-20 mw:mx-10">
      <h1>Add Your Article</h1>
      <hr className="border-yellow border-t-4 w-1/5" />
      <form onSubmit={saveArticle}>
        <div className="p-10">
          <div className="flex justify-around align-baseline my-5">
            <div className="w-2/6 mw:w-1/3">
              <span className="text-3xl">Title</span>
            </div>
            <div className="w-4/6 mw:w-2/3">
              <input
                className="border border-blue rounded-2xl w-full h-20 hover:border-yellow"
                type="text"
                value={title}
                onChange={handleTitle}
                name="title"
              required />
            </div>
          </div>
          <div className="my-7">
            <span className="text-3xl">Content</span>
            <TextEditor content={content} setContent={setContent} required/>
          </div>
          <div>
            <span className="text-3xl">Select Your Tags</span>
            <div className="flex justify-start my-5">
              {[
                ...predefinedTags,
                ...selectedTags.filter((tag) => !predefinedTags.includes(tag)),
              ].map((tag) => (
                <div
                  key={tag}
                  className={`text-3xl border border-blue rounded-2xl px-5 py-2 mx-4 cursor-pointer ${
                    isSelected(tag) ? "bg-blue text-white" : ""
                  }`}
                  onClick={() => handleSelect(tag)}
                >
                  <input
                    type="checkbox"
                    value={tag}
                    checked={isSelected(tag)}
                    onChange={() => handleSelect(tag)}
                    className="hidden"
                  />
                  <label className="text-2xl">{tag}</label>
                </div>
              ))}
            </div>
            <div className="relative w-full">
              <input
                className="hover:border-yellow border border-blue rounded-2xl w-full h-20 pr-16 pl-4"
                placeholder="Add your own tags"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-0 right-0 h-full px-4 bg-blue text-white rounded-r-2xl"
                onClick={handleAddNewTag}
              >
                <FontAwesomeIcon icon={faShare} />
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <span className="text-3xl align-middle">
                Attach Additional files
              </span>
              <br />
              <div
                {...getRootPropsAdditional()}
                className="border border-dashed border-4 rounded-xl p-16 flex flex-col my-6 mx-6"
              >
                <input
                  {...getInputPropsAdditional()}
                  name="additionalFiles"
                  multiple
                />
                <FontAwesomeIcon
                  icon={faUpload}
                  className="text-4xl justify-center"
                />
                <br />
                <p className="text-3xl">
                  Drag & drop or{" "}
                  <span className="text-blue cursor-pointer">Choose files</span>{" "}
                  to upload
                </p>
                {additionalFiles.length > 0 && (
                  <div className="text-xl mt-4">
                    {additionalFiles.map((file) => file.name).join(", ")}
                  </div>
                )}
              </div>
            </div>
            <div>
              <span className="text-3xl">Upload Cover Image</span>
              <br />
              <div
                {...getRootPropsCover()}
                className="border border-dashed border-4 rounded-xl p-16 flex flex-col my-6"
              >
                <input {...getInputPropsCover()} name="articleCoverImage" />
                <FontAwesomeIcon
                  icon={faUpload}
                  className="text-4xl justify-center"
                />
                <br />
                <p className="text-3xl">
                  Drag & drop or{" "}
                  <span className="text-blue cursor-pointer">Choose files</span>{" "}
                  to upload
                </p>
                {coverImage && (
                  <div className="text-xl mt-4">{coverImage.name}</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-blue text-3xl text-white rounded-2xl p-4"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
