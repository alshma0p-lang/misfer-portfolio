// Mock API for demo purposes - نبض الشبكة

const API_BASE_URL = 'https://api.nabdalshabaka.com/v1';

// Simulate API delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Mock incident simulation
async function simulateIncident(incidentData) {
    await delay(800); // Simulate network latency

    return {
        simulationId: `SIM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        incident: incidentData.incidentId,
        results: {
            estimatedLeakRate: 180.5,
            unit: 'm3/day',
            energyWaste: 810.2,
            energyUnit: 'kWh/day',
            costImpact: 2340.15,
            currency: 'SAR',
            confidenceScore: 0.89,
            roiPerHour: 7.52,
            priorityRank: 1,
            totalIncidents: 23
        },
        constraints: {
            valveIsolationRequired: true,
            affectedSubscribers: 340,
            estimatedDuration: 4.0,
            optimalTimeWindow: '02:00-06:00',
            availableCrews: ['TEAM-03'],
            budgetAvailable: 8500.00,
            estimatedCost: 3200.00
        },
        recommendation: 'IMMEDIATE_SCHEDULE',
        nextSteps: [
            'Generate work order',
            'Notify crew dispatcher',
            'Schedule valve closure notification'
        ]
    };
}

// Mock alert data
const mockAlerts = [
    {
        id: 'INC-2024-10-30-0847',
        priority: 1,
        location: 'الحي 4-B، جدة',
        locationEn: 'District 4-B, Jeddah',
        coordinates: { lat: 21.543312, lng: 39.172845 },
        estimatedSavings: { water: 180, energy: 810 },
        confidence: 0.92,
        roiPerHour: 7.5,
        status: 'pending'
    },
    {
        id: 'INC-2024-10-30-0823',
        priority: 2,
        location: 'الحي 2-A، الخبر',
        locationEn: 'District 2-A, Khobar',
        coordinates: { lat: 26.294424, lng: 50.207459 },
        estimatedSavings: { water: 145, energy: 653 },
        confidence: 0.88,
        roiPerHour: 6.1,
        status: 'pending'
    },
    {
        id: 'INC-2024-10-30-0801',
        priority: 3,
        location: 'الحي 7-C، الرياض',
        locationEn: 'District 7-C, Riyadh',
        coordinates: { lat: 24.713552, lng: 46.675296 },
        estimatedSavings: { water: 98, energy: 441 },
        confidence: 0.76,
        roiPerHour: 4.1,
        status: 'pending'
    }
];

// Expose API functions
window.API = {
    simulateIncident,
    getMockAlerts: () => mockAlerts
};

// Initialize demo data on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mock API initialized. Demo data available at window.API');

    // Track page load
    if (window.trackPageView) {
        trackPageView('home');
    }
});
