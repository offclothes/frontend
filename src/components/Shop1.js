import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Shop1Data from "../Shop1Data";

const { kakao } = window;

function Shop1() {
  let [shoes] = useState(Shop1Data);

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
      '                <img src="/logo192.png" width="73" height="70">' +
      "           </div>" +
      '            <div class="desc">' +
      '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
      '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
      '                <div><a href="http://localhost:3000/shop1" target="_blank" class="link">홈페이지</a></div>' +
      "            </div>" +
      "        </div>" +
      "    </div>" +
      "</div>";
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "600px" }}>
        <a
          style={{
            marginLeft: "90px",
            color: "#194819",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "48px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          MARITHÉ
        </a>
        <div
          style={{
            height: "280px",
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
            marginLeft: "90px",
          }}
        >
          <p
            style={{
              paddingLeft: "24px",
              paddingRight: "24px",
              textAlign: "center",
              lineHeight: "40px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            마리떼프랑소와저버는 BACHEELLERIE와 FRANÇOIS GIRBAUD가 만든
            브랜드로, 1972년 프랑스에서 론칭한 이후, 스톤워싱, 배기진,
            엔지니어드진 등을 세계 최초로 개발하였습니다.
          </p>
        </div>
        <div
          id="map"
          style={{
            height: "300px",
            marginLeft: "90px",
            marginBottom: "20px",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
        ></div>
        <p
          style={{
            textAlign: "center",
            marginLeft: "90px",
            fontWeight: "400",
            fontSize: "20px",
            fontHeight: "29px",
          }}
        >
          주소: 경기도 안양시 만안구 성결대학로
        </p>
      </div>
      <div style={{ marginLeft: "100px" }}>
        <p
          style={{
            display: "flex",
            height: "72px",
            fontWeight: "800",
            fontSize: "25px",
            lineHeight: "39px",
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          전체
        </p>
        <Container>
          <Row style={{ gap: "50px" }}>
            {shoes.map(function (a, i) {
              return (
                <ShopGoods key={shoes[i].id} i={i} shoes={shoes}></ShopGoods>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

function ShopGoods(props) {
  return (
    <Col md="5" style={{ textAlign: "center" }}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="100%"
        height="80%"
      ></img>
      <h4>{props.shoes[props.i].title}</h4>
    </Col>
  );
}

export default Shop1;
