// Inject some custom html
// @ts-ignore editor doesn't understand custom esbuild loaders
import html from "./index.html";
client.injectHtml(html);

// Communication through channels
import { client } from "../../../yare-module-lib/src";

client.channels.addEventListener("Example module", (msgs) => {
  client.channels.send("Example module", "Hello from the client!");
  console.log(client.channels.read("Example module"));
});
