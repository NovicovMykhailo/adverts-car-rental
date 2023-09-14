export default function NotFoundComponent() {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>The specified search result is not found</h2>
    </div>
  );
}

const styles = {
  container: { display: 'flex', alighItems: 'center', justifyContent: 'center' },
  text: {fontFamily: "inherit", color: "gray"}
};
