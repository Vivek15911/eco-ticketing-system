// --- Data ---
const indianStates = {
    "Andhra Pradesh": ["Visakhapatnam", "Tirupati", "Araku Valley", "Vijayawada"],
    "Arunachal Pradesh": ["Tawang", "Ziro", "Itanagar", "Pasighat"],
    "Assam": ["Kaziranga", "Guwahati", "Majuli", "Manas National Park"],
    "Bihar": ["Bodh Gaya", "Patna", "Nalanda", "Rajgir"],
    "Chhattisgarh": ["Raipur", "Jagdalpur", "Chitrakoot Falls", "Bhilai"],
    "Goa": ["Baga Beach", "Calangute", "Panaji", "Dudhsagar Falls"],
    "Gujarat": ["Ahmedabad", "Kutch", "Gir National Park", "Somnath"],
    "Haryana": ["Gurgaon", "Kurukshetra", "Panipat", "Sultanpur"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kasol"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Deoghar", "Hazaribagh"],
    "Karnataka": ["Bangalore", "Mysore", "Coorg", "Hampi"],
    "Kerala": ["Munnar", "Alleppey", "Kochi", "Wayanad"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Khajuraho", "Gwalior"],
    "Maharashtra": ["Mumbai", "Pune", "Lonavala", "Mahabaleshwar", "Shirdi"],
    "Manipur": ["Imphal", "Loktak Lake", "Ukhrul", "Moirang"],
    "Meghalaya": ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
    "Mizoram": ["Aizawl", "Champhai", "Lunglei", "Mamit"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Mon"],
    "Odisha": ["Bhubaneswar", "Puri", "Konark", "Chilika Lake"],
    "Punjab": ["Amritsar", "Ludhiana", "Chandigarh", "Jalandhar"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
    "Sikkim": ["Gangtok", "Pelling", "Lachung", "Yumthang"],
    "Tamil Nadu": ["Chennai", "Ooty", "Madurai", "Rameswaram"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    "Tripura": ["Agartala", "Udaipur", "Unakoti", "Dharmanagar"],
    "Uttar Pradesh": ["Lucknow", "Varanasi", "Agra", "Ayodhya"],
    "Uttarakhand": ["Dehradun", "Rishikesh", "Nainital", "Mussoorie"],
    "West Bengal": ["Kolkata", "Darjeeling", "Sundarbans", "Siliguri"],
    "Delhi": ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple"],
    "Jammu & Kashmir": ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    "Ladakh": ["Leh", "Pangong Lake", "Nubra Valley", "Kargil"]
};

const roomData = [
    { number: "101", type: "Single" }, { number: "102", type: "Single" }, { number: "103", type: "Single" },
    { number: "104", type: "Single" }, { number: "105", type: "Single" },
    { number: "201", type: "Double" }, { number: "202", type: "Double" }, { number: "203", type: "Double" },
    { number: "204", type: "Double" }, { number: "205", type: "Double" }
];

// --- Real Venue Data ---
const realVenues = {
    "West Bengal": {
        "Library": [
            "National Library of India (Kolkata)", "The Asiatic Society (Kolkata)", "British Council Library (Kolkata)",
            "State Central Library (Kolkata)", "Rammohun Library (Kolkata)", "The Study Spot Library (Kolkata)",
            "North Bengal State Library (Cooch Behar)", "District Library (Howrah)", "Chaitanya Library (Kolkata)",
            "Uttarpara Jaykrishna Public Library (Hooghly)"
        ],
        "Sports": [
            "Eden Gardens (Kolkata)", "Salt Lake Stadium (Kolkata)", "Kalyani Stadium (Kalyani)",
            "Kanchenjunga Stadium (Siliguri)", "Mohun Bagan Ground (Kolkata)", "East Bengal Ground (Kolkata)",
            "Rabindra Sarobar Stadium (Kolkata)", "Netaji Indoor Stadium (Kolkata)", "Barasat Stadium (Barasat)",
            "Kishore Bharati Krirangan (Kolkata)"
        ]
    },
    "Jharkhand": {
        "Library": [
            "State Central Library (Ranchi)", "British Council Library (Ranchi)", "Public Library (Jamshedpur)",
            "District Library (Hazaribagh)", "Ram Dayal Munda Tribal Library (Ranchi)", "University Central Library (Ranchi)",
            "Steel City Library (Jamshedpur)", "Bokaro Public Library (Bokaro)", "Dhanbad District Library (Dhanbad)",
            "Swami Vivekananda Library (Ranchi)"
        ],
        "Sports": [
            "JRD Tata Sports Complex (Jamshedpur)", "Keenan Stadium (Jamshedpur)", "Birsa Munda Athletics Stadium (Ranchi)",
            "JSCA International Stadium Complex (Ranchi)", "Mohan Kumar Mangalam Stadium (Bokaro)", "Tata Digwadih Stadium (Dhanbad)",
            "Hazaribagh Stadium (Hazaribagh)", "Chaibasa Stadium (Chaibasa)", "Mega Sports Complex (Ranchi)",
            "Albert Ekka Stadium (Gumla)"
        ]
    },
    "Delhi": {
        "Library": [
            "Delhi Public Library (Chandni Chowk)", "National Archives of India (Janpath)", "Central Secretariat Library (Shastri Bhawan)",
            "British Council Library (KG Marg)", "American Center Library (KG Marg)", "Sahitya Akademi Library (Mandi House)",
            "Nehru Memorial Library (Teen Murti)", "Dyal Singh Public Library (ITO)", "Hardayal Municipal Public Library (Chandni Chowk)",
            "The Japan Foundation Library (Lajpat Nagar)"
        ],
        "Sports": [
            "Arun Jaitley Stadium (Feroz Shah Kotla)", "Jawaharlal Nehru Stadium (Lodhi Road)", "Indira Gandhi Indoor Stadium (IP Estate)",
            "Major Dhyan Chand National Stadium (India Gate)", "Talkatora Stadium (Talkatora Garden)", "Thyagaraj Sports Complex (INA Colony)",
            "Chhatrasal Stadium (Model Town)", "Dr. Karni Singh Shooting Range (Tughlakabad)", "Yamuna Sports Complex (Surajmal Vihar)",
            "Siri Fort Sports Complex (August Kranti Marg)"
        ]
    },
    "Maharashtra": {
        "Library": [
            "Asiatic Society of Mumbai (Mumbai)", "David Sassoon Library (Mumbai)", "British Council Library (Mumbai)",
            "Pune City General Library (Pune)", "Jayakar Knowledge Resource Centre (Pune)", "State Central Library (Mumbai)",
            "People's Free Reading Room (Mumbai)", "J.N. Petit Institute (Mumbai)", "Marathi Granth Sangrahalaya (Thane)",
            "Visvesvaraya National Institute Library (Nagpur)"
        ],
        "Sports": [
            "Wankhede Stadium (Mumbai)", "Brabourne Stadium (Mumbai)", "DY Patil Stadium (Navi Mumbai)",
            "MCA Stadium (Pune)", "Mahalaxmi Race Course (Mumbai)", "Cooperage Football Ground (Mumbai)",
            "Balewadi Stadium (Pune)", "Vidarbha Cricket Association Stadium (Nagpur)", "Dadaji Kondadev Stadium (Thane)",
            "Sardar Vallabhbhai Patel Stadium (Mumbai)"
        ]
    }
};

// --- Dynamic Venue Generator ---
function getVenues(state, type) {
    // 1. Check for Real Data
    if (realVenues[state] && realVenues[state][type]) {
        return realVenues[state][type];
    }

    // 2. Fallback Generator (More Realistic)
    const venues = [];
    const cities = indianStates[state] || ["City"];

    const prefixes = {
        "Library": ["Central", "National", "State", "Public", "City", "District", "University", "Community", "Royal", "Imperial"],
        "Sports": ["Stadium", "Arena", "Complex", "Ground", "Club", "Sports City", "Field", "Dome", "Park", "Center"],
        "Museum": ["Museum", "Gallery", "Heritage Center", "Archives", "Exhibition Hall", "Palace", "Fort", "Memorial", "Art House", "History Center"],
        "Theater": ["Theater", "Auditorium", "Hall", "Cinema", "Playhouse", "Opera House", "Center", "Stage", "Multiplex", "Amphitheater"],
        "Room Rent": ["Hotel", "Resort", "Inn", "Palace", "Lodge", "Suites", "Guest House", "Villa", "Cottage", "Stay"]
    };

    const suffixes = {
        "Library": ["Library", "Reading Room", "Knowledge Center", "Archives"],
        "Sports": ["Stadium", "Arena", "Sports Complex", "Grounds"],
        "Museum": ["Museum", "Art Gallery", "History Museum", "Science Center"],
        "Theater": ["Theater", "Performing Arts Center", "Auditorium", "Hall"],
        "Room Rent": ["Hotel", "Resort", "Grand", "Plaza", "Regency"]
    };

    const typePrefixes = prefixes[type] || ["Venue"];
    const typeSuffixes = suffixes[type] || ["Center"];

    for (let i = 0; i < 10; i++) {
        const city = cities[i % cities.length];
        const prefix = typePrefixes[i % typePrefixes.length];
        const suffix = typeSuffixes[i % typeSuffixes.length];

        // Randomly choose between "City Prefix Suffix" or "Prefix Suffix of City" format for variety
        if (i % 2 === 0) {
            venues.push(`${city} ${prefix} ${suffix}`);
        } else {
            venues.push(`${prefix} ${suffix} of ${city}`);
        }
    }
    return venues;
}

// --- State ---
let currentUser = null;
let tickets = [];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Populate States
    const stateSelect = document.getElementById('state-select');
    Object.keys(indianStates).sort().forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    // Check LocalStorage for Theme
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
    }

    // Set Date Constraints
    const dateInput = document.getElementById('date');
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    };

    dateInput.min = formatDate(today);
    dateInput.max = formatDate(maxDate);

    loadTickets();
});

// --- Navigation ---
function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
    });
    const target = document.getElementById(`${pageId}-page`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('animate-fade-in');
    }
    window.scrollTo(0, 0);

    if (pageId === 'my-tickets') {
        renderTickets();
    }
}

function checkAuthAndRedirect(pageId) {
    if (!currentUser) {
        showNotification("Please sign in first!", "error");
        handleLogin();
    } else {
        navigateTo(pageId);
    }
}

// --- Auth ---
function handleLogin() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
}

// Google Auth Handler
function handleCredentialResponse(response) {
    try {
        const responsePayload = decodeJwtResponse(response.credential);

        currentUser = {
            name: responsePayload.name,
            email: responsePayload.email,
            avatar: responsePayload.picture
        };

        updateAuthUI();
        closeLoginModal();
        showNotification(`Welcome, ${currentUser.name}!`, "success");
    } catch (e) {
        console.error("Auth Error", e);
        showNotification("Authentication failed. Please try again.", "error");
    }
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function processLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const name = document.getElementById('login-name').value;

    currentUser = {
        name: name,
        email: email,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10B981&color=fff`
    };

    updateAuthUI();
    closeLoginModal();
    showNotification(`Welcome, ${currentUser.name}!`, "success");
}

function handleLogout() {
    currentUser = null;
    updateAuthUI();
    navigateTo('home');
    // Reset Google Button if needed
    if (typeof google !== 'undefined') {
        google.accounts.id.disableAutoSelect();
    }
}

function updateAuthUI() {
    const loginBtn = document.getElementById('login-btn');
    const userProfile = document.getElementById('user-profile');
    const authLinks = document.getElementById('auth-links');
    const accountName = document.getElementById('account-name');
    const accountEmail = document.getElementById('account-email');
    const accountAvatar = document.getElementById('account-avatar');
    const navAvatar = document.getElementById('user-avatar');

    // Mobile Elements
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileUserProfile = document.getElementById('mobile-user-profile');
    const mobileAuthLinks = document.getElementById('mobile-auth-links');
    const mobileUserAvatar = document.getElementById('mobile-user-avatar');
    const mobileUserName = document.getElementById('mobile-user-name');

    if (currentUser) {
        // Desktop
        loginBtn.classList.add('hidden');
        userProfile.classList.remove('hidden');
        authLinks.classList.remove('hidden');
        navAvatar.src = currentUser.avatar;

        // Mobile
        if (mobileLoginBtn) mobileLoginBtn.classList.add('hidden');
        if (mobileUserProfile) mobileUserProfile.classList.remove('hidden');
        if (mobileAuthLinks) mobileAuthLinks.classList.remove('hidden');
        if (mobileAuthLinks) mobileAuthLinks.classList.add('flex');
        if (mobileUserAvatar) mobileUserAvatar.src = currentUser.avatar;
        if (mobileUserName) mobileUserName.textContent = currentUser.name;

        // Account Page
        accountAvatar.src = currentUser.avatar;
        accountName.textContent = currentUser.name;
        accountEmail.textContent = currentUser.email;

        // Pre-fill form but allow editing
        document.getElementById('name').value = currentUser.name;
        document.getElementById('email').value = currentUser.email;
    } else {
        // Desktop
        loginBtn.classList.remove('hidden');
        userProfile.classList.add('hidden');
        authLinks.classList.add('hidden');

        // Mobile
        if (mobileLoginBtn) mobileLoginBtn.classList.remove('hidden');
        if (mobileUserProfile) mobileUserProfile.classList.add('hidden');
        if (mobileAuthLinks) mobileAuthLinks.classList.add('hidden');
        if (mobileAuthLinks) mobileAuthLinks.classList.remove('flex');
    }
}

// --- Mobile Menu ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// --- Theme ---
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// --- Booking Logic ---
function selectType(btn, type) {
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('ticket-type').value = type;

    const hoursContainer = document.getElementById('hours-container');
    const hoursInput = document.getElementById('hours');
    const hoursHint = document.getElementById('hours-hint');
    const roomOptions = document.getElementById('room-options');
    const theaterOptions = document.getElementById('theater-options');

    // Reset fields
    hoursContainer.classList.add('hidden');
    roomOptions.classList.add('hidden');
    theaterOptions.classList.add('hidden');

    hoursInput.required = false;
    document.getElementById('room-select').required = false;
    document.getElementById('seat-area').required = false;
    document.getElementById('seat-number').required = false;

    // Enable State Selection (Resetting previous "Top 6" behavior)
    const stateSelect = document.getElementById('state-select');
    stateSelect.disabled = false;
    stateSelect.value = "";
    document.getElementById('place-select').innerHTML = '<option value="">Select State First</option>';

    if (type === 'Room Rent') {
        hoursContainer.classList.remove('hidden');
        roomOptions.classList.remove('hidden');
        hoursInput.required = true;
        hoursInput.min = 6;
        hoursInput.max = 750;
        hoursInput.value = 24;
        hoursHint.textContent = "Min: 6 Hours, Max: 750 Hours";
        document.getElementById('room-select').required = true;
    } else if (type === 'Sports') {
        hoursContainer.classList.remove('hidden');
        hoursInput.required = true;
        hoursInput.min = 1;
        hoursInput.max = 6;
        hoursInput.value = 2;
        hoursHint.textContent = "Min: 1 Hour, Max: 6 Hours";
    } else if (type === 'Theater') {
        theaterOptions.classList.remove('hidden');
        document.getElementById('seat-area').required = true;
        document.getElementById('seat-number').required = true;
    }
}

function updatePlaces() {
    const state = document.getElementById('state-select').value;
    const type = document.getElementById('ticket-type').value;
    const placeSelect = document.getElementById('place-select');

    placeSelect.innerHTML = '<option value="">Select Venue</option>';

    if (state && type) {
        const venues = getVenues(state, type);
        venues.forEach(venue => {
            const option = document.createElement('option');
            option.value = venue;
            option.textContent = venue;
            placeSelect.appendChild(option);
        });
    } else if (state && indianStates[state]) {
        // Fallback if no type selected
        indianStates[state].forEach(place => {
            const option = document.createElement('option');
            option.value = place;
            option.textContent = place;
            placeSelect.appendChild(option);
        });
    }
}

function updateSeatValidation() {
    const area = document.getElementById('seat-area').value;
    const seatInput = document.getElementById('seat-number');
    const hint = document.getElementById('seat-hint');

    seatInput.value = "";

    if (area === 'Front') {
        seatInput.min = 1;
        seatInput.max = 100;
        hint.textContent = "Valid Seats: 1 - 100";
    } else if (area === 'Middle') {
        seatInput.min = 101;
        seatInput.max = 200;
        hint.textContent = "Valid Seats: 101 - 200";
    } else if (area === 'Back') {
        seatInput.min = 201;
        seatInput.max = 300;
        hint.textContent = "Valid Seats: 201 - 300";
    } else {
        hint.textContent = "";
    }
}

function updateRooms() {
    const bedType = document.querySelector('input[name="bed-type"]:checked')?.value;
    const roomSelect = document.getElementById('room-select');
    roomSelect.innerHTML = '<option value="">Select Room</option>';

    if (bedType) {
        const availableRooms = roomData.filter(r => r.type === bedType);
        availableRooms.forEach(room => {
            const option = document.createElement('option');
            option.value = room.number;
            option.textContent = `Room ${room.number} (${room.type})`;
            roomSelect.appendChild(option);
        });
    }
}

function handleBooking(e) {
    e.preventDefault();

    if (!currentUser) {
        showNotification("Please login first!", "error");
        return;
    }

    const type = document.getElementById('ticket-type').value;
    if (!type) {
        showNotification("Please select a booking type!", "error");
        return;
    }

    // Additional Validation
    const hours = parseInt(document.getElementById('hours').value);
    if (type === 'Room Rent') {
        if (hours < 6 || hours > 750) { showNotification("Room rent duration must be between 6 and 750 hours.", "error"); return; }
    } else if (type === 'Sports') {
        if (hours < 1 || hours > 6) { showNotification("Sports duration must be between 1 and 6 hours.", "error"); return; }
    } else if (type === 'Theater') {
        const area = document.getElementById('seat-area').value;
        const seat = parseInt(document.getElementById('seat-number').value);
        if (area === 'Front' && (seat < 1 || seat > 100)) { showNotification("Invalid seat for Front area (1-100).", "error"); return; }
        if (area === 'Middle' && (seat < 101 || seat > 200)) { showNotification("Invalid seat for Middle area (101-200).", "error"); return; }
        if (area === 'Back' && (seat < 201 || seat > 300)) { showNotification("Invalid seat for Back area (201-300).", "error"); return; }
    }

    const ticket = {
        id: 'TKT-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        type: type,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        state: document.getElementById('state-select').value,
        place: document.getElementById('place-select').value,
        hours: (type === 'Room Rent' || type === 'Sports') ? hours : 'N/A',
        room: type === 'Room Rent' ? document.getElementById('room-select').value : 'N/A',
        bed: type === 'Room Rent' ? document.querySelector('input[name="bed-type"]:checked')?.value : 'N/A',
        seat: type === 'Theater' ? `${document.getElementById('seat-area').value} - ${document.getElementById('seat-number').value}` : 'N/A',
        timestamp: new Date().toISOString()
    };

    tickets.push(ticket);
    saveTickets(); // Save to local storage
    renderTickets();
    navigateTo('my-tickets');
    e.target.reset();
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
    // Re-fill name/email for convenience
    document.getElementById('name').value = currentUser.name;
    document.getElementById('email').value = currentUser.email;
    showNotification("Ticket booked successfully!", "success");
}

function saveTickets() {
    localStorage.setItem('tickets', JSON.stringify(tickets));
}

function loadTickets() {
    const stored = localStorage.getItem('tickets');
    if (stored) {
        tickets = JSON.parse(stored);
        cleanupOldTickets();
    }
}

function cleanupOldTickets() {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in ms

    const initialCount = tickets.length;
    tickets = tickets.filter(ticket => {
        const ticketTime = new Date(ticket.timestamp);
        return (now - ticketTime) < oneDay;
    });

    if (tickets.length < initialCount) {
        console.log(`Removed ${initialCount - tickets.length} expired tickets`);
        saveTickets();
    }
}

function renderTickets() {
    const container = document.getElementById('tickets-container');

    if (tickets.length === 0) {
        container.innerHTML = `
            <div class="text-center col-span-full text-gray-500 py-12">
                <i class="fa-regular fa-ticket text-4xl mb-4"></i>
                <p>No tickets booked yet.</p>
            </div>`;
        return;
    }

    container.innerHTML = '';
    tickets.forEach(ticket => {
        const ticketEl = document.createElement('div');
        ticketEl.className = 'ticket-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700';

        let icon = 'fa-ticket';
        if (ticket.type === 'Library') icon = 'fa-book';
        if (ticket.type === 'Sports') icon = 'fa-futbol';
        if (ticket.type === 'Museum') icon = 'fa-building-columns';
        if (ticket.type === 'Theater') icon = 'fa-masks-theater';
        if (ticket.type === 'Room Rent') icon = 'fa-bed';

        ticketEl.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-2">${ticket.type}</span>
                    <h3 class="text-xl font-bold">${ticket.place}</h3>
                    <p class="text-sm text-gray-500">${ticket.state}</p>
                </div>
                <div class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <i class="fa-solid ${icon} text-gray-600 dark:text-gray-300"></i>
                </div>
            </div>
            
            <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                    <span class="text-gray-500">Date</span>
                    <span class="font-medium">${ticket.date}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-gray-500">Name</span>
                    <span class="font-medium">${ticket.name}</span>
                </div>
                ${ticket.room !== 'N/A' ? `
                <div class="flex justify-between">
                    <span class="text-gray-500">Room</span>
                    <span class="font-medium">#${ticket.room} (${ticket.bed})</span>
                </div>` : ''}
                ${ticket.seat !== 'N/A' && ticket.seat ? `
                <div class="flex justify-between">
                    <span class="text-gray-500">Seat</span>
                    <span class="font-medium">${ticket.seat}</span>
                </div>` : ''}
                ${ticket.hours !== 'N/A' ? `
                <div class="flex justify-between">
                    <span class="text-gray-500">Duration</span>
                    <span class="font-medium">${ticket.hours} Hrs</span>
                </div>` : ''}
            </div>

            <div class="ticket-dashed-line"></div>

            <div class="flex justify-between items-center">
                <div class="text-xs text-gray-400">
                    <p>Ticket ID</p>
                    <p class="font-mono font-bold text-gray-800 dark:text-gray-200">${ticket.id}</p>
                </div>
                <div id="qr-${ticket.id}" class="bg-white p-1 rounded"></div>
            </div>
        `;

        container.appendChild(ticketEl);

        // Generate QR
        let qrText = `TICKET: ${ticket.id}\nEVENT: ${ticket.place}\nNAME: ${ticket.name}\nDATE: ${ticket.date}`;
        if (ticket.room !== 'N/A') qrText += `\nROOM: ${ticket.room}`;
        if (ticket.seat !== 'N/A' && ticket.seat) qrText += `\nSEAT: ${ticket.seat}`;

        setTimeout(() => {
            new QRCode(document.getElementById(`qr-${ticket.id}`), {
                text: qrText,
                width: 64,
                height: 64,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L
            });
        }, 100);
    });
}

// --- Notifications ---
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';

    toast.innerHTML = `
        <i class="fa-solid ${icon} text-xl"></i>
        <div>
            <h4 class="font-bold text-sm uppercase tracking-wider opacity-70">${type}</h4>
            <p class="font-medium">${message}</p>
        </div>
    `;

    container.appendChild(toast);

    // Remove after 4.5 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4500);
}
