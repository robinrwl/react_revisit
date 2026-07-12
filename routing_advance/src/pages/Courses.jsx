import React from 'react';
import { Link } from 'react-router-dom';

// Sample course data (In a real app, this might come from an API)
const coursesData = [
  { id: 'react-101', title: 'React for Beginners', instructor: 'John Doe', description: 'Learn the basics of React.' },
  { id: 'node-202', title: 'Node.js Advanced', instructor: 'Jane Smith', description: 'Master backend development with Node.' },
  { id: 'css-303', title: 'Modern CSS', instructor: 'Alice Johnson', description: 'Deep dive into Flexbox, Grid, and Animations.' },
];

const Courses = () => {
  return (
    <div className="container mx-auto p-6">
      <h3 className="text-3xl font-bold mb-6">Available Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <div key={course.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.instructor}</p>
            {/* Link to the dynamic route */}
            <Link 
              to={`/courses/${course.id}`} 
              className="text-blue-600 hover:underline font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;   