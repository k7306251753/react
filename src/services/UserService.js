import axios from 'axios';

const API_URL = 'http://localhost:8080/lecturer/operations/getAllLectures';/deleteByLectureId/{id}

// Fetch all users from the backend
export const getUsers = () => {
    return axios.get(API_URL);
};

// Create a new user in the backend
export const createUser = (user) => {
    return axios.post(API_URL, user);
};

// Update an existing user
export const updateUser = (userId, user) => {
    return axios.put(`${API_URL}/${userId}`, user);
};

// Delete a user
export const deleteUser = (userId) => {
    return axios.delete(`${API_URL}/${userId}`);
};
