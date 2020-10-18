export const entrypoint = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Ok, we`re good",
    }),
  };
};
