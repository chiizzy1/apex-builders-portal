const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function verify() {
  console.log('--- Verifying Leads ---');
  const { data: leads, error: leadError } = await supabase
    .from('leads')
    .select('name, email, service_type, created_at')
    .order('created_at', { ascending: false })
    .limit(3);

  if (leadError) console.error(leadError);
  console.log(leads);

  console.log('\n--- Verifying Projects ---');
  const { data: projects, error: projError } = await supabase
    .from('projects')
    .select('id, title, status')
    .order('updated_at', { ascending: false })
    .limit(3);

  if (projError) console.error(projError);
  console.log(projects);
}

verify();
