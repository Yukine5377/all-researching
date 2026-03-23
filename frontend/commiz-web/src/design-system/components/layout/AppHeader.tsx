import { Button } from '../ui/Button'

export type AppHeaderProps = {
  brand: string
  onSkip?: () => void
}

export function AppHeader({ brand, onSkip }: AppHeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-[#FCF9F8]/80 backdrop-blur-md">
      <div className="text-lg font-bold font-headline text-primary">{brand}</div>
      <Button variant="skip" type="button" onClick={onSkip}>
        Skip
      </Button>
    </header>
  )
}
