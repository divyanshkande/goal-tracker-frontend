import axios from 'axios';

const API_URL = 'http://localhost:8080/api/goals';

export const fetchGoals = () => axios.get(API_URL);
export const addGoal = (goal) => axios.post(API_URL, goal);
export const deleteGoal = (id) => axios.delete(`${API_URL}/${id}`);
