import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export function CreateUser() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  // const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const roles = [
    { value: "admin", label: "admin" },
    { value: "parent", label: "parent" },
    { value: "nounou", label: "nounou" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users", {
        lastname,
        firstname,
        role,
      });
      setSuccess(data);
    } catch (error) {
      setError(error.response.data);
      setSuccess("");
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        {/* <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <Select
          placeholder="role"
          options={roles}
          onChange={(e) => setRole(e.value)}
        />
        {/* <input
          type="text"
          placeholder="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        /> */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
