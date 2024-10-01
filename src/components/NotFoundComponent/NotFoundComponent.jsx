export default function NotFoundComponent({message}) {
  return (
    <div style={styles.container}>
      <h2 style={styles.text}>{message}</h2>
    </div>
  );
}

const styles = {
  container: { display: 'flex', alighItems: 'center', justifyContent: 'center', height: '100vh'},
  text: {fontFamily: "inherit", color: "gray", paddingTop: "10vh"}
};
