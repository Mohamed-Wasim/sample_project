import axios from "axios";

// create the httpRequest -> post
export const handleCreate = async (url, data) => {
  console.log(data);
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// read the httpRequest -> get
export const handleRead = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// update the httpRequest -> put
export const handleUpdate = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// update the httpRequest -> delete
export const handleDelete = async (url, data) => {
  try {
    const response = await axios.delete(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
