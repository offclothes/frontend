import "../css/registerBoard.css";

function RegisterBoard() {
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
                value="매장 이름을 입력해 주세요."
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">대표 이미지</th>
            <th>
              <button className="BoardImageUpload"></button>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">주소</th>
            <th>
              <input
                className="registerBoardInput"
                value="주소를 입력해 주세요."
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
                value="기간을 입력해 주세요."
              ></input>
            </th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="registerBoardList">내용</th>
            <th>
              <input className="detailInput"></input>
            </th>
          </td>
        </tr>
        <tr>
          <td className="registerBoardButton">
            <button className="registerBoardBtn">등록</button>
            <button className="cancelBoardBtn">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default RegisterBoard;
