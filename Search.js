import React from "react";

function Search({ onSearch }) { 
  // Receive onSearch prop
  // Function to handle input changes
  const handleChange = (event) => {
    onSearch(event.target.value); // Call onSearch function with search term
  };

  // Render input field for searching transactions
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange} // Add onChange event listener
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
