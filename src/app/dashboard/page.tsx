import ProtectedRoute from "@/providers/ProtectionProvider";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="h-screen flex justify-center items-center">
        Dashboard Page
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
