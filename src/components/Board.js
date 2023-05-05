import { useNavigate } from "react-router-dom";
import "../css/board.css";

function Board() {
  let navigate = useNavigate();
  return (
    <div className="boardMain">
      <div className="boardTop">
        <button className="boardClosureButton">폐점</button>
        <button className="boardDiscountButton">할인</button>
      </div>
      <div>
        <div className="boardList">
          <button className="boardImage"></button>
          <div className="boardDetail">
            <p className="boardName">MARITHÉ</p>
            <p>주소 : 경기도 안양시 만안구 성결대학로</p>
            <p>
              내용 : 부득이한 사정으로 가게 문을 닫게 되었습니다. 남아있는
              재고는 싸게 팔 예정이오니 많은 관심 부탁드립니다.
            </p>
            <p>기간 : 20xx년 xx월 xx일 까지</p>
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
        </div>
        <hr />
        <div className="boardList">
          <button className="boardImage"></button>
          <div className="boardDetail">
            <p className="boardName">MARITHÉ</p>
            <p>주소 : 경기도 안양시 만안구 성결대학로</p>
            <p>
              내용 : 부득이한 사정으로 가게 문을 닫게 되었습니다. 남아있는
              재고는 싸게 팔 예정이오니 많은 관심 부탁드립니다.
            </p>
            <p>기간 : 20xx년 xx월 xx일 까지</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
