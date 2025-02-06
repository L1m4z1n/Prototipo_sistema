import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui";

export default function ClienteTable({ clientes, excluirCliente }) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Clientes Cadastrados</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Renda</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientes.map((cliente, index) => (
            <TableRow key={index}>
              <TableCell>{cliente.nome}</TableCell>
              <TableCell>{cliente.cpf}</TableCell>
              <TableCell>R$ {cliente.renda}</TableCell>
              <TableCell>{cliente.status}</TableCell>
              <TableCell>
                <button onClick={() => excluirCliente(index)} className="text-red-500">Excluir</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
