// utils/stringUtils.js
export const extractJsonString = (input) => {
  const regex = /```json([\s\S]*?)```/;
  const match = input.match(regex);
  if (match && match[1]) {
    return match[1].trim(); // trim to remove any extra whitespace
  }
  return null;
};
