'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateAdmins() {
  await revalidatePath('/admins');
}

