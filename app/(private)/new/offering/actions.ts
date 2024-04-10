'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function createNewOffering(formData: { title: string; service: string }) {
  
    const { data, error } = await supabase
      .from('offerings')
      .insert([
        {
          title: formData.title,
          service: formData.service,
        },
      ]);
  
    if (error) {
      console.error('Error inserting new offering:', error);
      return; // Handle error (maybe redirect to an error page or show a message)
    }
  
    await revalidatePath('/'); // Adjust as needed
    redirect('/offerings'); // Redirecting after an async operation
  }