import { useNavigate } from "react-router-dom";
import "../css/board.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Board() {
  let navigate = useNavigate();
  let [data, setData] = useState([]);
  let [allData, setAllData] = useState([]);
  let [discountData, setDiscountData] = useState([]);
  let [closeData, setCloseData] = useState([]);
  let [myPost, setMyPost] = useState([]);

  useEffect(() => {
    axios.get("/eventAll").then((res) => {
      let copy = [...data];
      copy.push(...res.data.list);
      setData(copy);
    });
  }, []);

  return (
    <div className="boardMain">
      <div className="boardTop">
        <button
          className="boardDiscountButton"
          onClick={() => {
            axios.get("/eventAll", { params: { state: "A" } }).then((res) => {
              let copy = [...allData];
              copy.push(...res.data.list);
              setData(copy);
              return (
                <div>
                  {data.map(function (a, i) {
                    return (
                      <BoardList key={data[i].eventId} i={i} data={data} />
                    );
                  })}
                </div>
              );
            });
          }}
        >
          전체
        </button>
        <button
          className="boardDiscountButton"
          onClick={() => {
            axios.get("/eventAll", { params: { state: "D" } }).then((res) => {
              let copy = [...discountData];
              copy.push(...res.data.list);
              setData(copy);
              return (
                <div>
                  {data.map(function (a, i) {
                    return (
                      <BoardList key={data[i].eventId} i={i} data={data} />
                    );
                  })}
                </div>
              );
            });
          }}
        >
          할인
        </button>
        <button
          className="boardClosureButton"
          onClick={() => {
            axios
              .get("/eventAll", { params: { state: "C" } })
              .then((res) => {
                let copy = [...closeData];
                copy.push(...res.data.list);
                setData(copy);
                return (
                  <div>
                    {data.map(function (a, i) {
                      return (
                        <BoardList key={data[i].eventId} i={i} data={data} />
                      );
                    })}
                  </div>
                );
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          폐점
        </button>
        <button
          className="boardMyButton"
          onClick={() => {
            axios
              .get("/myPost")
              .then((res) => {
                let copy = [...myPost];
                copy.push(...res.data);
                setData(copy);

                return (
                  <div>
                    {data.map(function (a, i) {
                      return (
                        <div>
                          <div>
                            <MyBoardList
                              key={data[i].eventId}
                              i={i}
                              data={data}
                            />
                          </div>
                          <div className="boardButton">
                            <button
                              className="boardChangeButton"
                              onClick={() => {
                                navigate("/changeBoard");
                              }}
                            >
                              수정
                            </button>
                            <button className="boardDeleteButton">삭제</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          내가 작성한 글 보기
        </button>
        <div className="boardRegister">
          <button
            className="boardRegisterButton"
            onClick={() => {
              navigate("/registerBoard");
            }}
          >
            작성하기
          </button>
        </div>
      </div>
      <div>
        {data.map(function (a, i) {
          return <BoardList key={data[i].eventId} i={i} data={data} />;
        })}
      </div>
    </div>
  );
}

function BoardList(props) {
  let navigate = useNavigate();
  return (
    <div>
      <div className="boardList">
        <div className="boardDetail">
          <p className="boardName">
            {props.data[props.i].shoppingMal.shopName}
          </p>
          <p>제목 : {props.data[props.i].title}</p>
          <p>주소 : {props.data[props.i].shoppingMal.address.address1}</p>
          <p>내용 : {props.data[props.i].content}</p>
          <p>
            기간 : {props.data[props.i].startDay} ~ {props.data[props.i].endDay}
          </p>
          <div
            className="boardGoShop"
            onClick={() => {
              navigate("/shop");
            }}
          >
            매장 페이지 이동하기
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}></div>
      </div>
      <div>
        <div className="boardButton">
          <button
            className="boardChangeButton"
            onClick={() => {
              navigate("/changeBoard");
            }}
          >
            수정
          </button>
          <button className="boardDeleteButton">삭제</button>
        </div>
        <hr />
      </div>
    </div>
  );
}

function MyBoardList(props) {
  let navigate = useNavigate();
  return (
    <div>
      <div className="boardList">
        <div className="boardDetail">
          <p className="boardName">
            {props.data[props.i].shoppingMal.shopName}
          </p>
          <p>제목 : {props.data[props.i].title}</p>
          <p>주소 : {props.data[props.i].shoppingMal.address.address1}</p>
          <p>내용 : {props.data[props.i].content}</p>
          <p>
            기간 : {props.data[props.i].startDay} ~ {props.data[props.i].endDay}
          </p>
          <div
            className="boardGoShop"
            onClick={() => {
              navigate("/shop");
            }}
          >
            매장 페이지 이동하기
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}></div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}

export default Board;
