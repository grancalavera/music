import { createSignal } from "solid-js";
import { Button } from "@kobalte/core/button";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
    <main class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-8">Welcome to Tauri + Solid</h1>

        <div class="flex justify-center gap-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo vite" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={logo} class="logo solid" alt="Solid logo" />
          </a>
        </div>

        <p class="mb-8 text-gray-600 dark:text-gray-400">
          Click on the Tauri, Vite, and Solid logos to learn more.
        </p>

        <form
          class="flex justify-center gap-2 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <Button
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
            type="submit"
          >
            Greet
          </Button>
        </form>

        <p class="text-lg font-medium text-blue-600 dark:text-blue-400">
          {greetMsg()}
        </p>
      </div>
    </main>
  );
}

export default App;
