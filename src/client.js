import { createClient } from '@supabase/supabase-js'

const URL = 'https://kflxzdnlccystrtefyqz.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmbHh6ZG5sY2N5c3RydGVmeXF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODU1NzQ2MCwiZXhwIjoyMDE0MTMzNDYwfQ.DUZGQEMQDaaPZ3epBBocbJ_cLAnnICW3kCcUO2ZP4fs';

export const supabase = createClient(URL, API_KEY);