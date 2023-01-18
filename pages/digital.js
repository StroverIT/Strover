import React from "react";

const Digital = () => {
  return <div></div>;
};

export default Digital;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/brands/digital",
      permanent: false,
    },
  };
}
