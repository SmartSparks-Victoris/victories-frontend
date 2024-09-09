'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateLogin() {
  console.log('?');
  await revalidatePath('/');
}

