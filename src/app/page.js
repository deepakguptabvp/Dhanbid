import Body from "../app/components/common/Body";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white antialiased bg-grid-small-black/[0.1] flex flex-col">
      <div className="flex-grow">
        <Body />
      </div>
    </main>
  );
}
