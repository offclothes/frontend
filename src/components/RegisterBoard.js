import "../css/registerBoard.css";
import { useState } from "react";

function RegisterBoard() {
  let [shopName, setShopName] = useState("");
  let [shopAddress, setShopAddress] = useState("");
  let [shopPeriod, setShopPeriod] = useState("");
  let [shopDetail, setShopDetail] = useState("");
  return (
    <div className="registerBoardMain">
      <table width="100%">
        <tr>
          <th className="registerBoardTitle">OffClothes</th>
        </tr>
        <tr>
          <th className="registerBoardTop">폐점/할인 등록하기</th>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">매장 이름</th>
            <th>
              <input
                className="registerBoardInput"
                placeholder="매장 이름을 입력해주세요."
                onChange={(e) => {
                  setShopName(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">주소</th>
            <th>
              <input
                className="registerBoardInput"
                placeholder="주소를 입력해 주세요."
                onChange={(e) => {
                  setShopAddress(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <td className="RegisterBoardRadioButton">
              <input type="radio" id="close" name="board" value="close" />
              <label for=""></label>폐점
              <input type="radio" id="discount" name="board" value="discount" />
              <label for=""></label>할인
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">기간</th>
            <th>
              <input
                className="registerBoardInput"
                placeholder="기간을 입력해 주세요."
                onChange={(e) => {
                  setShopPeriod(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">내용</th>
            <th>
              <input
                className="detailInput"
                onChange={(e) => {
                  setShopDetail(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="registerBoardButton">
            <button
              className="registerBoardBtn"
              onClick={() => {
                console.log(shopName, shopAddress, shopPeriod, shopDetail);
              }}
            >
              등록
            </button>
            <button className="cancelBoardBtn">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RegisterBoard;
