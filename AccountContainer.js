import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios"; // Import axios for making HTTP requests

function AccountContainer() {
  // Define state variables to manage transactions and filtered transactions
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // Fetch initial list of transactions from the backend API when component mounts
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Function to fetch transactions from the backend API
  const fetchTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:8001/transactions");
      setTransactions(response.data); // Set transactions state with fetched data
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Function to handle searching transactions
  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered); // Set filteredTransactions state with search results
  };
  // Function to handle adding new transactions
  const addTransaction = async (newTransaction) => {
    try {
      const response = await axios.post("http://localhost:8001/transactions", newTransaction);
      setTransactions([...transactions, response.data]); // Update transactions state with new transaction
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };
  // Render Search, AddTransactionForm, and TransactionsList components
  // Pass handleSearch function as prop
  // Pass addTransaction function as prop
   // Pass transactions prop
  return (
    <div>
      <Search onSearch={handleSearch} /> 
      <AddTransactionForm onAddTransaction={addTransaction} /> 
      <TransactionsList transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions} />
    </div>
  );
}

export default AccountContainer;
