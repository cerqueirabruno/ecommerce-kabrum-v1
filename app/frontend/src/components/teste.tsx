function FetchButton() {
  const handleFetch = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3001");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <button onClick={handleFetch}>
      Fazer Requisição
    </button>
  );
}

export default FetchButton;
