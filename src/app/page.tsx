import appConfig from "@/config/appConfig";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="text-2xl">{appConfig.title}</span>
    </div>
  );
}
