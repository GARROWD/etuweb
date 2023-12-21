import ParticlesBackground from "@/components/features/ParticlesBackground";

export function ParticlesLayout({ children }) {
  return (
    <>
        <div className="flex flex-col justify-center -top-24 relative py-12 sm:px-6 lg:px-8 z-10 min-h-full">
          {children}
        </div>

        <ParticlesBackground/>
    </>
  )
}
