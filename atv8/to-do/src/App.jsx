import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input === "") return;

    const novaTarefa = {
      id: Date.now(),
      text: input,
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
