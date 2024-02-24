
export function DevView({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
