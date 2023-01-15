export function NoResults() {
  return (
    <section
      className="flex justify-center items-center h-screen flex-col gap-5 p-2"
      data-testid="no-results"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Nenhum resultado encontrado</h1>
        <p>Demos o nosso melhor para encontrar o que você precisava 😞</p>
      </div>
    </section>
  );
}
