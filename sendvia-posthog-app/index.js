// Sends a request to SendVia API
async function sendToSendVia(event, apiKey, workspaceId) {
    const response = await fetch(`https://api.sendvia.com/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            workspaceId,
            event,
        })
    }).catch((err) => console.error("SendVia API error:", err));

    console.log("SendVia response:", response.status);
}

export function setupPlugin({ config }) {
    console.log("SendVia Plugin Config Loaded", config);
}

export async function onEvent(event, { config }) {
    await sendToSendVia(event, config.apiKey, config.workspaceId);
}