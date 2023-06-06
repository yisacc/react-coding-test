import { useMutation } from "@tanstack/react-query";
import React from "react";
// import { useMutation } from 'react-query';

const Form: React.FC = () => {
  const createUser = async (userData: UserData) => {
    // Simulating an API call to create a user
    const response = await fetch("your-api-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  };

  const { mutate, isLoading, isError, isSuccess } = useMutation(createUser);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userData: UserData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      // Add additional form fields here
    };

    mutate(userData);
  };

  return (
    <div>
      <h2>Create User</h2>
      {isSuccess && <p>User created successfully!</p>}
      {isError && <p>Failed to create user.</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        {/* Add additional form fields here */}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};

type UserData = {
  name: string;
  email: string;
  // Add additional user data fields here
};

export default Form;
