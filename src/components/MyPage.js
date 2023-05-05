import "../css/myPage.css";

function MyPage() {
  return (
    <div className="myPageMain">
      <table width="100%">
        <tr>
          <th className="myPageTitle">OffClothes</th>
        </tr>
        <tr>
          <th className="myPageTop">My Page</th>
        </tr>
        <hr />
        <tr>
          <td>
            <th className="myPageEssential">필수 정보</th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">이름</th>
            <td>
              <input
                className="myPageInput"
                placeholder=" 이름을 입력해 주세요."
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">아이디</th>
            <td>
              <input
                className="myPageInput"
                placeholder=" 아이디를 입력해 주세요."
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">닉네임</th>
            <td>
              <input
                className="myPageInput"
                placeholder=" 닉네임을 입력해 주세요."
              ></input>
            </td>
          </td>
        </tr>
        <hr />
        <tr>
          <td>
            <th className="myPageSelection">선택 정보</th>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">나이</th>
            <td>
              <input
                className="myPageInput"
                placeholder=" 나이를 입력해 주세요."
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">성별</th>
            <td>
              <input
                className="myPageRadio"
                type="radio"
                id="myPageFemale"
                name="gender"
                value="myPageFemale"
              />
              <label for="">여성</label>
              <input
                className="myPageRadio"
                type="radio"
                id="myPageMale"
                name="gender"
                value="myPageMale"
              />
              <label for="">남성</label>
            </td>
          </td>
        </tr>
        <tr>
          <td>
            <th className="myPageList">키</th>
            <td>
              <input
                className="myPageInput"
                placeholder=" 키를 입력해 주세요."
              ></input>
            </td>
          </td>
        </tr>
        <tr>
          <td className="button">
            <button className="registerButton">저장</button>
            <button className="cancelButton">취소</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default MyPage;
