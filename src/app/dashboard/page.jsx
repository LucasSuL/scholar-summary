import React from "react";
import CreateForm from "./_components/CreateForm";
import ResList from "./_components/ResList";
const Dashboard = () => {
  return (
    // <div className="h-screen">
    <div className="p-5 ">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">My Library</h2>
        <CreateForm />
      </div>

      {/* form list */}
      <div className="">
        <ResList />
      </div>
    </div>
  );
};

export default Dashboard;
