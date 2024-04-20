import React, { useState } from 'react';

const Curriculum = () => {
  const [sections, setSections] = useState([]);
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [sectionCounter, setSectionCounter] = useState(1);
  const [selectedSection, setSelectedSection] = useState(null);

  const [isAddingLecture, setIsAddingLecture] = useState(false);
  const [newLectureTitle, setNewLectureTitle] = useState('');
  const [lectureCounter, setLectureCounter] = useState(1);

  const [isAddingContent, setIsAddingContent] = useState(false);
  const [newContentTitle, setNewContentTitle] = useState('');
  const [selectedContentType, setSelectedContentType] = useState(null);

  const [videoFile, setVideoFile] = useState(null);
  const [articleContent, setArticleContent] = useState('');

  const handleAddSection = () => {
    setIsAddingSection(true);
  };

  const handleCancelSection = () => {
    setIsAddingSection(false);
    setNewSectionTitle('');
  };

  const handleAddNewSection = () => {
    if (newSectionTitle.trim() !== '') {
      const newSection = {
        title: `Section ${sectionCounter}: ${newSectionTitle}`,
        lectures: [],
        quizzes: [],
        showCurriculumItems: false,
      };

      setSections([...sections, newSection]);
      setNewSectionTitle('');
      setIsAddingSection(false);
      setSectionCounter(sectionCounter + 1);
    }
  };

  const handleToggleCurriculumItems = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].showCurriculumItems = !updatedSections[sectionIndex].showCurriculumItems;
    setSelectedSection(sectionIndex);
    setSections(updatedSections);
  };

  const handleAddLecture = () => {
    setIsAddingLecture(true);
  };

  const handleCancelLecture = () => {
    setIsAddingLecture(false);
    setNewLectureTitle('');
  };

  const handleAddNewLecture = () => {
    if (newLectureTitle.trim() !== '') {
      const updatedSections = [...sections];
      const lecture = { title: `Lecture no ${lectureCounter}: ${newLectureTitle}`, content: [] };
      updatedSections[selectedSection].lectures.push(lecture);

      setSections(updatedSections);
      setNewLectureTitle('');
      setIsAddingLecture(false);
      setLectureCounter(lectureCounter + 1);
    }
  };

  const handleAddContent = () => {
    setIsAddingContent(true);
  };

  const handleCancelContent = () => {
    setIsAddingContent(false);
    setNewContentTitle('');
    setSelectedContentType(null);
  };

  const handleSelectContentType = (contentType) => {
    setSelectedContentType(contentType);
  };

  const handleAddVideo = () => {
    // Trigger the file input to select a video file
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';

    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
      setVideoFile(selectedFile);
    });

    fileInput.click();
  };

  const handleAddArticle = () => {
    if (articleContent.trim() !== '') {
      // Create an object to represent article content
      const article = {
        type: 'Article',
        content: articleContent,
      };

      // Update the lecture's content with the article
      const updatedSections = [...sections];
      updatedSections[selectedSection].lectures[0].content.push(article); // Assuming you want to add to the first lecture

      setSections(updatedSections);
      setArticleContent('');
      setIsAddingContent(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Course Curriculum</h2>
      {!isAddingSection && (
        <button
          onClick={handleAddSection}
          className="bg-blue-500 text-white px-2 py-1 mb-4 rounded"
        >
          + Section
        </button>
      )}

      {isAddingSection && (
        <div className="mb-4 my-4">
          <div className="bg-white p-4 rounded-lg relative">
            <div className='flex '>
              <span className='w-1/4'>Add Section: </span>
              <input
                type="text"
                placeholder="Enter section title"
                value={newSectionTitle}
                onChange={(e) => setNewSectionTitle(e.target.value)}
                className="border rounded px-2 py-1 w-full mb-2"
              />
            </div>

            <div>
              <button
                onClick={handleAddNewSection}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                Add Section
              </button>
              <button
                onClick={handleCancelSection}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="bg-white shadow p-6 rounded mb-4">

          <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
          <div className="flex justify-between items-center ">

            <button
              onClick={() => handleToggleCurriculumItems(sectionIndex)}
              className="bg-blue-500 text-white px-2 py-1 my-2 rounded"
            >
              {section.showCurriculumItems ? "- Hide Curriculum Items" : "+ Curriculum Items"}
            </button>

          </div>
          {/* Add other content here */}
          {section.showCurriculumItems && selectedSection === sectionIndex && (
            <div className="flex space-x-4 mb-2">
              <button
                onClick={handleAddLecture}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                + Lecture
              </button>
              {/* Add more items as needed */}
            </div>
          )}
          {isAddingLecture && selectedSection === sectionIndex && (
            <div className="bg-gray-200 p-4 rounded-lg">
              <input
                type="text"
                placeholder="Enter lecture title"
                value={newLectureTitle}
                onChange={(e) => setNewLectureTitle(e.target.value)}
                className="border rounded px-2 py-1 w-full mb-2"
              />
              <button
                onClick={handleAddNewLecture}
                className="bg-green-500 text-white px-2 py-1 rounded mr-2"
              >
                Add Lecture
              </button>
              <button
                onClick={handleCancelLecture}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          )}
          {section.lectures.map((lecture, lectureIndex) => (
            <div key={lectureIndex} className="bg-gray-200 p-4 rounded-lg mt-2">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold mb-2">{lecture.title}</h4>
                {/* Add the "+ Content" button here */}
                <button
                  onClick={handleAddContent}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  + Content
                </button>
              </div>
              {isAddingContent && selectedSection === sectionIndex && (
                <div className="bg-gray-200 p-4 rounded-lg">
                  <div className="mb-2">
                    <button
                      onClick={() => handleSelectContentType('Video')}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Add Video
                    </button>
                    <button
                      onClick={() => handleSelectContentType('Article')}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Add Article
                    </button>
                  </div>
                  {selectedContentType === 'Video' && (
                    <div>
                      {/* Implement video upload UI here */}
                      {/* Add file input and handling logic */}
                      <input
                        type="file"
                        accept="video/*"
                        // Add event handlers for file upload
                        onChange={handleAddVideo}
                      />
                      {/* Display the selected video file name */}
                      {videoFile && <p>Selected video: {videoFile.name}</p>}
                    </div>
                  )}
                  {selectedContentType === 'Article' && (
                    <div>
                      {/* Implement article addition UI here */}
                      {/* You can add a text input and save the article content */}
                      <input
                        type="text"
                        placeholder="Enter article content"
                        value={articleContent}
                        onChange={(e) => setArticleContent(e.target.value)}
                        className="border rounded px-2 py-1 w-full mb-2"
                      />
                      <button
                        onClick={handleAddArticle}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Add Article
                      </button>
                    </div>
                  )}
                  <button
                    onClick={handleCancelContent}
                    className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                  >
                    Cancel
                  </button>
                </div>
              )}
              {/* Render lecture content here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
