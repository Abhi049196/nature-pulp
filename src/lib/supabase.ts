import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table types
export interface ContactFormData {
    name: string;
    address: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface CareerFormData {
    name: string;
    address: string;
    phone: string;
    email: string;
    department: string;
    remarks: string;
    cv_url?: string;
}
