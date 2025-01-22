import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMENAI_API_KEY;

if (!apiKey) {
  console.error("API key is missing. Please check your .env file.");
  throw new Error("API key is undefined.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const Generate_Courselayout_ai = model.startChat({
  generationConfig,
  history: [],
});

export const Generate_Coursecontent_ai = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Explain the concept in detail on topic: Bharat ki Azadi: An Intermediate Study, chapter: Challenges and Achievements, in JSON format with list of array fields as title, description in detail, and code example (code field in <precode> format) if applicable.\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"topic\": \"Bharat ki Azadi: An Intermediate Study - Challenges and Achievements\",\n  \"chapters\": [\n    {\n      \"chapter_id\": 1,\n      \"title\": \"The Partition of India and its Aftermath\",\n      \"description\": \"The partition of India in 1947, a direct consequence of the independence from British rule, presented monumental challenges. This included massive displacement of populations, communal violence, and the establishment of new national identities. The achievement was the birth of two independent nations, India and Pakistan, albeit under traumatic circumstances. The immediate aftermath involved managing refugee crises, integrating princely states, and establishing new political and administrative systems. The psychological scars of the partition and the unresolved issues continue to influence the region's socio-political landscape even today. Key challenges included the logistical nightmare of moving millions of people across newly formed borders, the lack of adequate resources to deal with refugees, and the intense communal violence that resulted in significant loss of life and property.\",\n      \"code\": null,\n       \"details\": {\n         \"challenges\": [\n           \"Massive displacement and refugee crises.\",\n           \"Communal violence and loss of life.\",\n           \"Integration of princely states.\",\n           \"Establishment of new administrative and political structures.\",\n           \"Economic disruption and resource scarcity.\"\n         ],\n        \"achievements\": [\n           \"Birth of independent India and Pakistan.\",\n           \"Initial steps towards nation-building.\",\n          \"Establishment of a framework for governance.\"\n        ]\n       }\n    },\n    {\n      \"chapter_id\": 2,\n      \"title\": \"Political and Institutional Development\",\n      \"description\": \"The newly independent India embarked on the challenging task of framing its constitution and establishing democratic institutions. This involved drafting a constitution that aimed to balance diverse interests, ensuring fundamental rights, and creating a parliamentary system. Building a stable democracy in a diverse society with high levels of illiteracy was an arduous task. The successful conduct of elections and the transfer of power through democratic means were significant achievements. However, challenges such as corruption, regional disparities, and the rise of divisive politics continued to pose hurdles. The emphasis on a mixed economy, combining socialist and capitalist approaches, aimed to foster economic growth and social justice.\",\n       \"code\": \"<precode># Example of fundamental rights enshrined in the Indian Constitution\\n\\nfundamental_rights = [\\n    \\\"Right to Equality\\\",\\n    \\\"Right to Freedom\\\",\\n    \\\"Right against Exploitation\\\",\\n    \\\"Right to Freedom of Religion\\\",\\n    \\\"Cultural and Educational Rights\\\",\\n    \\\"Right to Constitutional Remedies\\\"\\n]\\n\\nfor right in fundamental_rights:\\n    print(f\\\"- {right}\\\")\\n</precode>\",\n      \"details\": {\n        \"challenges\":[\n           \"Framing and implementing a constitution.\",\n           \"Establishing democratic institutions.\",\n           \"Managing regional disparities and divisive politics.\",\n           \"Tackling illiteracy and lack of political awareness.\",\n           \"Corruption and inefficient governance.\"\n         ],\n        \"achievements\":[\n           \"Adoption of a democratic constitution.\",\n           \"Establishment of a parliamentary system.\",\n           \"Conducting free and fair elections.\",\n          \"Transfer of power through democratic processes.\"\n          ]\n      }\n    },\n    {\n      \"chapter_id\": 3,\n      \"title\": \"Socio-economic Transformation\",\n      \"description\": \"Post-independence India strived to overcome widespread poverty, illiteracy, and social inequalities. The Five-Year Plans were introduced to guide economic development, emphasizing agriculture, industrialization, and social welfare.  Land reforms, though partially successful, aimed to address agrarian inequalities.  Significant progress was made in education, healthcare, and infrastructure.  However, challenges such as population growth, persistent poverty, and caste-based discrimination continued to hinder equitable development. The green revolution, while increasing agricultural output, also raised concerns about its environmental impact and its uneven distribution of benefits.  The focus on social justice and poverty alleviation remained a core objective but proved to be a complex and ongoing process.\",\n      \"code\": null,\n      \"details\": {\n        \"challenges\":[\n           \"Widespread poverty and inequality.\",\n           \"Illiteracy and lack of access to education.\",\n           \"Caste-based discrimination and social inequities.\",\n           \"Environmental concerns related to economic development.\",\n           \"Uneven distribution of benefits from economic growth.\"\n          ],\n        \"achievements\": [\n           \"Implementation of Five-Year Plans.\",\n          \"Land reforms aimed at addressing agrarian inequality.\",\n           \"Progress in education and healthcare.\",\n           \"Increased agricultural output through the Green Revolution.\",\n           \"Expansion of infrastructure.\"\n         ]\n      }\n    },\n    {\n      \"chapter_id\": 4,\n      \"title\": \"Foreign Policy and International Relations\",\n      \"description\": \"India, after independence, adopted a non-aligned foreign policy, seeking to avoid entanglement in Cold War alliances. It played a significant role in the Non-Aligned Movement (NAM), advocating for peaceful co-existence and decolonization.  Relations with neighboring countries, particularly Pakistan and China, were complex and often strained. India's participation in international organizations and its role as a leading voice of the developing world were notable achievements. Challenges included regional conflicts, border disputes, and balancing competing interests. India's nuclear program and its strategic considerations also posed significant geopolitical implications.\",\n      \"code\": \"<precode># Example of India's Non-Aligned Movement (NAM) principles\\n\\nnam_principles = [\\n    \\\"Mutual Respect for each other's territorial integrity and sovereignty\\\",\\n    \\\"Mutual Non-aggression\\\",\\n    \\\"Mutual Non-interference in each other's internal affairs\\\",\\n    \\\"Equality and Mutual Benefit\\\",\\n    \\\"Peaceful co-existence\\\"\\n]\\n\\nfor principle in nam_principles:\\n    print(f\\\"- {principle}\\\")\\n</precode>\",\n      \"details\": {\n        \"challenges\": [\n           \"Navigating the Cold War politics.\",\n          \"Complex relations with neighboring countries.\",\n           \"Border disputes and regional conflicts.\",\n          \"Balancing competing interests in the international arena.\",\n         \"Nuclear proliferation and strategic considerations.\"\n        ],\n        \"achievements\": [\n           \"Adoption of a non-aligned foreign policy.\",\n           \"Active role in the Non-Aligned Movement (NAM).\",\n           \"Advocacy for peaceful co-existence and decolonization.\",\n           \"Participation in international organizations and multilateral forums.\",\n           \"Assertion of India's growing global role.\"\n        ]\n      }\n    }\n\n  ]\n}\n```\n"},
      ],
    },
  ],
});
