import api from './api';

const sessionService = {
    getAllSessions: async () => {
        const response = await api.get('/sessions');
        return response.data;
    },

    getSessionById: async (id) => {
        const response = await api.get(`/sessions/${id}`);
        return response.data;
    },

    completeSession: async (id) => {
        const response = await api.patch(`/sessions/${id}/complete`, {});
        return response.data;
    },

    deleteSession: async (id) => {
        const response = await api.delete(`/sessions/${id}`);
        return response.data;
    },

    toggleBookmark: async (id, questionId) => {
        const response = await api.patch(`/sessions/${id}/bookmark`, { questionId });
        return response.data;
    },
    
    viewSolution: async (id, questionId) => {
        const response = await api.patch(`/sessions/${id}/view-solution`, { questionId });
        return response.data;
    }
};

export default sessionService;
