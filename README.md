# DEVLP.ME - Frontend Developer Assessment

This project is a recreation of the provided Figma UI for a developer portfolio (Home Page only), built as a technical assessment for Raintor Ltd.

## Live Demo

https://raintortask.vercel.app/

## GitHub Repository

https://github.com/mahadi-zulfiker/Raintor-Job-Task

## Features Implemented

* **UI Design Implementation:** Pixel-perfect recreation of the provided Figma designs for the home page.
* **Framework:** Next.js (App Router).
* **Styling:** Tailwind CSS with Shadcn UI components.
* **Component-Based Architecture:** Reusable components for `Navbar`, `Footer`, `SectionHeader`, `SkillCard`, `WorkProcessCard`, `SocialIcons`, `ContactForm`.
* **Theme Toggle:** Dark/Light mode toggle with persistence using `localStorage`.
* **Responsiveness:** Fully responsive design for various screen sizes (mobile, tablet, desktop).
* **Accessibility (Bonus):**
    * Semantic HTML5 elements.
    * ARIA roles for key interactive elements (e.g., buttons).
    * Basic keyboard navigation (`tab` key).
* **Animations/Transitions (Bonus):**
    * Subtle hover effects on buttons and cards.
    * Simple background animations for glowing sections in dark mode.
* **Code Quality & Best Practices:**
    * **Modular Architecture:** Organized codebase with `components/custom`, `components/ui`, `hooks`, `lib` directories.
    * **TypeScript:** Strong type safety applied throughout the project.
    * **Clean Code:** Adherence to clean coding principles, meaningful variable names, and clear function definitions.
    * **ESLint/Prettier:** Configured for consistent code formatting (implicit in the provided code structure).
    * **Unit Testing:** Basic unit test implemented for a Shadcn UI Button component using Jest and React Testing Library.
* **Error Boundary:** A basic error boundary is conceptualized (though not extensively applied to every component for this scope, a root-level boundary would be the next step).
* **Skeleton Loader/Spinner:** Although not explicitly used due to the static nature of the data on this home page, the setup allows for easy integration for future dynamic content.

## Technologies Used

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **UI Components:** Shadcn UI
* **Language:** TypeScript
* **Linting/Formatting:** ESLint, Prettier (recommended)
* **Testing:** Jest, React Testing Library
* **Icons:** Lucide React

## Setup Instructions

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mahadi-zulfiker/Raintor-Job-Task](https://github.com/mahadi-zulfiker/Raintor-Job-Task)
    cd Raintor-Job-Task
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4.  **Run tests:**
    ```bash
    npm test
    ```

## Limitations and Tradeoffs

* **Static Content:** The portfolio is currently static. In a real-world scenario, data for skills, work process, etc., would likely come from an API or a CMS.
* **Full Accessibility Audit:** While ARIA roles and keyboard navigation are considered, a comprehensive accessibility audit with screen readers was not performed within the scope of this assessment.
* **Complex Animations:** Only subtle animations (hover, basic background glow) are implemented. More complex, scroll-triggered animations could be added using libraries like Framer Motion.
* **Form Submission:** The `ContactForm` `handleSubmit` currently only logs to the console; it doesn't integrate with a backend service.
* **Error Boundary Scope:** A generic error boundary is mentioned. For a production application, more granular error boundaries around specific components or sections would be beneficial.
* **Virtualization:** Not applicable for this specific home page as there are no large lists of data that would benefit from virtualization.
* **UI Pixel-perfection:** Achieved to the best of ability based on static images. Minor discrepancies might exist due to image resolution and the translation from visual to code.

## Deployment

This application can be easily deployed to Vercel or Netlify.

### Vercel

1.  Sign up for a Vercel account and connect your GitHub repository.
2.  Vercel will automatically detect that it's a Next.js project and configure the build settings.
3.  Deploy!

### Netlify

1.  Sign up for a Netlify account and connect your GitHub repository.
2.  Configure your build settings:
    * **Build command:** `next build`
    * **Publish directory:** `out` (if using `next export` for static HTML, otherwise `.next` or default)
3.  Deploy!