import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Import the same data (or fetch from API)
const coursesData = [
  { id: 'react-101', title: 'React for Beginners', instructor: 'John Doe', description: 'Learn the basics of React.', duration: '4 Weeks' },
  { id: 'node-202', title: 'Node.js Advanced', instructor: 'Jane Smith', description: 'Master backend development with Node.', duration: '6 Weeks' },
  { id: 'css-303', title: 'Modern CSS', instructor: 'Alice Johnson', description: 'Deep dive into Flexbox, Grid, and Animations.', duration: '3 Weeks' },
];

const Coursedettemp = () => {
  // 1. Get the courseID from the URL
  const { courseID } = useParams();
  const navigatePrev = useNavigate();

  // 2. Find the specific course data
  const course = coursesData.find((c) => c.id === courseID);

  // 3. Handle case where course is not found
  if (!course) {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold text-red-500">Course Not Found</h1>
        <p className="mb-4">The course with ID "{courseID}" does not exist.</p>
        <Link to="/courses" className="text-blue-500 underline">Back to Courses</Link>
      </div>
    );
  }
const prevPage = ()=>{navigatePrev(-1); };
  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <button onClick={prevPage} className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to All Courses
      </button>
      
      <div className="border rounded-xl shadow-lg p-8 bg-white">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">{course.title}</h2>
        <p className="text-lg text-gray-600 mb-6">Instructor: {course.instructor}</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Description</h3>
          <p className="text-gray-800 leading-relaxed">{course.description}</p>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <span className="font-medium text-gray-600">Duration: {course.duration}</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">ID: {course.id}</span>
        </div>
      </div>
    </div>
  );
};

export default Coursedettemp;   