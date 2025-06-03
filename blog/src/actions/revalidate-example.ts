'use server';

import { revalidatePath } from "next/cache";

export async function revalidateExample(formData: FormData) {   
    console.log('Revalidating example page...');
    console.log('Form Data:', Object.fromEntries(formData.entries()));
    revalidatePath(formData.get('path') as string);
}