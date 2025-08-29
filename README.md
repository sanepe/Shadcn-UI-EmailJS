# Shadcn-UI Template Usage Instructions

## Technology Stack

This project is built with:

- Vite  
- TypeScript  
- React  
- shadcn-ui  
- Tailwind CSS  

All shadcn/ui components have been downloaded under `@/components/ui`.

## File Structure

- `index.html` - HTML entry point  
- `vite.config.ts` - Vite configuration file  
- `tailwind.config.ts` - Tailwind CSS configuration file  
- `package.json` - NPM dependencies and scripts  
- `src/app.tsx` - Root component of the project  
- `src/main.tsx` - Project entry point  
- `src/index.css` - Existing CSS configuration  

## Components

- All shadcn/ui components are pre-downloaded and available at `@/components/ui`.

## Styling

- Add global styles to `src/index.css` or create new CSS files as needed.  
- Use Tailwind classes for styling components.  

## Development

- Import components from `@/components/ui` in your React components.  
- Customize the UI by modifying the Tailwind configuration.  

## Email Contact Form (Custom Changes)

Custom improvements were added by **Sanepe** 🚀:  
- Integration of a **contact form** using **EmailJS**, allowing messages to be sent directly via email.  
- Project now uses a `.env` file for sensitive keys.  

### Required `.env` file

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Create these values in your [EmailJS dashboard](https://www.emailjs.com/) and update them accordingly.

## Note

The `@/` path alias points to the `src/` directory.

# Commands

**Install Dependencies**
```bash
pnpm i
```

**Start Development**
```bash
pnpm run dev
```

**Preview Production Build**
```bash
pnpm preview
```

**Build for Production**
```bash
pnpm run build
```

---

## Credits

✨ Improvements and integration of email system with `.env` by **Sanepe**
