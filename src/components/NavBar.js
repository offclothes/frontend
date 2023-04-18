import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Category from "./Category";
import Shop1 from "../components/Shop1";
import MainImage from "../assets/image/clothes.jpg";

const { kakao } = window;

function NavBar() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand
            style={{
              paddingLeft: "1em",
              color: "#A8DBA8",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "25px",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            OffClothes
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "50em", marginLeft: "10em" }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Category></Category>

      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/shop1" element={<Shop1 />} />
      </Routes>
    </div>
  );
}

function Main() {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    var content =
      '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      "            카카오 스페이스닷원" +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      "        </div>" +
      '        <div class="body">' +
      '            <div class="img">' +
      '                <img src="../assets/image/clothes.jpg" width="73" height="70">' +
      "           </div>" +
      '            <div class="desc">' +
      '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
      '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
      '                <div><a href="http://localhost:3000/shop1" target="_blank" class="link">홈페이지</a></div>' +
      "            </div>" +
      "        </div>" +
      "    </div>" +
      "</div>";

    let overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });

    kakao.maps.event.addListener(marker, "click", function () {
      overlay.setMap(map);

      function closeOverlay() {
        overlay.setMap(null);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "15px",
          marginBottom: "15px",
          background: "#F5F5F5",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "550",
          }}
        >
          OffClothes는 내 주변 오프라인 의류 매장을
          <br /> 한 눈에 확인해 볼 수 있는 웹사이트입니다.
          <br /> 소개소개
          <br /> 소개소개
          <br /> 소개소개
        </p>
        <img style={{ width: "300px", height: "200px " }} src={MainImage}></img>
      </div>
      <div
        id="map"
        style={{
          width: "80%",
          height: "500px",
          marginBottom: "20px",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "20px",
        }}
      ></div>
    </div>
  );
}

export default NavBar;
