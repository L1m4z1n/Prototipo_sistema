import React, { useState } from "react";
import ClienteForm from "./components/ClienteForm";
import ClienteTable from "./components/ClienteTable";

export default function App() {
  const [clientes, setClientes] = useState([]);

  const adicionarCliente = (cliente) => {
    setClientes([...clientes, cliente]);
  };

  const excluirCliente = (index) => {
    setClientes(clientes.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Sistema de Gestão de Clientes</h1>
      <ClienteForm adicionarCliente={adicionarCliente} />
      <ClienteTable clientes={clientes} excluirCliente={excluirCliente} />
    </div>
  );
}
