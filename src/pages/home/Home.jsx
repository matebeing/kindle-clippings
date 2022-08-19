import Kindle from "../../assets/kindle.svg";
import { useClippings } from "../../hooks/myClippings";
import { Link } from "react-router-dom";

import * as S from "./styles";

function Home() {
  const { handleSetClippings } = useClippings();

  const showFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = (e) => {
      const uploadedFille = e.target.result;
      handleSetClippings(uploadedFille);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <S.Container>
        <S.Wrapper>
          <S.KindleMockup src={Kindle} alt="Kindle Mockup" />
        </S.Wrapper>
        <S.Wrapper>
          <h1 style={{ color: "#555555" }}>Connect your Amazon Kindle</h1>
          <div style={{ width: "400px" }}>
            You must use an usb cable to tranfer the data from your Amazon
            Kindle to your computer. Select the file in the path{" "}
            <S.Path>kindle/system/My Clippings.txt</S.Path>
          </div>
          <div>
            <input type="file" accept=".txt" required onChange={showFile} />
            <Link to={"/dashboard"}>
              <S.Button>Upload</S.Button>
            </Link>
          </div>
        </S.Wrapper>
      </S.Container>
    </div>
  );
}

export default Home;
