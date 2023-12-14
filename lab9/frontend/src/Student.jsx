import React, { useEffect, useState } from "react";
import axios from "axios";
import './Student.css';

const backendURL = "http://localhost:3000";

const Student = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(backendURL);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <center>
        <div>
          <table className="striped">
            <thead>
              <tr>
                <th colSpan={5}>
                  <h3>STUDENT LIST</h3>
                </th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Student;
