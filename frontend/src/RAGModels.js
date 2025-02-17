export const modelList = [
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn:
      "arn:aws:bedrock:us-east-1::foundation-model/amazon.titan-text-premier-v1:0",
    modelId: "amazon.titan-text-premier-v1:0",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Titan Text G1 - Premier",
    outputModalities: ["TEXT"],
    providerName: "Amazon",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn: "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v3",
    modelId: "anthropic.claude-v3",
    modelLifecycle: { status: "ACTIVE" },
    modelName: "Claude v3",
    outputModalities: ["TEXT"],
    providerName: "Anthropic",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn:
      "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2:1",
    modelId: "anthropic.claude-v2:1",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Claude",
    outputModalities: ["TEXT"],
    providerName: "Anthropic",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn: "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-v2",
    modelId: "anthropic.claude-v2",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Claude",
    outputModalities: ["TEXT"],
    providerName: "Anthropic",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT", "IMAGE"],
    modelArn:
      "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0",
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Claude 3 Sonnet",
    outputModalities: ["TEXT"],
    providerName: "Anthropic",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT", "IMAGE"],
    modelArn:
      "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-haiku-20240307-v1:0",
    modelId: "anthropic.claude-3-haiku-20240307-v1:0",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Claude 3 Haiku",
    outputModalities: ["TEXT"],
    providerName: "Anthropic",
    responseStreamingSupported: true,
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn:
      "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-instant-v1",
    modelId: "anthropic.claude-instant-v1",
    modelLifecycle: {
      status: "ACTIVE",
    },
    modelName: "Claude Instant",
    outputModalities: ["TEXT"],
    providerName: "Anthropic",
    responseStreamingSupported: true,
  },
  {
    "modelArn": "arn:aws:bedrock:us-east-1::foundation-model/meta.llama3-3-70b-instruct-v1:0",
    "modelId": "meta.llama3-3-70b-instruct-v1:0",
    "modelName": "Llama 3.3 70B Instruct",
    "providerName": "Meta",
    "inputModalities": [
        "TEXT"
    ],
    "outputModalities": [
        "TEXT"
    ],
    "responseStreamingSupported": true,
    "customizationsSupported": [],
    "inferenceTypesSupported": [
        "INFERENCE_PROFILE"
    ],
    "modelLifecycle": {
        "status": "ACTIVE"
    }
  },
  {
    customizationsSupported: [],
    guardrailsSupported: true,
    inferenceTypesSupported: ["ON_DEMAND"],
    inputModalities: ["TEXT"],
    modelArn: "arn:aws:bedrock:us-east-1::foundation-model/cohere.command-r-plus",
    modelId: "cohere.command-r-plus",
    modelLifecycle: { status: "ACTIVE" },
    modelName: "Cohere Command R+",
    outputModalities: ["TEXT"],
    providerName: "Cohere",
    responseStreamingSupported: true,
  },  
];
