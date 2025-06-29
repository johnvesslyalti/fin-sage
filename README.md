Project Title:

    Fin Sage
    Meaning: “Fin” for finance + “Sage” for wisdom – wise personal financial tracking.

Description:

    Fin Sage is a where you can track all your finances easily

Demo:

![Home Page Screenshot](/public/finsage-demo.png)

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

    # Core dependencies
    npm install next-pwa
    npm install next-themes
    npm install react-icons --save-dev
    npm install next-auth @auth/prisma-adapter
    npm install motion 

    # Service worker mock (for testing)
    npm install --save-dev @types/service-worker-mock

    # Shadcn UI setup
    npx shadcn@latest init
    npx shadcn@latest add card
    npx shadcn@latest add dropdown-menu
    npx shadcn@latest add avatar
    npx shadcn@latest add "https://magicui.design/r/marquee"


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

    finsage
        |- prisma/
        |- public/
        |- src/
            |- app/
                |- api/
                    |- auth/
                        |- [...nextauth]
                            |- route.ts
                    |- expenses/
                        |- [id]/
                            |- route.tsx
                        |- summary
                            |-  route.ts
                        |- route.ts
                |- dashboard/
                    |- page.tsx
                |- expenses/
                    |- page.tsx
                |- login/
                    |- page.tsx
                |- favicon.icon
                |- globals.css
                |- layout.tsx
                |- page.tsx
                |- providers.tsx
            |- components/
                |- magicui/
                |- ui/
                |- ClientPieChart.tsx
                |- ExpensesDashboard.tsx
                |- ExpensesOverview.tsx
                |- Footer.tsx
                |- HeroSection.tsx
                |- ModeToggle.tsx
                |- Navbar.tsx
                |- ThemeProvider.tsx
            |- lib/
                |- validations/
                    |- expense.ts
                |- auth.ts
                |- db.ts
                |- utils.ts
            |- types/
                |- index.d.ts
                |- next-auth.ts
            
Contributing:

    Contributions are welcome! Please fork the repo and submit a pull request.