export const toReturnCardID = (name: string, index: number): string =>
  name.replace(" ", "_").toLowerCase() + "_" + index;
