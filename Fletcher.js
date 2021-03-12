async function Fletcher(argument) {
  let FletcherResponse;

  try {
      FletcherResponse = await fetch(argument);
      FletcherResponse = await FletcherResponse.json();
  } catch (error) {
      console.error(`jsFetch error: ${error}`);
  } finally {
      return FletcherResponse;
  }

}
