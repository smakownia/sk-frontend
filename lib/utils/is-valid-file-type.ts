export function isValidFileType(
  fileName: string,
  ...validFileExtensions: string[]
) {
  const extension = fileName.split(".").pop();

  if (!extension) return false;

  return validFileExtensions.includes(extension);
}
