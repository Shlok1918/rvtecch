const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.rvtechelevators.com/api"

export async function submitLead(data: any) {
  const response = await fetch(`${API_BASE_URL}/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to submit lead")
  return response.json()
}

export async function submitQuote(data: any) {
  const response = await fetch(`${API_BASE_URL}/quote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to submit quote")
  return response.json()
}

export async function submitServiceRequest(data: any) {
  const response = await fetch(`${API_BASE_URL}/service`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to submit service request")
  return response.json()
}
