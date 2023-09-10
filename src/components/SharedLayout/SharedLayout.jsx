const SharedLayout = ({ children }) => {
  return (
    <main>
      <section style={{ width: '100%', padding: '20px' }}>
        {children}
      </section>
    </main>
  );
};

export default SharedLayout;
