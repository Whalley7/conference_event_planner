import React from 'react';
import { useSelector } from 'react-redux';

const TotalCostPage = () => {
  // Select the total costs from the Redux store
  const venueTotalCost = useSelector((state) => state.venue.totalCost);
  const avTotalCost = useSelector((state) => state.av.totalCost);
  const mealsTotalCost = useSelector((state) => state.meals.totalCost);

  // Calculate the overall total cost
  const totalCost = venueTotalCost + avTotalCost + mealsTotalCost;

  return (
    <div>
      <h1>Total Costs</h1>
      <div>
        <h2>Venue Total Cost: ${venueTotalCost.toFixed(2)}</h2>
      </div>
      <div>
        <h2>AV Total Cost: ${avTotalCost.toFixed(2)}</h2>
      </div>
      <div>
        <h2>Meals Total Cost: ${mealsTotalCost.toFixed(2)}</h2>
      </div>
      <div>
        <h2>Overall Total Cost: ${totalCost.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default TotalCostPage;