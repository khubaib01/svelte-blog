import { toast } from '@zerodevx/svelte-toast';

export function DefaultToast(message: string): void {
  toast.push(message);
}

export function SuccessToast(message: string): void {
  toast.push(message, {
    theme: {
      '--toastBackground': '#48BB78',
      '--toastBarBackground': '#2F855A',
    },
  });
}

export function ErrorToast(message: string): void {
  toast.push(message, {
    theme: {
      '--toastBackground': '#F56565',
      '--toastBarBackground': '#C53030',
    },
  });
}
