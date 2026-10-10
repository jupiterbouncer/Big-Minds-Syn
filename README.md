# Big Minds — Web Technologies Synthesis Edition

**Course:** CS341 Web Technologies | Ashesi University  

---

## 🌟 Overview & Purpose
**Big Minds** is an interactive interest exploration platform designed to help primary school students discover different pathways through mentorship. The guiding question is:  
> *"What are you curious about?"*

This simplified synthesis edition demonstrates foundational web technologies (HTML5, CSS3, Vanilla JavaScript) while preserving the original visual identity.

---

## 🚀 How to Run the Application
1. Open the folder `Big-Minds-WebTech-Synthesis`.
2. Double-click `index.html` to open it in any browser.
3. No server, node modules, npm, or internet connection is required.

---

## 📁 File Structure & Roles
* `index.html`: Main application interface containing welcome header, interest selector, pathway explorer, and practical activity panel.
* `quiz.html`: Standalone Curiosity Quiz page with recommendations.
* `styles.css`: Central stylesheet delivering a Neo-Tactile aesthetic with bold outlines and offset card shadows.
* `js/pathwaysData.js`: JavaScript data arrays storing pathways content and quiz questions.
* `js/app.js`: Application logic handling DOM updates, selection rules, activity interactivity, progress tracking, and session resets.

---

## 🧪 Key JavaScript Logic & Functions
1. **Interest Selection Limit (`toggleInterestSelection`):** Enforces a maximum of 3 selections using array checks and displays a user warning if a 4th is attempted.
2. **Dynamic Detail Panel (`renderDetailPanel` & `mountActivity`):** Renders selected pathway information and attaches interactive activity widgets.
3. **5 Practical Activities:**
   * *Programming:* `updateWebDemo()` manipulates DOM element colors and text.
   * *Graphic Design:* `setPosterTheme()` updates poster color schemes live.
   * *Financial Literacy:* `calcFinanceBudget()` evaluates savings vs spending against a GHS 100 budget.
   * *Public Speaking:* `updateSpeechPreview()` generates a live speech preview from input fields.
   * *Entrepreneurship:* `calcBusinessProfit()` validates input numbers and calculates unit profit.
4. **Exploration Progress (`updateProgressUI`):** Tracks unique explored pathways in an array and updates the progress bar percentage.
5. **Next Student Reset (`handleNextStudentReset`):** Clears session arrays and restores the interface for the next student.

---

## 🔒 Data Privacy & Session Persistence
* All data is stored in JavaScript runtime memory.
* No data is written to `localStorage`, databases, or external APIs.
* Everything resets automatically upon page refresh or when clicking "Next Student".
