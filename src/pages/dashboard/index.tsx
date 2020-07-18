import React from 'react';

/* Options to decare a new function:

  1. const Dashboard = () => {...}
  2. function Daschboard () {...}

  Both are the same declaration.
  We will choose the first one because it is more easy to apply types, as we are using TypeScript. To do so, we just need to write the type after the name. Exemple:

    const Dashboard:TypeOfDashboard = () {...}

*/

const Dashboard: React.FC = () => {
  return <h1>Dashboard</h1>;
};

export default Dashboard;
