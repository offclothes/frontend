import "../css/changeGoods.css";

function ChangeGoods() {
  return (
    <div className="changeGoodsMain">
      <table width="100%">
        <tr>
          <th className="changeGoodsTitle">OffClothes</th>
        </tr>
        <tr>
          <th className="changeGoodsTop">상품 등록</th>
        </tr>
        <tr>
          <td>
            <th className="changeGoodsList">상품 이름</th>
            <th>
              <input className="changeGoodsInput"></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeGoodsList">메인 이미지 업로드</th>
            <th>
              <button className="ChangeGoodsImageUpload"></button>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeGoodsList">추가 이미지 업로드</th>
            <th>
              <button className="ChangeGoodsImageUpload1"></button>
            </th>
            <th>
              <button className="ChangeGoodsImageUpload2"></button>
            </th>
            <th>
              <button className="ChangeGoodsImageUpload3"></button>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeGoodsList">카테고리</th>
            <td className="ChangeGoodsRadioButton">
              <input type="radio" id="female" name="gender" value="female" />
              <label for=""></label>여성
              <input type="radio" id="male" name="gender" value="male" />
              <label for=""></label>남성
              <input type="radio" id="both" name="gender" value="both" />
              <label for=""></label>공용
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeGoodsList">가격</th>
            <th>
              <input className="changeGoodsInput"></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="ChangeGoodsButton">
            <button className="changeGoodsRegisterButton">수정</button>
            <button className="changeGoodsCancelButton">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ChangeGoods;
