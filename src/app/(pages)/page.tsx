import { Button } from "~/components/ui/button";

export const runtime = "edge";

export default async function HomePage() {
  return (
    <main className="flex flex-wrap gap-2">
      <h1>Hello world</h1>
      <Button variant="destructive">Click Me</Button>
   
    </main>
  );
}
