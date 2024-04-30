import React from "react";

function Transaction({ date, description, category, amount }) { 
  // Receive transaction props
  // Render transaction details within table row
  return (
    <tr>
      <td>{date}</td> 
      <td>{description}</td> 
      <td>{category}</td> 
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
