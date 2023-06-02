import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from "../Data";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Goods1 from "../components/Goods1";
import RegisterGoods from "../components/RegisterGoods";
import ChangeGoods from "../components/ChangeGoods";
import MyPage from "../components/MyPage";
import RegisterBoard from "../components/RegisterBoard";
import ChangeBoard from "../components/ChangeBoard";
import Board from "../components/Board";
import axios from "axios";

function Category() {
  let [gender, setGender] = useState("");
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#E8F3DA",
          borderTop: "1px solid #789B78",
          borderBottom: "1px solid #789B78",
        }}
        variant="light"
      >
        <Nav className="me-auto">
          <Nav.Link
            style={{
              paddingRight: "80px",
              paddingLeft: "50px",
              color: "#304F30",
              fontWeight: "600",
            }}
            onClick={() => {
              setGender("여성");
              navigate("/category/female");
            }}
          >
            여성
          </Nav.Link>
          <Nav.Link
            style={{
              paddingRight: "80px",
              color: "#304F30",
              fontWeight: "600",
            }}
            onClick={() => {
              setGender("남성");
              navigate("/category/male");
            }}
          >
            남성
          </Nav.Link>
          <Nav.Link
            style={{
              paddingRight: "80px",
              color: "#304F30",
              fontWeight: "600",
            }}
            onClick={() => {
              setGender("공용");
              navigate("/category/both");
            }}
          >
            공용
          </Nav.Link>
          <Nav.Link
            style={{ color: "#304F30", fontWeight: "600" }}
            onClick={() => {
              navigate("/eventAll");
            }}
          >
            할인/폐점
          </Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/category">
          <Route path="female" element={<Gender />} />
          <Route path="male" element={<Gender />} />
          <Route path="both" element={<Gender />} />
        </Route>
        <Route path="/eventAll" element={<Board />} />
        <Route path="/shop/item" element={<Goods1 />} />
        <Route path="/registerGoods" element={<RegisterGoods />} />
        <Route path="/changeGoods" element={<ChangeGoods />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/registerBoard" element={<RegisterBoard />} />
        <Route path="/changeBoard" element={<ChangeBoard />} />
      </Routes>
    </div>
  );

  function Gender() {
    return (
      <div>
        <p
          style={{
            marginTop: "40px",
            marginLeft: "60px",
            marginRight: "60px",
            paddingBottom: "10px",
            fontSize: "20px",
            borderBottom: "1px solid #9F9F9F",
            fontWeight: "600",
          }}
        >
          {gender} | ALL
        </p>
        <Container>
          <Row style={{ rowGap: "50px" }}>
            {shoes.map((a, i) => {
              return <Goods key={shoes[i].id} i={i} shoes={shoes}></Goods>;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

function Goods(props) {
  let navigate = useNavigate();
  return (
    <Col md="4" style={{ textAlign: "center" }}>
      <img
        style={{ cursor: "pointer" }}
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="60%"
        onClick={() => {
          navigate("/shop/item/"); //아이템id추가
        }}
      ></img>
      <h4>{props.shoes[props.i].title}</h4>
    </Col>
  );
}

export default Category;
