import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Profile = ({ walletAddress }: { walletAddress: string | undefined }) => {
  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          View your wallet information and connection status.
        </CardDescription>
      </CardHeader>
      <div className="mt-4">
        <p>
          <strong>Wallet Address:</strong> {walletAddress || "Not Connected"}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {walletAddress ? (
            <span className="text-green-600">Connected</span>
          ) : (
            <span className="text-red-600">Disconnected</span>
          )}
        </p>
      </div>
    </Card>
  );
};

export default Profile;
