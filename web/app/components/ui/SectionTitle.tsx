// components/ui/SectionTitle.tsx
interface SectionTitleProps {
    title: string
    subtitle: string
  }
  
  export function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-yellow-500 font-semibold tracking-wider">
          {subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">
          {title}
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
      </div>
    )
  }