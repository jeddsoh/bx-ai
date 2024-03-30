'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function createNewOffering(formData: { companyName: string; service: string }) {
    const supabase = createClient()
  
    const { data, error } = await supabase
      .from('offerings')
      .insert([
        {
          company_name: formData.companyName,
          service: formData.service,
        },
      ]);
  
    if (error) {
      console.error('Error inserting new offering:', error);
      return; // Handle error (maybe redirect to an error page or show a message)
    }
  
    await revalidatePath('/'); // Adjust as needed
    redirect('/dashboard'); // Redirecting after an async operation
  }