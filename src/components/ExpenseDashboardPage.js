import React from 'react';
import ExpneseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpneseList />
  </div>
);

export default ExpenseDashboardPage;
