// const url =
//   "https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e29df0d22amshe8b1f680b2c6ae3p1532d4jsn08be1e332759",
    "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
  },
};

const btn = document.querySelector(".btn");
const summary = document.querySelector(".summary");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const input = document.querySelector("#url").value;
  const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

  summary.innerText = "please wait article is summarizing...";
  if (
    !/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(
      input
    )
  ) {
    summary.innerText = "Invalid url please provide a valid url!!!";
  } else {
    fetch(url, options)
      .then((data) => data.json())
      .then((data) => {
        summary.innerText = data?.summary;
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

// fetch(url, options)
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
