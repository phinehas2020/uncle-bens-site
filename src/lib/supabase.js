import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfxemhxuwmfdbmbwegjz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGVtaHh1d21mZGJtYndlZ2p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NTg2OTgsImV4cCI6MjA4OTAzNDY5OH0.tljs5ACSRjqNR2oHocaAMOteb8a1VKqaEoLtYBVrIK8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
