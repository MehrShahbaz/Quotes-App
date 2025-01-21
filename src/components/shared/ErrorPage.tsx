const ErrorPage = (): React.ReactElement => (
  <div
    id="error-page"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      flexDirection: 'column',
      marginTop: '5rem',
    }}
  >
    <h1>Oops!</h1>
    <p>Sorry, Route does not exisits</p>
  </div>
);

export default ErrorPage;
