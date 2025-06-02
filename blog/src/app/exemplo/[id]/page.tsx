import { formatHour } from "@/utils/format-datetime";  

export const dynamic = "force-static"; // or "force-static" to cache the page
export const dynamicParams = true;
export const revalidate = 10; // seconds

// export async function generateStaticParams() {
//     return [{ id: "1" }, { id: "2" }]
// }

export default async  function index({ params }: { params: Promise<{ id: string }> }) {
  const hour = formatHour(Date.now());
  const { id } = await params;

  return (
    <main className="min-h-screen">
      <div>Hora: {hour} - ID ({id})</div>
    </main>
  );
}
