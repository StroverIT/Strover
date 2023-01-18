import React from "react";

const Web = () => {
  return <div></div>;
};

export default Web;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/brands/web",
      permanent: false,
    },
  };
}
