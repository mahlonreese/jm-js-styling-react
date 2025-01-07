import Card from "./components/Card";
import villagers from "./data/villagers.json";

export default function App() {
  return (
    <Layout>
      {villagers.map(v => (<Card key={v.id} villager={v} />))}
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gridGap: "1rem",
      width: "100%",
    }}
    >
      {children}
    </div>
  );
}
