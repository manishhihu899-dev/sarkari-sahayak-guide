

# Full-Screen Google-Style Search Modal

## Overview
Bottom Navigation ke Search icon ko click karne par ek full-screen search experience open hoga - bilkul Google jaisa. Ismein aap kuch bhi government related search kar sakte ho aur results directly app mein dikhayi denge.

---

## How It Will Look

**Search Icon Click karein** → Full-screen modal open hota hai with:
- Clean, large search input at the top
- Popular searches as quick chips below
- Real-time web results as you type
- Beautiful animated background (matching app theme)
- Easy close button

---

## Key Features

1. **Full-Screen Modal**: Sheet component use karke smooth animation ke saath open/close
2. **Large Search Bar**: Google jaisa prominent search input
3. **Auto-Focus**: Modal open hone par search bar mein cursor already hoga
4. **Live Results**: Type karte hi results aate rahenge
5. **Web + App Results**: Pehle app mein jo hai woh, phir web se government websites
6. **Popular Searches**: Jaldi search ke liye quick chips

---

## Technical Details

### Files to Create/Modify:

1. **New Component: `src/components/SearchModal.tsx`**
   - Full-screen Sheet component
   - Large animated search bar
   - Integrated web search functionality
   - Popular search chips
   - Web results display
   - Tricolor accent theming

2. **Modify: `src/components/BottomNav.tsx`**
   - Search icon ko modal toggle mein convert karna
   - Add state for modal open/close
   - Prevent navigation to /search page

### Implementation Flow:

```text
+------------------+     +-------------------+     +------------------+
|  Bottom Nav      | --> |  Search Modal     | --> |  Web Results     |
|  (Search Icon)   |     |  (Full Screen)    |     |  (Live Display)  |
+------------------+     +-------------------+     +------------------+
        |                        |                         |
   Click to open           Type query              Firecrawl API
        |                        |                    call
        v                        v                         |
   Modal opens              Debounced                     v
   with animation           search trigger          Results shown
```

### Component Structure (SearchModal):
- **Header**: Close button + "Search" title
- **Search Input**: Large, prominent, auto-focused
- **Popular Tags**: Quick search chips (Aadhaar, PAN, Passport, etc.)
- **Results Area**: 
  - App results (from local database)
  - Web results (from Firecrawl API)
- **Loading State**: Animated loader while searching
- **Empty State**: Helpful tips when no search

### Animations:
- Modal slide-in from bottom (Sheet component)
- Search bar focus glow effect
- Staggered fade-in for results
- Shimmer effect on header
- Floating decorative blobs

---

## User Experience

1. User taps Search icon in bottom nav
2. Full-screen modal smoothly slides up
3. Keyboard automatically opens (auto-focus)
4. User types any government scheme/service
5. After 800ms of no typing, search triggers
6. Results appear with beautiful animations
7. Click any result to open in new tab (web) or navigate (app)
8. Swipe down or tap X to close

