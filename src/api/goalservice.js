import axios from 'axios';

// Your API endpoint
const API_URL = 'http://localhost:8080/api/goals';

// Create the goal
export const createGoal = async (goalData) => {
    try {
        const response = await axios.post(API_URL, goalData);
        return response.data;
    } catch (error) {
        console.error("There was an error adding the goal!", error);
        throw error;  // Re-throw the error to be handled by the calling component
    }
};


