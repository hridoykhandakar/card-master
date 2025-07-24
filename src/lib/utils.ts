// src/lib/utils.ts

// Simple class name joiner, similar to clsx
export function cn(...args: (string | undefined | false | null)[]): string {
  return args.filter(Boolean).join(' ');
}