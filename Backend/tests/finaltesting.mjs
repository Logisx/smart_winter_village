import axios from "axios";

// ✅ Updated FMI API Endpoint & Parameters
const API_URL = "https://opendata.fmi.fi/wfs";
const params = {
    service: "WFS",
    version: "2.0.0",
    request: "GetFeature",
    storedquery_id: "fmi::forecast::aurora::point::timevaluepair",
    latlon: "69.75852,26.99898", // Replace with your target latitude and longitude
    starttime: new Date().toISOString(), // Current time
    endtime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // Next 1 hour
    timestep: "10", // Data interval in minutes
};


// ✅ Fetch and Process Aurora Forecast Data
async function getAuroraForecast(targetLat, targetLon) {
    try {
        console.log(`🌐 Fetching aurora forecast for the next hour at location: ${targetLat}, ${targetLon}`);

        // ✅ Dynamically update location in parameters
        const updatedParams = { ...params, latlon: `${targetLat},${targetLon}` };
        const response = await axios.get(API_URL, { params: updatedParams });

        if (response.status !== 200) {
            throw new Error(`FMI API request failed with status ${response.status}`);
        }

        const xmlData = response.data;
        console.log("📡 XML Data Retrieved (Preview):", xmlData.substring(0, 3000));

        // ✅ Extract aurora probability data for the location
        const auroraValues = extractAuroraProbability(xmlData);

        if (!auroraValues.length) {
            console.log("⚠️ No valid aurora forecast data found for the next hour.");
            return { auroracanbeseen: "0%", letusseeaurora: false, recommendation: "No aurora activity expected." };
        }

        // ✅ Calculate aurora probability
        const auroraProbability = calculateAuroraProbability(auroraValues);

        // ✅ Forecast interpretation
        const auroraForecast = auroraProbability >= 60 ? "High" : 
                               auroraProbability >= 40 ? "Moderate" : 
                               auroraProbability >= 20 ? "Low" : "Very Low";

        const recommendation = auroraProbability >= 60 ? "Great chance! Find a dark spot and enjoy!" :
                               auroraProbability >= 40 ? "Possible auroras. Keep an eye on the sky!" :
                               "Low chances. Try again later.";

        const result = {
            auroraForecast,
            auroracanbeseen: `${auroraProbability}%`,
            letusseeaurora: auroraProbability >= 60 ? true : false,
            recommendation
        };

        console.log(JSON.stringify(result, null, 4));
        return result;

    } catch (error) {
        console.error("❌ Error fetching aurora forecast:", error.message);
        return { error: "Failed to fetch aurora forecast." };
    }
}

// ✅ Extract Aurora Probability Data from FMI XML
function extractAuroraProbability(xmlData) {
    const parameterRegex = /<BsWfs:BsWfsElement[^>]*>[\s\S]*?<BsWfs:ParameterName>Aurora_Probability<\/BsWfs:ParameterName>[\s\S]*?<BsWfs:ParameterValue>(\d+)<\/BsWfs:ParameterValue>/g;
    const allMatches = [...xmlData.matchAll(parameterRegex)];

    console.log("🔍 Found Aurora Forecast Data:", allMatches.length);
    
    let filteredValues = [];

    allMatches.forEach(match => {
        const probability = parseInt(match[1]);
        filteredValues.push(probability);
    });

    console.log("📊 Extracted Aurora Probabilities (%):", filteredValues);
    return filteredValues;
}

// ✅ Calculate Aurora Probability
function calculateAuroraProbability(auroraValues) {
    if (!auroraValues.length) return 0;

    const avgProbability = auroraValues.reduce((sum, num) => sum + num, 0) / auroraValues.length;
    console.log("🌍 Avg Aurora Probability (%):", avgProbability);

    return Math.round(avgProbability); // Round to nearest integer
}

// ✅ Run the Forecast for a Specific Location
getAuroraForecast(69.75852, 26.99898); // Future aurora forecast
