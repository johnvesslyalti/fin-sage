Project Title:

    Fin Sage
    Meaning: “Fin” for finance + “Sage” for wisdom – wise personal financial tracking.

Description:

    Fin Sage is a where you can track all your finances easily

Tech Stack:

    Frontend:
        
        Next.js (App Router + Server Actions)
        TypeScript
        TailwindCSS + ShadcnUI
        Zustand
        Recharts
        NextAuth.js
        Next-PWA

    Backend:

        Next.js API Routes
        prisma ORM
        Postgre SQL
        Zod

Installation:

    npm install next-pwa
    npm install --save-dev @types/service-worker-mock
    npx shadcn@latest init
    npm install next-themes
    npx shadcn@latest add "https://magicui.design/r/marquee"
    npm install react-icons --save-dev
    npm install react-icons --save-dev
    npx shadcn@latest add card
    npm install next-auth @auth/prisma-adapter
    npm install motion 
    npx shadcn@latest add dropdown-menu
    npx shadcn-ui@latest add button dropdown-menu 

Features:

    1. Authentication:
        - Social Logins (Google)

    2. Expenses Dashboard
        - Daily, Weekly, Monthly spend summary
        - Pie Charts, bar graphs (category-base, time-series)
        - Top Spending categories
        - Filters by data range, category, tags

    3. Add/Edit/Delete Expenses
        Add expense with:
            Title
            Amount
            Category (Food, Rent, Travel, etc.)
            Date
            Notes
            Recurring toggle
            Inline editing
            Confirmation before deletion

    4. Recurring Transactions
        Monthly rent, subscriptions (Netflix, Gym)
        Toggle repeat + define interval

    5. Categories & Tags
        Default categories (customizable)
        User-defined tags (e.g., “Work Trip”)

    6. Smart Search & Filters
        Search by title, tags, amount range
        Filter by:
            Date (range picker)
            Amount (slider)
            Category

    7. Budget Tracking
        Set monthly budget
        Progress bar with % used
        Alerts when reaching thresholds

    8. Data Import/Export
        Import from CSV
        Export as CSV, PDF

    9. Notifications
        Budget exceed alerts
        Reminders to add daily expenses (PWA + browser notifications)

    10. Mobile Optimized UI
        Responsive UI

    11. Installable PWA (offline tracking)

Folder Structure:

    /app
    /dashboard
    /auth
    /expenses
    /components
    ExpenseForm.tsx
    ChartView.tsx
    CategorySelector.tsx
    /lib
    auth.ts
    db.ts
    /prisma
    schema.prisma
    /public
    /styles
    /utils
