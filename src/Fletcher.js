'use strict';

async function Fletcher(argument) {

  if (argument === "test") {
    return console.log("Fletcher");
  }

  let FletcherResponse;

  try {
      FletcherResponse = await fetch(argument);
      FletcherResponse.json();
  } catch (error) {
      console.error(`Fletcher error: ${error}`);
  } finally {
      return FletcherResponse;
  }

}
