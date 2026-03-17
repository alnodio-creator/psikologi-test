import { Button } from '@/components/ui/button'
import { Brain } from 'lucide-react'

interface TestLandingProps {
  onStart: () => void
}

export function TestLanding({ onStart }: TestLandingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fadeInUp">
        {/* Header with icon */}
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-linear-to-br from-primary to-accent shadow-lg">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
            CARE 129 
          </h1>
          <h2 className="text-5xl md:text-5xl font-bold text-foreground text-balance leading-tight">(Compassion Awareness & Recovery for Employees)</h2>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-xl font-bold text-blue-950 leading-relaxed">
            Di balik kepedulianmu untuk orang lain, CARE 129 hadir untuk merawatmu. 
            Mari meluangkan waktu sejenak untuk memahami dan menjaga kesehatan mentalmu.
          </p>
          
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          <div className="p-4 rounded-lg bg-white shadow-sm border border-border">
            <div className="text-2xl font-bold text-primary mb-2">20</div>
            <p className="text-sm text-muted-foreground">Comprehensive Questions</p>
          </div>
          <div className="p-4 rounded-lg bg-white shadow-sm border border-border">
            <div className="text-2xl font-bold text-primary mb-2">1-5</div>
            <p className="text-sm text-muted-foreground">Likert Scale Responses</p>
          </div>
          <div className="p-4 rounded-lg bg-white shadow-sm border border-border">
            <div className="text-2xl font-bold text-primary mb-2">5-10</div>
            <p className="text-sm text-muted-foreground">Minutes to Complete</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-linear-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 text-white px-8 py-6 text-lg rounded-lg"
          >
            Mulai Assessment 
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-lg text-muted-foreground italic">
          Asesmen ini merupakan skrining awal untuk membantu mengenali kondisi psikologismu dan tidak menggantikan diagnosis profesional.
        </p>
      </div>
    </div>
  )
}
