export const getAvatars = async (): Promise<string[]> => {
  const avatars = await fetch(`${process.env.BE_BASE_URL}/avatars`);

  return await avatars.json();
};
