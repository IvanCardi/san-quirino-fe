export const getAvatars = async (): Promise<string[]> => {
  const avatars = await fetch(`${process.env.BE_BASE_URL}/avatars`, {next: {revalidate: 60}});

  return await avatars.json();
};
