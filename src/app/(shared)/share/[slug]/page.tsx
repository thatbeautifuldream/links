export default function SharedPage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </main>
  );
}
