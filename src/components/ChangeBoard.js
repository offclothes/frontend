import "../css/changeBoard.css";

function ChangeBoard() {
  return (
    <div className="changeBoardMain">
      <table width="100%">
        <tr>
          <th className="changeBoardTitle">OffClothes</th>
        </tr>
        <tr>
          <th className="changeBoardTop">폐점/할인 등록하기</th>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">매장 이름</th>
            <th>
              <input
                className="changeBoardInput"
                value="매장 이름을 입력해 주세요."
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">대표 이미지</th>
            <th>
              <button className="changeBoardImageUpload"></button>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">주소</th>
            <th>
              <input
                className="changeBoardInput"
                value="주소를 입력해 주세요."
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
                value="기간을 입력해 주세요."
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="changeBoardList">내용</th>
            <th>
              <input className="changeDetailInput"></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="changeBoardButton">
            <button className="changeBoardBtn">수정</button>
            <button className="cancelChangeBoardBtn">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ChangeBoard;
