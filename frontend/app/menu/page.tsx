import { fetchMenu } from '@/services/api';

export default async function MenuPage() {
  // Server-side fetch with TypeScript knowing exactly what 'menu' is!
  const menu = await fetchMenu();

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 border-b-2 border-gray-200 pb-2 mb-6">Our Menu</h1>
      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.id} className="flex justify-between bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm">
            <span><strong className="text-emerald-700">ID: {item.id}</strong> - {item.name}</span>
            <span className="font-bold text-slate-700">{item.price} Tk</span>
          </li>
        ))}
      </ul>
    </div>
  );
}