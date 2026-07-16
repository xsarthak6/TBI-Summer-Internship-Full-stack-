const { Mistral } = require("@mistralai/mistralai");

const client = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

exports.tripPlanner = async (req, res) => {
  try {
    const { destination, budget, days, interests } = req.body;

    const prompt = `
You are an expert eco travel planner.

Return ONLY valid JSON.

Do NOT write markdown.
Do NOT write \`\`\`json.
Do NOT explain anything.

Return exactly in this format:

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
  "foods":[""],
  "tips":[""]
}

Destination: ${destination}
Budget: ₹${budget}
Days: ${days}
Interests: ${interests}
`;

    const response = await client.chat.complete({
      model: "mistral-small-latest",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const text = response.choices[0].message.content;

    const plan = JSON.parse(text);

    res.json({
      success: true,
      plan,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "AI request failed",
    });
  }
};