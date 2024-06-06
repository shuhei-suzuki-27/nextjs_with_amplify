export default async function RSC() {
  const message = await fetcher();
  return <div>{message}</div>;
}

const fetcher = async (): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'React Server Components';
};
