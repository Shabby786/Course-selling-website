import React, { useState } from "react";
import axios from "axios";

const CourseSelectionForm = ({ onPrevious, data }) => {
  const [courseSelection, setCourseSelection] = useState(data.courseSelection || {});
  const [successMessage, setSuccessMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseSelection({ ...courseSelection, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allData = { ...data, courseSelection };
    try {
      const response = await axios.post("http://localhost/apis/saveRegistration.php", allData);
      console.log(response.data);
      setSuccessMessage("Successfully submitted! We will contact you soon.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[500px] bg-green-300">
      <div className="max-w-md w-full mx-auto rounded-lg overflow-hidden shadow-md bg-white">
        <div className="px-6 py-8">
          {successMessage ? (
            <div className="text-center text-2xl font-bold text-gray-800 mb-8">
              {successMessage}
            </div>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
                Course Selection
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-600 mb-1"
                  >
                    Select Course
                  </label>
                  <select
                    name="course"
                    value={courseSelection.course || ""}
                    onChange={handleChange}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                    <option value="Course 3">Course 3</option>
                  </select>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseSelectionForm;