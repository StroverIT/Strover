export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/brands/web",
      permanent: false,
    },
  };
}
