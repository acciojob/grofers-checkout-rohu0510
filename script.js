const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
  
  // Calculate the total price
  let totalPrice = 0;
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent);
  });
  
  // Add a new row to the table with the total price
  const table = document.querySelector("table");
  const newRow = table.insertRow(-1);
  const newCell = newRow.insertCell(0);
  newCell.textContent = `Total Price: ${totalPrice}`;
  
};

getSumBtn.addEventListener("click", getSum);

