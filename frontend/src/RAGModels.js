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
    modelArn: "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0",
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
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
    "modelArn": "arn:aws:bedrock:us-east-1::foundation-model/meta.llama3-8b-instruct-v1:0",
    "modelId": "meta.llama3-8b-instruct-v1:0",
    "modelName": "Llama 3 8B Instruct",
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
        "ON_DEMAND"
    ],
    "modelLifecycle": {
        "status": "ACTIVE"
    }
  },
  {
    "modelArn": "arn:aws:bedrock:us-east-1::foundation-model/cohere.command-r-plus-v1:0",
    "modelId": "cohere.command-r-plus-v1:0",
    "modelName": "Command R+",
    "providerName": "Cohere",
    "inputModalities": [
        "TEXT"
    ],
    "outputModalities": [
        "TEXT"
    ],
    "responseStreamingSupported": true,
    "customizationsSupported": [],
    "inferenceTypesSupported": [
        "ON_DEMAND"
    ],
    "modelLifecycle": {
        "status": "ACTIVE"
    }
  }
];
