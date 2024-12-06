import appConfig from "@/configs/appConfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        {appConfig.title}
      </h1>
      <div className="flex justify-center items-center">
        <ConnectButton
          showBalance={{
            smallScreen: true,
            largeScreen: true,
          }}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          chainStatus="icon"
        />
      </div>
    </div>
  );
}
