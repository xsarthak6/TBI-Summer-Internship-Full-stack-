# AI Prompt Testing Log

## Project
**AI EcoStay – AI Trip Planner**

---

# Prompt Version 1

## Prompt

```text
Create a travel itinerary for the given destination.

Destination: {destination}
Budget: {budget}
Days: {days}
Interests: {interests}
```

### Example Input

- Destination: Manali
- Budget: ₹25,000
- Days: 5
- Interests: Nature

### Example Output

- Simple paragraph describing the trip.
- No structure.
- Difficult to display in the UI.

---

# Prompt Version 2

## Prompt

```text
You are an eco-travel expert.

Create a sustainable travel itinerary.

Destination: {destination}
Budget: ₹{budget}
Duration: {days} days
Interests: {interests}

Provide:

1. Day-wise itinerary
2. Eco-friendly stay recommendations
3. Sustainable activities
4. Local food suggestions
5. Eco travel tips

Keep the response well formatted.
```

### Example Input

- Destination: Manali
- Budget: ₹25,000
- Days: 5
- Interests: Nature

### Example Output

- Day-wise itinerary
- Eco-friendly hotels
- Sustainable travel tips
- Local food recommendations

Output was well organized but still difficult to parse consistently.

---

# Prompt Version 3 (Final)

## Prompt

```text
You are an expert sustainable travel planner.

Return ONLY valid JSON.

{
  "tripTitle":"",
  "destination":"",
  "budget":{
      "stay":0,
      "food":0,
      "transport":0,
      "activities":0
  },
  "itinerary":[
      {
        "day":1,
        "title":"",
        "activities":[
            {
                "time":"",
                "activity":""
            }
        ]
      }
  ],
  "stays":[
      {
        "name":"",
        "price":"",
        "rating":""
      }
  ],
  "foods":[
      ""
  ],
  "tips":[
      ""
  ]
}
```

### Example Input

- Destination: Manali
- Budget: ₹25,000
- Days: 5
- Interests: Nature

### Example Output

```json
{
  "tripTitle": "Eco-Friendly Nature Getaway to Manali",
  "destination": "Manali, Himachal Pradesh",
  "budget": {
    "stay": 12000,
    "food": 4000,
    "transport": 5000,
    "activities": 4000
  }
}
```

The JSON response was easy to parse and directly display in the React UI.

---

# Best Prompt

Prompt Version 3 performed the best because it returned structured JSON instead of plain text. The JSON format made it easy to display the itinerary, budget breakdown, eco-friendly stays, local food recommendations, and travel tips in separate React components. It also reduced parsing errors and provided a more consistent response for different user inputs.

---

# System Role Used

```text
You are an expert sustainable travel planner.

Your task is to create personalized eco-friendly travel plans based on the user's destination, budget, duration, and interests.

Always return structured JSON that can be directly rendered in a web application.
```