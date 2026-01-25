import Header from "@/Components/Header";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header />
      {children}
    </div>
  );
}