import { useState } from 'react'

const InputCreate = () => {
  const [title, setTitle] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return

    const response = await fetch("http://localhost:3000/create", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (response.ok) {
      setTitle(''); // Limpiar el input si se creó bien
      alert("Tarea creada correctamente");
    } else {
      alert("Error al crear la tarea");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Crear tarea</button>
    </form>
  );
};

export default InputCreate;