export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
