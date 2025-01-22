import react, { useState, useEffect } from "react";
const App = () => {
  let [count, setCount] = useState(0);
  const [downloadurl, SetDownloadurl] = useState("");
  const [img, SetImg] = useState("");
  const [author, setAuthor] = useState("");
  const [imglist, SetImglist] = useState([]);
  const [prevbtn, Setprevbtn] = useState(true);
  const [nextbtn, Setnextbtn] = useState(false);

  //console.log('hello')

  const fetchData = async (count) => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    const images = await response.json();
    SetImglist(images);

    setCount(count);
    SetImg(images[count.toString()]["download_url"]);
    setAuthor(images[count.toString()]["author"]);
    SetDownloadurl(images[count.toString()]["url"]);
    //console.log(images[1]['download_url']);

    //console.log(images);
  };
  useEffect(() => {
    fetchData(count);
  }, []);

  const NextCount = () => {
    count = count + 1;
    SetImg(imglist[count.toString()]["download_url"]);
    setAuthor(imglist[count.toString()]["author"]);
    SetDownloadurl(imglist[count.toString()]["url"]);

    setCount(count);
    if (imglist.length - 1 === count) {
      Setnextbtn(true);
    } else {
      Setprevbtn(false);
    }
  };

  const PrevCount = async () => {
    //let kount = count;
    count = count - 1;
    await SetImg(imglist[count.toString()]["download_url"]);
    setAuthor(imglist[count.toString()]["author"]);
    SetDownloadurl(imglist[count.toString()]["url"]);
    setCount(count);
    if (count === 0) {
      Setprevbtn(true);
    } else {
      Setnextbtn(false);
    }
    //console.log(imglist)
  };
  //  const image = () => {};

  return (
    <>
      <div className="card">
        <button
          onClick={PrevCount}
          disabled={prevbtn}
          style={{
            position: "absolute",
            top: "40%",

            border: "solid 1px #ff55aa",
          }}
        >
          Prev
        </button>
        <a target="_blank" href={downloadurl}>
          <img
            src={img}
            style={{
              marginLeft: "75px",
              marginRight: "5px",
              border: "1px solid black",
              height: "300px",
            }}
            alt="Logo"
          />
        </a>

        <button
          onClick={NextCount}
          disabled={nextbtn}
          style={{
            position: "absolute",
            top: "40%",
            border: "solid 1px #ff55aa",
          }}
        >
          Next
        </button>
      </div>
      <p style={{ marginLeft: "50%" }}>Img {count} </p>
      <p className="read-the-docs center" style={{ marginLeft: "35%" }}>
        Author : {author}{" "}
      </p>
    </>
  );
};
export default App;
