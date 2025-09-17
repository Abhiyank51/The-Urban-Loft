import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://xxayfhyktjdmmdpsnybi.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4YXlmaHlrdGpkbW1kcHNueWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxODEwMzcsImV4cCI6MjA3Mjc1NzAzN30.srldof4ES3cnj6hdlXXLikM3h4Rf-g1qV9S9ZjXwWQ8'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;