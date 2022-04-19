import axios from "axios";
export const getAllStudents = () => {
  return axios.get("/api/v1/students");
};
export const addStudent = (student) => {
  return axios({
    method: "post",
    url: "/api/v1/students",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(student),
  });
};
