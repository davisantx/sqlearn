import { createCliRenderer, RGBA } from "@opentui/core";

export const style: { bgColor: RGBA } = {
  bgColor: RGBA.fromHex('#3f2121ff'),
} as const;

export const screenTexts : {resultQuery: string, sqlCode: string} = {
  resultQuery: ``,
  sqlCode: ``,
}

export const renderer = await createCliRenderer();