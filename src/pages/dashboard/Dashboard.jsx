import { useClippings } from "../../hooks/myClippings";

import * as S from "./styles";

function Dashboard() {
  const { clippings } = useClippings();

  return (
    <div>
      {clippings.split("==========").map((item, i) => (
        <S.Container key={i}>{item}</S.Container>
      ))}
    </div>
  );
}

export default Dashboard;
