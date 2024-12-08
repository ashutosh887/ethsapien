"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Reputation = () => {
  const [reputation, setReputation] = useState(0);

  useEffect(() => {
    const fetchReputation = async () => {
      const mockReputation = Math.floor(Math.random() * 100);
      setReputation(mockReputation);
    };

    fetchReputation();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Reputation</h2>
      <p>Reputation Score: {reputation}/100</p>
      <Progress value={reputation} max={100} className="mt-4" />
    </div>
  );
};

export default Reputation;
