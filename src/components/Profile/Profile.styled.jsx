import styled from '@emotion/styled';

export const Profile = styled.div`
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #bfbfbf;
    margin: 20px auto 0 ;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  padding-top: 20px;
  padding-bottom: 20px;
  img {
    width: 100px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #000000;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: #888888;
  margin-bottom: 20px;
`;

export const Location = styled.p`
  color: #888888;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr); 
  /* gap: 10px; */
  background-color: #f0f0f0;
  
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #e0e0e0;
    border: 1px solid #bfbfbf;
    p{
        width: fit-content;
        margin: 0;
        text-align: center;
    }
  }
`;

/*
    <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
*/
