/* ==========================================================================
   Big Minds — Web Technologies Synthesis Edition
   Description: Core application logic, event handlers, and activities.
   ========================================================================== */

// --- Global Session State (In-Memory Only) ---
let selectedInterests = [];  // Holds up to 3 interest IDs
let exploredPathways = [];   // Holds explored pathway IDs
let activePathwayId = 'programming'; // Currently active card (default 1st)

// --- DOM Element References ---
const interestsContainer = document.getElementById('interests-container');
const pathwaysContainer = document.getElementById('pathways-container');
const detailPanel = document.getElementById('detail-panel');
const selectionAlert = document.getElementById('selection-alert');
const progressBarFill = document.getElementById('progress-bar-fill');
const progressStatusText = document.getElementById('progress-status-text');
const btnNextStudent = document.getElementById('btn-next-student');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderInterestButtons();
    renderPathwayCards();
    renderDetailPanel(activePathwayId);
    updateProgressUI();

    // Reset button event listener
    if (btnNextStudent) {
        btnNextStudent.addEventListener('click', handleNextStudentReset);
    }
});

// --- Feature B: Interest Selection (Max 3) ---
function renderInterestButtons() {
    if (!interestsContainer) return;
    interestsContainer.innerHTML = '';

    pathwaysData.forEach(item => {
        const isSelected = selectedInterests.includes(item.id);
        const card = document.createElement('div');
        card.className = `interest-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <span class="interest-icon">${item.icon}</span>
            <span class="interest-name">${item.name}</span>
        `;

        card.addEventListener('click', () => toggleInterestSelection(item.id));
        interestsContainer.appendChild(card);
    });
}

function toggleInterestSelection(id) {
    if (selectedInterests.includes(id)) {
        // Deselect if already selected
        selectedInterests = selectedInterests.filter(item => item !== id);
        selectionAlert.style.display = 'none';
    } else {
        // Check selection limit of 3
        if (selectedInterests.length >= 3) {
            selectionAlert.style.display = 'block';
            return;
        }
        selectionAlert.style.display = 'none';
        selectedInterests.push(id);
    }

    renderInterestButtons();
    renderPathwayCards();
}

// --- Feature C: Pathway Cards Explorer ---
function renderPathwayCards() {
    if (!pathwaysContainer) return;
    pathwaysContainer.innerHTML = '';

    pathwaysData.forEach(pathway => {
        const isHighlighted = selectedInterests.includes(pathway.id);
        const isActive = pathway.id === activePathwayId;
        const isExplored = exploredPathways.includes(pathway.id);

        const card = document.createElement('div');
        card.className = `pathway-card ${isActive ? 'active' : ''} ${isHighlighted ? 'highlighted' : ''}`;
        
        card.innerHTML = `
            <div class="card-top">
                <span class="pathway-icon">${pathway.icon}</span>
                ${isExplored ? '<span class="badge-explored">✅ Explored</span>' : ''}
            </div>
            <h3 class="pathway-title">${pathway.name}</h3>
            <p class="pathway-snippet">${pathway.shortDesc}</p>
            <div>
                ${pathway.skills.slice(0, 2).map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;

        card.addEventListener('click', () => {
            activePathwayId = pathway.id;
            renderPathwayCards();
            renderDetailPanel(pathway.id);
        });

        pathwaysContainer.appendChild(card);
    });
}

// --- Render Detail Panel & Practical Activities ---
function renderDetailPanel(pathwayId) {
    if (!detailPanel) return;
    const pathway = pathwaysData.find(p => p.id === pathwayId);
    if (!pathway) return;

    const isExplored = exploredPathways.includes(pathway.id);

    detailPanel.innerHTML = `
        <div class="detail-header">
            <div class="detail-title-group">
                <span class="detail-icon">${pathway.icon}</span>
                <div>
                    <h2>${pathway.name} Pathway</h2>
                    <span class="skill-tag">${pathway.category}</span>
                </div>
            </div>
            <button id="btn-toggle-explored" class="btn ${isExplored ? 'btn-warning' : 'btn-success'}">
                ${isExplored ? '↩️ Mark as Unexplored' : '✅ Mark as Explored'}
            </button>
        </div>

        <p style="font-size: 1.05rem; margin-bottom: 12px;"><strong>What it is:</strong> ${pathway.shortDesc}</p>
        <p style="margin-bottom: 16px;"><strong>Key Skills:</strong> ${pathway.skills.join(', ')}</p>

        <!-- Feature D: Practical Activity Box -->
        <div class="activity-box">
            <h3>⚡ Mentorship Activity: ${pathway.activityTitle}</h3>
            <p style="font-size: 0.9rem; color: #475569; margin-bottom: 14px;">${pathway.activityDesc}</p>
            <div id="activity-container"></div>
        </div>

        <p style="font-size: 0.9rem; color: #64748B;"><strong>🚀 Next Steps to Explore:</strong> ${pathway.nextSteps}</p>
    `;

    // Attach listener for mark as explored button
    document.getElementById('btn-toggle-explored').addEventListener('click', () => toggleExploredStatus(pathway.id));

    // Render specific interactive activity
    mountActivity(pathway.id);
}

// --- Feature D: Mount 5 Practical Activities ---
function mountActivity(id) {
    const container = document.getElementById('activity-container');
    if (!container) return;

    if (id === 'programming') {
        container.innerHTML = `
            <div id="web-demo-box" class="web-preview">
                <p id="web-demo-text" style="font-weight: 700; font-size: 1.1rem;">Hello, Grade 5/6 Crown Prince Academy!</p>
            </div>
            <div style="display: flex; gap: 10px; margin-top: 12px; flex-wrap: wrap;">
                <button class="btn" onclick="updateWebDemo('Indigo', '#4F46E5', '#FFFFFF')">Indigo Theme</button>
                <button class="btn" onclick="updateWebDemo('Amber', '#FDE047', '#0F172A')">Amber Theme</button>
                <button class="btn" onclick="updateWebDemo('Mint', '#A7F3D0', '#0F172A')">Mint Theme</button>
            </div>
        `;
    } else if (id === 'design') {
        container.innerHTML = `
            <div id="poster-card" class="poster-preview" style="background-color: #EEF2FF; color: #0F172A;">
                <h3 id="poster-text" style="font-size: 1.3rem;">"Curiosity is My Superpower"</h3>
                <p>Big Minds Mentorship Project — Lapaz, Ghana</p>
            </div>
            <div style="margin-top: 12px;">
                <label style="font-size: 0.85rem; font-weight: 700;">Pick a Color Palette: </label>
                <button class="theme-palette-btn" style="background-color: #EEF2FF;" onclick="setPosterTheme('#EEF2FF', '#0F172A')"></button>
                <button class="theme-palette-btn" style="background-color: #FEF3C7;" onclick="setPosterTheme('#FEF3C7', '#78350F')"></button>
                <button class="theme-palette-btn" style="background-color: #ECFDF5;" onclick="setPosterTheme('#ECFDF5', '#065F46')"></button>
            </div>
        `;
    } else if (id === 'finance') {
        container.innerHTML = `
            <div style="max-width: 400px;">
                <div class="form-group">
                    <label>Allowance Budget: GHS 100</label>
                </div>
                <div class="form-group">
                    <label>Amount to Save (GHS):</label>
                    <input type="number" id="fin-save" class="form-input" value="40" min="0" max="100" oninput="calcFinanceBudget()">
                </div>
                <div class="form-group">
                    <label>Amount to Spend (GHS):</label>
                    <input type="number" id="fin-spend" class="form-input" value="60" min="0" max="100" oninput="calcFinanceBudget()">
                </div>
                <div id="fin-result" class="calc-result-box">Total Allocated: GHS 100 / GHS 100 ✅</div>
            </div>
        `;
    } else if (id === 'speaking') {
        container.innerHTML = `
            <div style="max-width: 500px;">
                <div class="form-group">
                    <label>Speech Topic:</label>
                    <input type="text" id="spk-topic" class="form-input" value="Why Reading Books is Fun" oninput="updateSpeechPreview()">
                </div>
                <div class="form-group">
                    <label>Opening Hook:</label>
                    <input type="text" id="spk-hook" class="form-input" value="Hello everyone! Did you know books take you on adventures?" oninput="updateSpeechPreview()">
                </div>
                <div class="speech-preview-card">
                    <h4>🎤 Speech Draft Preview:</h4>
                    <p id="spk-preview-text" style="font-style: italic; margin-top: 6px;"></p>
                </div>
            </div>
        `;
        updateSpeechPreview();
    } else if (id === 'entrepreneurship') {
        container.innerHTML = `
            <div style="max-width: 400px;">
                <div class="form-group">
                    <label>Item Name:</label>
                    <input type="text" id="ent-item" class="form-input" value="Chilled Sobolo Drink">
                </div>
                <div class="form-group">
                    <label>Cost Price per Unit (GHS):</label>
                    <input type="number" id="ent-cost" class="form-input" value="3" min="0" oninput="calcBusinessProfit()">
                </div>
                <div class="form-group">
                    <label>Selling Price per Unit (GHS):</label>
                    <input type="number" id="ent-price" class="form-input" value="5" min="0" oninput="calcBusinessProfit()">
                </div>
                <div id="ent-result" class="calc-result-box">Profit per Item: GHS 2.00 (Good business model!)</div>
            </div>
        `;
    }
}

// --- Activity Interactive Functions ---
window.updateWebDemo = function(name, bgColor, textColor) {
    const box = document.getElementById('web-demo-box');
    const text = document.getElementById('web-demo-text');
    if (box && text) {
        box.style.backgroundColor = bgColor;
        text.style.color = textColor;
        text.textContent = `Applied ${name} theme via JavaScript DOM manipulation!`;
    }
};

window.setPosterTheme = function(bgColor, textColor) {
    const poster = document.getElementById('poster-card');
    if (poster) {
        poster.style.backgroundColor = bgColor;
        poster.style.color = textColor;
    }
};

window.calcFinanceBudget = function() {
    const saveVal = parseFloat(document.getElementById('fin-save').value) || 0;
    const spendVal = parseFloat(document.getElementById('fin-spend').value) || 0;
    const total = saveVal + spendVal;
    const resBox = document.getElementById('fin-result');

    if (!resBox) return;

    if (total > 100) {
        resBox.style.backgroundColor = '#FEF2F2';
        resBox.textContent = `⚠️ Over budget! Allocated: GHS ${total} (Max GHS 100)`;
    } else if (total === 100) {
        resBox.style.backgroundColor = '#D1FAE5';
        resBox.textContent = `✅ Perfect allocation! Total: GHS 100 (Save: GHS ${saveVal}, Spend: GHS ${spendVal})`;
    } else {
        resBox.style.backgroundColor = '#FEF3C7';
        resBox.textContent = `Allocated: GHS ${total} / GHS 100 (Remaining unallocated: GHS ${100 - total})`;
    }
};

window.updateSpeechPreview = function() {
    const topic = document.getElementById('spk-topic')?.value || '[Your Topic]';
    const hook = document.getElementById('spk-hook')?.value || '[Your Hook]';
    const preview = document.getElementById('spk-preview-text');
    if (preview) {
        preview.textContent = `"${hook} Today I want to talk about ${topic}. Thank you for listening!"`;
    }
};

window.calcBusinessProfit = function() {
    const item = document.getElementById('ent-item')?.value || 'Item';
    const cost = parseFloat(document.getElementById('ent-cost')?.value) || 0;
    const price = parseFloat(document.getElementById('ent-price')?.value) || 0;
    const profit = price - cost;
    const resBox = document.getElementById('ent-result');

    if (!resBox) return;

    if (price <= 0 || cost < 0) {
        resBox.style.backgroundColor = '#FEF2F2';
        resBox.textContent = `⚠️ Please enter valid positive prices.`;
    } else if (profit > 0) {
        resBox.style.backgroundColor = '#D1FAE5';
        resBox.textContent = `🎉 Profit for ${item}: GHS ${profit.toFixed(2)} per unit sold!`;
    } else if (profit === 0) {
        resBox.style.backgroundColor = '#FEF3C7';
        resBox.textContent = `⚖️ You break even (No profit, no loss).`;
    } else {
        resBox.style.backgroundColor = '#FEF2F2';
        resBox.textContent = `⚠️ Loss per item: GHS ${Math.abs(profit).toFixed(2)}. Consider raising selling price.`;
    }
};

// --- Feature E: Exploration Tracking ---
function toggleExploredStatus(pathwayId) {
    if (exploredPathways.includes(pathwayId)) {
        exploredPathways = exploredPathways.filter(id => id !== pathwayId);
    } else {
        exploredPathways.push(pathwayId);
    }

    renderPathwayCards();
    renderDetailPanel(pathwayId);
    updateProgressUI();
}

function updateProgressUI() {
    const total = pathwaysData.length;
    const count = exploredPathways.length;
    const percentage = Math.round((count / total) * 100);

    if (progressBarFill) progressBarFill.style.width = `${percentage}%`;
    if (progressStatusText) progressStatusText.textContent = `${count} of ${total} Pathways Explored (${percentage}%)`;
}

// --- Feature G: Next Student Reset ---
function handleNextStudentReset() {
    const confirmed = confirm("Are you sure you want to reset all data for the Next Student? This clears interest selections and progress.");
    if (confirmed) {
        selectedInterests = [];
        exploredPathways = [];
        activePathwayId = 'programming';
        selectionAlert.style.display = 'none';

        renderInterestButtons();
        renderPathwayCards();
        renderDetailPanel(activePathwayId);
        updateProgressUI();
        alert("Session reset! The laptop is ready for the next student. 🎓");
    }
}