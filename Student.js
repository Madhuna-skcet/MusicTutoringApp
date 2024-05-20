import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './MusicTutorForm.css'; // Import CSS file for styling

const MusicTutorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    levelOfExperience: '',
    frequencyOfLessons: '',
    servicesNeeded: '',
    comments: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/student/add', formData);
      console.log('Form submitted successfully:', response.data);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        phoneNumber: '',
        levelOfExperience: '',
        frequencyOfLessons: '',
        servicesNeeded: '',
        comments: ''
      });
      setError(''); // Reset error state
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.'); // Set error state
    }
  };

  return (
    <div className="music-tutor-form-container">
      <div className="music-tutor-form-box">
        <h2>Find Music Service Professional</h2>
        <form onSubmit={handleSubmit} className="music-tutor-form">
          {/* Error message */}
          {error && <div className="error-message">{error}</div>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="levelOfExperience">Level of Experience:</label>
            <select id="levelOfExperience" name="levelOfExperience" value={formData.levelOfExperience} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="frequencyOfLessons">Frequency of Lessons:</label>
            <input type="text" id="frequencyOfLessons" name="frequencyOfLessons" value={formData.frequencyOfLessons} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="servicesNeeded">Services Needed:</label>
            <textarea id="servicesNeeded" name="servicesNeeded" value={formData.servicesNeeded} onChange={handleChange} required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Additional Comments:</label>
            <textarea id="comments" name="comments" value={formData.comments} onChange={handleChange}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MusicTutorForm;
