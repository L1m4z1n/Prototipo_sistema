import React, { useState } from "react";
import { Input, Button, Label } from "@/components/ui";

export default function ClienteForm({ adicionarCliente }) {
  const [cliente, setCliente] = useState({ nome: "", cpf: "", renda: "", status: "" });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cliente.nome || !cliente.cpf || !cliente.renda || !cliente.status) return;
    adicionarCliente(cliente);
    setCliente({ nome: "", cpf: "", renda: "", status: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4 border rounded">
      <div>
        <Label>Nome</Label>
        <Input name="nome" value={cliente.nome} onChange={handleChange} placeholder="Nome completo" />
      </div>
      <div>
        <Label>CPF</Label>
        <Input name="cpf" value={cliente.cpf} onChange={handleChange} placeholder="000.000.000-00" />
      </div>
      <div>
        <Label>Renda Mensal</Label>
        <Input name="renda" type="number" value={cliente.renda} onChange={handleChange} placeholder="R$ 0,00" />
      </div>
      <div>
        <Label>Status</Label>
        <Input name="status" value={cliente.status} onChange={handleChange} placeholder="Ativo/Inadimplente" />
      </div>
      <Button type="submit" className="col-span-2">Cadastrar Cliente</Button>
    </form>
  );
}
