import { Card } from "@/components/ui/card";
import Heading from "@/components/ui/heading";

export default function AdminPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title="Admin Dashboard" description="Manage your application" />
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-4">
            <h3 className="font-semibold">Total de Usuários</h3>
            <p className="text-2xl mt-2">0</p>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-semibold">Mensagens</h3>
            <p className="text-2xl mt-2">0</p>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-semibold">Visitas</h3>
            <p className="text-2xl mt-2">0</p>
          </Card>
        </div>
      </div>
    </div>
  );
}