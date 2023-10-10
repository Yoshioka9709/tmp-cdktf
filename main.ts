import { App } from "cdktf";
import { CloudflareStack } from "./lib/stack/cloudflare-stack";

const app = new App();

new CloudflareStack(app, "Cloudflare");

app.synth();
