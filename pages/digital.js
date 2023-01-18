export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/brands/digital",
      permanent: false,
    },
  };
}
