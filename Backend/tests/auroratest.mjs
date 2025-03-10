import axios from "axios";

// FMI API Endpoint & Parameters
const API_URL = "https://opendata.fmi.fi/wfs";
const params = {
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
    storedquery_id: "fmi::observations::magnetometer::simple",
    starttime: new Date(new Date().getTime() - 6 * 60 * 60 * 1000).toISOString(), // Last 6 hours
    endtime: new Date().toISOString(),
    timestep: "60",
};

// Function to fetch and process aurora data
async function getAuroraForecast(targetLat, targetLon) {
    try {
        console.log(`🌐 Fetching aurora forecast for location: ${targetLat}, ${targetLon}`);
        const response = await axios.get(API_URL, { params });

        if (response.status !== 200) {
            throw new Error(`FMI API request failed with status ${response.status}`);
        }

        const xmlData = response.data;
        
        console.log("📡 Full XML Preview (First 3000 chars):", xmlData.substring(0, 3000));

        // Find the closest magnetometer station and get its geomagnetic data
        const geomagneticValues = filterClosestLocationData(xmlData, targetLat, targetLon);

        if (!geomagneticValues.length) {
            console.log("⚠️ No geomagnetic data found for the requested location.");
            return { auroracanbeseen: "0%", letusseeaurora: false };
        }

        // Calculate aurora probability
        const auroraProbability = calculateAuroraProbability(geomagneticValues);

        // Build Response JSON
        const result = {
            auroracanbeseen: `${auroraProbability}%`,
            letusseeaurora: auroraProbability >= 60 ? true : false,
        };

        console.log(JSON.stringify(result, null, 4));
        return result;

    } catch (error) {
        console.error("❌ Error fetching aurora data:", error.message);
        return { error: "Failed to fetch aurora forecast." };
    }
}

// 🔹 **Find the Closest Magnetometer Station**
function filterClosestLocationData(xmlData, targetLat, targetLon) {
    const locationRegex = /<gml:pos>(.*?)<\/gml:pos>/g;
    const allMatches = [...xmlData.matchAll(locationRegex)];

    console.log("🔍 Found Locations:", allMatches.length);

    if (!allMatches.length) {
        console.log("⚠️ No locations found.");
        return [];
    }

    let closestLocation = null;
    let minDistance = Number.MAX_VALUE;

    // Find the closest station
    allMatches.forEach(match => {
        const [lat, lon] = match[1].split(" ").map(Number);
        const distance = Math.sqrt(Math.pow(lat - targetLat, 2) + Math.pow(lon - targetLon, 2));

        if (distance < minDistance) {
            minDistance = distance;
            closestLocation = { lat, lon };
        }
    });

    console.log(`✅ Closest station found: ${closestLocation.lat}, ${closestLocation.lon}`);

    return extractGeomagneticValues(xmlData, closestLocation.lat, closestLocation.lon);
}

// 🔹 **Extract Geomagnetic Values for the Closest Station**
function extractGeomagneticValues(xmlData, targetLat, targetLon) {
    const parameterRegex = /<BsWfs:BsWfsElement[^>]*>[\s\S]*?<gml:pos>(.*?)<\/gml:pos>[\s\S]*?<BsWfs:ParameterName>(.*?)<\/BsWfs:ParameterName>[\s\S]*?<BsWfs:ParameterValue>(-?\d+\.\d+)<\/BsWfs:ParameterValue>/g;
    const allMatches = [...xmlData.matchAll(parameterRegex)];

    console.log("🔍 Found Geomagnetic Data:", allMatches.length);
    
    let filteredValues = [];
    allMatches.forEach(match => {
        const [lat, lon] = match[1].split(" ").map(Number);
        const paramName = match[2].trim();
        const value = parseFloat(match[3]);

        if (Math.abs(lat - targetLat) < 0.05 && Math.abs(lon - targetLon) < 0.05) {
            console.log(`📍 Matched -> Location: ${lat}, ${lon}, Parameter: ${paramName}, Value: ${value}`);
            filteredValues.push(value);
        }
    });

    console.log("📊 Extracted Geomagnetic Values (nT):", filteredValues);

    return filteredValues;
}

// 🔹 **Calculate Aurora Probability Based on Geomagnetic Activity**
function calculateAuroraProbability(geomagneticValues) {
    if (!geomagneticValues.length) return 0;

    const avgDisturbance = geomagneticValues.reduce((sum, num) => sum + num, 0) / geomagneticValues.length;
    console.log("🌍 Avg Geomagnetic Disturbance (nT):", avgDisturbance);

    let kpIndex = 0;
    if (avgDisturbance <= -800) kpIndex = 9;
    else if (avgDisturbance <= -500) kpIndex = 8;
    else if (avgDisturbance <= -350) kpIndex = 7;
    else if (avgDisturbance <= -200) kpIndex = 6;
    else if (avgDisturbance <= -100) kpIndex = 5;
    else if (avgDisturbance <= -50) kpIndex = 4;
    else if (avgDisturbance <= -30) kpIndex = 3;
    else kpIndex = 2;

    console.log("🔢 Calculated Kp Index:", kpIndex);

    return kpIndex >= 8 ? 95 : kpIndex >= 7 ? 85 : kpIndex >= 6 ? 75 : kpIndex >= 5 ? 60 : kpIndex >= 4 ? 40 : kpIndex >= 3 ? 20 : 5;
}


// 🔹 **Run the Forecast for a Specific Location**
getAuroraForecast(69.75852, 26.99898);