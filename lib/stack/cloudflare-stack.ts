import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { R2Bucket } from "@cdktf/provider-cloudflare/lib/r2-bucket";

import { provider } from "@cdktf/provider-cloudflare";

export class CloudflareStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // provider
    new provider.CloudflareProvider(this, "cloudflareProvider", {
        apiToken: process.env.CLOUDFLARE_TOKEN,
    });

    // R2 Bucket
    new R2Bucket(this, "r2-bucket", {
        accountId: this.node.tryGetContext('accountId'),
        name: "test-bucket",
    })
  }
}
