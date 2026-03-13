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
            Psychological Self-Assessment Test
          </h1>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover your psychological profile through a comprehensive self-assessment. 
            Answer a series of thoughtfully designed questions to gain meaningful insights about yourself.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            This assessment takes approximately 5-10 minutes to complete. Your responses are confidential 
            and used only to generate your personalized psychological profile.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          <div className="p-4 rounded-lg bg-white shadow-sm border border-border">
            <div className="text-2xl font-bold text-primary mb-2">10</div>
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
            Start Assessment
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-muted-foreground italic">
          This assessment is for self-reflection purposes. Please consult with a mental health professional for clinical evaluation.
        </p>
      </div>
    </div>
  )
}
