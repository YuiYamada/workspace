import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Uploader from "../islands/FileInput.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">App Doc Maker :||</h1>
        <Uploader />
      </div>
    </>
  );
}
