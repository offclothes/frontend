import { useState } from "react";
import "../css/registerGoods.css";

function RegisterGoods() {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  return (
    <div className="registerMain">
      <table width="100%">
        <tr>
          <th className="title1">OffClothes</th>
        </tr>
        <tr>
          <th className="top">상품 등록</th>
        </tr>
        <tr>
          <td>
            <th className="registerList">상품 이름</th>
            <th>
              <input
                className="input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerList">메인 이미지 업로드</th>
            <th>
              <button className="imageUpload"></button>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerList">추가 이미지 업로드</th>
            <th>
              <button className="imageUpload1"></button>
            </th>
            <th>
              <button className="imageUpload2"></button>
            </th>
            <th>
              <button className="imageUpload3"></button>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerList">카테고리</th>
            <td className="radioButton">
              <input type="radio" id="female" name="gender" value="female" />
              <label for="">여성</label>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="">남성</label>
              <input type="radio" id="both" name="gender" value="both" />
              <label for="">공용</label>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerList">가격</th>
            <th>
              <input
                className="input"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="button">
            <button
              className="registerButton"
              onClick={() => {
                //axios로 서버에 값 보내기
                console.log(name, price);
              }}
            >
              등록
            </button>
            <button className="cancelButton">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RegisterGoods;
