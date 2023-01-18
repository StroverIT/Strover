export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/brands/academy",
      permanent: false,
    },
  };
}
