# Solution Showcase Pack / حزمة عرض الحل

## Elevator Pitch

نبض الشبكة transforms water network management by prioritizing leak repairs based on real-time ROI analysis, cutting response time from 72 to 12 hours while reducing water loss by 15-20%.

## Problem → Promise → Proof

**Problem:** Saudi water utilities lose 20-35% of desalinated water to network leaks, wasting energy-intensive resources while struggling with false alarms and inefficient repair prioritization.

**Promise:** AI-powered decision system that simulates repair impact before dispatch, ranks incidents by return-per-hour, and validates effectiveness automatically—eliminating guesswork from maintenance operations.

**Proof:** Pilot data shows 92% leak detection accuracy, 67% reduction in false alarms, and demonstrable energy savings that directly support Saudi Vision 2030 and Net Zero 2060 commitments.

## Before / After Mini-Story

**Before:**

- Control room receives 40+ leak alerts daily, 60% are false positives
- Field teams spend 3-6 hours searching for exact leak location
- No clear prioritization—crews fix nearest leak, not most critical
- Average repair cycle: 48-72 hours from alert to resolution
- No reliable measure of repair effectiveness
- Annual water loss: 25-30% of production volume
- Energy waste: 4-7 kWh per cubic meter of lost water

**After:**

- System filters alerts through confidence scoring, reducing false alarms by 67%
- Precise GPS coordinates cut search time to under 30 minutes
- ROI-based queue ranks repairs by water/energy/cost savings per hour
- Average repair cycle: 8-12 hours from detection to validation
- Automated 7-day validation confirms 15-20% reduction in network loss
- Energy savings: 1.2-2.1 million kWh annually per district
- **Measurable impact:** Each 1% reduction in NRW saves 15,000 m³/day and prevents 60,000 kg CO₂ emissions

## 90-Second Demo Script

**0:00-0:10** [Hook]  
"Every cubic meter of water lost in Jeddah represents 4.5 kWh of desalination energy—wasted. What if operators could see the exact ROI of every repair before dispatching a crew?"

**0:10-0:25** [Persona & Setup]  
"Meet Ahmed, control room supervisor at a coastal utility managing 850 km of network. His dashboard shows 23 active alerts. Traditional systems can’t tell him which matters most."

**0:25-0:50** [Killer Moment 1: Simulation]  
"نبض الشبكة runs instant ‘assume repair’ simulation for each alert. Alert #7 shows: ‘Estimated savings: 180 m³/day, 810 kWh/day, 92% confidence.’ The system calculates this repair delivers 7.5 m³ saved per repair-hour—top priority."

**0:50-1:10** [Killer Moment 2: Constraints]  
"But wait—repair requires valve isolation affecting 340 subscribers. System checks isolation constraints, available crews, and budget remaining. It auto-generates work order with optimized timing: ‘Schedule for 2 AM, estimated 4-hour window, minimal service impact.’"

**1:10-1:25** [Killer Moment 3: Validation]  
"Seven days post-repair, system compares actual vs. predicted savings. Result: 172 m³/day recovered—95% accuracy. Machine learning weights auto-update. Ahmed’s KPIs improve monthly."

**1:25-1:30** [CTA]  
"Transform your operations. Request pilot access at [nabdalshabaka.com](http://nabdalshabaka.com)"

## ASCII Storyboard

```
Frame 1: ALERT DASHBOARD
┌─────────────────────────────────────┐
│  🚨 23 Active Alerts                │
│  ┌─────────────────────────────┐   │
│  │ #7  Leak Detected           │   │
│  │ Location: District 4-B      │   │
│  │ Confidence: 92%             │   │
│  │ ▶ SIMULATE IMPACT           │   │
│  └─────────────────────────────┘   │
│  [Traditional: No prioritization]  │
└─────────────────────────────────────┘

Frame 2: SIMULATION RESULTS
┌─────────────────────────────────────┐
│  📊 Impact Analysis - Alert #7      │
│  ┌─────────────────────────────┐   │
│  │ Water Loss: 180 m³/day      │   │
│  │ Energy Waste: 810 kWh/day   │   │
│  │ Cost Impact: 2,340 SAR/day  │   │
│  │ ROI Score: 7.5 m³/hour      │   │
│  │ Priority: CRITICAL (#1/23)  │   │
│  └─────────────────────────────┘   │
│  [Ranked by return-per-hour]       │
└─────────────────────────────────────┘

Frame 3: CONSTRAINT CHECK
┌─────────────────────────────────────┐
│  ⚙️ Feasibility Analysis             │
│  ┌─────────────────────────────┐   │
│  │ ✓ Crew available (Team 3)   │   │
│  │ ⚠ Requires valve isolation  │   │
│  │   → 340 subscribers affected│   │
│  │ ✓ Budget: 8,500 SAR remain  │   │
│  │ Optimal time: 02:00-06:00   │   │
│  │ ▶ GENERATE WORK ORDER       │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Frame 4: FIELD DEPLOYMENT
┌─────────────────────────────────────┐
│  🚛 Work Order #2847                │
│  ┌─────────────────────────────┐   │
│  │ Team: Field Crew 3          │   │
│  │ GPS: 21.5433°N, 39.1728°E   │   │
│  │ Tools: Acoustic detector    │   │
│  │ ETA: 23 minutes             │   │
│  │ Estimated duration: 4 hours │   │
│  │ [LIVE TRACKING MAP]         │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

Frame 5: POST-REPAIR VALIDATION
┌─────────────────────────────────────┐
│  ✅ Validation Results (Day 7)      │
│  ┌─────────────────────────────┐   │
│  │ Predicted: 180 m³/day       │   │
│  │ Actual: 172 m³/day          │   │
│  │ Accuracy: 95.6%             │   │
│  │ Status: CONFIRMED           │   │
│  │ Model weights updated ✓     │   │
│  │ Total saved: 1,204 m³       │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

## “How It Works” Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    نبض الشبكة ARCHITECTURE               │
└─────────────────────────────────────────────────────────┘

[DATA SOURCES]                    [TRUST BOUNDARY]
┌──────────────┐                  ║
│ SCADA System │──────────┐       ║
│ Flow/Pressure│          │       ║
└──────────────┘          ▼       ║
                    ┌──────────┐  ║  ┌─────────────────┐
┌──────────────┐    │  Data    │  ║  │  Core Engine    │
│ IoT Sensors  │───▶│ Ingestion│──║─▶│  - ML Detection │
│ Acoustic/AMR │    │  Layer   │  ║  │  - Simulation   │
└──────────────┘    └──────────┘  ║  │  - Optimization │
                          │        ║  └────────┬────────┘
┌──────────────┐          │        ║           │
│ GIS/Asset DB │──────────┘        ║           ▼
│ Network Topo │                   ║  ┌─────────────────┐
└──────────────┘                   ║  │ Decision Queue  │
                                   ║  │ Ranked by ROI   │
[EXTERNAL SYSTEMS]                 ║  └────────┬────────┘
┌──────────────┐                   ║           │
│ OMS/Work     │◀──────────────────║───────────┘
│ Order System │                   ║           
└──────────────┘                   ║  ┌─────────────────┐
                                   ║  │ Validation      │
┌──────────────┐                   ║  │ & Learning      │
│ Field Teams  │◀──────────────────║──│ (Post-repair)   │
│ Mobile App   │                   ║  └─────────────────┘
└──────────────┘                   

[DATA FLOW]
1. Real-time telemetry → Anomaly detection (92% sensitivity)
2. Confirmed alerts → Hydraulic simulation (EPANET/WNTR)
3. Impact scoring → Constraint checking (valves/crews/budget)
4. Optimized queue → Work order generation
5. Field execution → 7-day validation → Model update

[SECURITY]
- mTLS for sensor data
- OAuth 2.0 for operator access
- Audit logs (immutable, 7-year retention)
- Role-based access control (RBAC)
```

## Example I/O

**Sample API Request:**

```json
POST /api/v1/incidents/simulate
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "incidentId": "INC-2024-10-30-0847",
  "location": {
    "lat": 21.543312,
    "lng": 39.172845,
    "dmaId": "DMA-JED-04B"
  },
  "detectedFlow": 12.4,
  "baselineFlow": 8.1,
  "confidence": 0.92,
  "timestamp": "2024-10-30T04:47:23Z"
}
```

**Expected Response:**

```json
{
  "simulationId": "SIM-20241030-0847-A3F2",
  "incident": "INC-2024-10-30-0847",
  "results": {
    "estimatedLeakRate": 180.5,
    "unit": "m3/day",
    "energyWaste": 810.2,
    "energyUnit": "kWh/day",
    "costImpact": 2340.15,
    "currency": "SAR",
    "confidenceScore": 0.89,
    "roiPerHour": 7.52,
    "priorityRank": 1,
    "totalIncidents": 23
  },
  "constraints": {
    "valveIsolationRequired": true,
    "affectedSubscribers": 340,
    "estimatedDuration": 4.0,
    "optimalTimeWindow": "02:00-06:00",
    "availableCrews": ["TEAM-03"],
    "budgetAvailable": 8500.00,
    "estimatedCost": 3200.00
  },
  "recommendation": "IMMEDIATE_SCHEDULE",
  "nextSteps": [
    "Generate work order",
    "Notify crew dispatcher",
    "Schedule valve closure notification"
  ]
}
```

**cURL Command:**

```bash
curl -X POST https://api.nabdalshabaka.com/v1/incidents/simulate \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "incidentId": "INC-2024-10-30-0847",
    "location": {"lat": 21.543312, "lng": 39.172845, "dmaId": "DMA-JED-04B"},
    "detectedFlow": 12.4,
    "baselineFlow": 8.1,
    "confidence": 0.92
  }'
```

## Signature Use Cases

**Use Case 1: Emergency Leak Prioritization**

- **Input:** 15 simultaneous leak alerts during peak demand
- **Output:** Ranked queue showing top 3 repairs save 540 m³/day combined
- **Acceptance Criteria:**
  - GIVEN 15 concurrent alerts with varying confidence levels
  - WHEN system runs simulation for all incidents
  - THEN top-ranked alert shows ≥2x ROI vs. median alert
  - AND ranking considers crew availability and valve constraints
  - AND estimated impact accuracy is ±10% vs. actual

**Use Case 2: False Alarm Reduction**

- **Input:** Pressure fluctuation alert (68% confidence)
- **Output:** System holds alert in “monitoring” status, requests acoustic validation
- **Acceptance Criteria:**
  - GIVEN alert with confidence <70%
  - WHEN simulation shows ambiguous pattern
  - THEN system does NOT generate immediate work order
  - AND requests additional sensor data (acoustic/flow)
  - AND alert auto-escalates only if confidence rises to ≥85%

**Use Case 3: Post-Repair Validation & Learning**

- **Input:** Completed repair on 180 m³/day leak estimate
- **Output:** 7-day analysis shows 172 m³/day actual recovery, model weights updated
- **Acceptance Criteria:**
  - GIVEN repair marked complete in OMS
  - WHEN 7-day monitoring period expires
  - THEN system compares pre/post flow differential
  - AND calculates prediction accuracy (target: ≥85%)
  - AND updates ML model weights automatically
  - AND generates compliance report for regulator

## Competitive Snapshot

| Capability | Alternative Solutions | نبض الشبكة Differentiation | User Implication |
|------------|----------------------|-----------------------------|------------------|
| **Leak Detection** | Acoustic sensors only (point detection) | Multi-modal: pressure, flow, acoustic, AMR + ML fusion | 92% sensitivity vs. 60-75% industry average |
| **Prioritization** | Manual queue or FIFO | ROI-based ranking with constraint optimization | Field teams focus on highest-impact repairs first |
| **Impact Prediction** | None—reactive only | Pre-repair simulation using hydraulic models | Operators know expected savings before dispatching crew |
| **Validation** | Manual reports, if any | Automated 7-day validation with ML feedback loop | Continuous improvement; model accuracy increases over time |
| **Integration** | Standalone systems requiring manual data transfer | Native APIs for SCADA/GIS/OMS with bidirectional sync | Fits existing workflows without workflow disruption |

## Landing Page Hero

- **Headline:** Stop Guessing. Start Saving Water.
- **Subhead:** نبض الشبكة uses AI to rank every leak repair by real savings—so your crews fix what matters most, when it matters most.
- **CTA:** Request Pilot Demo
- **Value Bullets:**
  - Cut repair response time from 72 hours to 12 hours with ROI-based prioritization
  - Reduce false alarms by 67% using multi-sensor fusion and confidence scoring
  - Achieve 15-20% reduction in Non-Revenue Water within 12 months, validated automatically
- **Social Proof:** “Deployed across 3 Saudi utilities managing 2,400+ km of network. Recognized by Saudi Water Innovation Center at MiyahThon 2025.”

## PR-Style Release Note (v0.1)

**نبض الشبكة v0.1 Now Available for Pilot Programs**

TwinTech Industrial Analytics today announced the pilot release of نبض الشبكة (Network Pulse), an AI-powered decision platform that transforms water network maintenance from reactive to predictive. The system addresses Saudi Arabia’s critical need to reduce Non-Revenue Water (NRW) while supporting Vision 2030 sustainability goals.

**Key Features:**

- Real-time leak detection with 92% sensitivity across pressure, flow, and acoustic data
- Pre-repair impact simulation showing estimated water, energy, and cost savings
- Constraint-aware prioritization considering crew availability, valve topology, and budget
- Automated post-repair validation with machine learning feedback loop
- Native integration with SCADA, GIS, and OMS systems via RESTful APIs

**User Impact:**
Water utilities in Jeddah, Khobar, and Riyadh piloting the platform report 60-70% reduction in mean-time-to-repair and measurable decreases in NRW within the first quarter. The system’s ability to simulate repair impact before field deployment eliminates costly false-positive dispatches while ensuring crews focus on leaks with the highest return-per-hour.

**Known Limitations:**

- v0.1 supports networks with existing SCADA telemetry; manual meter networks require sensor upgrade
- Hydraulic model accuracy depends on asset database completeness (minimum 85% pipe inventory required)
- Acoustic sensor integration currently supports Sewerin and HWM devices; additional vendors in roadmap

**Next Release (Q1 2025):**

- Predictive maintenance module for valve and pump assets
- Mobile app for field crews with offline work order access
- Integration with robotic inspection systems for hard-to-access locations
- Multi-utility dashboard for regional benchmarking

For pilot program inquiries: [pilot@nabdalshabaka.com](mailto:pilot@nabdalshabaka.com)

## Share Kit

**Tweet Thread (7 posts):**

1/ Saudi water utilities lose 25-35% of desalinated water to leaks. That’s not just water—it’s 4.5 kWh of energy per cubic meter wasted. We built نبض الشبكة to change that. 🧵

2/ Traditional systems alert operators to leaks, but can’t answer: “Which repair saves the most water per hour of crew time?” Result: teams fix nearest leak, not most critical.

3/ نبض الشبكة runs instant hydraulic simulation for every alert. Output: “Repair this leak → save 180 m³/day, 810 kWh/day, 2,340 SAR/day. ROI: 7.5 m³/hour. Priority: #1/23.”

4/ But here’s the key: simulation considers REAL constraints—valve isolation impact, crew availability, budget remaining. No theoretical savings that can’t be executed.

5/ After repair, system waits 7 days then validates: predicted 180 m³/day, actual 172 m³/day → 95% accuracy. Machine learning weights auto-update. Model gets smarter every repair.

6/ Pilot results: 67% reduction in false alarms, repair time cut from 72h to 12h, 15-20% NRW reduction in 12 months. Direct contribution to Saudi Vision 2030 & Net Zero 2060.

7/ Recognized at #MiyahThon2025. Now seeking utilities for expanded pilots. If you manage water networks in Saudi Arabia, let’s talk: [nabdalshabaka.com](http://nabdalshabaka.com)

**LinkedIn Post (≈150 words):**

Every cubic meter of water lost in Saudi networks represents 4.5 kWh of desalination energy—wasted before it reaches a single subscriber.

At TwinTech, we’ve spent 15 years solving predictive maintenance challenges for ARAMCO and SABIC. Now we’re applying that expertise to water: introducing نبض الشبكة (Network Pulse).

The platform fuses SCADA, acoustic, and GIS data with explainable AI that tells operators not only where a leak is, but why it matters. Before a crew rolls, Ahmed in the control room can simulate impact, weigh valve isolation constraints, and see expected water, energy, and SAR savings per hour of field time.

Post-repair, the system validates actual recovery, updates model weights automatically, and produces regulator-ready reports. Pilots across Jeddah, Khobar, and Riyadh already show 67% fewer false alarms and 15-20% NRW reduction.

If your mandate is Vision 2030 resilience with measurable ROI, let’s run a pilot. [nabdalshabaka.com](http://nabdalshabaka.com)
