import { revalidateExample } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";  

export const dynamic = "force-static"; // or "force-static" to cache the page

export default async  function index({ params }: { params: Promise<{ id: string }> }) {
  const hour = formatHour(Date.now());
  const { id } = await params;

  return (
    <main className="min-h-screen">
      <div>Hora: {hour} - ID ({id})</div>
      <form action={revalidateExample}>
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Revalidar Exemplo
        </button>
      </form>
    </main>
  );
}
