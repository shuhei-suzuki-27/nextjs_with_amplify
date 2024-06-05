export default async function DummyRSC() {
  await sleep(1000);
  return <div>RSC</div>;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
