import Header from "@/Components/Header";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background">
      <Header />

      {/* Background wrapper */}
      <div className="relative w-full">
        {/* Image + Overlay */}
        <div className="relative w-full">
          <img
            src="/background.jpg"
            alt="background image"
            className="w-full h-auto object-cover"
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-background/10
              via-background/80
              to-background
            "
          ></div>
        </div>

        {/* Children sit on top */}
        <div className="absolute inset-0 flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
