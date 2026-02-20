# Apex Builders Portal — n8n Workflows

This folder contains importable n8n workflow JSON files. Upload each one to your n8n instance and connect the credentials listed below.

---

## Workflow 1: `apex-ai-project-assistant.json`

**Purpose:** Powers the AI chat on the Client Portal (`/client/ai-assistant`)

### After importing:

1. **Connect OpenAI credential** to the `GPT-4o: Generate Response` node
   - Go to Credentials → OpenAI API → paste your API key
2. **Copy the webhook URL** from the `Webhook: Client Chat` node
   - It will look like: `https://your-n8n.app.n8n.cloud/webhook/apex-ai-chat`
3. **Add it to Vercel env vars:**
   ```
   NEXT_PUBLIC_N8N_AI_CHAT_WEBHOOK=https://your-n8n.app.n8n.cloud/webhook/apex-ai-chat
   ```
4. **Activate the workflow** (toggle at top right)

---

## Workflow 2: `apex-lead-capture.json`

**Purpose:** Handles the "Request a Demo" form on the landing page

### After importing:

1. **Connect Gmail OAuth credential** to the `Email Admin: New Lead` node
   - Go to Credentials → Gmail OAuth2 → authorize your Gmail account
2. **Connect Supabase credential** to the `Insert Lead to Supabase` node
   - Go to Credentials → Supabase API → add your Supabase URL + service role key
3. **Update the admin email** in the `Email Admin: New Lead` node
   - Change `james@apexbuilders.com` to your real email address
4. **Copy the webhook URL** from the `Webhook: New Lead` node
   - It will look like: `https://your-n8n.app.n8n.cloud/webhook/apex-lead`
5. **Add it to Vercel env vars:**
   ```
   NEXT_PUBLIC_N8N_LEAD_WEBHOOK=https://your-n8n.app.n8n.cloud/webhook/apex-lead
   ```
6. **Activate the workflow**

---

## Adding env vars to Vercel

After you have both webhook URLs, run:

```bash
vercel env add NEXT_PUBLIC_N8N_AI_CHAT_WEBHOOK production
vercel env add NEXT_PUBLIC_N8N_LEAD_WEBHOOK production
```

Then redeploy:

```bash
vercel --prod
```

Or add them in the Vercel dashboard under **Project Settings → Environment Variables**.
