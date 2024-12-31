// types/next.d.ts

declare module 'next/font/google' {
    interface FontOptions {
      subsets?: string[];
      weight?: string[] | string;
      display?: string;
      fallback?: string[];
      preload?: boolean;
      variable?: string;
      adjustFontFallback?: boolean;
    }
  
    interface Font {
      className: string;
      style: { fontFamily: string };
    }
  
    export function Inter(options?: FontOptions): Font;
    // Add other Google fonts you might use
    export function Roboto(options?: FontOptions): Font;
    export function OpenSans(options?: FontOptions): Font;
  }