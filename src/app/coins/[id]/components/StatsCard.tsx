interface StatsCardProps {
  title: string
  content: string
}

const StatsCard: React.FC<StatsCardProps> = ({ title, content }) => {
  return (
    <div className="w-full max-w-80 rounded-lg bg-white p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <span className="text-xs font-medium text-gray-400">{title}</span>
        <span className="mt-1 text-lg font-semibold">{content}</span>
      </div>
    </div>
  )
}

export default StatsCard
