import ProtectedRoute from "@/providers/ProtectionProvider";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="h-screen flex justify-center items-center">
        Dashboard Page
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;