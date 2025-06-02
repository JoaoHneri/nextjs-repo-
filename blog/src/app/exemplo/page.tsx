import { formatHour } from "@/utils/format-datetime";  
export const dynamic = "force-dynamic";
export default function index() {
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-screen">
      <div>Hora: {hour}</div>
    </main>
  );
}
