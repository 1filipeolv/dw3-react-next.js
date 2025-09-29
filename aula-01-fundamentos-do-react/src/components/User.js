// Expressões Javascript dentro do HTML

const User = () => {
  // Criando variáveis para o componente
  const name = "Filipe";
  return (
    <>
      {/* Esse é o comentário em JSX */}
      <div>
        Usuário logado: <strong>{name}</strong>
      </div>
    </>
  );
};

export default User;
