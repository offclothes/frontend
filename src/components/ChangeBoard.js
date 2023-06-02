import "../css/changeBoard.css";
import { useState } from "react";

function ChangeBoard() {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [period, setPeriod] = useState("");
  let [detail, setDetail] = useState("");
  return (
    <div className="changeBoardMain">
      <table width="100%">
        <tr>
          <th className="changeBoardTitle">OffClothes</th>
        </tr>
        <tr>
          <th className="changeBoardTop">폐점/할인 수정하기</th>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">제목</th>
            <th>
              <input
                className="changeBoardInput"
                placeholder="제목을 입력해 주세요."
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>

        <tr>
          <td>
            <th className="changeBoardList">주소</th>
            <th>
              <input
                className="changeBoardInput"
                placeholder="주소를 입력해 주세요."
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <td className="changeBoardRadioButton">
              <input type="radio" id="close" name="board" value="close" />
              <label for=""></label>폐점
              <input type="radio" id="discount" name="board" value="discount" />
              <label for=""></label>할인
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">기간</th>
            <th>
              <input
                className="changeBoardInput"
                placeholder="기간을 입력해 주세요."
                onChange={(e) => {
                  setPeriod(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">내용</th>
            <th>
              <input
                className="changeDetailInput"
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="changeBoardButton">
            <button
              className="changeBoardBtn"
              onClick={() => {
                console.log(name, address, period, detail);
              }}
            >
              수정
            </button>
            <button className="cancelChangeBoardBtn">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ChangeBoard;
