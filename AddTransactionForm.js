import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

function AddTransactionForm({ onAddTransaction }) { // Receive onAddTransaction prop
  // Define state variables to manage form inputs
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8001/transactions", formData);
      onAddTransaction(response.data); // Call onAddTransaction function with new transaction data
      setFormData({ // Clear form inputs after successful submission
        date: "",
        description: "",
        category: "",
        amount: "",
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Render form with input fields and submit button
  // Add onSubmit event listener
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}> 
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
