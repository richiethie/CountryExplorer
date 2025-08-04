# 🌍 Country Explorer

A responsive single-page application built with React and TypeScript that displays country data using the REST Countries API. It includes search, filtering, infinite scroll, dark mode, and accessible UI design.

---

## 🌐 Live Demo

[Live link deployed with Vercel](https://country-explorer-liart.vercel.app/)

---

## 🚀 Setup Instructions

**Clone the repository:**
```bash
git clone https://github.com/richiethie/CountriesExplorer.git
cd CountriesExplorer
```

**Install dependencies:**
```bash
npm install
```

**Start the development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Preview the build (optional):**
```bash
npm run preview
```

---

## 🧠 Approach & Assumptions

- Used Vite + React + TypeScript for a fast and modern dev experience.
- Integrated Tailwind CSS with `darkMode: 'class'` to support dark/light theming.
- Fetched all country data once from [REST Countries API](https://restcountries.com/v3.1/all), assuming client-side filtering was acceptable for this dataset size.
- Created modular components for clarity and reusability: `Header`, `SearchBar`, `RegionFilter`, `CountryCard`, `StatsBar`, etc.
- Implemented infinite scroll using `IntersectionObserver` instead of pagination for smoother UX.
- Assumed the visual layout should resemble a card grid that works well on both mobile and desktop.
- Focused on accessibility: semantic HTML, keyboard-friendly interactions, and color contrast support.

---

## 🧹 Features

- ✅ Country name, flag, region, and population
- ✅ Search by name or region keyword
- ✅ Filter by region (custom select dropdown)
- ✅ Responsive design across all devices
- ✅ Dark mode toggle
- ✅ Smooth animations and transitions
- ✅ Infinite scrolling
- ✅ Accessible HTML and ARIA where appropriate
- ✅ "Scroll to top" button
- ✅ Empty state and error state handling

---

## ⚠️ Challenges Faced & Things I'd Improve

### Version Control

I was so eager to start building that I neglected to commit progressively. This reduced visibility into my development process. Here's what I should have committed along the way:

- `init`: Create Vite + React + TypeScript + Tailwind setup
- `feat`: Add dark mode toggle with localStorage support
- `feat`: Implement fetch logic for country data
- `feat`: Create CountryCard component and render grid
- `feat`: Add SearchBar component for filtering
- `feat`: Add RegionFilter with custom select
- `feat`: Add StatsBar to show results and active filters
- `feat`: Show error and empty state UI
- `feat`: Add loading skeletons
- `feat`: Implement infinite scroll using IntersectionObserver
- `feat`: Add "Scroll to top" button
- `style`: Improve layout and transitions
- `refactor`: Extract reusable UI components
- `docs`: Add README and cleanup

If time allowed, I would go back and create these commits using an interactive rebase or by cherry-picking chunks with `git add -p` to better reflect my development flow.

---

## 📌 Improvements with More Time

- Add unit tests with React Testing Library (search, filter logic, card rendering)
- Improve ARIA and accessibility labels coverage
- Support offline mode or caching
- Add pagination toggle as an alternative to infinite scroll
- Optimize images and font loading
- Add region-based stats (e.g., total population per region)
- Write E2E tests using Cypress

---

## 👻 License

MIT — feel free to fork and build upon it.