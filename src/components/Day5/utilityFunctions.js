import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-api-mern.onrender.com/api/tasks",
});

export const postMethod = async (data) => {
  return await api.post("", data);
};

export const deleteMethod = async (id) => {
  return await api.delete(`/${id}`);
};

export const putMethod = async (data) => {
  return await api.put(`/${data._id}`, {
    name: data.name,
    completed: data.completed,
  });
};

export const getMethod = async () => {
  return await api.get();
};
