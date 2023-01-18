import React from "react";

const Academy = () => {
  return <div></div>;
};

export default Academy;

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: "/brands/academy",
      permanent: false,
    },
  };
}
