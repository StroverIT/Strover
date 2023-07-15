

export const getAll = async () => {
  try {
    const res = await fetch(`${process.env.HOST_URL}/api/project/getAll`, { cache: 'force-cache' });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: e };
  }
};

export const getById = async (_id) => {
  try {
    const res = await fetch(`${process.env.HOST_URL}/api/project/get`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id }),
    }, { cache: 'force-cache' });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return { error: e };
  }
};
