import { useEffect, useState } from "react";
import axios from "axios";
import "../css/registerGoods.css";

function RegisterGoods() {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [information, setInformation] = useState("");
  let [fileImage, setFileImage] = useState("");
  let [category, setCategory] = useState("");

  // useEffect(() => {
  //   axios.get("/Member/myPage").then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  function registerGoodsButton() {
    axios
      .post("/saveItem", {
        itemTitle: name,
        price: price,
        content: information,
        category: category,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post("/saveItem", { thumb: formData })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const categoryRadio = (e) => {
    let gender = e.target.value;
    gender === "male"
      ? setCategory(0)
      : gender === "female"
      ? setCategory(1)
      : setCategory(2);
    console.log(category);
  };

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
              {fileImage && (
                <img className="imageUpload" alt="sample" src={fileImage} />
              )}
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  style={{ marginLeft: "1.5em" }}
                  name="imgUpload"
                  type="file"
                  accept="image/*"
                  onChange={saveFileImage}
                />
              </div>
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
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={categoryRadio}
              />
              <label for="">여성</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={categoryRadio}
              />
              <label for="">남성</label>
              <input
                type="radio"
                id="both"
                name="gender"
                value="both"
                onChange={categoryRadio}
              />
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
          <td>
            <th className="registerList">상품 정보</th>
            <th>
              <input
                className="informationInput"
                onChange={(e) => {
                  setInformation(e.target.value);
                }}
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="button">
            <button className="registerButton" onClick={registerGoodsButton}>
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
